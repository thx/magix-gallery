let Magix = require('magix');
let Base = require('__test__/example');
const Router = Magix.Router;

module.exports = Base.extend({
    tmpl: '@color.html',
    init() {
        this.observeLocation(['cur']);
    },
    render() {
        let navs = [{
            value: 1,
            text: '本页打开1'
        }, {
            value: 2,
            text: '支持二级',
            subs: [{
                value: 21,
                text: '本页打开'
            }, {
                value: 22,
                text: '外链打开',
                link: 'https://www.taobao.com/'
            }]
        }, {
            value: 3,
            text: '支持三级',
            subs: [{
                value: 31,
                text: '本页打开1',
                group: '分组1'
            }, {
                value: 32,
                text: '本页打开2',
                group: '分组1'
            }, {
                value: 33,
                text: '本页打开3',
                group: '分组1'
            }, {
                value: 34,
                text: '本页打开4',
                group: '分组1'
            }, {
                value: 35,
                text: '本页打开5',
                group: '分组2'
            }, {
                value: 36,
                text: '本页打开6',
                group: '分组2'
            }]
        }, {
            value: 4,
            text: '本页打开2'
        }, {
            value: 5,
            text: '外链打开',
            link: 'https://www.taobao.com/'
        }];

        let map = {};
        navs.forEach(nav => {
            map[nav.value] = `一级：${nav.text}（${nav.value}）`;
            let subs = nav.subs || [];
            subs.forEach(sub => {
                map[sub.value] = `一级：${nav.text}（${nav.value}）<br/>二级：${sub.text}（${sub.value}）`;
            })
        })

        let locParams = Magix.Router.parse().params;
        this.updater.digest({
            viewId: this.id,
            navs,
            map,
            cur: locParams.cur || navs[0].value,
            colors: (locParams.colors + '' === 'true')
        });
    },
    'change<navchange>'(event) {
        // event.nav {value: , text: } 当前导航
        Router.to({
            cur: event.nav.value
        })
    }
});