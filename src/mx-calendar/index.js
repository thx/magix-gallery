/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/index",["magix","$","mx-time/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-time/index");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
Magix.applyStyle("__mx-calendar_index_","/* @dependent: ./index.less */\n.__mx-calendar_index_-wrapper {\n  background-color: #fff;\n  display: inline-block;\n  border: 1px solid #e6e6e6;\n  padding: 0;\n  border-radius: 4px;\n  overflow-y: hidden;\n  z-index: 10;\n  color: #333;\n  text-align: center;\n  position: relative;\n}\n.__mx-calendar_index_-gray {\n  color: #777;\n}\n.__mx-calendar_index_-header {\n  height: 32px;\n  line-height: 32px;\n  padding: 1px;\n}\n/*\n    comment;\n*/\n.__mx-calendar_index_-minus,\n.__mx-calendar_index_-plus {\n  color: #CCC;\n  display: inline-block;\n  padding: 6px 7px;\n  line-height: 100%;\n  vertical-align: top;\n  cursor: pointer;\n}\n.__mx-calendar_index_-minus:hover,\n.__mx-calendar_index_-minus:focus,\n.__mx-calendar_index_-plus:hover,\n.__mx-calendar_index_-plus:focus {\n  color: #f96447;\n}\n.__mx-calendar_index_-title {\n  display: inline-block;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 4px;\n  line-height: 1;\n}\n.__mx-calendar_index_-title:hover {\n  background-color: #EEE;\n}\n.__mx-calendar_index_-body {\n  width: 245px;\n}\n.__mx-calendar_index_-weeks {\n  color: #333;\n  background-color: #FAFAFA;\n  padding: 0 10px;\n}\n.__mx-calendar_index_-days {\n  padding: 10px;\n}\n.__mx-calendar_index_-y-panel,\n.__mx-calendar_index_-m-panel {\n  padding: 1px 0;\n  position: absolute;\n  top: -100%;\n  left: 0;\n  right: 0;\n  transition: top 0.15s;\n  background-color: #fff;\n}\n.__mx-calendar_index_-ym-show {\n  top: 0;\n}\n.__mx-calendar_index_-ym {\n  height: 59px;\n  margin: 2px;\n  float: left;\n  width: 77px;\n  cursor: pointer;\n  line-height: 59px;\n  border-radius: 4px;\n  font-size: 16px;\n}\n.__mx-calendar_index_-ym:hover,\n.__mx-calendar_index_-day:hover {\n  background: #f0f0f0;\n}\n.__mx-calendar_index_-week,\n.__mx-calendar_index_-day {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  margin: 3px 2px;\n  float: left;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.__mx-calendar_index_-selected,\n.__mx-calendar_index_-selected:hover {\n  color: #fff;\n  background-color: #f96447;\n}\n.__mx-calendar_index_-notallowed,\n.__mx-calendar_index_-notallowed:hover {\n  color: #eee;\n  cursor: not-allowed;\n  background: #fff;\n}\n.__mx-calendar_index_-time {\n  padding: 5px;\n  border-top: 1px solid #e6e6e6;\n}\n.__mx-calendar_index_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin: 10px;\n  padding: 10px 0 0 0;\n  text-align: left;\n}\n.__mx-calendar_index_-rotate180 {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n");
var $ = require("$");
var GetNumOfDays = function (year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
};
var Days = ['日', '一', '二', '三', '四', '五', '六'];
var PadZero = function (str) {
    return ('0' + str).slice(-2);
};
var GetWeekText = function (weekStart) {
    var a = [];
    for (var i = 0; i < 7; i++) {
        a[i] = Days[(i + weekStart) % 7];
    }
    return a;
};
var DateDisabled = function (current, start, end) {
    var ts = current.getTime(), flag;
    if (start) {
        flag = ts < start.getTime();
    }
    if (!flag) {
        if (end) {
            flag = ts > end.getTime();
        }
        else {
            flag = false;
        }
    }
    return flag;
};
var MonthDisabled = function (year, month, start, end) {
    var flag, current = parseInt(year + PadZero(month), 10);
    if (start) {
        start = parseInt(start.getFullYear() + PadZero(start.getMonth()), 10);
        flag = current < start;
    }
    if (!flag && end) {
        end = parseInt(end.getFullYear() + PadZero(end.getMonth()), 10);
        flag = current > end;
    }
    return flag;
};
var YearDisabled = function (year, start, end) {
    var flag;
    if (start) {
        flag = year < start.getFullYear();
    }
    if (!flag && end) {
        flag = year > end.getFullYear();
    }
    return flag;
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
var DateFormat = function (date, format) {
    date = DateParse(date);
    format = format || 'YYYY-MM-dd';
    var key;
    var replacement = function (match) {
        return DateReg[key].fn(match, date);
    };
    for (key in DateReg) {
        format = format.replace(DateReg[key].reg, replacement);
    }
    return format;
};
var ParseEnablePanels = function (type) {
    if (!type) {
        type = 'all';
    }
    var enables = {
        year: true,
        month: true,
        day: true
    };
    if (type != 'all') {
        for (var p in enables) {
            if (type.indexOf(p) === -1) {
                delete enables[p];
            }
        }
    }
    return enables;
};
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', types = $$.types, id = $$.id, year = $$.year, month = $$.month, weekText = $$.weekText, days = $$.days, timeType = $$.timeType, timeValue = $$.timeValue, hasBtn = $$.hasBtn, showMonth = $$.showMonth, months = $$.months, showYear = $$.showYear, startYear = $$.startYear, endYear = $$.endYear, years = $$.years; var $expr, $art, $line; try {
    $p += '<div mxa="_Y:_" class="__mx-calendar_index_-wrapper __mx-style_index_-unselectable" mx-contextmenu="' + $viewId + '@{prevent}()">';
    $expr = '<%if (types.day) {%>';
    if (types.day) {
        ;
        $p += '<div id="days_' + ($expr = '<%=id%>', $e(id)) + '" class="__mx-style_index_-clearfix"><div mxa="_Y:a" class="__mx-calendar_index_-header"><span mxs="_Y:_" class="__mx-style_index_-mc-iconfont __mx-calendar_index_-minus __mx-style_index_-fl" mx-click="' + $viewId + '@{changeMonth}()">&#xe61e;</span><h4 mx-click="' + $viewId + '';
        $expr = '<%if (types.month) {%>';
        if (types.month) {
            ;
            $p += '@{showMonths}';
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '@{showYears}';
            $expr = '<%}%>';
        }
        ;
        $p += '()" class="__mx-calendar_index_-title">' + ($expr = '<%=year%>', $e(year)) + '-' + ($expr = '<%=(\'0\' + month).slice(-2)%>', $e(('0' + month).slice(-2))) + '</h4><span mxs="_Y:a" class="__mx-style_index_-mc-iconfont __mx-calendar_index_-plus __mx-calendar_index_-rotate180 __mx-style_index_-fr" mx-click="' + $viewId + '@{changeMonth}({next:true})">&#xe61e;</span></div><div mxa="_Y:b" class="__mx-calendar_index_-body"><div mxa="_Y:c" class="__mx-calendar_index_-weeks __mx-style_index_-clearfix">';
        $expr = '<%for (var i = 0; i < weekText.length; i++) {%>';
        for (var i = 0; i < weekText.length; i++) {
            ;
            $p += '<span mxa="_Y:d" class="__mx-calendar_index_-week">' + ($expr = '<%=weekText[i]%>', $e(weekText[i])) + '</span>';
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxa="_Y:e" class="__mx-calendar_index_-days __mx-style_index_-clearfix">';
        $expr = '<%for (var i = 0; i < days.length; i++) {%>';
        for (var i = 0; i < days.length; i++) {
            ;
            $p += ' ';
            $expr = '<%var tds = days[i]%>';
            var tds = days[i];
            $p += ' ';
            $expr = '<%for (var j = 0; j < tds.length; j++) {%>';
            for (var j = 0; j < tds.length; j++) {
                ;
                $p += '<span class="__mx-calendar_index_-day';
                $expr = '<%if (tds[j].otherMonth) {%>';
                if (tds[j].otherMonth) {
                    ;
                    $p += ' __mx-calendar_index_-gray';
                    $expr = '<%}%>';
                }
                ;
                $expr = '<%if (tds[j].disabled) {%>';
                if (tds[j].disabled) {
                    ;
                    $p += ' __mx-calendar_index_-notallowed';
                    $expr = '<%}%>';
                }
                ;
                $expr = '<%if (tds[j].selected) {%>';
                if (tds[j].selected) {
                    ;
                    $p += ' __mx-calendar_index_-selected';
                    $expr = '<%}%>';
                }
                ;
                $p += '" ';
                $expr = '<%if (!tds[j].disabled) {%>';
                if (!tds[j].disabled) {
                    ;
                    $p += ' mx-click="' + $viewId + '@{choose}({toMonth:' + ($expr = '<%=tds[j].month%>', $e(tds[j].month)) + ',date:\'' + ($expr = '<%=$eq(tds[j].full)%>', $e($eq(tds[j].full))) + '\'})" ';
                    $expr = '<%}%>';
                }
                ;
                $p += ' title="' + ($expr = '<%=tds[j].full%>', $e(tds[j].full)) + '">' + ($expr = '<%=tds[j].day%>', $e(tds[j].day)) + '</span>';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $expr = '<%if (timeType) {%>';
        if (timeType) {
            ;
            $p += '<div class="__mx-style_index_-clearfix __mx-calendar_index_-time" mx-change="' + $viewId + '@{setTime}()" mx-view="mx-time/index?time=' + ($expr = '<%!$eu(timeValue)%>', $eu(timeValue)) + '&types=' + ($expr = '<%!$eu(timeType)%>', $eu(timeType)) + '"></div>';
            $expr = '<%if (hasBtn) {%>';
            if (hasBtn) {
                ;
                $p += '<div mxs="_Y:b" class="__mx-calendar_index_-footer"><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + '@{hide}({enter:true})">确定</button><button type="button" class="__mx-style_index_-btn __mx-style_index_-ml5" mx-click="' + $viewId + '@{hide}()">取消</button></div>';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $expr = '<%if (types.month) {%>';
    if (types.month) {
        ;
        $p += '<div class="__mx-style_index_-clearfix';
        $expr = '<%if (types.day) {%>';
        if (types.day) {
            ;
            $p += ' __mx-calendar_index_-m-panel';
            $expr = '<%}%>';
        }
        ;
        $expr = '<%if (showMonth) {%>';
        if (showMonth) {
            ;
            $p += ' __mx-calendar_index_-ym-show';
            $expr = '<%}%>';
        }
        ;
        $p += '"><div mxa="_Y:f" class="__mx-calendar_index_-header"><span mxs="_Y:c" class="__mx-style_index_-mc-iconfont __mx-calendar_index_-minus __mx-style_index_-fl" mx-click="' + $viewId + '@{changeYear}()">&#xe61e;</span><h4 mxa="_Y:g" mx-click="' + $viewId + '@{showYears}()" class="__mx-calendar_index_-title">' + ($expr = '<%=year%>', $e(year)) + '</h4><span mxs="_Y:d" class="__mx-style_index_-mc-iconfont __mx-calendar_index_-plus __mx-style_index_-fr __mx-calendar_index_-rotate180" mx-click="' + $viewId + '@{changeYear}({next:true})">&#xe61e;</span></div><div mxa="_Y:h" class="__mx-calendar_index_-body __mx-style_index_-clearfix">';
        $expr = '<%for (var i = 0, m; i < months.length; i++) {%>';
        for (var i = 0, m; i < months.length; i++) {
            ;
            $p += ' ';
            $expr = '<%m = months[i]%>';
            m = months[i];
            $p += '<span class="__mx-calendar_index_-ym';
            $expr = '<%if (m.disabled) {%>';
            if (m.disabled) {
                ;
                $p += ' __mx-calendar_index_-notallowed';
                $expr = '<%}%>';
            }
            ;
            $expr = '<%if (m.selected) {%>';
            if (m.selected) {
                ;
                $p += ' __mx-calendar_index_-selected';
                $expr = '<%}%>';
            }
            ;
            $p += '" ';
            $expr = '<%if (!m.disabled) {%>';
            if (!m.disabled) {
                ;
                $p += ' mx-click="' + $viewId + '@{pickMonth}({month:\'' + ($expr = '<%=$eq(m.month)%>', $e($eq(m.month))) + '\'})" ';
                $expr = '<%}%>';
            }
            ;
            $p += '>' + ($expr = '<%=m.month%>', $e(m.month)) + '</span>';
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $expr = '<%if (types.year) {%>';
    if (types.year) {
        ;
        $p += '<div class="__mx-style_index_-clearfix';
        $expr = '<%if (types.day || types.month) {%>';
        if (types.day || types.month) {
            ;
            $p += ' __mx-calendar_index_-y-panel';
            $expr = '<%}%>';
        }
        ;
        $expr = '<%if (showYear) {%>';
        if (showYear) {
            ;
            $p += ' __mx-calendar_index_-ym-show';
            $expr = '<%}%>';
        }
        ;
        $p += '"><div mxa="_Y:i" class="__mx-calendar_index_-header"><span mxs="_Y:e" class="__mx-style_index_-mc-iconfont __mx-calendar_index_-minus __mx-style_index_-fl" mx-click="' + $viewId + '@{changeYear}({range:true})">&#xe61e;</span><h4 mxa="_Y:j" class="__mx-calendar_index_-title">' + ($expr = '<%=startYear%>', $e(startYear)) + '-' + ($expr = '<%=endYear%>', $e(endYear)) + '</h4><span mxs="_Y:f" class="__mx-style_index_-mc-iconfont __mx-calendar_index_-plus __mx-style_index_-fr __mx-calendar_index_-rotate180" mx-click="' + $viewId + '@{changeYear}({range:true,next:true})">&#xe61e;</span></div><div mxa="_Y:k" class="__mx-calendar_index_-body __mx-style_index_-clearfix">';
        $expr = '<%for (var i = 0, y; i < years.length; i++) {%>';
        for (var i = 0, y; i < years.length; i++) {
            ;
            $p += ' ';
            $expr = '<%y = years[i]%>';
            y = years[i];
            $p += '<span class="__mx-calendar_index_-ym';
            $expr = '<%if (y.selected) {%>';
            if (y.selected) {
                ;
                $p += ' __mx-calendar_index_-selected';
                $expr = '<%}%>';
            }
            ;
            $expr = '<%if (y.disabled) {%>';
            if (y.disabled) {
                ;
                $p += ' __mx-calendar_index_-notallowed';
                $expr = '<%}%>';
            }
            ;
            $expr = '<%if (!i || i == years.length - 1) {%>';
            if (!i || i == years.length - 1) {
                ;
                $p += ' __mx-calendar_index_-gray';
                $expr = '<%}%>';
            }
            ;
            $p += '" ';
            $expr = '<%if (!y.disabled) {%>';
            if (!y.disabled) {
                ;
                $p += ' mx-click="' + $viewId + '@{pickYear}({year:\'' + ($expr = '<%=$eq(y.year)%>', $e($eq(y.year))) + '\'})" ';
                $expr = '<%}%>';
            }
            ;
            $p += '>' + ($expr = '<%=y.year%>', $e(y.year)) + '</span>';
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{extra}'] = extra;
    },
    render: function () {
        var me = this;
        me.update(me['@{extra}']);
    },
    '@{toDefaultPanel}': function () {
        var me = this;
        var updater = me.updater;
        updater.set({
            showYear: 0,
            showMonth: 0
        });
        var data = updater.get();
        if (data.timeType) {
            if (me['@{date.value.bak}']) {
                me['@{update.selected}'](me['@{date.value.bak}']);
                me['@{update.years}']();
                me['@{update.months}']();
                me['@{update.days}']();
                delete me['@{date.value.bak}'];
            }
            if (me['@{time.value.bak}']) {
                updater.set({
                    timeValue: me['@{time.value.bak}']
                });
                delete me['@{time.value.bak}'];
            }
        }
        updater.digest();
    },
    update: function (ops) {
        ops = ops || {};
        if (!ops.selected) {
            ops.selected = new Date();
        }
        var types = ParseEnablePanels(ops.dateType);
        var weekStart = ops.weekStart | 0;
        var selected = DateParse(ops.selected);
        var me = this;
        var data = me.updater;
        var max = DateParse(ops.max);
        var min = DateParse(ops.min);
        var timeType = ops.timeType;
        var timeValue = DateFormat(selected, 'hh:mm:ss');
        data.set({
            types: types,
            showYear: 0,
            showMonth: 0,
            timeType: timeType,
            timeValue: timeValue,
            hasBtn: ops.hasBtn,
            dateValue: DateFormat(selected, ops.formatter),
            max: max,
            min: min,
            id: me.id,
            weekStart: weekStart,
            weekText: GetWeekText(weekStart)
        });
        me['@{update.selected}'](selected);
        me['@{update.years}']();
        me['@{update.months}']();
        me['@{update.days}'](true);
    },
    '@{update.selected}': function (selected) {
        var me = this, data = me.updater;
        selected = DateParse(selected);
        if (selected) {
            data.set({
                year: selected.getFullYear(),
                month: selected.getMonth() + 1,
                selectedYear: selected.getFullYear(),
                selectedMonth: selected.getMonth() + 1,
                selected: DateFormat(selected)
            });
        }
    },
    '@{update.years}': function (render) {
        var me = this;
        var data = me.updater;
        var json = data.get();
        var year = json.year;
        var min = json.min;
        var max = json.max;
        var startYear = year - year % 10 - 1;
        var endYear = startYear + 11;
        var rows = [];
        for (var i = startYear; i <= endYear; i++) {
            rows.push({
                year: i,
                selected: i == json.selectedYear,
                disabled: YearDisabled(i, min, max)
            });
        }
        data.set({
            startYear: startYear,
            endYear: endYear,
            years: rows
        });
        if (render) {
            data.digest();
        }
    },
    '@{update.months}': function (render) {
        var rows = [], data = this.updater, json = data.get(), year = json.year, min = json.min, max = json.max;
        for (var i = 1; i <= 12; i++) {
            rows.push({
                month: i,
                selected: year == json.selectedYear && i == json.selectedMonth,
                disabled: MonthDisabled(year, i - 1, min, max)
            });
        }
        data.set({
            months: rows
        });
        if (render) {
            data.digest();
        }
    },
    '@{update.days}': function (render) {
        var me = this;
        var trs = [];
        var data = me.updater;
        var weekStart = data.get('weekStart');
        var year = data.get('year');
        var month = data.get('month');
        var startOffset = (7 - weekStart + new Date(year, month - 1, 1).getDay()) % 7;
        var tds = [];
        var days = GetNumOfDays(year, month), i;
        var preDays = GetNumOfDays(year, month - 1);
        var max = data.get('max');
        var min = data.get('min');
        var selected = data.get('selected');
        var day, date, formatDay;
        for (i = 1; i <= startOffset; i++) {
            day = preDays - (startOffset - i);
            date = new Date(year, month - 2, day);
            tds.push({
                month: month - 1,
                full: DateFormat(date),
                day: day,
                otherMonth: true,
                disabled: DateDisabled(date, min, max)
            });
        }
        for (i = 1; i <= days; i++) {
            date = new Date(year, month - 1, i);
            formatDay = DateFormat(date);
            tds.push({
                selected: formatDay == selected,
                day: i,
                month: month,
                full: formatDay,
                disabled: DateDisabled(date, min, max)
            });
            if (((i + startOffset) % 7) === 0) {
                trs.push(tds);
                tds = [];
            }
        }
        var fillStart = tds.length; //补充
        var fillEnd = 14; //2周
        for (i = fillStart; i < fillEnd; i++) {
            day = i - fillStart + 1;
            date = new Date(year, month, day);
            tds.push({
                month: month + 1,
                day: day,
                otherMonth: true,
                full: DateFormat(date),
                disabled: DateDisabled(date, min, max)
            });
            if ((i + 1) % 7 === 0) {
                trs.push(tds);
                tds = [];
                if (trs.length == 6)
                    break;
            }
        }
        data.set({
            days: trs
        });
        if (render) {
            data.digest();
        }
    },
    '@{fire.event}': function (fromBtn) {
        var me = this;
        var data = me.updater.get();
        if (data.types.day) {
            if (data.timeType && data.hasBtn) {
                if (fromBtn) {
                    $('#' + me.id).trigger({
                        type: 'change',
                        date: data.dateValue,
                        time: data.timeType ? data.timeValue : null
                    });
                }
            }
            else {
                $('#' + me.id).trigger({
                    type: 'change',
                    date: data.dateValue,
                    time: data.timeType ? data.timeValue : null
                });
            }
        }
        else {
            $('#' + me.id).trigger({
                type: 'change',
                date: data.selectedYear + (data.types.month ? '-' + ('0' + data.selectedMonth).slice(-2) : '')
            });
        }
    },
    '@{changeMonth}<click>': function (e) {
        var me = this, data = me.updater, month = data.get('month'), year = data.get('year');
        if (e.params.next) {
            month += 1;
            if (month > 12) {
                month = 1;
                year++;
            }
        }
        else {
            month -= 1;
            if (month < 1) {
                month = 12;
                year--;
            }
        }
        data.set({
            year: year,
            month: month
        });
        me['@{update.days}'](true);
    },
    '@{changeYear}<click>': function (e) {
        var me = this;
        var params = e.params;
        var data = me.updater, year = data.get('year');
        if (params.range) {
            year = year + (params.next ? 10 : -10);
        }
        else {
            year = year + (params.next ? 1 : -1);
        }
        data.set({
            year: year
        });
        if (params.range) {
            me['@{update.years}'](true);
        }
        else {
            me['@{update.months}'](true);
        }
    },
    '@{showMonths}<click>': function () {
        var me = this;
        me.updater.set({
            showMonth: 1
        });
        me['@{update.months}'](true);
    },
    '@{showYears}<click>': function () {
        var me = this;
        me.updater.set({
            showYear: 1
        });
        me['@{update.years}'](true);
    },
    '@{pickYear}<click>': function (e) {
        var year = e.params.year;
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        var types = data.types;
        if (types.day || types.month) {
            me.updater.set({
                showYear: 0,
                year: +year
            });
            if (types.month) {
                me['@{update.months}'](true);
            }
            else {
                me['@{update.days}'](true);
            }
        }
        else {
            me['@{update.selected}'](year + '-01-01');
            me['@{update.years}'](true);
            me['@{fire.event}']();
        }
    },
    '@{pickMonth}<click>': function (e) {
        var month = e.params.month;
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        if (data.types.day) {
            updater.set({
                showMonth: 0,
                month: +month
            });
            me['@{update.days}'](true);
        }
        else {
            me['@{update.selected}'](data.year + '-' + month + '-01');
            me['@{update.months}'](true);
            me['@{fire.event}']();
        }
    },
    '@{choose}<click>': function (e) {
        var me = this;
        var data = me.updater;
        var month = data.get('month');
        var turnMonth = e.params.toMonth != month;
        me['@{update.selected}'](e.params.date);
        if (!me['@{date.value.bak}']) {
            me['@{date.value.bak}'] = data.get('dateValue');
        }
        if (turnMonth) {
            me['@{update.years}']();
            me['@{update.months}']();
        }
        data.set({
            dateValue: e.params.date
        });
        me['@{update.days}'](true);
        me['@{fire.event}']();
    },
    '@{setTime}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        if (!me['@{time.value.bak}']) {
            me['@{time.value.bak}'] = me.updater.get('timeValue');
        }
        me.updater.set({
            timeValue: e.time
        });
        me['@{update.days}'](true);
        me['@{fire.event}']();
    },
    '@{hide}<click>': function (e) {
        var me = this;
        if (e.params.enter) {
            delete me['@{date.value.bak}'];
            delete me['@{time.value.bak}'];
            me['@{fire.event}'](true);
            return;
        }
        $('#' + me.id).trigger('cancel');
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    }
}, {
    parse: DateParse,
    format: DateFormat,
    dateDisabled: DateDisabled
});

});