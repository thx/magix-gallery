/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/multiple",["magix","$","../mx-util/monitor","../mx-medusa/util","mx-checkbox/index"],(require,exports,module)=>{
/*Magix,$,Monitor,I18n*/
require("mx-checkbox/index");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-util/monitor");
var I18n = require("../mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-dropdown_index_","._zs_gallery_mx-dropdown_index_-dropdown-menu-group {\n  min-width: 600px;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-group-item {\n  float: left;\n  width: 25%;\n}\n._zs_gallery_mx-dropdown_index_-dropdown-menu-group ._zs_gallery_mx-dropdown_index_-dropdown-group-wrapper {\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper {\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-left: 18px;\n  padding-right: 18px;\n  line-height: 16px;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper {\n  float: left;\n  padding-right: 20px;\n  color: #999;\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper ._zs_gallery_mx-dropdown_index_-oper:hover {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-dropdown_index_-oper-wrapper._zs_gallery_mx-dropdown_index_-has-group {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, expand = $$.expand, selectedText = $$.selectedText, placementClass = $$.placementClass, over = $$.over, menuStyles = $$.menuStyles, rList = $$.rList, searchbox = $$.searchbox, text = $$.text, keyword = $$.keyword, max = $$.max, imme = $$.imme, needAll = $$.needAll, hasGroups = $$.hasGroups, spm = $$.spm, allHide = $$.allHide, height = $$.height, groups = $$.groups, errMsg = $$.errMsg; var $expr, $art, $line; try {
    $p += '<div id="toggle_';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" class="mx-trigger ';
    $line = 1;
    $art = 'if expand';
    ;
    $expr = '<%if (expand) {%>';
    if (expand) {
        ;
        $p += ' mx-trigger-open ';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><span mxa="_zs_gallerya?:_" class="mx-trigger-label">';
    $line = 2;
    $art = '=selectedText';
    ;
    $p += ($expr = '<%=selectedText%>', $e(selectedText)) + '</span><span mxs="_zs_gallerya?:_" class="mc-iconfont mx-trigger-arrow">&#xe692;</span></div><div mxv id="menu_';
    $line = 5;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" class="mx-output ';
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
        $p += ' mx-output-open ';
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
            $p += '<div mxv mxa="_zs_gallerya?:a" class="mx-output-search"><div mxv class="search-box" style="';
            $line = 10;
            $art = 'if over';
            ;
            $expr = '<%if (over) {%>';
            if (over) {
                ;
                $p += ' width: 200px; ';
                $line = 10;
                $art = 'else';
                ;
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += ' width: 100%; ';
                $line = 10;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '"><i mxs="_zs_gallerya?:a" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="';
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
            $p += '<div mxv class="mx-output-list" id="list_';
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
            $expr = '<%for (var groupIndex = 0, $art_cikscqardo$art_c = groups.length; groupIndex < $art_cikscqardo$art_c; groupIndex++) {            var group = groups[groupIndex]%>';
            for (var groupIndex = 0, $art_cikscqardo$art_c = groups.length; groupIndex < $art_cikscqardo$art_c; groupIndex++) {
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
                        $p += '<div mxa="_zs_gallerya?:e" class="clearfix"><div title="';
                        $line = 50;
                        $art = '=group.text';
                        ;
                        $p += ($expr = '<%=group.text%>', $e(group.text)) + '" class="mx-output-item _zs_gallery_mx-dropdown_index_-dropdown-group-item"><label mxa="_zs_gallerya?:f" class="mx-output-link"><span mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{checkGroup}({groupIndex:\'';
                        $line = 57;
                        $art = '=groupIndex';
                        ;
                        $p += ($expr = '<%=$eq(groupIndex)%>', $e($eq(groupIndex))) + '\'})" data-spm-click="';
                        $line = 58;
                        $art = '=spm';
                        ;
                        $p += ($expr = '<%=spm%>', $e(spm)) + '" mx-view="mx-checkbox/index?disabled=';
                        $line = 53;
                        $art = '=((max > 0) && (imme.length >= max))';
                        ;
                        $p += ($expr = '<%!$eu(((max > 0) && (imme.length >= max)))%>', $eu(((max > 0) && (imme.length >= max)))) + '&indeterminate=';
                        $line = 54;
                        $art = '=(group.type==2)';
                        ;
                        $p += ($expr = '<%!$eu((group.type == 2))%>', $eu((group.type == 2))) + '&checked=';
                        $line = 55;
                        $art = '=(group.type==3)';
                        ;
                        $p += ($expr = '<%!$eu((group.type == 3))%>', $eu((group.type == 3))) + '"></span>';
                        $line = 58;
                        $art = '=group.text';
                        ;
                        $p += ($expr = '<%=group.text%>', $e(group.text)) + '</label></div></div>';
                        $line = 62;
                        $art = 'else';
                        ;
                        $expr = '<%}                else {%>';
                    }
                    else {
                        ;
                        $p += '<div class="mx-output-header" title="';
                        $line = 63;
                        $art = '=group.text';
                        ;
                        $p += ($expr = '<%=group.text%>', $e(group.text)) + '">';
                        $line = 63;
                        $art = '=group.text';
                        ;
                        $p += ($expr = '<%=group.text%>', $e(group.text)) + '</div>';
                        $line = 64;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' ';
                    $line = 65;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '<div mxv mxa="_zs_gallerya?:g" class="clearfix _zs_gallery_mx-dropdown_index_-dropdown-group-wrapper">';
                $line = 67;
                $art = 'each group.list as item';
                ;
                $expr = '<%for (var $art_ixkzyxv$art_i = 0, $art_objmeggs$art_obj = group.list, $art_cckyjkfsn$art_c = $art_objmeggs$art_obj.length; $art_ixkzyxv$art_i < $art_cckyjkfsn$art_c; $art_ixkzyxv$art_i++) {                var item = $art_objmeggs$art_obj[$art_ixkzyxv$art_i]%>';
                for (var $art_ixkzyxv$art_i = 0, $art_objmeggs$art_obj = group.list, $art_cckyjkfsn$art_c = $art_objmeggs$art_obj.length; $art_ixkzyxv$art_i < $art_cckyjkfsn$art_c; $art_ixkzyxv$art_i++) {
                    var item = $art_objmeggs$art_obj[$art_ixkzyxv$art_i];
                    $p += ' ';
                    $line = 68;
                    $art = 'if !item.hide';
                    ;
                    $expr = '<%if (!item.hide) {%>';
                    if (!item.hide) {
                        ;
                        $p += '<div mxv class="mx-output-item _zs_gallery_mx-dropdown_index_-dropdown-group-item" title="';
                        $line = 69;
                        $art = '=item.text';
                        ;
                        $p += ($expr = '<%=item.text%>', $e(item.text)) + '"><label mxv for="';
                        $line = 70;
                        $art = '=viewId';
                        ;
                        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
                        $line = 70;
                        $art = '=item.value';
                        ;
                        $p += ($expr = '<%=item.value%>', $e(item.value)) + '" class="mx-output-link"><input type="checkbox" class="checkbox" ';
                        $line = 72;
                        $art = 'if !item.checked && (max > 0) && (imme.length >= max)';
                        ;
                        $expr = '<%if (!item.checked && (max > 0) && (imme.length >= max)) {%>';
                        if (!item.checked && (max > 0) && (imme.length >= max)) {
                            ;
                            $p += ' disabled="true" ';
                            $line = 72;
                            $art = '/if';
                            ;
                            $expr = '<%}%>';
                        }
                        ;
                        $p += ' ';
                        $line = 73;
                        $art = 'if item.checked';
                        ;
                        $expr = '<%if (item.checked) {%>';
                        if (item.checked) {
                            ;
                            $p += ' checked="true" ';
                            $line = 73;
                            $art = '/if';
                            ;
                            $expr = '<%}%>';
                        }
                        ;
                        $p += ' id="';
                        $line = 74;
                        $art = '=viewId';
                        ;
                        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
                        $line = 74;
                        $art = '=item.value';
                        ;
                        $p += ($expr = '<%=item.value%>', $e(item.value)) + '" mx-focusout="' + $viewId + '@{stop}()" mx-change="' + $viewId + '@{checkItem}({groupIndex:\'';
                        $line = 76;
                        $art = '=groupIndex';
                        ;
                        $p += ($expr = '<%=$eq(groupIndex)%>', $e($eq(groupIndex))) + '\',value:\'';
                        $line = 76;
                        $art = '=item.value';
                        ;
                        $p += ($expr = '<%=$eq(item.value)%>', $e($eq(item.value))) + '\'})" data-spm-click="';
                        $line = 77;
                        $art = '=spm';
                        ;
                        $p += ($expr = '<%=spm%>', $e(spm)) + '"/>';
                        $line = 77;
                        $art = '=item.text';
                        ;
                        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</label></div>';
                        $line = 80;
                        $art = '/if';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += ' ';
                    $line = 81;
                    $art = '/each';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 83;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 85;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<div mxa="_zs_gallerya?:h" class="text-center color-9 pt20 pb20">';
            $line = 86;
            $art = '=text.empty';
            ;
            $p += ($expr = '<%=text.empty%>', $e(text.empty)) + '</div>';
            $line = 87;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxa="_zs_gallerya?:i" class="mx-output-footer"><div><a mxa="_zs_gallerya?:j" href="javascript:;" class="btn btn-small btn-brand mr10" mx-click="' + $viewId + '@{submit}({enter:true})">';
        $line = 90;
        $art = '=text.submit';
        ;
        $p += ($expr = '<%=text.submit%>', $e(text.submit)) + '</a><a mxa="_zs_gallerya?:k" href="javascript:;" class="btn btn-small" mx-click="' + $viewId + '@{hide}()">';
        $line = 91;
        $art = '=text.cancel';
        ;
        $p += ($expr = '<%=text.cancel%>', $e(text.cancel)) + '</a></div>';
        $line = 93;
        $art = 'if errMsg';
        ;
        $expr = '<%if (errMsg) {%>';
        if (errMsg) {
            ;
            $p += '<div mxa="_zs_gallerya?:l" class="color-red mt10"><i mxs="_zs_gallerya?:c" class="mc-iconfont displacement-2">&#xe6ad;</i>';
            $line = 96;
            $art = '!errMsg';
            ;
            $p += ($expr = '<%!errMsg%>', $n(errMsg)) + '</div>';
            $line = 98;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 100;
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
        // 支持mx-disabled或者disabled
        me['@{ui.disabled}'] = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');
        // 展开方向
        var placement = ops.placement || 'bottom';
        me['@{ui.placement}'] = "mx-output-" + placement;
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
        var triggerNode = $('#toggle_' + me.id);
        var menuWrapper = $('#menu_' + me.id);
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
            var menuWrapper = $('#menu_' + me.id);
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