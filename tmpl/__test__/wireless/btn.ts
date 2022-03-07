import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@btn.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});