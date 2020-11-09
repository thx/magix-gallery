let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');
Magix.applyStyle('@1.less');

module.exports = Base.extend({
    tmpl: '@10.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            viewId: this.id,
            max: 4,
            index: 1
        });
    },
    'add<click>'(e) {
        let { index, max } = this.updater.get();
        index = index + 1;
        if (index >= max) {
            index = 0;
        }
        this.updater.digest({
            index
        })
    }
});