import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@95.html',
    render() {
        let list = [];
        for (let i = 0; i < 10; i++) {
            list.push({
                text: `选项${i}`,
                value: i,
            })
        }
        this.updater.digest({
            list,
        });
    },
    'delete<delete>'(e) {
        // list 当前剩余完整列表
        // item 当前移除的对象
        let { list, item } = e;
        this.updater.digest({
            list,
        })
    }
});