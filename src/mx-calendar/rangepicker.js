/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/rangepicker",["magix","$","../mx-monitor/index","./index","./range"],(require,exports,module)=>{
/*Magix,$,Monitor,Calendar,RangeDate*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var Calendar = require("./index");
var RangeDate = require("./range");
var DefaultQuickDateKeys = [
    'today',
    'yesterday',
    'passed7',
    'lastestThisMonth',
    'preMonth',
    'lastest15'
];
var Rangepicker = Magix.View.extend({
    tmpl: {"html":"<div mx-change=\"\u001f\u001e__V()\" mx-cancel=\"\u001f\u001e__a()\" id=\"rpcnt_<%=$$.viewId%>\"></div>"},
    init: function (extra) {
        var me = this;
        var start = extra.start;
        var end = extra.end;
        var timeType = extra.timeType;
        var formatter = extra.formatter || ('YYYY-MM-dd' + (timeType ? ' hh:mm:ss' : ''));
        var today = Calendar.format(new Date(), formatter);
        me['__N'] = formatter;
        me['__S'] = true;
        me['__L'] = timeType;
        me['__M'] = extra.dateType;
        if (!start) {
            me['__S'] = false;
            start = today;
        }
        if (!end) {
            me['__S'] = false;
            end = today;
        }
        me['__T'] = extra.shortcuts != 'false';
        me['__G'] = extra.max;
        me['__F'] = extra.min;
        me['__J'] = extra.placement;
        me['__K'] = extra.align;
        me['__I'] = me['__T'] ? DefaultQuickDateKeys : [];
        me['__H'] = RangeDate.getDescription(start, end, me['__I'], formatter);
        Monitor['__d']();
        var oNode = $('#' + me.id);
        me['__e'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        var click = function () {
            me['__f']();
        };
        var change = function (e) {
            if (!e.dates) {
                e.stopPropagation();
            }
        };
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
            oNode.off('click', click).off('change', change);
        });
        oNode.on('click', click).on('change', change);
        me['__i'] = oNode;
        oNode.prop('autocomplete', 'off');
    },
    '__j': function (node) {
        var me = this;
        var inView = Magix.inside(node, me.id) ||
            Magix.inside(node, me['__i'][0]);
        if (!inView) {
            var children = me.owner.children();
            for (var i = children.length - 1; i >= 0; i--) {
                var child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('__j', [node]);
                }
                if (inView)
                    break;
            }
        }
        return inView;
    },
    '__U': function () {
        var me = this;
        var dates = me['__H'];
        if (dates.quickDateText) {
            me['__i'].val(dates.quickDateText);
        }
        else {
            me['__i'].val(dates.startStr + ' ~ ' + dates.endStr);
        }
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
        if (me['__S']) {
            me['__U']();
        }
    },
    '__f': function () {
        var me = this;
        if (!me['__k']) {
            var node = me['__e'], ref = me['__i'];
            node.show();
            me['__k'] = true;
            if (!me['__m']) {
                me['__m'] = true;
                me.owner.mountVframe('rpcnt_' + me.id, 'mx-calendar/range', {
                    min: me['__F'],
                    max: me['__G'],
                    timeType: me['__L'],
                    dateType: me['__M'],
                    formatter: me['__N'],
                    dates: me['__H'],
                    quickDates: me['__I'],
                    placement: me['__J'],
                    align: me['__K']
                });
            }
            Monitor['__l'](me);
            var offset = ref.offset();
            var left = void 0, top = void 0;
            switch (me['__J']) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['__K']) {
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
    '__a': function (ignore) {
        var me = this;
        if (me['__k']) {
            me['__e'].hide();
            var node = $('#rpcnt_' + me.id);
            me['__k'] = false;
            Monitor['__g'](me);
            if (!ignore) {
                node.invokeView('__O');
            }
        }
    },
    '__V<change>': function (e) {
        var me = this;
        e.stopPropagation();
        me['__H'] = e.dates;
        me['__U']();
        me['__a'](true);
        me['__i'].trigger({
            type: 'change',
            dates: e.dates
        });
    },
    '__a<cancel>': function (e) {
        e.stopPropagation();
        this['__a']();
    }
});
module.exports = Rangepicker;

});