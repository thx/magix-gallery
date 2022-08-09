const Magix = require('magix');
const Router = Magix.Router;
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@white.html',
    init() {
        this.observeLocation(['cur']);
    },
    render() {
        window.scrollTo(0, 0);

        let locParams = Router.parse().params;
        let navs = [];
        if (locParams.demo + '' === 'true') {
            navs = [{
                value: 1,
                text: '组1',
                info: {
                    subTitle: '组1默认子标题',
                    title: '组1默认标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/'
                },
                subs: [{
                    value: 11,
                    text: '组1-1-1(本页)',
                    group: '分组1',
                    info: {
                        subTitle: '组1-1-1子标题',
                        title: '组1-1-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 12,
                    text: '组1-1-2(本页)',
                    group: '分组1',
                    tag: 'NEW',
                    info: {
                        subTitle: '组1-1-2子标题',
                        title: '组1-1-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 13,
                    text: '组1-1-3(本页)',
                    group: '分组1',
                    info: {
                        subTitle: '组1-1-3子标题',
                        title: '组1-1-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 14,
                    text: '组1-1-4(本页)',
                    group: '分组1',
                    info: {
                        subTitle: '组1-1-4子标题',
                        title: '组1-1-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 15,
                    text: '组1-2-1(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组1-2-1子标题',
                        title: '组1-2-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 16,
                    text: '组1-2-2(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组1-2-2子标题',
                        title: '组1-2-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 17,
                    text: '组1-2-3(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组1-2-3子标题',
                        title: '组1-2-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 18,
                    text: '组1-2-4(外链)',
                    link: 'https://www.taobao.com/',
                    group: '分组2',
                    info: {
                        subTitle: '组1-2-4子标题',
                        title: '组1-2-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }]
            }, {
                text: '内链打开右键外链',
                link: '#!/footer/index',
                outer: false
            }, {
                value: 5,
                text: '本页1'
            }, {
                value: 2,
                text: '组2',
                info: {
                    subTitle: '组2默认子标题',
                    title: '组2默认标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/'
                },
                subs: [{
                    value: 21,
                    text: '组2-1-1(本页)',
                    group: '分组1',
                    tag: 'NEW',
                    tagColor: '#f7664d',
                    info: {
                        subTitle: '组2-1-1子标题',
                        title: '组2-1-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 22,
                    text: '组2-1-2(本页)',
                    group: '分组1',
                    tag: 'NEW',
                    info: {
                        subTitle: '组2-1-2子标题',
                        title: '组2-1-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 23,
                    text: '组2-1-3(本页)',
                    group: '分组1',
                    info: {
                        subTitle: '组2-1-3子标题',
                        title: '组2-1-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 24,
                    text: '组2-1-4(本页)',
                    group: '分组1',
                    info: {
                        subTitle: '组2-1-4子标题',
                        title: '组2-1-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 25,
                    text: '组2-2-1(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组2-2-1子标题',
                        title: '组2-2-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 26,
                    text: '组2-2-2(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组2-2-2子标题',
                        title: '组2-2-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 27,
                    text: '组2-2-3(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组2-2-3子标题',
                        title: '组2-2-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 28,
                    text: '组2-2-4(外链)',
                    link: 'https://www.taobao.com/',
                    group: '分组2',
                    info: {
                        subTitle: '组2-2-4子标题',
                        title: '组2-2-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 29,
                    text: '组2-3-1(本页)',
                    group: '分组3',
                    info: {
                        subTitle: '组2-3-1子标题',
                        title: '组2-3-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 210,
                    text: '组2-3-2(本页)',
                    group: '分组3',
                    info: {
                        subTitle: '组2-3-2子标题',
                        title: '组2-3-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 211,
                    text: '组2-3-3(本页)',
                    group: '分组3',
                    info: {
                        subTitle: '组2-3-3子标题',
                        title: '组2-3-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 212,
                    text: '组2-3-4(外链)',
                    link: 'https://www.taobao.com/',
                    group: '分组3',
                    info: {
                        subTitle: '组2-3-4子标题',
                        title: '组2-3-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 213,
                    text: '组2-3-5(外链)',
                    link: 'https://www.taobao.com/',
                    group: '分组3',
                    info: {
                        subTitle: '组2-3-5子标题',
                        title: '组2-3-5标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }]
            }, {
                value: 6,
                text: '本页2'
            }, {
                value: 7,
                text: '本页3'
            }, {
                value: 3,
                text: '组3',
                tag: 'NEW',
                info: {
                    subTitle: '组3默认子标题',
                    title: '组3默认标题',
                    tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                    link: 'https://www.taobao.com/'
                },
                subs: [{
                    value: 31,
                    text: '组3-1-1(本页)',
                    group: '分组1',
                    tag: 'NEW',
                    tagColor: '#f7664d',
                    info: {
                        subTitle: '组3-1-1子标题',
                        title: '组3-1-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 32,
                    text: '组3-1-2(本页)',
                    group: '分组1',
                    tag: 'NEW',
                    info: {
                        subTitle: '组3-1-2子标题',
                        title: '组3-1-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 33,
                    text: '组3-1-3(本页)',
                    group: '分组1',
                    info: {
                        subTitle: '组3-1-3子标题',
                        title: '组3-1-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 34,
                    text: '组3-1-4(本页)',
                    group: '分组1',
                    info: {
                        subTitle: '组3-1-4子标题',
                        title: '组3-1-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 35,
                    text: '组3-2-1(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组3-2-1子标题',
                        title: '组3-2-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 36,
                    text: '组3-2-2(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组3-2-2子标题',
                        title: '组3-2-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 37,
                    text: '组3-2-3(本页)',
                    group: '分组2',
                    info: {
                        subTitle: '组3-2-3子标题',
                        title: '组3-2-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 38,
                    text: '组3-2-4(外链)',
                    link: 'https://www.taobao.com/',
                    group: '分组2',
                    info: {
                        subTitle: '组3-2-4子标题',
                        title: '组3-2-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 39,
                    text: '组3-3-1(本页)',
                    group: '分组3',
                    info: {
                        subTitle: '组3-3-1子标题',
                        title: '组3-3-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 310,
                    text: '组3-3-2(本页)',
                    group: '分组3',
                    info: {
                        subTitle: '组3-3-2子标题',
                        title: '组3-3-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 311,
                    text: '组3-3-3(本页)',
                    group: '分组3',
                    info: {
                        subTitle: '组3-3-3子标题',
                        title: '组3-3-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 312,
                    text: '组3-4-1(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组3-4-1子标题',
                        title: '组3-4-1标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 313,
                    text: '组3-4-2(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组3-4-2子标题',
                        title: '组3-4-2标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 314,
                    text: '组3-4-3(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组3-4-3子标题',
                        title: '组3-4-3标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 315,
                    text: '组3-4-4(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组3-4-4子标题',
                        title: '组3-4-4标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 316,
                    text: '组3-4-5(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组3-4-5子标题',
                        title: '组3-4-5标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 317,
                    text: '组3-4-6(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组3-4-6子标题',
                        title: '组3-4-6标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }, {
                    value: 318,
                    text: '组3-4-7(本页)',
                    group: '分组4',
                    info: {
                        subTitle: '组3-4-7子标题',
                        title: '组3-4-7标题',
                        tip: '说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息说明信息',
                        link: 'https://www.taobao.com/',
                    },
                }]
            }, {
                value: 4,
                text: '组4',
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
                value: 8,
                text: '本页4'
            }]
        } else {
            navs = [{
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

            }, {
                value: 4,
                text: '组4(外链)',
                link: 'https://www.taobao.com/'
            }, {
                value: 5,
                text: '组5(二级全外链)',
                tag: 'NEW',
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
                    group: '分组1',
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
        }

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

