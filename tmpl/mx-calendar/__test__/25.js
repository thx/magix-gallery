let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@25.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            start: '',
            end: '',
            vs: '',
            params: {
                startDate: Moment().format(Formater),
                endDate: Moment().format(Formater),
            }
        });
    },
    'test<click>'(e) {
        let { params } = this.updater.get();
    }
});