/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/index',["magix","$","mx-time/index"],function(require,exports,module){
/*Magix,$*/
require("mx-time/index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
Magix.applyStyle("f",".aP{background-color:#fff;display:inline-block;border:1px solid #e6e6e6;padding:0;border-radius:4px;overflow-y:hidden;z-index:10;color:#333;text-align:center;position:relative}.aQ{color:#777}.aR{height:32px;line-height:32px;padding:1px}.aS,.aT{color:#ccc;display:inline-block;padding:6px 7px;line-height:100%;vertical-align:top;cursor:pointer}.aS:focus,.aS:hover,.aT:focus,.aT:hover{color:#6363e6}.aU{display:inline-block;cursor:pointer;padding:5px 10px;border-radius:4px;line-height:1}.aU:hover{background-color:#eee}.aV{width:245px}.aW{color:#333;background-color:#fafafa;padding:0 10px}.aX{padding:10px}.aY,.aZ{padding:1px 0;position:absolute;top:-100%;left:0;right:0;-webkit-transition:top .15s;transition:top .15s;background-color:#fff}.b_{top:0}.ba{height:59px;margin:2px;float:left;width:77px;cursor:pointer;line-height:59px;border-radius:4px;font-size:16px}.bb:hover,.ba:hover{background:#f0f0f0}.bb,.bc{width:28px;height:28px;line-height:28px;margin:3px 2px;float:left;border-radius:4px;cursor:pointer}.bd,.bd:hover{color:#fff;background-color:#6363e6}.be,.be:hover{color:#eee;cursor:not-allowed;background:#fff}.bf{padding:5px}.bg,.bf{border-top:1px solid #e6e6e6}.bg{margin:10px;padding:10px 0 0;text-align:left}.bh{-webkit-transform:scaleX(-1);transform:scaleX(-1)}");
var $ = require('$');
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
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"aP ah\" mx-contextmenu=\"\u001f\u001e_D()\">1\u001d</div>","subs":[{"keys":["types"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.types.day){%><div mx-guid=\"g1\u001f\" id=\"days_<%=$$.id%>\" class=\"ag\">2\u001d</div><%}if($$.types.month){%><div id=\"months_<%=$$.id%>\" class=\"ag<%if($$.types.day){%> aY<%}%>\"><div class=\"aR\"><span class=\"_ aS Z\" mx-click=\"\u001f\u001e_w()\">&#xe61e;</span><h4 mx-guid=\"g7\u001f\" mx-click=\"\u001f\u001e_y()\" class=\"aU\">8\u001d</h4><span class=\"_ aT a_ bh\" mx-click=\"\u001f\u001e_w({next:true})\">&#xe61e;</span></div><div mx-guid=\"g8\u001f\" class=\"aV ag\">9\u001d</div></div><%}if($$.types.year){%><div id=\"years_<%=$$.id%>\" class=\"ag<%if($$.types.day||$$.types.month){%> aZ<%}%>\"><div class=\"aR\"><span class=\"_ aS Z\" mx-click=\"\u001f\u001e_w({range:true})\">&#xe61e;</span><h4 mx-guid=\"ga\u001f\" class=\"aU\">11\u001d</h4><span class=\"_ aT a_ bh\" mx-click=\"\u001f\u001e_w({range:true,next:true})\">&#xe61e;</span></div><div mx-guid=\"gb\u001f\" class=\"aV ag\">12\u001d</div></div><%}%>","s":"1\u001d"},{"keys":["timeType"],"path":"div[mx-guid=\"g1\u001f\"]","pKeys":["types"],"tmpl":"<div class=\"aR\"><span class=\"_ aS Z\" mx-click=\"\u001f\u001e_v()\">&#xe61e;</span><h4 mx-guid=\"g2\u001f\" mx-click=\"\u001f\u001e<%if($$.types.month){%>_x<%}else{%>_y<%}%>()\" class=\"aU\">3\u001d</h4><span class=\"_ aT bh a_\" mx-click=\"\u001f\u001e_v({next:true})\">&#xe61e;</span></div><div class=\"aV\"><div mx-guid=\"g3\u001f\" class=\"aW ag\">4\u001d</div><div mx-guid=\"g4\u001f\" class=\"aX ag\">5\u001d</div></div><%if($$.timeType){%><div mx-guid=\"g5\u001f\" class=\"ag bf\" mx-change=\"\u001f\u001e_C()\" mx-view=\"mx-time/index?time=<%!$eu($$.timeValue)%>&type=<%!$eu($$.timeType)%>\"></div><div class=\"bg\"><button class=\"al am\" mx-click=\"\u001f\u001e_a({enter:true})\">确定</button><button class=\"al s\" mx-click=\"\u001f\u001e_a()\">取消</button></div><%}%>","s":"2\u001d"},{"keys":["types","year","month"],"path":"h4[mx-guid=\"g2\u001f\"]","tmpl":"<%=$$.year%>-<%=('0'+$$.month).slice(-2)%>","s":"3\u001d","attr":"mx-click=\"\u001f\u001e<%if($$.types.month){%>_x<%}else{%>_y<%}%>()\"","attrs":[{"n":"mx-click"}],"mask":"211"},{"keys":["weekText"],"path":"div[mx-guid=\"g3\u001f\"]","tmpl":"<%for(var a=0;a<$$.weekText.length;a++){%><span class=\"bc\"><%=$$.weekText[a]%></span><%}%>","s":"4\u001d"},{"keys":["days"],"path":"div[mx-guid=\"g4\u001f\"]","tmpl":"<%for(var b=0;b<$$.days.length;b++){var c=$$.days[b];for(var d=0;d<c.length;d++){%><span class=\"bb<%if(c[d].otherMonth){%> aQ<%}if(c[d].disabled){%> be<%}if(c[d].selected){%> bd<%}%>\" <%if(!c[d].disabled){%> mx-click=\"\u001f\u001e_B({toMonth:<%=c[d].month%>,date:'<%=$eq(c[d].full)%>'})\" <%}%> title=\"<%=c[d].full%>\"><%=c[d].day%></span><%}}%>","s":"5\u001d"},{"keys":["timeValue"],"path":"div[mx-guid=\"g5\u001f\"]","pKeys":["types","timeType"],"attr":"mx-view=\"mx-time/index?time=<%!$eu($$.timeValue)%>&type=<%!$eu($$.timeType)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["year"],"path":"h4[mx-guid=\"g7\u001f\"]","tmpl":"<%=$$.year%>","s":"8\u001d"},{"keys":["months"],"path":"div[mx-guid=\"g8\u001f\"]","pKeys":["types"],"tmpl":"<%for(var e=0,f;e<$$.months.length;e++){f=$$.months[e]%><span class=\"ba<%if(f.disabled){%> be<%}if(f.selected){%> bd<%}%>\" <%if(!f.disabled){%> mx-click=\"\u001f\u001e_A({month:'<%=$eq(f.month)%>'})\" <%}%>><%=f.month%></span><%}%>","s":"9\u001d"},{"keys":["startYear","endYear"],"path":"h4[mx-guid=\"ga\u001f\"]","tmpl":"<%=$$.startYear%>-<%=$$.endYear%>","s":"11\u001d"},{"keys":["years"],"path":"div[mx-guid=\"gb\u001f\"]","pKeys":["types"],"tmpl":"<%for(var g=0,h;g<$$.years.length;g++){h=$$.years[g]%><span class=\"ba<%if(h.selected){%> bd<%}if(h.disabled){%> be<%}if(!g||g==$$.years.length-1){%> aQ<%}%>\" <%if(!h.disabled){%> mx-click=\"\u001f\u001e_z({year:'<%=$eq(h.year)%>'})\" <%}%>><%=h.year%></span><%}%>","s":"12\u001d"}]},
    init: function (extra) {
        var me = this;
        me['_c'] = extra;
    },
    render: function () {
        var me = this;
        me.update(me['_c']);
    },
    '_m': function () {
        var me = this;
        $('#years_' + me.id).removeClass('b_');
        $('#months_' + me.id).removeClass('b_');
        var updater = me.updater;
        var data = updater.get();
        if (data.timeType) {
            var digest = false;
            if (me['_o']) {
                me['_p'](me['_o']);
                me['_q']();
                me['_r']();
                me['_s']();
                digest = true;
                delete me['_o'];
            }
            if (me['_t']) {
                updater.set({
                    timeValue: me['_t']
                });
                digest = true;
                delete me['_t'];
            }
            if (digest) {
                updater.digest();
            }
        }
    },
    update: function (ops) {
        ops = ops || {};
        if (!ops.selected) {
            ops.selected = new Date();
        }
        var types = ParseEnablePanels(ops.dateType);
        var weekStart = ops.weekStart || 0;
        var selected = DateParse(ops.selected);
        var me = this;
        var data = me.updater;
        var max = DateParse(ops.max);
        var min = DateParse(ops.min);
        var timeType = ops.timeType;
        var timeValue = selected.getHours() + ':' + selected.getMinutes() + ':' + selected.getSeconds();
        data.set({
            types: types,
            timeType: timeType,
            timeValue: timeValue,
            dateValue: DateFormat(selected, ops.formatter),
            max: max,
            min: min,
            id: me.id,
            weekStart: weekStart,
            weekText: GetWeekText(weekStart)
        });
        me['_p'](selected);
        me['_q']();
        me['_r']();
        me['_s'](true);
    },
    '_p': function (selected) {
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
    '_q': function (render) {
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
    '_r': function (render) {
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
    '_s': function (render) {
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
    '_u': function (fromBtn) {
        var me = this;
        var data = me.updater.get();
        if (data.types.day) {
            if (data.timeType) {
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
    '_v<click>': function (e) {
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
        me['_s'](true);
    },
    '_w<click>': function (e) {
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
            me['_q'](true);
        }
        else {
            me['_r'](true);
        }
    },
    '_x<click>': function () {
        var me = this;
        $('#months_' + me.id).addClass('b_');
        me['_r'](true);
    },
    '_y<click>': function () {
        var me = this;
        $('#years_' + me.id).addClass('b_');
        me['_q'](true);
    },
    '_z<click>': function (e) {
        var year = e.params.year;
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        var types = data.types;
        if (types.day || types.month) {
            me.updater.set({
                year: +year
            });
            $('#years_' + me.id).removeClass('b_');
            if (types.month) {
                me['_r'](true);
            }
            else {
                me['_s'](true);
            }
        }
        else {
            me['_p'](year + '-01-01');
            me['_q'](true);
            me['_u']();
        }
    },
    '_A<click>': function (e) {
        var month = e.params.month;
        var me = this;
        var updater = me.updater;
        var data = updater.get();
        if (data.types.day) {
            updater.set({
                month: +month
            });
            $('#months_' + me.id).removeClass('b_');
            me['_s'](true);
        }
        else {
            me['_p'](data.year + '-' + month + '-01');
            me['_r'](true);
            me['_u']();
        }
    },
    '_B<click>': function (e) {
        var me = this;
        $('#days_' + me.id + ' span').removeClass('bd');
        $(e.eventTarget).addClass('bd');
        var data = me.updater;
        var month = data.get('month');
        var turnMonth = e.params.toMonth != month;
        me['_p'](e.params.date);
        if (turnMonth) {
            me['_q']();
            me['_r']();
            me['_s'](true);
        }
        if (!me['_o']) {
            me['_o'] = data.get('dateValue');
        }
        data.set({
            dateValue: e.params.date
        });
        me['_u']();
    },
    '_C<change>': function (e) {
        e.stopPropagation();
        var me = this;
        if (!me['_t']) {
            me['_t'] = me.updater.get('timeValue');
        }
        me.updater.set({
            timeValue: e.time
        });
        me['_u']();
    },
    '_a<click>': function (e) {
        var me = this;
        if (e.params.enter) {
            delete me['_o'];
            delete me['_t'];
            me['_u'](true);
            return;
        }
        $('#' + me.id).trigger('cancel');
    },
    '_D<contextmenu>': function (e) {
        e.preventDefault();
    }
}, {
    parse: DateParse,
    format: DateFormat,
    dateDisabled: DateDisabled
});

});