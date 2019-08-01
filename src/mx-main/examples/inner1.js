let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@inner1.html',
    init(extra){
        this.updater.set({
            info: extra.info || {},
            data: $.extend(true, {}, extra.data || {})
        })
    },
    render() {
        this.updater.digest();
    },
    /**
     * 子view实现该方法
     */
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