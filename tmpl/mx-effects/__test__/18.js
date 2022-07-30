let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@progress.less');

module.exports = Base.extend({
    tmpl: '@18.html',
    render() {
        this.updater.digest({
            num: 20,
        });
    },
    'add<click>'(e) {
        let { num } = this.updater.get();
        this.updater.digest({
            num: num + 10,
        });
    },
    'remove<click>'(e) {
        let { num } = this.updater.get();
        this.updater.digest({
            num: num - 10,
        });
    }
});