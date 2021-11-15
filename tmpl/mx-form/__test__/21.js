let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');

module.exports = Base.extend({
    tmpl: '@21.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            viewId: this.id,
            rules: {
                union: {
                    mobile: [true, '请输入手机号码或者qq邮箱'],
                    email: [true, '请输入手机号码或者qq邮箱', ['qq.com']]
                }
            }
        });
    }
});