import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@footer.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});