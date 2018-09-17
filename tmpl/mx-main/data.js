/**
 *  * step定义
 *      2：计划
 *      3：单元
 *      4：创意
 *      5：创建完成
 *  * subStep定义
 *      -1：不停留在具体的子view上
 *      >0：具体某一个子步骤
 */
let StepInfos = [{
    id: 'campaign',
    label: '设置计划',
    icon: '&#xe64a;',
    subsFn: () => {
        return [{
            id: 'appeal',
            label: '营销场景'
        }, {
            id: 'base',
            label: '基本信息'
        }]
    }
}, {
    id: 'adgroup',
    label: '设置单元',
    icon: '&#xe6bb;',
    subsFn: (c) => {
        return [{
            id: 'item',
            label: '推广宝贝'
        }, {
            id: 'price',
            label: '出价方式'
        }, {
            id: 'target',
            label: '定向人群'
        }, {
            id: 'adzone',
            label: '资源位'
        }]
    }
}, {
    id: 'creative',
    label: '添加创意',
    icon: '&#xe64c;',
    subsFn: () => {
        return [];
    }
}, {
    id: 'complete',
    label: '完成创建',
    icon: '&#xe64d;',
    subsFn: () => {
        return [];
    }
}]

// 步骤id
let IndexMap = {};
StepInfos.forEach((stepInfo, stepIndex) => {
    IndexMap[stepInfo.id] = stepIndex + 1;
})

module.exports = {
    indexMap: IndexMap,
    getSteps(info) {
        let curStepIndex = info.curStepIndex,
            alreadyStep = info.alreadyStep,
            create = info.create,
            campaign = info.campaign;
        let stepInfos = $.extend(true, [], StepInfos);
        let len = stepInfos.length,
            adgroupStep = IndexMap.adgroup;
        stepInfos.forEach((step, index) => {
            // 是否为当前步骤
            let stepIndex = index + 1;
            step.current = (stepIndex == curStepIndex);

            // 该步骤是否上锁（是否可编辑）
            // 主流程中
            //      1. 已到步 + 已到步之前的不上锁
            //      2. 最后一步时之前的都不可编辑，都上锁
            // 
            // 横向管理进入主流程新增单元（营销诉求和计划基本信息都不可修改）
            //      第一步+第二步上锁
            step.locked = (create == 2 && (stepIndex < adgroupStep)) || (stepIndex > alreadyStep) ||
                ((alreadyStep >= len) && (stepIndex < len));

            // 该步骤是否展开：已到步骤之前的都展开
            step.expand = (alreadyStep >= stepIndex);

            if (step.expand) {
                step.subs = step.subsFn(campaign);
            } else {
                step.subs = [];
            }
        })

        return stepInfos;
    }
};