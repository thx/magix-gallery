let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@6.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            viewId: this.id,
            values: [1]
        });
    },
});