let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@40.html',
    render() {
        let list = [];
        let map = {
            a: { value: '12.33%', text: '新增粉丝率' },
            b: { value: '1233', text: '新粉数' },
            c: { value: '122', text: '老客数' }
        }
        for (let j = 0; j < 6; j++) {
            list.push({
                title: `消费者洞察报告${j}`,
                tip: '2020-03-08',
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                quotaes: (j % 2 == 0) ? [map.a, map.b, map.c] : [map.a, map.b]
            })
        }

        let options = [{
            text: '卡片显示模式',
            value: 'mode',
            list: [{
                text: '大卡片图文指标轮播',
                value: 'carousel-common-quota'
            }, {
                text: '大卡片图文指标平铺',
                value: 'flat-common-quota'
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