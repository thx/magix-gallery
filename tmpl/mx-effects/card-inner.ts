import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@card.less');

export default View.extend({
    tmpl: '@card-inner.html',
    init(e) {
        this.assign(e);
    },
    assign(e) {
        let that = this;
        that.updater.snapshot();

        that.updater.set({
            item: e.item,
            spm: e.spm,
        });
        that['@{owner.node}'] = $(`#${that.id}`);

        let altered = that.updater.altered();
        return altered;
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
    },

    /**
     * 多链接点击单个链接
     */
    '@{stop}<click>'(e) {
        e.stopPropagation();
    },
});