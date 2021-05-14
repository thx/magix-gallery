let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@7.html',
    mixins: [Form, Validator],
    render() {
        let list = [{
            id: 11,
            pId: '',
            name: '上海'
        }, {
            id: 12,
            pId: '',
            name: '江苏'
        }, {
            id: 13,
            pId: '',
            name: '浙江'
        }, {
            id: 14,
            pId: '',
            name: '北京'
        }, {
            id: 15,
            pId: '',
            name: '四川'
        }, {
            id: 121,
            pId: 12,
            name: '南京'
        }, {
            id: 122,
            pId: 12,
            name: '苏州'
        }, {
            id: 123,
            pId: 12,
            name: '南通'
        }, {
            id: 131,
            pId: 13,
            name: '杭州'
        }, {
            id: 132,
            pId: 13,
            name: '宁波'
        }, {
            id: 133,
            pId: 13,
            name: '温州'
        }, {
            id: 134,
            pId: 13,
            name: '嘉兴'
        }, {
            id: 135,
            pId: 13,
            name: '舟山'
        }, {
            id: 136,
            pId: 13,
            name: '台州'
        }, {
            id: 137,
            pId: 13,
            name: '湖州'
        }, {
            id: 151,
            pId: 15,
            name: '成都'
        }, {
            id: 152,
            pId: 15,
            name: '乐山'
        }, {
            id: 153,
            pId: 15,
            name: '广元'
        }, {
            id: 154,
            pId: 15,
            name: '南充'
        }, {
            id: 155,
            pId: 15,
            name: '德阳'
        }, {
            id: 156,
            pId: 15,
            name: '绵阳'
        }, {
            id: 157,
            pId: 15,
            name: '眉山'
        }, {
            id: 158,
            pId: 15,
            name: '宜宾'
        }, {
            id: 1311,
            pId: 131,
            name: '余杭区'
        }, {
            id: 1312,
            pId: 131,
            name: '西湖区'
        }, {
            id: 1313,
            pId: 131,
            name: '上城区'
        }, {
            id: 1314,
            pId: 131,
            name: '下城区'
        }, {
            id: 1315,
            pId: 131,
            name: '江干区'
        }, {
            id: 1316,
            pId: 131,
            name: '拱墅区'
        }, {
            id: 1317,
            pId: 131,
            name: '萧山区'
        }, {
            id: 1318,
            pId: 131,
            name: '滨江区'
        }, {
            id: 1319,
            pId: 131,
            name: '富阳市'
        }, {
            id: 1371,
            pId: 137,
            name: '吴兴区'
        }, {
            id: 1372,
            pId: 137,
            name: '安吉县'
        }, {
            id: 1373,
            pId: 137,
            name: '长兴区'
        }, {
            id: 1374,
            pId: 137,
            name: '德清县'
        }, {
            id: 1375,
            pId: 137,
            name: '南浔区'
        }]

        this.updater.digest({
            list,
            selected1: '',
            selected2: '',
        });
    }
});