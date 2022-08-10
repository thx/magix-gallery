let Magix = require('magix');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@index-dynamic-inner2.html',
    mixins: [Form, Validator],
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        // set影响当前view的参数，影响参数有改动才重新render
        // 深拷贝防止数据覆盖
        let data = JSON.parse(JSON.stringify(extra.info.data));
        this.updater.set(data);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        let { path, params } = Magix.Router.parse();
        this.updater.digest({
            path: path + (params.comp ? `?comp=${params.comp}` : ''),
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
                remain: {}
            })
        })
    }
});