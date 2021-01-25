let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@hor-inner.less');

module.exports = Magix.View.extend({
    tmpl: '@ver-inner.html',
    init(extra) {
        this.updater.set({
            info: extra.info || {},
            data: $.extend(true, {}, extra.data || {})
        })
    },
    render() {
        // 延迟显示loading
        setTimeout(() => {
            this.updater.digest();
        }, 1500)
    },
    check() {
        let info = this.updater.get('info');
        let ok = true,
            remain = {};
        remain['test_' + info.index] = info.label;

        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok,
                msg: info.label,
                remain
            })
        })
    }
});