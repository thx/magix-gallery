let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@progress.less');

module.exports = Base.extend({
    tmpl: '@9.html',
    render() {
        this.updater.digest({
            num: 20,
            num2: 40.3,
            num3: 60.89
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