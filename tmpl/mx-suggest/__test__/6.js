let Magix = require('magix');
let Base = require('__test__/example');
let Vframe = Magix.Vframe;

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest({
            selected: '',
            item: {
                text: '测试4',
                value: 4
            }
        });
    },
    /**
     * 输入框输入关键词时触发show
     * 当前输入框输入的值 e.key
     */
    'show<show>'(e) {
        let that = this;
        let keyword = e.keyword;
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