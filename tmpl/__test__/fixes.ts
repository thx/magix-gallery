import Magix from 'magix';
Magix.applyStyle('@fixes.less');

export default Magix.View.extend({
    tmpl: '@fixes.html',
    render() {
        this.updater.digest();
    },
    'back<click>'(e) {
        window.scrollTo(0, 0);
    },
});