let Magix = require('magix');
let $ = require('$');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@index-inner.html',
    mixins: [Form, Validator],
    init(extra) {
        // extra.info：当前步骤完整信息
    },
    render() {
        this.updater.digest({
            int: ''
        });
    },
    /**
     * 子view实现该方法
     */
    check() {
        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: true,
                remain: {
                    test1: 2,
                    test2: { 1: true },
                    test3: [1, 2]
                }
            })
        })
    }
});