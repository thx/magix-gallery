import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@sub.less');

export default View.extend({
    tmpl: '@sub.html',
    init(extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        that.updater.set(extra.data);

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