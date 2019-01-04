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
Magix.applyStyle("_zs_galleryk","._zs_gallerydP{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryj{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryj{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryk{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryk{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryl{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryl{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_gallerym{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_gallerym{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryn{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryn{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerydQ{position:relative;width:100%;height:32px;padding:0 25px 0 10px;border-radius:4px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:30px;transition:all .25s;border:1px solid #e6e6e6}._zs_gallerydQ ._zs_gallerydR{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._zs_gallerydQ ._zs_gallerydR._zs_gallerydS{color:#999}._zs_gallerydQ ._zs_gallerydT{position:absolute;right:0;top:50%;width:28px;height:28px;font-size:28px;line-height:28px;margin-top:-14px;color:#e6e6e6;transition:all .25s}._zs_gallerydQ._zs_gallerydU ._zs_gallerydT{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryaI{display:block;width:100%;padding:0 8px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;transition:all .25s}._zs_galleryaI:hover{background-color:#f0f0f0}._zs_galleryaI._zs_galleryaJ,._zs_galleryaI._zs_galleryaJ:active,._zs_galleryaI._zs_galleryaJ:focus,._zs_galleryaI._zs_galleryaJ:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerydV ._zs_galleryaI:hover{background-color:transparent}._zs_gallerydW{display:none;position:absolute;left:0;z-index:99;min-width:100%;max-width:200%;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydW ._zs_gallerydX{padding:10px 10px 0}._zs_gallerydW ._zs_gallerydX ._zs_gallerydY{width:100%}._zs_gallerydW ._zs_gallerydZ{padding:8px 10px;overflow:auto}._zs_gallerydW ._zs_gallerydZ ._zs_gallerye_{padding:2px 0}._zs_gallerydW ._zs_gallerydZ ._zs_galleryea{padding-left:2px;padding-right:2px;color:#999;cursor:default}._zs_gallerydW._zs_galleryeb{top:100%;margin-top:10px}._zs_gallerydW._zs_galleryeb._zs_gallerydU{display:block;-webkit-animation:_zs_galleryj .25s ease-out;animation:_zs_galleryj .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._zs_gallerydW._zs_galleryec{bottom:100%;margin-bottom:10px}._zs_gallerydW._zs_galleryec._zs_gallerydU{display:block;-webkit-animation:_zs_galleryk .25s ease-out;animation:_zs_galleryk .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._zs_galleryed{min-width:600px}._zs_galleryed ._zs_gallerydX ._zs_gallerydY{width:200px}._zs_galleryed ._zs_gallerydZ ._zs_galleryee{margin-bottom:10px}._zs_galleryed ._zs_gallerydZ ._zs_galleryee ._zs_gallerye_{float:left;width:25%}._zs_galleryef,[mx-view*=\"mx-dropdown/bd\"],[mx-view*=\"mx-dropdown/index\"],[mx-view*=\"mx-dropdown/multiple\"]{position:relative;display:inline-block;min-width:100px;vertical-align:middle}._zs_galleryef:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/bd\"]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallerydQ{border-color:#ccc}._zs_galleryef:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/bd\"]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallerydQ ._zs_gallerydT{color:#ccc}._zs_galleryef[mx-disabled] ._zs_gallerydQ,._zs_galleryef[mx-disabled]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallerydQ,[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallerydQ,[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallerydQ,[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallerydQ,[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallerydQ{border-color:#e6e6e6;color:#999;background-color:#eee;cursor:not-allowed}._zs_galleryef[mx-disabled] ._zs_gallerydQ ._zs_gallerydT,._zs_galleryef[mx-disabled]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/bd\"][mx-disabled] ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/bd\"][mx-disabled]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/index\"][mx-disabled] ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/index\"][mx-disabled]:hover ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/multiple\"][mx-disabled] ._zs_gallerydQ ._zs_gallerydT,[mx-view*=\"mx-dropdown/multiple\"][mx-disabled]:hover ._zs_gallerydQ ._zs_gallerydT{color:#ccc}._zs_galleryeg{padding-top:10px;padding-left:18px;padding-right:18px;line-height:16px}._zs_galleryeg ._zs_galleryeh{float:left;padding-right:20px;color:#999}._zs_galleryeg ._zs_galleryeh:hover{color:#4d7fff}._zs_galleryeg._zs_galleryei{padding-left:12px;padding-right:12px}._zs_galleryej{padding:10px;border-top:1px solid #e6e6e6}");
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
} ; var $g = '', $_temp, $p = '', expand = $$.expand, selected = $$.selected, selectedText = $$.selectedText, placementClass = $$.placementClass, over = $$.over, menuStyles = $$.menuStyles, rList = $$.rList, searchbox = $$.searchbox, text = $$.text, keyword = $$.keyword, max = $$.max, imme = $$.imme, needAll = $$.needAll, hasGroups = $$.hasGroups, spm = $$.spm, viewId = $$.viewId, height = $$.height, groups = $$.groups; $p += '<div class="_zs_gallerydQ '; if (expand) {
    ;
    $p += ' _zs_gallerydU ';
} ; $p += '"><span class="_zs_gallerydR '; if (selected.length == 0) {
    ;
    $p += ' _zs_gallerydS ';
} ; $p += '">' + $e(selectedText) + '</span><span mxs="_zs_galleryaZ:_" class="mc-iconfont _zs_gallerydT">&#xe692;</span></div><div mxv class="_zs_gallerydW ' + $e(placementClass) + ' '; if (expand) {
    ;
    $p += ' _zs_gallerydU ';
} ; $p += ' '; if (over) {
    ;
    $p += ' _zs_galleryed ';
} ; $p += '" '; if (menuStyles) {
    ;
    $p += ' style="' + $e(menuStyles) + '" ';
} ; $p += '>'; if (rList) {
    ;
    $p += ' ';
    if (searchbox) {
        ;
        $p += '<div mxv mxa="_zs_galleryaZ:_" class="_zs_gallerydX"><div mxv mxa="_zs_galleryaZ:a" class="search-box _zs_gallerydY"><i mxs="_zs_galleryaZ:a" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="' + $e(text.search) + '" mx-keyup="' + $viewId + '__e()" mx-paste="' + $viewId + '__e()" mx-change="' + $viewId + '__l()" mx-focusin="' + $viewId + '__l()" mx-focusout="' + $viewId + '__l()" value="' + $e(keyword) + '"/></div>';
        if (max > 0 && over) {
            ;
            $p += '<span mxa="_zs_galleryaZ:b" class="ml10"><span mxs="_zs_galleryaZ:b" class="color-9">已选：</span><span mxa="_zs_galleryaZ:c" class="font-tahoma bold">' + $e(imme.length) + ' / ' + $e(max) + '</span></span>';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += ' ';
    if (!needAll || (max > 0 && !over)) {
        ;
        $p += '<div class="_zs_galleryeg ';
        if (hasGroups) {
            ;
            $p += ' _zs_galleryei ';
        }
        ;
        $p += ' clearfix">';
        if (!needAll) {
            ;
            $p += '<a class="_zs_galleryeh" href="javascript:;" mx-click="' + $viewId + '__bS({checked:true})" data-spm-click="' + $e(spm) + '">' + $e(text.select) + '</a><a class="_zs_galleryeh" href="javascript:;" mx-click="' + $viewId + '__bS({checked:false})" data-spm-click="' + $e(spm) + '">' + $e(text.unselect) + '</a>';
        }
        ;
        $p += ' ';
        if (max > 0 && !over) {
            ;
            $p += '<span ';
            if (!needAll) {
                ;
                $p += ' class="fr" ';
            }
            ;
            $p += '><span mxs="_zs_galleryaZ:b" class="color-9">已选：</span><span mxa="_zs_galleryaZ:d" class="font-tahoma bold">' + $e(imme.length) + ' / ' + $e(max) + '</span></span>';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += '<div mxv class="_zs_gallerydZ" id="list_' + $e(viewId) + '" style="max-height:' + $e(height) + 'px;">';
    for (var groupIndex = 0, $art_cgdizkre$art_c = groups.length; groupIndex < $art_cgdizkre$art_c; groupIndex++) {
        var group = groups[groupIndex];
        $p += ' ';
        if (group.text && !group.hide) {
            ;
            $p += ' ';
            if (group.all) {
                ;
                $p += '<div title="' + $e(group.text) + '" class="_zs_gallerye_ _zs_gallerydV"><label mxa="_zs_galleryaZ:e" class="_zs_galleryaI ellipsis"><span mx-focusout="' + $viewId + '__l()" mx-change="' + $viewId + '__bQ({groupIndex:\'' + $e($eq(groupIndex)) + '\'})" data-spm-click="' + $e(spm) + '" mx-view="mx-checkbox/index?disabled=' + $eu(((max > 0) && (imme.length >= max))) + '&indeterminate=' + $eu((group.type == 2)) + '&checked=' + $eu((group.type == 3)) + '"></span>' + $e(group.text) + '</label></div>';
            }
            else {
                ;
                $p += '<div class="_zs_galleryea ellipsis" title="' + $e(group.text) + '">' + $e(group.text) + '</div>';
            }
            ;
            $p += ' ';
        }
        ;
        $p += '<div mxv mxa="_zs_galleryaZ:f" class="clearfix _zs_galleryee">';
        for (var $art_iomvgzjupuo$art_i = 0, $art_objudjxmgd$art_obj = group.list, $art_cmifphwxc$art_c = $art_objudjxmgd$art_obj.length; $art_iomvgzjupuo$art_i < $art_cmifphwxc$art_c; $art_iomvgzjupuo$art_i++) {
            var item = $art_objudjxmgd$art_obj[$art_iomvgzjupuo$art_i];
            $p += ' ';
            if (!item.hide) {
                ;
                $p += '<div mxv title="' + $e(item.text) + '" class="_zs_gallerye_"><label mxv for="' + $e(viewId) + '_' + $e(item.value) + '" class="_zs_galleryaI ellipsis"><input type="checkbox" class="checkbox" ';
                if (!item.checked && (max > 0) && (imme.length >= max)) {
                    ;
                    $p += ' disabled="true" ';
                }
                ;
                $p += ' ';
                if (item.checked) {
                    ;
                    $p += ' checked="true" ';
                }
                ;
                $p += ' id="' + $e(viewId) + '_' + $e(item.value) + '" mx-focusout="' + $viewId + '__l()" mx-change="' + $viewId + '__bR({groupIndex:\'' + $e($eq(groupIndex)) + '\',value:\'' + $e($eq(item.value)) + '\'})" data-spm-click="' + $e(spm) + '"/>' + $e(item.text) + '</label></div>';
            }
            ;
            $p += ' ';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += '</div><div mxa="_zs_galleryaZ:g" class="_zs_galleryej"><button mxa="_zs_galleryaZ:h" type="button" class="btn btn-small btn-brand mr10" mx-click="' + $viewId + '__aq({enter:true})">' + $e(text.submit) + '</button><button mxa="_zs_galleryaZ:i" type="button" class="btn btn-small" mx-click="' + $viewId + '__m()">' + $e(text.cancel) + '</button></div>';
} ; $p += '</div>'; return $p; },
    init: function (ops) {
        var me = this;
        Monitor['__f']();
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
        });
        me.updater.set({
            viewId: me.id
        });
        var node = $('#' + me.id);
        me['__j'] = node;
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me['__bo'] = disabledNode && (disabledNode.length > 0);
        // 展开方向
        var placementMap = {
            top: '_zs_galleryec',
            bottom: '_zs_galleryeb'
        };
        me['__bL'] = placementMap[ops.placement || 'bottom'];
        // trigger方式，click，hover，默认click
        me['__bv'] = ops.triggerType || 'click';
        var expand = false;
        var emptyText = ops.emptyText || I18n['choose'];
        var allText = ops.name || '';
        var needAll = (ops.needAll + '') === 'false'; //禁用全选功能
        var searchbox = (ops.searchbox + '') === 'true';
        var textKey = ops.textKey || 'text';
        var valueKey = ops.valueKey || 'value';
        var hasGroups = false;
        var groups = [];
        if (!ops.list) {
            var node_1 = me['__j'].children();
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
            // me['@{bak.type}'] = 'array';
            selected = [];
        }
        else {
            if ($.isArray(ops.selected)) {
                me['__bM'] = 'array';
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
        me.updater.set({
            hasGroups: hasGroups,
            viewId: me.id,
            expand: expand,
            emptyText: emptyText,
            allText: allText,
            needAll: needAll,
            searchbox: searchbox,
            map: map,
            selected: selected,
            imme: selected,
            max: ops.max || 0,
            over: (count > 20),
            groups: groups,
            height: ops.height || 400,
            spm: me['__j'].attr('data-spm-click') || '',
            placementClass: me['__bL'],
            text: {
                search: I18n['dropdown.search'],
                select: I18n['select.all'],
                unselect: I18n['unselect.all'],
                submit: I18n['dialog.submit'],
                cancel: I18n['dialog.cancel']
            }
        });
    },
    render: function () {
        var me = this;
        var selected = me.updater.get('selected');
        me.updater.digest({
            selectedText: me['__bN'](selected)
        });
        me['__bO']();
        var triggerType = me['__bv'];
        var triggerNode = $('#' + me.id + ' ._zs_gallerydQ');
        var menuWrapper = $('#' + me.id + ' ._zs_gallerydW');
        switch (triggerType) {
            case 'click':
                triggerNode.on('click', function () {
                    var expand = me.updater.get('expand');
                    if (expand) {
                        me['__m']();
                    }
                    else if (!me['__bo']) {
                        me['__n']();
                    }
                });
                break;
            case 'hover':
                triggerNode.hover(function () {
                    clearTimeout(me['__bu']);
                    me['__n']();
                }, function () {
                    me['__bw']();
                });
                menuWrapper.hover(function () {
                    clearTimeout(me['__bu']);
                }, function () {
                    me['__bw']();
                });
                break;
        }
    },
    '__k': function (node) {
        var me = this;
        return Magix.inside(node, me.id);
    },
    '__bw': function () {
        var me = this;
        clearTimeout(me['__bu']);
        me['__bu'] = setTimeout(me.wrapAsync(function () {
            me['__m']();
        }), 250);
    },
    '__bO': function () {
        var me = this;
        var selected = me.updater.get('selected');
        if (me['__bM'] == 'array') {
            me['__j'].val(selected);
        }
        else {
            me['__j'].val(selected.join(','));
        }
    },
    '__m': function () {
        var me = this;
        var data = me.updater.get();
        if (data.expand) {
            me.updater.digest({
                expand: false
            });
            me['__j'].trigger('focusout');
            Monitor['__g'](me);
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
                selectedText: me['__bN'](selected_1)
            });
            me['__bO']();
        }
    },
    '__n': function () {
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
            var menuWrapper = $('#' + me.id + ' ._zs_gallerydW');
            var win = $(window);
            var winWidth = win.width(), menuOffset = me['__j'].offset(), menuWidth = menuWrapper.outerWidth();
            var menuLeft = void 0;
            if (menuOffset.left + menuWidth > winWidth) {
                menuLeft = Math.min((menuOffset.left + menuWidth - winWidth), menuOffset.left);
            }
            if (menuLeft > 0) {
                d.menuStyles = 'left:' + (0 - menuLeft) + 'px';
            }
            me.updater.digest(d);
            me['__j'].trigger('focusin');
            var listNode = $('#list_' + me.id);
            var active = listNode.find('._zs_galleryaJ');
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
            Monitor['__p'](me);
        }
    },
    '__bN': function (selected) {
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
    '__bI': function (val, callback) {
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
    '__e<keyup,paste>': function (e) {
        var me = this;
        clearTimeout(me['__bK']);
        var val = $.trim(e.eventTarget.value);
        me.updater.set({
            keyword: val
        });
        me['__bK'] = setTimeout(me.wrapAsync(function () {
            if (val != me['__bP']) {
                me['__bI'](me['__bP'] = val, function (groups) {
                    me.updater.digest({
                        groups: groups
                    });
                });
            }
        }), 300);
    },
    '__bR<change>': function (e) {
        e.stopPropagation();
        var me = this;
        var value = e.params.value, groupIndex = e.params.groupIndex, checked = e.target.checked;
        me['__bQ'](groupIndex, value, checked);
    },
    /**
     * 全选的时候注意限制上限
     */
    '__bS<click>': function (e) {
        var me = this;
        var checked = e.params.checked;
        me['__bQ']('all', 'all', checked);
    },
    '__bQ<change>': function (e) {
        e.stopPropagation();
        var me = this;
        var groupIndex = e.params.groupIndex, checked = e.target.checked;
        me['__bQ'](groupIndex, 'all', checked);
    },
    /**
     * 全选的时候注意限制上限
     */
    '__bQ': function (groupIndex, value, checked) {
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
    '__l<change,focusin,focusout>': function (e) {
        e.stopPropagation();
    },
    '__aq<click>': function (e) {
        var me = this;
        var data = me.updater.get();
        var groups = data.groups;
        var selected = [];
        groups.forEach(function (group) {
            group.list.forEach(function (item) {
                if (item.checked) {
                    // 字符串方便判断
                    selected.push(item.value + '');
                }
            });
        });
        me.updater.set({
            selected: selected
        });
        me['__m']();
        var map = data.map;
        var texts = selected.map(function (value) {
            return map[value].text;
        });
        // 确定的时候才更新
        me['__j'].trigger({
            type: 'change',
            texts: texts,
            values: selected,
            selected: $('#' + me.id).val()
        });
    },
    '__m<click>': function (e) {
        this['__m']();
    }
});

});