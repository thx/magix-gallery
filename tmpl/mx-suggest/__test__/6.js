let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');
let Vframe = Magix.Vframe;
module.exports = Base.extend({
    tmpl: '@6.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            selected: ''
        });
    },
    'update<show>'(e) {
        // 输入框输入关键词时触发show
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