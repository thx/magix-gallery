import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as Dialog from '../mx-dialog/index';

export default View.extend({
    tmpl: '@content.html',
    mixins: [Dialog],
    init(e) {
        this.viewOptions = e;

        let data = e.data || {};
        this.updater.set({
            list: data.list,
            spm: data.spm || '',
        })
    },
    render() {
        this.updater.digest();
    },
    async 'submit<click>'(e) {
        let item = e.params.item;
        if (this['@{confirming}']) {
            return;
        }

        // 二次确认
        let confirmed = true;
        this['@{confirming}'] = true;
        if ((item.confirmTitle && item.confirmContent)
            || (item.properties?.confirmTitle && item.properties?.confirmContent)) {
            let target = $(e.eventTarget);
            confirmed = await this.confirm({
                title: item.confirmTitle || item.properties?.confirmTitle,
                content: item.confirmContent || item.properties?.confirmContent,
            }, {
                width: 320,
                type: 'warn',
                target,
                offset: {
                    left: (target.outerWidth() + 128),
                    top: 0 - target.outerHeight() - 8,
                },
                asyncCallback: true // 已异步回调的方式响应
            });
        }
        this['@{confirming}'] = false;

        if (confirmed) {
            let viewOptions = this.viewOptions;
            if (viewOptions.submit) {
                viewOptions.submit(item.value);
            }
        }
    }
});