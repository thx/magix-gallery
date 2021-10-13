let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            today: Moment().format(Formater),
            max: Moment().add(12, 'days').format(Formater),
            min: Moment().subtract(12, 'days').format(Formater),
            selected: Moment().add(2, 'days').format(Formater)
        });
    },
    'changeDate<click>'(event) {
        this.updater.digest({
            selected: Moment().format(Formater)
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