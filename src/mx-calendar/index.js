/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/index",["magix","$","mx-time/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-time/index");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
Magix.applyStyle("_h","._aY{background-color:#fff;display:inline-block;border:1px solid #e6e6e6;padding:0;border-radius:4px;overflow-y:hidden;z-index:10;color:#333;text-align:center;position:relative}._aZ{color:#777}._b_{height:32px;line-height:32px;padding:1px}._ba,._bb{color:#ccc;display:inline-block;padding:6px 7px;line-height:100%;vertical-align:top;cursor:pointer}._ba:focus,._ba:hover,._bb:focus,._bb:hover{color:#f96447}._bc{display:inline-block;cursor:pointer;padding:5px 10px;border-radius:4px;line-height:1}._bc:hover{background-color:#eee}._bd{width:245px}._be{color:#333;background-color:#fafafa;padding:0 10px}._bf{padding:10px}._bg,._bh{padding:1px 0;position:absolute;top:-100%;left:0;right:0;-webkit-transition:top .15s;transition:top .15s;background-color:#fff}._bi{top:0}._bj{height:59px;margin:2px;float:left;width:77px;cursor:pointer;line-height:59px;border-radius:4px;font-size:16px}._bk:hover,._bj:hover{background:#f0f0f0}._bk,._bl{width:28px;height:28px;line-height:28px;margin:3px 2px;float:left;border-radius:4px;cursor:pointer}._bm,._bm:hover{color:#fff;background-color:#f96447}._bn,._bn:hover{color:#eee;cursor:not-allowed;background:#fff}._bo{padding:5px}._bp,._bo{border-top:1px solid #e6e6e6}._bp{margin:10px;padding:10px 0 0;text-align:left}._bq{-webkit-transform:scaleX(-1);transform:scaleX(-1)}");
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
    tmpl: {"html":"<div class=\"_aY _aj\" mx-contextmenu=\"\u001f\u001e__E()\"><%if($$.types.day){%><div id=\"days_<%=$$.id%>\" class=\"_ai\"><div class=\"_b_\"><span class=\"__ _ba _aa\" mx-click=\"\u001f\u001e__w()\">&#xe61e;</span><h4 mx-click=\"\u001f\u001e<%if($$.types.month){%>__y<%}else{%>__z<%}%>()\" class=\"_bc\"><%=$$.year%>-<%=('0'+$$.month).slice(-2)%></h4><span class=\"__ _bb _bq _ab\" mx-click=\"\u001f\u001e__w({next:true})\">&#xe61e;</span></div><div class=\"_bd\"><div class=\"_be _ai\"><%for(var _=0;_<$$.weekText.length;_++){%><span class=\"_bl\"><%=$$.weekText[_]%></span><%}%></div><div class=\"_bf _ai\"><%for(var a=0;a<$$.days.length;a++){var b=$$.days[a];for(var c=0;c<b.length;c++){%><span class=\"_bk<%if(b[c].otherMonth){%> _aZ<%}if(b[c].disabled){%> _bn<%}if(b[c].selected){%> _bm<%}%>\" <%if(!b[c].disabled){%> mx-click=\"\u001f\u001e__C({toMonth:<%=b[c].month%>,date:'<%=$eq(b[c].full)%>'})\" <%}%> title=\"<%=b[c].full%>\"><%=b[c].day%></span><%}}%></div></div><%if($$.timeType){%><div class=\"_ai _bo\" mx-change=\"\u001f\u001e__D()\" mx-view=\"mx-time/index?time=<%!$eu($$.timeValue)%>&types=<%!$eu($$.timeType)%>\"></div><%if($$.hasBtn){%><div class=\"_bp\"><button type=\"button\" class=\"_an _ao\" mx-click=\"\u001f\u001e__a({enter:true})\">确定</button><button type=\"button\" class=\"_an _s\" mx-click=\"\u001f\u001e__a()\">取消</button></div><%}}%></div><%}if($$.types.month){%><div class=\"_ai<%if($$.types.day){%> _bg<%}if($$.showMonth){%> _bi<%}%>\"><div class=\"_b_\"><span class=\"__ _ba _aa\" mx-click=\"\u001f\u001e__x()\">&#xe61e;</span><h4 mx-click=\"\u001f\u001e__z()\" class=\"_bc\"><%=$$.year%></h4><span class=\"__ _bb _ab _bq\" mx-click=\"\u001f\u001e__x({next:true})\">&#xe61e;</span></div><div class=\"_bd _ai\"><%for(var d=0,e;d<$$.months.length;d++){e=$$.months[d]%><span class=\"_bj<%if(e.disabled){%> _bn<%}if(e.selected){%> _bm<%}%>\" <%if(!e.disabled){%> mx-click=\"\u001f\u001e__B({month:'<%=$eq(e.month)%>'})\" <%}%>><%=e.month%></span><%}%></div></div><%}if($$.types.year){%><div class=\"_ai<%if($$.types.day||$$.types.month){%> _bh<%}if($$.showYear){%> _bi<%}%>\"><div class=\"_b_\"><span class=\"__ _ba _aa\" mx-click=\"\u001f\u001e__x({range:true})\">&#xe61e;</span><h4 class=\"_bc\"><%=$$.startYear%>-<%=$$.endYear%></h4><span class=\"__ _bb _ab _bq\" mx-click=\"\u001f\u001e__x({range:true,next:true})\">&#xe61e;</span></div><div class=\"_bd _ai\"><%for(var f=0,g;f<$$.years.length;f++){g=$$.years[f]%><span class=\"_bj<%if(g.selected){%> _bm<%}if(g.disabled){%> _bn<%}if(!f||f==$$.years.length-1){%> _aZ<%}%>\" <%if(!g.disabled){%> mx-click=\"\u001f\u001e__A({year:'<%=$eq(g.year)%>'})\" <%}%>><%=g.year%></span><%}%></div></div><%}%></div>"},
    init: function (extra) {
        var me = this;
        me['__c'] = extra;
    },
    render: function () {
        var me = this;
        me.update(me['__c']);
    },
    '__n': function () {
        var me = this;
        var updater = me.updater;
        updater.set({
            showYear: 0,
            showMonth: 0
        });
        var data = updater.get();
        if (data.timeType) {
            if (me['__p']) {
                me['__q'](me['__p']);
                me['__r']();
                me['__s']();
                me['__t']();
                delete me['__p'];
            }
            if (me['__u']) {
                updater.set({
                    timeValue: me['__u']
                });
                delete me['__u'];
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
        me['__q'](selected);
        me['__r']();
        me['__s']();
        me['__t'](true);
    },
    '__q': function (selected) {
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
    '__r': function (render) {
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
    '__s': function (render) {
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
    '__t': function (render) {
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
    '__v': function (fromBtn) {
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
    '__w<click>': function (e) {
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
        me['__t'](true);
    },
    '__x<click>': function (e) {
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
            me['__r'](true);
        }
        else {
            me['__s'](true);
        }
    },
    '__y<click>': function () {
        var me = this;
        me.updater.set({
            showMonth: 1
        });
        me['__s'](true);
    },
    '__z<click>': function () {
        var me = this;
        me.updater.set({
            showYear: 1
        });
        me['__r'](true);
    },
    '__A<click>': function (e) {
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
                me['__s'](true);
            }
            else {
                me['__t'](true);
            }
        }
        else {
            me['__q'](year + '-01-01');
            me['__r'](true);
            me['__v']();
        }
    },
    '__B<click>': function (e) {
        var month = e.params.month;
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        if (data.types.day) {
            updater.set({
                showMonth: 0,
                month: +month
            });
            me['__t'](true);
        }
        else {
            me['__q'](data.year + '-' + month + '-01');
            me['__s'](true);
            me['__v']();
        }
    },
    '__C<click>': function (e) {
        var me = this;
        var data = me.updater;
        var month = data.get('month');
        var turnMonth = e.params.toMonth != month;
        me['__q'](e.params.date);
        if (!me['__p']) {
            me['__p'] = data.get('dateValue');
        }
        if (turnMonth) {
            me['__r']();
            me['__s']();
        }
        data.set({
            dateValue: e.params.date
        });
        me['__t'](true);
        me['__v']();
    },
    '__D<change>': function (e) {
        e.stopPropagation();
        var me = this;
        if (!me['__u']) {
            me['__u'] = me.updater.get('timeValue');
        }
        me.updater.set({
            timeValue: e.time
        });
        me['__t'](true);
        me['__v']();
    },
    '__a<click>': function (e) {
        var me = this;
        if (e.params.enter) {
            delete me['__p'];
            delete me['__u'];
            me['__v'](true);
            return;
        }
        $('#' + me.id).trigger('cancel');
    },
    '__E<contextmenu>': function (e) {
        e.preventDefault();
    }
}, {
    parse: DateParse,
    format: DateFormat,
    dateDisabled: DateDisabled
});

});