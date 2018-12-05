/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/**
 * 缩略图+预览
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-preview_index_","[mx-view*=\"mx-preview/index\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-preview_index_-holder {\n  color: #ccc;\n  font-size: 30px;\n}\n._zs_gallery_mx-preview_index_-outer {\n  display: table;\n  text-align: center;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner {\n  display: table-cell;\n  vertical-align: middle;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-img,\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-video {\n  max-width: 100%;\n  max-height: 100%;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-text {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-icon {\n  font-size: 20px;\n  color: #999;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-iframe {\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n}\n._zs_gallery_mx-preview_index_-pic-preview {\n  display: none;\n  position: absolute;\n  z-index: 99999;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border-collapse: separate;\n  background-color: #fff;\n  padding: 10px;\n}\n._zs_gallery_mx-preview_index_-pic-preview ._zs_gallery_mx-preview_index_-preview-inner {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n");
var Active; //优化大量预览
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', maxWidth = $$.maxWidth, maxHeight = $$.maxHeight, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-preview_index_-outer" style="width: ';
    $line = 1;
    $art = '=maxWidth';
    ;
    $p += ($expr = '<%=maxWidth%>', $e(maxWidth)) + 'px; height: ';
    $line = 1;
    $art = '=maxHeight';
    ;
    $p += ($expr = '<%=maxHeight%>', $e(maxHeight)) + 'px;" mx-mouseover="' + $viewId + 'preview()" mx-mouseout="' + $viewId + 'hide()"><div class="_zs_gallery_mx-preview_index_-inner" style="height: ';
    $line = 4;
    $art = '=maxHeight';
    ;
    $p += ($expr = '<%=maxHeight%>', $e(maxHeight)) + 'px;" id="';
    $line = 4;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_inner"><i mxs="_zs_gallerycy:_" class="mc-iconfont _zs_gallery_mx-preview_index_-holder">&#xe615;</i></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        that.extra = extra;
        that.on('destroy', function () {
            clearTimeout(that.timer);
            $('#pic_preview_' + that.id).remove();
        });
    },
    render: function () {
        var that = this;
        var extra = that.extra;
        // 不配置默认展示为文字
        var format = +extra.format || 5;
        // 真实展示尺寸
        var width = +extra.width, height = +extra.height;
        if (!width) {
            // 没有宽度的时候，高度给自适应
            width = 640;
            height = 0;
        }
        // 预览尺寸范围
        var maxWidth = +extra.maxWidth || 100, maxHeight = +extra.maxHeight || 100;
        var url = extra.url, clickUrl = extra.clickUrl;
        var scale, frameWidth, frameHeight;
        var xiaotuUrl = extra.xiaotuUrl, datuUrl = extra.datuUrl;
        if (format == 10) {
            // 创意模板，iframe必须要有高度
            scale = Math.min(+maxWidth / +width, +maxHeight / +height);
            frameWidth = width * scale;
            frameHeight = height * scale;
        }
        else if (format == 23) {
            // 套图，预览取小图
            url = extra.xiaotuUrl;
        }
        that.updater.digest({
            viewId: that.id,
            format: format,
            url: url,
            clickUrl: clickUrl,
            width: width,
            height: height,
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            frameWidth: frameWidth,
            frameHeight: frameHeight,
            scale: scale,
            xiaotuUrl: xiaotuUrl,
            datuUrl: datuUrl
        });
        if (window.IntersectionObserver) {
            var observer = new IntersectionObserver(function (changes) {
                changes.forEach(function (_a) {
                    var target = _a.target, isIntersecting = _a.isIntersecting;
                    if (!isIntersecting) {
                        return;
                    }
                    ;
                    that.thumbnail();
                    observer.unobserve(target);
                });
            }, {
                rootMargin: '10px 0px'
            });
            observer.observe(document.querySelector('#' + that.id));
        }
        else {
            // 直接加载
            that.thumbnail();
        }
    },
    thumbnail: function () {
        var data = this.updater.get();
        var format = data.format, url = data.url, width = data.width, height = data.height, maxWidth = data.maxWidth, maxHeight = data.maxHeight, clickUrl = data.clickUrl;
        var thumbnail = '';
        switch (format) {
            case 2: // 2：图片
            case 11: //11：直播（封面图）
            case 23: //23：套图（大图+小图）
                thumbnail = "<img class=\"_zs_gallery_mx-preview_index_-img\" src=\"" + url + "\"/>";
                break;
            case 3: // 3：flash
            case 9: // 9：flash
                thumbnail = 'flash已下线';
            case 4: //视频
                thumbnail = "<video src=\"" + url + "\" class=\"_zs_gallery_mx-preview_index_-video\"></video>";
                break;
            case 5: // 5：文字链
                thumbnail = $("<div class=\"_zs_gallery_mx-preview_index_-text\" style=\"max-width: " + maxWidth + "px;\"></div>");
                // 纯文案展示
                thumbnail[0].innerText = url;
                break;
            case 10: //html 模板
                var frameWidth = data.frameWidth, frameHeight = data.frameHeight, scale = data.scale;
                thumbnail = "<div style=\"width: " + frameWidth + "px; height: " + frameHeight + "px; overflow: hidden\">\n                                <iframe src=\"" + url + "\" class=\"_zs_gallery_mx-preview_index_-iframe\"\n                                    style=\"transform:scale(" + scale + ")\"\n                                    width=\"" + width + "\" \n                                    height=\"" + height + "\" \n                                    frameborder=\"0\"\n                                    scrolling=\"no\" \n                                    marginheight=\"0\" \n                                    marginwidth=\"0\" \n                                    border=\"0\"></iframe>\n                            </div>";
                break;
        }
        if (clickUrl) {
            thumbnail = $(thumbnail).wrap("<a href=\"" + clickUrl + "\" target=\"_blank\" rel=\"noopener noreferrer\"></a>");
        }
        $('#' + this.id + '_inner').html(thumbnail);
    },
    'preview<mouseover>': function (e) {
        var that = this;
        if (!Magix.inside(e.relatedTarget, e.eventTarget)) {
            //优化大量预览的显示
            if (Active && Active != that) {
                Active.immediatelyHide();
            }
            Active = that;
            clearTimeout(that.timer);
            var data_1 = that.updater.get();
            var target = $(e.eventTarget);
            var offset = target.offset();
            var format_1 = data_1.format, url_1 = data_1.url, datuUrl_1 = data_1.datuUrl, //套图的大图展示，特殊处理
            clickUrl_1 = data_1.clickUrl, width_1 = +data_1.width + 20, height_1 = +data_1.height + 20;
            var left_1 = offset.left + target.outerWidth() + 10, top_1 = offset.top;
            if (!url_1 || !format_1 || (format_1 == 3 || format_1 == 9)) {
                // flash不预览
                return;
            }
            var next_1 = function () {
                // 对最大范围进行修正，不超过屏幕可视范围
                var win = $(window);
                var winWidth = win.width(), winHeight = win.height(), winScroll = win.scrollTop();
                var rangeWidth = winWidth - left_1;
                if (rangeWidth < width_1) {
                    height_1 = height_1 * (rangeWidth / width_1);
                    width_1 = rangeWidth;
                }
                if (height_1 > winHeight) {
                    width_1 = width_1 * winHeight / height_1;
                    height_1 = winHeight;
                }
                if (winScroll + winHeight < top_1 + height_1) {
                    // 有部分不可见
                    var back = Math.min((top_1 + height_1 - winScroll - winHeight), top_1 - winScroll);
                    top_1 = top_1 - back;
                }
                var inner = '';
                switch (+format_1) {
                    case 2: // 图片
                    case 11: //直播，显示为封面图
                        inner = $("<img src=\"" + url_1 + "\" class=\"_zs_gallery_mx-preview_index_-preview-inner\"/>");
                        break;
                    case 4: // 视频
                        inner = $("<video src=\"" + url_1 + "\" class=\"_zs_gallery_mx-preview_index_-preview-inner\"\n                            controls=\"controls\" autoplay=\"autoplay\"></video>");
                        break;
                    case 5: // 文字链
                        inner = $("<div class=\"_zs_gallery_mx-preview_index_-preview-inner\"></div>");
                        // 纯文案展示
                        inner[0].innerText = url_1;
                        break;
                    case 10: // 创意模板
                        var originWidth = +data_1.width, originHeight = +data_1.height;
                        var scale = (width_1 - 20) / originWidth;
                        inner = $("<div class=\"_zs_gallery_mx-preview_index_-preview-inner\">\n                            <iframe src=\"" + url_1 + "\"\n                                style=\"transform: scale(" + scale + "); transform-origin: left top;\"\n                                width=\"" + originWidth + "\" \n                                height=\"" + originHeight + "\"\n                                frameborder=\"0\" \n                                scrolling=\"no\" \n                                marginheight=\"0\" \n                                marginwidth=\"0\" \n                                border=\"0\"></iframe>\n                        </div>");
                        break;
                    case 23: // 套图 
                        inner = $("<div class=\"clearfix\">\n                            <img src=\"" + url_1 + "\" class=\"fl mr10\"/>    \n                            <img src=\"" + datuUrl_1 + "\" class=\"fl\"/>\n                        </div>");
                        break;
                }
                var floatingLayer = $('#pic_preview_' + that.id);
                if (!floatingLayer.length) {
                    floatingLayer = $('<div id="pic_preview_' + that.id + '" class="_zs_gallery_mx-preview_index_-pic-preview"></div>').appendTo('body');
                }
                floatingLayer.empty().append(inner);
                if (clickUrl_1) {
                    // 只有文字和图片支持配置外链
                    inner.wrap("<a href=\"" + clickUrl_1 + "\" target=\"_blank\" rel=\"noopener noreferrer\"></a>");
                }
                floatingLayer.css({
                    width: width_1,
                    height: !data_1.height ? 'auto' : height_1,
                    left: left_1,
                    top: top_1,
                    display: 'block'
                });
            };
            if (!datuUrl_1) {
                next_1();
            }
            else {
                //注意onload 放在img.src 前面用来兼容IE
                var img = new Image();
                img.onload = function () {
                    width_1 = width_1 + 10 + this.width;
                    height_1 = Math.max(height_1, (this.height + 20));
                    next_1();
                };
                img.src = datuUrl_1;
            }
        }
    },
    'hide<mouseout>': function (e) {
        var that = this;
        if (!Magix.inside(e.relatedTarget, e.eventTarget)) {
            that.delayHide();
            var floatingLayer_1 = $('#pic_preview_' + that.id);
            floatingLayer_1.off('mouseover.preview').on('mouseover.preview', function () {
                clearTimeout(that.timer);
                floatingLayer_1.off('mouseout.preview').on('mouseout.preview', function (event) {
                    that.delayHide();
                });
            });
        }
    },
    immediatelyHide: function () {
        var that = this;
        clearTimeout(that.timer);
        $('#pic_preview_' + that.id).empty().css({
            display: 'none'
        });
    },
    delayHide: function () {
        var that = this;
        clearTimeout(that.timer);
        that.timer = setTimeout(function () {
            $('#pic_preview_' + that.id).empty().css({
                display: 'none'
            });
        }, 300);
    }
});

});