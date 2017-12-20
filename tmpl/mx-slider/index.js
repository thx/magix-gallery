/*
ver:1.3.9
*/
import { on } from 'cluster';/*
    author:xinglie.lkf@taobao.com
 */
'ref@./style.less';
let Magix = require('magix');
let $ = require('$');
require('./style');
let DD = require('../mx-dragdrop/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        let oNode = $('#' + me.id);
        oNode.addClass('@style.less:as-input');
        me.assign(extra);
        let click = e => {
            if (me['@{temp.hold.event}'] || me['@{disabled}']) return;
            let offset = oNode.offset();
            let vars = me['@{get.ui.vars}']();
            let pos = -1;
            if (me['@{vertical}']) {
                pos = vars.rMax - e.pageY + offset.top;
            } else {
                pos = e.pageX - offset.left;
            }
            let p = (pos - vars.half) / vars.max;
            let v = me['@{get.fixed.value}'](p);
            me.val(v);
        };
        let keydown = e => {
            if (me['@{dragging}']) return;
            if (e.keyCode == 37 || e.keyCode == 40) {
                e.preventDefault();
                let v = +me['@{value}'];
                v -= me['@{step}'];
                me.val(v);
            } else if (e.keyCode == 39 || e.keyCode == 38) {
                e.preventDefault();
                let v = +me['@{value}'];
                v += me['@{step}'];
                me.val(v);
            }
        };
        oNode.on('click', click);
        oNode.on('keydown', keydown);
        me.on('destroy', () => {
            oNode.off('click', click);
            oNode.off('keydown', keydown);
        });
        me['@{owner.node}'] = oNode;
    },
    assign(ops) {
        let me = this;
        me['@{width}'] = +ops.width || 340;
        me['@{height}'] = +ops.height || 340;
        me['@{min}'] = +ops.min || 0;
        me['@{max}'] = +ops.max || 100;
        me['@{step}'] = +ops.step || 1;
        me['@{disabled}'] = (ops.disabled + '') === 'true';
        me['@{vertical}'] = (ops.vertical + '') === 'true';
        let s = me['@{step}'] + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        me['@{tail.length}'] = i;
        me['@{value}'] = +ops.value || 0;
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            min: me['@{min}'].toFixed(me['@{tail.length}']),
            max: me['@{max}'].toFixed(me['@{tail.length}']),
            width: me['@{width}'],
            height: me['@{height}'],
            vertical: me['@{vertical}']
        });
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('@style.less:notallowed').prop('tabindex', me['@{disabled}'] ? -1 : 0);
        me.val(me['@{value}']);
    },
    '@{get.ui.vars}'() {
        let me = this;
        let rail = me['@{owner.node}'].find('.@style.less:rail');
        let tracker = me['@{owner.node}'].find('.@style.less:tracker');
        let indicator = me['@{owner.node}'].find('.@style.less:indicator');
        let pLabel = me['@{owner.node}'].find('.@style.less:pointer-label');
        let half = indicator.outerWidth() / 2;
        let rMax = me['@{vertical}'] ? rail.height() : rail.width();
        let max = rMax - half * 2;
        return {
            rail,
            pLabel,
            tracker,
            indicator,
            rMax,
            max,
            half
        };
    },
    val(v, ignoreSyncValue) {
        let me = this;
        let nv = +v;
        if (nv || nv === 0) {
            me['@{owner.node}'].prop('value', nv);
            let max = me['@{max}'],
                min = me['@{min}'];
            if (nv > max) nv = max;
            else if (nv < min) nv = min;
            let p = (nv - min) / (max - min);
            let vars = me['@{get.ui.vars}']();
            let pos = p * vars.max;
            if (me['@{vertical}']) {
                vars.indicator.css({
                    bottom: pos
                });
            } else {
                vars.indicator.css({
                    left: pos
                });
            }
            v = me['@{get.fixed.value}'](p);
            let node = vars.pLabel;
            node.html(v);
            let l = pos + vars.half;
            if (me['@{vertical}']) {
                let pHalf = node.height() / 2;
                l -= pHalf;
                node.css({
                    bottom: l
                });
            } else {
                let pHalf = node.width() / 2;
                if (l < pHalf) {
                    l = 0;
                } else if (l + pHalf > vars.rMax) {
                    l = vars.rMax - 2 * pHalf;
                } else {
                    l -= pHalf;
                }
                node.css({
                    left: l
                });
            }
            if (me['@{vertical}']) {
                vars.tracker.height(pos + vars.half);
            } else {
                vars.tracker.width(pos + vars.half);
            }
            if (!ignoreSyncValue) {
                if (me['@{value}'] != v) {
                    me['@{fire.event}'](v);
                }
                me['@{value}'] = v;
            }
        }
        return +me['@{value}'];
    },
    '@{get.fixed.value}'(p) {
        let me = this;
        let max = me['@{max}'],
            min = me['@{min}'],
            step = me['@{step}'],
            v;
        if (p === 0) v = min;
        else if (p === 1) v = max;
        else {
            v = min + (max - min) * p;
            v = Math.round(v / step) * step;
        }
        v = v.toFixed(me['@{tail.length}']);
        return v;
    },
    '@{fire.event}'(p) {
        this['@{owner.node}'].prop('value', +p).trigger({
            type: 'change',
            value: +p
        });
    },
    '@{drag}<mousedown>'(e) {
        let me = this;
        if (me['@{disabled}']) return;
        let current = $(e.eventTarget);
        let size = current.outerWidth();
        let min = 0; //最小
        let max = -1;
        if (me['@{vertical}']) {
            max = current.parent().height() - size;
        } else {
            max = current.parent().width() - size;
        }
        let currentValue = parseInt(current.css(me['@{vertical}'] ? 'bottom' : 'left'), 10);
        let dragValue = me['@{value}'];
        me['@{dragging}'] = 1;
        DD.begin(e.eventTarget, (ex) => {
            DD.clear();
            let newValue = -1;
            if (me['@{vertical}']) {
                newValue = currentValue + e.pageY - ex.pageY;
            } else {
                newValue = currentValue + ex.pageX - e.pageX;
            }
            if (newValue < min) newValue = min;
            else if (newValue > max) newValue = max;
            let p = newValue / max;
            me.val(dragValue = me['@{get.fixed.value}'](p), true);
        }, () => {
            if (me['@{value}'] != dragValue) {
                me['@{value}'] = dragValue;
                me['@{fire.event}'](dragValue);
            }
            me['@{temp.hold.event}'] = true;
            setTimeout(me.wrapAsync(() => {
                delete me['@{temp.hold.event}'];
            }), 20);
            delete me['@{dragging}'];
        });
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
});