let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Base.extend({
    tmpl: '@18.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});