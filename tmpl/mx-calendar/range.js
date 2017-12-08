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
Magix.applyStyle('@range.less');
let DayMillisecond = 86400000,
    GetOffsetDate = (offset, date) => {
        if (!date) {
            date = new Date();
        }
        let uom = new Date(date.getTime() + offset * DayMillisecond);
        uom = uom.getFullYear() + '/' + (uom.getMonth() + 1) + '/' + uom.getDate();
        return new Date(uom);
    },
    SetEnd = d => {
        d = new Date(d);
        d.setHours(23);
        d.setMinutes(59);
        d.setSeconds(59);
        return d;
    },
    SetStart = d => {
        d = new Date(d);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        return d;
    },
    Today = GetOffsetDate(0),
    Yesterday = GetOffsetDate(-1),
    GetLastMonth = () => {
        let start = new Date(Today.getFullYear(), Today.getMonth() - 1, 1),
            startYear = start.getFullYear(),
            startMonth = start.getMonth(),
            lastDay = 32 - new Date(startYear, startMonth, 32).getDate();
        return {
            start: start,
            end: SetEnd(new Date(startYear, startMonth, lastDay))
        };
    },
    GetLastWeek = (start) => {
        let temp = GetOffsetDate(-7),
            offset = start - temp.getDay();
        return {
            start: GetOffsetDate(offset, temp),
            end: SetEnd(GetOffsetDate(offset + 6, temp))
        };
    },
    LastWeekSun = GetLastWeek(0),
    LastWeekMon = GetLastWeek(1),
    LastMonth = GetLastMonth();
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
    tmpl: '@range.html',
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
                if (inView) break;
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
    '@{restore}'() {//for ./rangepicker.js
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
        let me = this,
            node = e.eventTarget,
            params = e.params;
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
        } else {
            me.owner.mountVframe(node.id, '@./datepicker', dparams).invoke('@{show}');
        }
    },
    '@{date.picked}<click>'(e) {
        let me = this;
        let params = e.params;
        let data = me.updater;
        let dates = data.get('dates'),
            start, end, startStr, endStr;
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
        } else {
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
            let quickDateKey,
                todayMillisecond = Today.getTime(),
                yesterdayMillisecond = Yesterday.getTime(),
                startMillisecond = start.getTime(),
                endMillisecond = end.getTime();
            if (startMillisecond == endMillisecond) {
                if (todayMillisecond == endMillisecond) {
                    quickDateKey = 'today';
                } else if (yesterdayMillisecond == endMillisecond) {
                    quickDateKey = 'yesterday';
                }
            } else {
                let mapped;
                let days = (endMillisecond - startMillisecond) / DayMillisecond + 1;
                if (yesterdayMillisecond == endMillisecond) {
                    mapped = QuickDates[quickDateKey = 'passed' + days];
                    if (!mapped) {
                        quickDateKey = 0;
                    }
                } else if (todayMillisecond == endMillisecond) {
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