import Magix, { Vframe } from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@pipeline-box.less');
Magix.applyStyle('@pipeline-circle.less');
Magix.applyStyle('@pipeline-nav.less');

export default View.extend({
    tmpl: '@pipeline.html',
    init(extra) {
        this.assign(extra);
    },
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
            //         tip: '标题旁小问号提示'
            //         highlight: '是否高亮'
            //     }
            // }
            list = e.adcList.map(item => {
                return {
                    ...item,
                    value: item.code,
                    text: item.name,
                    tip: item.description,
                    icon: item.properties?.tag,
                    iconTip: item.properties?.tip,
                    disabled: item.properties?.disabled + '' === 'true',
                    highlight: item.properties?.highlight + '' === 'true',
                    subs: (item.subComponentList || []).map(sub => {
                        return {
                            ...sub,
                            value: sub.code,
                            text: sub.name,
                            tip: sub.description,
                            icon: sub.properties?.tag,
                            iconTip: sub.properties?.tip,
                            disabled: sub.properties?.disabled + '' === 'true',
                            highlight: sub.properties?.highlight + '' === 'true',
                        }
                    })
                }
            })
        } else {
            // list = [{
            //     value: 1,
            //     text: '选项1',
            //     tip: '提示信息',
            //     icon: '打标图片地址',
            //     iconTip: '小问号提示',
            //     highlight: '高亮节点', 
            //     disabled: false  // 单选项禁用
            // }]
            list = (originList || []).map(item => {
                return {
                    ...item,
                    disabled: disabled || (item.disabled + '' === 'true'),
                    text: item[textKey],
                    value: item[valueKey],
                    subs: (item.subs || []).map(sub => {
                        return {
                            ...sub,
                            disabled: disabled || (sub.disabled + '' === 'true'),
                            text: sub[textKey],
                            value: sub[valueKey],
                        }
                    })
                }
            });
        }
        let mode = e.mode;
        if ([
            'box-time',  // 根据真实日期计算命中
            'box',  // 日历切换
            'box-line',  // 日历切换（无背景）
            'circle', // 圆形（支持自定义图标）
            'dot', // 圆点切换
            'dot-num', // 圆点数字（支持自定义图标）
            'vertical-circle', // 垂直-圆形（支持自定义图标）
            'vertical-dot', // 垂直-圆点切换
            'vertical-dot-num', // 垂直-圆点数字（支持自定义图标）
            'nav' // 导航类型
        ].indexOf(mode) < 0) {
            // 默认日期样式
            mode = 'box';
        }

        // pipeline参数
        // 色值
        let color = e.colorGradient || e.color || '#FF0036';
        let result = this['@{color.to.rgb}'](color);

        // 选中值，包含0的情况
        let selected = (e.selected === null || e.selected === undefined) ? (list[0]?.value || '') : e.selected;
        let selectedIndex = -1, subCount = 0;

        for (let i = 0; i < list.length; i++) {
            if (list[i].value == selected) {
                // 选中父元素
                selectedIndex = i;
                break;
            } else {
                if (!list[i].disabled) {
                    let selectedSubIndex = -1;
                    let subs = list[i].subs || [];
                    for (let j = 0; j < subs.length; j++) {
                        if (subs[j].value == selected) {
                            selectedIndex = i;
                            selectedSubIndex = j;
                            break;
                        }
                    }
                    if (selectedIndex < 0) {
                        // 当前项非选中项
                        subCount += (list[i].subs || []).length;
                    } else if (selectedSubIndex >= 0) {
                        // 选中子项
                        subCount += selectedSubIndex + 1;
                    }
                }
            }
        }

        // 日历
        let percent = 0;
        if (selectedIndex >= 0) {
            percent = (100 / list.length) * (selectedIndex + 0.5);
        }

        this.updater.set({
            editable: true,
            showFinish: e.showFinish + '' === 'true',
            verticalGap: 48,
            mode,
            img: e.img,
            color,
            color0: `rgba(${result.r},${result.g},${result.b}, 0)`,
            color2: `rgba(${result.r},${result.g},${result.b}, .2)`,
            color4: `rgba(${result.r},${result.g},${result.b}, .4)`,
            color6: `rgba(${result.r},${result.g},${result.b}, .6)`,
            color8: `rgba(${result.r},${result.g},${result.b}, .8)`,
            selectedIndex,
            subCount,
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

    render() {
        this.updater.digest();

        let { mode, list } = this.updater.get();
        if (mode == 'dot' || mode == 'dot-num') {
            let dots = $(`#${this.id} .@./pipeline-circle.less:dot-item`);
            list.forEach((item, i) => {
                let curInner = $(dots[i]).find('.@./pipeline-circle.less:dot-inner'),
                    nextInner = $(dots[i + 1]).find('.@./pipeline-circle.less:dot-inner');
                if (curInner.length && nextInner.length) {
                    Magix.mix(item, {
                        lineLeft: curInner.outerWidth() / 2,
                        lineRight: 0 - nextInner.outerWidth() / 2,
                    })
                }
            })
            this.updater.digest({
                list,
            })
        }
    },

    '@{select.parent}<click>'(e) {
        let that = this;
        let { list, selected } = that.updater.get();
        let selectedIndex = +e.params.index;
        let item = list[selectedIndex];
        if (item.disabled || (selected == item.value)) {
            return;
        }

        let subCount = 0;
        for (let i = 0; i < selectedIndex; i++) {
            subCount += (list[i].subs || []).length;
        }

        let { value, text } = item;
        let event = $.Event('change', {
            item,
            value,
            text,
            selected: value,
        });
        that['@{owner.node}'].trigger(event);
        if (!event.isDefaultPrevented()) {
            // 支持外部同步校验，event.preventDefault()
            that['@{owner.node}'].val(value);
            that.updater.digest({
                selectedIndex,
                subCount,
                selected: value,
            })
        }
    },
    '@{select.sub}<click>'(e) {
        let that = this;
        let { list, selected } = that.updater.get();
        let selectedIndex = +e.params.index,
            selectedSubIndex = +e.params.subIndex;
        let parent = list[selectedIndex];
        let sub = parent.subs[selectedSubIndex];
        if (parent.disabled || (selected == sub.value)) {
            return;
        }

        let subCount = 0;
        for (let i = 0; i < selectedIndex; i++) {
            subCount += (list[i].subs || []).length;
        }
        subCount += selectedSubIndex + 1;
        let { value, text } = sub;
        let event = $.Event('change', {
            item: sub,
            value,
            text,
            selected: value,
        });
        that['@{owner.node}'].trigger(event);
        if (!event.isDefaultPrevented()) {
            // 支持外部同步校验，event.preventDefault()
            that['@{owner.node}'].val(value);
            that.updater.digest({
                selectedIndex,
                subCount,
                selected: value,
            })
        }
    },
});