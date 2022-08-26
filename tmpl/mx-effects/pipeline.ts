import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@../mx-tabs/pipeline-box.less');
Magix.applyStyle('@../mx-tabs/pipeline-circle.less');
Magix.applyStyle('@../mx-tabs/pipeline-nav.less');

export default View.extend({
    tmpl: '@../mx-tabs/pipeline.html',
    init(e) {
        this.assign(e);
    },
    assign(e) {
        this.updater.snapshot();

        let mode = e.mode;
        if (mode == 'line') {
            // 线性（历史配置，切换为box）
            mode = 'box';
        }
        if (mode == 'circle-progress') {
            // 圆形样式统一
            mode = 'circle';
        }
        if ([
            'box-time',  // 根据真实日期计算命中
            'box',  // 日历切换
            'box-line', // 日历（无背景）
            'circle', // 圆形（支持自定义图标）
            'dot', // 圆点切换（支持自定义图标）
            'nav' // 导航类型
        ].indexOf(mode) < 0) {
            mode = 'circle';
        }

        // 映射为tab的结构  联动 mx-tabs.pipeline
        // mx-effects.pipeline list = [{
        //     title: '第一行描述信息',
        //     subTitle: '第二行描述信息',
        //     tip: '标题旁小问号提示',
        //     icon: '标题旁小图标',
        //     startTime, '时间区间开始时间',
        //     endTime: '时间区间结束时间'
        // }]
        // 
        // mx-tabs.pipeline list = [{
        //     value: 1,
        //     text: '选项1',
        //     icon: '打标图片地址',
        //     iconTip: '小问号提示',
        //     tip: '提示信息',
        //     highlight: '高亮节点', 
        //     disabled: false  // 单选项禁用
        // }]
        let list = (e.list || []).map((item, index) => {
            return {
                ...item,
                value: index,
                text: item.title,
                icon: item.icon,
                iconTip: item.tip,
                tip: item.subTitle,
                subs: (item.subs || []).map((sub, subIndex) => {
                    return {
                        ...sub,
                        value: `${index}_${subIndex}`,
                        text: sub.title,
                        icon: sub.icon,
                        iconTip: sub.tip,
                        tip: sub.subTitle,
                    }
                })
            }
        });

        let selectedIndex = -1, selected = -1, subCount = 0,
            percent = 0;
        switch (mode) {
            case 'box-time': // 根据真实日期计算命中
                // 只支持日期 00:00:00计算 selected 为日期 2022-02-02
                let today = new Date(e.selected || (new Date().toLocaleDateString()));
                let tt = today.getTime(), pg = 0, oi = 24 * 60 * 60 * 1000;
                for (let i = 0; i < list.length; i++) {
                    let st = (new Date(list[i].startTime.slice(0, 10))).getTime(),
                        et = (new Date(list[i].endTime.slice(0, 10))).getTime();
                    if (tt >= st && tt <= et) {
                        selectedIndex = i;

                        if (
                            (i == 0) ||
                            (list[i - 1] && (list[i].startTime == list[i - 1].endTime))
                        ) {
                            // 时间有无重叠
                            pg = (tt - st) / (et - st);
                        } else {
                            pg = (tt - st + oi) / (et - st + oi);
                        }
                        break;
                    }
                }
                if (selectedIndex >= 0) {
                    percent = (100 / list.length) * (selectedIndex + pg);
                }
                selected = selectedIndex;
                break;

            case 'box-line':
            case 'box': // 日历切换
            case 'circle': // 圆形（支持自定义图标）
            case 'dot': // 圆形（支持自定义图标）
                // 不需要默认匹配 index 顺序
                selectedIndex = +e.selected;
                if (selectedIndex >= 0) {
                    percent = (100 / list.length) * (selectedIndex + 0.5);
                }
                selected = selectedIndex;
                break;

            case 'nav': // 导航
                selectedIndex = +e.selected;

                // 子导航计算
                for (let i = 0; i < selectedIndex; i++) {
                    subCount += (list[i].subs || []).length;
                }

                let selectedSubIndex = +e.selectedSub;
                if (selectedSubIndex >= 0) {
                    // 选中二级
                    subCount += selectedSubIndex + 1;
                    selected = list[selectedIndex].subs[selectedSubIndex].value;
                } else {
                    // 选中一级
                    selected = selectedIndex;
                }
                break;
        }

        for (let i = 0; i < list.length; i++) {
            if (i < selectedIndex) {
                Magix.mix(list[i], {
                    finished: true,
                    highlight: true,
                    disabled: false,
                })
            } else if (i == selectedIndex) {
                Magix.mix(list[i], {
                    finished: false,
                    highlight: true,
                    disabled: false,
                })
            } else {
                Magix.mix(list[i], {
                    finished: false,
                    highlight: false,
                    disabled: true,
                })
            }
        }

        // 兼容历史渐变色配置，有渐变色以渐变色为准
        let color = e.colorGradient || e.color || '#FF0036';
        let result = this['@{color.to.rgb}'](color);

        this.updater.set({
            editable: false,
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

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        this.updater.digest();
    }
});