let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@hor-inner.less');

module.exports = Magix.View.extend({
    tmpl: '@ver-fix.html',
    init(extra){
        this.updater.set({
            info: extra.info || {},
            data: $.extend(true, {}, extra.data || {})
        })
    },
    render() {
        this.updater.digest();
    },
    check() {
        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: true,
                msg: '固定区域出错',
                remain: {
                    fix: true
                }
            })
        })
    }
});