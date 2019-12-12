let Magix = require('magix');
let Base = require('__test__/example');
let StoreState = require('@../../mx-checkbox/storestate');
let Linkage = require('@../../mx-checkbox/linkage');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@15.html',
    mixins: [StoreState, Linkage],
    render() {
        let that = this;
        let allList = [];
        for (var i = 0; i < 20; i++) {
            allList.push({
                id: i,
                content1: i + '_列1',
                content2: i + '_列2',
                content3: i + '_列3'
            })
        }
        let size = 5,
            total = allList.length,
            page = 1;
        let list = allList.slice(0, 5);
        that.updater.digest({
            allList,
            list,
            size,
            page,
            total,
            selected: []
        });
    },
    'changePager<change>' (e) {
        // e.page 当前第几页
        // e.size 每页多少条
        let that = this;
        let page = +e.page;
        let allList = that.updater.get('allList');
        let list = allList.slice((page - 1) * 5, page * 5);
        that.updater.digest({
            list,
            page
        })
    },
    'get<change>' (e) {
        let selected = this.getStoreState('example');
        this.updater.digest({
            selected: selected
        })
    },
    
    /**
     * 全部清除
     */
    'clearAll<click>' (e) {
        this.clearStoreState('example');
        this.updater.digest({
            selected: ''
        })
    },

    /**
     * 部分批量清除
     */
    'clearBatch<click>' (e) {
        // 等价于
        // this.clearStoreState('example', [1,2]);
        this.clearStoreState('example', '1,2');
        let selected = this.getStoreState('example');
        this.updater.digest({
            selected
        })
    },

    /**
     * 单个清除
     */
    'clearOne<click>' (e) {
        this.clearStoreState('example', 1);
        let selected = this.getStoreState('example');
        this.updater.digest({
            selected
        })
    }
});