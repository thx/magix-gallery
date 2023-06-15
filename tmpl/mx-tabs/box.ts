/**
 * 盒状分组
 */
import Magix, { Vframe } from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@box.less');

export default View.extend({
    tmpl: '@box.html',
    init(extra) {
        this.assign(extra);

        this.owner.oncreated = () => {
            if (!this['$init']) {
                // 所有子view加载完成后（防止打标异步加载）
                this['$init'] = true;
                this['@{cal.shadow}']();
            }
        };
        this.ondestroy = () => {
            this.owner.off('created');
        };
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (extra.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');

        let textKey = extra.textKey || 'text',
            valueKey = extra.valueKey || 'value';

        let list = [];
        let originList;
        try {
            originList = (new Function('return ' + extra.list))();
        } catch (e) {
            originList = extra.list || [];
        }
        if (extra.adcList && extra.adcList.length > 0) {
            // adc树结构
            // {
            //     code: "对应value",
            //     name: "对应text",
            //     description: "提示信息，对应tip",
            //     properties: {
            //         disabled: "是否禁用",
            //         tag: "打标",
            //         tagColor: "打标颜色",
            //         link: "外链地址",
            //     }
            // }
            list = extra.adcList.map(item => {
                return {
                    ...item,
                    value: item.code,
                    text: item.name,
                    tip: item.description,
                    tag: item.properties?.tag,
                    color: item.properties?.tagColor,
                    disabled: item.properties?.disabled + '' === 'true',
                }
            })
        } else {
            list = (originList || []).map((item) => {
                return {
                    ...item,
                    disabled: disabled || (item.disabled + '' === 'true'),
                    tip: item.tips || item.tip || '', // 提示：兼容tips和tip
                    color: item.color || '',
                    text: item[textKey],
                    value: item[valueKey]
                }
            });
        }

        let selected = extra.selected || (list[0] || {})['value'];

        // box 类型
        //   spliter 分割线
        //   white 分割线反白版本
        //   shadow 阴影效果的
        //   discrete 离散点
        let mode = extra.mode;
        if (['shadow', 'spliter', 'vertical', 'discrete', 'white'].indexOf(mode) < 0) {
            mode = 'spliter';
        }

        // 最小宽度
        let reg = /^[0-9]*$/;
        let minWidth = reg.test(extra.minWidth) ? (extra.minWidth + 'px') : extra.minWidth;

        that.updater.set({
            minWidth,
            mode,
            disabled,
            list,
            selected,
            ellipsis: extra.ellipsis + '' === 'true',
            scrollable: false,
        });

        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
        this['@{cal.shadow}']();

        // 判断是否出现滚动条
        let inner = document.querySelector(`#${this.id} .@box.less:ellipsis-inner`);
        if (inner && (inner.scrollWidth > inner.clientWidth)) {
            this.updater.digest({
                scrollable: true,
            })
            this['@{scroll.into.view}']();
        }
    },

    /**
    * 水平滚动到可视范围内
    */
    '@{scroll.into.view}'() {
        try {
            let inner = document.querySelector(`#${this.id} .@box.less:ellipsis-inner`),
                selectedItem = document.querySelector(`#${this.id} .@box.less:selected`);
            let { left: il, width: iw } = inner.getBoundingClientRect(),
                { left: sl, width: sw } = selectedItem.getBoundingClientRect(),
                scrollLeft = inner.scrollLeft;
            let gap = sl - il;
            if (gap > iw || (gap + sw > iw)) {
                inner.scrollTo({
                    left: scrollLeft + (gap - iw) + sw + 24,
                    behavior: 'smooth',
                });
            } else if (gap < 0) {
                inner.scrollTo({
                    left: scrollLeft + gap - 24,
                    behavior: 'smooth',
                });
            } else {
                // 可见范围内
            }
        } catch (error) {

        }
    },

    '@{cal.shadow}'(e) {
        let { selected, list, mode } = this.updater.get();
        if (mode == 'shadow') {
            let index = -1;
            for (let i = 0; i < list.length; i++) {
                if (list[i].value == selected) {
                    index = i;
                    break;
                }
            }

            let selectedItem = $(`#${this.id} [data-index="${index}"]`);
            let parentItem = selectedItem.parent();
            if (index >= 0 && selectedItem.length) {
                this.updater.digest({
                    shadowLeft: selectedItem.offset().left - parentItem.offset().left + parentItem.scrollLeft(),
                    shadowTop: selectedItem.offset().top - parentItem.offset().top + parentItem.scrollTop(),
                    shadowWidth: selectedItem[0].clientWidth,
                })
            }
        }
    },

    '@{select}<click>'(e) {
        this['@{select}'](e.params.item);
    },

    '@{select}<select>'(e) {
        this['@{select}'](e.item);

        //  关闭popover
        let popNode = document.querySelector(`[data-pop="${this.id}_line"]`);
        if (popNode && popNode.id) {
            let popVf = Vframe.get(popNode.id);
            if (popVf) { popVf.invoke('hide'); };
        }

        this['@{scroll.into.view}']();
    },

    '@{select}'(item) {
        let that = this;
        let { selected } = that.updater.get();
        if (selected == item.value || item.disabled) {
            return;
        }

        let d = {
            item: item,
            value: item.value,
            text: item.text,
            selected: item.value
        };
        let mxcResult = that['@{get.mxc.vars}'](that['@{owner.node}'], d);
        Magix.mix(d, mxcResult);
        let event = $.Event('change', d);
        that['@{owner.node}'].trigger(event);
        if (!event.isDefaultPrevented()) {
            // 支持外部同步校验，event.preventDefault()
            that['@{owner.node}'].val(item.value);
            that.updater.digest({
                selected: item.value,
                hover: item.value,
            })
            this['@{cal.shadow}']();
        }
    }
});