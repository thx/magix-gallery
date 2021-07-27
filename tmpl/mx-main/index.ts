/**
 *  流程步骤组件：
 *  stepIndex定义：当前步骤，从1开始
 * 
 *  subStepIndex定义
 *     -1：不停留在具体的子view上
 *     >0：具体某一个子步骤
 */
import Magix, { Router, Vframe } from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;

        that.observeLocation(['stepIndex', 'subStepIndex']);
        that.owner.oncreated = () => {
            if (!that.$init) {

                // 每次重新render之后
                // 所有子view加载完成后
                that.subScroll();

                // 子组件的mount不需要重新scroll
                that.$init = 1;
            }
        };
        that.ondestroy = () => {
            that.owner.off('created');
        };

        that.assign(extra);
    },
    assign(extra) {
        // 当前数据截快照
        this.updater.snapshot();

        this.updater.set({
            gapWidth: 16,
            stepLineHeight: 46,
            leftWidth: +extra.leftWidth || 160,
            rightWidth: +extra.rightWidth || 260,
            viewHeight: window.innerHeight,
            alreadyStep: extra.alreadyStep || 1,
            originStepInfos: extra.stepInfos || [] //所有的步骤信息
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        let that = this;

        // trigger oncreated，子组件的渲染不scroll
        that.$init = null;

        let alreadyStep = +that.updater.get('alreadyStep');
        let stepInfos = $.extend(true, [], that.updater.get('originStepInfos'));

        let locParams = Router.parse().params;
        // 主步骤信息从1开始
        let curStepIndex = +(locParams.stepIndex || 1);
        if (curStepIndex > alreadyStep) {
            alreadyStep = curStepIndex;
        }

        // 子步骤：
        // -1：在主导航上
        // >0：1，2，3
        let curSubStepIndex = +locParams.subStepIndex || -1;

        let defPrevTip = '返回上一步',
            defNextTip = '下一步';
        stepInfos.forEach((step, i) => {
            let stepIndex = i + 1;
            step.index = stepIndex;

            // visibleSubLen可见子view个数，有的可能不可见
            // hide：导航上及中间操作区域都不显示
            // subHide：不在侧边导航上显示，中间操作区域可见
            let visibleSubLen = 0;
            step.subs = (step.subs || []).map((sub, si) => {
                if (!sub.hide && !sub.subHide) {
                    visibleSubLen++;
                }

                sub.index = (si + 1);
                sub.visibleIndex = visibleSubLen;
                return sub;
            });
            step.showSubs = (visibleSubLen > 1);
            step = that.wrapSide(step);

            // 1. 显示配置当前步骤不可操作
            // 2. <= 当前步骤 展开子列表
            step.locked = (step.locked + '' === 'true') || (stepIndex > alreadyStep);

            // 修正子步骤信息
            if ((stepIndex == curStepIndex) && ((curSubStepIndex > step.subs.length) || (step.subs.length == 1))) {
                curSubStepIndex = -1;
            }

            // 历史配置：
            //      prevTip：返回上一步文案
            //      nextTip：下一步文案
            //      nextFn：(remain) => {  // 下一步callback
            //          // 页面参数并集 remain
            //          // 操作完成之后，提交下一步
            //          return new Promise(resolve => {
            //          })
            //      } 
            // 新配置，全部自定义按钮
            //      btns = [{
            //          text: '显示文案', 
            //          type: 'next', //prev前一步，next后一步
            //          brand: true, //是否为品牌色按钮，默认为false
            //          check: true, // true/false，提交时是否需要调用子view的check方法
            //          callback: (params) => {
            //              // 回调方法，check == true的情况下，
            //          }
            //      }]
            let btns = [];
            if (step.hasOwnProperty('btns')) {
                btns = step.btns || [];
                btns.forEach(btn => {
                    if (btn.type == 'prev') {
                        // 返回上一步
                        btn.text = btn.text || defPrevTip;
                        btn.fn = 'prev';
                    } else if (btn.type == 'next') {
                        // 下一步（默认品牌色）
                        btn.text = btn.text || defNextTip;
                        btn.fn = 'next';
                        btn.brand = (btn.brand + '' !== 'false');
                    } else {
                        btn.fn = 'custom';
                    }
                })
            } else {
                let prevTip = '';
                if ((stepIndex > 1) && (!stepInfos[i - 1].locked)) {
                    // 1. 第一步没有返回上一步
                    // 2. 上一步被锁定的情况下没有返回上一步
                    // 3. 自定义trigger的情况
                    prevTip = step.prevTip || defPrevTip;
                }
                if (prevTip) {
                    // 返回上一步可见的情况下
                    btns.push({
                        type: 'prev',
                        text: prevTip,
                        fn: 'prev'
                    })
                }

                let nextTip = '';
                if (stepIndex < stepInfos.length) {
                    // 1. 最后一步没有下一步
                    // 2. 自定义trigger的情况
                    nextTip = step.nextTip || defNextTip;
                }
                if (nextTip) {
                    // 下一步可见
                    btns.push({
                        type: 'next',
                        text: nextTip,
                        brand: true,
                        fn: 'next',
                        callback: step.nextFn
                    })
                }
            }
            step.btns = btns;
        })

        let diffParams = Router.diff().params;
        if (!diffParams.stepIndex && diffParams.subStepIndex) {
            // 只修改了 subStepIndex 的场景
            // 不digest 直接操作dom 跳转到子模块位置
            let { stepLineHeight } = that.updater.get();

            that.updater.set({
                curSubStepIndex,
            });
            let onClass = '@index.less:on';
            let cur = $('#' + that.id + ' .@index.less:step-current');
            cur.find('.@index.less:step').removeClass(onClass);
            let sub = cur.find('.@index.less:step[data-sub="' + curSubStepIndex + '"]');
            sub.addClass(onClass);
            let visibleIndex = +sub.attr('data-visible-sub');
            cur.find('.@index.less:pbg').css({
                top: (curSubStepIndex == -1) ? 0 : (visibleIndex * stepLineHeight)
            })

            that.subScroll();
        } else {
            if (diffParams.stepIndex) {
                // 步骤切换时跳转到顶部
                $(window).scrollTop(0);
            }

            // 步骤切换了重新mount子view
            that.updater.digest({
                alreadyStep,
                stepInfos,
                curStepInfo: stepInfos[curStepIndex - 1],
                curStepIndex,
                curSubStepIndex,
            });
        }
    },

    wrapSide(step) {
        let rightWidth = +this.updater.get('rightWidth');

        let sideWrapper = null,
            sideData = {},
            hasSide = false;

        if (step.sideView || step.sideTip) {
            sideWrapper = '@./tip';
            sideData = {
                view: step.sideView || '', // 自定义侧边view
                title: step.sideTitle || '', // 标题
                content: step.sideTip || '', // 简单提示文案
                info: step.sideData || {} // 默认传入侧边的数据
            }
            hasSide = true;
        }
        step.sideWrapper = sideWrapper;
        step.sideData = sideData;
        step.hasSide = hasSide;
        step.rightWidth = hasSide ? rightWidth : 0;
        return step;
    },

    /**
     * 自定义按钮逻辑
     */
    'custom<click>'(e) {
        let that = this;
        let { btn } = e.params;
        if (btn.check) {
            // 需要调用子viewcheck
            let { curStepInfo } = that.updater.get();
            let subs = curStepInfo.subs;

            let models = subs.map(sub => {
                let vf = Vframe.get(`${that.id}_sub_${sub.index}`);
                return vf.invoke('check');
            })
            Promise.all(models).then(results => {
                let ok = true,
                    msgs = [],
                    remain = {};

                results.forEach((r, i) => {
                    ok = ok && r.ok;
                    if (!r.ok) {
                        msgs.push({
                            id: (i + 1),
                            label: subs[i].label,
                            msg: r.msg || ''
                        })
                    }
                    Magix.mix(remain, (r.remain || {}));
                })

                if (ok) {
                    that.showMsg('');

                    // 有callback
                    if (btn.callback) {
                        btn.callback(remain);
                    }
                } else {
                    that.showMsg(`${msgs.map(m => `
                        ${m.label}：${m.msg}
                    `).join('；')}`);
                }
            });
        } else {
            // 不需要调用子viewcheck
            if (btn.callback) {
                btn.callback();
            }
        }
    },

    /**
     * 返回上一步
     */
    'prev<click>'(e) {
        let { curStepIndex } = this.updater.get();
        Router.to({
            stepIndex: (+curStepIndex - 1),
            subStepIndex: -1
        });
    },

    /**
     * 下一步：先校验能否提交
     */
    'next<click>'(e) {
        let that = this;
        let { btn } = e.params;
        let { curStepInfo } = that.updater.get();

        let subs = curStepInfo.subs;
        let models = subs.map(sub => {
            let vf = Vframe.get(`${that.id}_sub_${sub.index}`);
            return vf.invoke('check');
        })
        Promise.all(models).then(results => {
            let ok = true,
                msgs = [],
                remain = {};

            results.forEach((r, i) => {
                ok = ok && r.ok;
                if (!r.ok) {
                    msgs.push({
                        id: (i + 1),
                        label: subs[i].label,
                        msg: r.msg || ''
                    })
                }
                Magix.mix(remain, (r.remain || {}));
            })

            if (ok) {
                that.showMsg('');

                // 下一步
                if (btn.callback) {
                    btn.callback(remain).then(remainParams => {
                        that.next(remainParams || {});
                    })
                } else {
                    that.next({});
                }
            } else {
                that.showMsg(`${msgs.map(m => `
                    ${m.label}：${m.msg}
                `).join('；')}`);
            }
        });
    },

    next(remainParams) {
        let that = this;
        let { curStepIndex } = that.updater.get();
        remainParams.stepIndex = +curStepIndex + 1;
        remainParams.subStepIndex = -1;
        Router.to(remainParams);
    },

    showMsg(msg) {
        let errorNode = $(`#${this.id}_error`);
        if (!msg) {
            errorNode.html('');
        } else {
            errorNode.html(`<i class="mc-iconfont @index.less:error-icon">&#xe6ad;</i>${msg}`);
        }
    },

    /**
     * 滚动到当前子view的位置
     */
    subScroll() {
        let that = this;
        let curSubStepIndex = +that.updater.get('curSubStepIndex');
        let top;
        if (curSubStepIndex > 0) {
            let subContent = $(`#${that.id} #${that.id}_sub_${curSubStepIndex}`);
            top = subContent.offset().top - 50;
        } else {
            top = 0;
        }
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    },

    '$win<scroll>'() {
        let that = this;
        let context = $('#' + that.id);
        let content = context.find('.@index.less:main-content');
        if (!content.length) {
            return;
        }
        let nav = context.find('.@index.less:main-nav');
        let scrollTop = $(window).scrollTop();
        let contentTop = content.offset().top;
        if (scrollTop > contentTop) {
            nav.css({
                position: 'fixed'
            })
        } else {
            nav.css({
                position: 'absolute'
            })
        }

        let side = context.find('.@index.less:content-side');
        if (side.length) {
            let sideTop = content.offset().top;
            let { gapWidth } = that.updater.get();
            if (scrollTop > (sideTop + gapWidth)) {
                side.css({
                    position: 'fixed',
                    top: 0
                })
            } else {
                side.css({
                    position: 'absolute',
                    top: `${gapWidth}px`
                })
            }
        }
    },

    '$win<resize>'() {
        let that = this;
        let winHeight = window.innerHeight
        that.updater.set({
            viewHeight: winHeight
        })
        let context = $('#' + that.id);
        let content = context.find('.@index.less:main-content');
        content.css({
            minHeight: winHeight
        })
    },

    'nav<click>'(e) {
        let params = e.params;
        let stepIndex = params.stepIndex,
            subStepIndex = params.subStepIndex || -1;
        Router.to({
            stepIndex,
            subStepIndex
        });
    }
});