import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@trigger.html',
    init(e) {

    },
    render() {
        this.updater.digest();
    }
});