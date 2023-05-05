import Magix from 'magix';
import * as $ from '$';
import Base from './index';
const DotWrapperClass = 'names@index.less[type-h-line-in-center,type-h-line-in-left,type-h-line-in-right,type-h-line-out-center,type-v-line-in-center,type-v-line-in-left,type-v-line-in-right,type-v-line-out-center,type-h-dot-in-center,type-h-dot-in-left,type-h-dot-in-right,type-h-dot-out-center,type-v-dot-in-center,type-v-dot-in-left,type-v-dot-in-right,type-v-dot-out-center]';
Magix.applyStyle('@index.less');

export default Base.extend({
    render() {
        let that = this;
        let { triggers, dots, active, autoplay } = that.updater.get();
        let node = that['@{owner.node}'];

        // 只过滤出当前view的节点
        let inView = (sizzle) => {
            let s, ss = node.find(sizzle);
            for (let i = 0; i < ss.length; i++) {
                let sn = $(ss[i]).closest('[mx-view*="mx-carousel/auto"]');
                if (sn[0] === node[0]) {
                    s = $(ss[i]);
                    break;
                }
            }
            return s;
        }

        that['@{panels.wrapper}'] = inView('[data-carousel="true"]');
        that['@{panels.inner}'] = inView('[data-carousel-inner="true"]');

        that['@{panels.node}'] = [];
        let widths = [], heights = [];
        let ps = node.find('[data-carousel-panel="true"]');
        for (let i = 0; i < ps.length; i++) {
            let psn = $(ps[i]);
            let sn = psn.closest('[mx-view*="mx-carousel/auto"]');
            if (sn[0] === node[0]) {
                widths.push(psn.outerWidth());
                heights.push(psn.outerHeight());
                that['@{panels.node}'].push(ps[i]);
            }
        };
        let len = that['@{panels.node}'].length;

        // 修正active
        if (active < 0) {
            active = 0;
        } else if (active > len - 1) {
            active = len - 1;
        };

        that.updater.set({
            active,
            len,
            width: Math.max(...widths),
            height: Math.max(...heights),
        });

        // 可轮播时
        if (len > 1) {
            if (triggers) {
                // 左右轮播点
                that['@{panels.wrapper}'].append(`
                    <i data-trigger="-1" class="@index.less:triggers @index.less:triggers-left mc-iconfont">&#xe61e;</i>
                    <i data-trigger="1" class="@index.less:triggers @index.less:triggers-right mc-iconfont">&#xe61e;</i>
                `);
            }
            if (dots) {
                // 底部操作点
                let { dotWrapperClass, dotWrapperStyleList, dotWrapperStyles, dotClass } = that.updater.get();
                let dotInner = '';
                for (let i = 0; i < len; i++) {
                    dotInner += `<span data-dot="${i}" class="@index.less:dot ${dotClass}"></span>`;
                }
                that['@{panels.wrapper}'].after(`<div class="@index.less:dots ${dotWrapperClass}" style="${(dotWrapperStyleList[active] || dotWrapperStyles)}">${dotInner}</div>`);
            }
        }

        that['@{dots.node}'] = node.find('.@index.less:dot');

        // 初始化样式
        that['@{update.stage.size}']();

        // 初始化位置
        that['@{to.panel}'](active, false);

        // 大于一帧时可自动播放
        if (autoplay && (len > 1)) {
            that['@{start.auto.play}']();
            that['@{owner.node}'].hover(() => {
                that['@{stop.auto.play}']();
            }, () => {
                that['@{over.timer}'] = setTimeout(that.wrapAsync(that['@{start.auto.play}'], that), 50);
            });
        }
    },
});