let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@4.html',
    render() {
        let navs = [{
            value: 1,
            text: '营销中台'
        }, {
            value: 2,
            text: '创意中台'
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