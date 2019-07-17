/**
 *  流程步骤组件：
 *  stepIndex定义：当前步骤，从1开始
 */
let Magix = require('magix');
let Router = Magix.Router;
let Vframe = Magix.Vframe;
Magix.applyStyle('@step.less');

module.exports = Magix.View.extend({
    init(extra) {
        let that = this;

        that.updater.set({
            alreadyStep: extra.alreadyStep || 1,
            stepInfos: extra.stepInfos || [], //所有的步骤信息
            viewId: that.id,
            viewHeight: $(window).height()
        })

        that.observeLocation(['stepIndex']);
    },
    render() {
        let that = this;

        let updater = that.updater;
        let alreadyStep = +updater.get('alreadyStep'),
            stepInfos = updater.get('stepInfos');

        let locParams = Router.parse().params;
        // 主步骤信息从1开始
        let curStepIndex = +(locParams.stepIndex || 1);
        if(curStepIndex > alreadyStep){
            alreadyStep = curStepIndex;
        }

        let defPrevTip = '返回上一步',
            defNextTip = '下一步';
        stepInfos.forEach((step, i) => {
            let stepIndex = i + 1;
            step.index = stepIndex;

            // <= 当前步骤 展开子列表
            step.locked = (stepIndex > alreadyStep);
            step.lineOn = (stepIndex < alreadyStep);
            step.current = (stepIndex == curStepIndex);

            // 默认用序号
            step.icon = step.icon || `<span class="fontsize-16">${step.index}</span>`;

            let prevTip = '';
            if ((stepIndex > 1) && (!stepInfos[i - 1].locked)) {
                // 1. 第一步没有返回上一步
                // 2. 上一步被锁定的情况下没有返回上一步
                prevTip = step.prevTip || defPrevTip;
            }
            step.prevTip = prevTip;

            let nextTip = '';
            if (stepIndex < stepInfos.length) {
                // 1. 最后一步没有下一步
                nextTip = step.nextTip || defNextTip;
            }
            step.nextTip = nextTip;
        })
        if ((locParams.stepIndex + '') !== (curStepIndex + '')) {
            // 确保路由地址参数和当前参数保持完全一致
            Router.to({
                stepIndex: curStepIndex
            })
            return;
        }
        that.updater.digest({
            alreadyStep,
            stepInfos,
            curStepInfo: stepInfos[curStepIndex - 1],
            curStepIndex
        });
    },

    'prev<click>'(e) {
        let curStepIndex = this.updater.get('curStepIndex');
        Router.to({
            stepIndex: (+curStepIndex - 1)
        });
    },
    'nav<click>'(e){
        let params = e.params;
        let stepIndex = params.stepIndex;
        Router.to({
            stepIndex
        });
    },
    next(remainParams) {
        let that = this;
        let curStepIndex = that.updater.get('curStepIndex');
        remainParams.stepIndex = +curStepIndex + 1;
        Router.to(remainParams);
    },
    'next<click>'(e) {
        let that = this;
        // 先校验能否提交
        let curStepInfo = that.updater.get('curStepInfo');
        let vf = Vframe.get(that.id + '_cur_content');
        vf.invoke('check').then(result => {
            let errorNode = $('#' + that.id + '_error');
            if(result.ok){
                errorNode.html('');
                // 下一步
                if(curStepInfo.nextFn){
                    curStepInfo.nextFn(result.remain, (remainParams) => {
                        that.next(remainParams);
                    });
                }else{
                    that.next({});
                }
            }else{
                errorNode.html(`<div class="@step.less:step-error"><i class="mc-iconfont @step.less:error-icon">&#xe6ad;</i>${result.msg}</div>`);
            }
        });
    }
});