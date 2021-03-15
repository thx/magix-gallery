/**
 * error
 */
let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@37.less');

module.exports = Base.extend({
    tmpl: '@37.html',
    render() {
        this.updater.digest({
            num: 10,
            line: 4
        });
    },
    'add<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line + 1
        });
    }
});