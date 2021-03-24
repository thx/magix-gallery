let Magix = require('magix');
let Base = require('__test__/example');
let Accounting = require('accounting');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    mixins: [Form, Validator],
    render() {
        this.updater.set({
            setting: {
                delay: 400,
                duration: 800,
                numberDelay: 20
            },
            num: 1842.68
        });
        this['@{set}']();
    },
    '@{set}'() {
        let { setting, num } = this.updater.get();
        this.updater.digest({
            str: Accounting.formatNumber(num, 2),
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