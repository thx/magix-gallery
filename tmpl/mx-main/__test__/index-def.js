let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;

module.exports = Magix.View.extend({
    tmpl: '@index-def.html',
    init() {
        this.observeLocation(['campaignId', 'adgroupId', 'creativeId']);
    },
    render() {
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
                // remains：当前步骤保留的信息，提交处理
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
                icon: '<i class="mc-iconfont">&#xe731;</i>',
                view: '@./index-inner'
            }],
            prevTip: '返回计划设置',
            nextTip: '下一步，设置创意',
            nextFn: (remains) => {
                // remains：当前步骤保留的信息，提交处理
                return new Promise(resolve => {
                    // 返回值为保留到地址栏的参数
                    resolve({
                        adgroupId: 1
                    })
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
                icon: '<i class="mc-iconfont">&#xe613;</i>',
                view: '@./index-inner7',
                subHide: true, // 左侧导航不显示，操作区域显示
                titleHide: true // 不显示标题
            }, {
                label: '添加创意',
                icon: '<i class="mc-iconfont">&#xe731;</i>',
                view: '@./index-inner'
            }, {
                label: '创意优选',
                icon: '<i class="mc-iconfont">&#xe731;</i>',
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
                icon: '<i class="mc-iconfont">&#xe7be;</i>',
                view: '@./index-inner3'
            }]
        }];

        let locParams = Router.parse().params;
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
        if (alreadyStep == len) {
            for (let i = 0; i < len - 1; i++) {
                stepInfos[i].locked = true;
            }
        }

        this.updater.digest({
            stepInfos,
            alreadyStep
        });
    }
});