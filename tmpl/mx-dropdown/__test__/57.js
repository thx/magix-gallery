let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@57.html',
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
                text: '选项1',
                pValue: 1
            }, {
                value: 2,
                text: '选项2',
                pValue: 1
            }, {
                value: 3,
                text: '选项3',
                pValue: 2
            }, {
                value: 4,
                text: '选项4',
                pValue: 1
            }, {
                value: 5,
                text: '选项5',
                pValue: 2
            }, {
                value: 6,
                text: '选项6',
                pValue: 2
            }, {
                value: 7,
                text: '选项7',
                pValue: 2
            }, {
                value: 8,
                text: '选项8',
                pValue: 2
            }, {
                value: 9,
                text: '选项9',
                pValue: 2
            }, {
                value: 10,
                text: '选项10',
                pValue: 2
            }],
            selected1: [1, 2, 3],
            selected2: [1, 2, 3],
        });
    }
});