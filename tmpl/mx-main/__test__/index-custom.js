let Magix = require('magix');
let Router = Magix.Router;
let Dialog = require('@../../mx-dialog/index');

module.exports = Magix.View.extend({
    tmpl: '@index-custom.html',
    mixins: [Dialog],
    init() {
        this.updater.set({
            data: {} // 全局缓存数据，所有步骤的提交信息
        });

        // 如果没有额外的参数调整，此处可以 this.observeLocation(['stepIndex', 'subStepIndex'])
        // 组件步骤跳转时会往地址栏输入参数
        this.observeLocation(['campaignId', 'adgroupId']);
    },
    render() {
        let that = this;
        let locParams = Router.parse().params;
        let { data } = this.updater.get();

        let stepInfos = [{
            label: '设置计划',
            sideView: '@./tip',  // 自定义侧边提示view
            subs: [{
                label: '基本信息',
                view: '@./index-inner4'
            }],
            btns: [{
                text: '保存为草稿',
                check: true, // 是否需要调用子view的check方法
                callback: (remains) => {
                    // remains：当前步骤保留的信息
                    // something逻辑处理，此处未缓存到前端数据中，也可提交接口处理
                    Magix.mix(data, remains);

                    return new Promise(resolve => {
                        let dlg = that.alert('系统提示', '保存成功');
                        dlg.afterClose(resolve);
                    })
                }
            }, {
                type: 'next',
                callback: (remains) => {
                    // remains：当前步骤保留的信息
                    // something逻辑处理，此处未缓存到前端数据中，也可提交接口处理
                    Magix.mix(data, remains);

                    return new Promise(resolve => {
                        // 返回值为保留到地址栏的参数
                        resolve({
                            campaignId: 1
                        })
                    })
                }
            }],
            footerView: '@./index-footer', // 按钮旁自定义view
            footerData: {} // 传入footerView的data
        }, {
            label: '设置单元',
            sideTitle: '单元说明', // 使用默认侧边样式
            sideTip: '侧边提示信息（默认样式）',
            subs: [{
                label: '样式完全自定义',
                view: '@./custom',
                subHide: true,
                titleHide: true,
                bodyHide: true,
            }, {
                label: '推广宝贝',
                view: '@./index-inner5'
            }, {
                label: '出价方式',
                view: '@./index-inner'
            }],
            prevTip: '返回计划设置',
            nextTip: '下一步，完成',
            btns: [{
                type: 'prev'
            }, {
                text: '保存为草稿',
                check: true,
                callback: (remains) => {
                    // remains：当前步骤保留的信息
                    // something逻辑处理，此处未缓存到前端数据中，也可提交接口处理
                    Magix.mix(data, remains);

                    return new Promise(resolve => {
                        let dlg = this.alert('系统提示', '保存成功');
                        dlg.afterClose(resolve);
                    })
                }
            }, {
                type: 'next',
                callback: (remains) => {
                    // remains：当前步骤保留的信息
                    // something逻辑处理，此处未缓存到前端数据中，也可提交接口处理
                    Magix.mix(data, remains);

                    return new Promise(resolve => {
                        // 返回值为保留到地址栏的参数
                        resolve({
                            adgroupId: 1
                        })
                    })
                }
            }]
        }, {
            label: '完成创建',
            subs: [{
                label: '完成标题',
                view: '@./index-inner6'
            }],
            btns: [{
                text: '查看已创建的',
                callback: () => {
                    Router.to('/main/index');
                }
            }, {
                text: '再次新建',
                brand: true,
                callback: () => {
                    Router.to('/main/index-custom');
                }
            }]
        }];

        // 计算已到达完成步骤
        let alreadyStep = 1;
        if (locParams.campaignId) {
            alreadyStep = 2;
            if (locParams.adgroupId) {
                alreadyStep = 3;
            }
        }

        stepInfos.forEach(step => {
            step.subs.forEach(sub => {
                // 全局data传入子view，可通过该方式实现前端本地分步骤缓存
                Magix.mix(sub, {
                    data
                })
            });
        })

        this.updater.digest({
            stepInfos,
            alreadyStep
        });
    }
});