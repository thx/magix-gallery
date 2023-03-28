import Magix, { Vframe } from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@tag.less');

export default View.extend({
    tmpl: '@tag-pop.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        this.updater.snapshot();

        // 影响参数
        this.updater.set(JSON.parse(JSON.stringify(extra.data)));

        // altered是否有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    '@{delete.all}<click>'(event) {
        let { ownerId, item } = this.updater.get();
        let popVf = Vframe.get(ownerId);
        popVf.invoke('@{delete}<click>', [{
            params: {
                item,
            }
        }])
    },
    '@{delete}<click>'(event) {
        let { ownerId, item, valueKey, subKey } = this.updater.get();
        let { sub } = event.params;
        let subIndex = item[subKey].findIndex(s => s[valueKey] == sub[valueKey]);
        item[subKey].splice(subIndex, 1);
        this.updater.digest({
            item,
        })

        let popVf = Vframe.get(ownerId);
        popVf.invoke('@{delete}<click>', [{
            params: {
                item,
                sub,
            }
        }])
    }
});