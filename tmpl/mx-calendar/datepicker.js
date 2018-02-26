/*
ver:2.0.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Vframe = Magix.Vframe;
let Monitor = require('../mx-monitor/index');
require('./index');
module.exports = Magix.View.extend({
    tmpl: '@datepicker.html',
    init(extra) {
        let me = this;
        extra.hasBtn = 1;
        me['@{extra}'] = extra;
        Monitor['@{setup}']();
        let oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        let click = () => {
            me['@{show}']();
        };
        let change = e => {
            if (!e.date) {
                e.stopPropagation();
            }
        };
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            oNode.off('click', click).off('change', change);
        });
        oNode.on('click', click).on('change', change);
        me['@{owner.node}'] = oNode;
        oNode.prop('autocomplete', 'off');
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['@{owner.node}'][0]);
    },
    update(options) {
        let me = this;
        let vf = Vframe.get('dpcnt_' + me.id);
        vf.invoke('update', [options]);
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
        if (!me['@{extra}'].selected) {
            me['@{extra}'].selected = me['@{owner.node}'].val();
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            let node = me['@{relate.node}'],
                ref = me['@{owner.node}'];
            me['@{ui.show}'] = true;
            node.show();
            Monitor['@{add}'](me);
            if (!me['@{core.rendered}']) {
                me['@{core.rendered}'] = true;
                me.owner.mountVframe('dpcnt_' + me.id, '@./index', me['@{extra}']);
            }
            let offset = ref.offset();
            let left, top;
            switch (me['@{extra}'].placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['@{extra}'].align) {
                case 'right':
                    left = offset.left + ref.outerWidth() - node.outerWidth();
                    break;
                default:
                    left = offset.left;
                    break;
            }
            node.offset({
                left: left,
                top: top
            });
        }
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.show}']) {
            let node = $('#dpcnt_' + me.id);
            let vf = node.prop('vframe');
            if (vf) {
                vf.invoke('@{toDefaultPanel}');
            }
            me['@{ui.show}'] = false;
            me['@{relate.node}'].hide();
            Monitor['@{remove}'](me);
        }
    },
    '@{date.picked}<change>'(e) {
        let me = this;
        e.stopPropagation();
        let val = e.date;
        if (e.time) {
            val += ' ' + e.time;
        }
        me['@{owner.node}'].val(val).trigger({
            type: 'change',
            date: e.date,
            time: e.time
        });
        me['@{hide}']();
    },
    '@{hide}<cancel>'() {
        this['@{hide}']();
    }
});