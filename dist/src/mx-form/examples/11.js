let Magix = require('magix');
let Base = require('examples/example');
let Form = require('@../index');
let Validator = require('@../validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@11.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            selected: ['checkbox1'],
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3']
        });
    }
});