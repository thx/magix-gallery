/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/rangepicker',["magix","$","../mx-monitor/index","./index","./range"],function(require,exports,module){
/*Magix,$,Monitor,Calendar,RangeDate*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var $ = require('$');
var Monitor = require('../mx-monitor/index');
var Calendar = require('./index');
var RangeDate = require('./range');
var Wrapper = "<div mx-change=\"\u001f\u001e_U()\" mx-cancel=\"\u001f\u001e_a()\" style=\"position:absolute;display:none;z-index:10\"></div>";
var DefaultQuickDateKeys = [
    'today',
    'yesterday',
    'passed7',
    'lastestThisMonth',
    'preMonth',
    'lastest15'
];
var Rangepicker = Magix.View.extend({
    init: function (extra) {
        var me = this;
        var start = extra.start;
        var end = extra.end;
        var timeType = extra.timeType;
        var formatter = extra.formatter || ('YYYY-MM-dd' + (timeType ? ' hh:mm:ss' : ''));
        var today = Calendar.format(new Date(), formatter);
        me['_M'] = formatter;
        me['_R'] = true;
        me['_K'] = timeType;
        me['_L'] = extra.dateType;
        if (!start) {
            me['_R'] = false;
            start = today;
        }
        if (!end) {
            me['_R'] = false;
            end = today;
        }
        me['_S'] = extra.shortcuts != 'false';
        me['_F'] = extra.max;
        me['_E'] = extra.min;
        me['_I'] = extra.placement;
        me['_J'] = extra.align;
        me['_H'] = me['_S'] ? DefaultQuickDateKeys : [];
        me['_G'] = RangeDate.getDescription(start, end, me['_H'], formatter);
        Monitor['_d']();
        var oNode = $('#' + me.id);
        var click = function () {
            me['_e']();
        };
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
            $('#rpcnt_' + me.id).remove();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me['_h'] = oNode;
        oNode.prop('autocomplete', 'off');
    },
    '_i': function (node) {
        var me = this;
        var inView = Magix.inside(node, me.id) || Magix.inside(node, 'rpcnt_' + me.id);
        if (!inView) {
            var children = me.owner.children();
            for (var i = children.length - 1; i >= 0; i--) {
                var child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('_i', node);
                }
                if (inView)
                    break;
            }
        }
        return inView;
    },
    '_T': function () {
        var me = this;
        var dates = me['_G'];
        if (dates.quickDateText) {
            me['_h'].val(dates.quickDateText);
        }
        else {
            me['_h'].val(dates.startStr + '至' + dates.endStr);
        }
    },
    render: function () {
        var me = this;
        var id = 'rpcnt_' + me.id;
        $(me.wrapEvent(Wrapper)).attr('id', id).insertAfter(me['_h']);
        if (me['_R']) {
            me['_T']();
        }
    },
    '_e': function () {
        var me = this;
        if (!me['_j']) {
            var node = $('#rpcnt_' + me.id), ref = me['_h'];
            me['_j'] = true;
            if (!me['_l']) {
                me['_l'] = true;
                me.owner.mountVframe('rpcnt_' + me.id, 'mx-calendar/range', {
                    min: me['_E'],
                    max: me['_F'],
                    timeType: me['_K'],
                    dateType: me['_L'],
                    formatter: me['_M'],
                    dates: me['_G'],
                    quickDates: me['_H'],
                    placement: me['_I'],
                    align: me['_J']
                });
            }
            Monitor['_k'](me);
            node.show();
            var offset = ref.offset();
            var left = void 0, top = void 0;
            switch (me['_I']) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['_J']) {
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
    '_a': function (ignore) {
        var me = this;
        if (me['_j']) {
            var node = $('#rpcnt_' + me.id);
            me['_j'] = false;
            node.hide();
            Monitor['_f'](me);
            if (!ignore) {
                node.invokeView('_N');
            }
        }
    },
    '_U<change>': function (e) {
        var me = this;
        e.stopPropagation();
        me['_G'] = e.dates;
        me['_T']();
        me['_a'](true);
        me['_h'].trigger({
            type: 'change',
            dates: e.dates
        });
    },
    '_a<cancel>': function (e) {
        e.stopPropagation();
        this['_a']();
    }
});
module.exports = Rangepicker;

});