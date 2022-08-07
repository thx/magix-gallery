let Magix = require('magix');
let Router = Magix.Router;
let Base = require('__test__/example');
let Dialog = require('@../../mx-dialog/index');
Magix.applyStyle('@ver.less');

module.exports = Base.extend({
    tmpl: '@ver-demo2.html',
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
            sideView: '@./tip',
            btns: [{
                type: 'next',
                text: '下一步，设置单元',
                callback: (remains) => {
                    // remains：当前所有展开步骤保留的信息，提交处理
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
            sideView: '@./tip',
            btns: [{
                type: 'prev',
                text: '返回计划设置',
                prepare: () => {
                    return new Promise(resolve => {
                        that.confirm({
                            title: '提示信息',
                            content: '从当前步骤返回其他步骤进行修改，会清空当前步骤已设置内容，确认返回嘛？',
                            enterCallback: resolve
                        })
                    })
                }
            }, {
                type: 'next',
                text: '下一步，添加创意',
                callback: (remains) => {
                    // remains：当前所有展开步骤保留的信息，提交处理
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
            sideView: '@./tip',
            btns: [{
                type: 'prev',
                text: '返回单元设置',
                prepare: () => {
                    return new Promise(resolve => {
                        that.confirm({
                            title: '提示信息',
                            content: '从当前步骤返回其他步骤进行修改，会清空当前步骤已设置内容，确认返回嘛？',
                            enterCallback: resolve
                        })
                    })
                }
            }, {
                type: 'next',
                text: '下一步，完成',
                callback: (remains) => {
                    // remains：当前所有展开步骤保留的信息，提交处理
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
            sideView: '@./tip',
            btns: [{
                text: '再次新建',
                brand: true,
                callback: () => {
                    Router.to('/main/ver');
                }
            }, {
                text: '查看其它场景',
                callback: () => {
                    Router.to('/main/hor');
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
            fixStep: {
                view: '@./ver-fix',
            },
            stepInfos,
            alreadyStep
        });
    }
});