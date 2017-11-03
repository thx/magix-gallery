/*
ver:1.3.5
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let DD = require('../mx-dragdrop/index');
let pickerIndicator = 6 / 2;
let pickerZone = 196;
let slider = 16 / 2;
Magix.applyStyle('@index.css');
let GraphicsType = (window.SVGAngle || document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1') ? 'SVG' : 'VML');
let RenderSVG = (picker, slide) => {
    slide.append('@index-svg-slide.html');
    picker.append('@index-svg-picker.html');
};
let RenderVML = (picker, slide) => {
    if (!document.namespaces.mxv) {
        document.namespaces.add('mxv', 'urn:schemas-microsoft-com:vml', '#default#VML');
    }
    slide.html('@index-vml-slide.html');
    picker.html('@index-vml-picker.html');
};
let CSSNames = 'names@index.css[selected,cnt]';
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

    let r = R * 255,
        g = G * 255,
        b = B * 255;
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
    tmpl: '@index.html:const[id,shortcuts]',
    init(extra) {
        let me = this;
        me['@{color}'] = extra.color || '#ffffff';
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
            shortcuts: ShortCuts
        });
        let slideNode = $('#slide_' + me.id);
        let pickerNode = $('#cpicker_' + me.id);
        if (GraphicsType == 'SVG') {
            RenderSVG(pickerNode, slideNode);
        } else {
            RenderVML(pickerNode, slideNode);
        }
        me.setColor(me['@{color}']);
    },
    setHSV(hsv, ignoreSyncUI) {
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
        $('#bgcolor_' + me.id).css('background', hex);
        $('#val_' + me.id).val(hex);
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
    setColor(hex) {
        let me = this;
        let r = parseInt(hex.substr(1, 2), 16);
        let g = parseInt(hex.substr(3, 2), 16);
        let b = parseInt(hex.substr(5, 2), 16);
        let hsv = RGB2HSV(r, g, b);
        me.setHSV(hsv);
    },
    '@{slide.drag}<mousedown>' (e) {
        let me = this;
        let current = $(e.eventTarget);
        let startY = parseInt(current.css('top'), 10);
        let pos = e;
        DD.begin(e.eventTarget, (event) => {
            let offsetY = event.pageY - pos.pageY;
            offsetY += startY;
            if (offsetY <= -slider) offsetY = -slider;
            else if (offsetY >= (pickerZone - slider)) offsetY = pickerZone - slider;
            current.css({
                top: offsetY
            });
            let h = (offsetY + slider) / pickerZone * 360;
            me.setHSV({
                h: h,
                s: me['@{hsv.info}'].s,
                v: me['@{hsv.info}'].v
            }, true);
        });
    },
    '@{picker.drag}<mousedown>' (e) {
        let me = this;
        let current = $(e.eventTarget);
        let startX = parseInt(current.css('left'), 10);
        let startY = parseInt(current.css('top'), 10);
        let pos = e;
        DD.begin(e.eventTarget, (event) => {
            let offsetY = event.pageY - pos.pageY;
            let offsetX = event.pageX - pos.pageX;
            offsetY += startY;
            if (offsetY <= -pickerIndicator) offsetY = -pickerIndicator;
            else if (offsetY >= (pickerZone - pickerIndicator)) offsetY = pickerZone - pickerIndicator;

            offsetX += startX;

            if (offsetX <= -pickerIndicator) offsetX = -pickerIndicator;
            else if (offsetX >= (pickerZone - pickerIndicator)) offsetX = pickerZone - pickerIndicator;
            current.css({
                top: offsetY,
                left: offsetX
            });
            let s = (offsetX + pickerIndicator) / pickerZone;
            let v = (pickerZone - (offsetY + pickerIndicator)) / pickerZone;
            me.setHSV({
                h: me['@{hsv.info}'].h,
                s: s,
                v: v
            });
        });
    },
    '@{slide.clicked}<click>' (e) {
        let me = this,
            offset = $(e.eventTarget).offset(),
            top = e.pageY - offset.top,
            h = top / pickerZone * 360;
        me.setHSV({
            h: h,
            s: me['@{hsv.info}'].s,
            v: me['@{hsv.info}'].v
        });
    },
    '@{color.zone.clicked}<click>' (e) {
        let me = this,
            offset = $(e.eventTarget).offset(),
            left = e.pageX - offset.left,
            top = e.pageY - offset.top,
            s = left / pickerZone,
            v = (pickerZone - top) / pickerZone;
        me.setHSV({
            h: me['@{hsv.info}'].h,
            s: s,
            v: v
        });
    },
    '@{shortcuts.picked}<click>' (e) {
        this.setColor(e.params.color);
        $(e.eventTarget).addClass(CSSNames.selected);
    },
    '@{enter}<click>' () {
        let me = this;
        let ipt = $('#val_' + me.id);
        $('#' + me.id).trigger({
            type: 'change',
            color: ipt.val()
        });
    }
});