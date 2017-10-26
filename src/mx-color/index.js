/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-color/index',["magix","$","../mx-dragdrop/index"],function(require,exports,module){
/*Magix,$,DD*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var $ = require('$');
var DD = require('../mx-dragdrop/index');
var pickerIndicator = 6 / 2;
var pickerZone = 196;
var slider = 16 / 2;
Magix.applyStyle("h",".bq{padding:10px;background-color:#fff;display:inline-block;border:1px solid #ccc;border-radius:5px;overflow-y:hidden}.br{width:225px;zoom:1}.br:after,.br:before{display:table;content:\"\"}.br:after{clear:both}.bs{border:1px solid #000;float:left;width:15px;height:15px;margin:-1px 0 0 -1px;position:relative}.bt:before{content:\" \";position:absolute;left:2px;top:2px;border:2px solid #e8e8e8;border-style:inset;width:9px;height:9px}.bu{margin:10px 0;height:200px}.bv{position:relative;float:left}.bw{width:196px;height:196px}.bx{position:absolute;width:6px;height:6px;-webkit-box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;cursor:default}.by{position:relative;float:left;margin-left:10px}.bz{width:20px;height:196px}.bA{position:absolute;left:4px;top:-8px;border:8px solid transparent;border-right-color:#888;width:0;height:0;cursor:default}.bB{height:25px}.bC{width:99px;margin-right:5px;vertical-align:middle}.bD{width:50px;height:23px;line-height:23px;display:inline-block;margin-right:10px;vertical-align:middle;border:1px solid #ddd}");
var GraphicsType = (window.SVGAngle || document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1') ? 'SVG' : 'VML');
var RenderSVG = function (picker, slide) {
    slide.append("<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\"><defs><linearGradient id=\"gradient-hsv\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#FF0000\" stop-opacity=\"1\"></stop><stop offset=\"13%\" stop-color=\"#FF00FF\" stop-opacity=\"1\"></stop><stop offset=\"25%\" stop-color=\"#8000FF\" stop-opacity=\"1\"></stop><stop offset=\"38%\" stop-color=\"#0040FF\" stop-opacity=\"1\"></stop><stop offset=\"50%\" stop-color=\"#00FFFF\" stop-opacity=\"1\"></stop><stop offset=\"63%\" stop-color=\"#00FF40\" stop-opacity=\"1\"></stop><stop offset=\"75%\" stop-color=\"#0BED00\" stop-opacity=\"1\"></stop><stop offset=\"88%\" stop-color=\"#FFFF00\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#FF0000\" stop-opacity=\"1\"></stop></linearGradient></defs><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gradient-hsv)\"></rect></svg>");
    picker.append("<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\"><defs><lineargradient id=\"gradient-black\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#000000\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop></lineargradient><lineargradient id=\"gradient-white\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#FFFFFF\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop></lineargradient></defs><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gradient-white)\"></rect><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gradient-black)\"></rect></svg>");
};
var RenderVML = function (picker, slide) {
    if (!document.namespaces.mxv) {
        document.namespaces.add('mxv', 'urn:schemas-microsoft-com:vml', '#default#VML');
    }
    slide.html("<div style=\"position: relative; width: 100%; height: 100%\"><mxv:rect style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%\" stroked=\"f\" filled=\"t\"><mxv:fill type=\"gradient\" method=\"none\" angle=\"0\" color=\"red\" color2=\"red\" colors=\"8519f fuchsia;.25 #8000ff;24903f #0040ff;.5 aqua;41287f #00ff40;.75 #0bed00;57671f yellow\"></mxv:fill></mxv:rect></div>");
    picker.html("<div style=\"position: relative; width: 100%; height: 100%\"><mxv:rect style=\"position: absolute; left: -1px; top: -1px; width: 101%; height: 101%\" stroked=\"f\" filled=\"t\"><mxv:fill type=\"gradient\" method=\"none\" angle=\"270\" color=\"#FFFFFF\" opacity=\"100%\" color2=\"#CC9A81\" o:opacity2=\"0%\"></mxv:fill></mxv:rect><mxv:rect style=\"position: absolute; left: 0px; top: 0px; width: 100%; height: 101%\" stroked=\"f\" filled=\"t\"><mxv:fill type=\"gradient\" method=\"none\" angle=\"0\" color=\"#000000\" opacity=\"100%\" color2=\"#CC9A81\" o:opacity2=\"0%\"></mxv:fill></mxv:rect></div>");
};
var CSSNames = {"selected":"bt","cnt":"bq"};
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
    tmpl: {"html":"<div id=\"shortcuts_<%=$$.id%>\"><ul class=\"br\"><%for(var a=0;a<$$.shortcuts.length;a++){%><li class=\"bs\" id=\"sc_<%=$$.shortcuts[a]%>_<%=$$.id%>\" style=\"background:#<%=$$.shortcuts[a]%>\" mx-click=\"\u001f\u001e_ab({color:'#<%=$eq($$.shortcuts[a])%>'})\"></li><%}%></ul></div><div class=\"bu\"><div class=\"bv\"><div class=\"bw\" id=\"cpicker_<%=$$.id%>\" mx-click=\"\u001f\u001e_aa()\"></div><div class=\"bx\" id=\"ph_<%=$$.id%>\" mx-mousedown=\"\u001f\u001e_Z()\"></div></div><div class=\"by\"><div class=\"bz\" id=\"slide_<%=$$.id%>\" mx-click=\"\u001f\u001e_a_()\"></div><div class=\"bA\" mx-mousedown=\"\u001f\u001e_Y();\" id=\"sh_<%=$$.id%>\"></div></div></div><div class=\"bB\"><span class=\"bD\" id=\"bgcolor_<%=$$.id%>\"></span><input class=\"an bC\" readonly=\"readonly\" id=\"val_<%=$$.id%>\"><button class=\"al am\" type=\"button\" mx-click=\"\u001f\u001e_ac();\">确定</button></div>","subs":[]},
    init: function (extra) {
        var me = this;
        me['_W'] = extra.color || '#ffffff';
        me['_X'] = {
            h: 0,
            s: 1,
            v: 1
        };
        $('#' + me.id).addClass(CSSNames.cnt);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            id: me.id,
            shortcuts: ShortCuts
        });
        var slideNode = $('#slide_' + me.id);
        var pickerNode = $('#cpicker_' + me.id);
        if (GraphicsType == 'SVG') {
            RenderSVG(pickerNode, slideNode);
        }
        else {
            RenderVML(pickerNode, slideNode);
        }
        me.setColor(me['_W']);
    },
    setHSV: function (hsv, ignoreSyncUI) {
        var me = this;
        var selfHSV = me['_X'];
        selfHSV.h = hsv.h % 360;
        selfHSV.s = hsv.s;
        selfHSV.v = hsv.v;
        var rgb = HSV2RGB(hsv.h, hsv.s, hsv.v);
        var hex = rgb.hex;
        var cpickerNode = $('#cpicker_' + me.id);
        var colorZone = HSV2RGB(hsv.h, 1, 1);
        cpickerNode.css('background', colorZone.hex);
        $('#bgcolor_' + me.id).css('background', hex);
        $('#val_' + me.id).val(hex);
        if (!ignoreSyncUI) {
            $('#shortcuts_' + me.id + ' li').removeClass(CSSNames.selected);
            var top = Math.round(selfHSV.h * pickerZone / 360 - slider);
            $('#sh_' + me.id).css({
                top: top
            });
            top = Math.round((1 - selfHSV.v) * pickerZone - pickerIndicator);
            var left = Math.round(selfHSV.s * pickerZone - pickerIndicator);
            $('#ph_' + me.id).css({
                left: left,
                top: top
            });
        }
        $('#sc_' + hex.substr(1, 6) + '_' + me.id).addClass(CSSNames.selected);
    },
    setColor: function (hex) {
        var me = this;
        var r = parseInt(hex.substr(1, 2), 16);
        var g = parseInt(hex.substr(3, 2), 16);
        var b = parseInt(hex.substr(5, 2), 16);
        var hsv = RGB2HSV(r, g, b);
        me.setHSV(hsv);
    },
    '_Y<mousedown>': function (e) {
        var me = this;
        var current = $(e.eventTarget);
        var startY = parseInt(current.css('top'), 10);
        var pos = e;
        DD.begin(e.eventTarget, function (event) {
            var offsetY = event.pageY - pos.pageY;
            offsetY += startY;
            if (offsetY <= -slider)
                offsetY = -slider;
            else if (offsetY >= (pickerZone - slider))
                offsetY = pickerZone - slider;
            current.css({
                top: offsetY
            });
            var h = (offsetY + slider) / pickerZone * 360;
            me.setHSV({
                h: h,
                s: me['_X'].s,
                v: me['_X'].v
            }, true);
        });
    },
    '_Z<mousedown>': function (e) {
        var me = this;
        var current = $(e.eventTarget);
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
            me.setHSV({
                h: me['_X'].h,
                s: s,
                v: v
            });
        });
    },
    '_a_<click>': function (e) {
        var me = this, offset = $(e.eventTarget).offset(), top = e.pageY - offset.top, h = top / pickerZone * 360;
        me.setHSV({
            h: h,
            s: me['_X'].s,
            v: me['_X'].v
        });
    },
    '_aa<click>': function (e) {
        var me = this, offset = $(e.eventTarget).offset(), left = e.pageX - offset.left, top = e.pageY - offset.top, s = left / pickerZone, v = (pickerZone - top) / pickerZone;
        me.setHSV({
            h: me['_X'].h,
            s: s,
            v: v
        });
    },
    '_ab<click>': function (e) {
        this.setColor(e.params.color);
        $(e.eventTarget).addClass(CSSNames.selected);
    },
    '_ac<click>': function () {
        var me = this;
        var ipt = $('#val_' + me.id);
        $('#' + me.id).trigger({
            type: 'change',
            color: ipt.val()
        });
    }
});

});