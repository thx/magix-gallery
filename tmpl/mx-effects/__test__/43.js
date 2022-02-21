let Magix = require('magix');
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@43.html',
    render() {
        let list = [];
        for (let j = 0; j < 6; j++) {
            list.push({
                title: `你的直通车为啥赚不到钱开翻车呢${j}`,
                subTitle: '秋秋引流实战训练营',
                tip: '经常遇到有商家问，我的商品单价很低，能否做直通车推广？一个商品才卖那么几元，直通.',
                icon: 'https://img.alicdn.com/tfs/TB12EX_mrY1gK0jSZTEXXXDQVXa-200-200.png',
                // iconHtml: '<div style="position: relative; width: 100%; height: 100%; border-radius: 50%; background-color: blue;"><i class="mc-iconfont" style="position: absolute; top: 50%; left: 50%; width: 40px; height: 40px; margin-top: -20px; margin-left: -20px; font-size: 36px;">&#xe62f;</i></div>',
                btn: '查看详情',
                link: 'https://www.taobao.com/',
                outer: true
            })
        }

        let options = [{
            text: '卡片显示模式',
            value: 'mode',
            list: [{
                text: 'icon图文卡片轮播',
                value: 'carousel-icon-list'
            }, {
                text: 'icon图文卡片平铺',
                value: 'flat-icon-list'
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