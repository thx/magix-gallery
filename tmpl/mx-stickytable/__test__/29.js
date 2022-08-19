/**
 * filter-sticky
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@29.html',
    render() {
        let that = this;

        let fields = [];
        for (let i = 0; i < 6; i++) {
            fields.push({
                value: i,
                width: 220,
                minWidth: 100,
                maxWidth: 400
            })
        }
        that.updater.set({
            fields,
            line: 5,
            index: 0,
            selected: {
                dd: 1,
                date: that['@{date.format}'](that['@{date.day}']())
            }
        });
        that.setValue();
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