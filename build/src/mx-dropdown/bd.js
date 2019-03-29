/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/bd",["magix","$","../mx-monitor/index","../mx-medusa/util"],(require,exports,module)=>{
/*Magix,$,Monitor,I18n*/

var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-dropdown_index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-dropdown_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-dropdown_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_mx-dropdown_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-dropdown_index_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  position: relative;\n  width: 100%;\n  height: 32px;\n  padding: 0 25px 0 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: 30px;\n  transition: all 0.25s;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  background-color: #fff;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-dropdown-toggle-label {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n  margin-top: -14px;\n  color: #e6e6e6;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-toggle._zs_gallery_mx-dropdown_index_-open ._zs_gallery_mx-dropdown_index_-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_mx-dropdown_index_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  cursor: pointer;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:hover,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-active:focus {\n  color: #4d7fff;\n  background-color: #f6f9ff;\n}\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-link-disabled,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-link-disabled:hover,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-link-disabled:active,\n._zs_gallery_mx-dropdown_index_-item-link._zs_gallery_mx-dropdown_index_-link-disabled:focus {\n  color: #999;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-header-item ._zs_gallery_mx-dropdown_index_-item-link:hover {\n  background-color: transparent;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper {\n  display: none;\n  position: absolute;\n  left: 0;\n  z-index: 99;\n  min-width: 100%;\n  max-width: 200%;\n  border-radius: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-search-wrapper {\n  padding: 10px 10px 0 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-search-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-search-box {\n  width: 100%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu {\n  padding: 8px 10px;\n  overflow: auto;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  padding: 2px 0;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-dropdown-header {\n  height: 26px;\n  line-height: 26px;\n  padding-left: 2px;\n  padding-right: 2px;\n  color: #999;\n  cursor: default;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-bottom {\n  top: 100%;\n  margin-top: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-bottom._zs_gallery_mx-dropdown_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-dropdown_index_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-top {\n  bottom: 100%;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper._zs_gallery_mx-dropdown_index_-top._zs_gallery_mx-dropdown_index_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-dropdown_index_-fade-in-up 0.25s ease-out;\n          animation: _zs_gallery_mx-dropdown_index_-fade-in-up 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group {\n  min-width: 600px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-search-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-search-box {\n  width: 200px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper {\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-menu ._zs_gallery_mx-dropdown_index_-group-wrapper ._zs_gallery_mx-dropdown_index_-dropdown-item {\n  float: left;\n  width: 25%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown,\n[mx-view*=\"mx-dropdown/index\"],\n[mx-view*=\"mx-dropdown/bd\"],\n[mx-view*=\"mx-dropdown/multiple\"] {\n  position: relative;\n  display: inline-block;\n  min-width: 100px;\n  vertical-align: middle;\n}\n._zs_gallery_mx-dropdown_index_-dropdown:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  border-color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-dropdown:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/bd\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle {\n  border-color: #e6e6e6;\n  color: #999;\n  background-color: #eee;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n._zs_gallery_mx-dropdown_index_-dropdown[mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow,\n[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallery_mx-dropdown_index_-dropdown-toggle ._zs_gallery_mx-dropdown_index_-arrow {\n  color: #ccc;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper {\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-left: 18px;\n  padding-right: 18px;\n  line-height: 16px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper {\n  float: left;\n  padding-right: 20px;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper:hover {\n  color: #4d7fff;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper._zs_gallery_mx-dropdown_index_-has-group {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n._zs_gallery_mx-dropdown_index_-footer-wrapper {\n  padding: 10px;\n  border-top: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-dropdown_index_-msg-wrapper {\n  position: relative;\n}\n._zs_gallery_mx-dropdown_index_-msg-wrapper ._zs_gallery_mx-dropdown_index_-msg {\n  position: absolute;\n  top: -1px;\n  left: 18px;\n  white-space: nowrap;\n}\n");
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, selected = $$.selected, selectedText = $$.selectedText; var $expr, $art, $line; try {
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
        $p += ' dropdown-toggle-label-ph ';
        $line = 2;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 3;
    $art = '=selectedText';
    ;
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_gallerya`:_" class="mc-iconfont _zs_gallery_mx-dropdown_index_-arrow">&#xe692;</span></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/bd.html';
    throw msg;
} return $p; },
    init: function (ops) {
        var me = this;
        Monitor['@{setup}']();
        var oNode = $('#' + me.id);
        me['@{owner.node}'] = oNode;
        // 已选中数据
        var selected = ops.selected;
        if ($.isArray(selected)) {
            // 数组，保留初始数据状态，双向绑定原样返回
            me['@{bak.type}'] = 'array';
        }
        else {
            // 字符串
            selected = selected ? (selected + '').split(',') : [];
        }
        var textKey = ops.textKey || 'text';
        var valueKey = ops.valueKey || 'value';
        var list = ops.list || [];
        var hasGroups, parents = ops.parents || [], parentKey = ops.parentKey || 'pValue';
        if (typeof list[0] === 'object') {
            // 本身是个对象
            // 存在分组的情况
            list = list.map(function (item) {
                Magix.mix(item, {
                    text: item[textKey],
                    value: item[valueKey],
                    pValue: item[parentKey]
                });
                return item;
            });
            if (parents.length == 0) {
                hasGroups = false;
                parents = [{
                        text: '组',
                        value: 'all',
                        list: list
                    }];
            }
            else {
                hasGroups = true;
                var groupMap_1 = {};
                list.forEach(function (item) {
                    var pValue = item.pValue;
                    groupMap_1[pValue] = groupMap_1[pValue] || [];
                    groupMap_1[pValue].push(item);
                });
                for (var i = 0; i < parents.length; i++) {
                    var parent = parents[i];
                    var pValue = parent.value;
                    parent.list = groupMap_1[pValue] || [];
                    if (parent.list.length == 0) {
                        parent.splice(i--, 1);
                    }
                }
            }
        }
        else {
            // 直接value列表
            // 无分组
            hasGroups = false;
            list = list.map(function (value) {
                return {
                    text: value,
                    value: value
                };
            });
            parents = [{
                    text: '组',
                    value: 'all',
                    list: list
                }];
        }
        // 多选还是单选
        var multiple = (ops.multiple + '' === 'true');
        var map = Magix.toMap(list, valueKey);
        var selectedItems = [];
        selected.forEach(function (value) {
            var selectedItem = map[selected];
            //未提供选项，或提供的选项不在列表里
            if (!$.isEmptyObject(selectedItem)) {
                selectedItems.push(selectedItem);
            }
        });
        if (!multiple && (selectedItems.length == 0)) {
            // 单选默认选中第一个
            selectedItems = [list[0]];
            for (var i = 0; i < list.length; i++) {
                if (!list[i].disabled) {
                    selectedItems = [list[i]];
                    break;
                }
            }
        }
        // 是否禁用
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me['@{ui.disabled}'] = disabledNode && (disabledNode.length > 0);
        // 相关滚动容器不是window时，支持自定义指定滚动容器
        me['@{scroll.wrapper}'] = ops.scrollWrapper;
        // 初始化
        me['@{pos.init}'] = false;
        me.updater.set({
            viewId: me.id,
            searchbox: (ops.searchbox + '') === 'true',
            multiple: multiple,
            emptyText: ops.emptyText || I18n['choose'],
            hasGroups: hasGroups,
            parents: parents,
            selectedItems: selectedItems,
            expand: false,
            height: (ops.height || 250),
            spm: me['@{owner.node}'].attr('data-spm-click') || '' //埋点
        });
        me.on('destroy', function () {
            me['@{owner.node}'].off('mouseenter mouseleave');
            if (me['@{dealy.show.timer}']) {
                clearTimeout(me['@{dealy.show.timer}']);
            }
            if (me['@{dealy.hide.timer}']) {
                clearTimeout(me['@{dealy.hide.timer}']);
            }
            $('#dd_bd_' + me.id).remove();
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
        // trigger方式，click，hover，默认click
        me['@{trigger.type}'] = ops.triggerType || 'click';
        switch (me['@{trigger.type}']) {
            case 'click':
                oNode.on('click', function () {
                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(function () {
                        var expand = me.updater.get('expand');
                        if (expand) {
                            me['@{hide}']();
                        }
                        else if (!me['@{ui.disabled}']) {
                            me['@{show}']();
                        }
                    }), me.constants.showDelay);
                });
                break;
            case 'hover':
                oNode.hover(function () {
                    clearTimeout(me['@{dealy.hide.timer}']);
                    me['@{dealy.show.timer}'] = setTimeout(me.wrapAsync(function () {
                        if (!me['@{ui.disabled}']) {
                            me['@{show}'](); //等待内容显示
                        }
                    }), me.constants.showDelay);
                }, function () {
                    me['@{delay.hide}']();
                });
                break;
        }
        me.bindScroll();
    },
    render: function () {
        this.updater.digest({});
        this['@{val}']();
    },
    '@{val}': function (fire) {
        var me = this;
        var selectedItems = me.updater.get('selectedItems');
        var texts = [], values = [];
        selectedItems.forEach(function (item) {
            texts.push(item.text);
            values.push(item.value);
        });
        var emptyText = me.updater.get('emptyText');
        me.updater.digest({
            selectedText: texts.join(',') || emptyText
        });
        var val;
        if (me['@{bak.type}'] == 'array') {
            // 初始化为数组
            val = values;
        }
        else {
            // 初始化为字符串
            val = values.join(',');
        }
        me['@{owner.node}'].val(val);
        if (fire) {
            me['@{owner.node}'].trigger({
                type: 'change',
                selected: val,
                values: values,
                texts: texts,
                value: values.join(','),
                text: texts.join(',')
            });
        }
    },
    '@{init}': function () {
        var me = this;
        var toggleNode = $('#' + me.id + ' ._zs_gallery_mx-dropdown_index_-dropdown-toggle');
        var posWidth = toggleNode.outerWidth(), vId = me.id;
        var minWidth = posWidth, maxWidth = posWidth * 2;
        var ddNode = "<div class=\"_zs_gallery_mx-dropdown_index_-dropdown-menu-wrapper _zs_gallery_mx-dropdown_index_-bottom\" id=\"dd_bd_" + vId + "\"\n                style=\"min-width: " + minWidth + "px; max-width: " + maxWidth + "px;\"></div>";
        $(document.body).append(ddNode);
        // 先实例化，绑定事件，再加载对应的view
        var vf = me.owner.mountVframe('dd_bd_' + vId, '');
        vf.on('created', function () {
            var ddNode = me['@{setPos}']();
            var triggerType = me['@{trigger.type}'];
            if (triggerType == 'hover') {
                ddNode.hover(function () {
                    clearTimeout(me['@{dealy.hide.timer}']);
                }, function () {
                    me['@{delay.hide}']();
                });
            }
        });
        me['@{content.vf}'] = vf;
    },
    '@{inside}': function (node) {
        return Magix.inside(node, this.id) || Magix.inside(node, 'dd_bd_' + this.id);
    },
    '@{show}': function () {
        var me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        if (!me['@{pos.init}']) {
            me['@{pos.init}'] = true;
            me['@{init}']();
        }
        var data = me.updater.get();
        if (data.expand) {
            return;
        }
        me['@{content.vf}'].mountView('mx-dropdown/content', {
            data: data,
            submit: function (result) {
                me['@{hide}']();
                me.updater.set(result);
                me['@{val}'](true);
            },
            cancel: function () {
                me['@{hide}']();
            }
        });
        me.updater.digest({
            expand: true
        });
        // 每次show时都重新定位
        var ddNode = me['@{setPos}']();
        ddNode.addClass('_zs_gallery_mx-dropdown_index_-open');
        Monitor['@{add}'](me);
    },
    '@{delay.hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.show.timer}']);
        clearTimeout(me['@{dealy.hide.timer}']);
        me['@{dealy.hide.timer}'] = setTimeout(me.wrapAsync(function () {
            me['@{hide}']();
        }), me.constants.hideDelay);
        Monitor['@{remove}'](me);
    },
    '@{hide}': function () {
        var me = this;
        clearTimeout(me['@{dealy.hide.timer}']);
        var expand = me.updater.get('expand');
        if (!expand) {
            return;
        }
        me.updater.digest({
            expand: false
        });
        var ddNode = $('#dd_bd_' + me.id);
        ddNode.removeClass('_zs_gallery_mx-dropdown_index_-open');
        Monitor['@{remove}'](me);
    },
    bindScroll: function () {
        var me = this;
        var scrollWrapper = me['@{scroll.wrapper}'];
        if (!scrollWrapper) {
            return;
        }
        var wrapper;
        if ((typeof scrollWrapper == 'string') && !(/^#/.test(scrollWrapper)) && !(/^\./.test(scrollWrapper))) {
            wrapper = $('#' + scrollWrapper);
        }
        else {
            wrapper = $(scrollWrapper);
        }
        wrapper.scroll(function () {
            var expand = me.updater.get('expand');
            if (expand) {
                me['@{setPos}']();
            }
        });
    },
    '@{setPos}': function () {
        var me = this;
        var oNode = me['@{owner.node}'];
        var ddNode = $('#dd_bd_' + me.id);
        if (!ddNode || !ddNode.length) {
            return;
        }
        var width = oNode.outerWidth();
        var height = oNode.outerHeight();
        var offset = oNode.offset();
        var rWidth = ddNode.outerWidth();
        var rHeight = ddNode.outerHeight();
        var top = offset.top + height;
        left = offset.left - (rWidth - width) / 2;
        ddNode.css({
            left: left,
            top: top
        });
        return ddNode;
    },
    /**
     * 页面滚动的时候，重新定位
     */
    '$win<scroll>': function (e) {
        var me = this;
        var expand = me.updater.get('expand');
        if (expand) {
            me['@{setPos}']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>': function (e) {
        var me = this;
        var expand = me.updater.get('expand');
        if (expand) {
            me['@{setPos}']();
        }
    },
    constants: {
        showDelay: 100,
        hideDelay: 200
    }
});

});