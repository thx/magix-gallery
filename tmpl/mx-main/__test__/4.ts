import Magix, { Router } from 'magix';
import * as Base from '__test__/example';
Magix.applyStyle('@nav.less');

export default Base.extend({
    tmpl: '@4.html',
    init() {
        let d = {};
        for (let i = 1; i < 20; i++) {
            d[`text${i}`] = '复制代码';
        }

        this.updater.set({
            ...d,
            data: {
                marketScenes: [{
                    value: 1,
                    text: '场景1',
                    tip: '单元步骤包含：推广宝贝 + 出价方式',
                    subLabels: ['推广宝贝', '出价方式'],
                }, {
                    value: 2,
                    text: '场景2',
                    tip: '单元步骤包含：定向人群 + 溢价资源位 + 出价',
                    subLabels: ['定向人群', '溢价资源位', '出价'],
                }, {
                    value: 3,
                    text: '场景3',
                    tip: '单元步骤包含：推广宝贝 + 橱窗宝贝设置',
                    subLabels: ['推广宝贝', '橱窗宝贝设置'],
                }],
                selected: {}
            }
        })
        this.observeLocation(['marketScene', 'campaignId', 'adgroupId']);
    },
    render() {
        let that = this;
        let locParams = Router.parse().params;
        let { data } = that.updater.get();

        // 当前场景信息
        Magix.mix(data.selected, {
            marketScene: locParams.marketScene || 1
        })
        let sceneInfo = {};
        for (let i = 0; i < data.marketScenes.length; i++) {
            if (data.marketScenes[i].value == data.selected.marketScene) {
                sceneInfo = data.marketScenes[i];
                break;
            }
        };
        // 场景不同，对应的步骤配置不同
        let stepInfos = [{
            label: '设置计划',
            subs: [{
                label: '计划基本信息',
                view: '@./index-dynamic-inner3',
                notice: '切换营销场景左侧导航联动变化，保留其他设置',
                noticeType: 'warn',
                titleRightView: '@./title-right',
            }].concat(sceneInfo['subLabels'].map(subLabel => {
                return {
                    label: subLabel,
                    view: '@./index-dynamic-inner4',
                    notice: '切换营销场景左侧导航联动变化，保留其他设置',
                }
            })),
            btns: [{
                type: 'next',
                text: '下一步，设置计划',
                callback: (remains) => {
                    // remains：当前步骤保留的信息，提交处理
                    return new Promise((resolve, reject) => {
                        Magix.mix(data.selected, remains, {
                            campaignId: 1
                        });

                        // 返回值为保留到地址栏的参数
                        resolve({
                            campaignId: data.selected.campaignId
                        })
                    })
                }
            }, {
                text: '自定义按钮(检验)',
                check: true,
                callback: (remains) => {
                    return new Promise((resolve, reject) => {
                        let dlg = that.alert('系统提示', '保存成功');
                        dlg.afterClose(resolve);
                    })
                }
            }, {
                text: '自定义按钮(跳过检验)',
                callback: (remains) => {
                    return new Promise((resolve, reject) => {
                        reject('系统异常');
                    })
                }
            }],
            footerView: '@./index-footer-fixed', // 按钮旁自定义view
            footerData: sceneInfo,
        }, {
            label: '完成创建',
            subs: [{
                label: '计划创建完成',
                view: '@./index-dynamic-inner2'
            }]
        }];

        // 当前已到达步骤
        let alreadyStep = 1;
        if (locParams.campaignId) {
            alreadyStep = 2;
        }

        let len = stepInfos.length;
        stepInfos.forEach((step, i) => {
            // 到达最后一步时，前面的步骤都不可编辑
            step.locked = (alreadyStep == len && i < len - 1);

            // 补充全局数据
            step.subs.forEach(sub => {
                Magix.mix(sub, {
                    data
                })
            })
        })

        that.updater.digest({
            stepInfos,
            alreadyStep,
        });
    }
});