let Magix = require('magix');
let Router = Magix.Router;

module.exports = Magix.View.extend({
    tmpl: '@index-def.html',
    init() {
        this.updater.set({
            data: {} // 全局缓存数据，所有步骤的提交信息
        });

        // 如果没有额外的参数调整，此处可以 this.observeLocation(['stepIndex', 'subStepIndex'])
        // 组件步骤跳转时会往地址栏输入参数
        this.observeLocation(['campaignId', 'adgroupId', 'creativeId']);
    },
    render() {
        let locParams = Router.parse().params;
        let { data } = this.updater.get();

        let stepInfos = [{
            label: '设置计划',
            sideView: '@./tip',  // 自定义侧边提示view
            sideData: {
                tip: '默认传入的数据'
            },
            subs: [{
                label: '基本信息',
                tip: '提示信息',
                icon: '<i class="mc-iconfont">&#xe612;</i>',
                view: '@./index-inner1'
            }],
            nextTip: '下一步，设置计划',
            nextFn: (remains) => {
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
        }, {
            label: '设置单元',
            sideTitle: '单元说明', // 使用默认侧边样式
            sideTip: `<div>说明：</div>
                    <div>1、条件1</div>
                    <div>2、条件2</div>
                    <div>3、条件3</div>`,
            subs: [{
                label: '推广宝贝',
                icon: '<i class="mc-iconfont">&#xe613;</i>',
                view: '@./index-inner2'
            }, {
                label: '出价方式',
                view: '@./index-inner'
            }],
            prevTip: '返回计划设置',
            nextTip: '下一步，设置创意',
            nextFn: (remains) => {
                // remains：当前步骤保留的信息
                // something逻辑处理，此处未缓存到前端数据中，也可提交接口处理
                Magix.mix(data, remains);

                return new Promise((resolve, reject) => {
                    // something 逻辑处理
                    let num = Math.ceil(Math.random() * 100);
                    if (num % 2 == 0) {
                        // 异常处理
                        reject('处理异常，错误提示信息');
                    } else {
                        // 正确处理：返回值为保留到地址栏的参数
                        resolve({
                            adgroupId: 1
                        })
                    }
                })
            }
        }, {
            label: '设置创意',
            sideTitle: '创意说明', // 使用默认侧边样式
            sideTip: `<div>说明：</div>
                    <div>1、条件1</div>
                    <div>2、条件2</div>
                    <div>3、条件3</div>`,
            subs: [{
                label: '创意示例',
                view: '@./index-inner7',
                subHide: true, // 左侧导航不显示，操作区域显示
                titleHide: true // 不显示标题
            }, {
                label: '添加创意',
                view: '@./index-inner'
            }, {
                label: '创意优选',
                view: '@./index-inner'
            }],
            prevTip: '返回单元设置',
            nextTip: '下一步，完成',
            nextFn: (remains) => {
                // remains：当前步骤保留的信息，提交处理
                return new Promise(resolve => {
                    // 返回值为保留到地址栏的参数
                    resolve({
                        creativeId: 1
                    });
                })
            }
        }, {
            label: '完成创建',
            subs: [{
                label: '完成标题',
                view: '@./index-inner3'
            }]
        }];

        // 计算已到达完成步骤
        let alreadyStep = 1;
        if (locParams.campaignId) {
            alreadyStep = 2;
            if (locParams.adgroupId) {
                alreadyStep = 3;
                if (locParams.creativeId) {
                    alreadyStep = 4;
                }
            }
        }

        let len = stepInfos.length;
        stepInfos.forEach(step => {
            // 到达最后一步时，前面的步骤不可返回操作了，配置locked=true即可
            Magix.mix(step, {
                locked: (alreadyStep == len)
            });

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
    },
});