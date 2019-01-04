/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/index",["magix"],(require,exports,module)=>{
/*Magix*/

/**
 *  流程步骤组件：
 *  stepIndex定义：当前步骤，从1开始
 *
 *  subStepIndex定义
 *     -1：不停留在具体的子view上
 *     >0：具体某一个子步骤
 */
var Magix = require("magix");
var Router = Magix.Router;
var Vframe = Magix.Vframe;
Magix.applyStyle("_zs_galleryad","._zs_galleryiR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryiS{position:relative;background-color:#fafafa}._zs_galleryiS ._zs_galleryiT{position:absolute;top:0;left:0;bottom:0;background-color:#fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU{position:relative;padding:10px 0 10px 20px;border-bottom:1px solid #f5f5f5}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiV{color:#666}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiV:hover{color:#4d7fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiW{line-height:30px}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiW ._zs_galleryiX>*{position:relative;top:2px;margin-right:4px;font-size:18px;color:#999}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiW:hover ._zs_galleryiX>*{color:#4d7fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiY{position:relative;height:30px;line-height:30px;padding-left:26px}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiY:before{content:\"\";position:absolute;top:0;left:9px;width:0;height:30px;border-left:1px solid #adadad}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiY:after{content:\"\";position:absolute;top:15px;left:10px;width:6px;height:0;border-top:1px solid #adadad}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU ._zs_galleryiY:last-child:before{height:16px}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ{background-color:#f6f9ff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryj_,._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryj_ ._zs_galleryiX>*,._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryj_:hover,._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryj_:hover ._zs_galleryiX>*{color:#4d7fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryiZ ._zs_galleryja{position:absolute;top:50%;right:8px;margin-top:-7px;font-size:12px;font-weight:700;color:#4d7fff}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryjb ._zs_galleryiV,._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryjb ._zs_galleryiV:hover{color:#666;cursor:not-allowed}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryjb ._zs_galleryiW:hover ._zs_galleryiX>*{color:#999}._zs_galleryiS ._zs_galleryiT ._zs_galleryiU._zs_galleryjb ._zs_galleryjc{position:absolute;top:50%;right:8px;height:18px;margin-top:-9px;font-size:14px;line-height:18px;font-weight:700;color:#eee}._zs_galleryiS ._zs_galleryjd ._zs_galleryje{height:58px;line-height:58px;text-align:center;font-size:20px;border-bottom:1px solid #e6e6e6;background-color:#fafafa}._zs_galleryiS ._zs_galleryjd ._zs_galleryjf{position:relative;margin-left:20px;margin-right:20px;background-color:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px}._zs_galleryiS ._zs_galleryjd ._zs_galleryjf ._zs_galleryjg{position:relative;padding-top:20px;padding-bottom:20px;padding-left:20px}._zs_galleryiS ._zs_galleryjd ._zs_galleryjf ._zs_galleryjg:last-child{padding-bottom:40px}._zs_galleryiS ._zs_galleryjd ._zs_galleryjf ._zs_galleryjh{position:absolute;top:0;right:0;height:100%;padding-top:20px;padding-left:20px;border-left:1px solid #e6e6e6}._zs_galleryiS ._zs_galleryjd ._zs_galleryji{text-align:center;padding:40px 0}._zs_galleryiS ._zs_galleryjj{display:inline-block;position:relative;margin-top:10px;color:#a40100}._zs_galleryiS ._zs_galleryjj ._zs_galleryjk{position:absolute;left:-20px;top:0;color:#a40100}");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewHeight = $$.viewHeight, leftWidth = $$.leftWidth, stepInfos = $$.stepInfos, curStepIndex = $$.curStepIndex, curSubStepIndex = $$.curSubStepIndex, curStepInfo = $$.curStepInfo, viewId = $$.viewId; $p += '<div mxv class="_zs_galleryiS" style="min-height: ' + $e(viewHeight) + 'px;"><div class="_zs_galleryiT" style="width: ' + $e(leftWidth) + 'px;">'; for (var $art_ircqxr$art_i = 0, $art_cexsvbcco$art_c = stepInfos.length; $art_ircqxr$art_i < $art_cexsvbcco$art_c; $art_ircqxr$art_i++) {
    var step = stepInfos[$art_ircqxr$art_i];
    $p += '<div class="_zs_galleryiU ';
    if (step.index == curStepIndex) {
        ;
        $p += ' _zs_galleryiZ ';
    }
    ;
    $p += ' ';
    if (step.locked) {
        ;
        $p += ' _zs_galleryjb ';
    }
    ;
    $p += '"><div mxa="_zs_gallerycm:_" class="_zs_galleryiW"><a href="javascript:;" class="_zs_galleryiV _zs_galleryiW clearfix ';
    if ((step.index == curStepIndex) && (curSubStepIndex == -1)) {
        ;
        $p += ' _zs_galleryj_ ';
    }
    ;
    $p += '" data-sub="-1" ';
    if (!step.locked) {
        ;
        $p += ' mx-click="' + $viewId + 'nav({stepIndex:' + $e(step.index) + '})" ';
    }
    ;
    $p += '>';
    if (step.icon) {
        ;
        $p += '<span mxa="_zs_gallerycm:a" class="_zs_galleryiX fl">' + $n(step.icon) + '</span>';
    }
    ;
    $p += '<span mxa="_zs_gallerycm:b" class="fl">' + $e(step.label) + '</span></a></div>';
    if (!step.locked && step.subs.length > 1) {
        ;
        $p += '<div>';
        for (var $art_ihcxvtopsf$art_i = 0, $art_objwmtmxggcui$art_obj = step.subs, $art_cgpvhrquc$art_c = $art_objwmtmxggcui$art_obj.length; $art_ihcxvtopsf$art_i < $art_cgpvhrquc$art_c; $art_ihcxvtopsf$art_i++) {
            var sub = $art_objwmtmxggcui$art_obj[$art_ihcxvtopsf$art_i];
            $p += '<div mxa="_zs_gallerycm:c" class="_zs_galleryiY"><a href="javascript:;" class="_zs_galleryiV ';
            if ((step.index == curStepIndex) && (curSubStepIndex == sub.index)) {
                ;
                $p += ' _zs_galleryj_ ';
            }
            ;
            $p += '" data-sub="' + $e(sub.index) + '" mx-click="' + $viewId + 'nav({stepIndex:' + $e(step.index) + ',subStepIndex:' + $e(sub.index) + '})">' + $e(sub.label) + '</a></div>';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += ' ';
    if (step.index == curStepIndex) {
        ;
        $p += '<i mxs="_zs_gallerycm:_" class="mc-iconfont _zs_galleryja">&#xe602;</i>';
    }
    ;
    $p += ' ';
    if (step.locked) {
        ;
        $p += '<i mxs="_zs_gallerycm:a" class="mc-iconfont _zs_galleryjc">&#xe759;</i>';
    }
    ;
    $p += '</div>';
} ; $p += '</div><div mxv class="_zs_galleryjd" style="padding-left: ' + $e(leftWidth) + 'px;"><div mxa="_zs_gallerycm:d" class="_zs_galleryje">' + $e(curStepInfo.label) + '</div><div mxv mxa="_zs_gallerycm:e" class="_zs_galleryjf"><div mxv>'; for (var $art_inrhhwslqvw$art_i = 0, $art_objztax$art_obj = curStepInfo.subs, $art_crfibhixsqf$art_c = $art_objztax$art_obj.length; $art_inrhhwslqvw$art_i < $art_crfibhixsqf$art_c; $art_inrhhwslqvw$art_i++) {
    var sub = $art_objztax$art_obj[$art_inrhhwslqvw$art_i];
    $p += '<div mxv class="_zs_galleryjg" style="padding-right: ' + $e((curStepInfo.rightWidth + 20)) + 'px;"><div mxv="curStepInfo" mx-view="' + $e(sub.view) + '?info=' + $i($$ref, sub) + '" id="sub_frame_' + $e(sub.index) + '"><div mxs="_zs_gallerycm:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>';
    if (sub.sideWrapper) {
        ;
        $p += '<div mxv="curStepInfo" mx-view="' + $e(sub.sideWrapper) + '?data=' + $i($$ref, sub.sideData) + '" class="_zs_galleryjh" style="width: ' + $e(curStepInfo.rightWidth) + 'px;"><div mxs="_zs_gallerycm:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>';
    }
    ;
    $p += '</div>';
} ; $p += '</div>'; if (curStepInfo.sideWrapper) {
    ;
    $p += '<div mxv="curStepInfo" mx-view="' + $e(curStepInfo.sideWrapper) + '?data=' + $i($$ref, curStepInfo.sideData) + '" class="_zs_galleryjh" style="width: ' + $e(curStepInfo.rightWidth) + 'px;"><div mxs="_zs_gallerycm:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>';
} ; $p += '</div>'; if (!curStepInfo.customTrigger) {
    ;
    $p += '<div mxa="_zs_gallerycm:f" class="_zs_galleryji"><div>';
    if (curStepInfo.prevTip) {
        ;
        $p += '<a mxa="_zs_gallerycm:g" href="javascript:;" class="btn min-width-100 mr20" mx-click="' + $viewId + 'prev()">' + $e(curStepInfo.prevTip) + '</a>';
    }
    ;
    $p += ' ';
    if (curStepInfo.nextTip) {
        ;
        $p += '<a mxa="_zs_gallerycm:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="' + $viewId + 'next()">' + $e(curStepInfo.nextTip) + '</a>';
    }
    ;
    $p += '</div><div id="' + $e(viewId) + '_error" class="_zs_galleryjj"></div></div>';
} ; $p += '</div></div>'; return $p; },
    init: function (extra) {
        var that = this;
        that.updater.set({
            leftWidth: extra.leftWidth || 160,
            rightWidth: extra.rightWidth || 260,
            alreadyStep: extra.alreadyStep || 1,
            stepInfos: extra.stepInfos || [],
            viewId: that.id,
            viewHeight: $(window).height()
        });
        that.observeLocation(['stepIndex', 'subStepIndex']);
        that.owner.oncreated = function () {
            if (!that.$init) {
                // 每次重新render之后
                // 所有子view加载完成后
                that.subScroll();
                // 子组件的mount不需要重新scroll
                that.$init = 1;
            }
        };
        that.ondestroy = function () {
            that.owner.off('created');
        };
    },
    render: function () {
        var that = this;
        // trigger oncreated，子组件的渲染不scroll
        that.$init = null;
        var updater = that.updater;
        var alreadyStep = +updater.get('alreadyStep'), stepInfos = updater.get('stepInfos');
        var locParams = Router.parse().params;
        // 主步骤信息从1开始
        var curStepIndex = +(locParams.stepIndex || 1);
        if (curStepIndex > alreadyStep) {
            alreadyStep = curStepIndex;
        }
        // 子步骤：
        // -1：在主导航上
        // >0：1，2，3
        var curSubStepIndex = +locParams.subStepIndex || -1;
        var defPrevTip = '返回上一步', defNextTip = '下一步';
        stepInfos.forEach(function (step, i) {
            var stepIndex = i + 1;
            step.index = stepIndex;
            step.subs = step.subs || [];
            step = that.wrapSide(step);
            // <= 当前步骤 展开子列表
            step.locked = (stepIndex > alreadyStep);
            // 修正子步骤信息
            if ((stepIndex == curStepIndex) && ((curSubStepIndex > step.subs.length) || (step.subs.length == 1))) {
                curSubStepIndex = -1;
            }
            var prevTip = '';
            if (!step.customTrigger && (stepIndex > 1) && (!stepInfos[i - 1].locked)) {
                // 1. 第一步没有返回上一步
                // 2. 上一步被锁定的情况下没有返回上一步
                // 3. 自定义trigger的情况
                prevTip = step.prevTip || defPrevTip;
            }
            step.prevTip = prevTip;
            var nextTip = '';
            if (!step.customTrigger && (stepIndex < stepInfos.length)) {
                // 1. 最后一步没有下一步
                // 2. 自定义trigger的情况
                nextTip = step.nextTip || defNextTip;
            }
            step.nextTip = nextTip;
        });
        if (((locParams.stepIndex + '') !== (curStepIndex + '')) ||
            ((locParams.subStepIndex + '') !== (curSubStepIndex + ''))) {
            // 确保路由地址参数和当前参数保持完全一致
            Router.to({
                stepIndex: curStepIndex,
                subStepIndex: curSubStepIndex
            });
            return;
        }
        var renderFn = function () {
            that.updater.digest({
                alreadyStep: alreadyStep,
                curStepInfo: stepInfos[curStepIndex - 1],
                curStepIndex: curStepIndex,
                curSubStepIndex: curSubStepIndex
            });
        };
        if (!that.$inited) {
            that.$inited = 1;
            // 首次渲染
            renderFn();
        }
        else {
            // locationChange
            var diffParams = Router.diff().params;
            if (!diffParams.stepIndex) {
                // 只子步骤变换的时候不digest
                // 直接操作dom
                that.updater.set({
                    curSubStepIndex: curSubStepIndex
                });
                var onClass = '_zs_galleryj_';
                var cur = $('#' + that.id + ' ._zs_galleryiZ');
                cur.find('._zs_galleryiV').removeClass(onClass);
                cur.find('._zs_galleryiV[data-sub="' + curSubStepIndex + '"]').addClass(onClass);
                that.subScroll();
            }
            else {
                renderFn();
            }
        }
    },
    wrapSide: function (step) {
        var rightWidth = +this.updater.get('rightWidth');
        var hasSide = false;
        var sideWrapper = null, sideData = {};
        if (step.sideView || step.sideTip) {
            sideWrapper = 'mx-main/tip';
            sideData = {
                view: step.sideView || '',
                content: step.sideTip || '' // 简单提示文案
            };
            hasSide = true;
        }
        var subHasSide = false;
        step.subs.forEach(function (sub, si) {
            sub.index = (si + 1);
            // step上有提示的时候，忽略sub的侧边配置
            var subSideWrapper = null, subSideData = {};
            if (!hasSide) {
                var hasSubSide = false;
                if (sub.sideView || sub.sideTip) {
                    subSideWrapper = 'mx-main/tip';
                    subSideData = {
                        view: sub.sideView || '',
                        content: sub.sideTip || ''
                    };
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
    subScroll: function () {
        var that = this;
        var curSubStepIndex = +that.updater.get('curSubStepIndex');
        var top;
        if (curSubStepIndex > 0) {
            var subContent = $('#' + that.id + ' #sub_frame_' + curSubStepIndex);
            top = subContent.offset().top;
        }
        else {
            top = 0;
        }
        $(window).scrollTop(top);
    },
    '$win<scroll>': function () {
        var that = this;
        var that = this;
        var context = $('#' + that.id);
        var content = context.find('._zs_galleryjd');
        if (!content.length) {
            return;
        }
        var nav = context.find('._zs_galleryiT');
        var scrollTop = $(window).scrollTop();
        var contentTop = content.offset().top;
        if (scrollTop > contentTop) {
            nav.css({
                position: 'fixed'
            });
        }
        else {
            nav.css({
                position: 'absolute'
            });
        }
    },
    '$win<resize>': function () {
        var that = this;
        var winHeight = $(window).height();
        that.updater.set({
            viewHeight: winHeight
        });
        var context = $('#' + that.id);
        var content = context.find('._zs_galleryiS');
        content.css({
            minHeight: winHeight
        });
    },
    'prev<click>': function (e) {
        var curStepIndex = this.updater.get('curStepIndex');
        Router.to({
            stepIndex: (+curStepIndex - 1),
            subStepIndex: -1
        });
    },
    'next<click>': function (e) {
        var that = this;
        // 先校验能否提交
        var curStepInfo = that.updater.get('curStepInfo');
        var subs = curStepInfo.subs;
        var models = subs.map(function (sub) {
            var vf = Vframe.get('sub_frame_' + sub.index);
            return vf.invoke('check');
        });
        Promise.all(models).then(function (results) {
            var ok = true, msgs = [], remain = {};
            var errorNode = $('#' + that.id + '_error');
            results.forEach(function (r, i) {
                ok = ok && r.ok;
                if (!r.ok) {
                    msgs.push({
                        id: (i + 1),
                        label: subs[i].label,
                        msg: r.msg || ''
                    });
                }
                Magix.mix(remain, (r.remain || {}));
            });
            if (ok) {
                errorNode.html('');
                // 下一步
                if (curStepInfo.nextFn) {
                    curStepInfo.nextFn(remain, function (remainParams) {
                        that.next(remainParams);
                    });
                }
                else {
                    that.next({});
                }
            }
            else {
                errorNode.html("\n                    <i class=\"mc-iconfont _zs_galleryjk\">&#xe6ad;</i>\n                    " + msgs.map(function (m) { return "\n                        <div>" + m.label + "\uFF1A" + m.msg + "</div>\n                    "; }).join('') + "\n                ");
                var subContent = $('#' + that.id + ' #sub_frame_' + msgs[0].id);
                $(window).scrollTop(subContent.offset().top);
            }
        });
    },
    'nav<click>': function (e) {
        var params = e.params;
        var stepIndex = params.stepIndex, subStepIndex = params.subStepIndex || -1;
        Router.to({
            stepIndex: stepIndex,
            subStepIndex: subStepIndex
        });
    },
    next: function (remainParams) {
        var that = this;
        var curStepIndex = that.updater.get('curStepIndex');
        remainParams.stepIndex = +curStepIndex + 1;
        Router.to(remainParams);
    }
});

});