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
        that.extra = extra;
        that.on('destroy', () => {
            clearTimeout(that.timer);
            $('#pic_preview_' + that.id).remove();

            that['@{scroll.wrapper}'].off('scroll.' + that.id);
        });
    },
    render() {
        let that = this;
        let extra = that.extra;

        // 不配置默认展示为文字
        let format = +extra.format || 5;

        // 真实展示尺寸
        let width = +extra.width,
            height = +extra.height;
        if (!width) {
            // 没有宽度的时候，高度给自适应
            width = 640;
            height = 0;
        }

        // 预览尺寸范围
        let maxWidth = +extra.maxWidth || 100,
            maxHeight = +extra.maxHeight || 100;

        let url = extra.url,
            clickUrl = extra.clickUrl;
        let scale, frameWidth, frameHeight;
        let xiaotuUrl = extra.xiaotuUrl,
            datuUrl = extra.datuUrl;
        if (format == 10) {
            // 创意模板，iframe必须要有高度
            scale = Math.min(+maxWidth / +width, +maxHeight / +height);
            frameWidth = width * scale;
            frameHeight = height * scale;
        } else if (format == 23) {
            // 套图，预览取小图
            url = extra.xiaotuUrl;
        }

        that.updater.digest({
            viewId: that.id,
            format,
            url,
            clickUrl,
            width,
            height,
            maxWidth,
            maxHeight,
            frameWidth,
            frameHeight,
            scale,
            xiaotuUrl,
            datuUrl
        });

        if(window.IntersectionObserver){
            var observer = new IntersectionObserver(changes => {
                changes.forEach(({ target, isIntersecting }) => {
                    if (!isIntersecting) {
                        return;
                    };
                    that.thumbnail();
                    observer.unobserve(target);
                })
            }, {
                rootMargin: '10px 0px' 
            });
            observer.observe(document.querySelector('#' + that.id));
        }else{
            // 直接加载
            that.thumbnail();
        }
    },

    thumbnail() {
        let data = this.updater.get();
        let format = data.format,
            url = data.url,
            width = data.width,
            height = data.height,
            maxWidth = data.maxWidth,
            maxHeight = data.maxHeight,
            clickUrl = data.clickUrl;

        let thumbnail = '';
        switch (format) {
            case 2: // 2：图片
            case 11: //11：直播（封面图）
            case 23: //23：套图（大图+小图）
                thumbnail = `<img class="@index.less:img" src="${url}"/>`;
                break;
            case 3: // 3：flash
            case 9: // 9：flash
                thumbnail = 'flash已下线';
            case 4: //视频
                thumbnail = `<video src="${url}" class="@index.less:video"></video>`;
                break;
            case 5: // 5：文字链
                thumbnail = $(`<div class="@index.less:text" style="max-width: ${maxWidth}px;"></div>`);
                // 纯文案展示
                thumbnail[0].innerText = url;
                break;
            case 10: //html 模板
                let frameWidth = data.frameWidth,
                    frameHeight = data.frameHeight,
                    scale = data.scale;
                thumbnail = `<div style="width: ${frameWidth}px; height: ${frameHeight}px; overflow: hidden">
                                <iframe src="${url}" class="@index.less:iframe"
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

        if (clickUrl) {
            thumbnail = $(thumbnail).wrap(`<a href="${clickUrl}" target="_blank" rel="noopener noreferrer"></a>`);
        }

        $('#' + this.id + '_inner').html(thumbnail);
    },

    'preview<mouseover>'(e) {
        let that = this;
        if (!Magix.inside(e.relatedTarget, e.eventTarget)) {
            //优化大量预览的显示
            if (Active && Active != that) {
                Active.immediatelyHide();
            }
            Active = that;
            clearTimeout(that.timer);

            let data = that.updater.get();
            let target = $(e.eventTarget);
            let offset = target.offset();
            let format = data.format,
                url = data.url,
                datuUrl = data.datuUrl, //套图的大图展示，特殊处理
                clickUrl = data.clickUrl,
                width = +data.width + 20,
                height = +data.height + 20;

            let left = offset.left + target.outerWidth() + 10,
                top = offset.top;
            if (!url || !format || (format == 3 || format == 9)) {
                // flash不预览
                return;
            }

            let next = () => {
                // 对最大范围进行修正，不超过屏幕可视范围
                let win = $(window);
                let winWidth = win.width(),
                    winHeight = win.height(),
                    winScroll = win.scrollTop();
                let rangeWidth = winWidth - left;
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

                let inner = '';
                switch (+format) {
                    case 2: // 图片
                    case 11: //直播，显示为封面图
                        inner = $(`<img src="${url}" class="@index.less:preview-inner"/>`);
                        break;
                    case 4: // 视频
                        inner = $(`<video src="${url}" class="@index.less:preview-inner"
                            controls="controls" autoplay="autoplay"></video>`);
                        break;
                    case 5: // 文字链
                        inner = $(`<div class="@index.less:preview-inner"></div>`);
                        // 纯文案展示
                        inner[0].innerText = url;
                        break;
                    case 10: // 创意模板
                        let originWidth = +data.width,
                            originHeight = +data.height;
                        let scale = (width - 20) / originWidth;
                        inner = $(`<div class="@index.less:preview-inner">
                            <iframe src="${url}"
                                style="transform: scale(${scale}); transform-origin: left top;"
                                width="${originWidth}" 
                                height="${originHeight}"
                                frameborder="0" 
                                scrolling="no" 
                                marginheight="0" 
                                marginwidth="0" 
                                border="0"></iframe>
                        </div>`);
                        break;
                    case 23: // 套图 
                        inner = $(`<div class="clearfix">
                            <img src="${url}" class="fl mr10"/>    
                            <img src="${datuUrl}" class="fl"/>
                        </div>`);
                        break;
                }

                let floatingLayer = $('#pic_preview_' + that.id);
                if (!floatingLayer.length) {
                    floatingLayer = $('<div id="pic_preview_' + that.id + '" class="@index.less:pic-preview"></div>').appendTo('body');
                }
                floatingLayer.empty().append(inner);
                if (clickUrl) {
                    // 只有文字和图片支持配置外链
                    inner.wrap(`<a href="${clickUrl}" target="_blank" rel="noopener noreferrer"></a>`);
                }
                floatingLayer.css({
                    width,
                    height: !data.height ? 'auto' : height,
                    left,
                    top,
                    display: 'block'
                })
            }
            if (!datuUrl) {
                next();
            } else {
                //注意onload 放在img.src 前面用来兼容IE
                let img = new Image();
                img.onload = function () {
                    width = width + 10 + this.width;
                    height = Math.max(height, (this.height + 20));
                    next();
                }
                img.src = datuUrl;
            }
        }
    },

    'hide<mouseout>': function (e) {
        let that = this;
        if (!Magix.inside(e.relatedTarget, e.eventTarget)) {
            that.delayHide();

            let floatingLayer = $('#pic_preview_' + that.id);
            floatingLayer.off('mouseover.preview').on('mouseover.preview', function () {
                clearTimeout(that.timer);
                floatingLayer.off('mouseout.preview').on('mouseout.preview', function (event) {
                    that.delayHide();
                })
            })
        }
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
