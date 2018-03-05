/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me.assign(extra);
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
    },
    assign(ops) {
        let me = this;
        let v = +ops.value;
        if (!v && v !== 0) v = '';
        me['@{value}'] = v;
        me['@{step}'] = +ops.step || 1;
        me['@{disabled}'] = (ops.disabled + '') === 'true';
        me['@{max}'] = Magix.has(ops, 'max') ? +ops.max : Number.MAX_VALUE;
        me['@{min}'] = Magix.has(ops, 'min') ? +ops.min : -Number.MAX_VALUE;
        me['@{ratio}'] = +ops.ratio || 10;
        let s = me['@{step}'] + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        me['@{tail.length}'] = i;
        return true;
    },
    render() {
        let me = this;
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('@index.less:notallowed');
        me.updater.digest({
            value: me['@{value}'],
            disabled: me['@{disabled}']
        });
        me['@{ctrl.input}'] = me['@{owner.node}'].find('input');
    },
    val(v) {
        v = +v;
        let me = this;
        if (v || v === 0) {
            let max = me['@{max}'];
            let min = me['@{min}'];
            let step = me['@{step}'];
            if (v > max) {
                v = max;
            } else if (v < min) {
                v = min;
            }
            if (v !== me['@{value}']) {
                v = step < 1 ? Math.round(v / step) * step : v;
                v = v.toFixed(me['@{tail.length}']);
                me['@{ctrl.input}'].val(v);
                v = +v;
                me['@{owner.node}'].prop('value', me['@{value}'] = v).trigger({
                    type: 'input',
                    value: v
                });
            }
        }
        return me['@{value}'];
    },
    '@{num.change}'(increase, enlarge) {
        let me = this;
        let value = me['@{value}'];
        if (value === '') value = 0; //for init
        let step = me['@{step}'];
        let c = value;
        if (enlarge) step *= me['@{ratio}'];
        if (increase) {
            c += step;
        } else {
            c -= step;
        }
        me.val(c);
    },
    '@{cursor.show}'() {
        let me = this;
        let ipt = me['@{ctrl.input}'][0];
        if (ipt) {
            ipt.focus();
            ipt.selectionStart = ipt.selectionEnd = ipt.value.length;
        }
    },
    '@{simulator.active}'() {
        let me = this;
        me['@{owner.node}'].addClass('@scoped.style:input-focus');
        if (!Magix.has(me, '@{last.value}')) {
            me['@{last.value}'] = me['@{value}'];
        }
    },
    '@{num.check}<change>'(e) {
        e.stopPropagation();
        let target = e.eventTarget;
        let value = target.value;
        let me = this;
        if (value === '') {
            target.value = me['@{value}'] = '';
            me['@{owner.node}'].prop('value', '');
            return;
        }
        let v = Number(value);
        if (v || v === 0) {
            me.val(v);
        }
        v = me['@{value}'];
        if (v || v === 0) {
            v = v.toFixed(me['@{tail.length}']);
        } else {
            v = '';
        }
        target.value = v;
    },
    '@{active}<focusin>'() {
        this['@{simulator.active}']();
    },
    '@{deactive}<focusout>'() {
        let me = this;
        if (!me['@{ui.keep.active}']) {
            me['@{owner.node}'].removeClass('@scoped.style:input-focus');
            if (me['@{last.value}'] != me['@{value}']) {
                me['@{owner.node}'].trigger({
                    type: 'change',
                    value: me['@{value}']
                });
            }
            delete me['@{last.value}'];
        }
    },
    '@{num.change}<click>'(e) {
        let me = this;
        if (!me['@{disabled}'] && !me['@{fast.change.start}']) {
            me['@{num.change}'](e.params.i, e.shiftKey);
            me['@{cursor.show}']();
        }
    },
    '@{fast.start}<mousedown>'(e) {
        let me = this;
        if (!me['@{disabled}']) {
            me['@{ui.keep.active}'] = true;
            me['@{simulator.active}']();
            me['@{long.tap.timer}'] = setTimeout(me.wrapAsync(() => {
                me['@{interval.timer}'] = setInterval(me.wrapAsync(() => {
                    me['@{fast.change.start}'] = true;
                    me['@{num.change}'](e.params.i);
                    me['@{cursor.show}']();
                }), 50);
            }), 300);
        }
    },
    '@{press.check}<keydown>'(e) {
        if (e.keyCode == 38 || e.keyCode == 40) {
            e.preventDefault();
            let me = this;
            if (!me['@{disabled}']) {
                let target = e.eventTarget;
                let value = target.value;
                if (value === '') {
                    me['@{value}'] = '';
                } else {
                    let v = Number(value);
                    if (v || v === 0) {
                        if (v != me['@{value}']) {
                            me['@{value}'] = v;
                        }
                    }
                }
                me['@{num.change}'](e.keyCode == 38, e.shiftKey);
            }
        }
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    },
    '$doc<mouseup>'() {
        let me = this;
        clearTimeout(me['@{long.tap.timer}']);
        clearInterval(me['@{interval.timer}']);
        delete me['@{ui.keep.active}'];
        setTimeout(me.wrapAsync(() => {
            delete me['@{fast.change.start}'];
        }), 0);
    }
});