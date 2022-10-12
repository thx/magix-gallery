let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@2.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            content1: 2000,
            content2: 2001,
            content3: 2002,
            rules: {
                required: true,
                min: [200, '不小于200'],
            }
        });
    }
});