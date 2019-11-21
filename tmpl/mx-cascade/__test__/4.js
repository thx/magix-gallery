let Magix = require('magix');
let Vframe = Magix.Vframe;
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@4.html',
    mixins: [Form, Validator],
    render() {
        let list = [{
            value: 11,
            pValue: '',
            text: '上海'
        }, {
            value: 12,
            pValue: '',
            text: '江苏'
        }, {
            value: 13,
            pValue: '',
            text: '浙江'
        }, {
            value: 14,
            pValue: '',
            text: '北京'
        }, {
            value: 15,
            pValue: '',
            text: '四川'
        }, {
            value: 121,
            pValue: 12,
            text: '南京'
        }, {
            value: 122,
            pValue: 12,
            text: '苏州'
        }, {
            value: 123,
            pValue: 12,
            text: '南通'
        }, {
            value: 131,
            pValue: 13,
            text: '杭州'
        }, {
            value: 132,
            pValue: 13,
            text: '宁波'
        }, {
            value: 133,
            pValue: 13,
            text: '温州'
        }, {
            value: 134,
            pValue: 13,
            text: '嘉兴'
        }, {
            value: 135,
            pValue: 13,
            text: '舟山'
        }, {
            value: 136,
            pValue: 13,
            text: '台州'
        }, {
            value: 137,
            pValue: 13,
            text: '湖州'
        }, {
            value: 151,
            pValue: 15,
            text: '成都'
        }, {
            value: 152,
            pValue: 15,
            text: '乐山'
        }, {
            value: 153,
            pValue: 15,
            text: '广元'
        }, {
            value: 154,
            pValue: 15,
            text: '南充'
        }, {
            value: 155,
            pValue: 15,
            text: '德阳'
        }, {
            value: 156,
            pValue: 15,
            text: '绵阳'
        }, {
            value: 157,
            pValue: 15,
            text: '眉山'
        }, {
            value: 158,
            pValue: 15,
            text: '宜宾'
        }, {
            value: 1311,
            pValue: 131,
            text: '余杭区'
        }, {
            value: 1312,
            pValue: 131,
            text: '西湖区'
        }, {
            value: 1313,
            pValue: 131,
            text: '上城区'
        }, {
            value: 1314,
            pValue: 131,
            text: '下城区'
        }, {
            value: 1315,
            pValue: 131,
            text: '江干区'
        }, {
            value: 1316,
            pValue: 131,
            text: '拱墅区'
        }, {
            value: 1317,
            pValue: 131,
            text: '萧山区'
        }, {
            value: 1318,
            pValue: 131,
            text: '滨江区'
        }, {
            value: 1319,
            pValue: 131,
            text: '富阳市'
        }, {
            value: 1371,
            pValue: 137,
            text: '吴兴区'
        }, {
            value: 1372,
            pValue: 137,
            text: '安吉县'
        }, {
            value: 1373,
            pValue: 137,
            text: '长兴区'
        }, {
            value: 1374,
            pValue: 137,
            text: '德清县'
        }, {
            value: 1375,
            pValue: 137,
            text: '南浔区'
        }]

        this.updater.digest({
            list,
            selected: ''
        });
    }
});