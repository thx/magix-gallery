import Magix from 'magix';
import * as $ from '$';
Magix.applyStyle('@card.less');

export default Magix.View.extend({
    tmpl: '@card-inner.html',
    init(e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign(e) {
        let that = this;
        let altered = that.updater.altered();
        that.updater.set({
            item: e.item,
            innerData: e.innerData,
            spm: e.spm
        });
        that['@{owner.node}'] = $(`#${that.id}`);

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render() {
        this.updater.digest();
    },
    '@{btn.select}<click>'(e) {
        e.preventDefault();
        e.stopPropagation();
        this['@{owner.node}'].trigger({
            type: 'select',
            item: e.params.item,
            btn: e.params.btn
        });
    }
});