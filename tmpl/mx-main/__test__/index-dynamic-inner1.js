let Magix = require('magix');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');

module.exports = Magix.View.extend({
    tmpl: '@index-dynamic-inner1.html',
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
        let { selected } = this.updater.get();
        this.updater.set({
            marketScenes: data.marketScenes,
            selected: Magix.mix(selected || {}, data.selected),
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    'change<change>'(e) {
        Magix.Router.to({
            marketScene: e.selected
        })
    },

    /**
     * 子view实现该方法
     */
    check() {
        let that = this;
        return new Promise((resolve) => {
            let { selected } = that.updater.get();

            resolve({
                ok: that.isValid(),
                msg: '请先填写计划基本信息',
                remain: selected
            })
        })
    }
});