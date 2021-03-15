import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Dialog from '../mx-dialog/index';
Magix.applyStyle('@base.less');

export default View.extend({
    tmpl: '@content.html',
    mixins: [Dialog],
    init(e) {
        this.updater.set(e.data);
    },
    render() {
        this.updater.digest();
    },
    'select<click>'(e) {
        let that = this;
        let item = e.params.item;
        let cur = that.updater.get('cur');
        if (cur.value == item.value) {
            return;
        }

        let enterCallback = () => {
            $('#' + that.id).trigger({
                type: 'change',
                status: item
            })
        }

        if (item.confirmTitle && item.confirmContent) {
            that.confirm({
                title: item.confirmTitle,
                content: item.confirmContent,
                enterCallback
            })
        } else {
            enterCallback();
        }
    }
});