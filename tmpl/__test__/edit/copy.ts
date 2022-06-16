import Magix from 'magix';
Magix.applyStyle('@copy.less');

export default Magix.View.extend({
    tmpl: '@copy.html',
    init(options) {
        let { list } = options;

        let enabledList = [], disabledList = [];
        list.forEach(g => {
            g.subs.forEach(({ key, value, disabled }) => {
                // 只复制非禁用的参数
                if (disabled) {
                    disabledList.push(`${key}: ${value};`);
                } else {
                    enabledList.push(`${key}: ${value};`);
                }
            })
        })

        this.updater.set({
            viewId: this.id,
            disabledList: disabledList.join('<br />'),
            enabledList: enabledList.join('<br />'),
        })
    },
    render() {
        this.updater.digest();
    },
    'done<success>'(e) {
        let index = e.params.index;
        this.updater.digest({
            [`success${index}`]: true
        })
    }
});