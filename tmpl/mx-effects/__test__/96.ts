import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@96.html',
    render() {
        let list = [{
            text: '5 ~ 7',
            value: 1,
            title: '点击量'
        }, {
            text: '17个',
            value: 2,
            title: '计划',
            subs: [{
                text: '计划名称1',
                value: 21,
            }, {
                text: '计划名称2',
                value: 22,
            }, {
                text: '计划名称3',
                value: 23,
            }]
        }, {
            text: '8 ~ 18',
            value: 3,
            title: '展现量'
        }, {
            text: '超长提示文案超长提示文案超长提示文案超长提示文案',
            value: 4,
            title: '展示标题'
        }];
        this.updater.digest({
            list,
        });
    },
    'delete<delete>'(e) {
        let { list, item } = e;
        this.updater.digest({
            list,
        })
    }
});