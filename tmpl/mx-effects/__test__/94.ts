import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@icon.less');

export default Base.extend({
    tmpl: '@94.html',
    render() {
        this.updater.digest({
            hide: true
        });
    },
    'test<click>'(e) {
        let { hide } = this.updater.get();
        this.updater.digest({
            hide: !hide
        });
    }
});