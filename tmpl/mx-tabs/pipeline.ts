import Magix from 'magix';
import Base from './index';
Magix.applyStyle('@../mx-effects/pipeline-box.less');
Magix.applyStyle('@../mx-effects/pipeline-circle.less');
Magix.applyStyle('@../mx-effects/pipeline-nav.less');

export default Base.extend({
    tmpl: '@../mx-effects/pipeline.html',
    assign(e) {
        this.updater.snapshot();

        // 整体禁用
        let disabled = (e.disabled + '' === 'true')

        let textKey = e.textKey || 'text',
            valueKey = e.valueKey || 'value';

        let list = [];
        let originList;
        try {
            originList = (new Function('return ' + e.list))();
        } catch (err) {
            originList = e.list || [];
        }
        if (e.adcList && e.adcList.length > 0) {
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
            list = e.adcList.map(item => {
                return {
                    ...item,
                    value: item.code,
                    text: item.name,
                    tip: item.description,
                    icon: item.properties?.tag,
                    disabled: item.properties?.disabled + '' === 'true',
                }
            })
        } else {
            list = (originList || []).map((item) => {
                return {
                    ...item,
                    disabled: disabled || (item.disabled + '' === 'true'),
                    text: item[textKey],
                    value: item[valueKey],
                }
            });
        }

        // 选中值，包含0的情况
        let selected = (e.selected === null || e.selected === undefined) ? (list[0]?.value || '') : e.selected;

        let mode = e.mode;
        if ([
            'box-time',  // 根据真实日期计算命中
            'box',  // 日历切换
            'circle', // 圆形（支持自定义图标）
            'dot', // 圆点切换（支持自定义图标）
            'nav' // 导航类型
        ].indexOf(mode) < 0) {
            // 默认日期样式
            mode = 'box';
        }

        // pipeline参数
        // 色值
        let color = e.colorGradient || e.color || '#FF0036';
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

        this.updater.set({
            editable: true,
            mode,
            img: e.img,
            color,
            color0: `rgba(${result.r},${result.g},${result.b}, 0)`,
            color2: `rgba(${result.r},${result.g},${result.b}, .2)`,
            color4: `rgba(${result.r},${result.g},${result.b}, .4)`,
            color6: `rgba(${result.r},${result.g},${result.b}, .6)`,
            color8: `rgba(${result.r},${result.g},${result.b}, .8)`,
            selected,
            list,
            percent,
        });

        // 双向绑定
        this['@{owner.node}'] = $('#' + this.id);
        this['@{owner.node}'].val(selected);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
});