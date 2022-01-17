let Magix = require('magix');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@index-inner3.html',
    mixins: [Form, Validator],
    init(extra) {
        this.viewOptions = extra;

        // extra.info：当前步骤完整信息
        // 可挂载任何你需要的数据
        let def = extra.info.data || {}; 
        this.updater.set({
            selected: {}
        })
    },
    render() {
        this.updater.digest({
            path: Magix.Router.parse().path,
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
                    remain: this.updater.get('selected'),
                })
            }, 2000)
        })
    }
});