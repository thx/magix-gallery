/**
 * 标签操作组件
 */
import Magix, { Vframe } from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@tag.less');

export default View.extend({
    tmpl: '@tag.html',
    init(extra) {
        // 品牌色
        let { r, g, b } = this['@{color.to.rgb}'](this['@{get.css.var}']('--color-brand'));
        let bgColor = this['@{color.to.hex}']({ r, g, b, alpha: 0.1 });
        this.updater.set({
            bgColor,
        })

        this.assign(extra);
    },
    assign(extra, configs) {
        this['@{owner.node}'] = $('#' + this.id);
        this.updater.snapshot();

        let list = [];
        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value',
            titleKey = extra.titleKey || 'title',
            subKey = extra.subKey || 'subs';
        if (extra.adcList && extra.adcList.length > 0) {
            // adc树结构
            textKey = 'name';
            valueKey = 'code';
            titleKey = 'description';
            subKey = 'subComponentList';
            list = extra.adcList || [];
        } else {
            list = extra.list || [];
        }

        list.forEach(item => {
            let subs = item[subKey] || [];
            if (subs.length > 0) {
                Magix.mix(item, {
                    pop: `<div class="@tag.less:sub-wrapper">
                        ${subs.map(sub => {
                            return `<div class="@tag.less:sub-line">${sub[textKey]}</div>`;
                        }).join('')}
                    </div>`
                })
            }
        })

        this.updater.set({
            maxWidth: extra.maxWidth || '160px',
            list,
            textKey,
            valueKey,
            titleKey,
            subKey,
        })

        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    },
    '@{delete}<click>'(e) {
        // 关闭popover
        // try {
        //     let popNodes = this['@{owner.node}'].find('[data-pop]');
        //     if (popNodes.length) {
        //         for (let i = 0; i < popNodes.length; i++) {
        //             let popVf = Vframe.get(popNodes[i].id);
        //             if (popVf) { popVf.invoke('hide'); };
        //         }
        //     }
        // } catch (error) {

        // }
        let { item } = e.params;
        let { list, valueKey, subKey } = this.updater.get();
        let index = list.findIndex(i => i[valueKey] == item[valueKey]);
        list.splice(index, 1);
        this.updater.digest({
            list,
        });
        this['@{owner.node}'].trigger({
            type: 'delete',
            list,
            item,
        })
    },
});
