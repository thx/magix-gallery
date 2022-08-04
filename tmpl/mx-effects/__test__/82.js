let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@82.html',
    render() {
        this.updater.digest({
            num: 10,
        });
    },
    'reload<reload>'(e) {
        let { num } = this.updater.get();
        this.updater.digest({
            num: num + 30
        })
    }
});