let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;
let Base = require('examples/example');

module.exports = Base.extend({
    tmpl: '@hor-demo1.html',
    render() {
        let stepInfos = [{
            label: '设置计划',
            nextTip: '下一步，设置单元',
            view: '@./hor-inner',
            nextFn: (remains, next) => {
                // remains 当前步骤保留的信息，提交处理
                next({
                    campaignId: 1
                })
            }
        }, {
            label: '设置单元',
            prevTip: '返回计划设置',
            nextTip: '下一步，添加创意',
            view: '@./hor-inner',
            nextFn: (remains, next) => {
                // remains 当前步骤保留的信息，提交处理
                next({
                    adgroupId: 1
                })
            }
        }, {
            label: '添加创意',
            view: '@./hor-inner'
        }, {
            label: '完成',
            view: '@./hor-inner'
        }];

        let locParams = Router.parse().params;
        let alreadyStep = 1;
        if(locParams.campaignId){
            alreadyStep = 2;
            if(locParams.adgroupId){
                alreadyStep = 3;
            }
        }

        this.updater.digest({
            stepInfos,
            alreadyStep
        });
    }
});