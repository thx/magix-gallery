import Magix from 'magix';
import * as View from '../mx-util/view';
import * as Dialog from '../mx-dialog/index';
Magix.applyStyle('@drawer.less');

export default View.extend({
    tmpl: '@drawer.html',
    mixins: [Dialog],
    init(extra) {
        this.updater.set(extra.data);
    },
    render() {
        this.updater.digest({
            height: window.innerHeight
        });
    },
    /**
     * bizCode：各产品bizCode，用于包装登陆框逻辑
     * loginView：已废弃，用bizCode替换，根据bizCode项目包装登陆框逻辑（历史逻辑依然兼容）
     */
    'showLogin<click>'(e) {
        let { bizCode, loginView } = this.updater.get();
        if (!bizCode) {
            this.mxLoginView(loginView);
        } else {
            this.mxLoginView({
                bizCode
            });
        }
    }
});