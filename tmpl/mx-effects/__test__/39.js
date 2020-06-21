let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@39.html',
    render() {
        let list = [];
        for (let j = 0; j < 6; j++) {
            list.push({
                title: `消费者洞察报告${j}`,
                titleTag: (j == 0) ? 'https://img.alicdn.com/tfs/TB1VXc0Lhv1gK0jSZFFXXb0sXXa-120-40.jpg' : '',
                tip: '报告洞察每个环节的消费者触达效率，同时提供了相应的优化建议，有效挖掘市场机会。',
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
            })
        }

        let options = [{
            text: '卡片显示模式',
            value: 'mode',
            list: [{
                text: '大卡片图文链接轮播',
                value: 'carousel-common-list'
            }, {
                text: '小卡片图文链接轮播',
                value: 'carousel-small-list'
            }, {
                text: '大卡片图文链接平铺',
                value: 'flat-common-list'
            }, {
                text: '小卡片图文链接平铺',
                value: 'flat-small-list'
            }]
        }, {
            text: '每行卡片个数',
            value: 'line-number',
            list: [{
                text: '3个',
                value: 3
            }, {
                text: '4个',
                value: 4
            }]
        }, {
            text: '卡片文案显示行数',
            value: 'tip-line-number',
            list: [{
                text: '2行',
                value: 2
            }, {
                text: '3行',
                value: 3
            }, {
                text: '4行',
                value: 4
            }]
        }, {
            text: '对齐方式',
            value: 'text-align',
            list: [{
                text: 'left',
                value: 'left'
            }, {
                text: 'center',
                value: 'center'
            }, {
                text: 'right',
                value: 'right'
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