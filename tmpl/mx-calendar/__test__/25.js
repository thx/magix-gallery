let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@25.html',
    mixins: [Form, Validator],
    render() {
        let today = this['@{date.format}'](this['@{date.day}']());
        this.updater.digest({
            start: '',
            end: '',
            vs: '',
            params: {
                startDate: today,
                endDate: today,
            }
        });
    },
    'test<click>'(e) {
        let { params } = this.updater.get();
    }
});