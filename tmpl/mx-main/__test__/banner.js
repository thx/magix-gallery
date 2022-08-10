import Magix from 'magix';
import * as Form from '../../mx-form/index';
import * as Validator from '../../mx-form/validator';

export default Magix.View.extend({
    tmpl: '@banner.html',
    mixins: [Form, Validator],
    init(extra) {
        // extra.info：当前步骤完整信息
    },
    render() {
        this.updater.digest({
            int: ''
        });
    },
    /**
     * 子view实现该方法
     */
    check() {
        return new Promise((resolve) => {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: true,
                remain: {}
            })
        })
    }
});