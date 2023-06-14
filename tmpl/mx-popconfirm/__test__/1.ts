import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@1.less');

export default Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            index: 1
        });
    },
    'test<popconfirm>'(e) {
        let cur = e.params.text;
        this.updater.digest({
            cur
        })
    },
    'add<click>'(e) {
        let { index } = this.updater.get();
        this.updater.digest({
            index: index + 1
        })
    }
});
