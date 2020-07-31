const Magix = require('magix');
const Router = Magix.Router;
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@wireless.html',
    render() {
        let navs = [{
            value: 1,
            text: '首页'
        }, {
            value: 2,
            text: '营销专区'
        }, {
            value: 3,
            text: '营销洞察',
            tag: 'NEW'
        }, {
            value: 4,
            text: '营销服务',
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
            value: 5,
            text: '策略中心',
            link: 'https://www.taobao.com/' //直接外链打开
        }, {
            value: 6,
            text: '联盟书院'
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
            login: true,
            user: locParams.user || '',
            bizCode: locParams.bizCode || '',
            logoutUrl: locParams.logoutUrl || '',
            rightView: '@./right',
            // rightView: '',
            links: locParams.links || true,
            ceiling: true,
            rightCeilingShow: false
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

