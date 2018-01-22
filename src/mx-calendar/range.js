/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/range",["magix","$","./index","./datepicker"],(require,exports,module)=>{
/*Magix,$,Calendar*/
require("./datepicker");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
var Calendar = require("./index");
var DateParse = Calendar.parse;
var DateFormat = Calendar.format;
Magix.applyStyle("_i","._br{border:1px solid #e6e6e6;padding:10px 0;border-radius:4px;background-color:#fff;width:265px;position:relative;z-index:10}._bs{padding:0 10px}._bt{height:24px;line-height:24px;border-radius:4px;margin:0 10px 10px 0;width:70px;float:left;text-align:center;display:inline-block;cursor:pointer}._bt:hover{background:#e6e6e6}._bu,._bu:hover{color:#fff;background:#f96447}._bv{padding:0 10px;margin-bottom:15px}._bw{background-color:#f0f0f0;border:0;height:24px;width:117px;text-align:center;display:inline-block;color:#333;border-radius:4px;padding:6px 9px;cursor:text}._bx{border-top:1px solid #e6e6e6;margin-left:10px;padding-top:10px;width:92%}._by{width:330px}._by ._bw{width:150px}");
var DayMillisecond = 86400000, GetOffsetDate = function (offset, date) {
    if (!date) {
        date = new Date();
    }
    var uom = new Date(date.getTime() + offset * DayMillisecond);
    uom = uom.getFullYear() + '/' + (uom.getMonth() + 1) + '/' + uom.getDate();
    return new Date(uom);
}, SetEnd = function (d) {
    d = new Date(d);
    d.setHours(23);
    d.setMinutes(59);
    d.setSeconds(59);
    return d;
}, SetStart = function (d) {
    d = new Date(d);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    return d;
}, Today = GetOffsetDate(0), Yesterday = GetOffsetDate(-1), GetLastMonth = function () {
    var start = new Date(Today.getFullYear(), Today.getMonth() - 1, 1), startYear = start.getFullYear(), startMonth = start.getMonth(), lastDay = 32 - new Date(startYear, startMonth, 32).getDate();
    return {
        start: start,
        end: SetEnd(new Date(startYear, startMonth, lastDay))
    };
}, GetLastWeek = function (start) {
    var temp = GetOffsetDate(-7), offset = start - temp.getDay();
    return {
        start: GetOffsetDate(offset, temp),
        end: SetEnd(GetOffsetDate(offset + 6, temp))
    };
}, LastWeekSun = GetLastWeek(0), LastWeekMon = GetLastWeek(1), LastMonth = GetLastMonth();
LastMonth.text = '上月';
LastWeekSun.text = '上周（周日至周六）';
LastWeekMon.text = '上周（周一至周日）';
var QuickDates = {
    today: {
        text: '今天',
        start: Today,
        end: SetEnd(Today)
    },
    yesterday: {
        text: '昨天',
        start: Yesterday,
        end: SetEnd(Yesterday)
    },
    preMonth: LastMonth,
    preWeekSun: LastWeekSun,
    preWeekMon: LastWeekMon,
    passedThisMonth: {
        text: '本月',
        start: GetOffsetDate(-Today.getDate() + 1),
        end: SetEnd(Yesterday)
    },
    lastestThisMonth: {
        text: '本月',
        start: GetOffsetDate(-Today.getDate() + 1),
        end: SetEnd(Today)
    }
};
var TempDates = [2, 6, 13, 14, 29, 89];
for (var i = 0, date = void 0, dateSucc = void 0; i < TempDates.length; i++) {
    date = TempDates[i];
    dateSucc = date + 1;
    QuickDates['passed' + dateSucc] = {
        text: '过去' + dateSucc + '天',
        start: GetOffsetDate(-dateSucc),
        end: SetEnd(Yesterday)
    };
    QuickDates['lastest' + dateSucc] = {
        text: '最近' + dateSucc + '天',
        start: GetOffsetDate(-date),
        end: SetEnd(Today)
    };
}
var QueryQuickDateKeys = [
    'preMonth',
    'preWeekMon',
    'preWeekSun',
    'passedThisMonth',
    'lastestThisMonth'
];
var RangeDate = Magix.View.extend({
    tmpl: {"html":"<div class=\"_br<%if($$.showTime){%> _by<%}%> _aj\" mx-contextmenu=\"\u001f\u001e__E()\"><%if($$.quickDates.length){%><div class=\"_bs\"><div class=\"_n\">快捷日期</div><div class=\"_ai\"><%for(var _=0;_<$$.quickDates.length;_++){var a=$$.quickDates[_],b=$$.quickDatesMap[a]%><span class=\"_bt _al<%if($$.dates.quickDateKey==a){%> _bu<%}%>\" mx-click=\"\u001f\u001e__o({quick:true,key:'<%=$eq(a)%>'})\" title=\"<%=b?b.text:a%>\"><%=b?b.text:a%></span><%}%></div></div><%}%><div class=\"_bv\"><div class=\"_n\">日期范围</div><div class=\"_ai\"><input class=\"_bw\" readonly=\"readonly\" data-hidden=\"<%=$$.dates.startStr%>\" value=\"<%=$$.dates.startStr%>\" mx-click=\"\u001f\u001e__Q({first:true})\" id=\"start_<%=$$.id%>\" mx-change=\"\u001f\u001e__P()\"><div mx-view=\"mx-calendar/datepicker\" class=\"_af _ah\"></div>-<input readonly=\"readonly\" class=\"_bw\" data-hidden=\"<%=$$.dates.endStr%>\" value=\"<%=$$.dates.endStr%>\" mx-click=\"\u001f\u001e__Q()\" id=\"end_<%=$$.id%>\" mx-change=\"\u001f\u001e__P()\"><div mx-view=\"mx-calendar/datepicker\" class=\"_af _ah\"></div></div></div><div class=\"_bx _ai\"><button mx-click=\"\u001f\u001e__o()\" type=\"button\" class=\"_an _ao\">确定</button><button mx-click=\"\u001f\u001e__R()\" type=\"button\" class=\"_an _s\">取消</button></div></div>"},
    init: function (ops) {
        var me = this;
        me['__F'] = ops.min;
        me['__G'] = ops.max;
        me['__H'] = ops.dates;
        me['__I'] = ops.quickDates || [];
        me['__J'] = ops.placement;
        me['__K'] = ops.align;
        me['__L'] = ops.timeType;
        me['__M'] = ops.dateType;
        me['__N'] = ops.formatter;
    },
    '__j': function (node) {
        var me = this;
        var inView = Magix.inside(node, me.id);
        if (!inView) {
            var children = me.owner.children();
            for (var i = children.length - 1; i >= 0; i--) {
                var child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('inside', [node]);
                }
                if (inView)
                    break;
            }
        }
        return inView;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            id: me.id,
            showTime: me['__L'],
            quickDatesMap: QuickDates,
            quickDates: me['__I'],
            dates: me['__H']
        });
        me['__i'] = $('#' + me.id);
    },
    '__O': function () {
        var me = this;
        me.updater.digest({
            dates: me['__H']
        });
    },
    '__P<change>': function (e) {
        var me = this;
        e.stopPropagation();
        $(e.eventTarget).data('hidden', e.date + (e.time ? ' ' + e.time : ''));
        var start = $('#start_' + me.id).data('hidden');
        var end = $('#end_' + me.id).data('hidden');
        var dates = me.updater.get('dates');
        var startTime = DateParse(start, dates.formatter);
        var endTime = DateParse(end, dates.formatter);
        if (endTime.getTime() < startTime.getTime()) {
            end = start;
            $('#end_' + me.id).data('hidden', end);
        }
        dates = RangeDate.getDescription(start, end, me['__I'], me['__N']);
        me.updater.digest({
            dates: dates
        });
    },
    '__Q<click>': function (e) {
        var me = this, node = e.eventTarget, params = e.params;
        var dparams = {
            max: me['__G'],
            min: me['__F'],
            timeType: me['__L'],
            dateType: me['__M'],
            selected: node.value,
            placement: me['__J'],
            align: me['__K']
        };
        if (!params.first) {
            dparams.min = SetStart($('#start_' + me.id).data('hidden'));
        }
        if (node.vframe) {
            node.vframe.invoke('update', [dparams]);
        }
        else {
            me.owner.mountVframe(node.id, 'mx-calendar/datepicker', dparams).invoke('__f');
        }
    },
    '__o<click>': function (e) {
        var me = this;
        var params = e.params;
        var data = me.updater;
        var dates = data.get('dates'), start, end, startStr, endStr;
        if (params.quick) {
            dates.quickDateKey = params.key;
            var info = QuickDates[params.key];
            start = info.start;
            end = info.end;
            startStr = DateFormat(start, dates.formatter);
            endStr = DateFormat(end, dates.formatter);
            $('#start_' + me.id).data('hidden', startStr);
            $('#end_' + me.id).data('hidden', endStr);
            dates.startStr = startStr;
            dates.endStr = endStr;
            dates.start = start;
            dates.end = end;
            dates.quickDateText = info.text;
            data.digest({
                dates: dates
            });
        }
        else {
            startStr = $('#start_' + me.id).data('hidden');
            endStr = $('#end_' + me.id).data('hidden');
            dates = RangeDate.getDescription(startStr, endStr, me['__I'], me['__N']);
            data.digest({
                dates: dates
            });
        }
        me['__i'].trigger({
            type: 'change',
            dates: me['__H'] = dates
        });
    },
    '__R<click>': function () {
        var me = this;
        me['__i'].trigger('cancel');
        me['__O']();
    },
    '__E<contextmenu>': function (e) {
        e.preventDefault();
    }
}, {
    getSupportQuickDates: function () {
        return QuickDates;
    },
    getDescription: function (start, end, translateQuickdatesKeys, formatter) {
        start = DateParse(start);
        end = DateParse(end);
        var result = {
            start: start,
            end: end,
            startStr: DateFormat(start, formatter),
            endStr: DateFormat(end, formatter),
            formatter: formatter
        };
        var quickDateKey, todayMillisecond = Today.getTime(), yesterdayMillisecond = Yesterday.getTime(), startMillisecond = start.getTime(), endMillisecond = end.getTime();
        if (startMillisecond == endMillisecond) {
            if (todayMillisecond == endMillisecond) {
                quickDateKey = 'today';
            }
            else if (yesterdayMillisecond == endMillisecond) {
                quickDateKey = 'yesterday';
            }
        }
        else {
            var mapped = void 0;
            var days = (endMillisecond - startMillisecond) / DayMillisecond + 1;
            if (yesterdayMillisecond == endMillisecond) {
                mapped = QuickDates[quickDateKey = 'passed' + days];
                if (!mapped) {
                    quickDateKey = 0;
                }
            }
            else if (todayMillisecond == endMillisecond) {
                mapped = QuickDates[quickDateKey = 'lastest' + days];
                if (!mapped) {
                    quickDateKey = 0;
                }
            }
        }
        if (!quickDateKey) {
            for (var i = QueryQuickDateKeys.length - 1; i > -1; i--) {
                var param = QueryQuickDateKeys[i];
                var info = QuickDates[param];
                if (endMillisecond == info.end.getTime() &&
                    startMillisecond == info.start.getTime()) {
                    quickDateKey = param;
                    break;
                }
            }
        }
        if (quickDateKey && translateQuickdatesKeys) {
            if (!Magix.toMap(translateQuickdatesKeys)[quickDateKey]) {
                quickDateKey = 0;
            }
        }
        if (quickDateKey) {
            result.quickDateText = QuickDates[quickDateKey].text;
            result.quickDateKey = quickDateKey;
        }
        return result;
    }
});
module.exports = RangeDate;

});