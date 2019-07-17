/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/hor",["magix","mx-main/steps"],(require,exports,module)=>{
/*Magix,Base*/

var Magix = require("magix");
var Base = require("mx-main/steps");
Magix.applyStyle("_zs_gallery_mx-main_hor_","._zs_gallery_mx-main_hor_-steps {\n  box-sizing: border-box;\n  display: flex;\n}\n._zs_gallery_mx-main_hor_-step {\n  position: relative;\n  display: inline-block;\n  margin-right: 10px;\n  white-space: nowrap;\n  flex: 1;\n  vertical-align: top;\n  overflow: hidden;\n}\n._zs_gallery_mx-main_hor_-step ._zs_gallery_mx-main_hor_-circle {\n  float: left;\n  position: relative;\n  z-index: 3;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--color-brand);\n  color: var(--color-brand);\n  text-align: center;\n  line-height: 26px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_hor_-step ._zs_gallery_mx-main_hor_-circle ._zs_gallery_mx-main_hor_-circle-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  line-height: 26px;\n  font-size: 26px;\n}\n._zs_gallery_mx-main_hor_-step ._zs_gallery_mx-main_hor_-title {\n  float: left;\n  position: relative;\n  z-index: 3;\n  padding-right: 10px;\n  padding-left: 6px;\n  font-size: 14px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all var(--duration);\n  line-height: 28px;\n}\n._zs_gallery_mx-main_hor_-step:after {\n  content: '';\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 0;\n  border-top: 1px solid var(--color-border);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_hor_-step:last-child {\n  flex: none;\n}\n._zs_gallery_mx-main_hor_-step:last-child:after {\n  display: none;\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-locked ._zs_gallery_mx-main_hor_-circle {\n  border-color: var(--color-border);\n  background-color: var(--color-disabled);\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-locked ._zs_gallery_mx-main_hor_-title {\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-line-on:after {\n  border-top: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-current ._zs_gallery_mx-main_hor_-circle {\n  border-color: var(--color-brand);\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-current ._zs_gallery_mx-main_hor_-title {\n  color: var(--color-brand);\n}\n");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', stepInfos = $$.stepInfos, curStepInfo = $$.curStepInfo, viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryc|:_" class="_zs_gallery_mx-main_hor_-steps">';
    $line = 2;
    $art = 'each stepInfos as step';
    ;
    $expr = '<%for (var $art_ilthuaork$art_i = 0, $art_cpefshemgcec$art_c = stepInfos.length; $art_ilthuaork$art_i < $art_cpefshemgcec$art_c; $art_ilthuaork$art_i++) {    var step = stepInfos[$art_ilthuaork$art_i]%>';
    for (var $art_ilthuaork$art_i = 0, $art_cpefshemgcec$art_c = stepInfos.length; $art_ilthuaork$art_i < $art_cpefshemgcec$art_c; $art_ilthuaork$art_i++) {
        var step = stepInfos[$art_ilthuaork$art_i];
        $p += '<div class="clearfix _zs_gallery_mx-main_hor_-step ';
        $line = 3;
        $art = 'if step.current';
        ;
        $expr = '<%if (step.current) {%>';
        if (step.current) {
            ;
            $p += ' _zs_gallery_mx-main_hor_-current ';
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
            $p += ' _zs_gallery_mx-main_hor_-locked ';
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
            $p += ' _zs_gallery_mx-main_hor_-locked ';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 3;
        $art = 'if step.lineOn';
        ;
        $expr = '<%if (step.lineOn) {%>';
        if (step.lineOn) {
            ;
            $p += ' _zs_gallery_mx-main_hor_-line-on ';
            $line = 3;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '" ';
        $line = 4;
        $art = 'if !step.locked';
        ;
        $expr = '<%if (!step.locked) {%>';
        if (!step.locked) {
            ;
            $p += ' mx-click="' + $viewId + 'nav({stepIndex:';
            $line = 4;
            $art = '=step.index';
            ;
            $p += ($expr = '<%=step.index%>', $e(step.index)) + '})" ';
            $line = 4;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '><div mxa="_zs_galleryc|:a" class="_zs_gallery_mx-main_hor_-circle">';
        $line = 6;
        $art = 'if step.lineOn';
        ;
        $expr = '<%if (step.lineOn) {%>';
        if (step.lineOn) {
            ;
            $p += '<i mxs="_zs_galleryc|:_" class="mc-iconfont _zs_gallery_mx-main_hor_-circle-icon">&#xe65d;</i>';
            $line = 8;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' ';
            $line = 9;
            $art = '=step.index';
            ;
            $p += ($expr = '<%=step.index%>', $e(step.index)) + ' ';
            $line = 10;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxa="_zs_galleryc|:b" class="_zs_gallery_mx-main_hor_-title">';
        $line = 12;
        $art = '=step.label';
        ;
        $p += ($expr = '<%=step.label%>', $e(step.label)) + '</div></div>';
        $line = 14;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv="curStepInfo" mx-view="';
    $line = 16;
    $art = '=curStepInfo.view';
    ;
    $p += ($expr = '<%=curStepInfo.view%>', $e(curStepInfo.view)) + '?info=';
    $line = 16;
    $art = '@curStepInfo';
    ;
    $p += ($expr = '<%@curStepInfo%>', $i($$ref, curStepInfo)) + '" class="pt20 pb20" id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_cur_content"><div mxs="_zs_galleryc|:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div>';
    $line = 21;
    $art = 'if curStepInfo.prevTip';
    ;
    $expr = '<%if (curStepInfo.prevTip) {%>';
    if (curStepInfo.prevTip) {
        ;
        $p += '<a mxa="_zs_galleryc|:c" href="javascript:;" class="btn min-width-100 mr15" mx-click="' + $viewId + 'prev()">';
        $line = 23;
        $art = '=curStepInfo.prevTip';
        ;
        $p += ($expr = '<%=curStepInfo.prevTip%>', $e(curStepInfo.prevTip)) + '</a>';
        $line = 24;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 26;
    $art = 'if curStepInfo.nextTip';
    ;
    $expr = '<%if (curStepInfo.nextTip) {%>';
    if (curStepInfo.nextTip) {
        ;
        $p += '<a mxa="_zs_galleryc|:d" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="' + $viewId + 'next()">';
        $line = 28;
        $art = '=curStepInfo.nextTip';
        ;
        $p += ($expr = '<%=curStepInfo.nextTip%>', $e(curStepInfo.nextTip)) + '</a>';
        $line = 29;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_error"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/hor.html';
    throw msg;
} return $p; }
});

});