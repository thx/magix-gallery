/**
 *  流程步骤组件：
 *  stepIndex定义：当前步骤，从1开始
 * 
 *  subStepIndex定义
 *     0：一级步骤
 *     >0：二级步骤（子步骤）
 */
import Magix, { Router, Vframe } from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
Magix.applyStyle('@nav.less');

export default View.extend({
    tmpl: '@nav.html',
    init(extra) {
        let that = this;
        that.owner.oncreated = () => {
            if (!that['$init']) {

                // 每次重新render之后
                // 所有子view加载完成后
                that.scrollToSub();

                // 子组件的mount不需要重新scroll
                that['$init'] = true;
            }
        };
        that.ondestroy = () => {
            that.owner.off('created');
        };

        that.assign(extra);
        that.observeLocation(['stepIndex']);
    },
    assign(extra) {
        this['@{owner.node}'] = $('#' + this.id);
        this.updater.snapshot();

        this.updater.set({
            alreadyStep: extra.alreadyStep || 1,
            originStepInfos: extra.stepInfos || [], //所有的步骤信息
        });

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },
    render() {
        let that = this;

        // trigger oncreated，子组件的渲染不scroll
        that['$init'] = false;

        let alreadyStep = +that.updater.get('alreadyStep');
        let stepInfos = $.extend(true, [], that.updater.get('originStepInfos'));

        let locParams = Router.parse().params;

        // 主步骤信息从1开始
        let curStepIndex = +(locParams.stepIndex || 1);
        if (curStepIndex > alreadyStep) {
            alreadyStep = curStepIndex;
        }

        // 子步骤：
        // 0：在主导航上
        // >0：1，2，3
        let curSubStepIndex = +locParams.subStepIndex || 0;

        let defPrevTip = '返回上一步',
            defNextTip = '下一步';
        stepInfos.forEach((step, i) => {
            let stepIndex = i + 1;

            // visibleSubs可见子view个数，有的可能不可见
            // hide：导航上及中间操作区域都不显示
            // subHide：不在侧边导航上显示，中间操作区域可见
            let visibleSubs = [];
            let subs = (step.subs || []).map((sub, si) => {
                if (!sub.hide && !sub.subHide) {
                    visibleSubs.push(sub);
                }

                return Magix.mix(sub, {
                    index: `${stepIndex}_${si + 1}`,
                    icon: sub.icon ? `<span class="@nav.less:center-title-icon">${sub.icon}</span>` : '',
                    toggle: sub.toggle + '' === 'true', // 是否可展开收起
                    toggleState: sub.toggleState + '' !== 'false', // 默认展开收起状态
                })
            });

            // 侧边信息计算
            let sideWrapper = null,
                sideData = {},
                hasSide = false;
            if (step.sideView || step.sideTip) {
                sideWrapper = '@./right';
                sideData = {
                    view: step.sideView || '', // 自定义侧边view
                    title: step.sideTitle || '', // 标题
                    content: step.sideTip || '', // 简单提示文案
                    info: step.sideData || {} // 默认传入侧边的数据
                }
                hasSide = true;
            }

            // 1. 显示配置当前步骤不可操作
            // 2. <= 当前步骤 展开子列表
            let locked = (step.locked + '' === 'true') || (stepIndex > alreadyStep);

            // 修正子步骤信息
            if ((stepIndex == curStepIndex) && ((curSubStepIndex > step.subs.length) || (step.subs.length == 1))) {
                curSubStepIndex = 0;
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
                        btn.mode = 'hollow';
                    } else if (btn.type == 'next') {
                        // 下一步（默认品牌色）
                        btn.text = btn.text || defNextTip;
                        btn.fn = 'next';
                        btn.mode = (btn.brand + '' !== 'false') ? 'primary' : 'hollow';
                    } else {
                        // 默认浅色
                        btn.fn = 'custom';
                        btn.mode = (btn.brand + '' === 'true') ? 'primary' : 'hollow';
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
                    // 返回上一步可见的情况下（后面）
                    btns.push({
                        type: 'prev',
                        text: prevTip,
                        mode: 'hollow',
                        fn: 'prev',
                    })
                }

                let nextTip = '';
                if (stepIndex < stepInfos.length) {
                    // 1. 最后一步没有下一步
                    // 2. 自定义trigger的情况
                    nextTip = step.nextTip || defNextTip;
                }
                if (nextTip) {
                    // 下一步可见（前面）
                    btns.unshift({
                        type: 'next',
                        text: nextTip,
                        mode: 'primary',
                        fn: 'next',
                        callback: step.nextFn
                    })
                }
            }

            Magix.mix(step, {
                index: stepIndex,
                subs,
                visibleSubs,
                sideWrapper,
                sideData,
                hasSide,
                locked,
                btns,
            })
        })

        that.updater.digest({
            alreadyStep,
            stepInfos,
            curStepIndex,
            curSubStepIndex,
            curStepInfo: stepInfos[curStepIndex - 1],
            navSelected: (curSubStepIndex > 0) ? `${curStepIndex}_${curSubStepIndex}` : curStepIndex,
            navs: stepInfos.map(step => {
                return {
                    text: step.label,
                    value: step.index,
                    finished: (step.index < alreadyStep),
                    disabled: step.locked,
                    subs: step.visibleSubs.length > 1 ? step.visibleSubs.map(sub => {
                        return {
                            text: sub.label,
                            value: sub.index
                        }
                    }) : []
                }
            }),
        });
    },

    /**
     * 返回上一步
     */
    'prev<click>'(e) {
        this.scrollToTop();
        let { curStepIndex } = this.updater.get();
        Router.to({
            stepIndex: (+curStepIndex - 1),
            subStepIndex: 0,
        });
    },

    /**
     * 下一步：先校验能否提交
     */
    async 'next<click>'(e) {
        let that = this;
        let { btn } = e.params;

        // 防止重复点击
        let btnVf;
        try { btnVf = Vframe.get(e.eventTarget.id); } catch (error) { };
        if (btn.disabled) { return; }

        btn.disabled = true;
        if (btnVf) { btnVf.invoke('showLoading'); };

        let result = await that.checkSubs();
        if (result.ok) {
            that.showMsg('');

            // 下一步
            if (btn.callback) {
                btn.callback(result.remain).then(remainParams => {
                    btn.disabled = false;
                    if (btnVf) { btnVf.invoke('hideLoading'); };
                    that.next(remainParams || {});
                }, reason => {
                    that.showMsg(reason || '');
                    btn.disabled = false;
                    if (btnVf) { btnVf.invoke('hideLoading'); };
                })
            } else {
                btn.disabled = false;
                if (btnVf) { btnVf.invoke('hideLoading'); };
                that.next({});
            }
        } else {
            that.showMsg(result.msg);
            btn.disabled = false;
            if (btnVf) { btnVf.invoke('hideLoading'); };
        }
    },

    checkSubs() {
        let that = this;
        return new Promise(resolve => {
            let { curStepInfo } = that.updater.get();
            let subs = curStepInfo.subs;
            let models = subs.map(sub => {
                let vf = Vframe.get($(`[data-sub="${that.id}_sub_${sub.index}"]`)[0].id);
                return vf.invoke('check');
            });
            Promise.all(models).then(results => {
                let ok = true,
                    msgs = [],
                    remain = {};

                results.forEach((r: { ok: true, msg: '', remain: {} }, i) => {
                    ok = ok && r.ok;
                    if (!r.ok) {
                        msgs.push({
                            label: subs[i].label,
                            msg: r.msg || ''
                        })
                    }

                    // 同名数据合并
                    let rr = r.remain || {};
                    for (let k in rr) {
                        if (remain.hasOwnProperty(k)) {
                            if (Array.isArray(rr[k]) && Array.isArray(remain[k])) {
                                remain[k] = remain[k].concat(rr[k]);
                            } else if ($.isPlainObject(rr[k]) && $.isPlainObject(remain[k])) {
                                Magix.mix(remain[k], rr[k]);
                            } else {
                                remain[k] = rr[k];
                            }
                        } else {
                            remain[k] = rr[k];
                        }
                    }
                });

                resolve({
                    ok,
                    msg: `${msgs.map(m => `${m.label ? (m.label + '：') : ''}${m.msg}`).join('；')}`,
                    remain,
                })
            });
        })
    },

    /**
     * 自定义按钮逻辑
     */
    async 'custom<click>'(e) {
        let that = this;
        let { btn } = e.params;

        // 防止重复点击
        let btnVf;
        try { btnVf = Vframe.get(e.eventTarget.id); } catch (error) { };
        if (btn.disabled) { return; }

        btn.disabled = true;
        if (btnVf) { btnVf.invoke('showLoading'); };

        let customNext = (remain) => {
            // 有callback
            let bc = btn.callback && btn.callback(remain);
            if (bc && bc.then) {
                bc.then(() => {
                    btn.disabled = false;
                    if (btnVf) { btnVf.invoke('hideLoading'); };
                }, reason => {
                    that.showMsg(reason || '');
                    btn.disabled = false;
                    if (btnVf) { btnVf.invoke('hideLoading'); };
                });
            } else {
                btn.disabled = false;
                if (btnVf) { btnVf.invoke('hideLoading'); };
            }
        }

        if (btn.check) {
            // 需要调用子viewcheck
            let result = await that.checkSubs();
            if (result.ok) {
                that.showMsg('');
                customNext(result.remain);
            } else {
                that.showMsg(result.msg);
                btn.disabled = false;
                if (btnVf) { btnVf.invoke('hideLoading'); };
            }
        } else {
            // 不需要调用子viewcheck
            customNext({});
        }
    },

    next(remainParams) {
        this.scrollToTop();
        let { curStepIndex } = this.updater.get();
        Router.to(Magix.mix(remainParams, {
            stepIndex: +curStepIndex + 1,
            subStepIndex: 0,
        }));
    },

    showMsg(msg) {
        // <span id="{{=viewId}}_error" class="footer-view color-red footer-error aem-main-footer-error"></span>
        let errorNode = $(`#${this.id}_error`);
        if (!msg) {
            errorNode.html('');
        } else {
            errorNode.html(`<i class="mx-iconfont @nav.less:error-icon">&#xe71c;</i>${msg}`);
        }
    },

    /**
     * 展开收起子模块
     */
    'toggleSub<click>'(e) {
        let { curStepInfo } = this.updater.get(),
            subIndex = e.params.subIndex;

        Magix.mix(curStepInfo.subs[subIndex], {
            toggleState: !curStepInfo.subs[subIndex].toggleState,
        })
        // mx-main组件内仅做dom操作，防止子view重复digest
        this.updater.set({
            curStepInfo,
        });

        let sub = curStepInfo.subs[subIndex];
        let target = $(e.eventTarget);
        target.html(sub.toggleState ? '收起设置<i class="mc-iconfont @nav.less:toggle-icon">&#xe6b8;</i>' : '展开设置<i class="mc-iconfont @nav.less:toggle-icon">&#xe6b9;</i>');
        let subContent = this['@{owner.node}'].find(`[data-sub="${this.id}_sub_${sub.index}"]`);
        subContent[sub.toggleState ? 'show' : 'hide']();
    },

    'changeNav<change>'(e) {
        let arr = (e.selected + '').split('_');
        let curStepIndex = +arr[0],
            curSubStepIndex = +arr[1] || 0;
        if (curStepIndex === +this.updater.get('curStepIndex')) {
            // 切换子菜单
            this.updater.set({
                curStepIndex,
                curSubStepIndex,
            })
            this.scrollToSub();
        } else {
            // 切换主菜单
            this.scrollToTop();
            Router.to({
                stepIndex: curStepIndex,
                subStepIndex: curSubStepIndex,
            });
        }
    },

    scrollToTop() {
        $(window).scrollTop(0);
        // $(window).scrollTop(this['@{owner.node}'].offset().top);
    },

    scrollToSub() {
        let { stepInfos, curStepIndex, curSubStepIndex } = this.updater.get();
        if (curSubStepIndex > 0) {
            let sub = stepInfos[curStepIndex - 1].subs[curSubStepIndex - 1];
            let node = this['@{owner.node}'].find(`[data-sub="${this.id}_sub_${sub.index}"]`);
            let top = node.closest('.@nav.less:center-item').offset().top;
            try {
                window.scrollTo({ top, behavior: 'smooth' });
            } catch (error) {
                $(window).scrollTop(top);
            }
        }
    }
});