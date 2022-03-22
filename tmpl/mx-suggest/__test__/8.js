let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let Vframe = Magix.Vframe;
module.exports = Base.extend({
    tmpl: '@8.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            item: {},
        });
    },

    /**
     * 显示下拉框时
     */
    'show<show>'(e) {
        // 输入框输入关键词时触发show
        // e.keyword 当前输入框输入的值
        let that = this;
        let instance = Vframe.get(this.id + '_test');
        instance.invoke('showLoading');

        that.delayTimer = setTimeout(that.wrapAsync(() => {
            let list = [1, 2, 3].map(v => {
                return {
                    text: '测试' + v,
                    value: v
                };
            })
            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }), 1000);
    }
});