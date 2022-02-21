let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@40.html',
    render() {
        let list = [];
        for (let j = 0; j < 2; j++) {
            list.push({
                title: `消费者洞察报告${j}_0`,
                tip: '2020-03-08',
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                quotaes: [
                    { value: '12.33%', text: '新增粉丝率' },
                    { value: '1233', text: '新粉数' },
                    { value: '122', text: '老客数' }
                ],
                quotaeTip: ''
            },{
                title: `消费者洞察报告${j}_1`,
                tip: '2020-03-08',
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                quotaes: [
                    { value: '12.33%', text: '新增粉丝率' },
                    { value: '1233', text: '新粉数' }
                ],
                quotaeTip: ''
            },{
                title: `消费者洞察报告${j}_2`,
                tip: '2020-03-08',
                img: 'https://img.alicdn.com/tfs/TB1x5bkx.T1gK0jSZFrXXcNCXXa-2066-864.png',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true,
                quotaes: [],
                quotaeTip: '说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明'
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