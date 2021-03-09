/**
 * filter-sticky
 */
let Magix = require('magix');
let Moment = require('moment');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@28.html',
    render() {
        let fields = [{
            value: 1,
            text: '字段1',
            width: 100
        }, {
            value: 2,
            text: '字段2',
            width: 200
        }, {
            value: 3,
            text: '字段3',
            width: 100
        }, {
            value: 4,
            text: '字段4',
            width: 160
        }]
        this.updater.set({
            fields,
            line: 5,
            index: 0,
            selected: {
                dd: 1,
                date: Moment().format('YYYY-MM-DD')
            }
        });
        this.setValue();
    },
    setValue() {
        let { index } = this.updater.get();
        this.updater.digest({
            index: +index + 1
        });
    },
    'add<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line + 1
        });
    },
    'remove<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line - 1
        });
    },
    'changeIndex<click>'(e) {
        this.setValue();
    },
    'changeDd<change>'(e) {
        let { selected } = this.updater.get();
        this.updater.set({
            selected: Magix.mix(selected, {
                dd: e.selected
            })
        })
        this.setValue();
    },
    'changeDate<change>'(e) {
        let { selected } = this.updater.get();
        this.updater.set({
            selected: Magix.mix(selected, {
                date: e.date
            })
        })
        this.setValue();
    }
});