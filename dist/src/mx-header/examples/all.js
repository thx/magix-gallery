let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@all.html',
    render() {
        let navs = [{
            value: 1,
            text: '营销中台',
            subs: [{
                value: 21,
                text: '标准推广'
            }, {
                value: 22,
                text: '智能推广'
            }]
        }, {
            value: 2,
            text: '创意中台'
        }]
        // 默认不选中任何一个
        let cur = '';
        this.updater.digest({
            navs,
            cur,
            curText: ''
        });
    },
    'change<navchange>'(event) {
        // event.nav {value: , text: } 当前导航
        let nav = event.nav;
        this.updater.digest({
            cur: nav.value,
            curText: nav.text
        })
    }
});

