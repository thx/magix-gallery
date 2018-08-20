let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');
let $ = require('$');
let Moment = require('moment');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@17.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            viewId: this.id,
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],
            radioes: ['radio1', 'radio2', 'radio3'],
            selected: {
                switch: true,
                radio: 'radio2',
                checkboxes: ['checkbox1'],
                vsenable: true,
                vs: true,
                start: Moment().subtract(1, 'days').format(Formater),
                end: Moment().add(1, 'days').format(Formater)
            }
        });
    }
});