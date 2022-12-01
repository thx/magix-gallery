import Magix, { Router } from 'magix';

export default Magix.View.extend({
    tmpl: '@loading.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});