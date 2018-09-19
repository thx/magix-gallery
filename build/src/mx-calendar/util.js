/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/util",["../mx-medusa/util"],(require,exports,module)=>{
/*I18n*/

var I18n = require("../mx-medusa/util");
var Today = new Date();
var Formatter = 'YYYY-MM-dd';
var ForeverStr = I18n['calendar.forever'];
var DayMillisecond = 24 * 60 * 60 * 1000;
var PadZero = function (str) {
    return ('0' + str).slice(-2);
};
var DateReg = {
    y: {
        reg: /y+/gi,
        fn: function (m, d) {
            return String(d.getFullYear()).slice(-m.length);
        }
    },
    M: {
        reg: /M+/g,
        fn: function (m, d, t) {
            t = d.getMonth() + 1;
            return PadZero(t).slice(-m.length);
        }
    },
    d: {
        reg: /d+/gi,
        fn: function (m, d, t) {
            t = d.getDate();
            return PadZero(t).slice(-m.length);
        }
    },
    h: {
        reg: /h+/gi,
        fn: function (m, d, t) {
            t = d.getHours();
            return PadZero(t).slice(-m.length);
        }
    },
    m: {
        reg: /m+/g,
        fn: function (m, d, t) {
            t = d.getMinutes();
            return PadZero(t).slice(-m.length);
        }
    },
    s: {
        reg: /s+/g,
        fn: function (m, d, t) {
            t = d.getSeconds();
            return PadZero(t).slice(-m.length);
        }
    },
    S: {
        reg: /S+/g,
        fn: function (m, d, t) {
            t = d.getMilliseconds();
            return String(t).substring(0, m.length);
        }
    }
};
var DateParse = function (date) {
    if (date instanceof Date) {
        return date;
    }
    else {
        date = new Date(Date.parse(String(date).replace(/-/g, '/')));
    }
    if (date instanceof Date && (date != 'Invalid Date') && !isNaN(date)) {
        return date;
    }
    return null;
};
var DateFormat = function (date, formatter) {
    date = DateParse(date);
    formatter = formatter || Formatter;
    var key;
    var replacement = function (match) {
        return DateReg[key].fn(match, date);
    };
    for (key in DateReg) {
        formatter = formatter.replace(DateReg[key].reg, replacement);
    }
    return formatter;
};
var GetOffsetDate = function (offset, date) {
    if (!date) {
        date = new Date();
    }
    offset = offset || 0;
    var uom = new Date(date.getTime() + offset * DayMillisecond);
    uom = uom.getFullYear() + '/' + (uom.getMonth() + 1) + '/' + uom.getDate();
    return new Date(uom);
};
module.exports = {
    foreverStr: ForeverStr,
    getOffsetDate: GetOffsetDate,
    dateParse: DateParse,
    dateFormat: DateFormat,
    padZero: PadZero,
    getDefaultDate: function (min, max, formatter) {
        var min = DateParse(min), max = DateParse(max), today = Today;
        var init;
        if (min && (min.getTime() > today.getTime())) {
            init = min;
        }
        else if (max && (max.getTime() < today.getTime())) {
            init = max;
        }
        else {
            init = today;
        }
        return DateFormat(init, formatter);
    },
    /**
     * 包含dynamic的动态快捷日期，跟开始时间有关
     */
    getQuickInfos: function (quickDates, startStr, formatter) {
        var quickInfos = [];
        quickDates = quickDates || [];
        quickDates.forEach(function (quickKey) {
            var text, start, end, tip;
            if (quickKey == 'today') {
                text = I18n['calendar.today'];
                tip = I18n['calendar.today'];
                start = GetOffsetDate(0);
                end = GetOffsetDate(0);
            }
            else if (quickKey == 'yesterday') {
                text = I18n['calendar.yesterday'];
                tip = I18n['calendar.yesterday'];
                start = GetOffsetDate(-1);
                end = GetOffsetDate(-1);
            }
            else if (quickKey == 'beforeYesterday') {
                text = I18n['calendar.before.yesterday'];
                tip = I18n['calendar.before.yesterday'];
                start = GetOffsetDate(-2);
                end = GetOffsetDate(-2);
            }
            else if (quickKey == 'preMonth') {
                text = I18n['calendar.last.month'];
                tip = I18n['calendar.last.month'];
                start = new Date(Today.getFullYear(), Today.getMonth() - 1, 1);
                var startYear = start.getFullYear(), startMonth = start.getMonth(), lastDay = 32 - new Date(startYear, startMonth, 32).getDate();
                end = new Date(startYear, startMonth, lastDay);
            }
            else if (quickKey == 'preWeekSun') {
                text = I18n['calendar.last.week'];
                tip = I18n['calendar.last.week.sunday'];
                var temp = GetOffsetDate(-7);
                offset = 0 - temp.getDay();
                start = GetOffsetDate(offset, temp);
                end = GetOffsetDate(offset + 6, temp);
            }
            else if (quickKey == 'preWeekMon') {
                text = I18n['calendar.last.week'];
                tip = I18n['calendar.last.week.monday'];
                var temp = GetOffsetDate(-7);
                offset = 1 - temp.getDay();
                start = GetOffsetDate(offset, temp);
                end = GetOffsetDate(offset + 6, temp);
            }
            else if (quickKey == 'lastestWeekSun') {
                text = I18n['calendar.this.week'];
                tip = I18n['calendar.this.week.sunday'];
                offset = 0 - Today.getDay();
                start = GetOffsetDate(offset);
                end = GetOffsetDate(0);
            }
            else if (quickKey == 'lastestWeekMon') {
                text = I18n['calendar.this.week'];
                tip = I18n['calendar.this.week.monday'];
                offset = 1 - Today.getDay();
                start = GetOffsetDate(offset);
                end = GetOffsetDate(0);
            }
            else if (quickKey == 'passedThisMonth') {
                text = I18n['calendar.this.month'];
                tip = I18n['calendar.this.month.yestarday'];
                start = GetOffsetDate(-Today.getDate() + 1);
                end = GetOffsetDate(-1);
            }
            else if (quickKey == 'lastestThisMonth') {
                text = I18n['calendar.this.month'];
                tip = I18n['calendar.this.month.today'];
                start = GetOffsetDate(-Today.getDate() + 1);
                end = GetOffsetDate(0);
            }
            else if ((/^passed\d+$/i).test(quickKey)) {
                var n = +quickKey.replace('passed', '');
                text = I18n['calendar.passed'] + ' ' + n + ' ' + I18n['calendar.unit'];
                tip = I18n['calendar.passed'] + ' ' + n + ' ' + I18n['calendar.unit.yesterday'];
                start = GetOffsetDate(0 - n);
                end = GetOffsetDate(-1);
            }
            else if ((/^lastest\d+$/i).test(quickKey)) {
                var n = +quickKey.replace('lastest', '');
                text = I18n['calendar.lastest'] + ' ' + n + ' ' + I18n['calendar.unit'];
                tip = I18n['calendar.lastest'] + ' ' + n + ' ' + I18n['calendar.unit.today'];
                start = GetOffsetDate(1 - n);
                end = GetOffsetDate(0);
            }
            else if ((/^dynamicStart\d+$/i).test(quickKey)) {
                var n = +quickKey.replace('dynamicStart', '');
                text = I18n['calendar.dynamic.end'].replace('${day}', n);
                tip = I18n['calendar.dynamic.end.tip'].replace('${day}', n);
                start = DateParse(startStr);
                end = GetOffsetDate(n - 1, start);
            }
            else if (quickKey == 'dynamicEndThisMonth') {
                text = I18n['calendar.natural.month'];
                tip = I18n['calendar.natural.month.tip'];
                start = DateParse(startStr);
                var startYear = start.getFullYear(), startMonth = start.getMonth(), lastDay = 32 - new Date(startYear, startMonth, 32).getDate();
                end = new Date(startYear, startMonth, lastDay);
            }
            else if (quickKey == 'dynamicEndNextMonth') {
                text = I18n['calendar.next.month'];
                tip = I18n['calendar.next.month.tip'];
                start = DateParse(startStr);
                var startYear = start.getFullYear(), nextMonth = start.getMonth() + 1, lastDay = 32 - new Date(startYear, nextMonth, 32).getDate();
                end = new Date(startYear, nextMonth, lastDay);
            }
            else if (quickKey == 'forever') {
                text = ForeverStr;
                tip = I18n['calendar.forever.tip'];
                start = DateParse(startStr);
                end = ForeverStr;
            }
            if (text && tip && start) {
                quickInfos.push({
                    key: quickKey,
                    text: text,
                    tip: tip,
                    start: DateFormat(start, formatter),
                    end: (end == ForeverStr) ? ForeverStr : DateFormat(end, formatter)
                });
            }
        });
        return quickInfos;
    }
};

});