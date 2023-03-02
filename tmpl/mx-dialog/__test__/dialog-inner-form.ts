import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@dialog-inner-form.html',
    init(e) {
        this.viewOptions = e;

        this.updater.set({
            content: e.content,
            name: ''
        })
    },
    render() {
        this.updater.digest();
    },
    check() {
        let that = this;
        return new Promise((resolve) => {
            resolve({
                ok: that.isValid(),
                data: {},
                msg: '请按照要求填写信息再提交'
            })
        })
    }

});
