let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');
let Vframe = Magix.Vframe;
module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest();
    },
    'update<show>'(e) {
        let id = this.id + '_test';

        // 当前输入框输入的值
        let keyword = e.keyword;

        // 传入的list格式请保持和初始化格式保持一致
        // 即假设原来传入[{id:'',name:''}]
        // 此处传入格式依然为[{id:'',name:''}]
        let list = [1, 2, 3].map(text => {
            return Magix.guid('dynamic_');
        })

        Vframe.get(id).invoke('update', [list]);
    }
});