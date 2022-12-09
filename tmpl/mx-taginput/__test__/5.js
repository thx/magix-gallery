let Magix = require('magix');
let Base = require('__test__/example');
let Vframe = Magix.Vframe;

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest();
    },
    /**
    * 输入关键词切换时触发
    */
    'update<show>'(e) {
        let keyword = e.keyword;
        if (!keyword) {
            return;
        }

        let instance = Vframe.get(this.id + '_taginput');
        instance.invoke('showLoading');
        setTimeout(() => {
            let list = [1, 2, 3].map(v => {
                return {
                    text: Magix.guid('dynamic_'),
                    value: Magix.guid('dynamic_')
                };
            })
            instance.invoke('update', [list]);
            instance.invoke('hideLoading');
        }, 1500);
    },
    'get<click>'() {
        let node = document.getElementById(this.id + '_taginput');
        this.updater.digest({
            selected: node.value,
        })
    },
    /**
     * 切换选中项时触发
     */
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});