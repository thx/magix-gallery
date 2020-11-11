/**
 * 缩略图+预览
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
let Active; //优化大量预览

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;

        //初始化时保存一份当前数据的快照
        that.updater.snapshot();

        that.assign(extra);

        that.on('destroy', () => {
            clearTimeout(that.timer);
            $('#pic_preview_' + that.id).remove();
        });
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        // 语义化展示类型
        let type;

        // 兼容历史api，映射成语义方便处理）
        //      format，不配置默认展示为文字
        //          2：图片
        //          4：视频
        //          5：文字链
        //          3：flash
        //          9：flash
        //          10：html，iframe展示
        //          11：直播（封面图）也是图片
        //          23：套图（大图+小图
        if (extra.format) {
            let format = +extra.format || 5;
            let map = {
                'image': [2, 11],
                'flash': [3, 9],
                'video': [4],
                'text': [5],
                'iframe': [10]
            }
            for (let t in map) {
                if (map[t].indexOf(format) > -1) {
                    type = t;
                }
            }
        } else {
            type = extra.type || 'text';
        }

        that.updater.set({
            viewId: that.id,
            placement: extra.placement || 'right', //展示位置，左边 or 右边
            preview: (extra.preview + '' !== 'false'), //是否需要预览
            type,
            url: extra.url,
            clickUrl: extra.clickUrl, //图点击跳转外链，没有可不配
            width: +extra.width, // 预览展示尺寸，图片文案可不配置，其余必填
            height: +extra.height,
            maxWidth: +extra.maxWidth || 100, // 缩略图尺寸，默认100
            maxHeight: +extra.maxHeight || 100,
            previewData: $.extend(true, {}, extra.previewData),
            previewView: extra.previewView || ''
        })

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },

    render() {
        let that = this;
        that.updater.digest({});

        if (window.IntersectionObserver) {
            let observer = new IntersectionObserver(changes => {
                changes.forEach((t) => {
                    let target = t.target;
                    if (t.isIntersecting || (t.intersectionRatio > 0)) {
                        that.thumbnail();
                        observer.unobserve(target);
                    };
                })
            }, {
                rootMargin: '10px 0px'
            });

            observer.observe(document.querySelector('#' + that.id));

            that.capture('observer', {
                destroy() {
                    observer.disconnect();
                }
            });
        } else {
            // 直接加载
            that.thumbnail();
        }
    },

    thumbnail() {
        let { type, url, maxWidth, maxHeight, width, height, clickUrl } = this.updater.get();

        let thumbnail = '';
        switch (type) {
            case 'image':
                thumbnail = `<img class="@index.less:img" src="${url}"/>`;
                break;
            case 'flash':
                thumbnail = 'flash已下线';
            case 'video':
                thumbnail = `<video src="${url}" class="@index.less:video"></video>`;
                break;
            case 'text':
                thumbnail = $(`<div class="@index.less:text" style="max-width: ${maxWidth}px; max-height: ${maxHeight}px;"></div>`);
                // 纯文案展示（包括可执行脚本）
                thumbnail[0].innerText = url;
                break;
            case 'iframe':
                let scale = Math.min(maxWidth / width, maxHeight / height);
                let frameWidth = width * scale,
                    frameHeight = height * scale;
                thumbnail = `<div class="@index.less:iframe-wrapper" style="width: ${frameWidth}px; height: ${frameHeight}px;">
                                <iframe src="${url}" class="@index.less:iframe"
                                    sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
                                    style="transform:scale(${scale})"
                                    width="${width}" 
                                    height="${height}" 
                                    frameborder="0"
                                    scrolling="no" 
                                    marginheight="0" 
                                    marginwidth="0" 
                                    border="0"></iframe>
                            </div>`;
                break;
        }

        // 跳转外链
        if (clickUrl) {
            thumbnail = $(thumbnail).wrap(`<a href="${clickUrl}" target="_blank" rel="noopener noreferrer"></a>`);
        }

        $('#' + this.id + '_inner').html(thumbnail);
    },

    'preview<mouseover>'(e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }
        this.show();
    },

    show() {
        let that = this;
        let gap = 10;

        //优化大量预览的显示
        if (Active && Active != that) {
            Active.immediatelyHide();
        }
        Active = that;
        clearTimeout(that.timer);

        let getStyles = (width, height, placement = 'right') => {
            let target = $('#' + that.id + ' .@index.less:outer');
            let offset = target.offset();
            let left = offset.left,
                top = offset.top;

            // 对最大范围进行修正，不超过屏幕可视范围
            let win = $(window);
            let winWidth = win.width(),
                winHeight = win.height(),
                winScroll = win.scrollTop();

            if (top < winScroll) {
                top = winScroll;
            }

            // 可见宽度范围
            let rangeWidth = 0;
            switch (placement) {
                case 'left':
                    // 左边
                    rangeWidth = offset.left - gap;
                    break;
                case 'right':
                    // 右边
                    rangeWidth = winWidth - (offset.left + target.outerWidth() + gap);
                    break;
            }

            if (rangeWidth < width) {
                height = height * (rangeWidth / width);
                width = rangeWidth;
            }
            if (height > winHeight) {
                width = width * winHeight / height;
                height = winHeight;
            }
            if (winScroll + winHeight < top + height) {
                // 有部分不可见
                let back = Math.min(
                    (top + height - winScroll - winHeight),
                    top - winScroll
                )
                top = top - back;
            }

            // 计算left
            switch (placement) {
                case 'left':
                    // 左边
                    left = left - width - gap;
                    break;
                case 'right':
                    // 右边
                    left = left + target.outerWidth() + gap;
                    break;
            }

            return {
                display: 'block',
                left,
                top,
                width,
                height: !height ? 'auto' : height //文案没有高度
            }
        }

        let data = that.updater.get();
        let previewData = {};
        if ($.isEmptyObject(data.previewData)) {
            previewData = data;
        } else {
            // 1. 预览内容≠缩略图内容
            //  previewData: {
            //     type,
            //     url,
            //     width,
            //     height
            //  }
            // 2. 传入自定义preview-view的data
            previewData = data.previewData;
        }

        if (data.previewView) {
            // 自定义预览页面
            let floatingLayer = $('#pic_preview_' + that.id);
            if (!floatingLayer.length) {
                floatingLayer = $(`<div id="pic_preview_${that.id}" class="@index.less:pic-preview mx-shadow"></div>`).appendTo('body');
            }

            let customViewId = `pic_preview_${that.id}_custom_view`;
            floatingLayer.empty().append(`<div id="${customViewId}"></div>`);
            let width = +previewData.width || 200,
                height = +previewData.height || 200;
            let scale = +previewData.scale || 1;
            width = width * scale;
            height = height * scale;
            let styles = getStyles(width, height, data.placement);
            floatingLayer.css(styles);
            that.owner.mountVframe(customViewId, data.previewView, previewData);
        } else {
            let { type, url } = previewData;
            if (!url || !type || (type == 'flash')) {
                // 不预览的情况
                // 1. 没有内容
                // 2. 不支持的type类型
                // 3. flash不预览
                return;
            }

            let next = (width, height) => {
                let scale = +previewData.scale || 1;
                width = width * scale;
                height = height * scale;

                // 完整修正后的展示尺寸
                let styles = getStyles(width, height, data.placement);

                let inner = '';
                switch (type) {
                    case 'image':
                        inner = $(`<img src="${url}" class="@index.less:preview-inner"/>`);
                        break;
                    case 'video':
                        inner = $(`<video src="${url}" class="@index.less:preview-inner"
                        controls="controls" autoplay="autoplay"></video>`);
                        break;
                    case 'text':
                        inner = $(`<div class="@index.less:preview-inner"></div>`);
                        inner[0].innerText = url;
                        break;
                    case 'iframe':
                        let originWidth = previewData.width,
                            originHeight = previewData.height;
                        let frameScale = (styles.width - gap * 2) / originWidth;
                        inner = $(`<div class="@index.less:preview-inner">
                            <iframe src="${url}"
                                sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
                                style="transform: scale(${frameScale}); transform-origin: left top;"
                                width="${originWidth}" 
                                height="${originHeight}"
                                frameborder="0" 
                                scrolling="yes" 
                                marginheight="0" 
                                marginwidth="0" 
                                border="0"></iframe>
                        </div>`);
                        break;
                }

                let floatingLayer = $('#pic_preview_' + that.id);
                if (!floatingLayer.length) {
                    floatingLayer = $('<div id="pic_preview_' + that.id + '" class="@index.less:pic-preview mx-shadow"></div>').appendTo('body');
                }
                floatingLayer.empty().append(inner).css(styles);

                // 跳转外链
                let clickUrl = data.clickUrl;
                if (clickUrl) {
                    inner.wrap(`<a href="${clickUrl}" target="_blank" rel="noopener noreferrer"></a>`);
                }
            }

            if (previewData.width && previewData.height) {
                // 预留间隔
                next(+previewData.width + gap * 2, +previewData.height + gap * 2);
            } else {
                // 只有图片和文案类型可不配置，其余必填
                // 没有配置预览宽高
                if (type == 'text') {
                    // 文案默认宽度600，高度自适应
                    next(600, 0);
                } else if (type == 'image') {
                    let img = new Image();
                    img.onload = function () {
                        next(this.width + gap * 2, this.height + gap * 2);
                    }
                    img.src = url;
                }
            }
        }
    },

    'hide<mouseout>': function (e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }
        this.hide();
    },

    hide() {
        let that = this;
        that.delayHide();

        let floatingLayer = $('#pic_preview_' + that.id);
        floatingLayer.off('mouseover.preview').on('mouseover.preview', function () {
            clearTimeout(that.timer);
            floatingLayer.off('mouseout.preview').on('mouseout.preview', function (event) {
                that.delayHide();
            })
        })
    },

    immediatelyHide() {
        let that = this;
        clearTimeout(that.timer);
        $('#pic_preview_' + that.id).empty().css({
            display: 'none'
        });
    },

    delayHide() {
        let that = this;
        clearTimeout(that.timer);
        that.timer = setTimeout(function () {
            $('#pic_preview_' + that.id).empty().css({
                display: 'none'
            });
        }, 300)
    }
});
