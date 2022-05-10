import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@trigger.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});