/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/multiple",["magix","$","../mx-monitor/index","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,$,Monitor,I18n*/

var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-dropdown_index_","/*md5:e33322d43826cc01fd5079540ab09358*/\n/* @dependent: ./index.less */\n._zs_gallery_mx-dropdown_index_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-dropdown_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_mx-dropdown_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  position: relative;\n  width: 100%;\n  padding: 0 25px 0 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-dropdown-toggle-label {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-dropdown-toggle-label._zs_gallery_mx-dropdown_index_-dropdown-toggle-label-ph {\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  margin-top: -14px;\n  color: #ccc;\n  transition: top 0.25s, -webkit-transform 0.25s;\n  transition: transform 0.25s, top 0.25s;\n  transition: transform 0.25s, top 0.25s, -webkit-transform 0.25s;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle._zs_gallery_mx-dropdown_index_-open ._zs_gallery_mx-dropdown_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_mx-dropdown_index_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  cursor: pointer;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n}\n._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:hover,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:focus {\n  color: #fff;\n  background-color: #4d7fff;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-header-item ._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: transparent;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper {\n  display: none;\n  position: absolute;\n  left: 0;\n  z-index: 99;\n  min-width: 100%;\n  max-width: 200%;\n  border-radius: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-search-wrapper {\n  width: 100%;\n  padding: 10px 10px 0 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu {\n  padding: 8px 10px;\n  overflow: auto;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  padding: 2px 0;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-header {\n  color: #999;\n  cursor: default;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-bottom {\n  top: 100%;\n  margin-top: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-bottom._zs_gallery_mx-dropdown_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-top {\n  bottom: 100%;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-top._zs_gallery_mx-dropdown_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-dropdown_index_-fade-in-up 0.25s ease-out;\n          animation: _zs_gallery_mx-dropdown_index_-fade-in-up 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group {\n  min-width: 600px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-search-wrapper {\n  width: 200px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper {\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  float: left;\n  width: 25%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown,\n[mx-view*=\"mx-dropdown/index\"],\n[mx-view*=\"mx-dropdown/multiple\"] {\n  position: relative;\n  display: inline-block;\n  min-width: 100px;\n  height: 32px;\n  line-height: 30px;\n  vertical-align: middle;\n  background-color: #fff;\n  outline: 0;\n}\n._zs_gallery_mx-dropdown_index_-dropdown ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"] ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  transition: all 0.25s;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-dropdown:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  border-color: #ccc;\n  color: #666;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled],\n[mx-view*=\"mx-dropdown/index\"][mx-disabled],\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled],\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover {\n  cursor: not-allowed;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  border-color: #e6e6e6;\n  color: #999;\n  background-color: #eee;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper {\n  padding: 10px 10px 0 10px;\n  line-height: 16px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper {\n  padding-right: 20px;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper:hover {\n  color: #4d7fff;\n}\n._zs_gallery_mx-dropdown_index_-footer-wrapper {\n  padding: 10px;\n  border-top: 1px solid #e6e6e6;\n}\n");
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, selected = $$.selected, selectedText = $$.selectedText, placementClass = $$.placementClass, over = $$.over, menuStyles = $$.menuStyles, rList = $$.rList, searchbox = $$.searchbox, text = $$.text, keyword = $$.keyword, needAll = $$.needAll, spm = $$.spm, viewId = $$.viewId, height = $$.height, groups = $$.groups; var $expr, $art, $line; try {
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
    $art = 'if (selected===\'\')';
    ;
    $expr = '<%if (selected === \'\') {%>';
    if (selected === '') {
        ;
        $p += ' _zs_gallery_mx-dropdown_index_-dropdown-toggle-label-ph ';
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
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_galleryaE:_" class="mc-iconfont _zs_gallery_mx-dropdown_index_-arrow">&#xe692;</span></div><div mxv class="_zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ';
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
            $p += '<div mxv mxa="_zs_galleryaE:_" class="_zs_gallery_mx-dropdown_index_-search-wrapper"><div mxv mxa="_zs_galleryaE:a" class="search-box"><i mxs="_zs_galleryaE:a" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
            $line = 13;
            $art = '=text.search';
            ;
            $p += ($expr = '<%=text.search%>', $e(text.search)) + '" mx-keyup="' + $viewId + '@{search}()" mx-paste="' + $viewId + '@{search}()" mx-change="' + $viewId + '@{stop}()" mx-focusin="' + $viewId + '@{stop}()" mx-focusout="' + $viewId + '@{stop}()" value="';
            $line = 19;
            $art = '=keyword';
            ;
            $p += ($expr = '<%=keyword%>', $e(keyword)) + '"/></div></div>';
            $line = 22;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 23;
        $art = 'if !needAll';
        ;
        $expr = '<%if (!needAll) {%>';
        if (!needAll) {
            ;
            $p += '<div mxa="_zs_galleryaE:b" class="_zs_gallery_mx-dropdown_index_-oper-wrapper"><a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="' + $viewId + '@{checkAll}({checked:true})" data-spm-click="';
            $line = 25;
            $art = '=spm';
            ;
            $p += ($expr = '<%=spm%>', $e(spm)) + '">';
            $line = 25;
            $art = '=text.select';
            ;
            $p += ($expr = '<%=text.select%>', $e(text.select)) + '</a><a class="_zs_gallery_mx-dropdown_index_-oper" href="javascript:;" mx-click="' + $viewId + '@{checkAll}({checked:false})" data-spm-click="';
            $line = 26;
            $art = '=spm';
            ;
            $p += ($expr = '<%=spm%>', $e(spm)) + '">';
            $line = 26;
            $art = '=text.unselect';
            ;
            $p += ($expr = '<%=text.unselect%>', $e(text.unselect)) + '</a></div>';
            $line = 28;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxv class="_zs_gallery_mx-dropdown_index_-dropdown-menu" id="list_';
        $line = 29;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '" style="max-height:';
        $line = 29;
        $art = '=height';
        ;
        $p += ($expr = '<%=height%>', $e(height)) + 'px;">';
        $line = 30;
        $art = 'each groups as group groupIndex';
        ;
        $expr = '<%for (var groupIndex = 0, $art_cawjckshhw$art_c = groups.length; groupIndex < $art_cawjckshhw$art_c; groupIndex++) {        var group = groups[groupIndex]%>';
        for (var groupIndex = 0, $art_cawjckshhw$art_c = groups.length; groupIndex < $art_cawjckshhw$art_c; groupIndex++) {
            var group = groups[groupIndex];
            $p += ' ';
            $line = 31;
            $art = 'if (group.text && !group.hide)';
            ;
            $expr = '<%if (group.text && !group.hide) {%>';
            if (group.text && !group.hide) {
                ;
                $p += ' ';
                $line = 32;
                $art = 'if group.all';
                ;
                $expr = '<%if (group.all) {%>';
                if (group.all) {
                    ;
                    $p += '<div mxv title="';
                    $line = 33;
                    $art = '=group.text';
                    ;
                    $p += ($expr = '<%=group.text%>', $e(group.text)) + '" class="_zs_gallery_mx-dropdown_index_-dropdown-item _zs_gallery_mx-dropdown_index_-dropdown-header-item"><label mxv for="';
                    $line = 34;
                    $art = '=viewId';
                    ;
                    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
                    $line = 34;
                    $art = '=group.value';
                    ;
                    $p += ($expr = '<%=group.value%>', $e(group.value)) + '" class="_zs_gallery_mx-dropdown_index_-item-link ellipsis"><input type="checkbox" class="checkbox" ';
                    $line = 36;
                    $art = 'if group.checked';
                    ;
                    $expr = '<%if (group.checked) {%>';
                    if (group.checked) {
                        ;
                        $p += ' checked="true" ';
                        $line = 36;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' id="';
                    $line = 37;
                    $art = '=viewId';
                    ;
                    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
                    $line = 37;
                    $art = '=group.value';
                    ;
                    $p += ($expr = '<%=group.value%>', $e(group.value)) + '" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{selectGroup}({groupIndex:\'';
                    $line = 39;
                    $art = '=groupIndex';
                    ;
                    $p += ($expr = '<%=$eq(groupIndex)%>', $e($eq(groupIndex))) + '\'})" data-spm-click="';
                    $line = 40;
                    $art = '=spm';
                    ;
                    $p += ($expr = '<%=spm%>', $e(spm)) + '"/>';
                    $line = 40;
                    $art = '=group.text';
                    ;
                    $p += ($expr = '<%=group.text%>', $e(group.text)) + '</label></div>';
                    $line = 43;
                    $art = 'else';
                    ;
                    $expr = '<%}            else {%>';
                }
                else {
                    ;
                    $p += '<div class="_zs_gallery_mx-dropdown_index_-dropdown-header ellipsis" title="';
                    $line = 44;
                    $art = '=group.text';
                    ;
                    $p += ($expr = '<%=group.text%>', $e(group.text)) + '">';
                    $line = 44;
                    $art = '=group.text';
                    ;
                    $p += ($expr = '<%=group.text%>', $e(group.text)) + '</div>';
                    $line = 45;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 46;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '<div mxv mxa="_zs_galleryaE:c" class="clearfix _zs_gallery_mx-dropdown_index_-group-wrapper">';
            $line = 48;
            $art = 'each group.list as item';
            ;
            $expr = '<%for (var $art_iuyxdjzove$art_i = 0, $art_objyqpxhs$art_obj = group.list, $art_cdcizqdrb$art_c = $art_objyqpxhs$art_obj.length; $art_iuyxdjzove$art_i < $art_cdcizqdrb$art_c; $art_iuyxdjzove$art_i++) {            var item = $art_objyqpxhs$art_obj[$art_iuyxdjzove$art_i]%>';
            for (var $art_iuyxdjzove$art_i = 0, $art_objyqpxhs$art_obj = group.list, $art_cdcizqdrb$art_c = $art_objyqpxhs$art_obj.length; $art_iuyxdjzove$art_i < $art_cdcizqdrb$art_c; $art_iuyxdjzove$art_i++) {
                var item = $art_objyqpxhs$art_obj[$art_iuyxdjzove$art_i];
                $p += ' ';
                $line = 49;
                $art = 'if !item.hide';
                ;
                $expr = '<%if (!item.hide) {%>';
                if (!item.hide) {
                    ;
                    $p += '<div mxv title="';
                    $line = 50;
                    $art = '=item.text';
                    ;
                    $p += ($expr = '<%=item.text%>', $e(item.text)) + '" class="_zs_gallery_mx-dropdown_index_-dropdown-item"><label mxv for="';
                    $line = 51;
                    $art = '=viewId';
                    ;
                    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
                    $line = 51;
                    $art = '=item.value';
                    ;
                    $p += ($expr = '<%=item.value%>', $e(item.value)) + '" class="_zs_gallery_mx-dropdown_index_-item-link ellipsis"><input type="checkbox" class="checkbox" ';
                    $line = 53;
                    $art = 'if item.checked';
                    ;
                    $expr = '<%if (item.checked) {%>';
                    if (item.checked) {
                        ;
                        $p += ' checked="true" ';
                        $line = 53;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' id="';
                    $line = 54;
                    $art = '=viewId';
                    ;
                    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
                    $line = 54;
                    $art = '=item.value';
                    ;
                    $p += ($expr = '<%=item.value%>', $e(item.value)) + '" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{select}({groupIndex:\'';
                    $line = 56;
                    $art = '=groupIndex';
                    ;
                    $p += ($expr = '<%=$eq(groupIndex)%>', $e($eq(groupIndex))) + '\',value:\'';
                    $line = 56;
                    $art = '=item.value';
                    ;
                    $p += ($expr = '<%=$eq(item.value)%>', $e($eq(item.value))) + '\'})" data-spm-click="';
                    $line = 57;
                    $art = '=spm';
                    ;
                    $p += ($expr = '<%=spm%>', $e(spm)) + '"/>';
                    $line = 57;
                    $art = '=item.text';
                    ;
                    $p += ($expr = '<%=item.text%>', $e(item.text)) + '</label></div>';
                    $line = 60;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 61;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 63;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxa="_zs_galleryaE:d" class="_zs_gallery_mx-dropdown_index_-footer-wrapper"><button mxa="_zs_galleryaE:e" type="button" class="btn btn-small btn-brand mr10" mx-click="' + $viewId + '@{submit}({enter:true})">';
        $line = 66;
        $art = '=text.submit';
        ;
        $p += ($expr = '<%=text.submit%>', $e(text.submit)) + '</button><button mxa="_zs_galleryaE:f" type="button" class="btn btn-small" mx-click="' + $viewId + '@{hide}()">';
        $line = 67;
        $art = '=text.cancel';
        ;
        $p += ($expr = '<%=text.cancel%>', $e(text.cancel)) + '</button></div>';
        $line = 69;
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
        var emptyText = ops.emptyText || I18n['dropdown.empty.text'];
        var allText = ops.name || '';
        var needAll = (ops.needAll + '') === 'false'; //禁用全选功能
        var searchbox = (ops.searchbox + '') === 'true';
        var textKey = ops.textKey || 'text';
        var valueKey = ops.valueKey || 'value';
        var groups = [];
        if (!ops.list) {
            var node_1 = me['@{owner.node}'].children();
            var hasGroup = $(node_1[0]).attr('group') == 'true';
            if (hasGroup) {
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
            // me['@{bak.type}'] = 'array';
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
                selected = ops.selected.split(',');
            }
        }
        groups.forEach(function (group) {
            var allChecked = true;
            group.list.forEach(function (item) {
                count++;
                item.checked = (selected.indexOf(item.value + '') > -1);
                allChecked = allChecked && item.checked;
                map[item.value] = item;
            });
            group.checked = allChecked;
        });
        me.updater.set({
            viewId: me.id,
            expand: expand,
            emptyText: emptyText,
            allText: allText,
            needAll: needAll,
            searchbox: searchbox,
            map: map,
            selected: selected,
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
                cancel: I18n['dialog.cancel']
            }
        });
    },
    '@{inside}': function (node) {
        var me = this;
        return Magix.inside(node, me.id);
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
                var allChecked = true;
                group.list.forEach(function (item) {
                    item.checked = (selected_1.indexOf(item.value + '') > -1);
                    allChecked = allChecked && item.checked;
                });
                group.checked = allChecked;
            });
            me.updater.digest({
                groups: groups,
                selected: selected_1,
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
        var allText = data.allText;
        if (text.length == Object.keys(map).length) {
            if (allText) {
                return I18n['dropdown.all.custom'] + allText;
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
        if (!val) {
            groups.forEach(function (group) {
                group.hide = false;
                group.list.forEach(function (item) {
                    item.hide = false;
                });
            });
            callback(groups);
            return;
        }
        var lowVal = (val + '').toLocaleLowerCase();
        groups.forEach(function (group) {
            var allHide = true;
            group.list.forEach(function (item) {
                var lowText = (item.text + '').toLocaleLowerCase();
                item.hide = (lowText.indexOf(lowVal) < 0);
                allHide = allHide && item.hide;
            });
            group.hide = allHide;
        });
        callback(groups);
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
                me['@{fn.search}'](me['@{last.value}'] = val, function (groups) {
                    me.updater.digest({
                        groups: groups
                    });
                });
            }
        }), 300);
    },
    '@{selectGroup}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        var data = me.updater.get();
        var value = e.params.value;
        var groupIndex = e.params.groupIndex, checked = e.target.checked;
        var groups = data.groups;
        var group = groups[groupIndex];
        group.list.forEach(function (item) {
            item.checked = checked;
        });
        groups[groupIndex].checked = checked;
        me.updater.digest({
            groups: groups
        });
    },
    '@{select}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        var data = me.updater.get();
        var value = e.params.value, groupIndex = e.params.groupIndex, checked = e.target.checked;
        var groups = data.groups;
        var group = groups[groupIndex];
        var list = group.list;
        var allChecked = true;
        for (var i = 0; i < list.length; i++) {
            if (list[i].value == value) {
                list[i].checked = checked;
            }
            allChecked = allChecked && list[i].checked;
        }
        groups[groupIndex].checked = allChecked;
        me.updater.digest({
            groups: groups
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
        groups.forEach(function (group) {
            group.list.forEach(function (item) {
                if (item.checked) {
                    // 加空格方便判断
                    selected.push(item.value + '');
                }
            });
        });
        me.updater.set({
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
    },
    '@{checkAll}<click>': function (e) {
        var me = this;
        var groups = me.updater.get('groups');
        var checked = e.params.checked;
        groups.forEach(function (group) {
            group.list.forEach(function (item) {
                item.checked = checked;
            });
            group.checked = checked;
        });
        me.updater.digest({
            groups: groups
        });
    }
});

});