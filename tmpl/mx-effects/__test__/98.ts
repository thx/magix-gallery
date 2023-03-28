import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@98.html',
    render() {
        let list = [{
            name: '5 ~ 7',
            id: 1,
            desc: '点击量'
        }, {
            name: '17个',
            id: 2,
            desc: '计划',
            list: [{
                name: '计划名称1',
                id: 21,
            }, {
                name: '计划名称2',
                id: 22,
            }, {
                name: '计划名称3',
                id: 23,
            }]
        }, {
            name: '8 ~ 18',
            id: 3,
            desc: '展现量'
        }, {
            name: '超长提示文案超长提示文案超长提示文案超长提示文案',
            id: 4,
            desc: '展示标题'
        }, {
            name: '不带标题信息',
            id: 5,
        }, {
            name: '不带标题超长提示文案超长提示文案超长提示文案超长提示文案',
            id: 6,
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