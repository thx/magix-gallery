let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@8.html',
    render() {
        this.updater.digest({
            num: 8,
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