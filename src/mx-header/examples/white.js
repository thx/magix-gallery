let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@white.html',
    render() {
        let navs = [{
            value: 1,
            text: '首页'
        }, {
            value: 2,
            text: '产品介绍',
            subs: [{
                value: 21,
                text: '标准推广'
            }, {
                value: 22,
                text: '智能推广'
            }]
        }, {
            value: 3,
            text: '学习咨询'
        }]

        let map = {};
        navs.forEach(nav => {
            map[nav.value] = nav.text;
            let subs = nav.subs || [];
            subs.forEach(sub => {
                map[sub.value] = `${nav.text}_${sub.text}`;
            })
        })

        this.updater.digest({
            navs,
            map,
            cur: navs[0].value
        });
    },
    'change<navchange>'(event) {
        // event.nav {value: , text: } 当前导航
        this.updater.digest({
            cur: event.nav.value
        })
    }
});

