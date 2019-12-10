/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/hor",["magix","./steps"],(require,exports,module)=>{
/*magix_1,steps_1*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var steps_1 = require("./steps");
magix_1["default"].applyStyle("_zs_gallery_mx-main_hor_","._zs_gallery_mx-main_hor_-steps {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n}\n._zs_gallery_mx-main_hor_-step {\n  position: relative;\n  display: inline-block;\n  margin-right: 10px;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n  flex: 1;\n  vertical-align: top;\n  overflow: hidden;\n}\n._zs_gallery_mx-main_hor_-step ._zs_gallery_mx-main_hor_-circle {\n  float: left;\n  position: relative;\n  z-index: 3;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--color-brand);\n  color: var(--color-brand);\n  text-align: center;\n  line-height: 26px;\n  background-color: #fff;\n  cursor: pointer;\n  -webkit-transition: all var(--duration);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_hor_-step ._zs_gallery_mx-main_hor_-circle ._zs_gallery_mx-main_hor_-circle-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  line-height: 26px;\n  font-size: 26px;\n}\n._zs_gallery_mx-main_hor_-step ._zs_gallery_mx-main_hor_-title {\n  float: left;\n  position: relative;\n  z-index: 3;\n  padding-right: 10px;\n  padding-left: 6px;\n  font-size: 14px;\n  background-color: #fff;\n  cursor: pointer;\n  -webkit-transition: all var(--duration);\n  transition: all var(--duration);\n  line-height: 28px;\n}\n._zs_gallery_mx-main_hor_-step:after {\n  content: '';\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 0;\n  border-top: 1px solid var(--color-border);\n  -webkit-transition: all var(--duration);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_hor_-step:last-child {\n  -webkit-box-flex: 0;\n  flex: none;\n}\n._zs_gallery_mx-main_hor_-step:last-child:after {\n  display: none;\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-locked ._zs_gallery_mx-main_hor_-circle {\n  border-color: var(--color-border);\n  background-color: var(--color-disabled);\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-locked ._zs_gallery_mx-main_hor_-title {\n  color: #999;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-line-on:after {\n  border-top: 1px solid var(--color-brand);\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-current ._zs_gallery_mx-main_hor_-circle {\n  border-color: var(--color-brand);\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-main_hor_-step._zs_gallery_mx-main_hor_-current ._zs_gallery_mx-main_hor_-title {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-main_hor_-footer-btn {\n  min-width: 100px;\n  margin-right: 20px;\n}\n._zs_gallery_mx-main_hor_-footer-btn:last-child {\n  margin-right: 0;\n}\n");
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
    $p += '<div mxa="_zs_gallerydC:_" class="_zs_gallery_mx-main_hor_-steps">';
    $line = 2;
    $art = 'each stepInfos as step';
    ;
    $expr = '<%for (var $art_ioxlssuk$art_i = 0, $art_ckxqgwqfanqa$art_c = stepInfos.length; $art_ioxlssuk$art_i < $art_ckxqgwqfanqa$art_c; $art_ioxlssuk$art_i++) {    var step = stepInfos[$art_ioxlssuk$art_i]%>';
    for (var $art_ioxlssuk$art_i = 0, $art_ckxqgwqfanqa$art_c = stepInfos.length; $art_ioxlssuk$art_i < $art_ckxqgwqfanqa$art_c; $art_ioxlssuk$art_i++) {
        var step = stepInfos[$art_ioxlssuk$art_i];
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
        $p += '><div mxa="_zs_gallerydC:a" class="_zs_gallery_mx-main_hor_-circle">';
        $line = 6;
        $art = 'if step.lineOn';
        ;
        $expr = '<%if (step.lineOn) {%>';
        if (step.lineOn) {
            ;
            $p += '<i mxs="_zs_gallerydC:_" class="mc-iconfont _zs_gallery_mx-main_hor_-circle-icon">&#xe65d;</i>';
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
        $p += '</div><div mxa="_zs_gallerydC:b" class="_zs_gallery_mx-main_hor_-title">';
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
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_cur_content"><div mxs="_zs_gallerydC:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div>';
    $line = 21;
    $art = 'each curStepInfo.btns as btn';
    ;
    $expr = '<%for (var $art_ijdwsmlip$art_i = 0, $art_objwgytkh$art_obj = curStepInfo.btns, $art_cskkndjuccv$art_c = $art_objwgytkh$art_obj.length; $art_ijdwsmlip$art_i < $art_cskkndjuccv$art_c; $art_ijdwsmlip$art_i++) {    var btn = $art_objwgytkh$art_obj[$art_ijdwsmlip$art_i]%>';
    for (var $art_ijdwsmlip$art_i = 0, $art_objwgytkh$art_obj = curStepInfo.btns, $art_cskkndjuccv$art_c = $art_objwgytkh$art_obj.length; $art_ijdwsmlip$art_i < $art_cskkndjuccv$art_c; $art_ijdwsmlip$art_i++) {
        var btn = $art_objwgytkh$art_obj[$art_ijdwsmlip$art_i];
        $p += '<a href="javascript:;" class="btn ';
        $line = 22;
        $art = 'if btn.brand';
        ;
        $expr = '<%if (btn.brand) {%>';
        if (btn.brand) {
            ;
            $p += ' btn-brand ';
            $line = 22;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' _zs_gallery_mx-main_hor_-footer-btn" mx-click="' + $viewId + '';
        $line = 23;
        $art = '=btn.fn';
        ;
        $p += ($expr = '<%=btn.fn%>', $e(btn.fn)) + '({btn:\'';
        $line = 23;
        $art = '@btn';
        ;
        $p += ($expr = '<%@btn%>', $i($$ref, btn)) + '\'})">';
        $line = 23;
        $art = '=btn.text';
        ;
        $p += ($expr = '<%=btn.text%>', $e(btn.text)) + '</a>';
        $line = 24;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_error" class="color-red mt10"></div>';
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