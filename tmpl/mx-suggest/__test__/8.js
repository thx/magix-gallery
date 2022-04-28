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
     * 输入框输入关键词时触发show
     * 当前输入框输入的值 e.key
     */
    'show<show>'(e) {
        let that = this;
        let keyword = e.keyword;
        if (!keyword) {
            return;
        }


        let instance = Vframe.get(this.id + '_test');
        instance.invoke('showLoading');
        setTimeout(that.wrapAsync(() => {
            let list = [1, 2, 3].map(v => {
                return {
                    text: `测试_${v}`,
                    value: v
                };
            })

            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }), 1000);
    }
});