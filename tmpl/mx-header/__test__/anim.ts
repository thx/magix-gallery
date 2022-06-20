import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@anim.html',
    render() {
        this.updater.digest();
    },
});