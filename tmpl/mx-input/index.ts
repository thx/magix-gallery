/**
 * 涉及规范 https://aone.alibaba-inc.com/req/33590073
 */
import Magix from 'magix';
import * as View from '../mx-util/view';

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        this.updater.set({
            value: extra.value || '',
            width: extra.width,
            placeholder: extra.placeholder,
            autocomplete: extra.autocomplete,
            search: (extra.search + '' === 'true')
        });

        // altered是否有变化
        // true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{fire}<keyup,change,focusout>']();
    },

    /**
     * 双向绑定处理
     */
    '@{fire}<keyup,change,focusout>'(e) {
        let node = document.getElementById(`${this.id}_input`);
        document.getElementById(`${this.id}`).value = node.value;
    }
});
