import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@reset.html',
    init(e) {
        this.viewOptions = e;
        this.updater.set({
            list: e.list,
            selected: e.selected,
        })
    },
    render() {
        this.updater.digest();
    },
    'change<change>'(e) {
        let { selected, list } = this.updater.get();
        let dialog = this.viewOptions.dialog;
        dialog.reset(list[(+selected - 1)].dialogOptions);
    },
    check() {
        let that = this;
        return new Promise((resolve) => {
            resolve({
                ok: that.isValid(),
                data: {
                    a: 'xxx',
                },
                msg: '请按照要求填写信息再提交'
            })
        })
    }

});
