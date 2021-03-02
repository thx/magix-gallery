/**
 * drag
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@27.html',
    render() {
        let fields = [{
            value: 1,
            text: '字段1',
            width: 100,
            minWidth: 80,
            maxWidth: 200
        }, {
            value: 2,
            text: '字段2',
            width: 200,
            minWidth: 220,
            maxWidth: 300
        }, {
            value: 3,
            text: '字段3',
            width: 100
        }, {
            value: 4,
            text: '字段4',
            width: 160,
            minWidth: 40,
            maxWidth: 700
        }]
        this.updater.digest({
            fields,
            line: 4,
            index: 1
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
        let { index } = this.updater.get();
        this.updater.digest({
            index: +index + 1
        });
    }
});