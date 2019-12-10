let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;
let Base = require('examples/example');

module.exports = Base.extend({
    tmpl: '@ver-demo.html',
    init() {
        this.observeLocation(['campaignId', 'adgroupId']);
    },
    render() {
        let stepInfos = [{
            label: '设置计划',
            icon: '<i class="mc-iconfont">&#xe767;</i>',
            view: '@./ver-inner',
            nextTip: '下一步，设置单元',
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
            icon: '<i class="mc-iconfont fontsize-20">&#xe664;</i>',
            view: '@./ver-inner',
            prevTip: '返回计划设置',
            nextTip: '下一步，添加创意',
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
            label: '完成',
            icon: '<i class="mc-iconfont fontsize-20">&#xe64c;</i>',
            view: '@./ver-inner',
            btns: [{
                text: '再次新建',
                callback: () => {
                    Router.to('/main/ver');
                }
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