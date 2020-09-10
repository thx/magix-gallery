import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@content.html',
    init(e) {
        let data = e.data || {};
        this.updater.set({
            content: data.content || ''
        })
    },
    render() {
        this.updater.digest({});
    }
});