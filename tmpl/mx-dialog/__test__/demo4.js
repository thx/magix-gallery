let Magix = require('magix');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@demo4.html',
    mixins: [Form, Validator],
    init(e) {
        this.viewOptions = e;

        this.updater.set({
            content: e.content,
            name: ''
        })
    },
    render() {
        let that = this;

        // 延时显示loading动画
        setTimeout(() => {
            that.updater.digest();
        }, 400)
    },
    check() {
        let that = this;
        return new Promise((resolve) => {
            resolve({
                ok: that.isValid(),
                data: {},
                msg: '请按照要求填写信息再提交'
            })
        })
    }

});
