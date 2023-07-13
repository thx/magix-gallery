import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        this.updater.set({
            img: extra.img,
            content: extra.content,
            tip: extra.tip,
        })

        return this.updater.altered();
    },
    render() {
        this.updater.digest();
    }
});