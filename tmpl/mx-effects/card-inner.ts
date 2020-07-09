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
    '@{btn.select}<click>'(event) {
        event.stopPropagation();

        this['@{owner.node}'].trigger({
            type: 'select',
            item: event.params.item,
            btn: event.params.btn
        });
    }
});