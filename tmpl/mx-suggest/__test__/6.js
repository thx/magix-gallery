let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
let Vframe = Magix.Vframe;
module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest();
    },
    'update<show>'(e) {
        // 当前输入框输入的值
        let keyword = e.keyword;

        let instance = Vframe.get(this.id + '_test');
        instance.invoke('showLoading');
        setTimeout(() => {
            let list = [1, 2, 3].map(text => {
                return Magix.guid('dynamic_') + keyword;
            })
            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }, 1000);
    }
});