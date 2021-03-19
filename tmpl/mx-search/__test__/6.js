let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@6.html',
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
            searchKey: 'campaignId',
            searchValue: '6'
        });
    }
});