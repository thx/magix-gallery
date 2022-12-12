let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.set({
            setting: {
                delay: 400,
                duration: 400,
                numberDelay: 20
            },
            num: 1842.68
        });
        this['@{set}']();
    },
    '@{set}'() {
        let { setting, num } = this.updater.get();
        let str = this['@{num.format}'](num);
        this.updater.digest({
            str,
            ...setting
        })
    },
    'add<click>'(e) {
        let { num } = this.updater.get();
        this.updater.set({
            num: num + 1423.08
        });
        this['@{set}']();
    },
    'sub<click>'(e) {
        let { num } = this.updater.get();
        this.updater.set({
            num: num - 800.23
        });
        this['@{set}']();
    }
});