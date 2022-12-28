import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@5.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            groups: [{
                text: '周一至周三',
                value: 123,
            }, {
                text: '周四至周五',
                value: 45,
            }, {
                text: '周六',
                value: 6,
            }, {
                text: '周日',
                value: 7,
            }],
            selected: [{
                week: 1,
                name: '周一',
                times: [3, 4, 5]
            }, {
                week: 2,
                name: '周二',
                times: [3, 4, 5]
            }, {
                week: 3,
                name: '周三',
                times: [3, 4, 5]
            }, {
                week: 4,
                name: '周四',
                times: [3, 4, 5]
            }, {
                week: 5,
                name: '周五',
                times: [3, 4, 5]
            }, {
                week: 6,
                name: '周六',
                times: [3, 4, 5]
            }, {
                week: 7,
                name: '周日',
                times: [3, 4, 5]
            }]
        });
    }
});