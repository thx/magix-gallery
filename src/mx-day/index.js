/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-day/index',["magix","$","mx-dropdown/index","./month"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dropdown/index");
require("./month");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("__mx-day_index_",".__mx-day_index_-reset {\n  padding: 0;\n  height: 38.4px;\n}\n.__mx-day_index_-no-border {\n  border: none;\n}\n.__mx-day_index_-right-border {\n  border-right: solid 1px #e6e6e6;\n}\n");
let GetDays = (year, days) => {
    let ds = days[year];
    if (!ds) {
        ds = [];
        for (let i = 12; i--;) {
            ds[i] = '';
        }
        days[year] = ds;
    }
    return ds;
};
let FormatYearDays = days => {
    days = days || {};
    for (let d in days) {
        let ds = days[d];
        ds = ds || '';
        ds = (ds + '').split(',');
        if (ds.length > 12) {
            ds = ds.slice(0, 12);
        }
        for (let i = 0; i < 12; i++) {
            if (!ds[i])
                ds[i] = '';
        }
        days[d] = ds;
    }
    return days;
};
let Weeks = [{
        key: 'MON',
        day: '一'
    }, {
        key: 'TUE',
        day: '二'
    }, {
        key: 'WED',
        day: '三'
    }, {
        key: 'THU',
        day: '四'
    }, {
        key: 'FRI',
        day: '五'
    }, {
        key: 'SAT',
        day: '六'
    }, {
        key: 'SUN',
        day: '日'
    }];
module.exports = Magix.View.extend({
    tmpl: {"html":"<table class=\"__mx-style_index_-wp100\"><thead><tr><th class=\"__mx-day_index_-reset __mx-style_index_-tc\" width=\"120\">周期设置</th><th mx-guid=\"g0\u001f\" class=\"__mx-day_index_-reset __mx-style_index_-tl\" colspan=\"31\">1\u001d</th></tr><tr><th class=\"__mx-day_index_-reset __mx-style_index_-tc\"><div mx-guid=\"g1\u001f\" mx-change=\"\u001f\u001e@{change.year}()\" style=\"width:100px\" class=\"__mx-style_index_-mr5 __mx-style_index_-ml5\" mx-view=\"mx-dropdown/index?list=<%@$$.years%>&selected=<%!$eu($$.selectedYear)%>\"></div></th><th colspan=\"31\" class=\"__mx-day_index_-reset\"><table class=\"__mx-style_index_-wp100 __mx-style_index_-hp100\"><tbody><tr><%for(var i=0;i<31;i++){%><td class=\"__mx-day_index_-reset __mx-style_index_-tc __mx-day_index_-no-border<%if(i<30){%> __mx-day_index_-right-border<%}%>\"><%=('0'+(i+1)).slice(-2)%></td><%}%></tr></tbody></table></th></tr></thead><tbody mx-guid=\"g3\u001f\">4\u001d</tbody></table>","subs":[{"keys":["weeks","viewId"],"path":"th[mx-guid=\"g0\u001f\"]","tmpl":"<%for(var i=0;i<$$.weeks.length;i++){%><label class=\"__mx-style_index_-mr10 __mx-style_index_-ml10\"><input mx-change=\"\u001f\u001e@{sync.by.week}({key:'<%=$eq($$.weeks[i].key)%>'})\" id=\"<%=$$.viewId%>_<%=$$.weeks[i].key%>\" type=\"checkbox\" class=\"__mx-style_index_-checkbox\">每周<%=$$.weeks[i].day%></label><%}%>","s":"1\u001d"},{"keys":["years","selectedYear"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-dropdown/index?list=<%@$$.years%>&selected=<%!$eu($$.selectedYear)%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["viewId","selectedYear","days"],"path":"tbody[mx-guid=\"g3\u001f\"]","tmpl":"<%for(var i=0;i<12;i++){%><tr><td class=\"__mx-day_index_-reset __mx-style_index_-cp __mx-style_index_-tc\" mx-click=\"\u001f\u001e@{toggle}({m:<%!i%>})\"><%=('0'+(i+1)).slice(-2)%></td><td class=\"__mx-day_index_-reset\" colspan=\"31\" id=\"months_<%=i%>_<%=$$.viewId%>\" mx-change=\"\u001f\u001e@{take.days}({m:<%!i%>})\" mx-sync=\"\u001f\u001e@{take.days}({m:<%!i%>})\" mx-view=\"mx-day/month?year=<%!$eu($$.selectedYear)%>&month=<%!$eu(i)%>&selected=<%!$eu($$.days[i])%>\"></td></tr><%}%>","s":"4\u001d"}],"file":"mx-day/index.html"},
    init(extra) {
        let me = this;
        me.assign(extra);
        let node = $('#' + me.id);
        me['@{owner.node}'] = node;
    },
    assign(ops) {
        let me = this;
        me['@{years}'] = ops.years;
        me['@{selectedYear}'] = ops.selectedYear || ops.years[0];
        me['@{selectedDays}'] = FormatYearDays(ops.selectedDays);
        return true;
    },
    render() {
        let me = this;
        let sYear = me['@{selectedYear}'];
        let days = GetDays(sYear, me['@{selectedDays}']);
        me.updater.digest({
            viewId: me.id,
            weeks: Weeks,
            years: me['@{years}'],
            selectedYear: sYear,
            days
        });
    },
    '@{sync.weeks}'() {
        let enables = {};
        for (let i = Weeks.length; i--;) {
            enables[Weeks[i].key] = 1;
        }
        let me = this;
        let nodes = me['@{owner.node}'].find('[mx-view*="mx-day/month"]');
        nodes.each((i, n) => {
            let disabled = n.vframe.invoke('@{get.disabled.week}');
            for (let i = disabled.length; i--;) {
                delete enables[disabled[i]];
            }
        });
        for (let i = Weeks.length; i--;) {
            let key = Weeks[i].key;
            $('#' + me.id + '_' + key).prop('checked', !!enables[key]);
        }
    },
    '@{change.year}<change>'(e) {
        e.stopPropagation();
        let me = this;
        let days = GetDays(e.value, me['@{selectedDays}']);
        me.updater.digest({
            days,
            selectedYear: me['@{selectedYear}'] = e.value
        });
    },
    '@{fire.event}'() {
        let me = this;
        let days = me['@{selectedDays}'];
        me['@{owner.node}'].val(days).trigger({
            type: 'change',
            days
        });
    },
    '@{sync.by.week}<change>'(e) {
        let me = this;
        e.stopPropagation();
        let nodes = me['@{owner.node}'].find('[mx-view*="mx-day/month"]');
        nodes.each((i, n) => {
            let vf = n.vframe;
            if (vf) {
                vf.invoke('@{week.shortcuts}', [e.params.key, e.eventTarget.checked]);
            }
        });
        me['@{fire.event}']();
    },
    '@{take.days}<change,sync>'(e) {
        e.stopPropagation();
        let me = this;
        let days = GetDays(me['@{selectedYear}'], me['@{selectedDays}']);
        let m = e.params.m;
        days[m] = e.days;
        if (!e.ignoreSync) {
            clearTimeout(me['@{sync.timer}']);
            me['@{sync.timer}'] = setTimeout(() => {
                me['@{sync.weeks}']();
            }, 20);
        }
        if (e.type == 'change') {
            me['@{fire.event}']();
        }
    },
    '@{toggle}<click>'(e) {
        let me = this;
        let m = e.params.m;
        let node = $('#months_' + m + '_' + me.id);
        let days = GetDays(me['@{selectedYear}'], me['@{selectedDays}'])[m];
        days = new Array(days.length + 1).join(days.indexOf('0') > -1 ? '1' : 0);
        node.invokeView('@{update.selected}', [days]);
        me['@{fire.event}']();
    }
});

});