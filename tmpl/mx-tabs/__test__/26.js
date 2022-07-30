let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@26.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            selected1: 3,
            selected2: 3,
        });
    }
});