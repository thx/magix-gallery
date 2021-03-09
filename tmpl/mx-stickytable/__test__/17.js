/**
 * left-right-sticky
 */
let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@17.html',
    render() {
        this.updater.digest({
            num: 4,
            line: 10
        });
    },
    'add<click>'(e) {
        let { line } = this.updater.get();
        this.updater.digest({
            line: +line + 1
        });
    }
});