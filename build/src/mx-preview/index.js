/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*md5:d26f8df89825e14487941f09716da1b5*/
/**
 * 缩略图+预览
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-preview_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-preview_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-preview/index\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-preview_index_-holder {\n  color: #ccc;\n  font-size: 30px;\n}\n._zs_gallery_mx-preview_index_-outer {\n  display: table;\n  text-align: center;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner {\n  display: table-cell;\n  vertical-align: middle;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-img,\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-video {\n  max-width: 100%;\n  max-height: 100%;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-text {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-icon {\n  font-size: 20px;\n  color: #999;\n}\n._zs_gallery_mx-preview_index_-outer ._zs_gallery_mx-preview_index_-inner ._zs_gallery_mx-preview_index_-iframe {\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n}\n._zs_gallery_mx-preview_index_-pic-preview {\n  display: none;\n  position: absolute;\n  z-index: 99999;\n  border-collapse: separate;\n  background-color: #fff;\n  padding: 10px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-preview_index_-pic-preview ._zs_gallery_mx-preview_index_-preview-inner {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n");
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
} ; var $g = '', $_temp, $p = '', maxWidth = $$.maxWidth, maxHeight = $$.maxHeight, preview = $$.preview, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-preview_index_-outer" style="width: ';
    $line = 1;
    $art = '=maxWidth';
    ;
    $p += ($expr = '<%=maxWidth%>', $e(maxWidth)) + 'px; height: ';
    $line = 1;
    $art = '=maxHeight';
    ;
    $p += ($expr = '<%=maxHeight%>', $e(maxHeight)) + 'px;" ';
    $line = 2;
    $art = 'if preview';
    ;
    $expr = '<%if (preview) {%>';
    if (preview) {
        ;
        $p += ' mx-mouseover="' + $viewId + 'preview()" mx-mouseout="' + $viewId + 'hide()" ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '><div class="_zs_gallery_mx-preview_index_-inner" style="height: ';
    $line = 3;
    $art = '=maxHeight';
    ;
    $p += ($expr = '<%=maxHeight%>', $e(maxHeight)) + 'px;" id="';
    $line = 3;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_inner"><i mxs="_zs_galleryda:_" class="mc-iconfont _zs_gallery_mx-preview_index_-holder">&#xe615;</i></div></div>';
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
        // 2：图片
        // 4：视频
        // 5：文字链
        // 3：flash
        // 9：flash
        // 10：html，iframe展示
        // 11：直播（封面图）也是图片
        // 23：套图（大图+小图）
        var map = {
            'image': [2, 11],
            'flash': [3, 9],
            'taotu': [23],
            'video': [4],
            'text': [5],
            'iframe': [10]
        };
        // 映射成语义方便处理
        var type;
        for (var t in map) {
            if (map[t].indexOf(format) > -1) {
                type = t;
            }
        }
        var url = extra.url, xiaotuUrl = extra.xiaotuUrl, //套图大小图
        datuUrl = extra.datuUrl;
        if (type == 'taotu') {
            // 套图，预览取小图
            url = extra.xiaotuUrl;
        }
        that.updater.digest({
            viewId: that.id,
            placement: extra.placement || 'right',
            preview: (extra.preview + '' !== 'false'),
            type: type,
            url: url,
            xiaotuUrl: xiaotuUrl,
            datuUrl: datuUrl,
            clickUrl: extra.clickUrl,
            width: +extra.width,
            height: +extra.height,
            maxWidth: +extra.maxWidth || 100,
            maxHeight: +extra.maxHeight || 100
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
        var type = data.type, url = data.url, maxWidth = data.maxWidth, maxHeight = data.maxHeight;
        var thumbnail = '';
        switch (type) {
            case 'image':
            case 'taotu':
                thumbnail = "<img class=\"_zs_gallery_mx-preview_index_-img\" src=\"" + url + "\"/>";
                break;
            case 'flash':
                thumbnail = 'flash已下线';
            case 'video':
                thumbnail = "<video src=\"" + url + "\" class=\"_zs_gallery_mx-preview_index_-video\"></video>";
                break;
            case 'text':
                thumbnail = $("<div class=\"_zs_gallery_mx-preview_index_-text\" style=\"max-width: " + maxWidth + "px;\"></div>");
                // 纯文案展示（包括可执行脚本）
                thumbnail[0].innerText = url;
                break;
            case 'iframe':
                var width = data.width, height = data.height;
                var scale = Math.min(maxWidth / width, maxHeight / height);
                var frameWidth = width * scale, frameHeight = height * scale;
                thumbnail = "<div style=\"width: " + frameWidth + "px; height: " + frameHeight + "px; overflow: hidden\">\n                                <iframe src=\"" + url + "\" class=\"_zs_gallery_mx-preview_index_-iframe\"\n                                    style=\"transform:scale(" + scale + ")\"\n                                    width=\"" + width + "\" \n                                    height=\"" + height + "\" \n                                    frameborder=\"0\"\n                                    scrolling=\"no\" \n                                    marginheight=\"0\" \n                                    marginwidth=\"0\" \n                                    border=\"0\"></iframe>\n                            </div>";
                break;
        }
        // 跳转外链
        var clickUrl = data.clickUrl;
        if (clickUrl) {
            thumbnail = $(thumbnail).wrap("<a href=\"" + clickUrl + "\" target=\"_blank\" rel=\"noopener noreferrer\"></a>");
        }
        $('#' + this.id + '_inner').html(thumbnail);
    },
    'preview<mouseover>': function (e) {
        if (Magix.inside(e.relatedTarget, e.eventTarget)) {
            return;
        }
        this.show();
    },
    show: function () {
        var that = this;
        var target = $('#' + that.id + ' ._zs_gallery_mx-preview_index_-outer');
        var offset = target.offset();
        var left = offset.left, top = offset.top;
        //优化大量预览的显示
        if (Active && Active != that) {
            Active.immediatelyHide();
        }
        Active = that;
        clearTimeout(that.timer);
        var data = that.updater.get();
        var type = data.type, url = data.url;
        if (!url || !type || (type == 'flash')) {
            // 不预览的情况
            // 1. 没有内容
            // 2. 不支持的type类型
            // 3. flash不预览
            return;
        }
        var next = function (width, height) {
            // 对最大范围进行修正，不超过屏幕可视范围
            var win = $(window);
            var winWidth = win.width(), winHeight = win.height(), winScroll = win.scrollTop();
            // placement: right（目标右侧）
            // placement: left（目标左侧）
            var placement = data.placement, rangeWidth = 0; // 可见宽度范围
            if (placement == 'left') {
                // 左边
                rangeWidth = left - 10;
            }
            else {
                // 右边
                left += target.outerWidth() + 10;
                rangeWidth = winWidth - left;
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
                var back = Math.min((top + height - winScroll - winHeight), top - winScroll);
                top = top - back;
            }
            var inner = '';
            switch (type) {
                case 'image':
                    inner = $("<img src=\"" + url + "\" class=\"_zs_gallery_mx-preview_index_-preview-inner\"/>");
                    break;
                case 'taotu':// 套图 
                    inner = $("<div class=\"clearfix\">\n                        <img src=\"" + url + "\" class=\"fl\"/>    \n                        <img src=\"" + data.datuUrl + "\" class=\"fr\"/>\n                    </div>");
                    break;
                case 'video':
                    inner = $("<video src=\"" + url + "\" class=\"_zs_gallery_mx-preview_index_-preview-inner\"\n                        controls=\"controls\" autoplay=\"autoplay\"></video>");
                    break;
                case 'text':
                    inner = $("<div class=\"_zs_gallery_mx-preview_index_-preview-inner\"></div>");
                    inner[0].innerText = url;
                    break;
                case 'iframe':
                    var originWidth = data.width, originHeight = data.height;
                    var scale = (width - 20) / originWidth;
                    inner = $("<div class=\"_zs_gallery_mx-preview_index_-preview-inner\">\n                        <iframe src=\"" + url + "\"\n                            style=\"transform: scale(" + scale + "); transform-origin: left top;\"\n                            width=\"" + originWidth + "\" \n                            height=\"" + originHeight + "\"\n                            frameborder=\"0\" \n                            scrolling=\"no\" \n                            marginheight=\"0\" \n                            marginwidth=\"0\" \n                            border=\"0\"></iframe>\n                    </div>");
                    break;
            }
            // 跳转外链
            var clickUrl = data.clickUrl;
            if (clickUrl) {
                inner.wrap("<a href=\"" + clickUrl + "\" target=\"_blank\" rel=\"noopener noreferrer\"></a>");
            }
            var floatingLayer = $('#pic_preview_' + that.id);
            if (!floatingLayer.length) {
                floatingLayer = $('<div id="pic_preview_' + that.id + '" class="_zs_gallery_mx-preview_index_-pic-preview"></div>').appendTo('body');
            }
            floatingLayer.empty().append(inner);
            floatingLayer.css({
                width: width,
                height: !height ? 'auto' : height,
                left: (placement == 'left') ? (left - width - 10) : left,
                top: top,
                display: 'block'
            });
        };
        if (type == 'taotu') {
            //套图的大图展示，特殊处理
            //注意onload 放在img.src 前面用来兼容IE
            var img = new Image();
            img.onload = function () {
                var width = data.width + 10 + this.width + 20;
                var height = Math.max(data.height, this.height) + 20;
                next(width, height);
            };
            img.src = data.datuUrl;
        }
        else {
            if (data.width && data.height) {
                // 预留间隔
                next(data.width + 20, data.height + 20);
            }
            else {
                // 只有图片和文案类型可不配置，其余必填
                // 没有配置预览宽高
                if (type == 'text') {
                    // 文案默认宽度600，高度自适应
                    next(600, 0);
                }
                else if (type == 'image') {
                    var img = new Image();
                    img.onload = function () {
                        next(this.width + 20, this.height + 20);
                    };
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
    hide: function () {
        var that = this;
        that.delayHide();
        var floatingLayer = $('#pic_preview_' + that.id);
        floatingLayer.off('mouseover.preview').on('mouseover.preview', function () {
            clearTimeout(that.timer);
            floatingLayer.off('mouseout.preview').on('mouseout.preview', function (event) {
                that.delayHide();
            });
        });
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