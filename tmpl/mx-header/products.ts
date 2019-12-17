import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@products.less');

export default View.extend({
    tmpl: '@products.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        that.updater.set({
            list: extra.data
        });

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        this.updater.digest();
    }
});