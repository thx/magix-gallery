const Magix = require('magix');
const Router = Magix.Router;
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@white.html',
    init() {
        this.observeLocation(['cur']);
    },
    render() {
        window.scrollTo(0, 0);

        let navs = [{
            value: 1,
            text: '组1(本页)'
        }, {
            value: 2,
            text: '组2(含外链+本页)',
            subs: [{
                value: 21,
                text: '组2-1(外链)',
                link: 'https://www.taobao.com/' //直接外链打开
            }, {
                value: 22,
                text: '组2-2(本页)',
                tag: 'NEW'
            }, {
                value: 23,
                text: '组2-3(本页)'
            }]
        }, {
            value: 3,
            text: '组3(本页)',
            tag: 'NEW'
        }, {
            value: 4,
            text: '组4(外链)',
            link: 'https://www.taobao.com/'
        }, {
            value: 5,
            text: '组5(二级全外链)',
            subs: [{
                value: 51,
                text: '组5-1(外链)',
                link: 'https://www.taobao.com/'
            }, {
                value: 52,
                text: '组5-2(外链)',
                link: 'https://www.taobao.com/'
            }]
        }, {
            value: 6,
            text: '组6(简单三级)',
            subs: [{
                value: 61,
                text: '组6-1-1(本页)',
                group: '分组1'
            }, {
                value: 62,
                text: '组6-1-2(本页)',
                group: '分组1'
            }, {
                value: 63,
                text: '组6-1-3(本页)',
                group: '分组1'
            }, {
                value: 64,
                text: '组6-1-4(本页)',
                group: '分组1'
            }, {
                value: 65,
                text: '组6-1-5(本页)',
                group: '分组1'
            }, {
                value: 66,
                text: '组6-1-6(本页)',
                group: '分组1'
            }, {
                value: 67,
                text: '组6-2-1(本页)',
                group: '分组2'
            }, {
                value: 68,
                text: '组6-2-1(外链)',
                link: 'https://www.taobao.com/',
                group: '分组2'
            }]
        }, {
            value: 7,
            text: '组7(全屏三级)',
            info: {
                subTitle: '组7默认子标题',
                title: '组7默认标题',
                tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                link: 'https://www.taobao.com/'
            },
            subs: [{
                value: 71,
                text: '组7-1-1(本页)',
                group: '分组1',
                tag: 'NEW',
                tagColor: '#f7664d',
                info: {
                    subTitle: '组7-1-1子标题',
                    title: '组7-1-1标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 72,
                text: '组7-1-2(本页)',
                group: '分组1',
                tag: 'NEW',
                info: {
                    subTitle: '组7-1-2子标题',
                    title: '组7-1-2标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 73,
                text: '组7-1-3(本页)',
                group: '分组1',
                info: {
                    subTitle: '组7-1-3子标题',
                    title: '组7-1-3标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 74,
                text: '组7-1-4(本页)',
                group: '分组1',
                info: {
                    subTitle: '组7-1-4子标题',
                    title: '组7-1-4标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 75,
                text: '组7-2-1(本页)',
                group: '分组2',
                info: {
                    subTitle: '组7-2-1子标题',
                    title: '组7-2-1标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 76,
                text: '组7-2-2(本页)',
                group: '分组2',
                info: {
                    subTitle: '组7-2-2子标题',
                    title: '组7-2-2标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 77,
                text: '组7-2-3(本页)',
                group: '分组2',
                info: {
                    subTitle: '组7-2-3子标题',
                    title: '组7-2-3标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 78,
                text: '组7-2-4(外链)',
                link: 'https://www.taobao.com/',
                group: '分组2',
                info: {
                    subTitle: '组7-2-4子标题',
                    title: '组7-2-4标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 79,
                text: '组7-3-1(本页)',
                group: '分组3',
                info: {
                    subTitle: '组7-3-1子标题',
                    title: '组7-3-1标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 710,
                text: '组7-3-2(本页)',
                group: '分组3',
                info: {
                    subTitle: '组7-3-2子标题',
                    title: '组7-3-2标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }, {
                value: 711,
                text: '组7-3-3(本页)',
                group: '分组3',
                info: {
                    subTitle: '组7-3-3子标题',
                    title: '组7-3-3标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/',
                },
            }]
        }]

        let map = {};
        navs.forEach(nav => {
            map[nav.value] = [`${nav.text}（${nav.value}）`];
            let subs = nav.subs || [];
            subs.forEach(sub => {
                map[sub.value] = [`${nav.text}（${nav.value}）`];
                if (sub.group) {
                    map[sub.value].push(`${sub.group}`);
                }
                map[sub.value].push(`${sub.text}（${sub.value}）`);
            })
        })

        let locParams = Router.parse().params;
        this.updater.digest({
            navs,
            map,
            cur: locParams.cur || navs[0].value,
            login: locParams.login || '',
            user: locParams.user || '',
            bizCode: locParams.bizCode || 'alimama',
            logoutUrl: locParams.logoutUrl || '',
            rightView: locParams.rightView || '',
            links: locParams.links || true,
            ceiling: locParams.ceiling || true,
            rightCeilingShow: locParams.rightCeilingShow || false
        });
    },
    'change<navchange>'(event) {
        // event.nav {value: , text: } 当前导航
        Router.to({
            cur: event.nav.value
        })
    }
});

