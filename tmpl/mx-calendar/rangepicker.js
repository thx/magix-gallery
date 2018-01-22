/*
ver:2.0.3
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
let Calendar = require('./index');
let RangeDate = require('./range');
let DefaultQuickDateKeys = [
    'today',
    'yesterday',
    'passed7',
    'lastestThisMonth',
    'preMonth',
    'lastest15'
];
let Rangepicker = Magix.View.extend({
    tmpl: '@rangepicker.html',
    init(extra) {
        let me = this;
        let start = extra.start;
        let end = extra.end;
        let timeType = extra.timeType;
        let formatter = extra.formatter || ('YYYY-MM-dd' + (timeType ? ' hh:mm:ss' : ''));
        let today = Calendar.format(new Date(), formatter);
        me['@{datetime.formatter}'] = formatter;
        me['@{auto.fillback}'] = true;
        me['@{time.type}'] = timeType;
        me['@{date.type}'] = extra.dateType;
        if (!start) {
            me['@{auto.fillback}'] = false;
            start = today;
        }
        if (!end) {
            me['@{auto.fillback}'] = false;
            end = today;
        }
        me['@{shortcuts.show}'] = extra.shortcuts != 'false';
        me['@{max}'] = extra.max;
        me['@{min}'] = extra.min;
        me['@{pos.placement}'] = extra.placement;
        me['@{pos.align}'] = extra.align;
        me['@{dates.quick}'] = me['@{shortcuts.show}'] ? DefaultQuickDateKeys : [];
        me['@{dates}'] = RangeDate.getDescription(start, end, me['@{dates.quick}'], formatter);
        Monitor['@{setup}']();
        let oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        let click = () => {
            me['@{show}']();
        };
        let change = e => {
            if (!e.dates) {
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
        let inView = Magix.inside(node, me.id) ||
            Magix.inside(node, me['@{owner.node}'][0]);
        if (!inView) {
            let children = me.owner.children();
            for (let i = children.length - 1; i >= 0; i--) {
                let child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('@{inside}', [node]);
                }
                if (inView) break;
            }
        }
        return inView;
    },
    '@{fill.to.node}'() {
        let me = this;
        let dates = me['@{dates}'];
        if (dates.quickDateText) {
            me['@{owner.node}'].val(dates.quickDateText);
        } else {
            me['@{owner.node}'].val(dates.startStr + ' ~ ' + dates.endStr);
        }
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
        if (me['@{auto.fillback}']) {
            me['@{fill.to.node}']();
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            let node = me['@{relate.node}'],
                ref = me['@{owner.node}'];
            node.show();
            me['@{ui.show}'] = true;
            if (!me['@{core.rendered}']) {
                me['@{core.rendered}'] = true;
                me.owner.mountVframe('rpcnt_' + me.id, '@./range', {
                    min: me['@{min}'],
                    max: me['@{max}'],
                    timeType: me['@{time.type}'],
                    dateType: me['@{date.type}'],
                    formatter: me['@{datetime.formatter}'],
                    dates: me['@{dates}'],
                    quickDates: me['@{dates.quick}'],
                    placement: me['@{pos.placement}'],
                    align: me['@{pos.align}']
                });
            }
            Monitor['@{add}'](me);
            let offset = ref.offset();
            let left, top;
            switch (me['@{pos.placement}']) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['@{pos.align}']) {
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
    '@{hide}'(ignore) {
        let me = this;
        if (me['@{ui.show}']) {
            me['@{relate.node}'].hide();
            let node = $('#rpcnt_' + me.id);
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            if (!ignore) {
                node.invokeView('@{restore}');
            }
        }
    },
    '@{range.picked}<change>'(e) {
        let me = this;
        e.stopPropagation();
        me['@{dates}'] = e.dates;
        me['@{fill.to.node}']();
        me['@{hide}'](true);
        me['@{owner.node}'].trigger({
            type: 'change',
            dates: e.dates
        });
    },
    '@{hide}<cancel>'(e) {
        e.stopPropagation();
        this['@{hide}']();
    }
});

module.exports = Rangepicker;