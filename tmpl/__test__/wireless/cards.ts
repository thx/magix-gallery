import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@cards.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});