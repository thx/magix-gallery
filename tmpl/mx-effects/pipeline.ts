import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@pipeline-box.less');
Magix.applyStyle('@pipeline-circle.less');
Magix.applyStyle('@pipeline-nav.less');

export default View.extend({
    tmpl: '@pipeline.html',
    init(e) {
        this.assign(e);
    },
    assign(e) {
        this.updater.snapshot();

        let mode = e.mode;

        // 线性（历史配置，切换为box）
        if (mode == 'line') {
            mode = 'box';
        }

        // 圆形样式统一
        if (mode == 'circle-progress') {
            mode = 'circle';
        }


        if ([
            'box-time',  // 根据真实日期计算命中
            'box',  // 日历切换
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
        //     tip: '提示信息',
        //     highlight: '高亮节点', 
        //     disabled: false  // 单选项禁用
        // }]
        let list = e.list || [];
        let selected = -1, cur = {}, percent = 0;

        switch (mode) {
            case 'box-time': // 根据真实日期计算命中
                // 只支持日期 00:00:00计算
                let today = new Date(e.selected || (new Date().toLocaleDateString()));
                let tt = today.getTime(), pg = 0, oi = 24 * 60 * 60 * 1000;
                for (let i = 0; i < list.length; i++) {
                    let st = (new Date(list[i].startTime.slice(0, 10))).getTime(),
                        et = (new Date(list[i].endTime.slice(0, 10))).getTime();
                    if (tt >= st && tt <= et) {
                        selected = i;

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
                cur = list[selected] || {};
                if (selected >= 0) {
                    percent = (100 / list.length) * (selected + pg);
                }
                break;

            case 'box': // 日历切换
            case 'circle': // 圆形（支持自定义图标）
            case 'dot': // 圆形（支持自定义图标）
                // 不需要默认匹配 index 顺序
                selected = +e.selected;
                cur = list[selected] || {};
                if (selected >= 0) {
                    percent = (100 / list.length) * (selected + 0.5);
                }
                break;

            case 'nav':
                break;
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
            selected,
            cur,
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