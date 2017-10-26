/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Vframe = Magix.Vframe;
let Monitor = require('../mx-monitor/index');
let Wrapper = '@datepicker.html';
require('./index');
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me['@{extra}'] = extra;
        Monitor['@{setup}']();
        let oNode = $('#' + me.id);
        let click = () => {
            me['@{show}']();
        };
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            $('#dpcnt_' + me.id).remove();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me['@{owner.node}'] = oNode;
        oNode.prop('autocomplete', 'off');
    },
    '@{inside}'(node) {
        let me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'dpcnt_' + me.id);
    },
    update(options) {
        let me = this;
        let vf = Vframe.get('dpcnt_' + me.id);
        vf.invoke('update', [options]);
    },
    render() {
        let me = this;
        let id = 'dpcnt_' + me.id;
        $(me.wrapEvent(Wrapper)).attr('id', id).insertAfter(me['@{owner.node}']);
        if (!me['@{extra}'].selected) {
            me['@{extra}'].selected = me['@{owner.node}'].val();
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            let node = $('#dpcnt_' + me.id),
                ref = me['@{owner.node}'];
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            if (!me['@{core.rendered}']) {
                me['@{core.rendered}'] = true;
                me.owner.mountVframe('dpcnt_' + me.id, '@./index', me['@{extra}']);
            }
            node.show();
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
            node.hide();
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