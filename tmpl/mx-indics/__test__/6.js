let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        let fields = [{
            text: '消耗',
            value: 1,
            pValue: 1,
            tip: '消耗提示文案'
        }, {
            text: '展现量',
            value: 2,
            pValue: 1
        }, {
            text: '点击量',
            value: 3,
            pValue: 1
        }, {
            text: '点击率',
            value: 4,
            pValue: 1
        }, {
            text: '平均点击单价',
            value: 5,
            pValue: 1,
            tip: '平均点击单价提示文案'
        }, {
            text: '点击转化率',
            value: 6,
            pValue: 2
        }, {
            text: '成交笔数',
            value: 7,
            pValue: 2
        }, {
            text: '淘积木平均时长',
            value: 8,
            tip: '淘积木页面平均停留时长提示文案',
            pValue: 2
        }, {
            text: '投资回报率',
            value: 9,
            pValue: 2
        }, {
            text: '访问页面数',
            value: 10,
            pValue: 2
        }]

        let parents = [{
            text: '淘积木互动',
            value: 1
        }, {
            text: '粉丝获取',
            value: 2
        }]

        let map = {};
        fields.forEach(item => {
            map[item.value] = item.text;
        })

        this.updater.digest({
            parents: [],
            fields,
            customs: [2, 3, 4, 5],
            defaults: [2, 3],
            map
        });
    },
    'change<change>'(e) {
        // e.customs：用户自定义的指标，当前用的的配置
        this.updater.digest({
            customs: e.customs
        });
    }
});