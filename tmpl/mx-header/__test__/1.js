let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@1.html',
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
        }]
        this.updater.digest({
            viewId: this.id,
            navs,
            cur: navs[0]
        });
    },
    'change<navchange>'(event) {
        // event.nav {value: , text: } 当前导航
        this.updater.digest({
            cur: event.nav
        });
    }
});