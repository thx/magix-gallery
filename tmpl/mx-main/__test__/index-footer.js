let Magix = require('magix');
let $ = require('$');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@index-footer.html',
    mixins: [Form, Validator],
    init(extra) {
        // extra.data：默认传入footerView的数据
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
                    test: 2
                }
            })
        })
    }
});