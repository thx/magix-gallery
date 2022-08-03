/**
 * 底边线tab切换
 */
import Magix, { Vframe } from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        // 整体禁用
        let disabled = (extra.disabled + '' === 'true')

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
                    link: item.properties?.link,
                }
            })
        } else {
            list = (originList || []).map((item) => {
                return {
                    ...item,
                    tip: item.tips || item.tip || '', // 提示：兼容tips和tip
                    disabled: disabled || (item.disabled + '' === 'true'),
                    text: item[textKey],
                    value: item[valueKey]
                }
            });
        }

        // 选中值，包含0的情况
        let selected = (extra.selected === null || extra.selected === undefined) ? (list[0]?.value || '') : extra.selected;

        // 展示类型
        //    shrink 底边线收缩
        //    edit 可编辑样式
        let mode = extra.mode, allowModeMap = { shrink: true, edit: true };
        if (!allowModeMap[mode]) {
            mode = 'shrink';
        }

        // mode=edit时参数，是否支持编辑，默认true
        let editable = (mode == 'edit' && extra.editable + '' !== 'false');

        // pipeline参数
        // 色值
        let color = extra.colorGradient || extra.color || '#FF0036';
        let result = this['@{color.to.rgb}'](color);
        let selectedIndex = -1;
        for (let i = 0; i < list.length; i++) {
            if (list[i].value == selected) {
                selectedIndex = i;
                break;
            }
        }
        let percent = 0;
        if (selectedIndex >= 0) {
            percent = (100 / list.length) * (selectedIndex + 0.5);
        }
        let pipelineDate = {
            color,
            color0: `rgba(${result.r},${result.g},${result.b}, 0)`,
            color2: `rgba(${result.r},${result.g},${result.b}, .2)`,
            color4: `rgba(${result.r},${result.g},${result.b}, .4)`,
            color6: `rgba(${result.r},${result.g},${result.b}, .6)`,
            color8: `rgba(${result.r},${result.g},${result.b}, .8)`,
            percent,
            selectedIndex,
        }


        that.updater.set({
            ...extra, // 原样参数赋值
            ...pipelineDate,
            mode,
            list,
            selected,
            editable,
            scrollable: false,
        });

        // 双向绑定
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();

        // 判断是否出现滚动条
        let inner = document.querySelector(`#${this.id} .@index.less:inner`);
        if (inner && (inner.scrollWidth > inner.clientWidth)) {
            this.updater.digest({
                scrollable: true,
            })
            this['@{scroll.into.view}']();
        }
    },

    '@{remove}<click>'(e) {
        // 阻断@{select}
        e.stopPropagation();
        let that = this;
        let { selected, list } = that.updater.get();
        let index = e.params.index;
        let item = list[index];

        // 移除当前项
        list.splice(index, 1);

        if (selected == item.value) {
            // 当移除当前选中项时，更新到第一个
            that['@{select}'](list[0]);
        } else {
            // list更新了，强制change
            let item = {};
            for (let i = 0; i < list.length; i++) {
                if (list[i].value == selected) {
                    item = list[i];
                    break;
                }
            }
            that['@{select}'](item, true);
        }
    },

    '@{add}<click>'(e) {
        let { list } = this.updater.get();
        this['@{owner.node}'].trigger($.Event('add', {
            list,
        }));
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

    /**
     * 水平滚动到可视范围内
     */
    '@{scroll.into.view}'() {
        try {
            let inner = document.querySelector(`#${this.id} .@index.less:inner`),
                selectedItem = document.querySelector(`#${this.id} .@index.less:selected`);
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

    '@{select}<click>'(e) {
        let item = e.params.item;
        if (item.disabled) {
            return;
        }
        this['@{select}'](item);
    },

    '@{select}'(item, force) {
        let that = this;

        // 兼容编辑场景list删空
        item = item || {};
        let value = (item.value === null || item.value === undefined) ? '' : item.value;

        let { selected, list } = that.updater.get();
        if (!force && (selected == value)) {
            return;
        }

        let event = $.Event('change', {
            list, // 可编辑状态下，list会变更，此处也返回
            item,
            value,
            text: item.text,
            selected: value
        });
        that['@{owner.node}'].trigger(event);
        if (!event.isDefaultPrevented()) {
            // 支持外部同步校验，event.preventDefault()
            that['@{owner.node}'].val(value);
            that.updater.digest({
                list,
                selected: value,
                hover: value
            })
        }
    }
});