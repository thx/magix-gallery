/**
 * 打标组件
 */
import Magix, { Vframe } from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@tab.less');

export default View.extend({
    tmpl: '@tab.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra, configs) {
        this['@{owner.node}'] = $('#' + this.id);
        this.updater.snapshot();

        let list = [];
        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value',
            iconKey = extra.iconKey || 'icon';
        if (extra.adcList && extra.adcList.length > 0) {
            // adc树结构
            textKey = 'text';
            valueKey = 'value';
            iconKey = 'icon';
            list = (extra.adcList || []).map(item => {
                return {
                    ...item,
                    [textKey]: item.name,
                    [valueKey]: item.code,
                    [iconKey]: item.properties?.icon,
                }
            });
        } else {
            list = extra.list || [];
        }

        let map = Magix.toMap(list, valueKey);
        let selected = extra.selected;
        if (!map[selected]) {
            selected = list[0]?.[valueKey];
        }

        this.updater.set({
            list,
            selected,
            textKey,
            valueKey,
            iconKey,
        })

        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    '@{toggle}<click>'(e) {
        let that = this;
        let { list, selected: oldSelected, valueKey } = this.updater.get();
        let cur;
        for (let i = 0; i < list.length; i++) {
            if (list[i][valueKey] == oldSelected) {
                cur = i;
            }
        }

        let item = list[cur == 1 ? 0 : 1];
        let selected = item[valueKey];
        let event = $.Event('change', {
            item,
            selected,
        });
        that['@{owner.node}'].trigger(event);
        if (!event.isDefaultPrevented()) {
            // 支持外部同步校验，event.preventDefault()
            that['@{owner.node}'].val(selected);
            that.updater.digest({
                selected,
            });
        }
    }
});
