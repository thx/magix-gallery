/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_gallery_mx-preview_index_","[mx-view*=\"mx-preview/index\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-preview_index_-outer {\n  display: table;\n  text-align: center;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner {\n  display: table-cell;\n  vertical-align: middle;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-img,\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-video {\n  max-width: 100%;\n  max-height: 100%;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-text {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-icon {\n  font-size: 20px;\n  color: #999;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-iframe {\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n}\n._zs_gallery_mx-preview_index_-pic-preview {\n  display: none;\n  position: absolute;\n  z-index: 99999;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border-collapse: separate;\n  background-color: #fff;\n  padding: 10px;\n}\n._zs_gallery_mx-preview_index_-pic-preview ._zs_gallery_mx-preview_index_-preview-inner {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n");
var Active; //优化大量预览
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, maxWidth = $$.maxWidth, maxHeight = $$.maxHeight, clickUrl = $$.clickUrl, format = $$.format, url = $$.url, frameWidth = $$.frameWidth, frameHeight = $$.frameHeight, scale = $$.scale, width = $$.width, height = $$.height; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-preview_index_-outer" style="width: ';
    $line = 1;
    $art = '=maxWidth';
    ;
    $p += '' + ($expr = '<%=maxWidth%>', $e(maxWidth)) + 'px; height: ';
    $line = 1;
    $art = '=maxHeight';
    ;
    $p += '' + ($expr = '<%=maxHeight%>', $e(maxHeight)) + 'px;" mx-mouseover="' + $viewId + 'preview()" mx-mouseout="' + $viewId + 'hide()"><div class="_zs_gallery_mx-preview_index_-inner" style="height: ';
    $line = 4;
    $art = '=maxHeight';
    ;
    $p += '' + ($expr = '<%=maxHeight%>', $e(maxHeight)) + 'px;">';
    $line = 5;
    $art = 'if clickUrl';
    ;
    $p += '';
    $expr = '<%if(clickUrl){%>';
    if (clickUrl) {
        ;
        $p += '<a href="';
        $line = 6;
        $art = '=clickUrl';
        ;
        $p += '' + ($expr = '<%=clickUrl%>', $e(clickUrl)) + '" target="_blank" rel="noopener noreferrer">';
        $line = 7;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 9;
    $art = 'if format==2 || format==11 || format==23';
    ;
    $p += '';
    $expr = '<%if(format==2||format==11||format==23){%>';
    if (format == 2 || format == 11 || format == 23) {
        ;
        $p += '<img class="_zs_gallery_mx-preview_index_-img" src="';
        $line = 10;
        $art = '=url';
        ;
        $p += '' + ($expr = '<%=url%>', $e(url)) + '"/>';
        $line = 11;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 14;
    $art = 'if format==5 || format==3 || format==9';
    ;
    $p += '';
    $expr = '<%if(format==5||format==3||format==9){%>';
    if (format == 5 || format == 3 || format == 9) {
        ;
        $p += '<div class="_zs_gallery_mx-preview_index_-text" style="max-width: ';
        $line = 15;
        $art = '=maxWidth';
        ;
        $p += '' + ($expr = '<%=maxWidth%>', $e(maxWidth)) + 'px;">';
        $line = 15;
        $art = '=url';
        ;
        $p += '' + ($expr = '<%=url%>', $e(url)) + '</div>';
        $line = 16;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 19;
    $art = 'if format==4';
    ;
    $p += '';
    $expr = '<%if(format==4){%>';
    if (format == 4) {
        ;
        $p += '<video src="';
        $line = 20;
        $art = '=url';
        ;
        $p += '' + ($expr = '<%=url%>', $e(url)) + '" class="_zs_gallery_mx-preview_index_-video"><i mxs="_zs_gallerybL:_" class="mc-iconfont _zs_gallery_mx-preview_index_-icon">&#xe78d;</i></video>';
        $line = 23;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 26;
    $art = 'if format==10';
    ;
    $p += '';
    $expr = '<%if(format==10){%>';
    if (format == 10) {
        ;
        $p += '<div style="width: ';
        $line = 27;
        $art = '=frameWidth';
        ;
        $p += '' + ($expr = '<%=frameWidth%>', $e(frameWidth)) + 'px; height: ';
        $line = 27;
        $art = '=frameHeight';
        ;
        $p += '' + ($expr = '<%=frameHeight%>', $e(frameHeight)) + 'px; overflow: hidden"><iframe src="';
        $line = 28;
        $art = '=url';
        ;
        $p += '' + ($expr = '<%=url%>', $e(url)) + '" class="_zs_gallery_mx-preview_index_-iframe" style="transform:scale(';
        $line = 29;
        $art = '=scale';
        ;
        $p += '' + ($expr = '<%=scale%>', $e(scale)) + ')" width="';
        $line = 30;
        $art = '=width';
        ;
        $p += '' + ($expr = '<%=width%>', $e(width)) + '" height="';
        $line = 31;
        $art = '=height';
        ;
        $p += '' + ($expr = '<%=height%>', $e(height)) + '" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" border="0"></iframe></div>';
        $line = 38;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 39;
    $art = 'if clickUrl';
    ;
    $p += '';
    $expr = '<%if(clickUrl){%>';
    if (clickUrl) {
        ;
        $p += '</a>';
        $line = 41;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div>';
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
    isFlash: function (format) {
        return (format == 3 || format == 9);
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
        var scale, frameWidth, frameHeight; //format=10
        var xiaotuUrl = extra.xiaotuUrl, datuUrl = extra.datuUrl; //format=23
        if (that.isFlash(format)) {
            // flash
            url = 'flash已下线';
            clickUrl = '';
        }
        else if (format == 10) {
            // 创意模板，iframe必须要有高度
            scale = Math.min(+maxWidth / +width, +maxHeight / +height);
            frameWidth = width * scale;
            frameHeight = height * scale;
        }
        else if (format == 23) {
            // 套图
            url = extra.xiaotuUrl;
        }
        var data = {
            format: format,
            url: url,
            clickUrl: clickUrl,
            width: width,
            height: height,
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            scale: scale,
            frameWidth: frameWidth,
            frameHeight: frameHeight,
            xiaotuUrl: xiaotuUrl,
            datuUrl: datuUrl
        };
        that.updater.digest(data);
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
            if (!url_1 || !format_1 || that.isFlash(format_1)) {
                // flash不预览
                return;
            }
            var next_1 = function () {
                // 对最大范围进行修正
                var win = $(window);
                var rangeWidth = win.width() - left_1;
                if (rangeWidth < width_1) {
                    height_1 = height_1 * (rangeWidth / width_1);
                    width_1 = rangeWidth;
                }
                var winHeight = win.height(), winScroll = win.scrollTop();
                if (winScroll + winHeight < top_1 + height_1) {
                    // 有部分不可见
                    var back = Math.min((top_1 + height_1 - winScroll - winHeight), top_1 - winScroll);
                    top_1 = top_1 - back;
                }
                var inner = '';
                switch (+format_1) {
                    case 2: // 图片
                    case 11://直播，显示为封面图
                        inner = $("<img src=\"" + url_1 + "\" class=\"_zs_gallery_mx-preview_index_-preview-inner\"/>");
                        break;
                    case 4:// 视频
                        inner = $("<video src=\"" + url_1 + "\" class=\"_zs_gallery_mx-preview_index_-preview-inner\"\n                            controls=\"controls\" autoplay=\"autoplay\">\n                            <i class=\"mc-iconfont icon\">&#xe78d;</i>\n                        </video>");
                        break;
                    case 5:// 文字链
                        inner = $("<div class=\"_zs_gallery_mx-preview_index_-preview-inner\"></div>");
                        // 纯文案展示
                        inner[0].innerText = url_1;
                        break;
                    case 10:// 创意模板
                        var originWidth = +data_1.width, originHeight = +data_1.height;
                        var scale = (width_1 - 20) / originWidth;
                        inner = $("<div class=\"_zs_gallery_mx-preview_index_-preview-inner\">\n                            <iframe src=\"" + url_1 + "\"\n                                style=\"transform: scale(" + scale + "); transform-origin: left top;\"\n                                width=\"" + originWidth + "\" \n                                height=\"" + originHeight + "\"\n                                frameborder=\"0\" \n                                scrolling=\"no\" \n                                marginheight=\"0\" \n                                marginwidth=\"0\" \n                                border=\"0\"></iframe>\n                        </div>");
                        break;
                    case 23:// 套图 
                        inner = $("<div class=\"clearfix\">\n                            <img src=\"" + url_1 + "\" class=\"fl mr10\"/>    \n                            <img src=\"" + datuUrl_1 + "\" class=\"fl\"/>\n                        </div>");
                        break;
                }
                var floatingLayer = $('#pic_preview_' + that.id);
                if (!floatingLayer.length) {
                    floatingLayer = $('<div id="pic_preview_' + that.id + '" class="_zs_gallery_mx-preview_index_-pic-preview"></div>').appendTo('body');
                }
                floatingLayer.empty().append(inner);
                if (clickUrl_1 && (format_1 == 2 || format_1 == 4 || format_1 == 5 || format_1 == 23)) {
                    // 只有文字和图片支持配置外链
                    inner.wrap("<a href=\"" + clickUrl_1 + "\" target=\"_blank\"></a>");
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