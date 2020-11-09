let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let Vframe = Magix.Vframe;
module.exports = Base.extend({
    tmpl: '@7.html',
    mixins: [Form, Validator],
    render() {
        let item = {
            text: '测试1',
            value: 1
        }
        this.updater.digest({
            item,
            selected: item.value
        });
    },
    'update<show>'(e) {
        // 当前输入框输入的值
        let keyword = e.keyword;

        let instance = Vframe.get(this.id + '_test');
        instance.invoke('showLoading');
        setTimeout(() => {
            let list = [1, 2, 3].map(v => {
                return {
                    text: '测试' + v,
                    value: v
                };
            })
            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }, 1000);
    },
    'check<click>'(e){
        let valid = this.isValid();
        this.updater.digest({
            msg: valid ? '<span class="color-green">校验通过</span>' : '<span class="color-red">校验失败</span>'
        })
    }
});