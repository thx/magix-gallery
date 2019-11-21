/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/card",["magix","./index"],(require,exports,module)=>{
/*magix_1,View*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var View = require("./index");
magix_1["default"].applyStyle("_zs_gallery_mx-cascade_card_","._zs_gallery_mx-cascade_card_-cascade-list {\n  width: auto;\n  min-width: 0;\n  max-width: none;\n  white-space: nowrap;\n}\n._zs_gallery_mx-cascade_card_-group {\n  display: inline-block;\n  min-width: 100px;\n  height: calc(var(--input-small-height) * 6);\n  overflow-y: auto;\n  vertical-align: top;\n  border-left: 1px solid var(--color-border);\n}\n._zs_gallery_mx-cascade_card_-group:first-child {\n  border-left: 0 none;\n}\n._zs_gallery_mx-cascade_card_-line {\n  position: relative;\n  height: var(--input-small-height);\n  padding-right: var(--input-small-height);\n  padding-left: 10px;\n  line-height: var(--input-small-height);\n  transition: background-color var(--duration), color var(--duration);\n  cursor: pointer;\n}\n._zs_gallery_mx-cascade_card_-line ._zs_gallery_mx-cascade_card_-line-text {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-cascade_card_-line ._zs_gallery_mx-cascade_card_-line-arrow {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 24px;\n  line-height: var(--input-small-height);\n  color: #999;\n  transform: rotate(-90deg);\n}\n._zs_gallery_mx-cascade_card_-line:hover,\n._zs_gallery_mx-cascade_card_-line._zs_gallery_mx-cascade_card_-hover {\n  background-color: var(--color-bg-hover);\n}\n._zs_gallery_mx-cascade_card_-line._zs_gallery_mx-cascade_card_-cur {\n  color: var(--color-brand);\n  background-color: var(--color-brand-opacity);\n}\n._zs_gallery_mx-cascade_card_-line._zs_gallery_mx-cascade_card_-cur:hover,\n._zs_gallery_mx-cascade_card_-line._zs_gallery_mx-cascade_card_-cur._zs_gallery_mx-cascade_card_-hover {\n  background-color: var(--color-brand-opacity);\n}\n");
exports["default"] = View.extend({
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
} ; var $g = '', $_temp, $p = '', groups = $$.groups, viewId = $$.viewId, textKey = $$.textKey; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryfW:_" class="clearfix _zs_gallery_mx-cascade_card_-cascade-list">';
    $line = 2;
    $art = 'each groups as list gIndex';
    ;
    $expr = '<%for (var gIndex = 0, $art_cpxvjfgs$art_c = groups.length; gIndex < $art_cpxvjfgs$art_c; gIndex++) {    var list = groups[gIndex]%>';
    for (var gIndex = 0, $art_cpxvjfgs$art_c = groups.length; gIndex < $art_cpxvjfgs$art_c; gIndex++) {
        var list = groups[gIndex];
        $p += '<div class="_zs_gallery_mx-cascade_card_-group" id="';
        $line = 3;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_g_';
        $line = 3;
        $art = '=gIndex';
        ;
        $p += ($expr = '<%=gIndex%>', $e(gIndex)) + '">';
        $line = 4;
        $art = 'each list as item iIndex';
        ;
        $expr = '<%for (var iIndex = 0, $art_cqsjmp$art_c = list.length; iIndex < $art_cqsjmp$art_c; iIndex++) {        var item = list[iIndex]%>';
        for (var iIndex = 0, $art_cqsjmp$art_c = list.length; iIndex < $art_cqsjmp$art_c; iIndex++) {
            var item = list[iIndex];
            $p += '<div class="_zs_gallery_mx-cascade_card_-line ';
            $line = 5;
            $art = 'if item.cur';
            ;
            $expr = '<%if (item.cur) {%>';
            if (item.cur) {
                ;
                $p += ' _zs_gallery_mx-cascade_card_-cur ';
                $line = 5;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 5;
            $art = 'if item.hover';
            ;
            $expr = '<%if (item.hover) {%>';
            if (item.hover) {
                ;
                $p += ' _zs_gallery_mx-cascade_card_-hover ';
                $line = 5;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" ';
            $line = 6;
            $art = 'if (!item.children || !item.children.length)';
            ;
            $expr = '<%if (!item.children || !item.children.length) {%>';
            if (!item.children || !item.children.length) {
                ;
                $p += ' mx-click="' + $viewId + '@{select}({gIndex:';
                $line = 6;
                $art = '=gIndex';
                ;
                $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
                $line = 6;
                $art = '=iIndex';
                ;
                $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})" ';
                $line = 6;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' mx-mouseover="' + $viewId + '@{select}({gIndex:';
            $line = 7;
            $art = '=gIndex';
            ;
            $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
            $line = 7;
            $art = '=iIndex';
            ;
            $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})"><span mxa="_zs_galleryfW:a" class="_zs_gallery_mx-cascade_card_-line-text">';
            $line = 8;
            $art = '=item[textKey]';
            ;
            $p += ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</span>';
            $line = 9;
            $art = 'if (item.children && item.children.length)';
            ;
            $expr = '<%if (item.children && item.children.length) {%>';
            if (item.children && item.children.length) {
                ;
                $p += '<span mxs="_zs_galleryfW:_" class="mc-iconfont _zs_gallery_mx-cascade_card_-line-arrow">&#xe692;</span>';
                $line = 11;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 13;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 15;
        $art = '/each';
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
    msg += $expr + '\r\n\tat file:mx-cascade/card.html';
    throw msg;
} return $p; }
});

});