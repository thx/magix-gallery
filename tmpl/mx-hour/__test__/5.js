let Magix = require('magix');
let Base = require('__test__/example');
let Vframe = Magix.Vframe;
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@5.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            viewId: this.id,
            groups: [{
                text: '周一至周三',
                value: 123,
            }, {
                text: '周四至周五',
                value: 45,
                disabledTimes: [0, 1, 2, 7, 8, 9, 10, 14]
            }, {
                text: '周六',
                value: 6,
            }, {
                text: '周日',
                value: 7,
                disabledTimes: [20, 21, 22, 23]
            }],
            selected: [{
                week: '1234567',
                name: '周一至周日',
                times: [2, 3, 4]
            }]
        });
    }
});