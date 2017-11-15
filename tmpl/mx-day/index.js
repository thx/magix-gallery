/*
ver:1.3.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
let GetDays = days => {
    days = days || '';
    days = days.split(',');
    if (days.length > 12) {
        days = days.slice(0, 12);
    }
    for (let i = 0; i < 12; i++) {
        if (!days[i]) days[i] = '';
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
    tmpl: '@index.html',
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
        me['@{selectedDays}'] = GetDays(ops.selectedDays);
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id,
            weeks: Weeks,
            years: me['@{years}'],
            selectedYear: me['@{selectedYear}'],
            days: me['@{selectedDays}']
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
        let days = me['@{selectedDays}'];
        let last = days.join(',');
        days = GetDays('');
        me.updater.digest({
            days,
            selectedYear: e.value
        });
        let newValue = me['@{selectedDays}'].join(',');
        if (last != newValue) {
            me['@{fire.event}']();
        }
    },
    '@{fire.event}'() {
        let me = this;
        me['@{owner.node}'].trigger({
            type: 'change',
            days: me['@{selectedDays}']
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
        let days = me['@{selectedDays}'];
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
        let days = me['@{selectedDays}'][m];
        days = new Array(days.length + 1).join(days.indexOf('0') > -1 ? '1' : 0);
        node.invokeView('@{update.selected}', [days]);
        me['@{fire.event}']();
    }
});