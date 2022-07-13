let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        let list = [{
            value: 11,
            pValue: '',
            text: '直通车',
            img: '//img.alicdn.com/tfs/TB1HrXVkbH1gK0jSZFwXXc7aXXa-92-92.png',
            tip: '关键词搜索推广营销工具'
        }, {
            value: 12,
            pValue: '',
            text: '超级推荐',
            img: '//img.alicdn.com/tfs/TB1a3dUkeL2gK0jSZFmXXc7iXXa-92-92.png',
            tip: '关键词搜索推广营销工具'
        }, {
            value: 13,
            pValue: '',
            text: '智钻',
            img: '//img.alicdn.com/tfs/TB1hYNTki_1gK0jSZFqXXcpaXXa-92-92.png',
            tip: '关键词搜索推广营销工具'
        }, {
            value: 14,
            pValue: '',
            text: '淘宝客',
            img: '//img.alicdn.com/tfs/TB1JbtSkmf2gK0jSZFPXXXsopXa-92-92.png',
            tip: '关键词搜索推广营销工具'
        }, {
            value: 111,
            pValue: 11,
            text: '新手入门'
        }, {
            value: 112,
            pValue: 11,
            text: '提升流量'
        }, {
            value: 113,
            pValue: 11,
            text: '提升转化'
        }, {
            value: 114,
            pValue: 11,
            text: '提升店铺成交'
        }, {
            value: 115,
            pValue: 11,
            text: '推广规则'
        }, {
            value: 1151,
            pValue: 115,
            text: '标准推广'
        }, {
            value: 1152,
            pValue: 115,
            text: '智能推广'
        }, {
            value: 121,
            pValue: 12,
            text: '新手入门'
        }, {
            value: 122,
            pValue: 12,
            text: '提升流量'
        }, {
            value: 123,
            pValue: 12,
            text: '提升转化'
        }, {
            value: 124,
            pValue: 12,
            text: '提升店铺成交'
        }, {
            value: 131,
            pValue: 13,
            text: '产品新功能'
        }, {
            value: 132,
            pValue: 13,
            text: '数据分析'
        }, {
            value: 133,
            pValue: 13,
            text: '其他'
        }]

        this.updater.digest({
            list,
            selected: '',
            items: ''
        });
    },
    'select<change>'(event) {
        // 选中的叶子节点数据
        // event.selected：value值
        // event.item：当前选中叶子节点完整对象
        // event.items：当前选中项完整的父子关系，数组顺序为父子关系
        let items = event.items;
        this.updater.digest({
            selected: event.selected,
            items: items.map(item => {
                return `${item.text}（${item.value}）`;
            }).join('=&gt; ')
        })
    }
});