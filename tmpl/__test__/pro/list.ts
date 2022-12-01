import Magix, { Router } from 'magix';

export default Magix.View.extend({
    tmpl: '@list.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});