import Magix from 'magix';
import * as View from '../mx-util/view';

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;

        // 当前数据截快照
        that.updater.snapshot();

        // 影响参数
        that.updater.set({
            checked: (extra.checked + '') === 'true',
            disabled: (extra.disabled + '') === 'true',
            indeterminate: (extra.indeterminate + '') === 'true',
            name: extra.name || '',
            value: extra.value || ''
        })

        // altered是否有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest({});
    },
    '@{change}<change>'(e) {
        this.updater.digest({
            checked: e.target.checked,
            indeterminate: false
        })
    }
});