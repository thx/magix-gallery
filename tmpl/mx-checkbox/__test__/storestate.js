/*
ver:1.3.5
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Linkage = require('../linkage');
let GTip = require('../../mx-gtip/index');
let StoreState = require('../storestate');
module.exports = Magix.View.extend({
    tmpl: '@storestate.html',
    mixins: [GTip, StoreState, Linkage],
    init() {
        let list1 = [];
        for (let j = 0; j < 100; j++) {
            let temp = {
                id: j
            };
            for (let i = 0; i < 5; i++) {
                temp['f' + i] = '字段内容' + j + '_' + i;
            }
            list1.push(temp);
        }
        let me = this;
        me.$list1 = list1;
        me.$list1Page = 1;
        me.$list1Size = 10;
    },
    getList(type) {
        let me = this;
        let list = me['$' + type];
        let page = me['$' + type + 'Page'];
        let size = me['$' + type + 'Size'];
        return list.slice((page - 1) * size, page * size);
    },
    render() {
        let me = this;
        me.updater.digest({
            list1: me.getList('list1'),
            list1Page: me.$list1Page,
            list1Size: me.$list1Size
        });
    },
    'chageList1<change>'(e) {
        let me = this;
        me.$list1Page = e.page;
        me.$list1Size = e.size;
        me.render();
    },
    'showEx1<click>'() {
        let list = this.getStoreState('example1');
        if (list.length) {
            this.gtipRT('选中的值：' + list.join(','));
        } else {
            this.gtipRT('请选择checkbox');
        }
    }
});