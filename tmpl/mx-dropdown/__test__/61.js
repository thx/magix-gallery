let Magix = require('magix');
let Base = require('__test__/example');
let Loading = require('@../../mx-loading/mask');

module.exports = Base.extend({
    tmpl: '@61.html',
    mixins: [Loading],
    init() {
        this.updater.set({
            index: 1,
        })
    },
    async render() {
        let list = await this.getData();
        this.updater.digest({
            list,
            item: list[0] || {},
        });
    },
    getData() {
        return new Promise(resolve => {
            let { index, keyword } = this.updater.get();
            if (index % 3 == 0) {
                resolve([]);
            } else {
                let min = index * 10,
                    max = (index + 1) * 10;
                let list = [];
                for (let i = min; i < max; i++) {
                    list.push({
                        text: `选项${keyword || ''}${i}`,
                        value: i,
                    })
                }
                resolve(list);
            }
        })
    },
    'change<change>'(event) {
        // event.item
        this.updater.digest({
            item: event.item,
        })
    },
    async 'search<search>'(event) {
        // event.keyword 当前搜索关键词
        // event.sizzleId 当前下拉列表id，方便加loading
        let that = this;
        let keyword = event.keyword;
        let { index } = this.updater.get();
        this.updater.set({
            keyword,
            index: +index + 1,
        })

        that.showLoading({
            sizzle: `#${event.sizzleId}`,
        });
        let list = await this.getData();
        setTimeout(() => {
            that.hideLoading();
            // 只更选可选列表，不更新选中项
            this.updater.digest({
                list,
            });
        }, 2000);
    }
});