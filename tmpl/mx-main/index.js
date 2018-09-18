let Magix = require('magix');
let Router = Magix.Router;
let Data = require('@./data');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init() {
        let that = this;

        that.updater.set({
            stepInfos: Data.getSteps(), //所有的步骤信息
            childInfo: {},
            viewHeight: $(window).height()
        })
        that.observeLocation(['stepIndex', 'subStepIndex']);
    },

    render() {
        let that = this;
        let locParams = Router.parse().params;
        
        // 从1开始
        let curStepIndex = +locParams.stepIndex || 1;

        // -1：在主导航上
        // >0：1，2，3
        let curSubStepIndex = +locParams.subStepIndex || -1; 
        let stepInfos = that.updater.get('stepInfos');

        that.updater.digest({
            curStepIndex,
            curSubStepIndex,
            curStepInfo: stepInfos[curStepIndex]
        })
        return;

        if (!that.$inited) {
            // 首次渲染
            
        } else {
            // locationChange
            let diffParams = Router.diff().params;
            let stepChangeInfo = diffParams.stepIndex,
                subStepChangeInfo = diffParams.subStepIndex;

            if (!stepChangeInfo || (!stepChangeInfo.from && (stepChangeInfo.to == 1))) {
                // 1. stepIndex 没有变化，变化的为subStepIndex
                // 2. stepIndex 从 undefined 到 1，不需要响应

                // 父view监听subStepIndex只改变侧导航的状态，不切换子view的模块
                // 子view里监听subStepIndex去切换至对应的模块
                
            } else {
               
            }

        }
    },

    renderFn(viewInfo, childInfo) {
        let curStepIndex = viewInfo.curStepIndex;
        let stepInfos = Data.getSteps({
            curStepIndex: curStepIndex,
            create: childInfo.create,
            alreadyStep: childInfo.alreadyStep,
            campaign: childInfo.campaign
        });
        viewInfo.stepInfos = stepInfos;

        let curStepInfo = stepInfos[curStepIndex - 1];
        childInfo.curStepInfo = curStepInfo;
        this.updater.set({
            viewHeight: $(window).height(),
            viewInfo: viewInfo,
            childInfo: childInfo
        }).digest();
        this.owner.mountVframe('vf_main_content', '@./' + curStepInfo.id + '/index', {
            parentInfo: childInfo
        });
    },

    '$win<scroll>' () {
        let that = this;

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
    },
    '$win<resize>' () {
        let that = this;

        that.updater.set({
            viewHeight: $(window).height()
        }).digest();
    },

    'nav<click>' (e) {
        let params = e.params;
        let stepIndex = params.stepIndex,
            subStepIndex = params.subStepIndex;

        Router.to({
            stepIndex: stepIndex,
            subStepIndex: subStepIndex
        })
    }

});