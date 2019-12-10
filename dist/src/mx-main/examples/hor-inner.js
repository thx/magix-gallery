let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@hor-inner.less');

module.exports = Magix.View.extend({
    tmpl: '@hor-inner.html',
    init(extra) {
        // 当前步骤完成信息
        let info = extra.info;
        this.updater.set({
            info
        })
    },
    render() {
        this.updater.digest();
    },
    check() {
        let info = this.updater.get('info');

        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: true, //当前view校验结果
                msg: info.label,
                remain: {} //提交data
            })
        })
    }
});