/**
 *  流程步骤组件：
 *  step定义：当前步骤，从1开始
 * 
 *  subStep定义
 *     -1：不停留在具体的子view上
 *     >0：具体某一个子步骤
 */
let Magix = require('magix');
let Router = Magix.Router;
let Vframe = Magix.Vframe;
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        Router.to({
            stepIndex: '',
            subStepIndex: ''
        })

        let that = this;
        that.updater.set({
            leftWidth: extra.leftWidth || 160,
            rightWidth: extra.rightWidth || 260,
            stepInfos: extra.stepInfos || [], //所有的步骤信息
            childInfos: extra.childInfos || {}, // 向子view传递的数据
            viewId: that.id,
            viewHeight: $(window).height()
        })

        that.observeLocation(['stepIndex', 'subStepIndex']);

        that.owner.oncreated = () => {
            // 所有子view加载完成后
            that.subScroll();
        };
        that.ondestroy = () => {
            that.owner.off('created');
        }
    },
    render() {
        let that = this;
        let updater = that.updater;
        let stepInfos = updater.get('stepInfos');

        let locParams = Router.parse().params;
        // 主步骤信息从1开始
        let curStepIndex = +locParams.stepIndex || 1;
        // 子步骤：
        // -1：在主导航上
        // >0：1，2，3
        let curSubStepIndex = +locParams.subStepIndex || -1;

        let defPrevTip = '返回上一步',
            defNextTip = '下一步';
        stepInfos.forEach((step, i) => {
            let stepIndex = i + 1;
            step.index = stepIndex;
            step = that.wrapSide(step);

            // 锁定项不展开子列表
            if(step.current){
                curStepIndex = stepIndex;
                
                // 当前步骤展开子项目
                step.locked = false;

                if((curSubStepIndex > step.subs.length) || (step.subs.length == 1)){
                    curSubStepIndex = -1;
                }
            }

            let prevTip = '';
            if ((stepIndex > 1) && (!stepInfos[i - 1].locked)) {
                // 1. 第一步没有返回上一步
                // 2. 上一步被锁定的情况下没有返回上一步
                prevTip = step.prevTip || defPrevTip;
            }
            step.prevTip = prevTip;

            let nextTip = '';
            if (stepIndex < stepInfos.length) {
                // 1. 最后一步没有下一步
                nextTip = step.nextTip || defNextTip;
            }
            step.nextTip = nextTip;
        })
        if (((locParams.stepIndex + '') !== (curStepIndex + '')) ||
            ((locParams.subStepIndex + '') !== (curSubStepIndex + ''))) {
            // 确保路由地址参数和当前参数保持完全一致
            Router.to({
                stepIndex: curStepIndex,
                subStepIndex: curSubStepIndex
            })
            return;
        }
        let renderFn = () => {
            that.updater.digest({
                curStepInfo: stepInfos[curStepIndex - 1],
                curStepIndex,
                curSubStepIndex,
            });
        }

        if (!that.$inited) {
            that.$inited = 1;

            // 首次渲染
            renderFn();
        } else {
            // locationChange
            let diffParams = Router.diff().params;
            if (!diffParams.stepIndex) {
                // 只子步骤变换的时候不digest
                // 直接操作dom
                that.updater.set({
                    curSubStepIndex,
                });

                let onClass = '@index.less:link-on';
                let cur = $('#' + that.id + ' .@index.less:step-current');
                cur.find('.@index.less:link').removeClass(onClass);
                cur.find('.@index.less:link[data-sub="' + curSubStepIndex + '"]').addClass(onClass);

                that.subScroll();
            } else {
                renderFn();
            }
        }
    },

    wrapSide(step){
        let rightWidth = +this.updater.get('rightWidth');

        let hasSide = false;
        let sideWrapper = null,
            sideData = {};
        
        if(step.sideView || step.sideTip){
            sideWrapper = '@./tip';
            sideData = {
                view: step.sideView || '', // 自定义侧边view
                content: step.sideTip || '' // 简单提示文案
            }
            hasSide = true;
        }
        let subHasSide = false;
        step.subs.forEach((sub, si) => {
            sub.index = (si + 1);

            // step上有提示的时候，忽略sub的侧边配置
            let subSideWrapper = null,
                subSideData = {};
            if(!hasSide){
                let hasSubSide = false;
                if(sub.sideView || sub.sideTip){
                    subSideWrapper = '@./tip';
                    subSideData = {
                        view: sub.sideView || '', 
                        content: sub.sideTip || ''
                    }
                    hasSubSide = true;
                }

                // step上无提示的时候，判断sub上是否有提示
                subHasSide = subHasSide || hasSubSide;
            }
            sub.sideWrapper = subSideWrapper;
            sub.sideData = subSideData;
        });
        hasSide = hasSide || subHasSide;
        step.hasSide = hasSide;
        step.sideWrapper = sideWrapper;
        step.sideData = sideData;
        step.rightWidth = hasSide ? rightWidth : 0;
        return step;
    },

    /**
     * 滚动到当前子view的位置
     */
    subScroll(){
        let that = this;
        let curSubStepIndex = +that.updater.get('curSubStepIndex');
        let top;
        if(curSubStepIndex > 0){
            let subContent = $('#' + that.id + ' #sub_frame_' + curSubStepIndex);
            top = subContent.offset().top;
        }else{
            top = 0;
        }
        $(window).scrollTop(top);
    },

    '$win<scroll>'() {
        let that = this;

        let that = this;
        let context = $('#' + that.id);
        let content = context.find('.@index.less:main-content');
        if (!content.length) {
            return;
        }
        let nav = context.find('.@index.less:main-nav');
        let scrollTop = $(window).scrollTop();
        let contentTop = content.offset().top;
        if (scrollTop > contentTop) {
            nav.css({
                position: 'fixed'
            })
        } else {
            nav.css({
                position: 'absolute'
            })
        }
    },

    '$win<resize>'() {
        let that = this;

        let winHeight = $(window).height();
        that.updater.set({
            viewHeight: winHeight
        })
        let context = $('#' + that.id);
        let content = context.find('.@index.less:main');
        content.css({
            minHeight: winHeight
        })
    },

    'prev<click>'(e) {
        let curStepIndex = this.updater.get('curStepIndex');
        this.nav((+curStepIndex - 1), -1);
    },
    'next<click>'(e) {
        let that = this;
        // 先校验能否提交
        let curStepInfo = that.updater.get('curStepInfo');
        let subs = curStepInfo.subs;
        
        let models = subs.map(sub => {
            let vf = Vframe.get('sub_frame_' + sub.index);
            return vf.invoke('check');
        })
        Promise.all(models).then(results => {
            let ok = true,
                msgs = [],
                remain = {};
            
            let errorNode = $('#' + that.id + '_error');
            results.forEach((r, i) => {
                ok = ok && r.ok;
                if(!r.ok){
                    msgs.push({
                        id: (i + 1),
                        label: subs[i].label,
                        msg: r.msg || ''
                    })
                }
                Magix.mix(remain, (r.remain || {}));
            })

            if(ok){
                errorNode.html('');
                let curStepIndex = that.updater.get('curStepIndex');
                that.nav((+curStepIndex + 1), -1);
                $('#' + that.id).trigger({
                    type: 'next',
                    stepIndex: curStepIndex,
                    childInfos: remain
                })
            }else{
                errorNode.html(`
                    <i class="mc-iconfont @index.less:error-icon">&#xe6ad;</i>
                    ${msgs.map(m => `
                        <div>${m.label}：${m.msg}</div>
                    `).join('')}
                `)

                let subContent = $('#' + that.id + ' #sub_frame_' + msgs[0].id);
                $(window).scrollTop(subContent.offset().top);
            }
        });

    },
    'nav<click>'(e){
        let params = e.params;
        let stepIndex = params.stepIndex,
            subStepIndex = params.subStepIndex || -1;
        this.nav(stepIndex, subStepIndex);
    },
    nav(stepIndex, subStepIndex) {
        let stepInfos = this.updater.get('stepInfos');
        stepInfos.forEach(step => {
            step.current = (step.index == stepIndex);
        })

        Router.to({
            stepIndex: stepIndex,
            subStepIndex: subStepIndex
        })
    }
});