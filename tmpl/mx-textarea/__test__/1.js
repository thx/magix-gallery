let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Base.extend({
    tmpl: '@1.html',
    mixins: [Form, Validator],
    render() {
        let rules = "{\"trim\":\"true\",\"blength\":[2,1400],\"pattern\":[\"^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\",\"只支持汉字、字母、数字、下划线\"],\"required\":[\"true\",\"请输入正文\"]}";
        let rulesFn = JSON.parse(rules);
        this.updater.digest({
            rulesFn,
            value1: '',
            value2: '',
        });
    }
});