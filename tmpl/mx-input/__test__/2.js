let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@2.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            value1: '',
            value2: ''
        });
    }
});