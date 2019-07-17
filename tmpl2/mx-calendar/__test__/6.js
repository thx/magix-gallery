let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest({
            vsenable: true,
            vs: true,
            start: Moment().subtract(1, 'days').format(Formater),
            end: Moment().add(1, 'days').format(Formater),
            keys: [
                'today',
                'yesterday',
                'preWeekMon',
                'passed12',
                'forever'
            ]
        });
    },
    'changeInfo<change>'(event) {
        let data = this.updater.get();
        // event.dates.startStr：开始日期
        // event.dates.endStr：结束日期，不限时未文案不限
        // event.vs：是否对比
        let dates = event.dates,
            vs = event.vs;
        this.updater.digest({
            vs: vs,
            start: dates.startStr,
            end: dates.endStr
        });
    },
    'changeShortkeys<click>' (event) {
        this.updater.digest({
            keys: [
                'today',
                'yesterday',
                'passed7'
            ]
        });
    }
});