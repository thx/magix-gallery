import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@content.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        let data = extra.data || {};
        this.updater.set({
            content: data.content || ''
        })

        let altered = that.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});