import Magix from 'magix';
import * as Base from '__test__/example';

export default Base.extend({
    tmpl: '@index-dynamic-inner4.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();
        this.viewOptions = extra;

        // set影响当前view的参数，影响参数有改动才重新render
        // 深拷贝防止数据覆盖
        let data = JSON.parse(JSON.stringify(extra.info.data));
        let selected = this.updater.get('selected') || {
            [this.id]: '',
        };
        if (data[this.id]) {
            Magix.mix(selected, {
                [this.id]: data[this.id],
            })
        }
        this.updater.set({
            selected,
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    /**
     * 子view实现该方法
     */
    check() {
        let that = this;
        return new Promise((resolve) => {
            let info = that.viewOptions.info;
            let { selected } = that.updater.get();
            resolve({
                ok: that.isValid(),
                msg: `请先填写${info.label}信息`,
                remain: selected,
            })
        })
    }
});