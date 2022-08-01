import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@content.html',
    init(extra) {
        this.viewOptions = extra;
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        this.updater.set(extra.data);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();

        let viewOptions = this.viewOptions;
        if (viewOptions.prepare) {
            viewOptions.prepare();
        }
    },

    /**
     * 单选
     */
    '@{select}<click>'(e) {
        e.stopPropagation();

        let { searchValue } = this.updater.get();
        let viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit({
                searchValue,
                searchKey: e.params.item.value,
            });
        }
    },
});

