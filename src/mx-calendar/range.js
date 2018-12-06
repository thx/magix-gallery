/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/range",["magix","$","./index","./datepicker"],(require,exports,module)=>{
/*Magix,$,Calendar*/
require("./datepicker");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
var Calendar = require("./index");
var DateParse = Calendar.parse;
var DateFormat = Calendar.format;
Magix.applyStyle("__mx-calendar_range_","/* @dependent: ./index.less */\n.__mx-calendar_range_-wrapper {\n  border: 1px solid #e6e6e6;\n  padding: 10px 0;\n  border-radius: 4px;\n  background-color: #fff;\n  width: 265px;\n  position: relative;\n  z-index: 10;\n}\n.__mx-calendar_range_-shortcuts-wrapper {\n  padding: 0 10px;\n}\n.__mx-calendar_range_-st {\n  height: 24px;\n  line-height: 24px;\n  border-radius: 4px;\n  margin: 0 10px 10px 0;\n  width: 70px;\n  float: left;\n  text-align: center;\n  display: inline-block;\n  cursor: pointer;\n}\n.__mx-calendar_range_-st:hover {\n  background: #e6e6e6;\n}\n.__mx-calendar_range_-selected,\n.__mx-calendar_range_-selected:hover {\n  color: #fff;\n  background: #f96447;\n}\n.__mx-calendar_range_-range {\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.__mx-calendar_range_-ipt {\n  background-color: #f0f0f0;\n  border: 0;\n  height: 24px;\n  width: 117px;\n  text-align: center;\n  display: inline-block;\n  color: #333;\n  border-radius: 4px;\n  padding: 6px 9px;\n  cursor: text;\n}\n.__mx-calendar_range_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin-left: 10px;\n  padding-top: 10px;\n  width: 92%;\n}\n.__mx-calendar_range_-time {\n  width: 330px;\n}\n.__mx-calendar_range_-time .__mx-calendar_range_-ipt {\n  width: 150px;\n}\n");
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
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', showTime = $$.showTime, quickDates = $$.quickDates, quickDatesMap = $$.quickDatesMap, dates = $$.dates, id = $$.id; var $expr, $art, $line; try {
    $p += '<div class="__mx-calendar_range_-wrapper';
    $expr = '<%if (showTime) {%>';
    if (showTime) {
        ;
        $p += ' __mx-calendar_range_-time';
        $expr = '<%}%>';
    }
    ;
    $p += ' __mx-style_index_-unselectable" mx-contextmenu="' + $viewId + '@{prevent}()">';
    $expr = '<%if (quickDates.length) {%>';
    if (quickDates.length) {
        ;
        $p += '<div mxa="_Z:_" class="__mx-calendar_range_-shortcuts-wrapper"><div mxs="_Z:_" class="__mx-style_index_-mb10">快捷日期</div><div mxa="_Z:a" class="__mx-style_index_-clearfix">';
        $expr = '<%for (var i = 0; i < quickDates.length; i++) {%>';
        for (var i = 0; i < quickDates.length; i++) {
            ;
            $p += ' ';
            $expr = '<%var key = quickDates[i], info = quickDatesMap[key]%>';
            var key = quickDates[i], info = quickDatesMap[key];
            $p += '<span class="__mx-calendar_range_-st __mx-style_index_-ellipsis';
            $expr = '<%if (dates.quickDateKey == key) {%>';
            if (dates.quickDateKey == key) {
                ;
                $p += ' __mx-calendar_range_-selected';
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-click="' + $viewId + '@{date.picked}({quick:true,key:\'' + ($expr = '<%=$eq(key)%>', $e($eq(key))) + '\'})" title="' + ($expr = '<%=info ? info.text : key%>', $e(info ? info.text : key)) + '">' + ($expr = '<%=info ? info.text : key%>', $e(info ? info.text : key)) + '</span>';
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxa="_Z:b" class="__mx-calendar_range_-range"><div mxs="_Z:a" class="__mx-style_index_-mb10">日期范围</div><div mxa="_Z:c" class="__mx-style_index_-clearfix"><div class="__mx-calendar_range_-ipt" data-hidden="' + ($expr = '<%=dates.startStr%>', $e(dates.startStr)) + '" mx-click="' + $viewId + '@{show.date.picker}({first:true})" id="start_' + ($expr = '<%=id%>', $e(id)) + '" mx-change="' + $viewId + '@{sync.date}()" mx-view="mx-calendar/datepicker?readonly=true&value=' + ($expr = '<%!$eu(dates.startStr)%>', $eu(dates.startStr)) + '"></div>-<div class="__mx-calendar_range_-ipt" data-hidden="' + ($expr = '<%=dates.endStr%>', $e(dates.endStr)) + '" mx-click="' + $viewId + '@{show.date.picker}()" id="end_' + ($expr = '<%=id%>', $e(id)) + '" mx-change="' + $viewId + '@{sync.date}()" mx-view="mx-calendar/datepicker?readonly=true&value=' + ($expr = '<%!$eu(dates.endStr)%>', $eu(dates.endStr)) + '"></div></div></div><div mxs="_Z:b" class="__mx-calendar_range_-footer __mx-style_index_-clearfix"><button mx-click="' + $viewId + '@{date.picked}()" type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand">确定</button><button mx-click="' + $viewId + '@{cancel}()" type="button" class="__mx-style_index_-btn __mx-style_index_-ml5">取消</button></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/range.html';
    throw msg;
} return $p; },
    init: function (ops) {
        var me = this;
        me['@{min}'] = ops.min;
        me['@{max}'] = ops.max;
        me['@{dates}'] = ops.dates;
        me['@{dates.quick}'] = ops.quickDates || [];
        me['@{pos.placement}'] = ops.placement;
        me['@{pos.align}'] = ops.align;
        me['@{time.type}'] = ops.timeType;
        me['@{date.type}'] = ops.dateType;
        me['@{datetime.formatter}'] = ops.formatter;
    },
    '@{inside}': function (node) {
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
            showTime: me['@{time.type}'],
            quickDatesMap: QuickDates,
            quickDates: me['@{dates.quick}'],
            dates: me['@{dates}']
        });
        me['@{owner.node}'] = $('#' + me.id);
    },
    '@{restore}': function () {
        var me = this;
        me.updater.digest({
            dates: me['@{dates}']
        });
    },
    '@{sync.date}<change>': function (e) {
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
        dates = RangeDate.getDescription(start, end, me['@{dates.quick}'], me['@{datetime.formatter}']);
        me.updater.digest({
            dates: dates
        });
    },
    '@{show.date.picker}<click>': function (e) {
        var me = this, node = e.eventTarget, params = e.params;
        var dparams = {
            max: me['@{max}'],
            min: me['@{min}'],
            timeType: me['@{time.type}'],
            dateType: me['@{date.type}'],
            selected: node.value,
            placement: me['@{pos.placement}'],
            align: me['@{pos.align}']
        };
        if (!params.first) {
            dparams.min = SetStart($('#start_' + me.id).data('hidden'));
        }
        if (node.vframe) {
            node.vframe.invoke('update', [dparams]);
        }
        else {
            me.owner.mountVframe(node.id, 'mx-calendar/datepicker', dparams).invoke('@{show}');
        }
    },
    '@{date.picked}<click>': function (e) {
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
            dates = RangeDate.getDescription(startStr, endStr, me['@{dates.quick}'], me['@{datetime.formatter}']);
            data.digest({
                dates: dates
            });
        }
        me['@{owner.node}'].trigger({
            type: 'change',
            dates: me['@{dates}'] = dates
        });
    },
    '@{cancel}<click>': function () {
        var me = this;
        me['@{owner.node}'].trigger('cancel');
        me['@{restore}']();
    },
    '@{prevent}<contextmenu>': function (e) {
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