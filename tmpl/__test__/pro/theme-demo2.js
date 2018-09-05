let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');
let Moment = require('moment');
let Formater = 'YYYY-MM-DD';
Magix.applyStyle('@theme-demo2.less');

module.exports = Base.extend({
    tmpl: '@theme-demo2.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            viewId: this.id,
            checkboxes: ['checkbox1', 'checkbox2'],
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