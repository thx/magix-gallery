/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/ver",["magix","mx-main/steps"],(require,exports,module)=>{
/*Magix,Base*/

var Magix = require("magix");
var Base = require("mx-main/steps");
Magix.applyStyle("_zs_gallery_mx-main_ver_","/* @dependent: ./index.less */\n._zs_gallery_mx-main_ver_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-main_ver_-step {\n  position: relative;\n  margin-bottom: 20px;\n  padding-left: 52px;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-line {\n  position: absolute;\n  top: 47px;\n  left: 21px;\n  z-index: 2;\n  width: 0;\n  height: 100%;\n  margin-left: -1px;\n  border-left: 2px solid #e6e6e6;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-circle {\n  position: absolute;\n  top: 5px;\n  left: 0;\n  z-index: 3;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  text-align: center;\n  background-color: #fafafa;\n  cursor: pointer;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-circle > * {\n  line-height: 38px;\n  color: #ccc;\n  font-weight: bold;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-content {\n  border-radius: 4px;\n  background-color: #fff;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-content ._zs_gallery_mx-main_ver_-title {\n  padding: 5px 20px;\n  line-height: 42px;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-content ._zs_gallery_mx-main_ver_-inner {\n  padding: 20px;\n  border-top: 1px solid #e6e6e6;\n}\n");
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
    $line = 1;
    $art = 'each stepInfos as step';
    ;
    $expr = '<%for (var $art_inrmebvz$art_i = 0, $art_cluvcnxb$art_c = stepInfos.length; $art_inrmebvz$art_i < $art_cluvcnxb$art_c; $art_inrmebvz$art_i++) {    var step = stepInfos[$art_inrmebvz$art_i]%>';
    for (var $art_inrmebvz$art_i = 0, $art_cluvcnxb$art_c = stepInfos.length; $art_inrmebvz$art_i < $art_cluvcnxb$art_c; $art_inrmebvz$art_i++) {
        var step = stepInfos[$art_inrmebvz$art_i];
        $p += '<div mxv mxa="_zs_galleryb[:_" class="clearfix _zs_gallery_mx-main_ver_-step"><div mxa="_zs_galleryb[:a" class="_zs_gallery_mx-main_ver_-circle">';
        $line = 3;
        $art = '!step.icon';
        ;
        $p += ($expr = '<%!step.icon%>', $n(step.icon)) + '</div>';
        $line = 4;
        $art = 'if (step.index < stepInfos.length)';
        ;
        $expr = '<%if (step.index < stepInfos.length) {%>';
        if (step.index < stepInfos.length) {
            ;
            $p += '<div mxs="_zs_galleryb[:_" class="_zs_gallery_mx-main_ver_-line"></div>';
            $line = 6;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxv mxa="_zs_galleryb[:b" class="_zs_gallery_mx-main_ver_-content"><div mxa="_zs_galleryb[:c" class="_zs_gallery_mx-main_ver_-title"><span mxa="_zs_galleryb[:d" class="fontsize-16">';
        $line = 9;
        $art = '=step.label';
        ;
        $p += ($expr = '<%=step.label%>', $e(step.label)) + '</span>';
        $line = 10;
        $art = 'if (!step.locked && !step.current)';
        ;
        $expr = '<%if (!step.locked && !step.current) {%>';
        if (!step.locked && !step.current) {
            ;
            $p += '<a class="fr color-brand" href="javascript:;" mx-click="' + $viewId + 'nav({stepIndex:';
            $line = 12;
            $art = '=step.index';
            ;
            $p += ($expr = '<%=step.index%>', $e(step.index)) + '})">修改</a>';
            $line = 13;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 15;
        $art = 'if step.current';
        ;
        $expr = '<%if (step.current) {%>';
        if (step.current) {
            ;
            $p += '<div mxv mxa="_zs_galleryb[:e" class="_zs_gallery_mx-main_ver_-inner"><div mxv="curStepInfo" mx-view="';
            $line = 17;
            $art = '=curStepInfo.view';
            ;
            $p += ($expr = '<%=curStepInfo.view%>', $e(curStepInfo.view)) + '?info=';
            $line = 17;
            $art = '@curStepInfo';
            ;
            $p += ($expr = '<%@curStepInfo%>', $i($$ref, curStepInfo)) + '" id="';
            $line = 18;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_cur_content"><div mxs="_zs_galleryb[:a" class="loading"><span class="loading-anim"></span></div></div><div mxa="_zs_galleryb[:f" class="pt20">';
            $line = 22;
            $art = 'if curStepInfo.prevTip';
            ;
            $expr = '<%if (curStepInfo.prevTip) {%>';
            if (curStepInfo.prevTip) {
                ;
                $p += '<a mxa="_zs_galleryb[:g" href="javascript:;" class="btn min-width-100 mr15" mx-click="' + $viewId + 'prev()">';
                $line = 24;
                $art = '=curStepInfo.prevTip';
                ;
                $p += ($expr = '<%=curStepInfo.prevTip%>', $e(curStepInfo.prevTip)) + '</a>';
                $line = 25;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 27;
            $art = 'if curStepInfo.nextTip';
            ;
            $expr = '<%if (curStepInfo.nextTip) {%>';
            if (curStepInfo.nextTip) {
                ;
                $p += '<a mxa="_zs_galleryb[:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="' + $viewId + 'next()">';
                $line = 29;
                $art = '=curStepInfo.nextTip';
                ;
                $p += ($expr = '<%=curStepInfo.nextTip%>', $e(curStepInfo.nextTip)) + '</a>';
                $line = 30;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div><div id="';
            $line = 32;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_error"></div></div>';
            $line = 34;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 37;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/ver.html';
    throw msg;
} return $p; }
});

});