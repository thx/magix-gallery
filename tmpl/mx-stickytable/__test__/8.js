/**
 * sticky
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        this.updater.digest({
            num: 6,
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