import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@item.less');

export default View.extend({
    tmpl: '@item.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        // 影响参数
        this.updater.set({
            size: +extra.size || 60,
            max: +extra.max || 4,
            list: extra.list || [],
            preview: extra.preview + '' === 'true',
            text: extra.text || '宝贝',
        })

        // altered是否有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});