/*
ver:1.3.10
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            list1: [{
                text: 'abc1',
                id: 1
            }, {
                text: 'abc2',
                id: 2
            }, {
                text: 'abc3',
                id: 3
            }, {
                text: 'abc4',
                id: 4
            }, {
                text: 'abc5',
                id: 5
            }, {
                text: 'abc6',
                id: 6
            }, {
                text: 'abc7',
                id: 7
            }, {
                text: 'abc8',
                id: 8
            }, {
                text: 'abc9',
                id: 9
            }, {
                text: 'abc0',
                id: 0
            }],
            list2: []
        });
    },
    'showPick<pick>' (e) {
        this.gtipRT('选中：' + e.item);
    },
    'showList<showlist>' () {
        this.gtipRT('列表展示');
    },
    'hideList<hidelist>' () {
        this.gtipRT('列表关闭');
    },
    'updateList<input>' (e) {
        let target = $(e.eventTarget);
        let list = ['163.com', 'qq.com', '126.com', 'sina.com'];
        let v = $.trim(target.val());
        let newList = [];
        if (v) {
            if (v.indexOf('@') == -1) {
                for (let a of list) {
                    newList.push(v + '@' + a);
                }
            } else {
                let parts = v.split('@');
                for (let a of list) {
                    if (a.indexOf(parts[1]) >= 0) {
                        newList.push(parts[0] + '@' + a);
                    }
                }
            }
        }
        target.invokeView('update', [newList]);
    }
});