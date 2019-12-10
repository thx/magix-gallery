let Magix = require('magix');
let $ = require('$');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@index-inner2.html',
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
        let ok = this.isValid();
        let { int } = this.updater.get();

        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok,
                msg: '请按照要求填写完成信息再提交',
                remain: {
                    int
                }
            })
        })
    }
});