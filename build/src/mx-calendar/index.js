/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/index",["magix","$","mx-calendar/util","../mx-medusa/util","mx-time/index"],(require,exports,module)=>{
/*Magix,$,Util,I18n*/
require("mx-time/index");
var Magix = require("magix");
var $ = require("$");
var Util = require("mx-calendar/util");
var PadZero = Util.padZero;
var ForeverStr = Util.foreverStr;
var DateFormat = Util.dateFormat;
var DateParse = Util.dateParse;
var GetDefaultDate = Util.getDefaultDate;
Magix.applyStyle("_zs_galleryn","._zs_gallerycf{border:1px solid #f5f5f6}._zs_gallerycf,._zs_galleryaS{box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}._zs_galleryaS{position:relative;z-index:1000;display:inline-block;padding:0;background-color:#fff;border-radius:4px;overflow-y:hidden;color:#333;text-align:center;border:1px solid #f5f5f6}._zs_galleryaS ._zs_galleryaT{padding:2px 4px}._zs_galleryaS ._zs_galleryaT ._zs_galleryaU{float:left}._zs_galleryaS ._zs_galleryaT ._zs_galleryaV{float:right;-webkit-transform:scaleX(-1);transform:scaleX(-1)}._zs_galleryaS ._zs_galleryaT ._zs_galleryaU,._zs_galleryaS ._zs_galleryaT ._zs_galleryaV{line-height:28px;font-size:14px;color:#ccc;cursor:pointer}._zs_galleryaS ._zs_galleryaT ._zs_galleryaU:hover,._zs_galleryaS ._zs_galleryaT ._zs_galleryaV:hover{color:#4d7fff}._zs_galleryaS ._zs_galleryaT ._zs_gallerycg{display:inline-block;height:28px;line-height:28px;padding:0 10px;cursor:pointer;border-radius:4px;color:#666}._zs_galleryaS ._zs_galleryaT ._zs_gallerycg:hover{background-color:#eee}._zs_galleryaS ._zs_galleryaW{width:224px}._zs_galleryaS ._zs_galleryaW ._zs_gallerych{color:#333;background-color:#fafafa;padding:0 10px;color:#666}._zs_galleryaS ._zs_galleryaW ._zs_galleryci{padding:10px}._zs_galleryaS ._zs_galleryaW ._zs_gallerycj,._zs_galleryaS ._zs_galleryaW ._zs_galleryck{float:left;height:24px;line-height:24px;border-radius:4px;cursor:pointer;color:#333}._zs_galleryaS ._zs_galleryaW ._zs_galleryck{width:28px;margin:3px 0}._zs_galleryaS ._zs_galleryaW ._zs_gallerycj{width:24px;margin:3px 2px}._zs_galleryaS ._zs_galleryaW ._zs_gallerycj:hover{background-color:#f0f0f0}._zs_galleryaS ._zs_galleryaW ._zs_gallerycl{color:#999}._zs_galleryaS ._zs_galleryaW ._zs_galleryaX,._zs_galleryaS ._zs_galleryaW ._zs_galleryaX:hover{background-color:#f6f9ff}._zs_galleryaS ._zs_galleryaW ._zs_gallerycm,._zs_galleryaS ._zs_galleryaW ._zs_gallerycm:hover{color:#eee;cursor:not-allowed;background:#fff}._zs_galleryaS ._zs_galleryaW ._zs_galleryaY,._zs_galleryaS ._zs_galleryaW ._zs_galleryaY:hover{color:#fff;background-color:#4d7fff}._zs_galleryaS ._zs_gallerycn{padding-top:10px;padding-left:10px;border-top:1px solid #e6e6e6}._zs_galleryaS ._zs_galleryco{margin:10px;padding:10px 0 0;border-top:1px solid #e6e6e6;text-align:left}._zs_gallerycp,._zs_gallerycq{padding:1px 0;position:absolute;top:-100%;left:0;right:0;transition:top .15s;background-color:#fff}._zs_gallerycr{top:0}._zs_gallerycs{float:left;width:54px;height:37px;margin:10px;line-height:37px;border-radius:4px;font-size:14px;cursor:pointer}._zs_gallerycs:hover{background-color:#f0f0f0}");
var I18n = require("../mx-medusa/util");
var Days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map(function (key) {
    return I18n['calendar.' + key];
});
var Today = new Date();
var GetNumOfDays = function (year, month) {
    return 32 - new Date(year, month - 1, 32).getDate();
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
var GetWeekText = function (weekStart) {
    var a = [];
    for (var i = 0; i < 7; i++) {
        a[i] = Days[(i + weekStart) % 7];
    }
    return a;
};
var DateDisabled = function (current, start, end, disabledWeeks) {
    // disabledWeeks 不可选择周几
    var day = current.getDay();
    if (disabledWeeks.indexOf(day) > -1) {
        return true;
    }
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
} ; var $g = '', $_temp, $p = '', types = $$.types, id = $$.id, year = $$.year, month = $$.month, weekText = $$.weekText, days = $$.days, timeType = $$.timeType, timeValue = $$.timeValue, hasBtn = $$.hasBtn, showMonth = $$.showMonth, months = $$.months, showYear = $$.showYear, startYear = $$.startYear, endYear = $$.endYear, years = $$.years; $p += '<div mxa="_zs_gallery*:_" class="_zs_galleryaS unselectable" mx-contextmenu="' + $viewId + '__H()">'; if (types.day) {
    ;
    $p += '<div id="days_' + $e(id) + '" class="clearfix"><div mxa="_zs_gallery*:a" class="_zs_galleryaT"><span mxs="_zs_gallery*:_" class="mc-iconfont _zs_galleryaU fl" mx-click="' + $viewId + '__z()">&#xe61e;</span><span class="_zs_gallerycg" mx-click="' + $viewId + '';
    if (types.month) {
        ;
        $p += '__B';
    }
    else {
        ;
        $p += '__C';
    }
    ;
    $p += '()">' + $e(year) + '-' + $e(('0' + month).slice(-2)) + '</span><span mxs="_zs_gallery*:a" class="mc-iconfont _zs_galleryaV fr" mx-click="' + $viewId + '__z({next:true})">&#xe61e;</span></div><div mxa="_zs_gallery*:b" class="_zs_galleryaW"><div mxa="_zs_gallery*:c" class="_zs_gallerych clearfix">';
    for (var i = 0; i < weekText.length; i++) {
        ;
        $p += '<span mxa="_zs_gallery*:d" class="_zs_galleryck">' + $e(weekText[i]) + '</span>';
    }
    ;
    $p += '</div><div mxa="_zs_gallery*:e" class="_zs_galleryci clearfix">';
    for (var i = 0; i < days.length; i++) {
        ;
        $p += ' ';
        var tds = days[i];
        $p += ' ';
        for (var j = 0; j < tds.length; j++) {
            ;
            $p += '<span class="_zs_gallerycj';
            if (tds[j].today) {
                ;
                $p += ' _zs_galleryaX';
            }
            ;
            if (tds[j].otherMonth) {
                ;
                $p += ' _zs_gallerycl';
            }
            ;
            if (tds[j].disabled) {
                ;
                $p += ' _zs_gallerycm';
            }
            ;
            if (tds[j].selected) {
                ;
                $p += ' _zs_galleryaY';
            }
            ;
            $p += '" ';
            if (!tds[j].disabled) {
                ;
                $p += ' mx-click="' + $viewId + '__F({toMonth:' + $e(tds[j].month) + ',date:\'' + $e($eq(tds[j].full)) + '\'})" ';
            }
            ;
            $p += ' title="' + $e(tds[j].full) + '">' + $e(tds[j].day) + '</span>';
        }
        ;
        $p += ' ';
    }
    ;
    $p += '</div></div>';
    if (timeType) {
        ;
        $p += '<div class="clearfix _zs_gallerycn" mx-change="' + $viewId + '__G()" mx-view="mx-time/index?time=' + $eu(timeValue) + '&types=' + $eu(timeType) + '"></div>';
        if (hasBtn) {
            ;
            $p += '<div mxs="_zs_gallery*:b" class="_zs_galleryco"><button type="button" class="btn btn-small btn-brand" mx-click="' + $viewId + '__m({enter:true})">确定</button><button type="button" class="btn btn-small ml10" mx-click="' + $viewId + '__m()">取消</button></div>';
        }
        ;
        $p += ' ';
    }
    ;
    $p += '</div>';
} ; $p += ' '; if (types.month) {
    ;
    $p += '<div class="clearfix';
    if (types.day) {
        ;
        $p += ' _zs_gallerycp';
    }
    ;
    if (showMonth) {
        ;
        $p += ' _zs_gallerycr';
    }
    ;
    $p += '"><div mxa="_zs_gallery*:f" class="_zs_galleryaT"><span mxs="_zs_gallery*:c" class="mc-iconfont _zs_galleryaU fl" mx-click="' + $viewId + '__A()">&#xe61e;</span><span mxa="_zs_gallery*:g" class="_zs_gallerycg" mx-click="' + $viewId + '__C()">' + $e(year) + '</span><span mxs="_zs_gallery*:d" class="mc-iconfont _zs_galleryaV fr" mx-click="' + $viewId + '__A({next:true})">&#xe61e;</span></div><div mxa="_zs_gallery*:h" class="_zs_galleryaW clearfix">';
    for (var i = 0, m; i < months.length; i++) {
        ;
        $p += ' ';
        m = months[i];
        $p += '<span class="_zs_gallerycs';
        if (m.disabled) {
            ;
            $p += ' _zs_gallerycm';
        }
        ;
        if (m.selected) {
            ;
            $p += ' _zs_galleryaY';
        }
        ;
        $p += '" ';
        if (!m.disabled) {
            ;
            $p += ' mx-click="' + $viewId + '__E({month:\'' + $e($eq(m.month)) + '\'})" ';
        }
        ;
        $p += '>' + $e(m.month) + '</span>';
    }
    ;
    $p += '</div></div>';
} ; $p += ' '; if (types.year) {
    ;
    $p += '<div class="clearfix';
    if (types.day || types.month) {
        ;
        $p += ' _zs_gallerycq';
    }
    ;
    if (showYear) {
        ;
        $p += ' _zs_gallerycr';
    }
    ;
    $p += '"><div mxa="_zs_gallery*:i" class="_zs_galleryaT"><span mxs="_zs_gallery*:e" class="mc-iconfont _zs_galleryaU fl" mx-click="' + $viewId + '__A({range:true})">&#xe61e;</span><span mxa="_zs_gallery*:j" class="_zs_gallerycg">' + $e(startYear) + '-' + $e(endYear) + '</span><span mxs="_zs_gallery*:f" class="mc-iconfont _zs_galleryaV fr" mx-click="' + $viewId + '__A({range:true,next:true})">&#xe61e;</span></div><div mxa="_zs_gallery*:k" class="_zs_galleryaW clearfix">';
    for (var i = 0, y; i < years.length; i++) {
        ;
        $p += ' ';
        y = years[i];
        $p += '<span class="_zs_gallerycs';
        if (y.selected) {
            ;
            $p += ' _zs_galleryaY';
        }
        ;
        if (y.disabled) {
            ;
            $p += ' _zs_gallerycm';
        }
        ;
        $p += '" ';
        if (!y.disabled) {
            ;
            $p += ' mx-click="' + $viewId + '__D({year:\'' + $e($eq(y.year)) + '\'})" ';
        }
        ;
        $p += '>' + $e(y.year) + '</span>';
    }
    ;
    $p += '</div></div>';
} ; $p += '</div>'; return $p; },
    init: function (extra) {
        this['__i'] = $.extend(true, {}, extra.configs);
    },
    render: function () {
        var me = this;
        var ops = me['__i'];
        ops = ops || {};
        var forever = (ops.selected == ForeverStr);
        // 最大最小不关心时分秒，时分秒的大小不限制
        var max, min;
        if (ops.max) {
            max = new Date(DateFormat(ops.max, 'YYYY-MM-dd') + ' 23:59:59');
        }
        if (ops.min) {
            min = new Date(DateFormat(ops.min, 'YYYY-MM-dd') + ' 00:00:00');
        }
        var today = new Date();
        if (!ops.selected || forever) {
            ops.selected = GetDefaultDate(ops);
        }
        var selected = DateParse(ops.selected);
        var timeValue = DateFormat(selected, 'hh:mm:ss'), dateValue = DateFormat(selected, ops.formatter);
        var types = ParseEnablePanels(ops.dateType);
        var weekStart = ops.weekStart | 0;
        var timeType = ops.timeType;
        var disabledWeeks = (ops.disabledWeeks || []).map(function (w) {
            return +w;
        });
        me.updater.set({
            types: types,
            showYear: 0,
            showMonth: 0,
            timeType: timeType,
            timeValue: timeValue,
            dateValue: dateValue,
            hasBtn: ops.hasBtn,
            max: max,
            min: min,
            id: me.id,
            weekStart: weekStart,
            weekText: GetWeekText(weekStart),
            disabledWeeks: disabledWeeks
        });
        // 不限的情况特殊处理，不设置选中值
        me['__r'](selected, forever);
        me['__s']();
        me['__t']();
        me['__u'](true);
    },
    '__x': function () {
        var me = this;
        var updater = me.updater;
        updater.set({
            showYear: 0,
            showMonth: 0
        });
        var data = updater.get();
        if (data.timeType) {
            if (me['__v']) {
                me['__r'](me['__v']);
                me['__s']();
                me['__t']();
                me['__u']();
                delete me['__v'];
            }
            if (me['__w']) {
                updater.set({
                    timeValue: me['__w']
                });
                delete me['__w'];
            }
        }
        updater.digest();
    },
    '__r': function (selected, forever) {
        var me = this, data = me.updater;
        selected = DateParse(selected);
        if (selected) {
            data.set({
                year: selected.getFullYear(),
                month: selected.getMonth() + 1,
                selectedYear: selected.getFullYear(),
                selectedMonth: selected.getMonth() + 1,
                selected: forever ? '' : DateFormat(selected)
            });
        }
    },
    '__s': function (render) {
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
    '__t': function (render) {
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
    '__u': function (render) {
        var me = this;
        var trs = [];
        var data = me.updater;
        var weekStart = data.get('weekStart');
        var disabledWeeks = data.get('disabledWeeks');
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
        var today = DateFormat(Today);
        for (i = 1; i <= startOffset; i++) {
            day = preDays - (startOffset - i);
            date = new Date(year, month - 2, day);
            tds.push({
                month: month - 1,
                full: DateFormat(date),
                day: day,
                otherMonth: true,
                disabled: DateDisabled(date, min, max, disabledWeeks)
            });
        }
        for (i = 1; i <= days; i++) {
            date = new Date(year, month - 1, i);
            formatDay = DateFormat(date);
            tds.push({
                today: formatDay == today,
                selected: formatDay == selected,
                day: i,
                month: month,
                full: formatDay,
                disabled: DateDisabled(date, min, max, disabledWeeks)
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
                disabled: DateDisabled(date, min, max, disabledWeeks)
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
    '__y': function (fromBtn) {
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
    '__z<click>': function (e) {
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
        me['__u'](true);
    },
    '__A<click>': function (e) {
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
            me['__s'](true);
        }
        else {
            me['__t'](true);
        }
    },
    '__B<click>': function () {
        var me = this;
        me.updater.set({
            showMonth: 1
        });
        me['__t'](true);
    },
    '__C<click>': function () {
        var me = this;
        me.updater.set({
            showYear: 1
        });
        me['__s'](true);
    },
    '__D<click>': function (e) {
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
                me['__t'](true);
            }
            else {
                me['__u'](true);
            }
        }
        else {
            me['__r'](year + '-01-01');
            me['__s'](true);
            me['__y']();
        }
    },
    '__E<click>': function (e) {
        var month = e.params.month;
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        if (data.types.day) {
            updater.set({
                showMonth: 0,
                month: +month
            });
            me['__u'](true);
        }
        else {
            me['__r'](data.year + '-' + month + '-01');
            me['__t'](true);
            me['__y']();
        }
    },
    '__F<click>': function (e) {
        var me = this;
        var data = me.updater;
        var month = data.get('month');
        var turnMonth = e.params.toMonth != month;
        me['__r'](e.params.date);
        if (!me['__v']) {
            me['__v'] = data.get('dateValue');
        }
        if (turnMonth) {
            me['__s']();
            me['__t']();
        }
        data.set({
            dateValue: e.params.date
        });
        me['__u'](true);
        me['__y']();
    },
    '__G<change>': function (e) {
        e.stopPropagation();
        var me = this;
        if (!me['__w']) {
            me['__w'] = me.updater.get('timeValue');
        }
        me.updater.set({
            timeValue: e.time
        });
        me['__u'](true);
        me['__y']();
    },
    '__m<click>': function (e) {
        var me = this;
        if (e.params.enter) {
            delete me['__v'];
            delete me['__w'];
            me['__y'](true);
            return;
        }
        $('#' + me.id).trigger('cancel');
    },
    '__H<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});