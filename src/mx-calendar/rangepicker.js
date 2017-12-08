/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-calendar/rangepicker',["magix","$","../mx-monitor/index","./index","./range"],(require,exports,module)=>{
/*Magix,$,Monitor,Calendar,RangeDate*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
let Calendar = require('./index');
let RangeDate = require('./range');
let Wrapper = "<div mx-change=\"\u001f\u001e@{range.picked}()\" mx-cancel=\"\u001f\u001e@{hide}()\" style=\"position:absolute;display:none;z-index:10\"></div>";
let DefaultQuickDateKeys = [
    'today',
    'yesterday',
    'passed7',
    'lastestThisMonth',
    'preMonth',
    'lastest15'
];
let Rangepicker = Magix.View.extend({
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
        let click = () => {
            me['@{show}']();
        };
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            $('#rpcnt_' + me.id).remove();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me['@{owner.node}'] = oNode;
        oNode.prop('autocomplete', 'off');
    },
    '@{inside}'(node) {
        let me = this;
        let inView = Magix.inside(node, me.id) || Magix.inside(node, 'rpcnt_' + me.id);
        if (!inView) {
            let children = me.owner.children();
            for (let i = children.length - 1; i >= 0; i--) {
                let child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('@{inside}', node);
                }
                if (inView)
                    break;
            }
        }
        return inView;
    },
    '@{fill.to.node}'() {
        let me = this;
        let dates = me['@{dates}'];
        if (dates.quickDateText) {
            me['@{owner.node}'].val(dates.quickDateText);
        }
        else {
            me['@{owner.node}'].val(dates.startStr + '至' + dates.endStr);
        }
    },
    render() {
        let me = this;
        let id = 'rpcnt_' + me.id;
        $(me.wrapEvent(Wrapper)).attr('id', id).insertAfter(me['@{owner.node}']);
        if (me['@{auto.fillback}']) {
            me['@{fill.to.node}']();
        }
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            let node = $('#rpcnt_' + me.id), ref = me['@{owner.node}'];
            me['@{ui.show}'] = true;
            if (!me['@{core.rendered}']) {
                me['@{core.rendered}'] = true;
                me.owner.mountVframe('rpcnt_' + me.id, 'mx-calendar/range', {
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
            node.show();
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
            let node = $('#rpcnt_' + me.id);
            me['@{ui.show}'] = false;
            node.hide();
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

});