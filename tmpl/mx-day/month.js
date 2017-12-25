/*
ver:1.3.10
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle('@month.less');
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
    tmpl: '@month.html',
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
                node.removeClass('@month.less:active');
                delete dragSelected[day];
                if (e.mode == 'drag') {
                    dragTemp[day] = 1;
                }
            } else {
                node.addClass('@month.less:active');
                dragSelected[day] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[day];
                }
            }
        } else if (e.action == 'remove') {
            if (dragTemp[day]) {
                node.addClass('@month.less:active');
                dragSelected[day] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[day];
                }
            } else {
                node.removeClass('@month.less:active');
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
            } else {
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