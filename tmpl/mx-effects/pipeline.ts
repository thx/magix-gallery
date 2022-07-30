import Magix from 'magix';
import * as View from '../mx-util/view';
Magix.applyStyle('@../mx-main/hor.less');
Magix.applyStyle('@pipeline.less');

export default View.extend({
    tmpl: '@pipeline.html',
    init(e) {
        this.assign(e);
    },
    assign(e) {
        this.updater.snapshot();


        let mode = e.mode;
        if ([
            'circle', 'line', // 线性
            'box', 'box-time' // 日历切换
        ].indexOf(mode) < 0) {
            mode = 'circle';
        }

        let list = e.list || [], selected = -1, cur = {}, percent = 0;
        if (mode == 'box-time') {
            // 根据日期计算进度
            mode = 'box';

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
        } else {
            // 不需要默认匹配 index 顺序
            selected = +e.selected;
            cur = list[selected] || {};
            if (selected >= 0) {
                percent = (100 / list.length) * (selected + 0.5);
            }
        }

        let color = e.color || '#FF0036';
        let result = this['@{color.to.rgb}'](color);
        this.updater.set({
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