import Magix, { Router } from 'magix';
Magix.applyStyle('@list.less');

export default Magix.View.extend({
    tmpl: '@list.html',
    render() {
        this.updater.digest({
            viewId: this.id,
        });
    },
});