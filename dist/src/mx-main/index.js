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
Magix.applyStyle("_zs_gallery_mx-main_index_","[mx-view*=\"mx-main/index\"] {\n  position: relative;\n  background-color: #e8ebf2;\n}\n._zs_gallery_mx-main_index_-main-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  padding-top: 16px;\n  background-color: var(--app-nav-bg);\n  z-index: 3;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step {\n  position: relative;\n  font-size: 14px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 24px;\n  bottom: 0;\n  width: 0;\n  border-left: 1px solid #4D5873;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step:first-child::before {\n  top: 23px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step:last-child::before {\n  bottom: 23px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step {\n  position: relative;\n  display: block;\n  height: 46px;\n  line-height: 46px;\n  padding-left: 36px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step ._zs_gallery_mx-main_index_-text {\n  color: #fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step ._zs_gallery_mx-main_index_-pbg {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(-90deg, var(--app-brand) 0%, var(--app-brand-gradient) 100%);\n  background-color: var(--app-brand);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step:hover ._zs_gallery_mx-main_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-pbg {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-parent ._zs_gallery_mx-main_index_-idx {\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: -8px;\n  border-radius: 50%;\n  background-color: #4D5873;\n  color: #fff;\n  text-align: center;\n  line-height: 16px;\n  font-size: 12px;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-child::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 24px;\n  width: 10px;\n  height: 0;\n  border-top: 1px solid #4D5873;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent ._zs_gallery_mx-main_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent ._zs_gallery_mx-main_index_-pbg {\n  opacity: 0.2;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-idx {\n  background-color: #fff;\n  color: var(--app-brand);\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-pbg {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-step {\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-step:hover ._zs_gallery_mx-main_index_-text {\n  opacity: 0.5;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-locked-icon {\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  margin-top: -6px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #4D5873;\n}\n._zs_gallery_mx-main_index_-main-content {\n  position: relative;\n  z-index: 2;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box {\n  position: relative;\n  margin-bottom: 16px;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title {\n  padding: 8px 24px;\n  border-top-left-radius: var(--border-radius);\n  border-top-right-radius: var(--border-radius);\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon,\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon > *,\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-label,\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-tips {\n  display: inline-block;\n  height: 32px;\n  line-height: 32px;\n  vertical-align: middle;\n  overflow: hidden;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon {\n  margin-right: 5px;\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-label {\n  font-size: 16px;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-tip {\n  margin-left: 20px;\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-bd {\n  padding: 16px 24px;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-side {\n  position: absolute;\n  background-color: #fff;\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-title {\n  padding: 8px 24px;\n  line-height: 32px;\n  font-size: 16px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-bd {\n  padding: 16px 24px;\n  color: #666;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer {\n  text-align: center;\n  padding: 40px 0;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer ._zs_gallery_mx-main_index_-footer-btn {\n  min-width: 100px;\n  margin-right: 20px;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer ._zs_gallery_mx-main_index_-footer-btn:last-child {\n  margin-right: 0;\n}\n._zs_gallery_mx-main_index_-footer-error {\n  display: inline-block;\n  position: relative;\n  margin-top: 10px;\n  color: var(--color-red);\n}\n");
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
} ; var $g = '', $_temp, $p = '', leftWidth = $$.leftWidth, stepInfos = $$.stepInfos, curStepIndex = $$.curStepIndex, curSubStepIndex = $$.curSubStepIndex, viewHeight = $$.viewHeight, gapWidth = $$.gapWidth, curStepInfo = $$.curStepInfo, rightWidth = $$.rightWidth, childInfos = $$.childInfos, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-main_index_-main-nav" style="width: ';
    $line = 1;
    $art = '=leftWidth';
    ;
    $p += ($expr = '<%=leftWidth%>', $e(leftWidth)) + 'px;">';
    $line = 2;
    $art = 'each stepInfos as step stepIndex';
    ;
    $expr = '<%for (var stepIndex = 0, $art_cyrdwu$art_c = stepInfos.length; stepIndex < $art_cyrdwu$art_c; stepIndex++) {    var step = stepInfos[stepIndex]%>';
    for (var stepIndex = 0, $art_cyrdwu$art_c = stepInfos.length; stepIndex < $art_cyrdwu$art_c; stepIndex++) {
        var step = stepInfos[stepIndex];
        $p += '<div class="_zs_gallery_mx-main_index_-main-step ';
        $line = 3;
        $art = 'if (step.index == curStepIndex)';
        ;
        $expr = '<%if (step.index == curStepIndex) {%>';
        if (step.index == curStepIndex) {
            ;
            $p += ' _zs_gallery_mx-main_index_-step-current ';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 3;
        $art = 'if step.locked';
        ;
        $expr = '<%if (step.locked) {%>';
        if (step.locked) {
            ;
            $p += ' _zs_gallery_mx-main_index_-step-locked ';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '"><a href="javascript:;" class="_zs_gallery_mx-main_index_-step _zs_gallery_mx-main_index_-parent ';
        $line = 4;
        $art = 'if ((step.index == curStepIndex) && (curSubStepIndex == -1))';
        ;
        $expr = '<%if ((step.index == curStepIndex) && (curSubStepIndex == -1)) {%>';
        if ((step.index == curStepIndex) && (curSubStepIndex == -1)) {
            ;
            $p += ' _zs_gallery_mx-main_index_-on ';
            $line = 4;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" data-sub="-1" ';
        $line = 6;
        $art = 'if !step.locked';
        ;
        $expr = '<%if (!step.locked) {%>';
        if (!step.locked) {
            ;
            $p += ' mx-click="' + $viewId + 'nav({stepIndex:';
            $line = 6;
            $art = '=step.index';
            ;
            $p += ($expr = '<%=step.index%>', $e(step.index)) + '})" ';
            $line = 6;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' data-spm-click="gostr=/alimama.feedflow.1;locaid=df0100677"><span mxa="_zs_gallerydm:_" class="_zs_gallery_mx-main_index_-idx">';
        $line = 7;
        $art = '=(stepIndex + 1)';
        ;
        $p += ($expr = '<%=(stepIndex + 1)%>', $e((stepIndex + 1))) + '</span><span mxs="_zs_gallerydm:_" class="_zs_gallery_mx-main_index_-pbg"></span><span mxa="_zs_gallerydm:a" class="_zs_gallery_mx-main_index_-text">';
        $line = 9;
        $art = '=step.label';
        ;
        $p += ($expr = '<%=step.label%>', $e(step.label)) + '</span></a>';
        $line = 11;
        $art = 'if !step.locked && (step.subs.length > 1)';
        ;
        $expr = '<%if (!step.locked && (step.subs.length > 1)) {%>';
        if (!step.locked && (step.subs.length > 1)) {
            ;
            $p += ' ';
            $line = 12;
            $art = 'each step.subs as sub';
            ;
            $expr = '<%for (var $art_iuiotvbni$art_i = 0, $art_objnfoyuhxkpv$art_obj = step.subs, $art_clgrslcf$art_c = $art_objnfoyuhxkpv$art_obj.length; $art_iuiotvbni$art_i < $art_clgrslcf$art_c; $art_iuiotvbni$art_i++) {            var sub = $art_objnfoyuhxkpv$art_obj[$art_iuiotvbni$art_i]%>';
            for (var $art_iuiotvbni$art_i = 0, $art_objnfoyuhxkpv$art_obj = step.subs, $art_clgrslcf$art_c = $art_objnfoyuhxkpv$art_obj.length; $art_iuiotvbni$art_i < $art_clgrslcf$art_c; $art_iuiotvbni$art_i++) {
                var sub = $art_objnfoyuhxkpv$art_obj[$art_iuiotvbni$art_i];
                $p += '<a href="javascript:;" class="_zs_gallery_mx-main_index_-step _zs_gallery_mx-main_index_-child ';
                $line = 13;
                $art = 'if ((step.index == curStepIndex) && (curSubStepIndex == sub.index))';
                ;
                $expr = '<%if ((step.index == curStepIndex) && (curSubStepIndex == sub.index)) {%>';
                if ((step.index == curStepIndex) && (curSubStepIndex == sub.index)) {
                    ;
                    $p += ' _zs_gallery_mx-main_index_-on ';
                    $line = 13;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '" data-sub="';
                $line = 14;
                $art = '=sub.index';
                ;
                $p += ($expr = '<%=sub.index%>', $e(sub.index)) + '" mx-click="' + $viewId + 'nav({stepIndex:';
                $line = 15;
                $art = '=step.index';
                ;
                $p += ($expr = '<%=step.index%>', $e(step.index)) + ',subStepIndex:';
                $line = 15;
                $art = '=sub.index';
                ;
                $p += ($expr = '<%=sub.index%>', $e(sub.index)) + '})" data-spm-click="gostr=/alimama.feedflow.1;locaid=de313a21d"><span mxs="_zs_gallerydm:_" class="_zs_gallery_mx-main_index_-pbg"></span><span mxa="_zs_gallerydm:b" class="_zs_gallery_mx-main_index_-text">';
                $line = 17;
                $art = '=sub.label';
                ;
                $p += ($expr = '<%=sub.label%>', $e(sub.label)) + '</span></a>';
                $line = 19;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 20;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 21;
        $art = 'if step.locked';
        ;
        $expr = '<%if (step.locked) {%>';
        if (step.locked) {
            ;
            $p += '<i mxs="_zs_gallerydm:a" class="mc-iconfont _zs_gallery_mx-main_index_-locked-icon">&#xe759;</i>';
            $line = 23;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 25;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv class="_zs_gallery_mx-main_index_-main-content clearfix" style="min-height: ';
    $line = 27;
    $art = '=viewHeight';
    ;
    $p += ($expr = '<%=viewHeight%>', $e(viewHeight)) + 'px; padding-top: ';
    $line = 27;
    $art = '=gapWidth';
    ;
    $p += ($expr = '<%=gapWidth%>', $e(gapWidth)) + 'px; padding-right: ';
    $line = 27;
    $art = '=(gapWidth + (curStepInfo.sideWrapper ? (rightWidth + gapWidth) : 0))';
    ;
    $p += ($expr = '<%=(gapWidth + (curStepInfo.sideWrapper ? (rightWidth + gapWidth) : 0))%>', $e((gapWidth + (curStepInfo.sideWrapper ? (rightWidth + gapWidth) : 0)))) + 'px; padding-left: ';
    $line = 27;
    $art = '=(leftWidth + gapWidth)';
    ;
    $p += ($expr = '<%=(leftWidth + gapWidth)%>', $e((leftWidth + gapWidth))) + 'px;">';
    $line = 28;
    $art = 'each curStepInfo.subs as sub';
    ;
    $expr = '<%for (var $art_injouwdtd$art_i = 0, $art_objcfanthye$art_obj = curStepInfo.subs, $art_cclorrkgwgi$art_c = $art_objcfanthye$art_obj.length; $art_injouwdtd$art_i < $art_cclorrkgwgi$art_c; $art_injouwdtd$art_i++) {    var sub = $art_objcfanthye$art_obj[$art_injouwdtd$art_i]%>';
    for (var $art_injouwdtd$art_i = 0, $art_objcfanthye$art_obj = curStepInfo.subs, $art_cclorrkgwgi$art_c = $art_objcfanthye$art_obj.length; $art_injouwdtd$art_i < $art_cclorrkgwgi$art_c; $art_injouwdtd$art_i++) {
        var sub = $art_objcfanthye$art_obj[$art_injouwdtd$art_i];
        $p += '<div mxv mxa="_zs_gallerydm:c" class="_zs_gallery_mx-main_index_-content-box"><div mxa="_zs_gallerydm:d" class="_zs_gallery_mx-main_index_-box-title clearfix">';
        $line = 31;
        $art = 'if sub.icon';
        ;
        $expr = '<%if (sub.icon) {%>';
        if (sub.icon) {
            ;
            $p += '<span mxa="_zs_gallerydm:e" class="_zs_gallery_mx-main_index_-title-icon">';
            $line = 31;
            $art = '!sub.icon';
            ;
            $p += ($expr = '<%!sub.icon%>', $n(sub.icon)) + '</span>';
            $line = 31;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<span mxa="_zs_gallerydm:f" class="_zs_gallery_mx-main_index_-title-label">';
        $line = 32;
        $art = '=sub.label';
        ;
        $p += ($expr = '<%=sub.label%>', $e(sub.label)) + '</span>';
        $line = 33;
        $art = 'if sub.tip';
        ;
        $expr = '<%if (sub.tip) {%>';
        if (sub.tip) {
            ;
            $p += '<span mxa="_zs_gallerydm:g" class="_zs_gallery_mx-main_index_-title-tip">';
            $line = 34;
            $art = '!sub.tip';
            ;
            $p += ($expr = '<%!sub.tip%>', $n(sub.tip)) + '</span>';
            $line = 35;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxv="curStepInfo,childInfos" class="_zs_gallery_mx-main_index_-box-bd" id="sub_frame_';
        $line = 38;
        $art = '=sub.index';
        ;
        $p += ($expr = '<%=sub.index%>', $e(sub.index)) + '" mx-view="';
        $line = 39;
        $art = '=sub.view';
        ;
        $p += ($expr = '<%=sub.view%>', $e(sub.view)) + '?info=';
        $line = 39;
        $art = '@sub';
        ;
        $p += ($expr = '<%@sub%>', $i($$ref, sub)) + '&data=';
        $line = 39;
        $art = '@childInfos';
        ;
        $p += ($expr = '<%@childInfos%>', $i($$ref, childInfos)) + '"><div mxs="_zs_gallerydm:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div></div>';
        $line = 43;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 44;
    $art = 'if curStepInfo.sideWrapper';
    ;
    $expr = '<%if (curStepInfo.sideWrapper) {%>';
    if (curStepInfo.sideWrapper) {
        ;
        $p += '<div mxv="curStepInfo" class="_zs_gallery_mx-main_index_-content-side" style="top: ';
        $line = 45;
        $art = '=gapWidth';
        ;
        $p += ($expr = '<%=gapWidth%>', $e(gapWidth)) + 'px; right: ';
        $line = 45;
        $art = '=gapWidth';
        ;
        $p += ($expr = '<%=gapWidth%>', $e(gapWidth)) + 'px; width: ';
        $line = 45;
        $art = '=rightWidth';
        ;
        $p += ($expr = '<%=rightWidth%>', $e(rightWidth)) + 'px;" mx-view="';
        $line = 46;
        $art = '=curStepInfo.sideWrapper';
        ;
        $p += ($expr = '<%=curStepInfo.sideWrapper%>', $e(curStepInfo.sideWrapper)) + '?data=';
        $line = 46;
        $art = '@curStepInfo.sideData';
        ;
        $p += ($expr = '<%@curStepInfo.sideData%>', $i($$ref, curStepInfo.sideData)) + '"><div mxs="_zs_gallerydm:b" class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></div>';
        $line = 49;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxa="_zs_gallerydm:h" class="_zs_gallery_mx-main_index_-content-footer"><div>';
    $line = 53;
    $art = 'if curStepInfo.prevTip';
    ;
    $expr = '<%if (curStepInfo.prevTip) {%>';
    if (curStepInfo.prevTip) {
        ;
        $p += '<a mxa="_zs_gallerydm:i" href="javascript:;" class="btn min-width-100 mr20" mx-click="' + $viewId + 'prev()">';
        $line = 55;
        $art = '=curStepInfo.prevTip';
        ;
        $p += ($expr = '<%=curStepInfo.prevTip%>', $e(curStepInfo.prevTip)) + '</a>';
        $line = 56;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 58;
    $art = 'if curStepInfo.nextTip';
    ;
    $expr = '<%if (curStepInfo.nextTip) {%>';
    if (curStepInfo.nextTip) {
        ;
        $p += '<a mxa="_zs_gallerydm:j" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="' + $viewId + 'next()">';
        $line = 60;
        $art = '=curStepInfo.nextTip';
        ;
        $p += ($expr = '<%=curStepInfo.nextTip%>', $e(curStepInfo.nextTip)) + '</a>';
        $line = 61;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div id="';
    $line = 63;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_error" class="_zs_gallery_mx-main_index_-footer-error"></div></div></div>';
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
            gapWidth: 16,
            leftWidth: +extra.leftWidth || 160,
            rightWidth: +extra.rightWidth || 260,
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
            if ((stepIndex > 1) && (!stepInfos[i - 1].locked)) {
                // 1. 第一步没有返回上一步
                // 2. 上一步被锁定的情况下没有返回上一步
                // 3. 自定义trigger的情况
                prevTip = step.prevTip || defPrevTip;
            }
            step.prevTip = prevTip;
            var nextTip = '';
            if (stepIndex < stepInfos.length) {
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
                var onClass = '_zs_gallery_mx-main_index_-on';
                var cur = $('#' + that.id + ' ._zs_gallery_mx-main_index_-step-current');
                cur.find('._zs_gallery_mx-main_index_-step').removeClass(onClass);
                cur.find('._zs_gallery_mx-main_index_-step[data-sub="' + curSubStepIndex + '"]').addClass(onClass);
                that.subScroll();
            }
            else {
                // 步骤切换了重新mount子view
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
                title: step.sideTitle || '',
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
        var side = context.find('._zs_gallery_mx-main_index_-content-side');
        if (side.length) {
            var sideTop = content.offset().top;
            var gapWidth = that.updater.get().gapWidth;
            if (scrollTop > (sideTop + gapWidth)) {
                side.css({
                    position: 'fixed',
                    top: 0
                });
            }
            else {
                side.css({
                    position: 'absolute',
                    top: gapWidth + "px"
                });
            }
        }
    },
    '$win<resize>': function () {
        var that = this;
        var winHeight = $(window).height();
        that.updater.set({
            viewHeight: winHeight
        });
        var context = $('#' + that.id);
        var content = context.find('.unfound-[main]-from-index.less');
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
                errorNode.html("\n                    <i class=\"mc-iconfont unfound-[error-icon]-from-index.less\">&#xe6ad;</i>\n                    " + msgs.map(function (m) { return "\n                        <div>" + m.label + "\uFF1A" + m.msg + "</div>\n                    "; }).join('') + "\n                ");
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