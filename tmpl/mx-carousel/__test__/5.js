let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@1.less');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        let list = [{
            value: 'line-in-center',
            text: 'line-in-center(默认)'
        }, {
            value: 'line-in-left',
            text: 'line-in-left'
        }, {
            value: 'line-in-right',
            text: 'line-in-right'
        }, {
            value: 'line-out-center',
            text: 'line-out-center'
        }, {
            value: 'dot-in-center',
            text: 'dot-in-center'
        }, {
            value: 'dot-in-left',
            text: 'dot-in-left'
        }, {
            value: 'dot-in-right',
            text: 'dot-in-right'
        }, {
            value: 'dot-out-center',
            text: 'dot-out-center'
        }]

        let verticals = [{
            value: 'false',
            text: '水平'
        }, {
            value: 'true',
            text: '垂直'
        }]
        this.updater.digest({
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