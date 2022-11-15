import Magix from 'magix';
import * as $ from '$';
Magix.applyStyle('@fontsize.less');

export default Magix.View.extend({
    tmpl: '@fontsize.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        this.updater.set(extra);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest({
            state: true,
        });

        document.body.style.setProperty('--mx-table-font-size', 'calc(var(--font-size) + 2px)');
    },
    'toggle<change>'(e) {
        if (e.state) {
            document.body.style.setProperty('--mx-table-font-size', 'calc(var(--font-size) + 2px)');
        } else {
            document.body.style.setProperty('--mx-table-font-size', 'var(--font-size)');
        }
    }
});