import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@97.html',
    render() {
        let list = [{
            name: '5 ~ 7',
            code: 1,
            description: '点击量'
        }, {
            name: '17个',
            code: 2,
            description: '计划',
            subComponentList: [{
                name: '计划名称1',
                code: 21,
            }, {
                name: '计划名称2',
                code: 22,
            }, {
                name: '计划名称3',
                code: 23,
            }]
        }, {
            name: '8 ~ 18',
            code: 3,
            description: '展现量'
        }, {
            name: '超长提示文案超长提示文案超长提示文案超长提示文案',
            code: 4,
            description: '展示标题'
        }, {
            name: '不带标题信息',
            code: 5,
        }, {
            name: '不带标题超长提示文案超长提示文案超长提示文案超长提示文案',
            code: 6,
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