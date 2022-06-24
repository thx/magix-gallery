/**
 * 盒状分组
 */
import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@box.less');

export default View.extend({
    tmpl: '@box.html',
    init(extra) {
        this.assign(extra);
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
        //   shadow 阴影效果的
        let mode = extra.mode || 'spliter';
        if (['shadow', 'spliter', 'vertical'].indexOf(mode) < 0) {
            mode = 'spliter';
        }

        that.updater.set({
            mode,
            disabled,
            list,
            selected,
        });

        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    '@{select}<click>'(e) {
        this['@{select}'](e.params.item);
    },

    '@{select}'(item) {
        let that = this;
        let { selected } = that.updater.get();
        if (selected == item.value || item.disabled) {
            return;
        }

        let event = $.Event('change', {
            item: item,
            value: item.value,
            text: item.text,
            selected: item.value
        });
        that['@{owner.node}'].trigger(event);
        if (!event.isDefaultPrevented()) {
            // 支持外部同步校验，event.preventDefault()
            that['@{owner.node}'].val(item.value);
            that.updater.digest({
                selected: item.value,
                hover: item.value,
            })
        }
    }
});