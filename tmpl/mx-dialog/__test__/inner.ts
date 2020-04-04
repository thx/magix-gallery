import Magix from 'magix';
import * as Dialog from '../index';

export default Magix.View.extend({
    tmpl: '@inner.html',
    mixins: [Dialog],
    init(e) {
        this.viewOptions = e;
    },
    render() {
        this.updater.digest();
    },
    'cancel<click>'(event) {
        event.preventDefault();
        let viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
}, {
        dialogOptions: {
            top: 0,
            width: 800
        }
    });
