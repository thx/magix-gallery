let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@71.html',
    render() {
        let list = [];
        for (let i = 0; i < 6; i++) {
            list.push({
                title: '精准扶持',
                tip: '搜索结果页消费者费者搜索结果页消费者费者搜索结果页消费者费者搜索结果页消费者费者',
                icon: 'https://img.alicdn.com/imgextra/i1/O1CN01VpoX5P1jCXmeFEQmB_!!6000000004512-2-tps-136-136.png',
                iconHover: 'https://img.alicdn.com/imgextra/i2/O1CN01UaRmVq296kmzAltbE_!!6000000008019-2-tps-136-136.png',
                btn: '立即投放',
                link: 'https://www.taobao.com/',
                outer: true
            })
        }
        list[0].imgTag = 'https://img.alicdn.com/imgextra/i4/O1CN01DQ1g3t1rfs4Y7c0Mb_!!6000000005659-2-tps-130-46.png';

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