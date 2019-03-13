/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/multiple",["magix","$","../mx-monitor/index","../mx-medusa/util","mx-checkbox/index"],(require,exports,module)=>{
/*Magix,$,Monitor,I18n*/
require("mx-checkbox/index");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-dropdown_index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-dropdown_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-dropdown_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_mx-dropdown_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n/**\n * 按钮中间的loading点动画\n */\n@keyframes _zs_gallery_mx-dropdown_index_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@keyframes _zs_gallery_mx-dropdown_index_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  position: relative;\n  width: 100%;\n  height: 32px;\n  padding: 0 25px 0 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: 30px;\n  transition: all 0.25s;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  background-color: #fff;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-dropdown-toggle-label {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  margin-top: -14px;\n  color: #e6e6e6;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle._zs_gallery_mx-dropdown_index_-open ._zs_gallery_mx-dropdown_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_mx-dropdown_index_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  cursor: pointer;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:hover,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:focus {\n  color: #4d7fff;\n  background-color: #f6f9ff;\n}\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-link-disabled,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-link-disabled:hover,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-link-disabled:active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-link-disabled:focus {\n  color: #999;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-header-item ._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: transparent;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper {\n  display: none;\n  position: absolute;\n  left: 0;\n  z-index: 99;\n  min-width: 100%;\n  max-width: 200%;\n  border-radius: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-search-wrapper {\n  padding: 10px 10px 0 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-search-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-search-box {\n  width: 100%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu {\n  padding: 8px 10px;\n  overflow: auto;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  padding: 2px 0;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-header {\n  height: 26px;\n  line-height: 26px;\n  padding-left: 2px;\n  padding-right: 2px;\n  color: #999;\n  cursor: default;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-bottom {\n  top: 100%;\n  margin-top: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-bottom._zs_gallery_mx-dropdown_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-top {\n  bottom: 100%;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-top._zs_gallery_mx-dropdown_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-dropdown_index_-fade-in-up 0.25s ease-out;\n          animation: _zs_gallery_mx-dropdown_index_-fade-in-up 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group {\n  min-width: 600px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-search-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-search-box {\n  width: 200px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper {\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  float: left;\n  width: 25%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown,\n[mx-view*=\"mx-dropdown/index\"],\n[mx-view*=\"mx-dropdown/bd\"],\n[mx-view*=\"mx-dropdown/multiple\"] {\n  position: relative;\n  display: inline-block;\n  min-width: 100px;\n  vertical-align: middle;\n}\n._zs_gallery_mx-dropdown_index_-dropdown:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  border-color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-dropdown:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/bd\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  border-color: #e6e6e6;\n  color: #999;\n  background-color: #eee;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper {\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-left: 18px;\n  padding-right: 18px;\n  line-height: 16px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper {\n  float: left;\n  padding-right: 20px;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper:hover {\n  color: #4d7fff;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper._zs_gallery_mx-dropdown_index_-has-group {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n._zs_gallery_mx-dropdown_index_-footer-wrapper {\n  padding: 10px;\n  border-top: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-dropdown_index_-msg-wrapper {\n  position: relative;\n}\n._zs_gallery_mx-dropdown_index_-msg-wrapper ._zs_gallery_mx-dropdown_index_-msg {\n  position: absolute;\n  top: -1px;\n  left: 18px;\n  white-space: nowrap;\n}\n");
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, selected = $$.selected, selectedText = $$.selectedText, placementClass = $$.placementClass, over = $$.over, menuStyles = $$.menuStyles, rList = $$.rList, searchbox = $$.searchbox, text = $$.text, keyword = $$.keyword, max = $$.max, imme = $$.imme, needAll = $$.needAll, hasGroups = $$.hasGroups, spm = $$.spm, allHide = $$.allHide, viewId = $$.viewId, height = $$.height, groups = $$.groups, errMsg = $$.errMsg; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-dropdown_index_-dropdown-toggle ';
    $line = 1;
    $art = 'if expand';
    ;
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' _zs_gallery_mx-dropdown_index_-open ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><span class="_zs_gallery_mx-dropdown_index_-dropdown-toggle-label ';
    $line = 2;
    $art = 'if (selected.length==0)';
    ;
    $expr = '<%if (selected.length == 0) {%>';
    if (selected.length == 0) {
        ;
        $p += ' dropdown-toggle-label-ph ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 2;
    $art = '=selectedText';
    ;
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_gallerya?:_" class="mc-iconfont _zs_gallery_mx-dropdown_index_-arrow">&#xe692;</span></div><div mxv class="_zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ';
    $line = 5;
    $art = '=placementClass';
    ;
    $p += ($expr = '<%=placementClass%>', $e(placementClass)) + ' ';
    $line = 5;
    $art = 'if expand';
    ;
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' _zs_gallery_mx-dropdown_index_-open ';
        $line = 5;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 5;
    $art = 'if over';
    ;
    $expr = '<%if (over) {%>';
    if (over) {
        ;
        $p += ' _zs_gallery_mx-dropdown_index_-dropdown-menu-group ';
        $line = 5;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 6;
    $art = 'if menuStyles';
    ;
    $expr = '<%if (menuStyles) {%>';
    if (menuStyles) {
        ;
        $p += ' style="';
        $line = 6;
        $art = '=menuStyles';
        ;
        $p += ($expr = '<%=menuStyles%>', $e(menuStyles)) + '" ';
        $line = 6;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '>';
    $line = 7;
    $art = 'if rList';
    ;
    $expr = '<%if (rList) {%>';
    if (rList) {
        ;
        $p += ' ';
        $line = 8;
        $art = 'if searchbox';
        ;
        $expr = '<%if (searchbox) {%>';
        if (searchbox) {
            ;
            $p += '<div mxv mxa="_zs_gallerya?:_" class="_zs_gallery_mx-dropdown_index_-search-wrapper"><div mxv mxa="_zs_gallerya?:a" class="search-box _zs_gallery_mx-dropdown_index_-dropdown-search-box"><i mxs="_zs_gallerya?:a" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
            $line = 13;
            $art = '=text.search';
            ;
            $p += ($expr = '<%=text.search%>', $e(text.search)) + '" mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" value="';
            $line = 19;
            $art = '=keyword';
            ;
            $p += ($expr = '<%=keyword%>', $e(keyword)) + '"/></div>';
            $line = 21;
            $art = 'if (max > 0 && over)';
            ;
            $expr = '<%if (max > 0 && over) {%>';
            if (max > 0 && over) {
                ;
                $p += '<span mxa="_zs_gallerya?:b" class="ml10"><span mxs="_zs_gallerya?:b" class="color-9">已选：</span><span mxa="_zs_gallerya?:c" class="font-tahoma bold">';
                $line = 24;
                $art = '=imme.length';
                ;
                $p += ($expr = '<%=imme.length%>', $e(imme.length)) + ' / ';
                $line = 24;
                $art = '=max';
                ;
                $p += ($expr = '<%=max%>', $e(max)) + '</span></span>';
                $line = 26;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 28;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 29;
        $art = 'if !needAll || (max > 0 && !over)';
        ;
        $expr = '<%if (!needAll || (max > 0 && !over)) {%>';
        if (!needAll || (max > 0 && !over)) {
            ;
            $p += '<div class="_zs_gallery_mx-dropdown_index_-oper-wrapper ';
            $line = 30;
            $art = 'if hasGroups';
            ;
            $expr = '<%if (hasGroups) {%>';
            if (hasGroups) {
                ;
                $p += ' _zs_gallery_mx-dropdown_index_-has-group ';
                $line = 30;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' clearfix">';
            $line = 31;
            $art = 'if !needAll';
            ;
            $expr = '<%if (!needAll) {%>';
            if (!needAll) {
                ;
                $p += '<a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="' + $viewId + '@{checkAll}({checked:true})" data-spm-click="';
                $line = 32;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + 'a">';
                $line = 32;
                $art = '=text.select';
                ;
                $p += ($expr = '<%=text.select%>', $e(text.select)) + '</a><a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="' + $viewId + '@{checkAll}({checked:false})" data-spm-click="';
                $line = 33;
                $art = '=spm';
                ;
                $p += ($expr = '<%=spm%>', $e(spm)) + 'ua">';
                $line = 33;
                $art = '=text.unselect';
                ;
                $p += ($expr = '<%=text.unselect%>', $e(text.unselect)) + '</a>';
                $line = 34;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 36;
            $art = 'if (max > 0 && !over)';
            ;
            $expr = '<%if (max > 0 && !over) {%>';
            if (max > 0 && !over) {
                ;
                $p += '<span ';
                $line = 37;
                $art = 'if !needAll';
                ;
                $expr = '<%if (!needAll) {%>';
                if (!needAll) {
                    ;
                    $p += ' class="fr" ';
                    $line = 37;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '><span mxs="_zs_gallerya?:b" class="color-9">已选：</span><span mxa="_zs_gallerya?:d" class="font-tahoma bold">';
                $line = 39;
                $art = '=imme.length';
                ;
                $p += ($expr = '<%=imme.length%>', $e(imme.length)) + ' / ';
                $line = 39;
                $art = '=max';
                ;
                $p += ($expr = '<%=max%>', $e(max)) + '</span></span>';
                $line = 41;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 43;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 44;
        $art = 'if !allHide';
        ;
        $expr = '<%if (!allHide) {%>';
        if (!allHide) {
            ;
            $p += '<div mxv class="_zs_gallery_mx-dropdown_index_-dropdown-menu" id="list_';
            $line = 45;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '" style="max-height:';
            $line = 45;
            $art = '=height';
            ;
            $p += ($expr = '<%=height%>', $e(height)) + 'px;">';
            $line = 46;
            $art = 'each groups as group groupIndex';
            ;
            $expr = '<%for (var groupIndex = 0, $art_cikjbkfdhn$art_c = groups.length; groupIndex < $art_cikjbkfdhn$art_c; groupIndex++) {            var group = groups[groupIndex]%>';
            for (var groupIndex = 0, $art_cikjbkfdhn$art_c = groups.length; groupIndex < $art_cikjbkfdhn$art_c; groupIndex++) {
                var group = groups[groupIndex];
                $p += ' ';
                $line = 47;
                $art = 'if (group.text && !group.hide)';
                ;
                $expr = '<%if (group.text && !group.hide) {%>';
                if (group.text && !group.hide) {
                    ;
                    $p += ' ';
                    $line = 48;
                    $art = 'if group.all';
                    ;
                    $expr = '<%if (group.all) {%>';
                    if (group.all) {
                        ;
                        $p += '<div title="';
                        $line = 49;
                        $art = '=group.text';
                        ;
                        $p += ($expr = '<%=group.text%>', $e(group.text)) + '" class="_zs_gallery_mx-dropdown_index_-dropdown-item _zs_gallery_mx-dropdown_index_-dropdown-header-item"><label mxa="_zs_gallerya?:e" class="_zs_gallery_mx-dropdown_index_-item-link ellipsis"><span mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{checkGroup}({groupIndex:\'';
                        $line = 56;
                        $art = '=groupIndex';
                        ;
                        $p += ($expr = '<%=$eq(groupIndex)%>', $e($eq(groupIndex))) + '\'})" data-spm-click="';
                        $line = 57;
                        $art = '=spm';
                        ;
                        $p += ($expr = '<%=spm%>', $e(spm)) + '" mx-view="mx-checkbox/index?disabled=';
                        $line = 52;
                        $art = '=((max > 0) && (imme.length >= max))';
                        ;
                        $p += ($expr = '<%!$eu(((max > 0) && (imme.length >= max)))%>', $eu(((max > 0) && (imme.length >= max)))) + '&indeterminate=';
                        $line = 53;
                        $art = '=(group.type==2)';
                        ;
                        $p += ($expr = '<%!$eu((group.type == 2))%>', $eu((group.type == 2))) + '&checked=';
                        $line = 54;
                        $art = '=(group.type==3)';
                        ;
                        $p += ($expr = '<%!$eu((group.type == 3))%>', $eu((group.type == 3))) + '"></span>';
                        $line = 57;
                        $art = '=group.text';
                        ;
                        $p += ($expr = '<%=group.text%>', $e(group.text)) + '</label></div>';
                        $line = 60;
                        $art = 'else';
                        ;
                        $expr = '<%}                else {%>';
                    }
                    else {
                        ;
                        $p += '<div class="_zs_gallery_mx-dropdown_index_-dropdown-header ellipsis" title="';
                        $line = 61;
                        $art = '=group.text';
                        ;
                        $p += ($expr = '<%=group.text%>', $e(group.text)) + '">';
                        $line = 61;
                        $art = '=group.text';
                        ;
                        $p += ($expr = '<%=group.text%>', $e(group.text)) + '</div>';
                        $line = 62;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' ';
                    $line = 63;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '<div mxv mxa="_zs_gallerya?:f" class="clearfix _zs_gallery_mx-dropdown_index_-group-wrapper">';
                $line = 65;
                $art = 'each group.list as item';
                ;
                $expr = '<%for (var $art_iggeqiuzxd$art_i = 0, $art_objkbluuqnct$art_obj = group.list, $art_ctoyk$art_c = $art_objkbluuqnct$art_obj.length; $art_iggeqiuzxd$art_i < $art_ctoyk$art_c; $art_iggeqiuzxd$art_i++) {                var item = $art_objkbluuqnct$art_obj[$art_iggeqiuzxd$art_i]%>';
                for (var $art_iggeqiuzxd$art_i = 0, $art_objkbluuqnct$art_obj = group.list, $art_ctoyk$art_c = $art_objkbluuqnct$art_obj.length; $art_iggeqiuzxd$art_i < $art_ctoyk$art_c; $art_iggeqiuzxd$art_i++) {
                    var item = $art_objkbluuqnct$art_obj[$art_iggeqiuzxd$art_i];
                    $p += ' ';
                    $line = 66;
                    $art = 'if !item.hide';
                    ;
                    $expr = '<%if (!item.hide) {%>';
                    if (!item.hide) {
                        ;
                        $p += '<div mxv title="';
                        $line = 67;
                        $art = '=item.text';
                        ;
                        $p += ($expr = '<%=item.text%>', $e(item.text)) + '" class="_zs_gallery_mx-dropdown_index_-dropdown-item"><label mxv for="';
                        $line = 68;
                        $art = '=viewId';
                        ;
                        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
                        $line = 68;
                        $art = '=item.value';
                        ;
                        $p += ($expr = '<%=item.value%>', $e(item.value)) + '" class="_zs_gallery_mx-dropdown_index_-item-link ellipsis"><input type="checkbox" class="checkbox" ';
                        $line = 70;
                        $art = 'if !item.checked && (max > 0) && (imme.length >= max)';
                        ;
                        $expr = '<%if (!item.checked && (max > 0) && (imme.length >= max)) {%>';
                        if (!item.checked && (max > 0) && (imme.length >= max)) {
                            ;
                            $p += ' disabled="true" ';
                            $line = 70;
                            $art = '/if';
                            ;
                            $expr = '<%}%>';
                        }
                        ;
                        $p += ' ';
                        $line = 71;
                        $art = 'if item.checked';
                        ;
                        $expr = '<%if (item.checked) {%>';
                        if (item.checked) {
                            ;
                            $p += ' checked="true" ';
                            $line = 71;
                            $art = '/if';
                            ;
                            $expr = '<%}%>';
                        }
                        ;
                        $p += ' id="';
                        $line = 72;
                        $art = '=viewId';
                        ;
                        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
                        $line = 72;
                        $art = '=item.value';
                        ;
                        $p += ($expr = '<%=item.value%>', $e(item.value)) + '" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{checkItem}({groupIndex:\'';
                        $line = 74;
                        $art = '=groupIndex';
                        ;
                        $p += ($expr = '<%=$eq(groupIndex)%>', $e($eq(groupIndex))) + '\',value:\'';
                        $line = 74;
                        $art = '=item.value';
                        ;
                        $p += ($expr = '<%=$eq(item.value)%>', $e($eq(item.value))) + '\'})" data-spm-click="';
                        $line = 75;
                        $art = '=spm';
                        ;
                        $p += ($expr = '<%=spm%>', $e(spm)) + '"/>';
                        $line = 75;
                        $art = '=item.text';
                        ;
                        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</label></div>';
                        $line = 78;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' ';
                    $line = 79;
                    $art = '/each';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 81;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 83;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<div mxa="_zs_gallerya?:g" class="text-center color-9 pt20 pb20">';
            $line = 84;
            $art = '=text.empty';
            ;
            $p += ($expr = '<%=text.empty%>', $e(text.empty)) + '</div>';
            $line = 85;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxa="_zs_gallerya?:h" class="_zs_gallery_mx-dropdown_index_-footer-wrapper"><a mxa="_zs_gallerya?:i" href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="' + $viewId + '@{submit}({enter:true})">';
        $line = 87;
        $art = '=text.submit';
        ;
        $p += ($expr = '<%=text.submit%>', $e(text.submit)) + '</a><a mxa="_zs_gallerya?:j" href="javascript:;" class="btn btn-small" mx-click="' + $viewId + '@{hide}()">';
        $line = 88;
        $art = '=text.cancel';
        ;
        $p += ($expr = '<%=text.cancel%>', $e(text.cancel)) + '</a>';
        $line = 89;
        $art = 'if errMsg';
        ;
        $expr = '<%if (errMsg) {%>';
        if (errMsg) {
            ;
            $p += '<span mxa="_zs_gallerya?:k" class="_zs_gallery_mx-dropdown_index_-msg-wrapper color-red ml10"><i mxs="_zs_gallerya?:c" class="mc-iconfont displacement-2">&#xe6ad;</i><span mxa="_zs_gallerya?:l" class="_zs_gallery_mx-dropdown_index_-msg">';
            $line = 92;
            $art = '!errMsg';
            ;
            $p += ($expr = '<%!errMsg%>', $n(errMsg)) + '</span></span>';
            $line = 94;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 96;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/multiple.html';
    throw msg;
} return $p; },
    init: function (ops) {
        var me = this;
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        me.updater.set({
            viewId: me.id
        });
        var node = $('#' + me.id);
        me['@{owner.node}'] = node;
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me['@{ui.disabled}'] = disabledNode && (disabledNode.length > 0);
        // 展开方向
        var placementMap = {
            top: '_zs_gallery_mx-dropdown_index_-top',
            bottom: '_zs_gallery_mx-dropdown_index_-bottom'
        };
        me['@{ui.placement}'] = placementMap[ops.placement || 'bottom'];
        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = ops.triggerType || 'click';
        var expand = false;
        var emptyText = ops.emptyText || I18n['choose'];
        var name = ops.name || '';
        var needAll = (ops.needAll + '') === 'false'; //禁用全选功能
        var searchbox = (ops.searchbox + '') === 'true';
        var textKey = ops.textKey || 'text';
        var valueKey = ops.valueKey || 'value';
        var hasGroups = false;
        var groups = [];
        if (!ops.list) {
            var node_1 = me['@{owner.node}'].children();
            var hasGroup = $(node_1[0]).attr('group') == 'true';
            if (hasGroup) {
                hasGroups = true;
                node_1.each(function (idx, item) {
                    item = $(item);
                    var group = item.attr('group') == 'true';
                    if (group) {
                        groups.push({
                            all: (item.attr('all') == 'true'),
                            text: item.text(),
                            value: Magix.guid(),
                            list: []
                        });
                    }
                    else {
                        var len = groups.length;
                        groups[len - 1].list.push({
                            text: item.text(),
                            value: item.attr('value')
                        });
                    }
                });
            }
            else {
                var list_1 = [];
                node_1.each(function (idx, item) {
                    item = $(item);
                    list_1.push({
                        text: item.text(),
                        value: item.attr('value')
                    });
                });
                groups = [{
                        list: list_1
                    }];
            }
        }
        else {
            // 直接配数据不支持分组
            try {
                list = JSON.parse(ops.list);
            }
            catch (e) {
                list = ops.list || [];
            }
            if (typeof list[0] === 'object') {
                // 本身是个对象
                list = list.map(function (item) {
                    return {
                        text: item[textKey],
                        value: item[valueKey]
                    };
                });
            }
            else {
                // 直接value列表
                list = list.map(function (value) {
                    return {
                        text: value,
                        value: value
                    };
                });
            }
            groups = [{
                    list: list
                }];
        }
        var count = 0, map = {};
        var selected;
        if (!ops.selected) {
            // 默认情况下逗号分隔
            selected = [];
        }
        else {
            if ($.isArray(ops.selected)) {
                me['@{bak.type}'] = 'array';
                // 后续做indexOf
                selected = ops.selected.map(function (v) {
                    return '' + v;
                });
            }
            else {
                selected = (ops.selected + '').split(',');
            }
        }
        groups.forEach(function (group) {
            var checkes = [];
            group.list.forEach(function (item) {
                count++;
                item.checked = (selected.indexOf(item.value + '') > -1);
                map[item.value] = item;
                if (item.checked) {
                    checkes.push(item.value);
                }
            });
            // type: 
            // 1：全不选
            // 2：部分
            // 3：全选
            group.type = (checkes.length > 0) ? ((checkes.length == group.list.length) ? 3 : 2) : 1;
        });
        // 选择上限及下限
        var min = +ops.min || 0, max = +ops.max || 0;
        if ((max > 0) && (min > max)) {
            min = max;
        }
        me.updater.set({
            hasGroups: hasGroups,
            viewId: me.id,
            expand: expand,
            emptyText: emptyText,
            name: name,
            needAll: needAll,
            searchbox: searchbox,
            map: map,
            selected: selected,
            imme: selected,
            min: min,
            max: max,
            continuous: (ops.continuous + '' === 'true'),
            over: (count > 20),
            groups: groups,
            height: ops.height || 400,
            spm: me['@{owner.node}'].attr('data-spm-click') || '',
            placementClass: me['@{ui.placement}'],
            text: {
                search: I18n['dropdown.search'],
                select: I18n['select.all'],
                unselect: I18n['unselect.all'],
                submit: I18n['dialog.submit'],
                cancel: I18n['dialog.cancel'],
                empty: I18n['empty.text']
            }
        });
    },
    render: function () {
        var me = this;
        var selected = me.updater.get('selected');
        me.updater.digest({
            selectedText: me['@{getText}'](selected)
        });
        me['@{val}']();
        var triggerType = me['@{trigger.type}'];
        var triggerNode = $('#' + me.id + ' ._zs_gallery_mx-dropdown_index_-dropdown-toggle');
        var menuWrapper = $('#' + me.id + ' ._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper');
        switch (triggerType) {
            case 'click':
                triggerNode.on('click', function () {
                    var expand = me.updater.get('expand');
                    if (expand) {
                        me['@{hide}']();
                    }
                    else if (!me['@{ui.disabled}']) {
                        me['@{show}']();
                    }
                });
                break;
            case 'hover':
                triggerNode.hover(function () {
                    clearTimeout(me['@{dealy.hide.timer}']);
                    me['@{show}']();
                }, function () {
                    me['@{delay.hide}']();
                });
                menuWrapper.hover(function () {
                    clearTimeout(me['@{dealy.hide.timer}']);
                }, function () {
                    me['@{delay.hide}']();
                });
                break;
        }
    },
    '@{inside}': function (node) {
        var me = this;
        return Magix.inside(node, me.id);
    },
    '@{delay.hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(function () {
            me['@{hide}']();
        }), 250);
    },
    '@{val}': function () {
        var me = this;
        var selected = me.updater.get('selected');
        if (me['@{bak.type}'] == 'array') {
            me['@{owner.node}'].val(selected);
        }
        else {
            me['@{owner.node}'].val(selected.join(','));
        }
    },
    '@{hide}': function () {
        var me = this;
        var data = me.updater.get();
        if (data.expand) {
            me.updater.digest({
                expand: false
            });
            me['@{owner.node}'].trigger('focusout');
            Monitor['@{remove}'](me);
            var selected_1 = data.selected, groups = data.groups;
            groups.forEach(function (group) {
                var checkes = [];
                group.list.forEach(function (item) {
                    item.checked = (selected_1.indexOf(item.value + '') > -1);
                    if (item.checked) {
                        checkes.push(item.value);
                    }
                });
                group.type = (checkes.length > 0) ? ((checkes.length == group.list.length) ? 3 : 2) : 1;
            });
            me.updater.digest({
                groups: groups,
                selected: selected_1,
                imme: selected_1,
                selectedText: me['@{getText}'](selected_1)
            });
            me['@{val}']();
        }
    },
    '@{show}': function () {
        var me = this;
        var data = me.updater.get();
        if (!data.expand) {
            var d = {
                expand: true
            };
            var r = data.rList;
            if (!r) {
                d.rList = true;
            }
            // 对浮层位置进行修正
            var menuWrapper = $('#' + me.id + ' ._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper');
            var win = $(window);
            var winWidth = win.width(), menuOffset = me['@{owner.node}'].offset(), menuWidth = menuWrapper.outerWidth();
            var menuLeft = void 0;
            if (menuOffset.left + menuWidth > winWidth) {
                menuLeft = Math.min((menuOffset.left + menuWidth - winWidth), menuOffset.left);
            }
            if (menuLeft > 0) {
                d.menuStyles = 'left:' + (0 - menuLeft) + 'px';
            }
            me.updater.digest(d);
            me['@{owner.node}'].trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('._zs_gallery_mx-dropdown_index_-active');
            var pos = active.position();
            if (pos) {
                // 当前已选项在可是范围之内
                var height = listNode.height();
                var stop = listNode.prop('scrollTop');
                if (pos.top < 0 || pos.top > height) {
                    var top = pos.top - height + stop + height / 2;
                    listNode.prop('scrollTop', top);
                }
            }
            Monitor['@{add}'](me);
        }
    },
    '@{getText}': function (selected) {
        var me = this;
        var data = me.updater.get();
        var emptyText = data.emptyText;
        if (selected.length == 0) {
            return emptyText;
        }
        var map = data.map, text = [];
        for (var _i = 0, selected_2 = selected; _i < selected_2.length; _i++) {
            var value = selected_2[_i];
            var entity = map[value] || {};
            text.push(entity.text);
        }
        var name = data.name;
        if (text.length == Object.keys(map).length) {
            if (name) {
                return I18n['dropdown.all.custom'] + name;
            }
            else {
                return I18n['dropdown.all.default'];
            }
        }
        else {
            return text.join(',');
        }
    },
    '@{fn.search}': function (val, callback) {
        var me = this;
        var data = me.updater.get();
        var groups = data.groups;
        var allHide;
        if (!val) {
            allHide = false;
            groups.forEach(function (group) {
                group.hide = false;
                group.list.forEach(function (item) {
                    item.hide = false;
                });
            });
        }
        else {
            allHide = true;
            var lowVal_1 = (val + '').toLocaleLowerCase();
            groups.forEach(function (group) {
                var groupHide = true;
                group.list.forEach(function (item) {
                    var lowText = (item.text + '').toLocaleLowerCase();
                    item.hide = (lowText.indexOf(lowVal_1) < 0);
                    groupHide = groupHide && item.hide;
                });
                group.hide = groupHide;
                allHide = allHide && groupHide;
            });
        }
        callback({
            groups: groups,
            allHide: allHide
        });
    },
    '@{search}<keyup,paste>': function (e) {
        var me = this;
        clearTimeout(me['@{search.delay.timer}']);
        var val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['@{search.delay.timer}'] = setTimeout(me.wrapAsync(function () {
            if (val != me['@{last.value}']) {
                me['@{fn.search}'](me['@{last.value}'] = val, function (result) {
                    me.updater.digest(result);
                });
            }
        }), 300);
    },
    '@{checkItem}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        var value = e.params.value, groupIndex = e.params.groupIndex, checked = e.target.checked;
        me['@{checkGroup}'](groupIndex, value, checked);
    },
    /**
     * 全选的时候注意限制上限
     */
    '@{checkAll}<click>': function (e) {
        var me = this;
        var checked = e.params.checked;
        me['@{checkGroup}']('all', 'all', checked);
    },
    '@{checkGroup}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        var groupIndex = e.params.groupIndex, checked = e.target.checked;
        me['@{checkGroup}'](groupIndex, 'all', checked);
    },
    /**
     * 全选的时候注意限制上限
     */
    '@{checkGroup}': function (groupIndex, value, checked) {
        var me = this;
        var data = me.updater.get();
        var groups = data.groups;
        var groups = me.updater.get('groups');
        var max = me.updater.get('max'), imme = me.updater.get('imme');
        var last = 0;
        if (max > 0) {
            last = max - imme.length;
        }
        var newImme = [];
        groups.forEach(function (group, gi) {
            var checkes = [];
            group.list.forEach(function (item) {
                if ((groupIndex === 'all' || (groupIndex == gi)) &&
                    (value == 'all' || value == item.value)) {
                    // 重新设置
                    if (checked) {
                        // 选中
                        if (max > 0) {
                            // 有上限
                            if (last > 0 && !item.checked) {
                                item.checked = true;
                                last -= 1;
                            }
                            else {
                                // 选择top max
                                // 其他保持原来的状态
                            }
                        }
                        else {
                            item.checked = true;
                        }
                    }
                    else {
                        // 取消选择
                        item.checked = false;
                    }
                }
                if (item.checked) {
                    checkes.push(item.value);
                }
            });
            group.type = (checkes.length > 0) ? ((checkes.length == group.list.length) ? 3 : 2) : 1;
            newImme = newImme.concat(checkes);
        });
        me.updater.digest({
            groups: groups,
            imme: newImme
        });
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    },
    '@{submit}<click>': function (e) {
        var me = this;
        var data = me.updater.get();
        var groups = data.groups;
        var selected = [];
        var selectedIndexes = []; //用于判断选择是否连续
        var index = 0;
        groups.forEach(function (group) {
            group.list.forEach(function (item) {
                index += 1;
                if (item.checked) {
                    // 字符串方便判断
                    selected.push(item.value + '');
                    var len = selectedIndexes.length;
                    if (len == 0) {
                        selectedIndexes.push(index);
                    }
                    else {
                        if (selectedIndexes[len - 1] + 1 == index) {
                            selectedIndexes[len - 1] = index;
                        }
                        else {
                            selectedIndexes.push(index);
                        }
                    }
                }
            });
        });
        var min = me.updater.get('min');
        if ((min > 0) && (selected.length < min)) {
            me.updater.digest({
                errMsg: "\u8BF7\u81F3\u5C11\u9009\u62E9" + min + "\u4E2A"
            });
            return;
        }
        var continuous = me.updater.get('continuous');
        if (continuous && (selected.length > 0)) {
            var name = me.updater.get('name') || '数据';
            if (selectedIndexes.length > 1) {
                // 连续选择
                me.updater.digest({
                    errMsg: "\u8BF7\u9009\u62E9\u8FDE\u7EED\u7684" + name
                });
                return;
            }
        }
        me.updater.set({
            errMsg: '',
            selected: selected
        });
        me['@{hide}']();
        var map = data.map;
        var texts = selected.map(function (value) {
            return map[value].text;
        });
        // 确定的时候才更新
        me['@{owner.node}'].trigger({
            type: 'change',
            texts: texts,
            values: selected,
            selected: $('#' + me.id).val()
        });
    },
    '@{hide}<click>': function (e) {
        this['@{hide}']();
    }
});

});