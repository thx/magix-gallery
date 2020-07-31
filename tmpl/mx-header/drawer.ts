import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@drawer.less');

export default View.extend({
    tmpl: '@drawer.html',
    init(extra) {
        this.updater.set(extra.data);
    },
    render() {
        this.updater.digest();
    }
});