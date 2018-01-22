/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/index",["magix","$","../mx-dragdrop/index"],(require,exports,module)=>{
/*Magix,$,DD*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
var DD = require("../mx-dragdrop/index");
Magix.applyStyle("_k","._bI{padding:10px;background-color:#fff;display:inline-block;border:1px solid #ccc;border-radius:5px;position:relative;z-index:1}._bJ{width:225px;zoom:1}._bJ:after,._bJ:before{display:table;content:\"\"}._bJ:after{clear:both}._bK{border:1px solid #000;float:left;width:15px;height:15px;margin:-1px 0 0 -1px;position:relative}._bL:before{content:\" \";position:absolute;left:2px;top:2px;border:2px solid #e8e8e8;border-style:inset;width:9px;height:9px}._bM{margin:10px 0;height:200px}._bN{position:relative;float:left;width:196px;height:196px}._bO{position:absolute;width:8px;height:8px;-webkit-box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%}._bP{width:18px;height:196px;position:relative;float:left;margin-left:10px}._bQ{position:absolute;left:2px;top:-2px;height:4px;width:14px;-webkit-box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);background:#fff}._bR{height:25px}._bS{width:104px;margin-right:5px;vertical-align:middle}._bT{width:50px;border-radius:4px;height:32px;display:inline-block;margin-right:10px;vertical-align:middle;border:1px solid #ddd}._bU{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);width:224px;height:12px;margin-bottom:10px}._bV{height:100%}._bW{position:absolute;left:-2px;top:2px;height:8px;width:4px;-webkit-box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);background:#fff}");
var CSSNames = {"selected":"_bL","cnt":"_bI"};
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
    tmpl: {"html":"<div id=\"scs_<%=$$.id%>\"><ul class=\"_bJ\"><%for(var _=0;_<$$.shortcuts.length;_++){%><li class=\"_bK _ad\" id=\"sc_<%=$$.shortcuts[_]%>_<%=$$.id%>\" style=\"background:#<%=$$.shortcuts[_]%>\" mx-click=\"\u001f\u001e__aH({color:'#<%=$eq($$.shortcuts[_])%>'})\"></li><%}%></ul></div><div class=\"_bM\"><div class=\"_bN _ad\" id=\"cz_<%=$$.id%>\" mx-mousedown=\"\u001f\u001e__aF()\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\"><defs><lineargradient id=\"gb_<%=$$.id%>\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#000000\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop></lineargradient><lineargradient id=\"gw_<%=$$.id%>\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#FFFFFF\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop></lineargradient></defs><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gw_<%=$$.id%>)\"></rect><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gb_<%=$$.id%>)\"></rect></svg><div class=\"_bO\" id=\"ci_<%=$$.id%>\"></div></div><div class=\"_bP _ad\" mx-mousedown=\"\u001f\u001e__aE()\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\"><defs><linearGradient id=\"ghsv_<%=$$.id%>\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#FF0000\" stop-opacity=\"1\"></stop><stop offset=\"13%\" stop-color=\"#FF00FF\" stop-opacity=\"1\"></stop><stop offset=\"25%\" stop-color=\"#8000FF\" stop-opacity=\"1\"></stop><stop offset=\"38%\" stop-color=\"#0040FF\" stop-opacity=\"1\"></stop><stop offset=\"50%\" stop-color=\"#00FFFF\" stop-opacity=\"1\"></stop><stop offset=\"63%\" stop-color=\"#00FF40\" stop-opacity=\"1\"></stop><stop offset=\"75%\" stop-color=\"#0BED00\" stop-opacity=\"1\"></stop><stop offset=\"88%\" stop-color=\"#FFFF00\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#FF0000\" stop-opacity=\"1\"></stop></linearGradient></defs><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#ghsv_<%=$$.id%>)\"></rect></svg><div class=\"_bQ\" id=\"si_<%=$$.id%>\"></div></div></div><%if($$.alpha){%><div class=\"_bU _ag\"><div class=\"_bV _ag _ad\" id=\"at_<%=$$.id%>\" mx-mousedown=\"\u001f\u001e__aG()\"><div class=\"_bW\" id=\"ai_<%=$$.id%>\"></div></div></div><%}%><div class=\"_bR\"><span class=\"_bT\" id=\"bc_<%=$$.id%>\"></span><input class=\"_ap _bS\" readonly=\"readonly\" id=\"v_<%=$$.id%>\"><%if($$.btns){%><button class=\"_an _ao\" type=\"button\" mx-click=\"\u001f\u001e__aI();\">确定</button><%}%></div>"},
    init: function (extra) {
        var me = this;
        me['__au'] = extra.color || '#ffffff';
        me['__av'] = (extra.showAlpha + '') === 'true';
        me['__aw'] = (extra.showBtns + '') === 'true';
        me['__ax'] = {
            h: 0,
            s: 1,
            v: 1
        };
        $('#' + me.id).addClass(CSSNames.cnt);
        me.on('destroy', DD.end);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            id: me.id,
            alpha: me['__av'],
            btns: me['__aw'],
            shortcuts: ShortCuts
        });
        me['__ay'](me['__au']);
    },
    '__aB': function (hsv, ignoreSyncUI) {
        var me = this;
        var selfHSV = me['__ax'];
        selfHSV.h = hsv.h % 360;
        selfHSV.s = hsv.s;
        selfHSV.v = hsv.v;
        var rgb = HSV2RGB(hsv.h, hsv.s, hsv.v);
        var hex = rgb.hex;
        var cpickerNode = $('#cz_' + me.id);
        var pickerZone = cpickerNode.width();
        var colorZone = HSV2RGB(hsv.h, 1, 1);
        cpickerNode.css('background', colorZone.hex);
        me['__az'] = hex;
        me['__aA']();
        if (!ignoreSyncUI) {
            $('#scs_' + me.id + ' li').removeClass(CSSNames.selected);
            var slider = $('#si_' + me.id).height() / 2;
            var top = Math.round(selfHSV.h * pickerZone / 360 - slider);
            var pickerIndicator = $('#ci_' + me.id).width() / 2;
            $('#si_' + me.id).css({
                top: top
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
    '__ay': function (hex) {
        var me = this;
        var r = parseInt(hex.substr(1, 2), 16);
        var g = parseInt(hex.substr(3, 2), 16);
        var b = parseInt(hex.substr(5, 2), 16);
        var a = parseInt(hex.substr(7, 2), 16);
        if (isNaN(a)) {
            a = 255;
        }
        me['__aC'] = ('0' + a.toString(16)).slice(-2);
        var hsv = RGB2HSV(r, g, b);
        me['__aB'](hsv);
        if (me['__av']) {
            me['__aD'](a);
        }
    },
    '__aE<mousedown>': function (e) {
        var me = this;
        var current = $(e.eventTarget);
        var indicator = $('#si_' + me.id);
        var pos = e;
        var pickerZone = $('#cz_' + me.id).width();
        var slider = $('#si_' + me.id).height() / 2;
        var offset = current.offset(), top = e.pageY - offset.top, h = top / pickerZone * 360;
        me['__aB']({
            h: h,
            s: me['__ax'].s,
            v: me['__ax'].v
        });
        var startY = parseInt(indicator.css('top'), 10);
        DD.begin(e.eventTarget, function (event) {
            var offsetY = event.pageY - pos.pageY;
            offsetY += startY;
            if (offsetY <= -slider)
                offsetY = -slider;
            else if (offsetY >= (pickerZone - slider))
                offsetY = pickerZone - slider;
            indicator.css({
                top: offsetY
            });
            var h = (offsetY + slider) / pickerZone * 360;
            me['__aB']({
                h: h,
                s: me['__ax'].s,
                v: me['__ax'].v
            }, true);
        }, function () {
            me['__v']();
        });
    },
    '__aF<mousedown>': function (e) {
        var me = this, pickerZone = $('#cz_' + me.id).width(), pickerIndicator = $('#ci_' + me.id).width() / 2, offset = $(e.eventTarget).offset(), left = e.pageX - offset.left, top = e.pageY - offset.top, s = left / pickerZone, v = (pickerZone - top) / pickerZone;
        me['__aB']({
            h: me['__ax'].h,
            s: s,
            v: v
        });
        var current = $('#ci_' + me.id);
        var startX = parseInt(current.css('left'), 10);
        var startY = parseInt(current.css('top'), 10);
        var pos = e;
        DD.begin(e.eventTarget, function (event) {
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
            me['__aB']({
                h: me['__ax'].h,
                s: s,
                v: v
            });
        }, function () {
            me['__v']();
        });
    },
    '__aD': function (a) {
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
    '__aA': function () {
        var me = this;
        var hex = me['__az'];
        $('#at_' + me.id).css({
            background: 'linear-gradient(to right, ' + hex + '00 0%,' + hex + ' 100%)'
        });
        if (me['__av']) {
            hex += me['__aC'];
        }
        $('#bc_' + me.id).css('background', hex);
        $('#v_' + me.id).val(hex);
    },
    '__aG<mousedown>': function (e) {
        var current = $(e.eventTarget);
        var pos = e;
        var me = this;
        var indicator = $('#ai_' + me.id);
        var alphaWidth = $('#at_' + me.id).width();
        var slider = $('#si_' + me.id).height() / 2;
        var offset = current.offset(), left = e.pageX - offset.left, a = (left / alphaWidth * 255) | 0;
        me['__aC'] = ('0' + a.toString(16)).slice(-2);
        me['__aD'](a);
        me['__aA']();
        var startX = parseInt(indicator.css('left'), 10);
        DD.begin(e.eventTarget, function (event) {
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
            me['__aC'] = ('0' + a.toString(16)).slice(-2);
            me['__aA']();
        }, function () {
            me['__v']();
        });
    },
    '__aH<click>': function (e) {
        this['__ay'](e.params.color);
        $(e.eventTarget).addClass(CSSNames.selected);
        this['__v']();
    },
    '__v': function (fromBtn) {
        var me = this;
        if (!me['__aw'] || fromBtn) {
            var c = $('#v_' + me.id).val();
            if (c != me['__au']) {
                $('#' + me.id).trigger({
                    type: 'change',
                    color: me['__au'] = c
                });
            }
        }
    },
    '__aI<click>': function () {
        this['__v'](1);
    }
});

});