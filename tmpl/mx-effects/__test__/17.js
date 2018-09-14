let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@17.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],
            selected: {
                checkboxes: ['checkbox1']
            }           
        });
    }
});