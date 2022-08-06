import Magix from 'magix';
import Base from './index';
Magix.applyStyle('@../mx-effects/pipeline-box.less');
Magix.applyStyle('@../mx-effects/pipeline-circle.less');
Magix.applyStyle('@../mx-effects/pipeline-nav.less');

export default Base.extend({
    tmpl: '@pipeline.html',
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
            //     }
            // }
            list = extra.adcList.map(item => {
                return {
                    ...item,
                    value: item.code,
                    text: item.name,
                    tip: item.description,
                    tag: item.properties?.tag,
                    disabled: item.properties?.disabled + '' === 'true',
                }
            })
        } else {
            list = (originList || []).map((item) => {
                return {
                    ...item,
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

        that.updater.set({
            ...extra, // 原样参数赋值
            editable: true,
            color,
            color0: `rgba(${result.r},${result.g},${result.b}, 0)`,
            color2: `rgba(${result.r},${result.g},${result.b}, .2)`,
            color4: `rgba(${result.r},${result.g},${result.b}, .4)`,
            color6: `rgba(${result.r},${result.g},${result.b}, .6)`,
            color8: `rgba(${result.r},${result.g},${result.b}, .8)`,
            percent,
            selectedIndex,
            mode,
            list,
            selected,
        });

        // 双向绑定
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },
});