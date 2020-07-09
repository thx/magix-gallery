let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@50.html',
    render() {
        let list = [];
        for (let j = 0; j < 6; j++) {
            list.push({
                title: `消费者洞察报告${j}`,
                tip: '2020-03-08',
                icon: 'https://img.alicdn.com/tfs/TB12EX_mrY1gK0jSZTEXXXDQVXa-200-200.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                links: [{
                    title: '[预通知]淘宝/天猫直通车商品推广',
                    link: 'https://www.taobao.com/',
                    outer: true
                },{
                    title: '[预通知]淘宝/天猫直通车商品推广',
                    link: 'https://www.taobao.com/',
                    outer: true
                },{
                    title: '[预通知]淘宝/天猫直通车商品推广',
                    link: 'https://www.taobao.com/',
                    outer: true
                }]
            })
        }

        let options = [{
            text: '卡片显示模式',
            value: 'mode',
            list: [{
                text: '多链接图文指标轮播',
                value: 'carousel-links-list'
            }, {
                text: '多链接图文指标平铺',
                value: 'flat-links-list'
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