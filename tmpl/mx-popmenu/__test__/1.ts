import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            list: [{
                value: 1,
                text: '操作选项（id=1）'
            }, {
                value: 2,
                text: '操作选项（id=2）'
            }, {
                value: 3,
                text: '操作选项（id=3）'
            }]
        });
    },
    'select<change>'(e) {
        this.updater.digest({
            item: e.item,
        })
    }
});
