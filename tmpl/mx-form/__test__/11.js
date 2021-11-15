let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Base.extend({
    tmpl: '@11.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            selected1: ['checkbox1'],
            selected2: ['checkbox1', 'checkbox2'],
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3', 'checkbox4']
        });
    }
});