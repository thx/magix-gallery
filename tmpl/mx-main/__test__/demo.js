let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;

module.exports = Magix.View.extend({
    tmpl: '@demo.html',
    render() {
        let stepInfos = [{
            label: '设置计划',
            icon: '<i class="mc-iconfont">&#xe612;</i>',
            nextTip: '下一步，设置计划',
            sideView: '@./tip',
            subs: [{
                label: '基本信息',
                icon: '<i class="mc-iconfont">&#xe612;</i>',
                view: '@./inner1'
            }],
            nextFn: (remains, next) => {
                // remains 当前步骤保留的信息，提交处理
                next({
                    campaignId: 1
                })
            }
        }, {
            label: '设置单元',
            icon: '<i class="mc-iconfont">&#xe7b5;</i>',
            prevTip: '返回计划设置',
            nextTip: '下一步，添加创意',
            sideTip: `<div>说明：</div>
<div>1、条件1</div>
<div>2、条件2</div>
<div>3、条件3</div>`,
            subs: [{
                label: '推广宝贝',
                icon: '<i class="mc-iconfont">&#xe613;</i>',
                view: '@./inner2'
            }, {
                label: '出价方式',
                icon: '<i class="mc-iconfont">&#xe731;</i>',
                view: '@./inner'
            }],
            nextFn: (remains, next) => {
                // remains 当前步骤保留的信息，提交处理
                next({
                    adgroupId: 1
                })
            }
        }, {
            label: '添加创意',
            nextTip: '下一步，完成',
            icon: '<i class="mc-iconfont">&#xe613;</i>',
            subs: [{
                label: '创意内容1',
                icon: '<i class="mc-iconfont">&#xe705;</i>',
                view: '@./inner3',
                sideView: '@./tip'
            }, {
                label: '创意内容2',
                icon: '<i class="mc-iconfont">&#xe664;</i>',
                view: '@./inner',
                sideView: '@./tip'
            }, {
                label: '创意内容3',
                icon: '<i class="mc-iconfont">&#xe767;</i>',
                view: '@./inner',
                sideView: '@./tip'
            }]
        }, {
            label: '完成创建',
            nextTip: '完成',
            icon: '<i class="mc-iconfont">&#xe64c;</i>',
            subs: [{
                label: '完成标题',
                icon: '<i class="mc-iconfont">&#xe7be;</i>',
                view: '@./inner4'
            }]
        }];

        let locParams = Router.parse().params;
        let alreadyStep = 1;
        if (locParams.campaignId) {
            alreadyStep = 2;
            if (locParams.adgroupId) {
                alreadyStep = 3;
            }
        }

        this.updater.digest({
            stepInfos,
            alreadyStep
        });
    }
});