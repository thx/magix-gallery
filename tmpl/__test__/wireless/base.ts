import Magix from 'magix';
import * as $ from '$';
Magix.applyStyle('@base.less');

export default Magix.View.extend({
    init() {
        this.updater.set({
            viewId: this.id
        });
        $('#app').addClass('@base.less:min-width-0');
        this.on('destroy', () => {
            $('#app').removeClass('@base.less:min-width-0');
        })
    },
    render() {
        this.updater.digest();
    }
});