import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@4.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            selected: [{
                week: 1,
                name: '周一',
                times: [2, 3, 4, 21, 22, 23]
            }, {
                week: 3,
                name: '周三',
                times: [0, 1, 2, 3, 4, 10, 11, 12]
            }]
        });
    },
    'change<change>'(e) {
        this.updater.digest({
            selected: e.selected
        })
    }
});