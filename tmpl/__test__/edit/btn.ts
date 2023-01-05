import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@btn.html',
    init(e) {

    },
    render() {
        this.updater.digest();
    }
});