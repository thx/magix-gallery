let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        let start = this['@{date.format}'](this['@{date.day}'](-1)),
            end = this['@{date.format}'](this['@{date.day}'](1)),
            min = this['@{date.format}'](this['@{date.day}'](-12)),
            max = this['@{date.format}'](this['@{date.day}'](12));

        this.updater.digest({
            vsenable: true,
            vs: true,
            start,
            end,
            min,
            max,
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