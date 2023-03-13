import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@index-footer-fixed.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        this.updater.set(extra.data);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    'change<change>'(e) {
        Magix.Router.to({
            marketScene: e.selected
        })
    },
});