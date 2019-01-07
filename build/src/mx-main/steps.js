/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/steps",["magix"],(require,exports,module)=>{
/*Magix*/

/**
 *  流程步骤组件：
 *  stepIndex定义：当前步骤，从1开始
 */
var Magix = require("magix");
var Router = Magix.Router;
var Vframe = Magix.Vframe;
Magix.applyStyle("_zs_gallery_mx-main_step_","/* @dependent: ./index.less */\n._zs_gallery_mx-main_step_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-main_step_-step-error {\n  position: relative;\n  padding-top: 10px;\n  padding-left: 20px;\n  color: #a40100;\n}\n._zs_gallery_mx-main_step_-step-error ._zs_gallery_mx-main_step_-error-icon {\n  position: absolute;\n  left: 0;\n  top: 10px;\n  color: #a40100;\n}\n");
module.exports = Magix.View.extend({
    init: function (extra) {
        var that = this;
        that.updater.set({
            alreadyStep: extra.alreadyStep || 1,
            stepInfos: extra.stepInfos || [],
            viewId: that.id,
            viewHeight: $(window).height()
        });
        that.observeLocation(['stepIndex']);
    },
    render: function () {
        var that = this;
        var updater = that.updater;
        var alreadyStep = +updater.get('alreadyStep'), stepInfos = updater.get('stepInfos');
        var locParams = Router.parse().params;
        // 主步骤信息从1开始
        var curStepIndex = +(locParams.stepIndex || 1);
        if (curStepIndex > alreadyStep) {
            alreadyStep = curStepIndex;
        }
        var defPrevTip = '返回上一步', defNextTip = '下一步';
        stepInfos.forEach(function (step, i) {
            var stepIndex = i + 1;
            step.index = stepIndex;
            // <= 当前步骤 展开子列表
            step.locked = (stepIndex > alreadyStep);
            step.lineOn = (stepIndex < alreadyStep);
            step.current = (stepIndex == curStepIndex);
            // 默认用序号
            step.icon = step.icon || "<span class=\"fontsize-16\">" + step.index + "</span>";
            var prevTip = '';
            if ((stepIndex > 1) && (!stepInfos[i - 1].locked)) {
                // 1. 第一步没有返回上一步
                // 2. 上一步被锁定的情况下没有返回上一步
                prevTip = step.prevTip || defPrevTip;
            }
            step.prevTip = prevTip;
            var nextTip = '';
            if (stepIndex < stepInfos.length) {
                // 1. 最后一步没有下一步
                nextTip = step.nextTip || defNextTip;
            }
            step.nextTip = nextTip;
        });
        if ((locParams.stepIndex + '') !== (curStepIndex + '')) {
            // 确保路由地址参数和当前参数保持完全一致
            Router.to({
                stepIndex: curStepIndex
            });
            return;
        }
        that.updater.digest({
            alreadyStep: alreadyStep,
            stepInfos: stepInfos,
            curStepInfo: stepInfos[curStepIndex - 1],
            curStepIndex: curStepIndex
        });
    },
    'prev<click>': function (e) {
        var curStepIndex = this.updater.get('curStepIndex');
        Router.to({
            stepIndex: (+curStepIndex - 1)
        });
    },
    'nav<click>': function (e) {
        var params = e.params;
        var stepIndex = params.stepIndex;
        Router.to({
            stepIndex: stepIndex
        });
    },
    next: function (remainParams) {
        var that = this;
        var curStepIndex = that.updater.get('curStepIndex');
        remainParams.stepIndex = +curStepIndex + 1;
        Router.to(remainParams);
    },
    'next<click>': function (e) {
        var that = this;
        // 先校验能否提交
        var curStepInfo = that.updater.get('curStepInfo');
        var vf = Vframe.get(that.id + '_cur_content');
        vf.invoke('check').then(function (result) {
            var errorNode = $('#' + that.id + '_error');
            if (result.ok) {
                errorNode.html('');
                // 下一步
                if (curStepInfo.nextFn) {
                    curStepInfo.nextFn(result.remain, function (remainParams) {
                        that.next(remainParams);
                    });
                }
                else {
                    that.next({});
                }
            }
            else {
                errorNode.html("<div class=\"_zs_gallery_mx-main_step_-step-error\"><i class=\"mc-iconfont _zs_gallery_mx-main_step_-error-icon\">&#xe6ad;</i>" + result.msg + "</div>");
            }
        });
    }
});

});