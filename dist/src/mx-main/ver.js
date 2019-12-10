/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/ver",["magix","./steps"],(require,exports,module)=>{
/*magix_1,steps_1*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var steps_1 = require("./steps");
magix_1["default"].applyStyle("_zs_gallery_mx-main_ver_","[mx-view*=\"mx-main/ver\"] {\n  padding: 16px;\n  background-color: #e8ebf2;\n}\n._zs_gallery_mx-main_ver_-step {\n  position: relative;\n  margin-bottom: 20px;\n  padding-left: 58px;\n}\n._zs_gallery_mx-main_ver_-step:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-line {\n  position: absolute;\n  top: 47px;\n  left: 21px;\n  z-index: 2;\n  width: 0;\n  height: 100%;\n  margin-left: -1px;\n  border-left: 2px solid #fff;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-circle {\n  position: absolute;\n  top: 5px;\n  left: 0;\n  z-index: 3;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: all var(--duration);\n  overflow: hidden;\n  cursor: pointer;\n}\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-circle,\n._zs_gallery_mx-main_ver_-step ._zs_gallery_mx-main_ver_-circle > * {\n  display: block;\n  width: 42px;\n  height: 42px;\n  line-height: 42px;\n  text-align: center;\n  color: #ccc;\n  font-weight: bold;\n  font-size: 18px;\n}\n._zs_gallery_mx-main_ver_-footer-btn {\n  min-width: 100px;\n  margin-right: 20px;\n}\n._zs_gallery_mx-main_ver_-footer-btn:last-child {\n  margin-right: 0;\n}\n");
exports["default"] = steps_1["default"].extend({
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
    $expr = '<%for (var $art_issxiihsswd$art_i = 0, $art_cmvjwxmnaf$art_c = stepInfos.length; $art_issxiihsswd$art_i < $art_cmvjwxmnaf$art_c; $art_issxiihsswd$art_i++) {    var step = stepInfos[$art_issxiihsswd$art_i]%>';
    for (var $art_issxiihsswd$art_i = 0, $art_cmvjwxmnaf$art_c = stepInfos.length; $art_issxiihsswd$art_i < $art_cmvjwxmnaf$art_c; $art_issxiihsswd$art_i++) {
        var step = stepInfos[$art_issxiihsswd$art_i];
        $p += '<div mxv mxa="_zs_gallerydF:_" class="clearfix _zs_gallery_mx-main_ver_-step"><div mxa="_zs_gallerydF:a" class="_zs_gallery_mx-main_ver_-circle">';
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
            $p += '<div mxs="_zs_gallerydF:_" class="_zs_gallery_mx-main_ver_-line"></div>';
            $line = 6;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxv mxa="_zs_gallerydF:b" class="grid"><div mxa="_zs_gallerydF:c" class="clearfix" style="padding: 10px 24px"><div mxa="_zs_gallerydF:d" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_gallerydF:e" class="grid-title" style="margin-right: 16px;">';
        $line = 9;
        $art = '=step.label';
        ;
        $p += ($expr = '<%=step.label%>', $e(step.label)) + '</span></div>';
        $line = 11;
        $art = 'if (!step.locked && !step.current)';
        ;
        $expr = '<%if (!step.locked && !step.current) {%>';
        if (!step.locked && !step.current) {
            ;
            $p += '<a class="fr lh32 color-brand" href="javascript:;" mx-click="' + $viewId + 'nav({stepIndex:';
            $line = 13;
            $art = '=step.index';
            ;
            $p += ($expr = '<%=step.index%>', $e(step.index)) + '})">修改</a>';
            $line = 14;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 16;
        $art = 'if step.current';
        ;
        $expr = '<%if (step.current) {%>';
        if (step.current) {
            ;
            $p += '<div mxv mxa="_zs_gallerydF:f" class="clearfix bt-e6" style="padding: 16px 24px;"><div mxv="curStepInfo" mx-view="';
            $line = 18;
            $art = '=curStepInfo.view';
            ;
            $p += ($expr = '<%=curStepInfo.view%>', $e(curStepInfo.view)) + '?info=';
            $line = 18;
            $art = '@curStepInfo';
            ;
            $p += ($expr = '<%@curStepInfo%>', $i($$ref, curStepInfo)) + '" id="';
            $line = 19;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_cur_content"><div mxs="_zs_gallerydF:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_gallerydF:g" class="pt20">';
            $line = 23;
            $art = 'each curStepInfo.btns as btn';
            ;
            $expr = '<%for (var $art_iyenldj$art_i = 0, $art_objshbwxmlcnh$art_obj = curStepInfo.btns, $art_cglbrltpskv$art_c = $art_objshbwxmlcnh$art_obj.length; $art_iyenldj$art_i < $art_cglbrltpskv$art_c; $art_iyenldj$art_i++) {            var btn = $art_objshbwxmlcnh$art_obj[$art_iyenldj$art_i]%>';
            for (var $art_iyenldj$art_i = 0, $art_objshbwxmlcnh$art_obj = curStepInfo.btns, $art_cglbrltpskv$art_c = $art_objshbwxmlcnh$art_obj.length; $art_iyenldj$art_i < $art_cglbrltpskv$art_c; $art_iyenldj$art_i++) {
                var btn = $art_objshbwxmlcnh$art_obj[$art_iyenldj$art_i];
                $p += '<a href="javascript:;" class="btn ';
                $line = 24;
                $art = 'if btn.brand';
                ;
                $expr = '<%if (btn.brand) {%>';
                if (btn.brand) {
                    ;
                    $p += ' btn-brand ';
                    $line = 24;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' _zs_gallery_mx-main_ver_-footer-btn" mx-click="' + $viewId + '';
                $line = 25;
                $art = '=btn.fn';
                ;
                $p += ($expr = '<%=btn.fn%>', $e(btn.fn)) + '({btn:\'';
                $line = 25;
                $art = '@btn';
                ;
                $p += ($expr = '<%@btn%>', $i($$ref, btn)) + '\'})">';
                $line = 25;
                $art = '=btn.text';
                ;
                $p += ($expr = '<%=btn.text%>', $e(btn.text)) + '</a>';
                $line = 26;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div><div id="';
            $line = 28;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_error"></div></div>';
            $line = 30;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 33;
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