import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@class.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});