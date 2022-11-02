import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@base.less');

export default View.extend({
    tmpl: '@base.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        let content = extra.content || '';
        let tip = extra.tip || '';
        this.updater.set({
            content,
            tip,
        })

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    }
});