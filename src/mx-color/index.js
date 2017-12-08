/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-color/index',["magix","$","../mx-dragdrop/index"],(require,exports,module)=>{
/*Magix,$,DD*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let DD = require('../mx-dragdrop/index');
let pickerIndicator = 8 / 2;
let pickerZone = 196;
let slider = 4 / 2;
let alphaWidth = 224;
Magix.applyStyle("__mx-color_index_",".__mx-color_index_-cnt {\n  padding: 10px;\n  background-color: #fff;\n  display: inline-block;\n  border: 1px solid #CCC;\n  border-radius: 5px;\n  overflow-y: hidden;\n}\n.__mx-color_index_-shortcuts {\n  width: 225px;\n}\n.__mx-color_index_-shortcuts {\n  *zoom: 1;\n}\n.__mx-color_index_-shortcuts:before,\n.__mx-color_index_-shortcuts:after {\n  display: table;\n  content: \"\";\n}\n.__mx-color_index_-shortcuts:after {\n  clear: both;\n}\n.__mx-color_index_-shortcuts-item {\n  border: 1px solid #000;\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin: -1px 0px 0 -1px;\n  position: relative;\n}\n.__mx-color_index_-selected:before {\n  content: ' ';\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  border: solid 2px #e8e8e8;\n  border-style: inset;\n  width: 9px;\n  height: 9px;\n}\n.__mx-color_index_-body {\n  margin: 10px 0;\n  height: 200px;\n}\n.__mx-color_index_-cpicker-wrapper {\n  position: relative;\n  float: left;\n}\n.__mx-color_index_-cpicker {\n  width: 196px;\n  height: 196px;\n}\n.__mx-color_index_-cpicker-indicator {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  -webkit-box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n  cursor: default;\n}\n.__mx-color_index_-slide-wrapper {\n  position: relative;\n  float: left;\n  margin-left: 10px;\n}\n.__mx-color_index_-slide {\n  width: 18px;\n  height: 196px;\n}\n.__mx-color_index_-slide-indicator {\n  position: absolute;\n  left: 2px;\n  top: -2px;\n  height: 4px;\n  width: 14px;\n  -webkit-box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n  background: #fff;\n  cursor: default;\n}\n.__mx-color_index_-foot {\n  height: 25px;\n}\n.__mx-color_index_-color-value {\n  width: 104px;\n  margin-right: 5px;\n  vertical-align: middle;\n}\n.__mx-color_index_-bgcolor {\n  width: 50px;\n  border-radius: 4px;\n  height: 32px;\n  display: inline-block;\n  margin-right: 10px;\n  vertical-align: middle;\n  border: 1px solid #ddd;\n}\n.__mx-color_index_-alpha {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n  width: 224px;\n  height: 12px;\n  margin-bottom: 10px;\n}\n.__mx-color_index_-alpha-tracker {\n  height: 100%;\n}\n.__mx-color_index_-alpha-indicator {\n  position: absolute;\n  left: -2px;\n  top: 2px;\n  height: 8px;\n  width: 4px;\n  -webkit-box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);\n  background: #fff;\n  cursor: default;\n}\n");
let CSSNames = {"selected":"__mx-color_index_-selected","cnt":"__mx-color_index_-cnt"};
let ShortCuts = ['d81e06', 'f4ea2a', '1afa29', '1296db', '13227a', 'd4237a', 'ffffff', 'e6e6e6', 'dbdbdb', 'cdcdcd', 'bfbfbf', '8a8a8a', '707070', '515151', '2c2c2c', '000000', 'ea986c', 'eeb174', 'f3ca7e', 'f9f28b', 'c8db8c', 'aad08f', '87c38f', '83c6c2', '7dc5eb', '87a7d6', '8992c8', 'a686ba', 'bd8cbb', 'be8dbd', 'e89abe', 'e8989a', 'e16632', 'e98f36', 'efb336', 'f6ef37', 'afcd51', '7cba59', '36ab60', '1baba8', '17ace3', '3f81c1', '4f68b0', '594d9c', '82529d', 'a4579d', 'db649b', 'dd6572', 'd84e06', 'e0620d', 'ea9518', 'f4ea2a', '8cbb1a', '2ba515', '0e932e', '0c9890', '1295db', '0061b2', '0061b0', '004198', '122179', '88147f', 'd3227b', 'd6204b'];
let HSV2RGB = (h, s, v) => {
    let R, G, B, X, C;
    h = (h % 360) / 60;
    C = v * s;
    X = C * (1 - Math.abs(h % 2 - 1));
    R = G = B = v - C;
    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    let r = R * 255, g = G * 255, b = B * 255;
    return {
        r: r,
        g: g,
        b: b,
        hex: '#' + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1)
    };
};
let RGB2HSV = (r, g, b) => {
    //if (r > 0 || g > 0 || b > 0) {
    r /= 255;
    g /= 255;
    b /= 255;
    //}
    let H, S, V, C;
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
    tmpl: {"html":"<div id=\"shortcuts_<%=$$.id%>\"><ul class=\"__mx-color_index_-shortcuts\"><%for(var i=0;i<$$.shortcuts.length;i++){%><li class=\"__mx-color_index_-shortcuts-item\" id=\"sc_<%=$$.shortcuts[i]%>_<%=$$.id%>\" style=\"background:#<%=$$.shortcuts[i]%>\" mx-click=\"\u001f\u001e@{shortcuts.picked}({color:'#<%=$eq($$.shortcuts[i])%>'})\"></li><%}%></ul></div><div class=\"__mx-color_index_-body\"><div class=\"__mx-color_index_-cpicker-wrapper\"><div class=\"__mx-color_index_-cpicker\" id=\"cpicker_<%=$$.id%>\" mx-mousedown=\"\u001f\u001e@{color.zone.drag}()\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\"><defs><lineargradient id=\"gb_<%=$$.id%>\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#000000\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop></lineargradient><lineargradient id=\"gw_<%=$$.id%>\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#FFFFFF\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop></lineargradient></defs><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gw_<%=$$.id%>)\"></rect><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gb_<%=$$.id%>)\"></rect></svg><div class=\"__mx-color_index_-cpicker-indicator\" id=\"ph_<%=$$.id%>\"></div></div></div><div class=\"__mx-color_index_-slide-wrapper\"><div class=\"__mx-color_index_-slide\" mx-mousedown=\"\u001f\u001e@{slide.drag}()\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\"><defs><linearGradient id=\"ghsv_<%=$$.id%>\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#FF0000\" stop-opacity=\"1\"></stop><stop offset=\"13%\" stop-color=\"#FF00FF\" stop-opacity=\"1\"></stop><stop offset=\"25%\" stop-color=\"#8000FF\" stop-opacity=\"1\"></stop><stop offset=\"38%\" stop-color=\"#0040FF\" stop-opacity=\"1\"></stop><stop offset=\"50%\" stop-color=\"#00FFFF\" stop-opacity=\"1\"></stop><stop offset=\"63%\" stop-color=\"#00FF40\" stop-opacity=\"1\"></stop><stop offset=\"75%\" stop-color=\"#0BED00\" stop-opacity=\"1\"></stop><stop offset=\"88%\" stop-color=\"#FFFF00\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#FF0000\" stop-opacity=\"1\"></stop></linearGradient></defs><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#ghsv_<%=$$.id%>)\"></rect></svg><div class=\"__mx-color_index_-slide-indicator\" id=\"sh_<%=$$.id%>\"></div></div></div></div><%if($$.alpha){%><div class=\"__mx-color_index_-alpha __mx-style_index_-pr\"><div class=\"__mx-color_index_-alpha-tracker __mx-style_index_-pr\" id=\"at_<%=$$.id%>\" mx-mousedown=\"\u001f\u001e@{alpha.drag}()\"><div class=\"__mx-color_index_-alpha-indicator\" id=\"ai_<%=$$.id%>\"></div></div></div><%}%><div class=\"__mx-color_index_-foot\"><span class=\"__mx-color_index_-bgcolor\" id=\"bgcolor_<%=$$.id%>\"></span><input class=\"__mx-style_index_-input __mx-color_index_-color-value\" readonly=\"readonly\" id=\"val_<%=$$.id%>\"><%if($$.btns){%><button class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" type=\"button\" mx-click=\"\u001f\u001e@{enter}();\">确定</button><%}%></div>","subs":[],"file":"mx-color/index.html"},
    init(extra) {
        let me = this;
        me['@{color}'] = extra.color || '#ffffff';
        me['@{show.alpha}'] = (extra.showAlpha + '') === 'true';
        me['@{show.btns}'] = (extra.showBtns + '') === 'true';
        me['@{hsv.info}'] = {
            h: 0,
            s: 1,
            v: 1
        };
        $('#' + me.id).addClass(CSSNames.cnt);
    },
    render() {
        let me = this;
        me.updater.digest({
            id: me.id,
            alpha: me['@{show.alpha}'],
            btns: me['@{show.btns}'],
            shortcuts: ShortCuts
        });
        me['@{setColor}'](me['@{color}']);
    },
    '@{setHSV}'(hsv, ignoreSyncUI) {
        let me = this;
        let selfHSV = me['@{hsv.info}'];
        selfHSV.h = hsv.h % 360;
        selfHSV.s = hsv.s;
        selfHSV.v = hsv.v;
        let rgb = HSV2RGB(hsv.h, hsv.s, hsv.v);
        let hex = rgb.hex;
        let cpickerNode = $('#cpicker_' + me.id);
        let colorZone = HSV2RGB(hsv.h, 1, 1);
        cpickerNode.css('background', colorZone.hex);
        me['@{hex.color}'] = hex;
        me['@{sync.color}']();
        if (!ignoreSyncUI) {
            $('#shortcuts_' + me.id + ' li').removeClass(CSSNames.selected);
            let top = Math.round(selfHSV.h * pickerZone / 360 - slider);
            $('#sh_' + me.id).css({
                top: top
            });
            top = Math.round((1 - selfHSV.v) * pickerZone - pickerIndicator);
            let left = Math.round(selfHSV.s * pickerZone - pickerIndicator);
            $('#ph_' + me.id).css({
                left: left,
                top: top
            });
        }
        $('#sc_' + hex.substr(1, 6) + '_' + me.id).addClass(CSSNames.selected);
    },
    '@{setColor}'(hex) {
        let me = this;
        let r = parseInt(hex.substr(1, 2), 16);
        let g = parseInt(hex.substr(3, 2), 16);
        let b = parseInt(hex.substr(5, 2), 16);
        let a = parseInt(hex.substr(7, 2), 16);
        if (isNaN(a)) {
            a = 255;
        }
        me['@{hex.alpha}'] = ('0' + a.toString(16)).slice(-2);
        let hsv = RGB2HSV(r, g, b);
        me['@{setHSV}'](hsv);
        if (me['@{show.alpha}']) {
            me['@{setAlpha}'](a);
        }
    },
    '@{slide.drag}<mousedown>'(e) {
        let me = this;
        let current = $(e.eventTarget);
        let indicator = $('#sh_' + me.id);
        let pos = e;
        let offset = current.offset(), top = e.pageY - offset.top, h = top / pickerZone * 360;
        me['@{setHSV}']({
            h: h,
            s: me['@{hsv.info}'].s,
            v: me['@{hsv.info}'].v
        });
        let startY = parseInt(indicator.css('top'), 10);
        DD.begin(e.eventTarget, event => {
            let offsetY = event.pageY - pos.pageY;
            offsetY += startY;
            if (offsetY <= -slider)
                offsetY = -slider;
            else if (offsetY >= (pickerZone - slider))
                offsetY = pickerZone - slider;
            indicator.css({
                top: offsetY
            });
            let h = (offsetY + slider) / pickerZone * 360;
            me['@{setHSV}']({
                h: h,
                s: me['@{hsv.info}'].s,
                v: me['@{hsv.info}'].v
            }, true);
        }, () => {
            me['@{fire.event}']();
        });
    },
    '@{color.zone.drag}<mousedown>'(e) {
        let me = this, offset = $(e.eventTarget).offset(), left = e.pageX - offset.left, top = e.pageY - offset.top, s = left / pickerZone, v = (pickerZone - top) / pickerZone;
        me['@{setHSV}']({
            h: me['@{hsv.info}'].h,
            s: s,
            v: v
        });
        let current = $('#ph_' + me.id);
        let startX = parseInt(current.css('left'), 10);
        let startY = parseInt(current.css('top'), 10);
        let pos = e;
        DD.begin(e.eventTarget, (event) => {
            let offsetY = event.pageY - pos.pageY;
            let offsetX = event.pageX - pos.pageX;
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
            let s = (offsetX + pickerIndicator) / pickerZone;
            let v = (pickerZone - (offsetY + pickerIndicator)) / pickerZone;
            me['@{setHSV}']({
                h: me['@{hsv.info}'].h,
                s: s,
                v: v
            });
        }, () => {
            me['@{fire.event}']();
        });
    },
    '@{setAlpha}'(a) {
        a /= 255;
        a *= alphaWidth;
        a -= slider;
        $('#ai_' + this.id).css({
            left: a
        });
    },
    '@{sync.color}'() {
        let me = this;
        let hex = me['@{hex.color}'];
        $('#at_' + me.id).css({
            background: 'linear-gradient(to right, ' + hex + '00 0%,' + hex + ' 100%)'
        });
        if (me['@{show.alpha}']) {
            hex += me['@{hex.alpha}'];
        }
        $('#bgcolor_' + me.id).css('background', hex);
        $('#val_' + me.id).val(hex);
    },
    '@{alpha.drag}<mousedown>'(e) {
        let current = $(e.eventTarget);
        let pos = e;
        let me = this;
        let indicator = $('#ai_' + me.id);
        let offset = current.offset(), left = e.pageX - offset.left, a = (left / alphaWidth * 255) | 0;
        me['@{hex.alpha}'] = ('0' + a.toString(16)).slice(-2);
        me['@{setAlpha}'](a);
        me['@{sync.color}']();
        let startX = parseInt(indicator.css('left'), 10);
        DD.begin(e.eventTarget, (event) => {
            let offsetX = event.pageX - pos.pageX;
            offsetX += startX;
            if (offsetX <= -slider)
                offsetX = -slider;
            else if (offsetX >= (alphaWidth - slider))
                offsetX = alphaWidth - slider;
            indicator.css({
                left: offsetX
            });
            let a = Math.round((offsetX + slider) / alphaWidth * 255);
            me['@{hex.alpha}'] = ('0' + a.toString(16)).slice(-2);
            me['@{sync.color}']();
        }, () => {
            me['@{fire.event}']();
        });
    },
    '@{shortcuts.picked}<click>'(e) {
        this['@{setColor}'](e.params.color);
        $(e.eventTarget).addClass(CSSNames.selected);
        this['@{fire.event}']();
    },
    '@{fire.event}'(fromBtn) {
        let me = this;
        if (!me['@{show.btns}'] || fromBtn) {
            let c = $('#val_' + me.id).val();
            if (c != me['@{color}']) {
                $('#' + me.id).trigger({
                    type: 'change',
                    color: me['@{color}'] = c
                });
            }
        }
    },
    '@{enter}<click>'() {
        this['@{fire.event}'](1);
    }
});

});