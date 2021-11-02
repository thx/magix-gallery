import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@result.less');

export default View.extend({
    tmpl: '@result.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        this.updater.set({

        });

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },
    render() {
        let that = this;
        that.updater.digest();
    },
});
