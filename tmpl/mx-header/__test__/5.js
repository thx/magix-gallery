let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        let navs = [{
            id: 1,
            name: '营销中台'
        }, {
            id: 2,
            name: '创意中台'
        }, {
            id: 3,
            name: '外链打开',
            target: 'https://www.taobao.com/'
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