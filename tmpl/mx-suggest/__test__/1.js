let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let Vframe = Magix.Vframe;
module.exports = Base.extend({
    tmpl: '@1.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            item: {}
        });
    },
    /**
     * 输入框输入关键词时触发show
     * 当前输入框输入的值 e.key
     */
    'update<show>'(e) {
        let id = this.id + '_test';
        let keyword = e.keyword;

        // 传入的list格式请保持和初始化格式保持一致
        // 即假设原来传入[{id:'',name:''}]
        // 此处传入格式依然为[{id:'',name:''}]
        let list = [1, 2, 3].map(text => {
            return Magix.guid(`dynamic_${keyword}_`);
        })

        Vframe.get(id).invoke('update', [list]);
    }
});