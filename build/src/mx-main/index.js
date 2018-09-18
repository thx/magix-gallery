/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/index",["magix","mx-main/data"],(require,exports,module)=>{
/*Magix,Data*/

var Magix = require("magix");
var Router = Magix.Router;
var Data = require("mx-main/data");
Magix.applyStyle("_zs_gallery_mx-main_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-main_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-main_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-main_index_-main {\n  position: relative;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 160px;\n  background-color: #fff;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step {\n  position: relative;\n  padding: 10px 0 10px 20px;\n  border-bottom: 1px solid #f5f5f5;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-link {\n  color: #666;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-link:hover {\n  color: #4d7fff;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-over {\n  line-height: 30px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-over ._zs_gallery_mx-main_index_-over-icon > * {\n  position: relative;\n  top: 2px;\n  margin-right: 4px;\n  font-size: 18px;\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-over:hover ._zs_gallery_mx-main_index_-over-icon > * {\n  color: #4d7fff;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-sub {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  padding-left: 26px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-sub:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 9px;\n  width: 0;\n  height: 30px;\n  border-left: 1px solid #adadad;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-sub:after {\n  content: '';\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  width: 6px;\n  height: 0;\n  border-top: 1px solid #adadad;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step-sub:last-child:before {\n  height: 16px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current {\n  background-color: #f6f9ff;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-link-on,\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-link-on:hover {\n  color: #4d7fff;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-link-on ._zs_gallery_mx-main_index_-over-icon > *,\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-link-on:hover ._zs_gallery_mx-main_index_-over-icon > * {\n  color: #4d7fff;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-arrow-icon {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  margin-top: -7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #4d7fff;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-link,\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-link:hover {\n  color: #666;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-step-over:hover ._zs_gallery_mx-main_index_-over-icon > * {\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-locked-icon {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  margin-top: -9px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #eee;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content {\n  padding-left: 160px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-title {\n  height: 58px;\n  line-height: 58px;\n  text-align: center;\n  font-size: 20px;\n  border-bottom: 1px solid #e6e6e6;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body {\n  position: relative;\n  min-height: 400px;\n  margin-left: 20px;\n  margin-right: 20px;\n  background-color: #fff;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box {\n  position: relative;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 280px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title {\n  height: 46px;\n  padding: 0 20px;\n  line-height: 42px;\n  background-color: #fafafa;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon {\n  float: left;\n  height: 44px;\n  line-height: 44px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon > * {\n  position: relative;\n  top: 2px;\n  margin-right: 4px;\n  color: #999;\n  font-size: 20px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-label {\n  float: left;\n  font-size: 16px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title._zs_gallery_mx-main_index_-error-state {\n  background-color: #f6e6e6;\n  border: 1px solid #a40100;\n  color: #a40100;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title._zs_gallery_mx-main_index_-error-state ._zs_gallery_mx-main_index_-title-icon > * {\n  color: #a40100;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title._zs_gallery_mx-main_index_-warn-state {\n  background-color: #fff8e6;\n  border: 1px solid #ffb400;\n  color: #ffb400;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title._zs_gallery_mx-main_index_-warn-state ._zs_gallery_mx-main_index_-title-icon > * {\n  color: #ffb400;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-inner {\n  padding: 40px 20px 0 20px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-box:last-child {\n  padding-bottom: 60px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-side {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 260px;\n  height: 100%;\n  padding-top: 20px;\n  padding-left: 20px;\n  border-left: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-tip {\n  position: relative;\n  top: 0;\n  left: 0;\n  margin: 0 20px 20px 0;\n  padding-left: 24px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-tip ._zs_gallery_mx-main_index_-side-content {\n  padding: 10px;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  color: #999;\n  background-color: #fff;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-tip ._zs_gallery_mx-main_index_-side-light {\n  position: absolute;\n  top: 50%;\n  left: -8px;\n  font-size: 22px;\n  margin-top: -10px;\n  color: #d9cafc;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-tip ._zs_gallery_mx-main_index_-arrow-top,\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-tip ._zs_gallery_mx-main_index_-arrow-bottom {\n  position: absolute;\n  top: 50%;\n  left: 18px;\n  width: 0;\n  height: 0;\n  margin-top: -7px;\n  border-top: 7px solid transparent;\n  border-right: 6px solid #ccc;\n  border-bottom: 6px solid transparent;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-body ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-tip ._zs_gallery_mx-main_index_-arrow-top {\n  border-right: 6px solid #fff;\n  left: 19px;\n}\n._zs_gallery_mx-main_index_-main ._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer {\n  text-align: center;\n  padding: 40px 0;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewHeight = $$.viewHeight, stepInfos = $$.stepInfos, curSubStepIndex = $$.curSubStepIndex, curStepInfo = $$.curStepInfo; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-main_index_-main" style="min-height: ';
    $line = 1;
    $art = '=viewHeight';
    ;
    $p += '' + ($expr = '<%=viewHeight%>', $e(viewHeight)) + 'px;"><div mxa="_zs_gallerybH:_" class="_zs_gallery_mx-main_index_-main-nav">';
    $line = 3;
    $art = 'each stepInfos as step';
    ;
    $p += '';
    $expr = '<%for (var $art_ijixmmzt$art_i = 0, $art_czorhlxmkh$art_c = stepInfos.length; $art_ijixmmzt$art_i < $art_czorhlxmkh$art_c; $art_ijixmmzt$art_i++) {    var step = stepInfos[$art_ijixmmzt$art_i]%>';
    for (var $art_ijixmmzt$art_i = 0, $art_czorhlxmkh$art_c = stepInfos.length; $art_ijixmmzt$art_i < $art_czorhlxmkh$art_c; $art_ijixmmzt$art_i++) {
        var step = stepInfos[$art_ijixmmzt$art_i];
        $p += '<div class="_zs_gallery_mx-main_index_-main-step ';
        $line = 4;
        $art = 'if step.current';
        ;
        $p += '';
        $expr = '<%if (step.current) {%>';
        if (step.current) {
            ;
            $p += ' _zs_gallery_mx-main_index_-step-current ';
            $line = 4;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 4;
        $art = 'if step.locked';
        ;
        $p += '';
        $expr = '<%if (step.locked) {%>';
        if (step.locked) {
            ;
            $p += ' _zs_gallery_mx-main_index_-step-locked ';
            $line = 4;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '"><div mxa="_zs_gallerybH:a" class="_zs_gallery_mx-main_index_-step-over"><a href="javascript:;" class="_zs_gallery_mx-main_index_-link _zs_gallery_mx-main_index_-step-over clearfix ';
        $line = 6;
        $art = 'if (step.current && (curSubStepIndex == -1))';
        ;
        $p += '';
        $expr = '<%if (step.current && (curSubStepIndex == -1)) {%>';
        if (step.current && (curSubStepIndex == -1)) {
            ;
            $p += ' _zs_gallery_mx-main_index_-link-on ';
            $line = 6;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '" ';
        $line = 7;
        $art = 'if !step.locked';
        ;
        $p += '';
        $expr = '<%if (!step.locked) {%>';
        if (!step.locked) {
            ;
            $p += ' mx-click="' + $viewId + 'nav({stepIndex:';
            $line = 7;
            $art = '=step.index';
            ;
            $p += '' + ($expr = '<%=step.index%>', $e(step.index)) + ',subStepIndex:-1})" ';
            $line = 7;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 8;
        $art = 'if step.icon';
        ;
        $p += '';
        $expr = '<%if (step.icon) {%>';
        if (step.icon) {
            ;
            $p += '<span mxa="_zs_gallerybH:b" class="_zs_gallery_mx-main_index_-over-icon fl">';
            $line = 9;
            $art = '!step.icon';
            ;
            $p += '' + ($expr = '<%!step.icon%>', $n(step.icon)) + '</span>';
            $line = 10;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '<span mxa="_zs_gallerybH:c" class="fl">';
        $line = 11;
        $art = '=step.label';
        ;
        $p += '' + ($expr = '<%=step.label%>', $e(step.label)) + '</span></a></div>';
        $line = 14;
        $art = 'if (step.expand && step.subs.length > 1)';
        ;
        $p += '';
        $expr = '<%if (step.expand && step.subs.length > 1) {%>';
        if (step.expand && step.subs.length > 1) {
            ;
            $p += ' ';
            $line = 15;
            $art = 'each step.subs as sub';
            ;
            $p += '';
            $expr = '<%for (var $art_ivyajgaj$art_i = 0, $art_objpzaxynztbc$art_obj = step.subs, $art_cattqbp$art_c = $art_objpzaxynztbc$art_obj.length; $art_ivyajgaj$art_i < $art_cattqbp$art_c; $art_ivyajgaj$art_i++) {            var sub = $art_objpzaxynztbc$art_obj[$art_ivyajgaj$art_i]%>';
            for (var $art_ivyajgaj$art_i = 0, $art_objpzaxynztbc$art_obj = step.subs, $art_cattqbp$art_c = $art_objpzaxynztbc$art_obj.length; $art_ivyajgaj$art_i < $art_cattqbp$art_c; $art_ivyajgaj$art_i++) {
                var sub = $art_objpzaxynztbc$art_obj[$art_ivyajgaj$art_i];
                $p += '<div mxa="_zs_gallerybH:d" class="_zs_gallery_mx-main_index_-step-sub"><a href="javascript:;" class="_zs_gallery_mx-main_index_-link ';
                $line = 17;
                $art = 'if (step.current && (curSubStepIndex == sub.index))';
                ;
                $p += '';
                $expr = '<%if (step.current && (curSubStepIndex == sub.index)) {%>';
                if (step.current && (curSubStepIndex == sub.index)) {
                    ;
                    $p += ' _zs_gallery_mx-main_index_-link-on ';
                    $line = 17;
                    $art = '/if';
                    ;
                    $p += '';
                    $expr = '<%}%>';
                }
                ;
                $p += '" mx-click="' + $viewId + 'nav({stepIndex:';
                $line = 18;
                $art = '=step.index';
                ;
                $p += '' + ($expr = '<%=step.index%>', $e(step.index)) + ',subStepIndex:';
                $line = 18;
                $art = '=sub.index';
                ;
                $p += '' + ($expr = '<%=sub.index%>', $e(sub.index)) + '})">';
                $line = 19;
                $art = '=sub.label';
                ;
                $p += '' + ($expr = '<%=sub.label%>', $e(sub.label)) + '</a></div>';
                $line = 22;
                $art = '/each';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 23;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 24;
        $art = 'if step.current';
        ;
        $p += '';
        $expr = '<%if (step.current) {%>';
        if (step.current) {
            ;
            $p += '<i mxs="_zs_gallerybH:_" class="mc-iconfont _zs_gallery_mx-main_index_-arrow-icon">&#xe602;</i>';
            $line = 26;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 27;
        $art = 'if step.locked';
        ;
        $p += '';
        $expr = '<%if (step.locked) {%>';
        if (step.locked) {
            ;
            $p += '<i mxs="_zs_gallerybH:a" class="mc-iconfont _zs_gallery_mx-main_index_-locked-icon">&#xe759;</i>';
            $line = 29;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 31;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerybH:e" class="_zs_gallery_mx-main_index_-main-content"><div mxa="_zs_gallerybH:f" class="_zs_gallery_mx-main_index_-content-title">';
    $line = 34;
    $art = '=curStepInfo.label';
    ;
    $p += '' + ($expr = '<%=curStepInfo.label%>', $e(curStepInfo.label)) + '</div><div mxa="_zs_gallerybH:g" class="_zs_gallery_mx-main_index_-content-body">';
    $line = 37;
    $art = 'each curStepInfo.subs as sub';
    ;
    $p += '';
    $expr = '<%for (var $art_iamvqzgero$art_i = 0, $art_objaqmvahq$art_obj = curStepInfo.subs, $art_cwtbslsr$art_c = $art_objaqmvahq$art_obj.length; $art_iamvqzgero$art_i < $art_cwtbslsr$art_c; $art_iamvqzgero$art_i++) {    var sub = $art_objaqmvahq$art_obj[$art_iamvqzgero$art_i]%>';
    for (var $art_iamvqzgero$art_i = 0, $art_objaqmvahq$art_obj = curStepInfo.subs, $art_cwtbslsr$art_c = $art_objaqmvahq$art_obj.length; $art_iamvqzgero$art_i < $art_cwtbslsr$art_c; $art_iamvqzgero$art_i++) {
        var sub = $art_objaqmvahq$art_obj[$art_iamvqzgero$art_i];
        $p += '<div mxa="_zs_gallerybH:h" class="_zs_gallery_mx-main_index_-content-box"><div mxa="_zs_gallerybH:i" class="_zs_gallery_mx-main_index_-box-title clearfix">';
        $line = 40;
        $art = 'if sub.icon';
        ;
        $p += '';
        $expr = '<%if (sub.icon) {%>';
        if (sub.icon) {
            ;
            $p += '<span mxa="_zs_gallerybH:j" class="_zs_gallery_mx-main_index_-title-icon">';
            $line = 41;
            $art = '!sub.icon';
            ;
            $p += '' + ($expr = '<%!sub.icon%>', $n(sub.icon)) + '</span>';
            $line = 42;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '<span mxa="_zs_gallerybH:k" class="_zs_gallery_mx-main_index_-title-label">';
        $line = 43;
        $art = '=sub.label';
        ;
        $p += '' + ($expr = '<%=sub.label%>', $e(sub.label)) + '</span></div><div mxs="_zs_gallerybH:b" class="_zs_gallery_mx-main_index_-box-inner">123</div></div>';
        $line = 49;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxs="_zs_gallerybH:c" class="_zs_gallery_mx-main_index_-content-side"></div></div><div mxs="_zs_gallerybH:d" class="_zs_gallery_mx-main_index_-content-footer"><a href="javascript:;" class="btn min-width-100 mr20">返回上一步</a><a href="javascript:;" class="btn min-width-100 btn-brand">下一步，上传创意</a></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/index.html';
    throw msg;
} return $p; },
    init: function () {
        var that = this;
        that.updater.set({
            stepInfos: Data.getSteps(),
            childInfo: {},
            viewHeight: $(window).height()
        });
        that.observeLocation(['stepIndex', 'subStepIndex']);
    },
    render: function () {
        var that = this;
        var locParams = Router.parse().params;
        // 从1开始
        var curStepIndex = +locParams.stepIndex || 1;
        // -1：在主导航上
        // >0：1，2，3
        var curSubStepIndex = +locParams.subStepIndex || -1;
        var stepInfos = that.updater.get('stepInfos');
        that.updater.digest({
            curStepIndex: curStepIndex,
            curSubStepIndex: curSubStepIndex,
            curStepInfo: stepInfos[curStepIndex]
        });
        return;
        if (!that.$inited) {
            // 首次渲染
        }
        else {
            // locationChange
            var diffParams = Router.diff().params;
            var stepChangeInfo = diffParams.stepIndex, subStepChangeInfo = diffParams.subStepIndex;
            if (!stepChangeInfo || (!stepChangeInfo.from && (stepChangeInfo.to == 1))) {
                // 1. stepIndex 没有变化，变化的为subStepIndex
                // 2. stepIndex 从 undefined 到 1，不需要响应
                // 父view监听subStepIndex只改变侧导航的状态，不切换子view的模块
                // 子view里监听subStepIndex去切换至对应的模块
            }
            else {
            }
        }
    },
    renderFn: function (viewInfo, childInfo) {
        var curStepIndex = viewInfo.curStepIndex;
        var stepInfos = Data.getSteps({
            curStepIndex: curStepIndex,
            create: childInfo.create,
            alreadyStep: childInfo.alreadyStep,
            campaign: childInfo.campaign
        });
        viewInfo.stepInfos = stepInfos;
        var curStepInfo = stepInfos[curStepIndex - 1];
        childInfo.curStepInfo = curStepInfo;
        this.updater.set({
            viewHeight: $(window).height(),
            viewInfo: viewInfo,
            childInfo: childInfo
        }).digest();
        this.owner.mountVframe('vf_main_content', 'mx-main/' + curStepInfo.id + '/index', {
            parentInfo: childInfo
        });
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
        that.updater.set({
            viewHeight: $(window).height()
        }).digest();
    },
    'nav<click>': function (e) {
        var params = e.params;
        var stepIndex = params.stepIndex, subStepIndex = params.subStepIndex;
        Router.to({
            stepIndex: stepIndex,
            subStepIndex: subStepIndex
        });
    }
});

});