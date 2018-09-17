let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        this.updater.digest({});
    }
});
// let Magix = require('magix');
// let Router = Magix.Router;
// let Data = require('@./data');
// Magix.applyStyle('@index.less');

// module.exports = Magix.View.extend({
//     tmpl: '@index.html',
//     init() {
//         let that = this;
//         let locParams = Router.parse().params;
//         let curStepIndex = +locParams.stepIndex || 1, //从1开始
//             curSubStepIndex = +locParams.subStepIndex || -1; //-1（在主导航上），1（具体步骤上），2，3
//         create = +locParams.create || 1; // create：2从横向管理进来新建单元

//         that.updater.set({
//             viewInfo: { //本页面需要的数据
//                 stepInfos: [], //所有的步骤信息
//                 curStepIndex,
//                 curSubStepIndex
//             },
//             childInfo: { //向子view传递的数据
//                 create: create, //新建计划1还是新建单元2
//                 alreadyStep: curStepIndex, //计划已到达步骤
//                 campaign: {},
//                 curStepInfo: {} //当前步骤信息
//             }
//         })
//         that.observeLocation(['stepIndex', 'subStepIndex']);

//         // 防止用户篡改地址栏信息，回退到需要的步骤
//         let campaignStep = Data.indexMap.campaign,
//             adgroupStep = Data.indexMap.adgroup;

//         let alreadyMap = {
//             campaignId: campaignStep, //没有创建计划不能走到第二步单元
//             adgroupIds: adgroupStep //没有创建单元不能走到第三步创意
//         }
//         for (let key in alreadyMap) {
//             if (!locParams[key] && (curStepIndex > alreadyMap[key])) {
//                 Router.to({
//                     stepIndex: alreadyMap[key],
//                     subStepIndex: -1
//                 });
//                 return;
//             }
//         }

//         // create：2从横向管理进来新建单元
//         // 没有推广单元情况下，跳回推广单元重新新建
//         if ((create == 2) && !locParams.adgroupIds && (curStepIndex > adgroupStep)) {
//             Router.to({
//                 stepIndex: adgroupStep,
//                 subStepIndex: -1
//             });
//             return
//         }
//     },

//     render() {
//         let that = this;
//         let locParams = Router.parse().params;
//         let curStepIndex = +locParams.stepIndex || 1, //从1开始
//             curSubStepIndex = +locParams.subStepIndex || -1;

//         let viewInfo = that.updater.get('viewInfo'),
//             childInfo = that.updater.get('childInfo');

//         Magix.mix(viewInfo, {
//             curStepIndex,
//             curSubStepIndex
//         })

//         if (!that.$inited) {
//             // 首次渲染
//             let campaignId = locParams.campaignId,
//                 adgroupIds = locParams.adgroupIds,
//                 productId = Magix.config('zs_scaffold.all').itemProductId;

//             let models = [];
//             if (campaignId) {
//                 // 已有计划
//                 models.push({
//                     name: 'campaign_get_get',
//                     params: {
//                         productId: productId,
//                         campaignId: campaignId
//                     }
//                 })

//                 if (adgroupIds) {
//                     // 已有单元
//                     models.push({
//                         name: 'adgroup_findBindList_get',
//                         params: {
//                             productId: productId,
//                             adgroupIdList: adgroupIds
//                         }
//                     })
//                 }
//             }
//             if (models.length) {
//                 // 编辑
//                 // that.fetch(models, (err, modelCampaign, modelAdgroups) => {
//                 //     if (err) {
//                 //         that.alert('系统异常', err.msg);
//                 //         return;
//                 //     }

//                 //     Magix.mix(childInfo.campaign, modelCampaign.get('data', {}));
//                 //     childInfo.campaign.adgroupList = [];
//                 //     let alreadyStep = Data.indexMap.campaign + 1; //已到单元页面

//                 //     if (modelAdgroups) {
//                 //         childInfo.campaign.adgroupList = modelAdgroups.get('data.list', []);
//                 //         alreadyStep = Data.indexMap.adgroup + 1; //已到创意页面
//                 //     }
//                 //     // 草稿状态
//                 //     childInfo.alreadyStep = Math.max(alreadyStep, curStepIndex);
//                 //     that.renderFn(viewInfo, childInfo);
//                 //     that.$inited = 1;
//                 // })

//                 let campaign = {},
//                     adgroupList = [];
//                 Magix.mix(childInfo.campaign, campaign);
//                 childInfo.campaign.adgroupList = [];
//                 let alreadyStep = Data.indexMap.campaign + 1; //已到单元页面

//                 if (adgroupIds) {
//                     childInfo.campaign.adgroupList = adgroupList;
//                     alreadyStep = Data.indexMap.adgroup + 1; //已到创意页面
//                 }
//                 // 草稿状态
//                 childInfo.alreadyStep = Math.max(alreadyStep, curStepIndex);
//                 that.renderFn(viewInfo, childInfo);
//                 that.$inited = 1;
//             } else {
//                 // 新建
//                 childInfo.alreadyStep = curStepIndex;
//                 that.renderFn(viewInfo, childInfo);
//                 that.$inited = 1;
//             }
//         } else {
//             // locationChange
//             let diffParams = Router.diff().params;
//             let stepChangeInfo = diffParams.stepIndex,
//                 subStepChangeInfo = diffParams.subStepIndex;

//             if (!stepChangeInfo || (!stepChangeInfo.from && (stepChangeInfo.to == 1))) {
//                 // 1. stepIndex 没有变化，变化的为subStepIndex
//                 // 2. stepIndex 从 undefined 到 1，不需要响应

//                 // 父view监听subStepIndex只改变侧导航的状态，不切换子view的模块
//                 // 子view里监听subStepIndex去切换至对应的模块
//                 that.updater.digest({
//                     viewInfo
//                 });
//             } else {
//                 childInfo.alreadyStep = Math.max(childInfo.alreadyStep, curStepIndex);
//                 that.renderFn(viewInfo, childInfo);
//             }

//         }
//     },

//     renderFn(viewInfo, childInfo) {
//         let curStepIndex = viewInfo.curStepIndex;
//         let stepInfos = Data.getSteps({
//             curStepIndex: curStepIndex,
//             create: childInfo.create,
//             alreadyStep: childInfo.alreadyStep,
//             campaign: childInfo.campaign
//         });
//         viewInfo.stepInfos = stepInfos;

//         let curStepInfo = stepInfos[curStepIndex - 1];
//         childInfo.curStepInfo = curStepInfo;
//         this.updater.set({
//             viewHeight: $(window).height(),
//             viewInfo: viewInfo,
//             childInfo: childInfo
//         }).digest();
//         this.owner.mountVframe('vf_main_content', '@./' + curStepInfo.id + '/index', {
//             parentInfo: childInfo
//         });
//     },

//     '$win<scroll>' () {
//         let that = this;

//         let that = this;
//         let context = $('#' + that.id);
//         let content = context.find('.main-content');
//         if (!content.length) {
//             return;
//         }
//         let nav = context.find('.main-nav');
//         let scrollTop = $(window).scrollTop();
//         let contentTop = content.offset().top;
//         if (scrollTop > contentTop) {
//             nav.css({
//                 position: 'fixed'
//             })
//         } else {
//             nav.css({
//                 position: 'absolute'
//             })
//         }
//     },
//     '$win<resize>' () {
//         let that = this;

//         that.updater.set({
//             viewHeight: $(window).height()
//         }).digest();
//     },

//     'nav<click>' (e) {
//         let params = e.params;
//         let stepIndex = params.stepIndex,
//             subStepIndex = params.subStepIndex;

//         Router.to({
//             stepIndex: stepIndex,
//             subStepIndex: subStepIndex
//         })
//     }

// });