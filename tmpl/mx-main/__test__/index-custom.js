let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;
let Dialog = require('@../../mx-dialog/index');

module.exports = Magix.View.extend({
    tmpl: '@index-custom.html',
    mixins: [Dialog],
    init() {
        this.observeLocation(['campaignId', 'adgroupId']);
    },
    render() {
        let that = this;
        let stepInfos = [{
            label: '设置计划',
            sideView: '@./tip',  // 自定义侧边提示view
            subs: [{
                label: '基本信息',
                icon: '<i class="mc-iconfont">&#xe612;</i>',
                view: '@./index-inner4'
            }],
            btns: [{
                text: '保存为草稿',
                check: true,
                callback: (remains) => {
                    // remains：当前步骤保留的信息，提交处理
                    return new Promise(resolve => {
                        let dlg = that.alert('系统提示', '保存成功');
                        dlg.afterClose(resolve);
                    })
                }
            }, {
                type: 'next',
                callback: (remains) => {
                    // remains：当前步骤保留的信息，提交处理
                    return new Promise(resolve => {
                        // 返回值为保留到地址栏的参数
                        resolve({
                            campaignId: 1
                        })
                    })
                }
            }],
            footerView: '@./index-footer',
            footerData: {}
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
                view: '@./index-inner5'
            }, {
                label: '出价方式',
                icon: '<i class="mc-iconfont">&#xe731;</i>',
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
                    // remains：当前步骤保留的信息，提交处理
                    return new Promise(resolve => {
                        let dlg = that.alert('系统提示', '保存成功');
                        dlg.afterClose(resolve);
                    })
                }
            }, {
                type: 'next',
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
            label: '完成创建',
            subs: [{
                label: '完成标题',
                icon: '<i class="mc-iconfont">&#xe7be;</i>',
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