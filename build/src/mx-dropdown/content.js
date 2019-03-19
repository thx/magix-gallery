/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/content",["magix","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,I18n*/

var Magix = require("magix");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', searchbox = $$.searchbox, text = $$.text, keyword = $$.keyword, multiple = $$.multiple, spm = $$.spm, allHide = $$.allHide, height = $$.height, parents = $$.parents, hasGroups = $$.hasGroups; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if searchbox';
    ;
    $expr = '<%if (searchbox) {%>';
    if (searchbox) {
        ;
        $p += '<div mxv mxa="_zs_gallerya,:_" class="_zs_gallery_mx-dropdown_index_-search-wrapper"><div mxv mxa="_zs_gallerya,:a" class="search-box _zs_gallery_mx-dropdown_index_-dropdown-search-box"><i mxs="_zs_gallerya,:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
        $line = 6;
        $art = '=text.search';
        ;
        $p += ($expr = '<%=text.search%>', $e(text.search)) + '" mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" value="';
        $line = 12;
        $art = '=keyword';
        ;
        $p += ($expr = '<%=keyword%>', $e(keyword)) + '"/></div></div>';
        $line = 15;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 16;
    $art = 'if multiple';
    ;
    $expr = '<%if (multiple) {%>';
    if (multiple) {
        ;
        $p += '<div mxa="_zs_gallerya,:b" class="_zs_gallery_mx-dropdown_index_-oper-wrapper _zs_gallery_mx-dropdown_index_-has-group clearfix"><a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="' + $viewId + '@{checkAll}({checked:true})" data-spm-click="';
        $line = 18;
        $art = '=spm';
        ;
        $p += ($expr = '<%=spm%>', $e(spm)) + 'a">';
        $line = 18;
        $art = '=text.select';
        ;
        $p += ($expr = '<%=text.select%>', $e(text.select)) + '</a><a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="' + $viewId + '@{checkAll}({checked:false})" data-spm-click="';
        $line = 19;
        $art = '=spm';
        ;
        $p += ($expr = '<%=spm%>', $e(spm)) + 'ua">';
        $line = 19;
        $art = '=text.unselect';
        ;
        $p += ($expr = '<%=text.unselect%>', $e(text.unselect)) + '</a></div>';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 22;
    $art = 'if !allHide';
    ;
    $expr = '<%if (!allHide) {%>';
    if (!allHide) {
        ;
        $p += '<ul mxv class="_zs_gallery_mx-dropdown_index_-dropdown-menu" style="max-height:';
        $line = 23;
        $art = '=height';
        ;
        $p += ($expr = '<%=height%>', $e(height)) + 'px;">';
        $line = 24;
        $art = 'each parents as parent parentIndex';
        ;
        $expr = '<%for (var parentIndex = 0, $art_czrfcud$art_c = parents.length; parentIndex < $art_czrfcud$art_c; parentIndex++) {        var parent = parents[parentIndex]%>';
        for (var parentIndex = 0, $art_czrfcud$art_c = parents.length; parentIndex < $art_czrfcud$art_c; parentIndex++) {
            var parent = parents[parentIndex];
            $p += ' ';
            $line = 25;
            $art = 'if !parent.hide';
            ;
            $expr = '<%if (!parent.hide) {%>';
            if (!parent.hide) {
                ;
                $p += ' ';
                $line = 26;
                $art = 'if hasGroups';
                ;
                $expr = '<%if (hasGroups) {%>';
                if (hasGroups) {
                    ;
                    $p += '<li class="_zs_gallery_mx-dropdown_index_-dropdown-header ellipsis" title="';
                    $line = 27;
                    $art = '=parent.text';
                    ;
                    $p += ($expr = '<%=parent.text%>', $e(parent.text)) + '">';
                    $line = 27;
                    $art = '=parent.text';
                    ;
                    $p += ($expr = '<%=parent.text%>', $e(parent.text)) + '</li>';
                    $line = 28;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 29;
                $art = 'each parent.list as item itemIndex';
                ;
                $expr = '<%for (var itemIndex = 0, $art_objopabbdzxlo$art_obj = parent.list, $art_clctcwd$art_c = $art_objopabbdzxlo$art_obj.length; itemIndex < $art_clctcwd$art_c; itemIndex++) {                var item = $art_objopabbdzxlo$art_obj[itemIndex]%>';
                for (var itemIndex = 0, $art_objopabbdzxlo$art_obj = parent.list, $art_clctcwd$art_c = $art_objopabbdzxlo$art_obj.length; itemIndex < $art_clctcwd$art_c; itemIndex++) {
                    var item = $art_objopabbdzxlo$art_obj[itemIndex];
                    $p += ' ';
                    $line = 30;
                    $art = 'if !item.hide';
                    ;
                    $expr = '<%if (!item.hide) {%>';
                    if (!item.hide) {
                        ;
                        $p += '<li mxv title="';
                        $line = 31;
                        $art = '=item.text';
                        ;
                        $p += ($expr = '<%=item.text%>', $e(item.text)) + '" class="_zs_gallery_mx-dropdown_index_-dropdown-item">';
                        $line = 32;
                        $art = 'if multiple';
                        ;
                        $expr = '<%if (multiple) {%>';
                        if (multiple) {
                            ;
                            $p += '<label mxv class="_zs_gallery_mx-dropdown_index_-item-link ellipsis ';
                            $line = 33;
                            $art = 'if item.disabled';
                            ;
                            $expr = '<%if (item.disabled) {%>';
                            if (item.disabled) {
                                ;
                                $p += ' _zs_gallery_mx-dropdown_index_-link-disabled ';
                                $line = 33;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += '"><input type="checkbox" class="checkbox" ';
                            $line = 35;
                            $art = 'if item.selected';
                            ;
                            $expr = '<%if (item.selected) {%>';
                            if (item.selected) {
                                ;
                                $p += ' checked="true" ';
                                $line = 35;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += ' ';
                            $line = 36;
                            $art = 'if item.disabled';
                            ;
                            $expr = '<%if (item.disabled) {%>';
                            if (item.disabled) {
                                ;
                                $p += ' disabled="true" ';
                                $line = 36;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += ' mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{check}({parentIndex:\'';
                            $line = 38;
                            $art = '=parentIndex';
                            ;
                            $p += ($expr = '<%=$eq(parentIndex)%>', $e($eq(parentIndex))) + '\',itemIndex:\'';
                            $line = 38;
                            $art = '=itemIndex';
                            ;
                            $p += ($expr = '<%=$eq(itemIndex)%>', $e($eq(itemIndex))) + '\'})" data-spm-click="';
                            $line = 39;
                            $art = '=spm';
                            ;
                            $p += ($expr = '<%=spm%>', $e(spm)) + '"/>';
                            $line = 40;
                            $art = '=item.text';
                            ;
                            $p += ($expr = '<%=item.text%>', $e(item.text)) + '</label>';
                            $line = 42;
                            $art = 'else';
                            ;
                            $expr = '<%}                    else {%>';
                        }
                        else {
                            ;
                            $p += '<span class="_zs_gallery_mx-dropdown_index_-item-link ellipsis ';
                            $line = 43;
                            $art = 'if item.selected';
                            ;
                            $expr = '<%if (item.selected) {%>';
                            if (item.selected) {
                                ;
                                $p += ' _zs_gallery_mx-dropdown_index_-active ';
                                $line = 43;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += ' ';
                            $line = 43;
                            $art = 'if item.disabled';
                            ;
                            $expr = '<%if (item.disabled) {%>';
                            if (item.disabled) {
                                ;
                                $p += ' _zs_gallery_mx-dropdown_index_-link-disabled ';
                                $line = 43;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += '" ';
                            $line = 44;
                            $art = 'if !item.disabled';
                            ;
                            $expr = '<%if (!item.disabled) {%>';
                            if (!item.disabled) {
                                ;
                                $p += ' mx-click="' + $viewId + '@{select}({item:\'';
                                $line = 44;
                                $art = '@item';
                                ;
                                $p += ($expr = '<%@item%>', $i($$ref, item)) + '\'})" data-spm-click="';
                                $line = 44;
                                $art = '=spm';
                                ;
                                $p += ($expr = '<%=spm%>', $e(spm)) + '" ';
                                $line = 44;
                                $art = '/if';
                                ;
                                $expr = '<%}%>';
                            }
                            ;
                            $p += '>';
                            $line = 45;
                            $art = '=item.text';
                            ;
                            $p += ($expr = '<%=item.text%>', $e(item.text)) + '</span>';
                            $line = 47;
                            $art = '/if';
                            ;
                            $expr = '<%}%>';
                        }
                        ;
                        $p += '</li>';
                        $line = 49;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' ';
                    $line = 50;
                    $art = '/each';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 51;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 52;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</ul>';
        $line = 54;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div mxa="_zs_gallerya,:c" class="text-center color-9 pt20 pb20">';
        $line = 55;
        $art = '=text.empty';
        ;
        $p += ($expr = '<%=text.empty%>', $e(text.empty)) + '</div>';
        $line = 56;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 57;
    $art = 'if multiple';
    ;
    $expr = '<%if (multiple) {%>';
    if (multiple) {
        ;
        $p += '<div mxa="_zs_gallerya,:d" class="_zs_gallery_mx-dropdown_index_-footer-wrapper"><a mxa="_zs_gallerya,:e" href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="' + $viewId + '@{submit}()">';
        $line = 59;
        $art = '=text.submit';
        ;
        $p += ($expr = '<%=text.submit%>', $e(text.submit)) + '</a><a mxa="_zs_gallerya,:f" href="javascript:;" class="btn btn-small" mx-click="' + $viewId + '@{cancel}()">';
        $line = 60;
        $art = '=text.cancel';
        ;
        $p += ($expr = '<%=text.cancel%>', $e(text.cancel)) + '</a></div>';
        $line = 62;
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
    msg += $expr + '\r\n\tat file:mx-dropdown/content.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.viewOptions = e;
        var data = e.data;
        var parents = $.extend(true, [], data.parents);
        var selectedValues = (data.selectedItems || []).map(function (item) {
            return (item.value + '');
        });
        parents.forEach(function (parent) {
            parent.list.forEach(function (item) {
                item.selected = (selectedValues.indexOf(item.value + '') > -1);
            });
        });
        this.updater.set({
            parents: parents,
            hasGroups: data.hasGroups,
            searchbox: data.searchbox,
            multiple: data.multiple,
            spm: data.spm,
            height: data.height,
            keyword: (data.keyword || ''),
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
        var keyword = me.updater.get('keyword');
        me['@{fn.search}'](me['@{last.value}'] = keyword, function (result) {
            me.updater.digest(result);
        });
    },
    /**
     * 单选
     */
    '@{select}<click>': function (e) {
        var me = this;
        var viewOptions = me.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit({
                keyword: me.updater.get('keyword'),
                selectedItems: [e.params.item]
            });
        }
    },
    '@{checkAll}<click>': function (e) {
        var checked = e.params.checked;
        var parents = this.updater.get('parents');
        parents.forEach(function (parent) {
            parent.list.forEach(function (item) {
                if (!item.disabled) {
                    item.selected = checked;
                }
            });
        });
        this.updater.digest({
            parents: parents
        });
    },
    '@{check}<change>': function (e) {
        var parentIndex = e.params.parentIndex, itemIndex = e.params.itemIndex;
        var parents = this.updater.get('parents');
        parents[parentIndex].list[itemIndex].selected = !parents[parentIndex].list[itemIndex].selected;
        this.updater.digest({
            parents: parents
        });
    },
    /**
     * 批量，确定
     */
    '@{submit}<click>': function (e) {
        var me = this;
        var viewOptions = me.viewOptions;
        var parents = me.updater.get('parents');
        var selectedItems = [];
        parents.forEach(function (parent) {
            parent.list.forEach(function (item) {
                if (item.selected) {
                    selectedItems.push(item);
                }
            });
        });
        if (viewOptions.submit) {
            viewOptions.submit({
                keyword: me.updater.get('keyword'),
                selectedItems: selectedItems
            });
        }
    },
    /**
     * 批量，取消
     */
    '@{cancel}<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.cancel) {
            viewOptions.cancel();
        }
    },
    '@{fn.search}': function (val, callback) {
        var me = this;
        var data = me.updater.get();
        var parents = data.parents;
        var allHide;
        if (!val) {
            allHide = false;
            parents.forEach(function (parent) {
                parent.hide = false;
                parent.list.forEach(function (item) {
                    item.hide = false;
                });
            });
        }
        else {
            allHide = true;
            var lowVal_1 = (val + '').toLocaleLowerCase();
            parents.forEach(function (parent) {
                var groupHide = true;
                parent.list.forEach(function (item) {
                    var lowText = (item.text + '').toLocaleLowerCase();
                    item.hide = (lowText.indexOf(lowVal_1) < 0);
                    groupHide = groupHide && item.hide;
                });
                parent.hide = groupHide;
                allHide = allHide && groupHide;
            });
        }
        callback({
            parents: parents,
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
    '@{stop}<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    }
});

});