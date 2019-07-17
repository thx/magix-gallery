let Magix = require('magix');
let Vframe = Magix.Vframe;
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        let list1 = [{
            value: 1,
            pValue: '',
            text: '计划1'
        }, {
            value: 2,
            pValue: '',
            text: '计划2'
        }, {
            value: 11,
            pValue: 1,
            text: '单元1-1'
        }, {
            value: 12,
            pValue: 1,
            text: '单元1-2'
        }, {
            value: 21,
            pValue: 2,
            text: '单元2-1'
        }, {
            value: 22,
            pValue: 2,
            text: '单元2-2'
        }]
        
        var list2 = [{
            value: 3,
            pValue: '',
            text: '计划3'
        }, {
            value: 4,
            pValue: '',
            text: '计划4'
        }, {
            value: 31,
            pValue: 3,
            text: '单元3-1'
        }, {
            value: 32,
            pValue: 3,
            text: '单元3-2'
        }, {
            value: 41,
            pValue: 4,
            text: '单元4-1'
        }, {
            value: 42,
            pValue: 4,
            text: '单元4-2'
        }]

        this.updater.digest({
            list1,
            list2,
            list: $.extend(true, [], list1),
            results: {},
            selected: []
        });
    },
    'changePager<change>' (e) {
        let page = e.page;

        let that = this;
        let data = this.updater.get();

        let tree = Vframe.get(that.id + '_tree');
        let result = tree.invoke('getBottomValues');
        
        // 缓存已选中的节点，下次页面切换时依然选中原先选中的
        let results = data.results || {};
        results[page] = result;
        let selected = [];
        for(var p in results){
            selected = selected.concat(results[p]);
        }

        // 更新list
        let list = $.extend(true, [], data['list' + page]);
        this.updater.digest({
            list: list,
            selected
        })
    }
});