/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/index",["magix","$","../mx-dragdrop/index"],(require,exports,module)=>{
/*Magix,$,DD*/

var Magix = require("magix");
var $ = require("$");
var DD = require("../mx-dragdrop/index");
Magix.applyStyle("_zs_gallery_mx-color_index_","[mx-view*=\"mx-color/index\"] {\n  width: 246px;\n  min-width: 246px;\n  padding: 10px;\n  background-color: #fff;\n}\n._zs_gallery_mx-color_index_-shortcuts,\n._zs_gallery_mx-color_index_-cbd,\n._zs_gallery_mx-color_index_-foot {\n  width: 224px;\n}\n._zs_gallery_mx-color_index_-cbd {\n  margin: 10px 0;\n}\n._zs_gallery_mx-color_index_-shortcut {\n  position: relative;\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin: -1px 0 0 -1px;\n  border: 1px solid #333;\n  cursor: pointer;\n}\n._zs_gallery_mx-color_index_-shortcut._zs_gallery_mx-color_index_-selected:before,\n._zs_gallery_mx-color_index_-shortcut._zs_gallery_mx-color_index_-selected:after {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n._zs_gallery_mx-color_index_-shortcut._zs_gallery_mx-color_index_-selected:before {\n  z-index: 2;\n  border: solid 1px #fff;\n}\n._zs_gallery_mx-color_index_-shortcut._zs_gallery_mx-color_index_-selected:after {\n  z-index: 1;\n  border: solid 2px #333;\n}\n._zs_gallery_mx-color_index_-cpicker {\n  float: left;\n  position: relative;\n  width: 196px;\n  height: 196px;\n  cursor: pointer;\n}\n._zs_gallery_mx-color_index_-cpicker ._zs_gallery_mx-color_index_-cpicker-indicator {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n}\n._zs_gallery_mx-color_index_-slide {\n  float: right;\n  position: relative;\n  width: 18px;\n  height: 196px;\n  cursor: pointer;\n}\n._zs_gallery_mx-color_index_-slide ._zs_gallery_mx-color_index_-slide-indicator {\n  position: absolute;\n  right: -6px;\n  top: -6px;\n  width: 0;\n  height: 0;\n  background-color: none;\n  border-right: 6px solid #333;\n  border-left: none;\n  border-bottom: 6px solid transparent;\n  border-top: 6px solid transparent;\n}\n._zs_gallery_mx-color_index_-color-value {\n  width: 104px;\n}\n._zs_gallery_mx-color_index_-bg-color {\n  height: var(--input-height);\n  width: 50px;\n  margin-right: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n}\n._zs_gallery_mx-color_index_-alpha {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n  width: 224px;\n  height: 12px;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-color_index_-alpha-tracker {\n  height: 100%;\n}\n._zs_gallery_mx-color_index_-alpha-indicator {\n  position: absolute;\n  left: -2px;\n  top: 2px;\n  height: 8px;\n  width: 4px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n  background: #fff;\n}\n");
var CSSNames = {"selected":"_zs_gallery_mx-color_index_-selected"};
var ShortCuts = ['d81e06', 'f4ea2a', '1afa29', '1296db', '13227a', 'd4237a', 'ffffff', 'e6e6e6', 'dbdbdb', 'cdcdcd', 'bfbfbf', '8a8a8a', '707070', '515151', '2c2c2c', '000000', 'ea986c', 'eeb174', 'f3ca7e', 'f9f28b', 'c8db8c', 'aad08f', '87c38f', '83c6c2', '7dc5eb', '87a7d6', '8992c8', 'a686ba', 'bd8cbb', 'be8dbd', 'e89abe', 'e8989a', 'e16632', 'e98f36', 'efb336', 'f6ef37', 'afcd51', '7cba59', '36ab60', '1baba8', '17ace3', '3f81c1', '4f68b0', '594d9c', '82529d', 'a4579d', 'db649b', 'dd6572', 'd84e06', 'e0620d', 'ea9518', 'f4ea2a', '8cbb1a', '2ba515', '0e932e', '0c9890', '1295db', '0061b2', '0061b0', '004198', '122179', '88147f', 'd3227b', 'd6204b'];
var HSV2RGB = function (h, s, v) {
    var R, G, B, X, C;
    h = (h % 360) / 60;
    C = v * s;
    X = C * (1 - Math.abs(h % 2 - 1));
    R = G = B = v - C;
    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    var r = R * 255, g = G * 255, b = B * 255;
    return {
        r: r,
        g: g,
        b: b,
        hex: '#' + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1)
    };
};
var RGB2HSV = function (r, g, b) {
    //if (r > 0 || g > 0 || b > 0) {
    r /= 255;
    g /= 255;
    b /= 255;
    //}
    var H, S, V, C;
    V = Math.max(r, g, b);
    C = V - Math.min(r, g, b);
    H = (C === 0 ? null : V == r ? (g - b) / C + (g < b ? 6 : 0) : V == g ? (b - r) / C + 2 : (r - g) / C + 4);
    H = (H % 6) * 60;
    S = C === 0 ? 0 : C / V;
    return {
        h: H,
        s: S,
        v: V
    };
};
module.exports = Magix.View.extend({
    mixins: [DD],
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
} ; var $g = '', $_temp, $p = '', id = $$.id, shortcuts = $$.shortcuts, alpha = $$.alpha, btns = $$.btns; var $expr, $art, $line; try {
    $p += '<div id="scs_' + ($expr = '<%=id%>', $e(id)) + '"><ul mxa="_zs_galleryal:_" class="_zs_gallery_mx-color_index_-shortcuts clearfix">';
    $expr = '<%for (var i = 0; i < shortcuts.length; i++) {%>';
    for (var i = 0; i < shortcuts.length; i++) {
        ;
        $p += '<li class="_zs_gallery_mx-color_index_-shortcut" id="sc_' + ($expr = '<%=shortcuts[i]%>', $e(shortcuts[i])) + '_' + ($expr = '<%=id%>', $e(id)) + '" style="background:#' + ($expr = '<%=shortcuts[i]%>', $e(shortcuts[i])) + '" mx-click="' + $viewId + '@{shortcuts.picked}({color:\'#' + ($expr = '<%=$eq(shortcuts[i])%>', $e($eq(shortcuts[i]))) + '\'})"></li>';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul></div><div mxa="_zs_galleryal:a" class="_zs_gallery_mx-color_index_-cbd clearfix"><div class="_zs_gallery_mx-color_index_-cpicker" id="cz_' + ($expr = '<%=id%>', $e(id)) + '" mx-mousedown="' + $viewId + '@{color.zone.drag}()"><svg mxa="_zs_galleryal:b" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%"><defs><lineargradient id="gb_' + ($expr = '<%=id%>', $e(id)) + '" x1="0%" y1="100%" x2="0%" y2="0%"><stop mxs="_zs_galleryal:_" offset="0%" stop-color="#000000" stop-opacity="1"></stop><stop mxs="_zs_galleryal:a" offset="100%" stop-color="#CC9A81" stop-opacity="0"></stop></lineargradient><lineargradient id="gw_' + ($expr = '<%=id%>', $e(id)) + '" x1="0%" y1="100%" x2="100%" y2="100%"><stop mxs="_zs_galleryal:b" offset="0%" stop-color="#FFFFFF" stop-opacity="1"></stop><stop mxs="_zs_galleryal:a" offset="100%" stop-color="#CC9A81" stop-opacity="0"></stop></lineargradient></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#gw_' + ($expr = '<%=id%>', $e(id)) + ')"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#gb_' + ($expr = '<%=id%>', $e(id)) + ')"></rect></svg><div class="_zs_gallery_mx-color_index_-cpicker-indicator" id="ci_' + ($expr = '<%=id%>', $e(id)) + '"></div></div><div mxa="_zs_galleryal:c" class="_zs_gallery_mx-color_index_-slide" mx-mousedown="' + $viewId + '@{slide.drag}()"><svg mxa="_zs_galleryal:d" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%"><defs><lineargradient id="ghsv_' + ($expr = '<%=id%>', $e(id)) + '" x1="0%" y1="100%" x2="0%" y2="0%"><stop mxs="_zs_galleryal:c" offset="0%" stop-color="#FF0000" stop-opacity="1"></stop><stop mxs="_zs_galleryal:d" offset="13%" stop-color="#FF00FF" stop-opacity="1"></stop><stop mxs="_zs_galleryal:e" offset="25%" stop-color="#8000FF" stop-opacity="1"></stop><stop mxs="_zs_galleryal:f" offset="38%" stop-color="#0040FF" stop-opacity="1"></stop><stop mxs="_zs_galleryal:g" offset="50%" stop-color="#00FFFF" stop-opacity="1"></stop><stop mxs="_zs_galleryal:h" offset="63%" stop-color="#00FF40" stop-opacity="1"></stop><stop mxs="_zs_galleryal:i" offset="75%" stop-color="#0BED00" stop-opacity="1"></stop><stop mxs="_zs_galleryal:j" offset="88%" stop-color="#FFFF00" stop-opacity="1"></stop><stop mxs="_zs_galleryal:k" offset="100%" stop-color="#FF0000" stop-opacity="1"></stop></lineargradient></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#ghsv_' + ($expr = '<%=id%>', $e(id)) + ')"></rect></svg><div class="_zs_gallery_mx-color_index_-slide-indicator" id="si_' + ($expr = '<%=id%>', $e(id)) + '"></div></div></div>';
    $expr = '<%if (alpha) {%>';
    if (alpha) {
        ;
        $p += '<div mxa="_zs_galleryal:e" class="_zs_gallery_mx-color_index_-alpha pr"><div class="_zs_gallery_mx-color_index_-alpha-tracker pr cp" id="at_' + ($expr = '<%=id%>', $e(id)) + '" mx-mousedown="' + $viewId + '@{alpha.drag}()"><div class="_zs_gallery_mx-color_index_-alpha-indicator" id="ai_' + ($expr = '<%=id%>', $e(id)) + '"></div></div></div>';
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxv mxa="_zs_galleryal:f" class="_zs_gallery_mx-color_index_-foot clearfix"><span class="fl _zs_gallery_mx-color_index_-bg-color" id="bc_' + ($expr = '<%=id%>', $e(id)) + '"></span><input class="fl input _zs_gallery_mx-color_index_-color-value" id="v_' + ($expr = '<%=id%>', $e(id)) + '" mx-keyup="' + $viewId + '@{input.end}()" mx-paste="' + $viewId + '@{input.end}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()"/>';
    $expr = '<%if (btns) {%>';
    if (btns) {
        ;
        $p += '<a mxs="_zs_galleryal:l" href="javascript:;" class="fr btn btn-brand" mx-click="' + $viewId + '@{enter}()">确定</a>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-color/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        var data = extra.data || {};
        me['@{color}'] = data.color || '#ffffff';
        me['@{show.alpha}'] = (data.showAlpha + '') === 'true';
        me['@{show.btns}'] = (data.showBtns + '') === 'true';
        me['@{hsv.info}'] = {
            h: 0,
            s: 1,
            v: 1
        };
    },
    render: function () {
        var me = this;
        me.updater.digest({
            id: me.id,
            alpha: me['@{show.alpha}'],
            btns: me['@{show.btns}'],
            shortcuts: ShortCuts
        });
        me['@{setColor}'](me['@{color}']);
    },
    '@{setHSV}': function (hsv, ignoreSyncUI) {
        var me = this;
        var selfHSV = me['@{hsv.info}'];
        selfHSV.h = hsv.h % 360;
        selfHSV.s = hsv.s;
        selfHSV.v = hsv.v;
        var rgb = HSV2RGB(hsv.h, hsv.s, hsv.v);
        var hex = rgb.hex;
        var cpickerNode = $('#cz_' + me.id);
        var pickerZone = cpickerNode.width();
        var colorZone = HSV2RGB(hsv.h, 1, 1);
        cpickerNode.css('background', colorZone.hex);
        me['@{hex.color}'] = hex;
        me['@{sync.color}']();
        if (!ignoreSyncUI) {
            $('#scs_' + me.id + ' li').removeClass(CSSNames.selected);
            var slider = $('#si_' + me.id).height() / 2;
            if (slider < 0) {
                slider = 0;
            }
            var top = Math.round(selfHSV.h * pickerZone / 360 - slider);
            var pickerIndicator = $('#ci_' + me.id).width() / 2;
            $('#si_' + me.id).css({
                top: top - 6
            });
            top = Math.round((1 - selfHSV.v) * pickerZone - pickerIndicator);
            var left = Math.round(selfHSV.s * pickerZone - pickerIndicator);
            $('#ci_' + me.id).css({
                left: left,
                top: top
            });
        }
        $('#sc_' + hex.substr(1, 6) + '_' + me.id).addClass(CSSNames.selected);
    },
    '@{setColor}': function (hex) {
        var me = this;
        var r = parseInt(hex.substr(1, 2), 16);
        var g = parseInt(hex.substr(3, 2), 16);
        var b = parseInt(hex.substr(5, 2), 16);
        var a = parseInt(hex.substr(7, 2), 16);
        if (isNaN(a)) {
            a = 255;
        }
        me['@{hex.alpha}'] = ('0' + a.toString(16)).slice(-2);
        var hsv = RGB2HSV(r, g, b);
        me['@{setHSV}'](hsv);
        if (me['@{show.alpha}']) {
            me['@{setAlpha}'](a);
        }
    },
    '@{slide.drag}<mousedown>': function (e) {
        var me = this;
        var current = $(e.eventTarget);
        var indicator = $('#si_' + me.id);
        var pos = e;
        var pickerZone = $('#cz_' + me.id).width();
        var slider = $('#si_' + me.id).height() / 2;
        var offset = current.offset(), top = e.pageY - offset.top, h = top / pickerZone * 360;
        me['@{setHSV}']({
            h: h,
            s: me['@{hsv.info}'].s,
            v: me['@{hsv.info}'].v
        });
        var startY = parseInt(indicator.css('top'), 10);
        me.dragdrop(e.eventTarget, function (event) {
            var offsetY = event.pageY - pos.pageY;
            offsetY += startY;
            if (offsetY <= -slider)
                offsetY = -slider;
            else if (offsetY >= (pickerZone - slider))
                offsetY = pickerZone - slider;
            indicator.css({
                top: offsetY - 6
            });
            var h = (offsetY + slider) / pickerZone * 360;
            me['@{setHSV}']({
                h: h,
                s: me['@{hsv.info}'].s,
                v: me['@{hsv.info}'].v
            }, true);
        }, function () {
            me['@{fire.event}']();
        });
    },
    '@{color.zone.drag}<mousedown>': function (e) {
        var me = this, pickerZone = $('#cz_' + me.id).width(), pickerIndicator = $('#ci_' + me.id).width() / 2, offset = $(e.eventTarget).offset(), left = e.pageX - offset.left, top = e.pageY - offset.top, s = left / pickerZone, v = (pickerZone - top) / pickerZone;
        me['@{setHSV}']({
            h: me['@{hsv.info}'].h,
            s: s,
            v: v
        });
        var current = $('#ci_' + me.id);
        var startX = parseInt(current.css('left'), 10);
        var startY = parseInt(current.css('top'), 10);
        var pos = e;
        me.dragdrop(e.eventTarget, function (event) {
            var offsetY = event.pageY - pos.pageY;
            var offsetX = event.pageX - pos.pageX;
            offsetY += startY;
            if (offsetY <= -pickerIndicator)
                offsetY = -pickerIndicator;
            else if (offsetY >= (pickerZone - pickerIndicator))
                offsetY = pickerZone - pickerIndicator;
            offsetX += startX;
            if (offsetX <= -pickerIndicator)
                offsetX = -pickerIndicator;
            else if (offsetX >= (pickerZone - pickerIndicator))
                offsetX = pickerZone - pickerIndicator;
            current.css({
                top: offsetY,
                left: offsetX
            });
            var s = (offsetX + pickerIndicator) / pickerZone;
            var v = (pickerZone - (offsetY + pickerIndicator)) / pickerZone;
            me['@{setHSV}']({
                h: me['@{hsv.info}'].h,
                s: s,
                v: v
            });
        }, function () {
            me['@{fire.event}']();
        });
    },
    '@{setAlpha}': function (a) {
        var me = this;
        var alphaWidth = $('#at_' + me.id).width();
        var slider = $('#si_' + me.id).height() / 2;
        a /= 255;
        a *= alphaWidth;
        a -= slider;
        $('#ai_' + me.id).css({
            left: a
        });
    },
    '@{sync.color}': function () {
        var me = this;
        var hex = me['@{hex.color}'];
        $('#at_' + me.id).css({
            background: 'linear-gradient(to right, ' + hex + '00 0%,' + hex + ' 100%)'
        });
        if (me['@{show.alpha}']) {
            hex += me['@{hex.alpha}'];
        }
        $('#bc_' + me.id).css('background', hex);
        $('#v_' + me.id).val(hex);
    },
    '@{alpha.drag}<mousedown>': function (e) {
        var current = $(e.eventTarget);
        var pos = e;
        var me = this;
        var indicator = $('#ai_' + me.id);
        var alphaWidth = $('#at_' + me.id).width();
        var slider = $('#si_' + me.id).height() / 2;
        var offset = current.offset(), left = e.pageX - offset.left, a = (left / alphaWidth * 255) | 0;
        me['@{hex.alpha}'] = ('0' + a.toString(16)).slice(-2);
        me['@{setAlpha}'](a);
        me['@{sync.color}']();
        var startX = parseInt(indicator.css('left'), 10);
        me.dragdrop(e.eventTarget, function (event) {
            var offsetX = event.pageX - pos.pageX;
            offsetX += startX;
            if (offsetX <= -slider)
                offsetX = -slider;
            else if (offsetX >= (alphaWidth - slider))
                offsetX = alphaWidth - slider;
            indicator.css({
                left: offsetX
            });
            var a = Math.round((offsetX + slider) / alphaWidth * 255);
            me['@{hex.alpha}'] = ('0' + a.toString(16)).slice(-2);
            me['@{sync.color}']();
        }, function () {
            me['@{fire.event}']();
        });
    },
    '@{shortcuts.picked}<click>': function (e) {
        this['@{setColor}'](e.params.color);
        $(e.eventTarget).addClass(CSSNames.selected);
        this['@{fire.event}']();
    },
    '@{input.end}<keyup,paste>': function (e) {
        var me = this;
        clearTimeout(me['@{end.delay.timer}']);
        var val = $.trim(e.eventTarget.value);
        me['@{end.delay.timer}'] = setTimeout(me.wrapAsync(function () {
            // 只响应合法的色值
            if (val.length === 7 && val != me['@{color}']) {
                me['@{setColor}'](val);
                me['@{fire.event}']();
            }
        }), 300);
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{fire.event}': function (fromBtn) {
        var me = this;
        if (!me['@{show.btns}'] || fromBtn) {
            var c = $('#v_' + me.id).val();
            if (c != me['@{color}']) {
                $('#' + me.id).trigger({
                    type: 'change',
                    color: me['@{color}'] = c
                });
            }
        }
    },
    '@{enter}<click>': function () {
        this['@{fire.event}'](true);
    }
});

});