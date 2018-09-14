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
        });
    },
    isFlash(format) {
        return (format == 3 || format == 9);
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
        let scale, frameWidth, frameHeight; //format=10
        let xiaotuUrl = extra.xiaotuUrl,
            datuUrl = extra.datuUrl; //format=23
        if (that.isFlash(format)) {
            // flash
            url = 'flash已下线';
            clickUrl = '';
        } else if (format == 10) {
            // 创意模板，iframe必须要有高度
            scale = Math.min(+maxWidth / +width, +maxHeight / +height);
            frameWidth = width * scale;
            frameHeight = height * scale;
        } else if (format == 23) {
            // 套图
            url = extra.xiaotuUrl;
        }
        let data = {
            format,
            url,
            clickUrl,
            width,
            height,
            maxWidth,
            maxHeight,
            scale,
            frameWidth,
            frameHeight,
            xiaotuUrl,
            datuUrl
        }

        that.updater.digest(data);
    },

    'preview<mouseover>': function (e) {
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
            if (!url || !format || that.isFlash(format)) {
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
                if(height > winHeight){
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
                            controls="controls" autoplay="autoplay">
                            <i class="mc-iconfont icon">&#xe78d;</i>
                        </video>`);
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
                if (clickUrl && (format == 2 || format == 4 || format == 5 || format == 23)) {
                    // 只有文字和图片支持配置外链
                    inner.wrap(`<a href="${clickUrl}" target="_blank"></a>`);
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
