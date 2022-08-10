import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@menu.less');

export default View.extend({
    tmpl: '@menu-pop.html',
    init(extra) {
        this.viewOptions = extra;
        this.updater.set(extra.data);
    },
    render() {
        this.updater.digest();

        let viewOptions = this.viewOptions;
        if (viewOptions.prepare) {
            viewOptions.prepare();
        }
    },
    '@{select}<click>'(e) {
        this.viewOptions.submit({
            ...(e.params || {}),
            index: this.updater.get('index'),
        });
    },
});