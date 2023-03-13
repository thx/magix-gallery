import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@14.html',
    render() {
        let list = [{
            text: '消耗', value: 1, pValue: 's1', tip: '消耗提示文案'
        }, {
            text: '展现量', value: 2, pValue: 's1', default: true,
        }, {
            text: '点击量', value: 3, pValue: 's1', default: true,
        }, {
            text: '点击率', value: 4, pValue: 's1',
        }, {
            text: '平均点击单价', value: 5, pValue: 's1', tip: '平均点击单价提示文案'
        }, {
            text: '点击转化率', value: 6, pValue: 'a2',
        }, {
            text: '成交笔数', value: 7, pValue: 'a2',
        }, {
            text: '平均停留时长', value: 8, pValue: 'a2', tip: '淘积木页面平均停留时长提示文案',
        }, {
            text: '投资回报率', value: 9, pValue: 'a2',
        }, {
            text: '访问页面数', value: 10, pValue: 'a2',
        }];

        let parents = [{
            text: '淘积木互动', value: 's1', tip: '提示信息',
        }, {
            text: '粉丝获取', value: 'a2',
        }];

        let map = {};
        list.forEach(item => {
            map[item.value] = item.text;
        })

        this.updater.digest({
            parents,
            list,
            selected: [1, 2, 10, 9],
            map,
        });
    },
    'change<change>'(e) {
        // e.selected：用户选择的指标
        this.updater.digest({
            selected: e.selected,
        });
    }
});