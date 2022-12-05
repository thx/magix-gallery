import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        // 可操作列表
        let list = extra.list || [];

        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value',
            parentKey = extra.parentKey || 'pValue';

        this.updater.set({
            list,
            textKey,
            valueKey,
            parentKey,
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
