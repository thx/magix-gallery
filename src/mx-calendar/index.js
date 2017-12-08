/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-calendar/index',["magix","$","mx-time/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-time/index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
Magix.applyStyle("__mx-calendar_index_",".__mx-calendar_index_-wrapper {\n  background-color: #fff;\n  display: inline-block;\n  border: 1px solid #e6e6e6;\n  padding: 0;\n  border-radius: 4px;\n  overflow-y: hidden;\n  z-index: 10;\n  color: #333;\n  text-align: center;\n  position: relative;\n}\n.__mx-calendar_index_-gray {\n  color: #777;\n}\n.__mx-calendar_index_-header {\n  height: 32px;\n  line-height: 32px;\n  padding: 1px;\n}\n/*\n    comment;\n*/\n.__mx-calendar_index_-minus,\n.__mx-calendar_index_-plus {\n  color: #CCC;\n  display: inline-block;\n  padding: 6px 7px;\n  line-height: 100%;\n  vertical-align: top;\n  cursor: pointer;\n}\n.__mx-calendar_index_-minus:hover,\n.__mx-calendar_index_-minus:focus,\n.__mx-calendar_index_-plus:hover,\n.__mx-calendar_index_-plus:focus {\n  color: #f96447;\n}\n.__mx-calendar_index_-title {\n  display: inline-block;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 4px;\n  line-height: 1;\n}\n.__mx-calendar_index_-title:hover {\n  background-color: #EEE;\n}\n.__mx-calendar_index_-body {\n  width: 245px;\n}\n.__mx-calendar_index_-weeks {\n  color: #333;\n  background-color: #FAFAFA;\n  padding: 0 10px;\n}\n.__mx-calendar_index_-days {\n  padding: 10px;\n}\n.__mx-calendar_index_-y-panel,\n.__mx-calendar_index_-m-panel {\n  padding: 1px 0;\n  position: absolute;\n  top: -100%;\n  left: 0;\n  right: 0;\n  -webkit-transition: top 0.15s;\n  transition: top 0.15s;\n  background-color: #fff;\n}\n.__mx-calendar_index_-ym-show {\n  top: 0;\n}\n.__mx-calendar_index_-ym {\n  height: 59px;\n  margin: 2px;\n  float: left;\n  width: 77px;\n  cursor: pointer;\n  line-height: 59px;\n  border-radius: 4px;\n  font-size: 16px;\n}\n.__mx-calendar_index_-ym:hover,\n.__mx-calendar_index_-day:hover {\n  background: #f0f0f0;\n}\n.__mx-calendar_index_-week,\n.__mx-calendar_index_-day {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  margin: 3px 2px;\n  float: left;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.__mx-calendar_index_-selected,\n.__mx-calendar_index_-selected:hover {\n  color: #fff;\n  background-color: #f96447;\n}\n.__mx-calendar_index_-notallowed,\n.__mx-calendar_index_-notallowed:hover {\n  color: #eee;\n  cursor: not-allowed;\n  background: #fff;\n}\n.__mx-calendar_index_-time {\n  padding: 5px;\n  border-top: 1px solid #e6e6e6;\n}\n.__mx-calendar_index_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin: 10px;\n  padding: 10px 0 0 0;\n  text-align: left;\n}\n.__mx-calendar_index_-rotate180 {\n  -webkit-transform: scaleX(-1);\n          transform: scaleX(-1);\n}\n");
let $ = require('$');
let GetNumOfDays = (year, month) => {
    return 32 - new Date(year, month - 1, 32).getDate();
};
let Days = ['日', '一', '二', '三', '四', '五', '六'];
let PadZero = (str) => {
    return ('0' + str).slice(-2);
};
let GetWeekText = (weekStart) => {
    let a = [];
    for (let i = 0; i < 7; i++) {
        a[i] = Days[(i + weekStart) % 7];
    }
    return a;
};
let DateDisabled = (current, start, end) => {
    let ts = current.getTime(), flag;
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
let MonthDisabled = (year, month, start, end) => {
    let flag, current = parseInt(year + PadZero(month), 10);
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
let YearDisabled = (year, start, end) => {
    let flag;
    if (start) {
        flag = year < start.getFullYear();
    }
    if (!flag && end) {
        flag = year > end.getFullYear();
    }
    return flag;
};
let DateReg = {
    y: {
        reg: /y+/gi,
        fn(m, d) {
            return String(d.getFullYear()).slice(-m.length);
        }
    },
    M: {
        reg: /M+/g,
        fn(m, d, t) {
            t = d.getMonth() + 1;
            return PadZero(t).slice(-m.length);
        }
    },
    d: {
        reg: /d+/gi,
        fn(m, d, t) {
            t = d.getDate();
            return PadZero(t).slice(-m.length);
        }
    },
    h: {
        reg: /h+/gi,
        fn(m, d, t) {
            t = d.getHours();
            return PadZero(t).slice(-m.length);
        }
    },
    m: {
        reg: /m+/g,
        fn(m, d, t) {
            t = d.getMinutes();
            return PadZero(t).slice(-m.length);
        }
    },
    s: {
        reg: /s+/g,
        fn(m, d, t) {
            t = d.getSeconds();
            return PadZero(t).slice(-m.length);
        }
    },
    S: {
        reg: /S+/g,
        fn(m, d, t) {
            t = d.getMilliseconds();
            return String(t).substring(0, m.length);
        }
    }
};
let DateParse = (date) => {
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
let DateFormat = (date, format) => {
    date = DateParse(date);
    format = format || 'YYYY-MM-dd';
    let key;
    let replacement = (match) => {
        return DateReg[key].fn(match, date);
    };
    for (key in DateReg) {
        format = format.replace(DateReg[key].reg, replacement);
    }
    return format;
};
let ParseEnablePanels = type => {
    if (!type) {
        type = 'all';
    }
    let enables = {
        year: true,
        month: true,
        day: true
    };
    if (type != 'all') {
        for (let p in enables) {
            if (type.indexOf(p) === -1) {
                delete enables[p];
            }
        }
    }
    return enables;
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"__mx-calendar_index_-wrapper __mx-style_index_-unselectable\" mx-contextmenu=\"\u001f\u001e@{prevent}()\">1\u001d</div>","subs":[{"keys":["types"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.types.day){%><div mx-guid=\"g1\u001f\" id=\"days_<%=$$.id%>\" class=\"__mx-style_index_-clearfix\">2\u001d</div><%}%> <%if($$.types.month){%><div id=\"months_<%=$$.id%>\" class=\"__mx-style_index_-clearfix<%if($$.types.day){%> __mx-calendar_index_-m-panel<%}%>\"><div class=\"__mx-calendar_index_-header\"><span class=\"__mx-style_index_-mc-iconfont __mx-calendar_index_-minus __mx-style_index_-fl\" mx-click=\"\u001f\u001e@{changeYear}()\">&#xe61e;</span><h4 mx-guid=\"g7\u001f\" mx-click=\"\u001f\u001e@{showYears}()\" class=\"__mx-calendar_index_-title\">8\u001d</h4><span class=\"__mx-style_index_-mc-iconfont __mx-calendar_index_-plus __mx-style_index_-fr __mx-calendar_index_-rotate180\" mx-click=\"\u001f\u001e@{changeYear}({next:true})\">&#xe61e;</span></div><div mx-guid=\"g8\u001f\" class=\"__mx-calendar_index_-body __mx-style_index_-clearfix\">9\u001d</div></div><%}%> <%if($$.types.year){%><div id=\"years_<%=$$.id%>\" class=\"__mx-style_index_-clearfix<%if($$.types.day||$$.types.month){%> __mx-calendar_index_-y-panel<%}%>\"><div class=\"__mx-calendar_index_-header\"><span class=\"__mx-style_index_-mc-iconfont __mx-calendar_index_-minus __mx-style_index_-fl\" mx-click=\"\u001f\u001e@{changeYear}({range:true})\">&#xe61e;</span><h4 mx-guid=\"ga\u001f\" class=\"__mx-calendar_index_-title\">11\u001d</h4><span class=\"__mx-style_index_-mc-iconfont __mx-calendar_index_-plus __mx-style_index_-fr __mx-calendar_index_-rotate180\" mx-click=\"\u001f\u001e@{changeYear}({range:true,next:true})\">&#xe61e;</span></div><div mx-guid=\"gb\u001f\" class=\"__mx-calendar_index_-body __mx-style_index_-clearfix\">12\u001d</div></div><%}%>","s":"1\u001d"},{"keys":["timeType","hasBtn"],"path":"div[mx-guid=\"g1\u001f\"]","pKeys":["types"],"tmpl":"<div class=\"__mx-calendar_index_-header\"><span class=\"__mx-style_index_-mc-iconfont __mx-calendar_index_-minus __mx-style_index_-fl\" mx-click=\"\u001f\u001e@{changeMonth}()\">&#xe61e;</span><h4 mx-guid=\"g2\u001f\" mx-click=\"\u001f\u001e<%if($$.types.month){%>@{showMonths}<%}else{%>@{showYears}<%}%>()\" class=\"__mx-calendar_index_-title\">3\u001d</h4><span class=\"__mx-style_index_-mc-iconfont __mx-calendar_index_-plus __mx-calendar_index_-rotate180 __mx-style_index_-fr\" mx-click=\"\u001f\u001e@{changeMonth}({next:true})\">&#xe61e;</span></div><div class=\"__mx-calendar_index_-body\"><div mx-guid=\"g3\u001f\" class=\"__mx-calendar_index_-weeks __mx-style_index_-clearfix\">4\u001d</div><div mx-guid=\"g4\u001f\" class=\"__mx-calendar_index_-days __mx-style_index_-clearfix\">5\u001d</div></div><%if($$.timeType){%><div mx-guid=\"g5\u001f\" class=\"__mx-style_index_-clearfix __mx-calendar_index_-time\" mx-change=\"\u001f\u001e@{setTime}()\" mx-view=\"mx-time/index?time=<%!$eu($$.timeValue)%>&type=<%!$eu($$.timeType)%>\"></div><%if($$.hasBtn){%><div class=\"__mx-calendar_index_-footer\"><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-btn-brand\" mx-click=\"\u001f\u001e@{hide}({enter:true})\">确定</button><button type=\"button\" class=\"__mx-style_index_-btn __mx-style_index_-ml5\" mx-click=\"\u001f\u001e@{hide}()\">取消</button></div><%}%> <%}%>","s":"2\u001d"},{"keys":["types","year","month"],"path":"h4[mx-guid=\"g2\u001f\"]","tmpl":"<%=$$.year%>-<%=('0'+$$.month).slice(-2)%>","s":"3\u001d","attr":"mx-click=\"\u001f\u001e<%if($$.types.month){%>@{showMonths}<%}else{%>@{showYears}<%}%>()\"","attrs":[{"n":"mx-click"}],"mask":"211"},{"keys":["weekText"],"path":"div[mx-guid=\"g3\u001f\"]","tmpl":"<%for(var i=0;i<$$.weekText.length;i++){%><span class=\"__mx-calendar_index_-week\"><%=$$.weekText[i]%></span><%}%>","s":"4\u001d"},{"keys":["days"],"path":"div[mx-guid=\"g4\u001f\"]","tmpl":"<%for(var i=0;i<$$.days.length;i++){%> <%var tds=$$.days[i]%> <%for(var j=0;j<tds.length;j++){%><span class=\"__mx-calendar_index_-day<%if(tds[j].otherMonth){%> __mx-calendar_index_-gray<%}%><%if(tds[j].disabled){%> __mx-calendar_index_-notallowed<%}%><%if(tds[j].selected){%> __mx-calendar_index_-selected<%}%>\" <%if(!tds[j].disabled){%> mx-click=\"\u001f\u001e@{choose}({toMonth:<%=tds[j].month%>,date:'<%=$eq(tds[j].full)%>'})\" <%}%> title=\"<%=tds[j].full%>\"><%=tds[j].day%></span><%}%> <%}%>","s":"5\u001d"},{"keys":["timeValue"],"path":"div[mx-guid=\"g5\u001f\"]","pKeys":["types","timeType","hasBtn"],"attr":"mx-view=\"mx-time/index?time=<%!$eu($$.timeValue)%>&type=<%!$eu($$.timeType)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["year"],"path":"h4[mx-guid=\"g7\u001f\"]","tmpl":"<%=$$.year%>","s":"8\u001d"},{"keys":["months"],"path":"div[mx-guid=\"g8\u001f\"]","pKeys":["types"],"tmpl":"<%for(var i=0,m;i<$$.months.length;i++){%> <%m=$$.months[i]%><span class=\"__mx-calendar_index_-ym<%if(m.disabled){%> __mx-calendar_index_-notallowed<%}%><%if(m.selected){%> __mx-calendar_index_-selected<%}%>\" <%if(!m.disabled){%> mx-click=\"\u001f\u001e@{pickMonth}({month:'<%=$eq(m.month)%>'})\" <%}%>><%=m.month%></span><%}%>","s":"9\u001d"},{"keys":["startYear","endYear"],"path":"h4[mx-guid=\"ga\u001f\"]","tmpl":"<%=$$.startYear%>-<%=$$.endYear%>","s":"11\u001d"},{"keys":["years"],"path":"div[mx-guid=\"gb\u001f\"]","pKeys":["types"],"tmpl":"<%for(var i=0,y;i<$$.years.length;i++){%> <%y=$$.years[i]%><span class=\"__mx-calendar_index_-ym<%if(y.selected){%> __mx-calendar_index_-selected<%}%><%if(y.disabled){%> __mx-calendar_index_-notallowed<%}%><%if(!i||i==$$.years.length-1){%> __mx-calendar_index_-gray<%}%>\" <%if(!y.disabled){%> mx-click=\"\u001f\u001e@{pickYear}({year:'<%=$eq(y.year)%>'})\" <%}%>><%=y.year%></span><%}%>","s":"12\u001d"}],"file":"mx-calendar/index.html"},
    init(extra) {
        let me = this;
        me['@{extra}'] = extra;
    },
    render() {
        let me = this;
        me.update(me['@{extra}']);
    },
    '@{toDefaultPanel}'() {
        let me = this;
        $('#years_' + me.id).removeClass('__mx-calendar_index_-ym-show');
        $('#months_' + me.id).removeClass('__mx-calendar_index_-ym-show');
        let updater = me.updater;
        let data = updater.get();
        if (data.timeType) {
            let digest = false;
            if (me['@{date.value.bak}']) {
                me['@{update.selected}'](me['@{date.value.bak}']);
                me['@{update.years}']();
                me['@{update.months}']();
                me['@{update.days}']();
                digest = true;
                delete me['@{date.value.bak}'];
            }
            if (me['@{time.value.bak}']) {
                updater.set({
                    timeValue: me['@{time.value.bak}']
                });
                digest = true;
                delete me['@{time.value.bak}'];
            }
            if (digest) {
                updater.digest();
            }
        }
    },
    update(ops) {
        ops = ops || {};
        if (!ops.selected) {
            ops.selected = new Date();
        }
        let types = ParseEnablePanels(ops.dateType);
        let weekStart = ops.weekStart | 0;
        let selected = DateParse(ops.selected);
        let me = this;
        let data = me.updater;
        let max = DateParse(ops.max);
        let min = DateParse(ops.min);
        let timeType = ops.timeType;
        let timeValue = DateFormat(selected, 'hh:mm:ss');
        data.set({
            types,
            timeType,
            timeValue,
            hasBtn: ops.hasBtn,
            dateValue: DateFormat(selected, ops.formatter),
            max,
            min,
            id: me.id,
            weekStart,
            weekText: GetWeekText(weekStart)
        });
        me['@{update.selected}'](selected);
        me['@{update.years}']();
        me['@{update.months}']();
        me['@{update.days}'](true);
    },
    '@{update.selected}'(selected) {
        let me = this, data = me.updater;
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
    '@{update.years}'(render) {
        let me = this;
        let data = me.updater;
        let json = data.get();
        let year = json.year;
        let min = json.min;
        let max = json.max;
        let startYear = year - year % 10 - 1;
        let endYear = startYear + 11;
        let rows = [];
        for (let i = startYear; i <= endYear; i++) {
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
    '@{update.months}'(render) {
        let rows = [], data = this.updater, json = data.get(), year = json.year, min = json.min, max = json.max;
        for (let i = 1; i <= 12; i++) {
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
    '@{update.days}'(render) {
        let me = this;
        let trs = [];
        let data = me.updater;
        let weekStart = data.get('weekStart');
        let year = data.get('year');
        let month = data.get('month');
        let startOffset = (7 - weekStart + new Date(year, month - 1, 1).getDay()) % 7;
        let tds = [];
        let days = GetNumOfDays(year, month), i;
        let preDays = GetNumOfDays(year, month - 1);
        let max = data.get('max');
        let min = data.get('min');
        let selected = data.get('selected');
        let day, date, formatDay;
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
        let fillStart = tds.length; //补充
        let fillEnd = 14; //2周
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
    '@{fire.event}'(fromBtn) {
        let me = this;
        let data = me.updater.get();
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
    '@{changeMonth}<click>'(e) {
        let me = this, data = me.updater, month = data.get('month'), year = data.get('year');
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
    '@{changeYear}<click>'(e) {
        let me = this;
        let params = e.params;
        let data = me.updater, year = data.get('year');
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
    '@{showMonths}<click>'() {
        let me = this;
        $('#months_' + me.id).addClass('__mx-calendar_index_-ym-show');
        me['@{update.months}'](true);
    },
    '@{showYears}<click>'() {
        let me = this;
        $('#years_' + me.id).addClass('__mx-calendar_index_-ym-show');
        me['@{update.years}'](true);
    },
    '@{pickYear}<click>'(e) {
        let year = e.params.year;
        let me = this;
        let updater = me.updater;
        let data = updater.get();
        let types = data.types;
        if (types.day || types.month) {
            me.updater.set({
                year: +year
            });
            $('#years_' + me.id).removeClass('__mx-calendar_index_-ym-show');
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
    '@{pickMonth}<click>'(e) {
        let month = e.params.month;
        let me = this;
        let updater = me.updater;
        let data = updater.get();
        if (data.types.day) {
            updater.set({
                month: +month
            });
            $('#months_' + me.id).removeClass('__mx-calendar_index_-ym-show');
            me['@{update.days}'](true);
        }
        else {
            me['@{update.selected}'](data.year + '-' + month + '-01');
            me['@{update.months}'](true);
            me['@{fire.event}']();
        }
    },
    '@{choose}<click>'(e) {
        let me = this;
        $('#days_' + me.id + ' span').removeClass('__mx-calendar_index_-selected');
        $(e.eventTarget).addClass('__mx-calendar_index_-selected');
        let data = me.updater;
        let month = data.get('month');
        let turnMonth = e.params.toMonth != month;
        me['@{update.selected}'](e.params.date);
        if (turnMonth) {
            me['@{update.years}']();
            me['@{update.months}']();
            me['@{update.days}'](true);
        }
        if (!me['@{date.value.bak}']) {
            me['@{date.value.bak}'] = data.get('dateValue');
        }
        data.set({
            dateValue: e.params.date
        });
        me['@{fire.event}']();
    },
    '@{setTime}<change>'(e) {
        e.stopPropagation();
        let me = this;
        if (!me['@{time.value.bak}']) {
            me['@{time.value.bak}'] = me.updater.get('timeValue');
        }
        me.updater.set({
            timeValue: e.time
        });
        me['@{fire.event}']();
    },
    '@{hide}<click>'(e) {
        let me = this;
        if (e.params.enter) {
            delete me['@{date.value.bak}'];
            delete me['@{time.value.bak}'];
            me['@{fire.event}'](true);
            return;
        }
        $('#' + me.id).trigger('cancel');
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
}, {
    parse: DateParse,
    format: DateFormat,
    dateDisabled: DateDisabled
});

});