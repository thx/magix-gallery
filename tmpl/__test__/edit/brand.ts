import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@base.html',
    init(e) {

    },
    render() {
        this.updater.digest();
    }
});