let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@7.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            state: 1,
            valueMap: {
                true: 1,
                false: 0
            }
        });
    }
});