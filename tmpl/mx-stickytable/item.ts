import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@item.less');

export default View.extend({
    tmpl: '@item.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        // 分组信息
        let groups = extra.groups || [];
        for (let i = 0; i < groups.length; i++) {
            if (!groups[i].list || !groups[i].list.length) {
                groups.splice(i--, 1);
            } else {
                Magix.mix(groups[i], {
                    text: groups[i].text || '宝贝',
                })
            }
        }

        this.updater.set({
            size: +extra.size || 60,
            max: +extra.max || 4,
            groups,
            list: extra.list || [],
            preview: extra.preview + '' === 'true',
            text: extra.text || '宝贝',
            popWidth: +extra.popWidth || (groups.length > 1 ? 360 : 282),
            popPlacement: extra.popPlacement || 'bottom',
            popAlign: extra.popAlign || 'left',
        })

        // altered是否有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});