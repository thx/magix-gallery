import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@carousel.html',
    render() {
        this.updater.digest({
            viewId: this.id,
        });
    }
});