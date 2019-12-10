let Magix = require('magix');
let $ = require('$');
let Router = Magix.Router;
let Base = require('__test__/example');
let Dialog = require('@../../mx-dialog/index');

module.exports = Base.extend({
    tmpl: '@hor-demo.html',
    mixins: [Dialog],
    init() {
        this.observeLocation(['campaignId', 'adgroupId', 'creativeId']);
    },
    render() {
        let that = this;
        let stepInfos = [{
            label: '设置计划',
            view: '@./hor-inner',
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
            view: '@./hor-inner',
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
            label: '添加创意',
            view: '@./hor-inner',
            btns: [{
                type: 'prev',
                text: '返回单元设置'
            }, {
                text: '保存为草稿',
                brand: true,
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
                text: '下一步，添加创意',
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
            view: '@./hor-inner',
            btns: []
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

        // 当到达最后一步之后，其他步骤都不可操作
        if (alreadyStep == 4) {
            for (let i = 0; i < 3; i++) {
                stepInfos[i].locked = true;
            }
        }
        that.updater.digest({
            stepInfos,
            alreadyStep
        });
    }
});