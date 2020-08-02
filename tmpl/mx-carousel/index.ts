import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
const DotWrapperClass = 'names@index.less[type-h-line-in-center,type-h-line-in-left,type-h-line-in-right,type-h-line-out-center,type-v-line-in-center,type-v-line-in-left,type-v-line-in-right,type-v-line-out-center,type-h-dot-in-center,type-h-dot-in-left,type-h-dot-in-right,type-h-dot-out-center,type-v-dot-in-center,type-v-dot-in-left,type-v-dot-in-right,type-v-dot-out-center]';
Magix.applyStyle('@index.less');

export default View.extend({
    init(extra) {
        let that = this;
        that.updater.snapshot();
        that.assign(extra);

        that.on('destroy', () => {
            that['@{stop.auto.play}']();
            if (that['@{touch.timer}']) {
                clearTimeout(that['@{touch.timer}']);
            }
        });
    },

    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        let node = $('#' + that.id);
        that['@{owner.node}'] = node;
        that['@{extra.info}'] = extra;

        // 设备信息
        let devInfo = that['@{get.dev.info}']();

        // 是否是垂直方向   
        let vertical = (extra.vertical + '') === 'true';
        if (!devInfo.pc) {
            // 移动端不支持垂直滚动
            vertical = false;
        }

        // 轮播点css变量
        // 整个轮播点区域可定义变量
        let dotWrapperStyles = '';
        let dotVars = extra.dotVars || {};
        for (let k in dotVars) {
            dotWrapperStyles += `${k}:${dotVars[k]};`;
        }

        // 每帧支持配置单独的轮播点样式
        let dotWrapperStyleList = [];
        let dotVarsList = extra.dotVarsList || [];
        dotVarsList.forEach(dvs => {
            let dws = '';
            for (let k in dvs) {
                dws += `${k}:${dvs[k]};`;
            }
            dotWrapperStyleList.push(dws);
        })

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
            dotWrapperStyleList,
            dotWrapperStyles,
            dotClass: extra.dotClass || '', //自定义轮播点样式，在点上
            triggers: (extra.triggers + '') == 'true', // 是否显示轮播点，默认不显示
            triggerClass: extra.triggerClass || '', // 自定义trigger样式
            vertical,
            timing: extra.timing || 'ease-in-out', // transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
            duration: extra.duration || '.5s', // 动画持续时间
            devInfo // 设备信息
        })

        if (extra.prevTrigger) {
            // 自定义上一页trigger
            $('#' + extra.prevTrigger).off('click').on('click', () => {
                that['@{trigger}'](-1);
            })
        }
        if (extra.nextTrigger) {
            // 自定义下一页trigger
            $('#' + extra.nextTrigger).off('click').on('click', () => {
                that['@{trigger}'](1);
            })
        }

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },

    render() {
        let that = this;
        let { devInfo } = that.updater.get();
        if (!devInfo.pc) {
            // https://www.swiper.com.cn/api/autoplay/16.html
            // 移动端：引用移动端轮播组件 Swiper
            // 1. 不支持垂直滚动 vertical
            // 2. 不支持左右切换箭头 triggers
            seajs.use([
                '//g.alicdn.com/mm/bp-source/lib/swiper-bundle.min.js',
                '//g.alicdn.com/mm/bp-source/lib/swiper-bundle.min.css'
            ], () => {
                let { width, height, dots, active, autoplay } = that.updater.get();
                let node = that['@{owner.node}'];
                let wrapper = node.find('[data-carousel="true"]');
                wrapper.css({ width, height });
                that['@{panels.node}'] = wrapper.find('[data-carousel-panel="true"]');
                let len = that['@{panels.node}'].length;

                // 修正active
                if (active < 0) {
                    active = 0;
                } else if (active > len - 1) {
                    active = len - 1;
                }

                if (len > 1) {
                    // Swiper配置
                    let configs = {
                        loop: true, // 循环模式选项
                        slidesPerView: 'auto',
                        centeredSlides: true // active slide会居中
                    }
                    if (autoplay) {
                        Magix.mix(configs, {
                            autoplay: {
                                delay: 5000,
                                stopOnLastSlide: false,
                                disableOnInteraction: true
                            }
                        })
                    }
                    if (dots) {
                        // 底部操作点
                        let { dotWrapperClass, dotWrapperStyleList, dotWrapperStyles, dotClass } = that.updater.get();
                        wrapper.after(`<div class="swiper-pagination @index.less:dots ${dotWrapperClass}" style="${(dotWrapperStyleList[active] || dotWrapperStyles)}"></div>`);
                        Magix.mix(configs, {
                            pagination: {
                                el: `#${that.id} .swiper-pagination`,
                                bulletClass: `@index.less:dot ${dotClass}`,
                                bulletActiveClass: '@index.less:active',
                            }
                        })
                    }
                    if (that['@{wireless.swiper}']) {
                        that['@{wireless.swiper}'].destroy();
                    }
                    that['@{wireless.swiper}'] = new Swiper(`#${that.id} .swiper-container`, configs);
                }
            })
        } else {
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
                    let { dotWrapperClass, dotWrapperStyleList, dotWrapperStyles, dotClass } = that.updater.get();
                    let dotInner = '';
                    for (let i = 0; i < len; i++) {
                        dotInner += `<span data-dot="${i}" class="@index.less:dot ${dotClass}"></span>`;
                    }
                    wrapper.after(`<div class="@index.less:dots ${dotWrapperClass}" style="${(dotWrapperStyleList[active] || dotWrapperStyles)}">${dotInner}</div>`);
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

        // 底部操作点，每帧可能轮播点样式不同
        that['@{dots.node}'].removeClass(cName).eq(active).addClass(cName);
        let { dotWrapperStyleList, dotWrapperStyles } = that.updater.get();
        let dotWrapper = that['@{dots.node}'].parent('.@index.less:dots');
        dotWrapper.attr('style', dotWrapperStyleList[active] || dotWrapperStyles);

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
                    opacity: 0,
                    zIndex: 2
                });
                // 当前帧摸到最上方
                panelNodes.eq(active).css({
                    opacity: 1,
                    transition: `opacity ${duration} ${timing}`,
                    zIndex: 3
                });
                panelNodes.eq(active).off('transitionend').on('transitionend', () => {
                    that['@{animating}'] = false;
                })
                break;
        }
    },

    '@{start.auto.play}'() {
        let that = this;
        that['@{stop.auto.play}']();

        // interval  轮播间隔时间
        // duration  轮播动画时间
        let { interval, duration } = that.updater.get();
        let dt = +(duration + '').replace('s', '');
        that['@{play.task}'] = setInterval(() => {
            let { active } = that.updater.get();
            that['@{to.panel}'](++active);
        }, interval + dt * 1000);
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
        this['@{resize}']();
    },
    '$doc<htmlchanged>'(e) {
        let that = this;
        if (that.owner && (that.owner.pId == e.vId)) {
            that['@{resize}']();
        }
    },
    '$doc<navslidend>'(e) {
        this['@{resize}']();
    },
    '@{resize}'() {
        let that = this;
        let { devInfo, active } = that.updater.get();
        if (!devInfo.pc) {
            return;
        }

        let extra = that['@{extra.info}'];
        let node = that['@{owner.node}'];
        that.updater.set({
            width: extra.width || $(node).width() || 400
        })
        that['@{update.stage.size}']();
        that['@{to.panel}'](active, true);
    }
});