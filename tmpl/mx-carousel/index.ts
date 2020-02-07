import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
const DotWrapperClass = 'names@index.less[type-h-line-in-center,type-h-line-in-left,type-h-line-in-right,type-h-line-out-center,type-v-line-in-center,type-v-line-in-left,type-v-line-in-right,type-v-line-out-center,type-h-dot-in-center,type-h-dot-in-left,type-h-dot-in-right,type-h-dot-out-center,type-v-dot-in-center,type-v-dot-in-left,type-v-dot-in-right,type-v-dot-out-center]';
Magix.applyStyle('@index.less');

export default View.extend({
    init(extra) {
        let that = this;
        let node = $('#' + that.id);
        that['@{owner.node}'] = node;

        that['@{extra.info}'] = extra;

        // 是否是垂直方向   
        let vertical = (extra.vertical + '') === 'true';

        // 轮播点css变量
        let dotVars = extra.dotVars || {};
        // 整个轮播点区域可定义变量
        let dotWrapperStyles = '';
        for (let k in dotVars) {
            dotWrapperStyles += `${k}:${dotVars[k]};`;
        }
        // 内置轮播点样式
        let dotWrapperClass = DotWrapperClass[`type-${(vertical ? 'v' : 'h')}-${(extra.dotType || 'dot-in-center')}`];

        that.updater.set({
            mode: extra.mode || 'carousel', //carousel跑马灯，fade渐显渐隐
            width: extra.width || $(node).width() || 400,
            height: extra.height || $(node).height() || 200,
            active: extra.active || 0, // 当前第几帧动画
            interval: (extra.interval | 0) || 3000, // 播放暂停间隔，单位毫秒
            autoplay: (extra.autoplay + '') === 'true',  // 是否自动播放
            dots: (extra.dots + '') !== 'false', // 是否显示轮播点，默认显示
            dotWrapperClass,
            dotWrapperStyles,
            dotClass: extra.dotClass || '', //自定义轮播点样式，在点上
            triggers: (extra.triggers + '') == 'true', // 是否显示轮播点，默认不显示
            triggerClass: extra.triggerClass || '', // 自定义trigger样式
            vertical,
            timing: extra.timing || 'ease-in-out', // transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
            duration: extra.duration || '.5s' // 动画持续时间
        })

        if (extra.prevTrigger) {
            // 自定义上一页trigger
            $('#' + extra.prevTrigger).on('click', () => {
                that['@{trigger}'](-1);
            })
        }
        if (extra.nextTrigger) {
            // 自定义下一页trigger
            $('#' + extra.nextTrigger).on('click', () => {
                that['@{trigger}'](1);
            })
        }

        that.on('destroy', () => {
            that['@{stop.auto.play}']();
        });
    },
    render() {
        let that = this;
        let { autoplay, active, triggers, dots } = that.updater.get();
        let node = that['@{owner.node}'];
        let wrapper = node.find('[data-carousel="true"]');
        that['@{panels.wrapper}'] = wrapper;
        that['@{panels.inner}'] = wrapper.find('[data-carousel-inner="true"]');
        that['@{panels.node}'] = wrapper.find('[data-carousel-panel="true"]');
        let len = that['@{panels.node}'].length;

        // 修正active
        if (active < 0) {
            active = 0;
        } else if (active > len - 1) {
            active = len - 1;
        }
        that.updater.set({
            active,
            len
        })

        if (len > 1) {
            if (triggers) {
                // 左右轮播点
                wrapper.append(`
                    <i data-trigger="-1" class="@index.less:triggers @index.less:triggers-left mc-iconfont">&#xe61e;</i>
                    <i data-trigger="1" class="@index.less:triggers @index.less:triggers-right mc-iconfont">&#xe61e;</i>
                `);
            }
            if (dots) {
                // 底部操作点
                let { dotWrapperClass, dotWrapperStyles, dotClass } = that.updater.get();
                let dotInner = '';
                for (let i = 0; i < len; i++) {
                    dotInner += `<span data-dot="${i}" class="@index.less:dot ${dotClass}"></span>`;
                }
                wrapper.after(`<div class="@index.less:dots ${dotWrapperClass}" style="${dotWrapperStyles}">${dotInner}</div>`);
            }
        }


        that['@{dots.node}'] = node.find('.@index.less:dot');

        // 初始化样式
        that['@{update.stage.size}']();

        // 初始化位置
        that['@{to.panel}'](active, true);

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
        let node = that['@{owner.node}'];
        let { width, height, mode, vertical, active, len } = that.updater.get();

        let panelNodes = that['@{panels.node}'];
        switch (mode) {
            case 'carousel':
                // 跑马灯
                for (let i = 0; i < panelNodes.length; i++) {
                    let style = {
                        position: 'absolute',
                        width,
                        height
                    }
                    if (vertical) {
                        // 垂直方向
                        Magix.mix(style, {
                            top: height * i,
                            left: 0
                        })
                    } else {
                        // 水平方向
                        Magix.mix(style, {
                            top: 0,
                            left: width * i
                        })
                    }
                    panelNodes.eq(i).css(style);
                }
                break;
            case 'fade':
                // 渐显渐隐
                for (let i = 0; i < panelNodes.length; i++) {
                    panelNodes.eq(i).css({
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

        if (vertical) {
            that['@{panels.inner}'].height(panelNodes.length * height).width(width);
        } else {
            that['@{panels.inner}'].width(panelNodes.length * width).height(height);
        }
        that['@{panels.wrapper}'].width(width).height(height);
    },

    /**
     * 1. 跑马灯的顺序切换
     * 2. 渐显渐隐
     */
    '@{to.panel}'(index, immediate) {
        let that = this;
        if (that['@{animating}']) {
            return;
        }
        if (!immediate) {
            // 防止快速重复点击
            that['@{animating}'] = true;
        }

        index = +index;
        let { mode, duration, timing, width, height, vertical, len } = that.updater.get();
        let panelNodes = that['@{panels.node}'];

        let cName = '@index.less:active';
        let oldActive = +that.updater.get('active');
        let active = ((index >= len) ? 0 : ((index < 0) ? (len - 1) : index));
        // 高亮对应的节点
        that.updater.set({
            active
        })
        that['@{dots.node}'].removeClass(cName).eq(active).addClass(cName);

        switch (mode) {
            case 'carousel':
                // 平滑轮播时需要调整位置
                if (oldActive == 0 && index == -1) {
                    // 从第一帧到最后一帧
                    panelNodes.eq(len - 1).css(vertical ? { top: 0 - height } : { left: 0 - width });
                } else if (oldActive == len - 1 && index == len) {
                    // 从最后一帧到第一帧
                    panelNodes.eq(0).css(vertical ? { top: height * len } : { left: width * len });
                }
                let style = {
                    transform: `translate3d(${vertical ? `0,${(0 - index * height)}px` : `${(0 - index * width)}px,0`},0)`,
                    transition: `transform ${duration} ${timing}`
                };
                if (immediate) {
                    delete style.transition;
                }
                let cnt = that['@{panels.inner}'];
                cnt.css(style);
                cnt.off('transitionend').on('transitionend', () => {
                    // 动画完成之后再纠正
                    for (let i = 0; i < panelNodes.length; i++) {
                        panelNodes.eq(i).css(vertical ? { top: height * i } : { left: width * i });
                    }
                    cnt.css({
                        transition: '',
                        transform: `translate3d(${vertical ? `0,${(0 - active * height)}px` : `${(0 - active * width)}px,0`},0)`
                    });

                    that['@{animating}'] = false;
                })
                break;

            case 'fade':
                // fade顺序不会改变，直接纠正
                // 最后一帧往后回到第一帧
                // 第一帧往前到最后一帧
                panelNodes.css({
                    opacity: 0
                });
                panelNodes.eq(active).css({
                    opacity: 1,
                    transition: `opacity ${duration} ${timing}`
                });
                panelNodes.eq(active).off('transitionend').on('transitionend', () => {
                    that['@{animating}'] = false;
                })
                break;
        }
    },

    '@{start.auto.play}'() {
        let that = this;
        let { interval } = that.updater.get();
        that['@{play.task}'] = setInterval(() => {
            let { active } = that.updater.get();
            that['@{to.panel}'](++active);
        }, interval);
    },

    '@{stop.auto.play}'() {
        let that = this;
        if (that['@{over.timer}']) {
            clearTimeout(that['@{over.timer}']);
        }
        if (that['@{play.task}']) {
            clearInterval(that['@{play.task}']);
        }
    },

    '$[data-dot]<click>'(e) {
        e.preventDefault();

        let that = this;
        let index = +$(e.target).attr('data-dot');
        if (index == that.updater.get('active')) {
            return;
        }

        that['@{to.panel}'](index);
    },

    '$[data-trigger]<click>'(e) {
        e.preventDefault();

        let offset = $(e.target).attr('data-trigger');
        this['@{trigger}'](offset);
    },

    '@{trigger}'(offset) {
        offset = +offset;
        let { active, len } = this.updater.get();
        // 大于一帧才可轮播
        if (len > 1) {
            active = +active + offset;
            this['@{to.panel}'](active);
        }
    },

    '$win<resize>'() {
        let that = this;
        let data = that.updater.get();
        let extra = that['@{extra.info}'];
        let node = that['@{owner.node}'];
        that.updater.set({
            width: extra.width || $(node).width() || 400
        })
        that['@{update.stage.size}']();
        that['@{to.panel}'](data.active, true);
    }
});