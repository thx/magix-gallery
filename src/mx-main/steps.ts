/**
 *  流程步骤组件：
 *  stepIndex定义：当前步骤，从1开始
 */
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
const Router = Magix.Router;
const Vframe = Magix.Vframe;

export default View.extend({
    init(extra) {
        let that = this;

        that.updater.set({
            alreadyStep: extra.alreadyStep || 1,
            originStepInfos: extra.stepInfos || [], //所有的步骤信息
            viewHeight: $(window).height()
        })

        that.observeLocation(['stepIndex']);
    },
    render() {
        let that = this;

        let updater = that.updater;
        let alreadyStep = +updater.get('alreadyStep');
        let stepInfos = $.extend(true, [], updater.get('originStepInfos'));

        let locParams = Router.parse().params;
        // 主步骤信息从1开始
        let curStepIndex = +(locParams.stepIndex || 1);
        if (curStepIndex > alreadyStep) {
            alreadyStep = curStepIndex;
        }

        let defPrevTip = '返回上一步',
            defNextTip = '下一步';
        stepInfos.forEach((step, i) => {
            let stepIndex = i + 1;
            step.index = stepIndex;

            // <= 当前步骤 展开子列表
            step.locked = (step.locked + '' === 'true') || (stepIndex > alreadyStep);
            step.lineOn = (stepIndex < alreadyStep);
            step.current = (stepIndex == curStepIndex);

            // 默认用序号
            step.icon = step.icon || `<span class="fontsize-16">${step.index}</span>`;

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
                        if (btn.callback) {
                            step.nextFn = btn.callback;
                        }
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
                        fn: 'next'
                    })
                }
            }
            step.btns = btns;
        })
        that.updater.digest({
            alreadyStep,
            stepInfos,
            curStepInfo: stepInfos[curStepIndex - 1],
            curStepIndex
        });
    },

    showMsg(msg) {
        let errorNode = $(`#${this.id}_error`);
        if (!msg) {
            errorNode.html('');
        } else {
            errorNode.html(`<i class="mc-iconfont displacement-2">&#xe6ad;</i>${msg}`);
        }
    },
    /**
     * 自定义按钮逻辑
     */
    'custom<click>'(e) {
        let that = this;
        let { btn } = e.params;
        if (btn.check) {
            // 先校验能否提交
            let curStepInfo = that.updater.get('curStepInfo');
            let vf = Vframe.get(that.id + '_cur_content');
            vf.invoke('check').then(result => {
                if (result.ok) {
                    that.showMsg('');
                    // 下一步
                    if (btn.callback) {
                        btn.callback(result.remain);
                    }
                } else {
                    that.showMsg(result.msg);
                }
            });
        } else {
            // 不需要调用子viewcheck
            if (btn.callback) {
                btn.callback();
            }
        }
    },
    'prev<click>'(e) {
        let { curStepIndex } = this.updater.get();
        Router.to({
            stepIndex: (+curStepIndex - 1)
        });
    },
    'next<click>'(e) {
        let that = this;
        // 先校验能否提交
        let curStepInfo = that.updater.get('curStepInfo');
        let vf = Vframe.get(that.id + '_cur_content');
        vf.invoke('check').then(result => {
            if (result.ok) {
                that.showMsg('');
                // 下一步
                if (curStepInfo.nextFn) {
                    curStepInfo.nextFn(result.remain).then(remainParams => {
                        that.next(remainParams);
                    })
                } else {
                    that.next({});
                }
            } else {
                that.showMsg(result.msg);
            }
        });
    },
    next(remainParams) {
        let that = this;
        let curStepIndex = that.updater.get('curStepIndex');
        remainParams.stepIndex = +curStepIndex + 1;
        Router.to(remainParams);
    },
    'nav<click>'(e) {
        let { stepIndex } = e.params;
        Router.to({
            stepIndex
        });
    }
});

