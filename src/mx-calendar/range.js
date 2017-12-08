/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-calendar/range',["magix","$","./index"],(require,exports,module)=>{
/*Magix,$,Calendar*/

/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let Calendar = require('./index');
let DateParse = Calendar.parse;
let DateFormat = Calendar.format;
Magix.applyStyle("__mx-calendar_range_",".__mx-calendar_range_-wrapper {\n  border: 1px solid #e6e6e6;\n  padding: 10px 0;\n  border-radius: 4px;\n  background-color: #fff;\n  width: 265px;\n}\n.__mx-calendar_range_-shortcuts-wrapper {\n  padding: 0 10px;\n}\n.__mx-calendar_range_-st {\n  height: 24px;\n  line-height: 24px;\n  border-radius: 4px;\n  margin: 0 10px 10px 0;\n  width: 70px;\n  float: left;\n  text-align: center;\n  display: inline-block;\n  cursor: pointer;\n}\n.__mx-calendar_range_-st:hover {\n  background: #e6e6e6;\n}\n.__mx-calendar_range_-selected,\n.__mx-calendar_range_-selected:hover {\n  color: #fff;\n  background: #f96447;\n}\n.__mx-calendar_range_-range {\n  padding: 0 10px;\n  margin-bottom: 15px;\n}\n.__mx-calendar_range_-ipt {\n  background-color: #f0f0f0;\n  border: 0;\n  height: 24px;\n  width: 117px;\n  text-align: center;\n  display: inline-block;\n  color: #333;\n  border-radius: 4px;\n  padding: 6px 9px;\n  cursor: text;\n}\n.__mx-calendar_range_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin-left: 10px;\n  padding-top: 10px;\n  width: 92%;\n}\n.__mx-calendar_range_-time {\n  width: 330px;\n}\n.__mx-calendar_range_-time .__mx-calendar_range_-ipt {\n  width: 150px;\n}\n");
let DayMillisecond = 86400000, GetOffsetDate = (offset, date) => {
    if (!date) {
        date = new Date();
    }
    let uom = new Date(date.getTime() + offset * DayMillisecond);
    uom = uom.getFullYear() + '/' + (uom.getMonth() + 1) + '/' + uom.getDate();
    return new Date(uom);
}, SetEnd = d => {
    d = new Date(d);
    d.setHours(23);
    d.setMinutes(59);
    d.setSeconds(59);
    return d;
}, SetStart = d => {
    d = new Date(d);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    return d;
}, Today = GetOffsetDate(0), Yesterday = GetOffsetDate(-1), GetLastMonth = () => {
    let start = new Date(Today.getFullYear(), Today.getMonth() - 1, 1), startYear = start.getFullYear(), startMonth = start.getMonth(), lastDay = 32 - new Date(startYear, startMonth, 32).getDate();
    return {
        start: start,
        end: SetEnd(new Date(startYear, startMonth, lastDay))
    };
}, GetLastWeek = (start) => {
    let temp = GetOffsetDate(-7), offset = start - temp.getDay();
    return {
        start: GetOffsetDate(offset, temp),
        end: SetEnd(GetOffsetDate(offset + 6, temp))
    };
}, LastWeekSun = GetLastWeek(0), LastWeekMon = GetLastWeek(1), LastMonth = GetLastMonth();
LastMonth.text = '上月';
LastWeekSun.text = '上周（周日至周六）';
LastWeekMon.text = '上周（周一至周日）';
let QuickDates = {
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
let TempDates = [2, 6, 13, 14, 29, 89];
for (let i = 0, date, dateSucc; i < TempDates.length; i++) {
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
let QueryQuickDateKeys = [
    'preMonth',
    'preWeekMon',
    'preWeekSun',
    'passedThisMonth',
    'lastestThisMonth'
];
let RangeDate = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-calendar_range_-wrapper<%if($$.showTime){%> __mx-calendar_range_-time<%}%> __mx-style_index_-unselectable\" mx-contextmenu=\"\u001f\u001e@{prevent}()\">1\u001d</div>","subs":[{"keys":["showTime","quickDates"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.quickDates.length){%><div class=\"__mx-calendar_range_-shortcuts-wrapper\"><div class=\"__mx-style_index_-mb10\">快捷日期</div><div mx-guid=\"g1\u001f\" class=\"__mx-style_index_-clearfix\">2\u001d</div></div><%}%><div class=\"__mx-calendar_range_-range\"><div class=\"__mx-style_index_-mb10\">日期范围</div><div class=\"__mx-style_index_-clearfix\"><input mx-guid=\"g2\u001f\" readonly=\"readonly\" class=\"__mx-calendar_range_-ipt\" data-hidden=\"<%=$$.dates.startStr%>\" value=\"<%=$$.dates.startStr%>\" mx-click=\"\u001f\u001e@{show.date.picker}({first:true})\" id=\"start_<%=$$.id%>\" mx-change=\"\u001f\u001e@{sync.date}()\">-<input mx-guid=\"g3\u001f\" readonly=\"readonly\" class=\"__mx-calendar_range_-ipt\" data-hidden=\"<%=$$.dates.endStr%>\" value=\"<%=$$.dates.endStr%>\" mx-click=\"\u001f\u001e@{show.date.picker}()\" id=\"end_<%=$$.id%>\" mx-change=\"\u001f\u001e@{sync.date}()\"></div></div><div class=\"__mx-calendar_range_-footer __mx-style_index_-clearfix\"><button mx-click=\"\u001f\u001e@{date.picked}()\" type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\">确定</button><button mx-click=\"\u001f\u001e@{cancel}()\" type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-ml5\">取消</button></div>","s":"1\u001d","attr":"class=\"__mx-calendar_range_-wrapper<%if($$.showTime){%> __mx-calendar_range_-time<%}%> __mx-style_index_-unselectable\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["quickDates","quickDatesMap","dates"],"path":"div[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var i=0;i<$$.quickDates.length;i++){%> <%var key=$$.quickDates[i],info=$$.quickDatesMap[key]%><span class=\"__mx-calendar_range_-st __mx-style_index_-ellipsis<%if($$.dates.quickDateKey==key){%> __mx-calendar_range_-selected<%}%>\" mx-click=\"\u001f\u001e@{date.picked}({quick:true,key:'<%=$eq(key)%>'})\" title=\"<%=info?info.text:key%>\"><%=info?info.text:key%></span><%}%>","s":"2\u001d"},{"keys":["dates","id"],"path":"input[mx-guid=\"g2\u001f\"]","attr":"data-hidden=\"<%=$$.dates.startStr%>\" value=\"<%=$$.dates.startStr%>\" mx-click=\"\u001f\u001e@{show.date.picker}({first:true})\" id=\"start_<%=$$.id%>\"","attrs":[{"n":"data-hidden"},{"n":"value","q":1,"p":1},{"n":"mx-click"},{"n":"id","p":1}]},{"keys":["dates","id"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"data-hidden=\"<%=$$.dates.endStr%>\" value=\"<%=$$.dates.endStr%>\" mx-click=\"\u001f\u001e@{show.date.picker}()\" id=\"end_<%=$$.id%>\"","attrs":[{"n":"data-hidden"},{"n":"value","q":1,"p":1},{"n":"mx-click"},{"n":"id","p":1}]}],"file":"mx-calendar/range.html"},
    init(ops) {
        let me = this;
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
    '@{inside}'(node) {
        let me = this;
        let inView = Magix.inside(node, me.id);
        if (!inView) {
            let children = me.owner.children();
            for (let i = children.length - 1; i >= 0; i--) {
                let child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('inside', node);
                }
                if (inView)
                    break;
            }
        }
        return inView;
    },
    render() {
        let me = this;
        me.updater.digest({
            id: me.id,
            showTime: me['@{time.type}'],
            quickDatesMap: QuickDates,
            quickDates: me['@{dates.quick}'],
            dates: me['@{dates}']
        });
        me['@{owner.node}'] = $('#' + me.id);
    },
    '@{restore}'() {
        let me = this;
        me.updater.digest({
            dates: me['@{dates}']
        });
    },
    '@{sync.date}<change>'(e) {
        let me = this;
        e.stopPropagation();
        $(e.eventTarget).data('hidden', e.date + (e.time ? ' ' + e.time : ''));
        let start = $('#start_' + me.id).data('hidden');
        let end = $('#end_' + me.id).data('hidden');
        let dates = me.updater.get('dates');
        let startTime = DateParse(start, dates.formatter);
        let endTime = DateParse(end, dates.formatter);
        if (endTime.getTime() < startTime.getTime()) {
            end = start;
            $('#end_' + me.id).data('hidden', end);
        }
        dates = RangeDate.getDescription(start, end, me['@{dates.quick}'], me['@{datetime.formatter}']);
        me.updater.digest({
            dates: dates
        });
    },
    '@{show.date.picker}<click>'(e) {
        let me = this, node = e.eventTarget, params = e.params;
        let dparams = {
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
            node.vframe.invoke('update', dparams);
        }
        else {
            me.owner.mountVframe(node.id, 'mx-calendar/datepicker', dparams).invoke('@{show}');
        }
    },
    '@{date.picked}<click>'(e) {
        let me = this;
        let params = e.params;
        let data = me.updater;
        let dates = data.get('dates'), start, end, startStr, endStr;
        if (params.quick) {
            dates.quickDateKey = params.key;
            let info = QuickDates[params.key];
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
    '@{cancel}<click>'() {
        let me = this;
        me['@{owner.node}'].trigger('cancel');
        me['@{restore}']();
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
}, {
    getSupportQuickDates() {
        return QuickDates;
    },
    getDescription(start, end, translateQuickdatesKeys, formatter) {
        start = DateParse(start);
        end = DateParse(end);
        let result = {
            startStr: DateFormat(start, formatter),
            endStr: DateFormat(end, formatter),
            formatter: formatter
        };
        let quickDateKey, todayMillisecond = Today.getTime(), yesterdayMillisecond = Yesterday.getTime(), startMillisecond = start.getTime(), endMillisecond = end.getTime();
        if (startMillisecond == endMillisecond) {
            if (todayMillisecond == endMillisecond) {
                quickDateKey = 'today';
            }
            else if (yesterdayMillisecond == endMillisecond) {
                quickDateKey = 'yesterday';
            }
        }
        else {
            let mapped;
            let days = (endMillisecond - startMillisecond) / DayMillisecond + 1;
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
            for (let i = QueryQuickDateKeys.length - 1; i > -1; i--) {
                let param = QueryQuickDateKeys[i];
                let info = QuickDates[param];
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