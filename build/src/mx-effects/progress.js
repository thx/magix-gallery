/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/progress",["magix","$","mx-effects/util"],(require,exports,module)=>{
/*Magix,$,Util*/

var Magix = require("magix");
var $ = require("$");
var Util = require("mx-effects/util");
Magix.applyStyle("_zs_gallery_mx-effects_progress_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-effects_progress_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-effects_progress_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-effects_progress_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-effects_progress_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-effects_progress_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_mx-effects_progress_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-effects_progress_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n/**\n * 按钮中间的loading点动画\n */\n@keyframes _zs_gallery_mx-effects_progress_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-effects_progress_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@keyframes _zs_gallery_mx-effects_progress_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-effects_progress_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n[mx-view*=\"mx-effects/progress\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-effects_progress_-line,\n._zs_gallery_mx-effects_progress_-gradient {\n  position: relative;\n  width: 200px;\n  background: #f0f0f0;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-on,\n._zs_gallery_mx-effects_progress_-gradient ._zs_gallery_mx-effects_progress_-on {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  transition: width 0.25s;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num,\n._zs_gallery_mx-effects_progress_-gradient ._zs_gallery_mx-effects_progress_-num {\n  position: absolute;\n  width: 60px;\n  height: 24px;\n  line-height: 24px;\n  font-family: \"Tahoma\";\n  color: #999;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num-right,\n._zs_gallery_mx-effects_progress_-gradient ._zs_gallery_mx-effects_progress_-num-right {\n  top: -9px;\n  left: 100%;\n  padding-left: 10px;\n  text-align: left;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num-left,\n._zs_gallery_mx-effects_progress_-gradient ._zs_gallery_mx-effects_progress_-num-left {\n  top: -9px;\n  left: -60px;\n  padding-right: 10px;\n  text-align: right;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num-top,\n._zs_gallery_mx-effects_progress_-gradient ._zs_gallery_mx-effects_progress_-num-top {\n  top: -24px;\n  margin-left: -30px;\n  text-align: center;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-num-bottom,\n._zs_gallery_mx-effects_progress_-gradient ._zs_gallery_mx-effects_progress_-num-bottom {\n  bottom: -24px;\n  margin-left: -30px;\n  text-align: center;\n}\n._zs_gallery_mx-effects_progress_-line {\n  height: 6px;\n  border-radius: 3px;\n}\n._zs_gallery_mx-effects_progress_-line ._zs_gallery_mx-effects_progress_-on {\n  border-radius: 3px;\n  background: #4d7fff;\n}\n._zs_gallery_mx-effects_progress_-gradient {\n  height: 12px;\n  border-radius: 6px;\n}\n._zs_gallery_mx-effects_progress_-gradient ._zs_gallery_mx-effects_progress_-on {\n  border-radius: 6px;\n  background: #4d7fff;\n  background: linear-gradient(45deg, #b8ccff 33%, #dbe5ff 34%, #dbe5ff 59%, #b8ccff 60%);\n  background-size: 24px 12px;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper {\n  position: relative;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree {\n  display: inline-block;\n  width: 4px;\n  height: 14px;\n  margin-right: 3px;\n  border-radius: 2px;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree:last-child {\n  margin-right: 0;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree-bg ._zs_gallery_mx-effects_progress_-degree {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree-on {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-effects_progress_-degree-wrapper ._zs_gallery_mx-effects_progress_-degree-on ._zs_gallery_mx-effects_progress_-degree {\n  background-color: #4d7fff;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper {\n  position: relative;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle-text,\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle-bg {\n  position: absolute;\n  top: 0;\n  left: 50%;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle-text {\n  z-index: 4;\n  text-align: center;\n  font-family: \"Tahoma\";\n  font-size: 14px;\n  color: #666;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle-bg {\n  z-index: 2;\n  border-radius: 50%;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle {\n  position: relative;\n  z-index: 3;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle ._zs_gallery_mx-effects_progress_-progress {\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg);\n  text-indent: 1px;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle ._zs_gallery_mx-effects_progress_-half {\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle ._zs_gallery_mx-effects_progress_-half._zs_gallery_mx-effects_progress_-half-left {\n  left: 0;\n}\n._zs_gallery_mx-effects_progress_-circle-wrapper ._zs_gallery_mx-effects_progress_-circle ._zs_gallery_mx-effects_progress_-half._zs_gallery_mx-effects_progress_-half-right {\n  right: 0;\n}\n");
var ClassNames = {
    left: '_zs_gallery_mx-effects_progress_-num-left',
    right: '_zs_gallery_mx-effects_progress_-num-right',
    top: '_zs_gallery_mx-effects_progress_-num-top',
    bottom: '_zs_gallery_mx-effects_progress_-num-bottom'
};
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
} ; var $g = '', $_temp, $p = '', type = $$.type, width = $$.width, border = $$.border, viewId = $$.viewId, color = $$.color, num = $$.num, color1 = $$.color1, color2 = $$.color2, cName = $$.cName, placement = $$.placement, degree = $$.degree; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if (type == \'circle\')';
    ;
    $expr = '<%if (type == \'circle\') {%>';
    if (type == 'circle') {
        ;
        $p += '<div mxa="_zs_gallerybE:_" class="_zs_gallery_mx-effects_progress_-circle-wrapper"><div class="_zs_gallery_mx-effects_progress_-circle-bg" style="width: ';
        $line = 3;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; height: ';
        $line = 3;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; margin-left: ';
        $line = 3;
        $art = '=(0 - width / 2)';
        ;
        $p += ($expr = '<%=(0 - width / 2)%>', $e((0 - width / 2))) + 'px; border: ';
        $line = 3;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid #f0f0f0;"></div><div id="';
        $line = 4;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_circle" class="_zs_gallery_mx-effects_progress_-circle" style="width: ';
        $line = 4;
        $art = '=(width + 2 * border)';
        ;
        $p += ($expr = '<%=(width + 2 * border)%>', $e((width + 2 * border))) + 'px; height: ';
        $line = 4;
        $art = '=(width + 2 * border)';
        ;
        $p += ($expr = '<%=(width + 2 * border)%>', $e((width + 2 * border))) + 'px;"><div class="_zs_gallery_mx-effects_progress_-half _zs_gallery_mx-effects_progress_-half-left" style="width: ';
        $line = 5;
        $art = '=(width / 2) + border';
        ;
        $p += ($expr = '<%=(width / 2) + border%>', $e((width / 2) + border)) + 'px; height: ';
        $line = 5;
        $art = '=(width + 2 * border)';
        ;
        $p += ($expr = '<%=(width + 2 * border)%>', $e((width + 2 * border))) + 'px;"><div class="_zs_gallery_mx-effects_progress_-progress" style="left: ';
        $line = 6;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px; width: ';
        $line = 6;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; height: ';
        $line = 6;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; border: ';
        $line = 6;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid transparent; border-bottom: ';
        $line = 6;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid ';
        $line = 6;
        $art = '=color';
        ;
        $p += ($expr = '<%=color%>', $e(color)) + '; border-left: ';
        $line = 6;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid ';
        $line = 6;
        $art = '=color';
        ;
        $p += ($expr = '<%=color%>', $e(color)) + ';"></div></div><div class="_zs_gallery_mx-effects_progress_-half _zs_gallery_mx-effects_progress_-half-right" style="width: ';
        $line = 8;
        $art = '=(width / 2) + border';
        ;
        $p += ($expr = '<%=(width / 2) + border%>', $e((width / 2) + border)) + 'px; height: ';
        $line = 8;
        $art = '=(width + 2 * border)';
        ;
        $p += ($expr = '<%=(width + 2 * border)%>', $e((width + 2 * border))) + 'px;"><div class="_zs_gallery_mx-effects_progress_-progress" style="right: ';
        $line = 9;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px; width: ';
        $line = 9;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; height: ';
        $line = 9;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; border: ';
        $line = 9;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid transparent; border-top: ';
        $line = 9;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid ';
        $line = 9;
        $art = '=color';
        ;
        $p += ($expr = '<%=color%>', $e(color)) + '; border-right: ';
        $line = 9;
        $art = '=border';
        ;
        $p += ($expr = '<%=border%>', $e(border)) + 'px solid ';
        $line = 9;
        $art = '=color';
        ;
        $p += ($expr = '<%=color%>', $e(color)) + ';"></div></div></div><div class="_zs_gallery_mx-effects_progress_-circle-text" style="width: ';
        $line = 12;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; height: ';
        $line = 12;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px; margin-left: ';
        $line = 12;
        $art = '=(0 - width / 2)';
        ;
        $p += ($expr = '<%=(0 - width / 2)%>', $e((0 - width / 2))) + 'px; line-height: ';
        $line = 12;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px;">';
        $line = 12;
        $art = '=num';
        ;
        $p += ($expr = '<%=num%>', $e(num)) + '</div></div>';
        $line = 14;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 16;
    $art = 'if (type == \'line\' || type == \'gradient\')';
    ;
    $expr = '<%if (type == \'line\' || type == \'gradient\') {%>';
    if (type == 'line' || type == 'gradient') {
        ;
        $p += '<div ';
        $line = 17;
        $art = 'if (type == \'gradient\')';
        ;
        $expr = '<%if (type == \'gradient\') {%>';
        if (type == 'gradient') {
            ;
            $p += ' class="_zs_gallery_mx-effects_progress_-gradient" ';
            $line = 17;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += ' class="_zs_gallery_mx-effects_progress_-line" ';
            $line = 17;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '><div class="_zs_gallery_mx-effects_progress_-on" style="width: ';
        $line = 18;
        $art = '=num';
        ;
        $p += ($expr = '<%=num%>', $e(num)) + '; ';
        $line = 18;
        $art = 'if color';
        ;
        $expr = '<%if (color) {%>';
        if (color) {
            ;
            $p += ' background: ';
            $line = 18;
            $art = '=color';
            ;
            $p += ($expr = '<%=color%>', $e(color)) + '; ';
            $line = 18;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 18;
        $art = 'if color1 && color2';
        ;
        $expr = '<%if (color1 && color2) {%>';
        if (color1 && color2) {
            ;
            $p += ' background: linear-gradient(45deg, ';
            $line = 18;
            $art = '=color1';
            ;
            $p += ($expr = '<%=color1%>', $e(color1)) + ' 33%, ';
            $line = 18;
            $art = '=color2';
            ;
            $p += ($expr = '<%=color2%>', $e(color2)) + ' 34%, ';
            $line = 18;
            $art = '=color2';
            ;
            $p += ($expr = '<%=color2%>', $e(color2)) + ' 59%, ';
            $line = 18;
            $art = '=color1';
            ;
            $p += ($expr = '<%=color1%>', $e(color1)) + ' 60%); background-size: 24px 12px; ';
            $line = 18;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '"></div><div class="_zs_gallery_mx-effects_progress_-num ';
        $line = 19;
        $art = '=cName';
        ;
        $p += ($expr = '<%=cName%>', $e(cName)) + '" ';
        $line = 19;
        $art = 'if (placement == \'top\' || placement == \'bottom\')';
        ;
        $expr = '<%if (placement == \'top\' || placement == \'bottom\') {%>';
        if (placement == 'top' || placement == 'bottom') {
            ;
            $p += ' style="left: ';
            $line = 19;
            $art = '=num';
            ;
            $p += ($expr = '<%=num%>', $e(num)) + ';" ';
            $line = 19;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $line = 19;
        $art = '=num';
        ;
        $p += ($expr = '<%=num%>', $e(num)) + '</div></div>';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 23;
    $art = 'if (type == \'degree\')';
    ;
    $expr = '<%if (type == \'degree\') {%>';
    if (type == 'degree') {
        ;
        $p += '<div mxa="_zs_gallerybE:a" class="_zs_gallery_mx-effects_progress_-degree-wrapper"><div mxa="_zs_gallerybE:b" class="_zs_gallery_mx-effects_progress_-degree-bg">';
        $line = 26;
        $art = 'for (let i=0;i<10;i+=1)';
        ;
        $expr = '<%for (var i = 0; i < 10; i += 1) {%>';
        for (var i = 0; i < 10; i += 1) {
            ;
            $p += '<span mxs="_zs_gallerybE:_" class="_zs_gallery_mx-effects_progress_-degree"></span>';
            $line = 28;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxa="_zs_gallerybE:c" class="_zs_gallery_mx-effects_progress_-degree-on">';
        $line = 31;
        $art = 'for (let i=0;i<degree;i+=1)';
        ;
        $expr = '<%for (var i = 0; i < degree; i += 1) {%>';
        for (var i = 0; i < degree; i += 1) {
            ;
            $p += '<span class="_zs_gallery_mx-effects_progress_-degree" style="opacity: ';
            $line = 32;
            $art = '=(i / 10 + 0.08)';
            ;
            $p += ($expr = '<%=(i / 10 + 0.08)%>', $e((i / 10 + 0.08))) + '; ';
            $line = 32;
            $art = 'if color';
            ;
            $expr = '<%if (color) {%>';
            if (color) {
                ;
                $p += ' background-color: ';
                $line = 32;
                $art = '=color';
                ;
                $p += ($expr = '<%=color%>', $e(color)) + '; ';
                $line = 32;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '"></span>';
            $line = 33;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 36;
        $art = '/if';
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
    msg += $expr + '\r\n\tat file:mx-effects/progress.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.updater.snapshot();
        this.assign(e);
    },
    assign: function (e) {
        var that = this;
        var altered = that.updater.altered();
        var type = e.type || 'line';
        var placement = (e.textPlacement || 'top');
        var color = e.color || '';
        var num = +e.num || 0;
        var s = num + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        // 最多保留两位小数
        if (i > 2) {
            i = 2;
        }
        if (num < 0) {
            num = 0;
        }
        if (num > 100) {
            num = 100;
        }
        var degree = 0, width = e.width || 120, border = e.border || 8, color1, color2;
        switch (type) {
            case 'degree':
                // 刻度型，刻度取整
                degree = parseInt(num / 10);
                break;
            case 'circle':
                // 圆形
                if (!color) {
                    color = '#4d7fff';
                }
                break;
            case 'gradient':
                // 渐变
                if (color) {
                    var result = Util.toRgb(color);
                    color1 = "rgba(" + result.r + ", " + result.g + ", " + result.b + ", 0.4)";
                    color2 = "rgba(" + result.r + ", " + result.g + ", " + result.b + ", 0.2)";
                }
                break;
        }
        that.updater.set({
            viewId: that.id,
            placement: placement,
            originNum: num,
            num: num.toFixed(i) + '%',
            cName: ClassNames[placement],
            color: color,
            color1: color1,
            color2: color2,
            type: type,
            degree: degree,
            width: +width,
            border: +border,
            gradient: (type == 'gradient')
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        var that = this;
        that.updater.digest();
        var type = that.updater.get('type'), originNum = that.updater.get('originNum');
        if (type == 'circle') {
            var circleNode = $('#' + that.id + '_circle');
            var right = circleNode.find('._zs_gallery_mx-effects_progress_-half-right ._zs_gallery_mx-effects_progress_-progress'), left_1 = circleNode.find('._zs_gallery_mx-effects_progress_-half-left ._zs_gallery_mx-effects_progress_-progress');
            var deg = Math.ceil(360 * originNum / 100);
            var rightDeg_1, leftDeg_1;
            if (deg > 180) {
                rightDeg_1 = 180;
                leftDeg_1 = deg - rightDeg_1;
            }
            else {
                rightDeg_1 = deg;
                leftDeg_1 = 0;
            }
            var duration = Math.ceil(1000 * originNum / 100), easing_1 = 'linear';
            var rightDuration = Math.floor(duration * rightDeg_1 / deg), leftDuration_1 = Math.floor(duration * leftDeg_1 / deg);
            right.animate({
                textIndent: 0
            }, {
                step: function (rNow, fx) {
                    var rt = (1 - rNow) * rightDeg_1 - 135;
                    $(this).css({
                        '-webkit-transform': 'rotate(' + rt + 'deg)',
                        'transform': 'rotate(' + rt + 'deg)'
                    });
                },
                duration: rightDuration,
                done: function () {
                    if (leftDeg_1 > 0) {
                        left_1.animate({
                            textIndent: 0
                        }, {
                            step: function (lNow, fx) {
                                var lt = (1 - lNow) * leftDeg_1 - 135;
                                $(this).css({
                                    '-webkit-transform': 'rotate(' + lt + 'deg)',
                                    'transform': 'rotate(' + lt + 'deg)'
                                });
                            },
                            duration: leftDuration_1
                        }, easing_1);
                    }
                }
            }, easing_1);
        }
    }
});

});