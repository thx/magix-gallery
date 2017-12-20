/*
ver:1.3.9
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let DD = require('../mx-dragdrop/index');
Magix.applyStyle('@index.less');
let CSSNames = 'names@index.less[selected,cnt]';
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
    tmpl: '@index.html:const[id,shortcuts,alpha,btns]',
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
        let cpickerNode = $('#cz_' + me.id);
        let pickerZone = cpickerNode.width();
        let colorZone = HSV2RGB(hsv.h, 1, 1);
        cpickerNode.css('background', colorZone.hex);
        me['@{hex.color}'] = hex;
        me['@{sync.color}']();
        if (!ignoreSyncUI) {
            $('#scs_' + me.id + ' li').removeClass(CSSNames.selected);
            let slider = $('#si_' + me.id).height() / 2;
            let top = Math.round(selfHSV.h * pickerZone / 360 - slider);
            let pickerIndicator = $('#ci_' + me.id).width() / 2;
            $('#si_' + me.id).css({
                top: top
            });
            top = Math.round((1 - selfHSV.v) * pickerZone - pickerIndicator);
            let left = Math.round(selfHSV.s * pickerZone - pickerIndicator);
            $('#ci_' + me.id).css({
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
        let indicator = $('#si_' + me.id);
        let pos = e;
        let pickerZone = $('#cz_' + me.id).width();
        let slider = $('#si_' + me.id).height() / 2;
        let offset = current.offset(),
            top = e.pageY - offset.top,
            h = top / pickerZone * 360;
        me['@{setHSV}']({
            h: h,
            s: me['@{hsv.info}'].s,
            v: me['@{hsv.info}'].v
        });
        let startY = parseInt(indicator.css('top'), 10);
        DD.begin(e.eventTarget, event => {
            let offsetY = event.pageY - pos.pageY;
            offsetY += startY;
            if (offsetY <= -slider) offsetY = -slider;
            else if (offsetY >= (pickerZone - slider)) offsetY = pickerZone - slider;
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
        let me = this,
            pickerZone = $('#cz_' + me.id).width(),
            pickerIndicator = $('#ci_' + me.id).width() / 2,
            offset = $(e.eventTarget).offset(),
            left = e.pageX - offset.left,
            top = e.pageY - offset.top,
            s = left / pickerZone,
            v = (pickerZone - top) / pickerZone;
        me['@{setHSV}']({
            h: me['@{hsv.info}'].h,
            s: s,
            v: v
        });
        let current = $('#ci_' + me.id);
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
        let me = this;
        let alphaWidth = $('#at_' + me.id).width();
        let slider = $('#si_' + me.id).height() / 2;
        a /= 255;
        a *= alphaWidth;
        a -= slider;
        $('#ai_' + me.id).css({
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
        $('#bc_' + me.id).css('background', hex);
        $('#v_' + me.id).val(hex);
    },
    '@{alpha.drag}<mousedown>'(e) {
        let current = $(e.eventTarget);
        let pos = e;
        let me = this;
        let indicator = $('#ai_' + me.id);
        let alphaWidth = $('#at_' + me.id).width();
        let slider = $('#si_' + me.id).height() / 2;
        let offset = current.offset(),
            left = e.pageX - offset.left,
            a = (left / alphaWidth * 255) | 0;
        me['@{hex.alpha}'] = ('0' + a.toString(16)).slice(-2);
        me['@{setAlpha}'](a);
        me['@{sync.color}']();
        let startX = parseInt(indicator.css('left'), 10);
        DD.begin(e.eventTarget, (event) => {
            let offsetX = event.pageX - pos.pageX;
            offsetX += startX;
            if (offsetX <= -slider) offsetX = -slider;
            else if (offsetX >= (alphaWidth - slider)) offsetX = alphaWidth - slider;
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
            let c = $('#v_' + me.id).val();
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