/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/range',["magix","$","./index"],function(require,exports,module){
/*Magix,$,Calendar*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
var $ = require('$');
var Calendar = require('./index');
var DateParse = Calendar.parse;
var DateFormat = Calendar.format;
Magix.applyStyle("g",".bi{border:1px solid #e6e6e6;padding:10px 0;border-radius:4px;background-color:#fff;width:265px}.bj{padding:0 10px}.bk{height:24px;line-height:24px;border-radius:4px;margin:0 10px 10px 0;width:70px;float:left;text-align:center;display:inline-block;cursor:pointer}.bk:hover{background:#e6e6e6}.bl,.bl:hover{color:#fff;background:#6363e6}.bm{padding:0 10px;margin-bottom:15px}.bn{background-color:#f0f0f0;border:0;height:24px;width:117px;text-align:center;display:inline-block;color:#333;border-radius:4px;padding:6px 9px;cursor:text}.bo{border-top:1px solid #e6e6e6;margin-left:10px;padding-top:10px;width:92%}.bp{width:330px}.bp .bn{width:150px}");
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
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"bi<%if($$.showTime){%> bp<%}%> ah\" mx-contextmenu=\"\u001f\u001e_D()\">1\u001d</div>","subs":[{"keys":["showTime","quickDates"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.quickDates.length){%><div class=\"bj\"><div class=\"n\">快捷日期</div><div mx-guid=\"g1\u001f\" class=\"ag\">2\u001d</div></div><%}%><div class=\"bm\"><div class=\"n\">日期范围</div><div class=\"ag\"><input mx-guid=\"g2\u001f\" readonly=\"readonly\" class=\"bn\" data-hidden=\"<%=$$.dates.startStr%>\" value=\"<%=$$.dates.startStr%>\" mx-click=\"\u001f\u001e_P({first:true})\" id=\"start_<%=$$.id%>\" mx-change=\"\u001f\u001e_O()\">-<input mx-guid=\"g3\u001f\" readonly=\"readonly\" class=\"bn\" data-hidden=\"<%=$$.dates.endStr%>\" value=\"<%=$$.dates.endStr%>\" mx-click=\"\u001f\u001e_P()\" id=\"end_<%=$$.id%>\" mx-change=\"\u001f\u001e_O()\"></div></div><div class=\"bo ag\"><button mx-click=\"\u001f\u001e_n()\" type=\"button\" class=\"al am\">确定</button><button mx-click=\"\u001f\u001e_Q()\" type=\"button\" class=\"al s\">取消</button></div>","s":"1\u001d","attr":"class=\"bi<%if($$.showTime){%> bp<%}%> ah\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["quickDates","quickDatesMap","dates"],"path":"div[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var a=0;a<$$.quickDates.length;a++){var b=$$.quickDates[a],c=$$.quickDatesMap[b]%><span class=\"bk aj<%if($$.dates.quickDateKey==b){%> bl<%}%>\" mx-click=\"\u001f\u001e_n({quick:true,key:'<%=$eq(b)%>'})\" title=\"<%=c?c.text:b%>\"><%=c?c.text:b%></span><%}%>","s":"2\u001d"},{"keys":["dates","id"],"path":"input[mx-guid=\"g2\u001f\"]","attr":"data-hidden=\"<%=$$.dates.startStr%>\" value=\"<%=$$.dates.startStr%>\" mx-click=\"\u001f\u001e_P({first:true})\" id=\"start_<%=$$.id%>\"","attrs":[{"n":"data-hidden"},{"n":"value","q":1,"p":1},{"n":"mx-click"},{"n":"id","p":1}]},{"keys":["dates","id"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"data-hidden=\"<%=$$.dates.endStr%>\" value=\"<%=$$.dates.endStr%>\" mx-click=\"\u001f\u001e_P()\" id=\"end_<%=$$.id%>\"","attrs":[{"n":"data-hidden"},{"n":"value","q":1,"p":1},{"n":"mx-click"},{"n":"id","p":1}]}]},
    init: function (ops) {
        var me = this;
        me['_E'] = ops.min;
        me['_F'] = ops.max;
        me['_G'] = ops.dates;
        me['_H'] = ops.quickDates || [];
        me['_I'] = ops.placement;
        me['_J'] = ops.align;
        me['_K'] = ops.timeType;
        me['_L'] = ops.dateType;
        me['_M'] = ops.formatter;
    },
    '_i': function (node) {
        var me = this;
        var inView = Magix.inside(node, me.id);
        if (!inView) {
            var children = me.owner.children();
            for (var i = children.length - 1; i >= 0; i--) {
                var child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('inside', node);
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
            showTime: me['_K'],
            quickDatesMap: QuickDates,
            quickDates: me['_H'],
            dates: me['_G']
        });
        me['_h'] = $('#' + me.id);
    },
    '_N': function () {
        var me = this;
        me.updater.digest({
            dates: me['_G']
        });
    },
    '_O<change>': function (e) {
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
        dates = RangeDate.getDescription(start, end, me['_H'], me['_M']);
        me.updater.digest({
            dates: dates
        });
    },
    '_P<click>': function (e) {
        var me = this, node = e.eventTarget, params = e.params;
        var dparams = {
            max: me['_F'],
            min: me['_E'],
            timeType: me['_K'],
            dateType: me['_L'],
            selected: node.value,
            placement: me['_I'],
            align: me['_J']
        };
        if (!params.first) {
            dparams.min = SetStart($('#start_' + me.id).data('hidden'));
        }
        if (node.vframe) {
            node.vframe.invoke('update', dparams);
        }
        else {
            me.owner.mountVframe(node.id, 'mx-calendar/datepicker', dparams).invoke('_e');
        }
    },
    '_n<click>': function (e) {
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
            dates = RangeDate.getDescription(startStr, endStr, me['_H'], me['_M']);
            data.digest({
                dates: dates
            });
        }
        me['_h'].trigger({
            type: 'change',
            dates: me['_G'] = dates
        });
    },
    '_Q<click>': function () {
        var me = this;
        me['_h'].trigger('cancel');
        me['_N']();
    },
    '_D<contextmenu>': function (e) {
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