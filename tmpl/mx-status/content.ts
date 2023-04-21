import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Dialog from '../mx-dialog/index';
Magix.applyStyle('@base.less');

export default View.extend({
    tmpl: '@content.html',
    mixins: [Dialog],
    init(extra) {
        let that = this;
        this.assign(extra);

        that.owner.oncreated = () => {
            if (!that.$init) {
                let viewOptions = that.viewOptions;
                if (viewOptions.prepare) {
                    viewOptions.prepare();
                }
                that.$init = 1;
            }
        };
        that.ondestroy = () => {
            that.owner.off('created');
        };
    },
    assign(extra) {
        this.viewOptions = extra;
        this.updater.snapshot();

        this.updater.set(extra.data);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    async 'select<click>'(e) {
        let that = this;
        let item = e.params.item;
        let cur = that.updater.get('cur');
        if (cur.value == item.value) {
            return;
        }

        // 二次确认
        let confirmed = true;
        if (item.confirmTitle && item.confirmContent) {
            confirmed = await that.confirm({
                title: item.confirmTitle,
                content: item.confirmContent,
            }, {
                asyncCallback: true // 已异步回调的方式响应
            })
        }

        if (confirmed) {
            $('#' + that.id).trigger({
                type: 'change',
                status: item
            })
        }
    }
});