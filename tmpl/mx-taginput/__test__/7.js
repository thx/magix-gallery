let Magix = require('magix');
let Base = require('__test__/example');
let Vframe = Magix.Vframe;

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        this.updater.digest({
            items: [{
                text: 'one',
                value: 1
            }, {
                text: 'two',
                value: 2
            }]
        });
    },
    'update<show>'(e) {
        let keyword = e.keyword;
        let instance = Vframe.get(this.id + '_taginput');
        if (!keyword) {
            // 搜索关键词为空时，直接更新list
            let list = [1, 2, 3].map(v => {
                return {
                    text: `默认选项_${v}`,
                    value: `def_${v}`,
                };
            })
            instance.invoke('update', [list]);
        } else {
            // 加loading效果，处理延时请求
            instance.invoke('showLoading');
            setTimeout(() => {
                let list = [1, 2, 3].map(v => {
                    return {
                        text: Magix.guid('dynamic_'),
                        value: Magix.guid('dynamic_'),
                    };
                })
                instance.invoke('update', [list]);
                instance.invoke('hideLoading');
            }, 1000);
        }
    },
    'change<change>'(e) {
        this.updater.digest({
            items: e.items
        })
    }
});