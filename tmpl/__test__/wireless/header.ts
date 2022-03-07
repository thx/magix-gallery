import Magix, { Router } from 'magix';

export default Magix.View.extend({
    tmpl: '@header.html',
    render() {
        let navs = [{
            value: 1,
            text: '首页',
            icon: '<i class="mc-iconfont">&#xe622;</i>'
        }, {
            value: 2,
            text: '营销专区',
            icon: '<i class="mc-iconfont">&#xe767;</i>'
        }, {
            value: 3,
            text: '营销洞察',
            icon: '<i class="mc-iconfont">&#xe780;</i>'
        }, {
            value: 4,
            text: '营销服务',
            icon: '<i class="mc-iconfont">&#xe731;</i>',
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
            link: 'https://www.taobao.com/', //直接外链打开
            icon: '<i class="mc-iconfont">&#xe9e5;</i>',
        }, {
            value: 6,
            text: '联盟书院',
            icon: '<i class="mc-iconfont">&#xe75c;</i>',
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
            links: locParams.links || true,
            ceiling: true,
            rightCeilingShow: false
        });

        this.observeLocation(['cur']);
    },
    'change<navchange>'(event) {
        Router.to({
            cur: event.nav.value
        })
    }
});

