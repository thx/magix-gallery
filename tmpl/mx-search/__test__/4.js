let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
module.exports = Base.extend({
    tmpl: '@4.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            list: [{
                text: '计划',
                value: 'campaignId'
            }, {
                text: '单元',
                value: 'adgroupId'
            }],
            searchValue1: '',
            searchValue2: '',
            searchValue3: '',
            searchValue4: '',
        });
    },
    'change<search>'(e) {
        e.preventDefault();
        // e.searchKey 搜索对应的key值
        // e.searchValue input文本框输入的对应的内容
        this.updater.digest({
            searchValue: e.searchValue
        })
    }
});