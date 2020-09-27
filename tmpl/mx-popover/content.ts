import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@content.html',
    init(e) {
        this.updater.set(e.data);
    },
    render() {
        this.updater.digest({});
    }
});