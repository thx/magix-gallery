let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@1.less');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        let list = [{
            value: 'dot-in-center',
            text: 'dot-in-center(圆点轮播)'
        }, {
            value: 'line-in-center',
            text: 'line-in-center(线型轮播)'
        }]

        let verticals = [{
            value: 'false',
            text: '水平(默认)'
        }, {
            value: 'true',
            text: '垂直'
        }]

        this.updater.digest({
            viewId: this.id,
            cur: list[0],
            list,
            curVer: verticals[0],
            verticals
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            cur: e.params.item
        })
    },
    'changeVer<change>'(e) {
        this.updater.digest({
            curVer: e.params.item
        })
    }
});