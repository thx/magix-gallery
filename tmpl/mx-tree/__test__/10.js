let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@10.html',
    mixins: [Form, Validator],
    render() {
        let data = {
            1: [{
                value: 1,
                pValue: '',
                text: '计划1'
            }, {
                value: 2,
                pValue: '',
                text: '计划2'
            }, {
                value: 11,
                pValue: 1,
                text: '单元1-1'
            }, {
                value: 12,
                pValue: 1,
                text: '单元1-2'
            }, {
                value: 21,
                pValue: 2,
                text: '单元2-1'
            }, {
                value: 22,
                pValue: 2,
                text: '单元2-2'
            }],
            2: [{
                value: 3,
                pValue: '',
                text: '计划3'
            }, {
                value: 4,
                pValue: '',
                text: '计划4'
            }, {
                value: 31,
                pValue: 3,
                text: '单元3-1'
            }, {
                value: 32,
                pValue: 3,
                text: '单元3-2'
            }, {
                value: 41,
                pValue: 4,
                text: '单元4-1'
            }, {
                value: 42,
                pValue: 4,
                text: '单元4-2'
            }]
        }
        this.updater.digest({
            data,
            page: 1,
            bottomValue: ''
        });
    }
});