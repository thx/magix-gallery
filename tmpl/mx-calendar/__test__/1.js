let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let today = this['@{date.format}'](this['@{date.day}']()),
            max = this['@{date.format}'](this['@{date.day}'](12)),
            min = this['@{date.format}'](this['@{date.day}'](-12)),
            selected = this['@{date.format}'](this['@{date.day}'](2));
        this.updater.digest({
            today,
            max,
            min,
            selected,
        });
    },
    'changeDate<click>'(event) {
        let { today } = this.updater.get();
        this.updater.digest({
            selected: today
        })
    },
    'select<change>'(event) {
        // event.date 当前选择日期
        // event.time 时分秒
        this.updater.digest({
            selected: event.date
        })
    }
});