let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@demo.html',
    render() {
        let stepInfos = [{
            label: '诉求信息',
            icon: '<i class="mc-iconfont">&#xe7b6;</i>',
            subs: [{
                label: '诉求信息',
                icon: '<i class="mc-iconfont">&#xe7be;</i>',
                view: '@./inner'
            }]
        }, {
            label: '设置计划',
            icon: '<i class="mc-iconfont">&#xe7b6;</i>',
            nextTip: '下一步，设置单元',
            subs: [{
                label: '营销场景',
                icon: '<i class="mc-iconfont">&#xe7be;</i>',
                view: '@./inner'
            }, {
                label: '基本信息',
                icon: '<i class="mc-iconfont">&#xe612;</i>',
                view: '@./inner'
            }]
        }, {
            label: '设置单元',
            prevTip: '返回计划',
            nextTip: '下一步，添加创意',
            icon: '<i class="mc-iconfont">&#xe7b5;</i>',
            sideTip: `<div>宝贝图片：</div>
<div>1、本地上传图片时不允许上传与宝贝无关的图片；</div>
<div>2、为保证投放效果，请选择浅色背景、无牛皮癣、无边框水印、少文字、清晰度高的创意；</div>
<div>3、建议添加多张创意，测试点击效果，择优选择。</div>`,
            subs: [{
                label: '推广宝贝',
                icon: '<i class="mc-iconfont">&#xe613;</i>',
                view: '@./inner'
            }, {
                label: '出价方式',
                icon: '<i class="mc-iconfont">&#xe731;</i>',
                view: '@./inner'
            }]
        }, {
            id: 'complete',
            label: '完成创建',
            icon: '<i class="mc-iconfont">&#xe613;</i>',
            subs: [{
                label: '完成标题1',
                icon: '<i class="mc-iconfont">&#xe705;</i>',
                view: '@./inner',
                sideView: '@./tip'
            }, {
                label: '完成标题2',
                icon: '<i class="mc-iconfont">&#xe664;</i>',
                view: '@./inner',
                sideView: '@./tip'
            }, {
                label: '完成标题3',
                icon: '<i class="mc-iconfont">&#xe767;</i>',
                view: '@./inner',
                sideView: '@./tip'
            }]
        }, {
            label: '添加创意',
            nextTip: '下一步，完成',
            icon: '<i class="mc-iconfont">&#xe64c;</i>',
            subs: [{
                label: '创意内容',
                icon: '<i class="mc-iconfont">&#xe7be;</i>',
                view: '@./inner'
            }]
        }];
        stepInfos[0].locked = true;
        stepInfos[1].locked = true;
        stepInfos[4].locked = true;

        this.updater.digest({
            stepInfos,
            childInfos: {}
        });
    },
    'submit<next>'(e){
        // e.stepIndex：当前第几步
        // e.childInfos：当前步骤需要提交的信息
    }
});