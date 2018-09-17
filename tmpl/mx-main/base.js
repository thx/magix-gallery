let Magix = require('magix');
let View = require('zs_scaffold/view')
let Data = require('@./data');
let Router = Magix.Router;

module.exports = View.extend({
    init(e) {
        let that = this;

        that.viewOptions = e;

        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        //该处是否可以由magix自动调用
        that.assign(e);

        that.owner.oncreated = () => {
            if (!that.$created) {
                // 所有子view渲染完成之后，同步subStepIndex的状态
                // 只在首次render的时候调用一次
                // 之后子view组件更新不响应
                that.syncSubStep();

                that.$created = 1;
            }
        };
        that.ondestroy = () => {
            that.owner.off('created');
        }

        that.observeLocation(['subStepIndex']);
    },
    assign(viewOptions) {
        let that = this;
        //赋值前先进行数据变化的检测,首次assign是在init方法中调用,后续的调用是magix自动调用,这个检测主要用于在首次调用后,magix自动调用前有没有进行数据的更新
        let altered = that.updater.altered();

        //在这里对数据data进行加工,然后通过set方法放入到updater中
        // 是否需要保留编辑中的内容

        // create: 新建计划1还是新建单元2
        // alreadyStep: 计划已到达步骤
        // campaign: 计划信息
        // curStepInfo: 当前步骤信息
        let parentInfo = $.extend(true, {}, viewOptions.parentInfo);
        let campaign = parentInfo.campaign,
            create = parentInfo.create,
            locParams = Router.parse().params;;

        // 是否是单元生成状态
        // 单元生成后，部分信息不可修改（诉求场景信息，出价方式）
        campaign.promotionDisabled = (create == 2) || !!locParams.adgroupIds;

        let stepInfo = parentInfo.curStepInfo;
        this.updater.set({
            stepInfo,
            campaign: campaign,
            create: create
        })

        // 当前步骤对应的流程index
        this.stepIndex = Data.indexMap[stepInfo.id];

        //如果数据没变化,则设置新的数据后再次检测
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) { //如果有变化,则再保存当前的快照,然后返回true告诉magix当前view需要更新
            that.updater.snapshot();
            return true;
        }
        return false; //如果数据没变化,则告诉magix当前view不用更新
    },
    render() {
        let that = this;
        if (!that.$init) {
            // 首次渲染
            that.firstRender();
            that.$init = 1;
        } else {
            // locationChange subStepIndex
            that.syncSubStep();
        }
    },
    syncSubStep() {
        let that = this;
        let locParams = Router.parse().params;
        let subStepIndex = +locParams.subStepIndex || -1;
        let contentBoxes = $('#' + that.id + ' .content-box');
        let top = 0;
        if (subStepIndex > 0) {
            top = contentBoxes.eq(subStepIndex - 1).offset().top
        }
        $(window).scrollTop(top);
    },
    check() {
        let that = this;
        let stepInfo = that.updater.get('stepInfo');
        let ok = true,
            remain = {};
        let context = $('#' + that.id);
        for (let i = 0, len = stepInfo.subs.length; i < len; i++) {
            let sub = stepInfo.subs[i];
            // invoke返回数组
            let results = context.find('#' + stepInfo.id + '_' + sub.id).invokeView('submit') || [];
            let result = results[0] || {};
            ok = ok && result.ok;
            Magix.mix(remain, result.remain);
        }
        return {
            ok: ok,
            remain: $.extend(true, {}, remain) //防止提交失败的时候已经对参数进行了处理
        }
    },
    'back<click>' (e) {
        e.preventDefault();
        Router.to({
            stepIndex: this.stepIndex - 1,
            subStepIndex: -1
        })

    }
});