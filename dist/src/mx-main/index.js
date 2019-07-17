/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_gallery_mx-main_index_","._zs_gallery_mx-main_index_-main {\n  position: relative;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #fff;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step {\n  position: relative;\n  padding: 10px 0 10px 20px;\n  border-bottom: 1px solid #f5f5f5;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-link {\n  color: #666;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-link:hover {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-over {\n  line-height: 30px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-over ._zs_gallery_mx-main_index_-over-icon > * {\n  position: relative;\n  top: 2px;\n  margin-right: 4px;\n  font-size: 18px;\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-over:hover ._zs_gallery_mx-main_index_-over-icon > * {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-sub {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 26px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-sub:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 9px;\n  width: 0;\n  height: 30px;\n  border-left: 1px solid #adadad;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-sub:after {\n  content: '';\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  width: 6px;\n  height: 0;\n  border-top: 1px solid #adadad;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-sub:last-child:before {\n  height: 16px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current {\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-link-on,\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-link-on:hover {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-link-on ._zs_gallery_mx-main_index_-over-icon > *,\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-link-on:hover ._zs_gallery_mx-main_index_-over-icon > * {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-arrow-icon {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  margin-top: -7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: var(--color-brand);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-link,\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-link:hover {\n  color: #666;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-step-over:hover ._zs_gallery_mx-main_index_-over-icon > * {\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-locked-icon {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  height: 18px;\n  margin-top: -9px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: bold;\n  color: #eee;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-title {\n  height: 58px;\n  line-height: 58px;\n  text-align: center;\n  font-size: 20px;\n  border-bottom: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body {\n  position: relative;\n  margin-left: 20px;\n  margin-right: 20px;\n  background-color: #fff;\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box {\n  position: relative;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box:last-child {\n  padding-bottom: 40px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-side {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  padding-top: 20px;\n  padding-left: 20px;\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer {\n  text-align: center;\n  padding: 40px 0;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-error-node {\n  display: inline-block;\n  position: relative;\n  margin-top: 10px;\n  color: var(--color-red);\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-error-node ._zs_gallery_mx-main_index_-error-icon {\n  position: absolute;\n  left: -20px;\n  top: 0;\n  color: var(--color-red);\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewHeight = $$.viewHeight, leftWidth = $$.leftWidth, stepInfos = $$.stepInfos, curStepIndex = $$.curStepIndex, curSubStepIndex = $$.curSubStepIndex, curStepInfo = $$.curStepInfo, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxv class="_zs_gallery_mx-main_index_-main" style="min-height: ';
    $line = 1;
    $art = '=viewHeight';
    ;
    $p += ($expr = '<%=viewHeight%>', $e(viewHeight)) + 'px;"><div class="_zs_gallery_mx-main_index_-main-nav" style="width: ';
    $line = 2;
    $art = '=leftWidth';
    ;
    $p += ($expr = '<%=leftWidth%>', $e(leftWidth)) + 'px;">';
    $line = 3;
    $art = 'each stepInfos as step';
    ;
    $expr = '<%for (var $art_iprplfsk$art_i = 0, $art_chrppspqw$art_c = stepInfos.length; $art_iprplfsk$art_i < $art_chrppspqw$art_c; $art_iprplfsk$art_i++) {    var step = stepInfos[$art_iprplfsk$art_i]%>';
    for (var $art_iprplfsk$art_i = 0, $art_chrppspqw$art_c = stepInfos.length; $art_iprplfsk$art_i < $art_chrppspqw$art_c; $art_iprplfsk$art_i++) {
        var step = stepInfos[$art_iprplfsk$art_i];
        $p += '<div class="_zs_gallery_mx-main_index_-main-step ';
        $line = 4;
        $art = 'if (step.index == curStepIndex)';
        ;
        $expr = '<%if (step.index == curStepIndex) {%>';
        if (step.index == curStepIndex) {
            ;
            $p += ' _zs_gallery_mx-main_index_-step-current ';
            $line = 4;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 4;
        $art = 'if step.locked';
        ;
        $expr = '<%if (step.locked) {%>';
        if (step.locked) {
            ;
            $p += ' _zs_gallery_mx-main_index_-step-locked ';
            $line = 4;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '"><div mxa="_zs_galleryc\\:_" class="_zs_gallery_mx-main_index_-step-over"><a href="javascript:;" class="_zs_gallery_mx-main_index_-link _zs_gallery_mx-main_index_-step-over clearfix ';
        $line = 6;
        $art = 'if ((step.index == curStepIndex) && (curSubStepIndex == -1))';
        ;
        $expr = '<%if ((step.index == curStepIndex) && (curSubStepIndex == -1)) {%>';
        if ((step.index == curStepIndex) && (curSubStepIndex == -1)) {
            ;
            $p += ' _zs_gallery_mx-main_index_-link-on ';
            $line = 6;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" data-sub="-1" ';
        $line = 8;
        $art = 'if !step.locked';
        ;
        $expr = '<%if (!step.locked) {%>';
        if (!step.locked) {
            ;
            $p += ' mx-click="' + $viewId + 'nav({stepIndex:';
            $line = 8;
            $art = '=step.index';
            ;
            $p += ($expr = '<%=step.index%>', $e(step.index)) + '})" ';
            $line = 8;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 9;
        $art = 'if step.icon';
        ;
        $expr = '<%if (step.icon) {%>';
        if (step.icon) {
            ;
            $p += '<span mxa="_zs_galleryc\\:a" class="_zs_gallery_mx-main_index_-over-icon fl">';
            $line = 10;
            $art = '!step.icon';
            ;
            $p += ($expr = '<%!step.icon%>', $n(step.icon)) + '</span>';
            $line = 11;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<span mxa="_zs_galleryc\\:b" class="fl">';
        $line = 12;
        $art = '=step.label';
        ;
        $p += ($expr = '<%=step.label%>', $e(step.label)) + '</span></a></div>';
        $line = 15;
        $art = 'if (!step.locked && step.subs.length > 1)';
        ;
        $expr = '<%if (!step.locked && step.subs.length > 1) {%>';
        if (!step.locked && step.subs.length > 1) {
            ;
            $p += '<div>';
            $line = 17;
            $art = 'each step.subs as sub';
            ;
            $expr = '<%for (var $art_iuqzfsyvexk$art_i = 0, $art_objaohlss$art_obj = step.subs, $art_cdnaqoln$art_c = $art_objaohlss$art_obj.length; $art_iuqzfsyvexk$art_i < $art_cdnaqoln$art_c; $art_iuqzfsyvexk$art_i++) {            var sub = $art_objaohlss$art_obj[$art_iuqzfsyvexk$art_i]%>';
            for (var $art_iuqzfsyvexk$art_i = 0, $art_objaohlss$art_obj = step.subs, $art_cdnaqoln$art_c = $art_objaohlss$art_obj.length; $art_iuqzfsyvexk$art_i < $art_cdnaqoln$art_c; $art_iuqzfsyvexk$art_i++) {
                var sub = $art_objaohlss$art_obj[$art_iuqzfsyvexk$art_i];
                $p += '<div mxa="_zs_galleryc\\:c" class="_zs_gallery_mx-main_index_-step-sub"><a href="javascript:;" class="_zs_gallery_mx-main_index_-link ';
                $line = 19;
                $art = 'if ((step.index == curStepIndex) && (curSubStepIndex == sub.index))';
                ;
                $expr = '<%if ((step.index == curStepIndex) && (curSubStepIndex == sub.index)) {%>';
                if ((step.index == curStepIndex) && (curSubStepIndex == sub.index)) {
                    ;
                    $p += ' _zs_gallery_mx-main_index_-link-on ';
                    $line = 19;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '" data-sub="';
                $line = 20;
                $art = '=sub.index';
                ;
                $p += ($expr = '<%=sub.index%>', $e(sub.index)) + '" mx-click="' + $viewId + 'nav({stepIndex:';
                $line = 21;
                $art = '=step.index';
                ;
                $p += ($expr = '<%=step.index%>', $e(step.index)) + ',subStepIndex:';
                $line = 21;
                $art = '=sub.index';
                ;
                $p += ($expr = '<%=sub.index%>', $e(sub.index)) + '})">';
                $line = 22;
                $art = '=sub.label';
                ;
                $p += ($expr = '<%=sub.label%>', $e(sub.label)) + '</a></div>';
                $line = 25;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 27;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 28;
        $art = 'if (step.index == curStepIndex)';
        ;
        $expr = '<%if (step.index == curStepIndex) {%>';
        if (step.index == curStepIndex) {
            ;
            $p += '<i mxs="_zs_galleryc\\:_" class="mc-iconfont _zs_gallery_mx-main_index_-arrow-icon">&#xe602;</i>';
            $line = 30;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 31;
        $art = 'if step.locked';
        ;
        $expr = '<%if (step.locked) {%>';
        if (step.locked) {
            ;
            $p += '<i mxs="_zs_galleryc\\:a" class="mc-iconfont _zs_gallery_mx-main_index_-locked-icon">&#xe759;</i>';
            $line = 33;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 35;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv class="_zs_gallery_mx-main_index_-main-content" style="padding-left: ';
    $line = 37;
    $art = '=leftWidth';
    ;
    $p += ($expr = '<%=leftWidth%>', $e(leftWidth)) + 'px;"><div mxa="_zs_galleryc\\:d" class="_zs_gallery_mx-main_index_-content-title">';
    $line = 38;
    $art = '=curStepInfo.label';
    ;
    $p += ($expr = '<%=curStepInfo.label%>', $e(curStepInfo.label)) + '</div><div mxv mxa="_zs_galleryc\\:e" class="_zs_gallery_mx-main_index_-content-body"><div mxv>';
    $line = 42;
    $art = 'each curStepInfo.subs as sub';
    ;
    $expr = '<%for (var $art_iuicmmnf$art_i = 0, $art_objnydfnxnke$art_obj = curStepInfo.subs, $art_cenkv$art_c = $art_objnydfnxnke$art_obj.length; $art_iuicmmnf$art_i < $art_cenkv$art_c; $art_iuicmmnf$art_i++) {    var sub = $art_objnydfnxnke$art_obj[$art_iuicmmnf$art_i]%>';
    for (var $art_iuicmmnf$art_i = 0, $art_objnydfnxnke$art_obj = curStepInfo.subs, $art_cenkv$art_c = $art_objnydfnxnke$art_obj.length; $art_iuicmmnf$art_i < $art_cenkv$art_c; $art_iuicmmnf$art_i++) {
        var sub = $art_objnydfnxnke$art_obj[$art_iuicmmnf$art_i];
        $p += '<div mxv class="_zs_gallery_mx-main_index_-content-box" style="padding-right: ';
        $line = 44;
        $art = '=(curStepInfo.rightWidth + 20)';
        ;
        $p += ($expr = '<%=(curStepInfo.rightWidth + 20)%>', $e((curStepInfo.rightWidth + 20))) + 'px;"><div mxv="curStepInfo" mx-view="';
        $line = 45;
        $art = '=sub.view';
        ;
        $p += ($expr = '<%=sub.view%>', $e(sub.view)) + '?info=';
        $line = 45;
        $art = '@sub';
        ;
        $p += ($expr = '<%@sub%>', $i($$ref, sub)) + '" id="sub_frame_';
        $line = 46;
        $art = '=sub.index';
        ;
        $p += ($expr = '<%=sub.index%>', $e(sub.index)) + '"><div mxs="_zs_galleryc\\:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>';
        $line = 49;
        $art = 'if sub.sideWrapper';
        ;
        $expr = '<%if (sub.sideWrapper) {%>';
        if (sub.sideWrapper) {
            ;
            $p += '<div mxv="curStepInfo" mx-view="';
            $line = 50;
            $art = '=sub.sideWrapper';
            ;
            $p += ($expr = '<%=sub.sideWrapper%>', $e(sub.sideWrapper)) + '?data=';
            $line = 50;
            $art = '@sub.sideData';
            ;
            $p += ($expr = '<%@sub.sideData%>', $i($$ref, sub.sideData)) + '" class="_zs_gallery_mx-main_index_-content-side" style="width: ';
            $line = 51;
            $art = '=curStepInfo.rightWidth';
            ;
            $p += ($expr = '<%=curStepInfo.rightWidth%>', $e(curStepInfo.rightWidth)) + 'px;"><div mxs="_zs_galleryc\\:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>';
            $line = 54;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 56;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 58;
    $art = 'if curStepInfo.sideWrapper';
    ;
    $expr = '<%if (curStepInfo.sideWrapper) {%>';
    if (curStepInfo.sideWrapper) {
        ;
        $p += '<div mxv="curStepInfo" mx-view="';
        $line = 59;
        $art = '=curStepInfo.sideWrapper';
        ;
        $p += ($expr = '<%=curStepInfo.sideWrapper%>', $e(curStepInfo.sideWrapper)) + '?data=';
        $line = 59;
        $art = '@curStepInfo.sideData';
        ;
        $p += ($expr = '<%@curStepInfo.sideData%>', $i($$ref, curStepInfo.sideData)) + '" class="_zs_gallery_mx-main_index_-content-side" style="width: ';
        $line = 60;
        $art = '=curStepInfo.rightWidth';
        ;
        $p += ($expr = '<%=curStepInfo.rightWidth%>', $e(curStepInfo.rightWidth)) + 'px;"><div mxs="_zs_galleryc\\:b" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>';
        $line = 63;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 66;
    $art = 'if !curStepInfo.customTrigger';
    ;
    $expr = '<%if (!curStepInfo.customTrigger) {%>';
    if (!curStepInfo.customTrigger) {
        ;
        $p += '<div mxa="_zs_galleryc\\:f" class="_zs_gallery_mx-main_index_-content-footer"><div>';
        $line = 69;
        $art = 'if curStepInfo.prevTip';
        ;
        $expr = '<%if (curStepInfo.prevTip) {%>';
        if (curStepInfo.prevTip) {
            ;
            $p += '<a mxa="_zs_galleryc\\:g" href="javascript:;" class="btn min-width-100 mr20" mx-click="' + $viewId + 'prev()">';
            $line = 71;
            $art = '=curStepInfo.prevTip';
            ;
            $p += ($expr = '<%=curStepInfo.prevTip%>', $e(curStepInfo.prevTip)) + '</a>';
            $line = 72;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 74;
        $art = 'if curStepInfo.nextTip';
        ;
        $expr = '<%if (curStepInfo.nextTip) {%>';
        if (curStepInfo.nextTip) {
            ;
            $p += '<a mxa="_zs_galleryc\\:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="' + $viewId + 'next()">';
            $line = 76;
            $art = '=curStepInfo.nextTip';
            ;
            $p += ($expr = '<%=curStepInfo.nextTip%>', $e(curStepInfo.nextTip)) + '</a>';
            $line = 77;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div id="';
        $line = 79;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_error" class="_zs_gallery_mx-main_index_-error-node"></div></div>';
        $line = 81;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/index.html';
    throw msg;
} return $p; },
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
                var onClass = '_zs_gallery_mx-main_index_-link-on';
                var cur = $('#' + that.id + ' ._zs_gallery_mx-main_index_-step-current');
                cur.find('._zs_gallery_mx-main_index_-link').removeClass(onClass);
                cur.find('._zs_gallery_mx-main_index_-link[data-sub="' + curSubStepIndex + '"]').addClass(onClass);
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
        var content = context.find('._zs_gallery_mx-main_index_-main-content');
        if (!content.length) {
            return;
        }
        var nav = context.find('._zs_gallery_mx-main_index_-main-nav');
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
        var content = context.find('._zs_gallery_mx-main_index_-main');
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
                errorNode.html("\n                    <i class=\"mc-iconfont _zs_gallery_mx-main_index_-error-icon\">&#xe6ad;</i>\n                    " + msgs.map(function (m) { return "\n                        <div>" + m.label + "\uFF1A" + m.msg + "</div>\n                    "; }).join('') + "\n                ");
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