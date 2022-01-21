let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@70.html',
    render() {
        let list = [{
            title: '精准扶持',
            tip: '新客专属流量扶持，提曝光促转化新客专属流量扶持',
            icon: 'https://img.alicdn.com/imgextra/i3/O1CN01qtVuzB1jqqdXlowM2_!!6000000004600-2-tps-144-144.png',
            btn: '立即投放',
            link: 'https://www.taobao.com/',
            outer: true
        }, {
            title: '无忧放心投',
            tip: '新客成交保障，15天内推广消耗满200元无成交，平台将返还保障金',
            icon: 'https://img.alicdn.com/imgextra/i4/O1CN01YwaxzC1TPKzoQqSzY_!!6000000002374-2-tps-136-136.png',
            btn: '立即投放',
            link: 'https://www.taobao.com/',
            outer: true
        }, {
            title: '智能任务',
            tip: '做任务拿红包，更有流量加速权益，帮助提升投放成效',
            icon: 'https://img.alicdn.com/imgextra/i3/O1CN01qtVuzB1jqqdXlowM2_!!6000000004600-2-tps-144-144.png',
            btn: '立即投放',
            link: 'https://www.taobao.com/',
            outer: true
        }, {
            title: '精准扶持',
            tip: '新客专属流量扶持，提曝光促转化新客专属流量扶持',
            icon: 'https://img.alicdn.com/imgextra/i3/O1CN01qtVuzB1jqqdXlowM2_!!6000000004600-2-tps-144-144.png',
            btn: '立即投放',
            link: 'https://www.taobao.com/',
            outer: true
        }, {
            title: '无忧放心投',
            tip: '新客成交保障，15天内推广消耗满200元无成交，平台将返还保障金',
            icon: 'https://img.alicdn.com/imgextra/i4/O1CN01YwaxzC1TPKzoQqSzY_!!6000000002374-2-tps-136-136.png',
            btn: '立即投放',
            link: 'https://www.taobao.com/',
            outer: true
        }, {
            title: '智能任务',
            tip: '做任务拿红包，更有流量加速权益，帮助提升投放成效',
            icon: 'https://img.alicdn.com/imgextra/i3/O1CN01qtVuzB1jqqdXlowM2_!!6000000004600-2-tps-144-144.png',
            btn: '立即投放',
            link: 'https://www.taobao.com/',
            outer: true
        }];

        let options = [{
            text: '卡片显示模式',
            value: 'mode',
            list: [{
                text: 'hover背景色图文卡片轮播',
                value: 'carousel-hover-list'
            }, {
                text: 'hover背景色图文卡片平铺',
                value: 'flat-hover-list'
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