let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest({
            vsenable: true,
            vs: true,
            start: Moment().subtract(1, 'days').format(Formater),
            end: Moment().add(1, 'days').format(Formater),
            min: Moment().subtract(12, 'days').format(Formater),
            max: Moment().add(12, 'days').format(Formater)
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
});