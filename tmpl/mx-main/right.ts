import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@nav.less');

export default View.extend({
    tmpl: '@right.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        this.updater.set(extra.data);

        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
});