let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Base.extend({
    tmpl: '@12.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            selected: 'radio2',
            radioes: ['radio1', 'radio2', 'radio3']
        });
    }
});