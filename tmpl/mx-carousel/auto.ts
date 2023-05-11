import Magix from 'magix';
import * as $ from '$';
import Base from './index';
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
                    dotInner += `<span data-dot="${i}" class="@index.less:dot ${dotClass} ${(i == active) ? '@index.less:active' : ''}"></span>`;
                }
                that['@{panels.wrapper}'].after(`<div data-carousel-dots="true" class="@index.less:dots ${dotWrapperClass}" style="${(dotWrapperStyleList[active] || dotWrapperStyles)}">${dotInner}</div>`);
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

    '@{update.stage.size}'() {
        let that = this;
        let { width, height, mode, vertical, len } = that.updater.get();

        let panelNodes = that['@{panels.node}'];
        switch (mode) {
            case 'carousel':
                // 跑马灯
                for (let i = 0; i < len; i++) {
                    if (vertical) {
                        // 垂直方向
                        $(panelNodes[i]).css({
                            position: 'absolute',
                            width: 'auto',
                            height,
                            top: `${100 * i}%`,
                            left: 0
                        });
                    } else {
                        // 水平方向
                        $(panelNodes[i]).css({
                            position: 'absolute',
                            width,
                            height: 'auto',
                            top: 0,
                            left: `${100 * i}%`,
                        });
                    }
                }
                break;

            case 'fade':
                // 渐显渐隐
                for (let i = 0; i < len; i++) {
                    $(panelNodes[i]).css({
                        position: 'absolute',
                        opacity: 0,
                        top: 0,
                        left: 0,
                        width,
                        height
                    });
                }
                break;
        }

        // if (vertical) {
        //     that['@{panels.inner}'].height(len * height).width(width);
        // } else {
        //     that['@{panels.inner}'].width(len * width).height(height);
        // }
        that['@{panels.wrapper}'].width(width).height(height);
    },
});