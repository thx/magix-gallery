import Magix from 'magix';

export default Magix.View.extend({
    tmpl: '@content.html',
    init(e) {
        this.viewOptions = e;

        let data = e.data || {};
        this.updater.set({
            menus: data.menus,
            spm: data.spm || '',
        })
    },
    render() {
        this.updater.digest();
    },
    'submit<click>'(e) {
        let viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit(e.params.value);
        }
    }
});