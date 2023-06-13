import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@3.html',
    render() {
        this.updater.digest();
    },
    'select<change>'(e) {
        this.updater.digest({
            item: e.item,
        })
    }
});
