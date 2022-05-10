let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            loginView: '@./login',
            rightView: '@./right',
            navs: [{
                value: 1,
                text: '本页打开',
                tagContent: '<span style="position: absolute; left: 0; top: -6px; width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-red);"></span>',
            }, {
                value: 2,
                text: '支持二级',
                subs: [{
                    value: 21,
                    text: '本页打开'
                }, {
                    value: 22,
                    text: '外链打开',
                    link: 'https://www.taobao.com/' //直接外链打开
                }]
            }, {
                value: 3,
                text: '支持三级',
                subs: [{
                    value: 31,
                    text: '本页打开1-1',
                    group: '分组1'
                }, {
                    value: 32,
                    text: '本页打开1-2',
                    group: '分组1'
                }, {
                    value: 33,
                    text: '本页打开1-3',
                    group: '分组1'
                }, {
                    value: 34,
                    text: '本页打开1-4',
                    group: '分组1'
                }, {
                    value: 35,
                    text: '本页打开2-1',
                    group: '分组2'
                }, {
                    value: 36,
                    text: '外链打开2-2',
                    link: 'https://www.taobao.com/',
                    group: '分组2'
                }]
            }, {
                value: 4,
                text: '复杂信息展示',
                info: {
                    subTitle: '组4默认子标题',
                    title: '组4默认标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/'
                },
                subs: [{
                    value: 41,
                    text: '组4-1-1(本页)',
                    group: '分组1',
                    tag: 'NEW',
                    tagColor: '#f7664d',
                    info: {
                        subTitle: '组4-1-1子标题',
                        title: '组4-1-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 42,
                    text: '组4-1-2(本页)',
                    group: '分组1',
                    tag: 'NEW',
                    info: {
                        subTitle: '组4-1-2子标题',
                        title: '组4-1-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 43,
                    text: '组4-1-3(本页)',
                    group: '分组1',
                    info: {
                        subTitle: '组4-1-3子标题',
                        title: '组4-1-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 44,
                    text: '组4-1-4(本页)',
                    group: '分组1',
                    info: {
                        subTitle: '组4-1-4子标题',
                        title: '组4-1-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 45,
                    text: '组4-2-1(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组4-2-1子标题',
                        title: '组4-2-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 46,
                    text: '组4-2-2(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组4-2-2子标题',
                        title: '组4-2-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 47,
                    text: '组4-2-3(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组4-2-3子标题',
                        title: '组4-2-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 48,
                    text: '组4-2-4(外链)',
                    link: 'https://www.taobao.com/',
                    group: '分组2',
                    info: {
                        subTitle: '组4-2-4子标题',
                        title: '组4-2-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 49,
                    text: '组4-3-1(本页)',
                    group: '分组3',
                    info: {
                        subTitle: '组4-3-1子标题',
                        title: '组4-3-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 410,
                    text: '组4-3-2(本页)',
                    group: '分组3',
                    info: {
                        subTitle: '组4-3-2子标题',
                        title: '组4-3-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 411,
                    text: '组4-3-3(本页)',
                    group: '分组3',
                    info: {
                        subTitle: '组4-3-3子标题',
                        title: '组4-3-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 412,
                    text: '组4-4-1(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组4-4-1子标题',
                        title: '组4-4-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 413,
                    text: '组4-4-2(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组4-4-2子标题',
                        title: '组4-4-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 414,
                    text: '组4-4-3(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组4-4-3子标题',
                        title: '组4-4-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 415,
                    text: '组4-4-4(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组4-4-4子标题',
                        title: '组4-4-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 416,
                    text: '组4-4-5(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组4-4-5子标题',
                        title: '组4-4-5标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 417,
                    text: '组4-5-1(本页)',
                    group: '分组5',
                    info: {
                        subTitle: '组4-5-1子标题',
                        title: '组4-5-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 418,
                    text: '组4-5-2(本页)',
                    group: '分组5',
                    info: {
                        subTitle: '组4-5-2子标题',
                        title: '组4-5-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 419,
                    text: '组4-5-3(本页)',
                    group: '分组5',
                    info: {
                        subTitle: '组4-5-3子标题',
                        title: '组4-5-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 420,
                    text: '组4-5-3(本页)',
                    group: '分组5',
                    info: {
                        subTitle: '组4-5-4子标题',
                        title: '组4-5-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 421,
                    text: '组4-5-3(本页)',
                    group: '分组5',
                    info: {
                        subTitle: '组4-5-5子标题',
                        title: '组4-5-5标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }]
            }, {
                value: 5,
                text: '外链打开',
                link: 'https://www.taobao.com/',
                tag: 'HOT',
            }]
        });
    }
});