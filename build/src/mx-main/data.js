/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/data",[],(require,exports,module)=>{
/**/

/**
 *  step定义：当前步骤
 *
 *  subStep定义
 *     -1：不停留在具体的子view上
 *     >0：具体某一个子步骤
 */
module.exports = {
    getSteps: function (info) {
        var stepInfos = [{
                label: '设置计划',
                icon: '<i class="mc-iconfont">&#xe7b6;</i>',
                subs: [{
                        label: '营销场景',
                        icon: '<i class="mc-iconfont">&#xe7be;</i>',
                        view: 'mx-main/inner'
                    }, {
                        label: '基本信息',
                        icon: '<i class="mc-iconfont">&#xe612;</i>',
                        view: 'mx-main/inner'
                    }]
            }, {
                label: '设置单元',
                icon: '<i class="mc-iconfont">&#xe7b5;</i>',
                subs: [{
                        label: '推广宝贝',
                        icon: '<i class="mc-iconfont">&#xe613;</i>',
                        view: 'mx-main/inner'
                    }, {
                        label: '出价方式',
                        icon: '<i class="mc-iconfont">&#xe731;</i>',
                        view: 'mx-main/inner'
                    }]
            }, {
                label: '添加创意',
                icon: '<i class="mc-iconfont">&#xe64c;</i>',
                subs: [{
                        label: '创意内容',
                        icon: '<i class="mc-iconfont">&#xe7be;</i>',
                        view: 'mx-main/inner'
                    }]
            }, {
                id: 'complete',
                label: '完成创建',
                icon: '<i class="mc-iconfont">&#xe613;</i>',
                subs: [{
                        label: '完成标题1',
                        icon: '<i class="mc-iconfont">&#xe705;</i>',
                        view: 'mx-main/inner'
                    }, {
                        label: '完成标题2',
                        icon: '<i class="mc-iconfont">&#xe664;</i>',
                        view: 'mx-main/inner'
                    }, {
                        label: '完成标题3',
                        icon: '<i class="mc-iconfont">&#xe767;</i>',
                        view: 'mx-main/inner'
                    }]
            }];
        stepInfos.forEach(function (step, stepIndex) {
            step.index = (stepIndex + 1);
            step.subs.forEach(function (sub, subIndex) {
                sub.index = (subIndex + 1);
            });
        });
        stepInfos[0].expand = true;
        stepInfos[1].expand = true;
        stepInfos[2].current = true;
        stepInfos[3].locked = true;
        return stepInfos;
    }
};

});