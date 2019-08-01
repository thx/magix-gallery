let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;

module.exports = Magix.View.extend({
    tmpl: '@demo.html',
    render() {
        let stepInfos = [{
            label: '设置计划',
            sideView: '@./tip',
            subs: [{
                label: '基本信息',
                icon: '<i class="mc-iconfont fontsize-22">&#xe612;</i>',
                view: '@./inner1'
            }],
            nextTip: '下一步，设置计划',
            nextFn: (remains, next) => {
                // remains 当前步骤保留的信息，提交处理
                next({
                    campaignId: 1
                })
            }
        }, {
            label: '设置单元',
            sideTitle: '单元说明',
            sideTip: `<div>说明：</div>
<div>1、条件1</div>
<div>2、条件2</div>
<div>3、条件3</div>`,
            subs: [{
                label: '推广宝贝',
                icon: '<i class="mc-iconfont fontsize-20">&#xe613;</i>',
                view: '@./inner2'
            }, {
                label: '出价方式',
                icon: '<i class="mc-iconfont fontsize-20">&#xe731;</i>',
                view: '@./inner'
            }],
            prevTip: '返回计划设置',
            nextTip: '下一步，完成',
            nextFn: (remains, next) => {
                // remains 当前步骤保留的信息，提交处理
                next({
                    adgroupId: 1
                })
            }
        }, {
            label: '完成创建',
            subs: [{
                label: '完成标题',
                icon: '<i class="mc-iconfont fontsize-20">&#xe7be;</i>',
                view: '@./inner3'
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