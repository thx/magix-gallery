import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@item-info.less');

export default View.extend({
    tmpl: '@item-info.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        // 影响参数
        this.updater.set(extra.data);

        // altered是否有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});