import Magix from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@index.less');

export default Base.extend({
    tmpl: '@16.html',
    render() {
        this.updater.digest({
            active: false,
        });
    },
    'toggle<click>'(e) {
        this.updater.digest({
            active: !this.updater.get('active'),
        });
    }
});