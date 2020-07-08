let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;
let Base = require('__test__/example');
let Dialog = require('@../../mx-dialog/index');

module.exports = Base.extend({
    tmpl: '@ver-demo.html',
    mixins: [Dialog],
    init() {
        let that = this;
        let d = {
            viewId: that.id,
        }
        for (let i = 1; i < 20; i++) {
            d[`text${i}`] = '复制代码';
        }
        that.updater.set(d);
        that.observeLocation(['campaignId', 'adgroupId', 'creativeId']);
    },
    render() {
        let that = this;
        let stepInfos = [{
            label: '设置计划',
            icon: '<i class="mc-iconfont">&#xe767;</i>',
            view: '@./ver-inner',
            sideView: '@./tip',  // 自定义侧边提示view
            sideData: {
                tips: '默认传入的数据'
            },
            btns: [{
                type: 'next',
                text: '下一步，设置单元',
                callback: (remains) => {
                    // remains：当前步骤保留的信息，提交处理
                    return new Promise(resolve => {
                        // 返回值为保留到地址栏的参数
                        resolve({
                            campaignId: 1
                        })
                    })
                }
            }]
        }, {
            label: '设置单元',
            icon: '<i class="mc-iconfont">&#xe664;</i>',
            view: '@./ver-inner',
            sideTitle: '单元说明', // 使用默认侧边样式
            sideTip: `<div>说明：</div>
                    <div>1、条件1</div>
                    <div>2、条件2</div>
                    <div>3、条件3</div>`,
            btns: [{
                type: 'prev',
                text: '返回计划设置'
            }, {
                type: 'next',
                text: '下一步，添加创意',
                callback: (remains) => {
                    // remains：当前步骤保留的信息，提交处理
                    return new Promise(resolve => {
                        // 返回值为保留到地址栏的参数
                        resolve({
                            adgroupId: 1
                        })
                    })
                }
            }]
        }, {
            label: '设置创意',
            icon: '<i class="mc-iconfont">&#xe613;</i>',
            view: '@./ver-inner',
            btns: [{
                type: 'prev',
                text: '返回单元设置'
            }, {
                type: 'next',
                text: '下一步，完成',
                callback: (remains) => {
                    // remains：当前步骤保留的信息，提交处理
                    return new Promise(resolve => {
                        // 返回值为保留到地址栏的参数
                        resolve({
                            creativeId: 1
                        })
                    })
                }
            }]
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
            alreadyStep++;
            if (locParams.adgroupId) {
                alreadyStep++;
                if (locParams.creativeId) {
                    alreadyStep++;
                }
            }
        }
        if (alreadyStep == stepInfos.length) {
            for (let i = 0; i < stepInfos.length - 1; i++) {
                stepInfos[i].locked = true;
            }
        }

        this.updater.digest({
            stepInfos,
            alreadyStep
        });
    }
});