import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest();
    },
    'select<change>'(e) {
        let index = e.params.index;
        this.updater.digest({
            [`item${index}`]: e.item,
        })
    }
});
