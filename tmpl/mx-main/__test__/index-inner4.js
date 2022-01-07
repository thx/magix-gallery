let Magix = require('magix');
let $ = require('$');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@index-inner4.html',
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
            // 此处返回promise，防止有异步处理
            setTimeout(() => {
                resolve({
                    ok: this.isValid(),
                    msg: '请按照要求填写完成信息再提交',
                    remain: {
                        int: this.updater.get('int')
                    }
                })
            }, 2000)
        })
    }
});