const Magix = require('magix');
const Router = Magix.Router;
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@white.html',
    render() {
        let navs = [{
            value: 1,
            text: '本页打开1'
        }, {
            value: 2,
            text: '二级外链+本页',
            subs: [{
                value: 21,
                text: '外链打开',
                link: 'https://www.taobao.com/' //直接外链打开
            }, {
                value: 22,
                text: '本页打开1'
            }, {
                value: 23,
                text: '本页打开2'
            }]
        }, {
            value: 3,
            text: '本页打开2',
            tag: 'NEW'
        }, {
            value: 4,
            text: '外链打开',
            link: 'https://www.taobao.com/'
        }, {
            value: 5,
            text: '二级全外链',
            subs: [{
                value: 51,
                text: '外链1',
                link: 'https://www.taobao.com/'
            }, {
                value: 52,
                text: '外链2',
                link: 'https://www.taobao.com/' //直接外链打开
            }]
        }, {
            value: 6,
            text: '支持三级',
            subs: [{
                value: 61,
                text: '本页打开1',
                group: '分组1'
            }, {
                value: 62,
                text: '本页打开2',
                group: '分组1'
            }, {
                value: 63,
                text: '本页打开3',
                group: '分组1'
            }, {
                value: 64,
                text: '本页打开4',
                group: '分组1'
            }, {
                value: 65,
                text: '本页打开5',
                group: '分组1'
            }, {
                value: 66,
                text: '本页打开6',
                group: '分组1'
            }, {
                value: 67,
                text: '本页打开7',
                group: '分组2'
            }, {
                value: 68,
                text: '外链',
                link: 'https://www.taobao.com/',
                outer: false,
                group: '分组2'
            }]
        }]

        let map = {};
        navs.forEach(nav => {
            map[nav.value] = `<div>一级：${nav.text}（${nav.value}）</div>`;
            let subs = nav.subs || [];
            subs.forEach(sub => {
                map[sub.value] = `<div>一级：${nav.text}（${nav.value}）</div><div>二级：${sub.text}（${sub.value}）</div>`;
            })
        })

        let locParams = Router.parse().params;
        this.updater.digest({
            navs,
            map,
            cur: locParams.cur || navs[0].value,
            login: locParams.login || '',
            user: locParams.user || '',
            bizCode: locParams.bizCode || '',
            logoutUrl: locParams.logoutUrl || '',
            rightView: locParams.rightView || '',
            links: locParams.links || true,
            ceiling: locParams.ceiling || true,
            rightCeilingShow: locParams.rightCeilingShow || false
        });

        this.observeLocation(['cur']);
    },
    'change<navchange>'(event) {
        // event.nav {value: , text: } 当前导航
        Router.to({
            cur: event.nav.value
        })
    }
});

