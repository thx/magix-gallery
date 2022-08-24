let Magix = require('magix');
let Base = require('__test__/example');
Magix.applyStyle('@index.less');

module.exports = Base.extend({
    tmpl: '@7.html',
    render() {
        let adcList = [{
            code: 4,
            name: '北京',
            properties: {
                letter: 'B',
                area: '华北地区',
            }
        }, {
            code: 1,
            name: '广东',
            properties: {
                letter: 'G',
                area: '华南地区'
            },
            subComponentList: [{
                code: 11,
                name: '潮州',
            }, {
                code: 12,
                name: '河源'
            }, {
                code: 13,
                name: '茂名'
            }]
        }, {
            code: 2,
            name: '广西',
            properties: {
                letter: 'G',
                area: '华南地区',
            },
            subComponentList: [{
                code: 21,
                name: '百色'
            }, {
                code: 22,
                name: '北海',
            }, {
                code: 23,
                name: '贺州'
            }]
        }, {
            code: 3,
            name: '天津',
            properties: {
                letter: 'T',
                area: '华北地区',
            }
        }, {
            code: 4,
            name: '浙江',
            properties: {
                letter: 'Z',
                area: '华东地区',
            },
            subComponentList: [{
                code: 41,
                name: '杭州'
            }, {
                code: 42,
                name: '湖州'
            }]
        }, {
            code: 5,
            name: '新疆',
            subComponentList: [{
                code: 31,
                name: '阿克苏',
            }, {
                code: 32,
                name: '阿勒泰',
            }]
        }, {
            code: 6,
            name: '台湾'
        }];

        this.updater.digest({
            viewId: this.id,
            adcList,
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            values: e.values,
            items: e.items,
        })
    }
});