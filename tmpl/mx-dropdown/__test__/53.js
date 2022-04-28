let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@53.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            parents: [{
                value: 1,
                text: '第一组'
            }, {
                value: 2,
                text: '第二组'
            }],
            list: [{
                value: 1,
                text: '测试选项_1',
                pValue: 1
            }, {
                value: 2,
                text: '测试选项_2',
                pValue: 1
            }, {
                value: 3,
                text: '测试选项_3',
                pValue: 2
            }, {
                value: 4,
                text: '测试选项_4',
                pValue: 1
            }, {
                value: 5,
                text: '测试选项_5',
                pValue: 2
            }, {
                value: 6,
                text: '测试选项_6',
                pValue: 2
            }, {
                value: 7,
                text: '测试选项_7',
                pValue: 2
            }, {
                value: 8,
                text: '测试选项_8',
                pValue: 2
            }, {
                value: 9,
                text: '测试选项_9',
                pValue: 2
            }, {
                value: 10,
                text: '测试选项_10',
                pValue: 2
            }],
            selected1: [1, 2, 3],
            selected2: [1, 2, 3],
        });
    }
});