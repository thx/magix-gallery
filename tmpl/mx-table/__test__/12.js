let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
let Sub = require('@../sub');

module.exports = Base.extend({
    tmpl: '@12.html',
    mixins: [Sub],
    render() {
        let that = this;
        let allList = [];
        for (var i = 0; i < 15; i++) {
            allList.push({
                id: i,
                expand: (i == 2),
                name: 'name' + i,
                link: 'link' + i,
                value: 'value' + i,
                test: 'test' + i,
                subs: [{
                    name: 'subname1',
                    link: 'sublink1',
                    value: 'subvalue1',
                    test: 'subtest1',
                }, {
                    name: 'subname2',
                    link: 'sublink2',
                    value: 'subvalue2',
                    test: 'subtest2',
                }]
            })
        }

        that.updater.digest({
            count: allList.length,
            page: 1,
            allList,
            list: allList.slice(0, 5)
        });
    },
    'change<click>' (e) {
        let id = e.params.id;
        let list = this.updater.get('list');
        for (let index = 0; index < list.length; index++) {
            if(list[index].id == id){
                list[index].name = Magix.guid('测试数据变化');
                break;
            }
        }
        
        this.updater.digest({
            list
        })
    },
    'changePager<change>' (e) {
        // e.page 当前第几页
        // e.size 每页多少条
        let that = this;
        let page = e.page;
        let allList = that.updater.get('allList');
        let list = allList.slice((page - 1) * 5, page * 5);
        that.updater.digest({
            list,
            page
        })
    }
});