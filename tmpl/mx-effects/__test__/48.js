let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@48.html',
    render() {
        let list = [];
        for (let j = 0; j < 6; j++) {
            list.push({
                title: `消费者洞察报告${j}`,
                tip: '手淘搜索流量获取的营销工具，通过精准关键词和人群定向，结合智能算法个性化匹配，为宝贝获取手机淘宝搜索结果页下的精准流量。',
                icon: 'https://img.alicdn.com/tfs/TB1H83oRsfpK1RjSZFOXXa6nFXa-152-152.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true
            })
        }

        let options = [{
            text: '卡片显示模式',
            value: 'mode',
            list: [{
                text: 'logo图文卡片平铺',
                value: 'flat-logo-list'
            }, {
                text: 'logo图文卡片轮播',
                value: 'carousel-logo-list'
            }]
        }]

        let selected = {};
        for (let key in options) {
            let option = options[key];
            selected[option.value] = option.list[0].value;
        }

        this.updater.digest({
            list,
            options,
            selected,
            viewId: this.id
        });
    },
    'change<change>'(e) {
        let { selected } = this.updater.get();
        let { option, item } = e.params;
        selected[option] = item
        this.updater.digest({
            selected
        })
    }
});