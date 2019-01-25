/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-cascade/index",["magix","mx-tree/util","../mx-medusa/util","../mx-monitor/index"],(require,exports,module)=>{
/*Magix,Util,I18n,Monitor*/

var Magix = require("magix");
var Vframe = Magix.Vframe;
var Util = require("mx-tree/util");
var I18n = require("../mx-medusa/util");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_zs_gallery_mx-cascade_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-cascade_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-cascade_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-cascade_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-cascade_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-cascade_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_mx-cascade_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-cascade_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n/**\n * 按钮中间的loading点动画\n */\n@keyframes _zs_gallery_mx-cascade_index_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-cascade_index_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@keyframes _zs_gallery_mx-cascade_index_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-cascade_index_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n._zs_gallery_mx-cascade_index_-cascade-toggle {\n  position: relative;\n  width: 100%;\n  height: 32px;\n  padding: 0 25px 0 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: 30px;\n  transition: all 0.25s;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n}\n._zs_gallery_mx-cascade_index_-cascade-toggle ._zs_gallery_mx-cascade_index_-cascade-label {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-cascade_index_-cascade-toggle ._zs_gallery_mx-cascade_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  margin-top: -14px;\n  color: #e6e6e6;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-cascade_index_-cascade-toggle._zs_gallery_mx-cascade_index_-open ._zs_gallery_mx-cascade_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_mx-cascade_index_-cascade-list {\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 100%;\n  z-index: 99;\n  margin-top: 10px;\n  border-radius: 4px;\n  background-color: #fff;\n  white-space: nowrap;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-cascade_index_-cascade-list._zs_gallery_mx-cascade_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-cascade_index_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-cascade_index_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-cascade_index_-group {\n  display: inline-block;\n  min-width: 100px;\n  height: 168px;\n  overflow-y: auto;\n  vertical-align: top;\n  border-right: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-cascade_index_-group:last-child {\n  border-right: 0 none;\n}\n._zs_gallery_mx-cascade_index_-line {\n  position: relative;\n  height: 28px;\n  padding-right: 26px;\n  padding-left: 10px;\n  line-height: 28px;\n  transition: background-color 0.25s, color 0.25s;\n  cursor: pointer;\n}\n._zs_gallery_mx-cascade_index_-line ._zs_gallery_mx-cascade_index_-line-text {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-cascade_index_-line ._zs_gallery_mx-cascade_index_-line-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  font-size: 24px;\n  line-height: 28px;\n  margin-top: -14px;\n  color: #999;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n._zs_gallery_mx-cascade_index_-line:hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-cascade_index_-line._zs_gallery_mx-cascade_index_-cur {\n  color: #4d7fff;\n  background-color: #f6f9ff;\n}\n._zs_gallery_mx-cascade_index_-line._zs_gallery_mx-cascade_index_-cur:hover {\n  background-color: #f6f9ff;\n}\n[mx-view*=\"mx-cascade/index\"] {\n  position: relative;\n  display: inline-block;\n  min-width: 100px;\n  vertical-align: middle;\n}\n[mx-view*=\"mx-cascade/index\"]:hover ._zs_gallery_mx-cascade_index_-cascade-toggle {\n  border-color: #ccc;\n}\n[mx-view*=\"mx-cascade/index\"]:hover ._zs_gallery_mx-cascade_index_-cascade-toggle ._zs_gallery_mx-cascade_index_-arrow {\n  color: #ccc;\n}\n[mx-view*=\"mx-cascade/index\"][mx-disabled] ._zs_gallery_mx-cascade_index_-cascade-toggle,\n[mx-view*=\"mx-cascade/index\"][mx-disabled]:hover ._zs_gallery_mx-cascade_index_-cascade-toggle {\n  border-color: #e6e6e6;\n  color: #999;\n  background-color: #eee;\n  cursor: not-allowed;\n}\n[mx-view*=\"mx-cascade/index\"][mx-disabled] ._zs_gallery_mx-cascade_index_-cascade-toggle ._zs_gallery_mx-cascade_index_-arrow,\n[mx-view*=\"mx-cascade/index\"][mx-disabled]:hover ._zs_gallery_mx-cascade_index_-cascade-toggle ._zs_gallery_mx-cascade_index_-arrow {\n  color: #ccc;\n}\n");
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, disabled = $$.disabled, name = $$.name, selectedText = $$.selectedText, groups = $$.groups, viewId = $$.viewId, textKey = $$.textKey; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-cascade_index_-cascade-toggle ';
    $line = 1;
    $art = 'if expand';
    ;
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' _zs_gallery_mx-cascade_index_-open ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" ';
    $line = 2;
    $art = 'if !disabled';
    ;
    $expr = '<%if (!disabled) {%>';
    if (!disabled) {
        ;
        $p += ' mx-click="' + $viewId + '@{show}()" ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '><span mxa="_zs_gallery/:_" class="_zs_gallery_mx-cascade_index_-cascade-label">';
    $line = 4;
    $art = 'if name';
    ;
    $expr = '<%if (name) {%>';
    if (name) {
        ;
        $line = 4;
        $art = '=name';
        ;
        $p += ($expr = '<%=name%>', $e(name)) + '：';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 5;
    $art = '=selectedText';
    ;
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_gallery/:_" class="mc-iconfont _zs_gallery_mx-cascade_index_-arrow">&#xe692;</span></div>';
    $line = 9;
    $art = 'if !disabled';
    ;
    $expr = '<%if (!disabled) {%>';
    if (!disabled) {
        ;
        $p += '<div class="_zs_gallery_mx-cascade_index_-cascade-list ';
        $line = 10;
        $art = 'if expand';
        ;
        $expr = '<%if (expand) {%>';
        if (expand) {
            ;
            $p += ' _zs_gallery_mx-cascade_index_-open ';
            $line = 10;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' clearfix">';
        $line = 11;
        $art = 'each groups as list gIndex';
        ;
        $expr = '<%for (var gIndex = 0, $art_chvzxtea$art_c = groups.length; gIndex < $art_chvzxtea$art_c; gIndex++) {        var list = groups[gIndex]%>';
        for (var gIndex = 0, $art_chvzxtea$art_c = groups.length; gIndex < $art_chvzxtea$art_c; gIndex++) {
            var list = groups[gIndex];
            $p += '<div class="_zs_gallery_mx-cascade_index_-group" id="';
            $line = 12;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_g_';
            $line = 12;
            $art = '=gIndex';
            ;
            $p += ($expr = '<%=gIndex%>', $e(gIndex)) + '">';
            $line = 13;
            $art = 'each list as item iIndex';
            ;
            $expr = '<%for (var iIndex = 0, $art_ctsfrp$art_c = list.length; iIndex < $art_ctsfrp$art_c; iIndex++) {            var item = list[iIndex]%>';
            for (var iIndex = 0, $art_ctsfrp$art_c = list.length; iIndex < $art_ctsfrp$art_c; iIndex++) {
                var item = list[iIndex];
                $p += '<div class="_zs_gallery_mx-cascade_index_-line ';
                $line = 14;
                $art = 'if item.cur';
                ;
                $expr = '<%if (item.cur) {%>';
                if (item.cur) {
                    ;
                    $p += ' _zs_gallery_mx-cascade_index_-cur ';
                    $line = 14;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '" mx-click="' + $viewId + '@{select}({gIndex:';
                $line = 14;
                $art = '=gIndex';
                ;
                $p += ($expr = '<%=gIndex%>', $e(gIndex)) + ',iIndex:';
                $line = 14;
                $art = '=iIndex';
                ;
                $p += ($expr = '<%=iIndex%>', $e(iIndex)) + '})"><span mxa="_zs_gallery/:a" class="_zs_gallery_mx-cascade_index_-line-text">';
                $line = 15;
                $art = '=item[textKey]';
                ;
                $p += ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</span>';
                $line = 16;
                $art = 'if (item.children && item.children.length)';
                ;
                $expr = '<%if (item.children && item.children.length) {%>';
                if (item.children && item.children.length) {
                    ;
                    $p += '<span mxs="_zs_gallery/:a" class="mc-iconfont _zs_gallery_mx-cascade_index_-line-arrow">&#xe692;</span>';
                    $line = 18;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 20;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 22;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 24;
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
    msg += $expr + '\r\n\tat file:mx-cascade/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{extra}'] = extra;
        Monitor['@{setup}']();
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    render: function () {
        var me = this;
        var ops = me['@{extra}'];
        var valueKey = ops.valueKey || 'value';
        var textKey = ops.textKey || 'text';
        var parentKey = ops.parentKey || 'pValue';
        // 是否可操作
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        var info = Util.listToTree(ops.list, valueKey, parentKey, false);
        var map = info.map, list = info.list;
        me.updater.set({
            viewId: me.id,
            disabled: disabledNode && (disabledNode.length > 0),
            placeholder: ops.placeholder || I18n['choose'],
            valueKey: valueKey,
            textKey: textKey,
            parentKey: parentKey,
            map: map,
            list: list,
            expand: false
        });
        var selectedValue = ops.selected || '';
        var data = me['@{get}'](selectedValue);
        // 确认选择的时候再改
        data.selectedText = data.selectedTexts.join('/');
        data.selectedValue = selectedValue;
        me.updater.digest(data);
        me['@{owner.node}'] = $('#' + me.id);
        me['@{owner.node}'].val(selectedValue);
    },
    '@{get}': function (selectedValue) {
        var updater = this.updater;
        var valueKey = updater.get('valueKey'), textKey = updater.get('textKey'), parentKey = updater.get('parentKey'), placeholder = updater.get('placeholder'), map = updater.get('map'), list = updater.get('list');
        var selectedTexts = [], selectedValues = [], groups = [];
        if (!selectedValue || !map[selectedValue]) {
            // 1. 未选中
            // 2. 选中值不在可选列表中
            selectedTexts = [placeholder];
            groups = [list];
        }
        else {
            // 已选中
            var _loop_1 = function (v) {
                var i = map[v];
                selectedTexts.unshift(i[textKey]);
                selectedValues.unshift(i[valueKey] + '');
                if (!i[parentKey]) {
                    // 根节点
                    list.forEach(function (s) {
                        s.cur = false;
                    });
                    i.cur = true;
                    groups.unshift(list);
                }
                else {
                    var siblings = map[i[parentKey]].children;
                    siblings.forEach(function (s) {
                        s.cur = false;
                    });
                    i.cur = true;
                    groups.unshift(siblings);
                    _loop_1(i[parentKey]);
                }
            };
            _loop_1(selectedValue);
        }
        return {
            groups: groups,
            selectedTexts: selectedTexts,
            selectedValues: selectedValues
        };
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id);
    },
    '@{hide}': function (e) {
        var me = this;
        var expand = me.updater.get('expand');
        if (expand) {
            me.updater.digest({
                expand: false
            });
            Monitor['@{remove}'](me);
        }
    },
    '@{show}<click>': function (e) {
        var me = this;
        var updater = me.updater;
        var expand = updater.get('expand'), selectedValue = updater.get('selectedValue');
        if (!expand) {
            // 重新获取数据，可能是切换之后未选择直接失去焦点了
            var data = me['@{get}'](selectedValue);
            data.expand = true;
            updater.digest(data);
            Monitor['@{add}'](me);
        }
    },
    '@{select}<click>': function (e) {
        var me = this;
        var updater = me.updater;
        var selectedValues = updater.get('selectedValues'), valueKey = updater.get('valueKey');
        var gIndex = e.params.gIndex, iIndex = e.params.iIndex;
        var groups = updater.get('groups');
        var list = groups[gIndex];
        var item = list[iIndex];
        item.children = item.children || [];
        if (item.children.length > 0) {
            // 还有子节点
            list.forEach(function (g) {
                g.cur = false;
            });
            item.cur = true;
            groups = groups.slice(0, gIndex + 1);
            // 恢复选中态
            item.children.forEach(function (c) {
                c.cur = (selectedValues.indexOf(c[valueKey] + '') > -1);
            });
            groups.push(item.children);
            updater.digest({
                groups: groups
            });
        }
        else {
            // 选中叶子节点
            var selectedValue = item[valueKey];
            var data = me['@{get}'](selectedValue);
            data.selectedValue = selectedValue;
            data.selectedText = data.selectedTexts.join('/');
            updater.digest(data);
            var event = $.Event('change', {
                item: item,
                selected: selectedValue
            });
            me['@{owner.node}'].val(selectedValue).trigger(event);
            me['@{hide}']();
        }
    }
});

});