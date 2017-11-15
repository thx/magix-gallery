/*
ver:1.3.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
*/
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@week.less');
let Weeks = '一二三四五六日';
let Core = require('./index');
let All = '111111111111111111111111';
let None = '000000000000000000000000';
let ImproveDays = (days) => {
    let start = 0;
    let end = 7;
    days = (days + '').split(',');
    days = days.slice(start, end);
    while (start < end) {
        days[start] = Core.improve(days[start]);
        start++;
    }
    return days;
};
module.exports = Magix.View.extend({
    tmpl: '@week.html',
    init(extra) {
        let me = this;
        me['@{days}'] = ImproveDays(extra.days || [None, None, None, None, None, None, None]);
        Monitor['@{setup}']();
        me['@{owner.node}'] = $('#' + me.id);
        me.on('destroy', () => {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id,
            days: Weeks
        });
        me.val(me['@{days}']);
    },
    '@{inside}'(node) {
        let me = this;
        let inView = Magix.inside(node, 'dlg_' + me.id);
        if (!inView && me['@{ref.node}']) {
            let parent = me['@{ref.node}'].parent();
            inView = Magix.inside(node, parent[0]);
        }
        return inView;
    },
    '@{sync.shortcuts}'() {
        let me = this;
        let weekdays = me['@{days}'].slice(0, 5).join('');
        let weekends = me['@{days}'].slice(-2).join('');
        let weekdaysHas = weekdays.indexOf('1') > -1;
        let weekendsHas = weekends.indexOf('1') > -1;
        let weekdaysChecked = weekdays.indexOf('0') == -1;
        let weekendsChekced = weekends.indexOf('0') == -1;
        let allDaysChecked = weekdaysChecked && weekendsChekced;
        me.updater.digest({
            allDays: allDaysChecked,
            weekdays: !weekendsHas && weekdaysChecked,
            weekends: weekendsChekced && !weekdaysHas
        });
    },
    '@{sync.ui}'() {
        let me = this;
        let ws = me['@{days}'];
        for (let i = 0, w, vf; i < ws.length; i++) {
            w = ws[i];
            vf = Magix.Vframe.get('hours_' + me.id + '_' + i);
            if (vf) {
                vf.invoke('val', [w]);
            }
        }
    },
    val(days) {
        let me = this;
        if (days) {
            me['@{days}'] = ImproveDays(days);
            me['@{sync.ui}']();
            me['@{sync.shortcuts}']();
        }
        return me['@{days}'];
    },
    '@{show}'() {
        let me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            let ref = me['@{ref.node}'];
            let dlg = $('#dlg_' + me.id);
            dlg.show();
            let offset = ref.offset();
            let left = offset.left + ref.outerWidth() - dlg.outerWidth();
            let top = offset.top + ref.outerHeight() + 10;
            dlg.offset({
                left: left,
                top: top
            });
            ref.parent().addClass('@week.less:opshow');
        }
    },
    '@{hide}'() {
        let me = this;
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            $('#dlg_' + me.id).hide();
            let ref = me['@{ref.node}'];
            if (ref) {
                ref.parent().removeClass('@week.less:opshow');
            }
        }
    },
    '@{fire.event}'() {
        let me = this;
        let days = me['@{days}'];
        me['@{owner.node}'].val(days).trigger({
            type: 'change',
            days
        });
    },
    '@{shortcuts.processor}<change>'(e) {
        let me = this;
        e.stopPropagation();
        switch (e.params.type) {
            case 0:
                me['@{days}'] = [All, All, All, All, All, All, All];
                break;
            case 1:
                me['@{days}'] = [All, All, All, All, All, None, None];
                break;
            case 2:
                me['@{days}'] = [None, None, None, None, None, All, All];
                break;
        }
        me['@{sync.shortcuts}']();
        me['@{sync.ui}']();
        me['@{fire.event}']();
    },
    '@{hour}<change>'(e) {
        e.stopPropagation();
        let me = this;
        me['@{days}'][e.params.day] = e.range;
        clearTimeout(me['@{change.delay.timer}']);
        me['@{change.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            me['@{sync.shortcuts}']();
        }), 100);
        me['@{fire.event}']();
    },
    '@{toggle}<click>'(e) {
        let day = e.params.day;
        let me = this;
        let vf = Magix.Vframe.get('hours_' + me.id + '_' + day);
        if (vf) {
            let val = vf.invoke('val');
            if (val.indexOf('0') > -1) {
                vf.invoke('val', [me['@{days}'][day] = All]);
            } else {
                vf.invoke('val', [me['@{days}'][day] = None]);
            }
            me['@{sync.shortcuts}']();
            me['@{fire.event}']();
        }
    },
    '@{copy}<click>'(e) {
        e.preventDefault();
        let me = this;
        let ref = $(e.eventTarget);
        me['@{ref.node}'] = ref;
        me['@{show}']();
        me.updater.digest({
            currentClone: e.params.day
        });
    },
    '@{closeDlg}<click>'() {
        this['@{hide}']();
    },
    '@{apply}<click>'() {
        let me = this;
        let day = me.updater.get('currentClone');
        let val = me['@{days}'][day];
        $('#dlg_' + me.id + ' input:checked').each((idx, item) => {
            me['@{days}'][item.value] = val;
        });
        me['@{hide}']();
        me['@{sync.ui}']();
        me['@{sync.shortcuts}']();
    }
});