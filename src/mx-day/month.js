/*
    generate by magix-combine@3.7.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define('mx-day/month',["magix","$","mx-dragselect/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dragselect/index");
/*
ver:1.3.8
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("__mx-day_month_",".__mx-day_month_-day {\n  padding: 0;\n  height: 38.4px;\n  overflow: hidden;\n  cursor: default;\n  border: none;\n  border-right: solid 1px #e6e6e6;\n}\n.__mx-day_month_-no-right {\n  border-right: none;\n}\n.__mx-day_month_-active {\n  background-color: #f37b63;\n}\n.__mx-day_month_-opacity-hide {\n  opacity: 0;\n}\n.__mx-day_month_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n");
let $ = require('$');
let Weeks = {
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
    SUN: 0
};
let WeeksToKey = {
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
    0: 'SUN'
};
let GetNumOfDays = (year, month) => {
    return 32 - new Date(year, month, 32).getDate();
};
let GetDaysStr = (str, days) => {
    str = str || '';
    str = str.slice(0, days);
    for (let i = 0; i < days; i++) {
        if (str.length <= i) {
            str += '0';
        }
    }
    return str;
};
let GetDragInfo = str => {
    let info = {};
    for (let i = str.length; i--;) {
        if (str.charAt(i) === '1') {
            info[i] = 1;
        }
    }
    return info;
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<table class=\"__mx-style_index_-wp100 __mx-style_index_-hp100\"><tbody><tr mx-guid=\"g0\u001f\" mx-change=\"\u001f\u001e@{show}()\" mx-dragbegin=\"\u001f\u001e@{begin}()\" mx-dragfinish=\"\u001f\u001e@{end}()\" mx-view=\"mx-dragselect/index?selector=td%5Benable%3Dtrue%5D\">1\u001d</tr></tbody></table>","subs":[{"keys":["days","selected"],"path":"tr[mx-guid=\"g0\u001f\"]","tmpl":"<%for(var i=0;i<31;i++){%><td data-day=\"<%=i%>\" enable=\"<%=i<$$.days?true:false%>\" class=\"__mx-day_month_-day<%if($$.selected.charAt(i)==='1'){%> __mx-day_month_-active<%}%><%if(i==30){%> __mx-day_month_-no-right<%}%><%if(i>=$$.days){%> __mx-day_month_-notallowed<%}%>\"><span class=\"__mx-day_month_-opacity-hide\"><%=('0'+(i+1)).slice(-2)%></span></td><%}%>","s":"1\u001d"}],"file":"mx-day/month.html"},
    init(extra) {
        let me = this;
        me.assign(extra);
        me['@{owner.node}'] = $('#' + me.id);
    },
    assign(ops) {
        let me = this;
        let days = GetNumOfDays(ops.year, ops.month);
        me['@{days}'] = days;
        me['@{year}'] = ops.year;
        me['@{month}'] = ops.month;
        me['@{selected}'] = GetDaysStr(ops.selected, days);
        return true;
    },
    '@{update.selected}'(selected) {
        let me = this;
        if (selected) {
            let days = me['@{days}'];
            me['@{selected}'] = GetDaysStr(selected, days);
            me.render();
        }
    },
    '@{week.shortcuts}'(week, enable) {
        let me = this;
        let selected = me['@{selected}'];
        let year = me['@{year}'];
        let month = me['@{month}'];
        let days = me['@{days}'];
        let flag = Weeks[week];
        for (let i = 1; i <= days; i++) {
            let date = new Date(year, month, i);
            if (date.getDay() === flag) {
                selected = selected.slice(0, i - 1) + (enable ? '1' : '0') + selected.slice(i);
            }
        }
        me['@{selected}'] = selected;
        me.render(true);
    },
    render(ignore) {
        let me = this;
        me.updater.digest({
            days: me['@{days}'],
            selected: me['@{selected}']
        });
        me['@{drag.selected}'] = GetDragInfo(me['@{selected}']);
        me['@{owner.node}'].trigger({
            type: 'sync',
            ignoreSync: ignore,
            days: me['@{selected}']
        });
    },
    '@{get.disabled.week}'() {
        let me = this;
        let selected = me['@{selected}'];
        let year = me['@{year}'];
        let month = me['@{month}'];
        let days = me['@{days}'];
        let dis = {};
        for (let i = 1; i <= days; i++) {
            if (selected.charAt(i - 1) != '1') {
                let date = new Date(year, month, i);
                let key = WeeksToKey[date.getDay()];
                dis[key] = 1;
            }
        }
        return Magix.keys(dis);
    },
    '@{show}<change,click>'(e) {
        e.stopPropagation();
        let node = $(e.node);
        let me = this;
        let data = me.updater.get();
        let day = node.data('day');
        let dragSelected = me['@{drag.selected}'];
        let dragTemp = me['@{drag.temp}'];
        if (e.action == 'add') {
            if (dragSelected[day]) {
                node.removeClass('__mx-day_month_-active');
                delete dragSelected[day];
                if (e.mode == 'drag') {
                    dragTemp[day] = 1;
                }
            }
            else {
                node.addClass('__mx-day_month_-active');
                dragSelected[day] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[day];
                }
            }
        }
        else if (e.action == 'remove') {
            if (dragTemp[day]) {
                node.addClass('__mx-day_month_-active');
                dragSelected[day] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[day];
                }
            }
            else {
                node.removeClass('__mx-day_month_-active');
                delete dragSelected[day];
                if (e.mode == 'drag') {
                    dragTemp[day] = 1;
                }
            }
        }
        let days = me['@{days}'];
        let s = '';
        for (let i = 0; i < days; i++) {
            if (!Magix.has(dragSelected, i)) {
                s += '0';
            }
            else {
                s += '1';
            }
        }
        data.selected = me['@{selected}'] = s;
        if (e.mode == 'click') {
            me['@{owner.node}'].trigger({
                type: 'change',
                days: s
            });
        }
    },
    '@{begin}<dragbegin>'(e) {
        e.stopPropagation();
        let me = this;
        me['@{start.value.temp}'] = me['@{selected}'];
        me['@{drag.temp}'] = {};
    },
    '@{end}<dragfinish>'(e) {
        e.stopPropagation();
        let me = this;
        if (me['@{selected}'] != me['@{start.value.temp}']) {
            me['@{owner.node}'].trigger({
                type: 'change',
                days: me['@{selected}']
            });
        }
        delete me['@{drag.temp}'];
    }
});

});