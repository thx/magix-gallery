/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/dialog",["magix","../mx-util/view","mx-popover/index","mx-dragsort/index"],(require,exports,module)=>{
/*magix_1,View*/
require("mx-popover/index");
require("mx-dragsort/index");
"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var View = require("../mx-util/view");
magix_1["default"].applyStyle("_zs_gallery_mx-indics_index_","._zs_gallery_mx-indics_index_-setting {\n  position: relative;\n  height: 100%;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-header {\n  position: relative;\n  width: 100%;\n  height: 60px;\n  padding: 0 24px;\n  background-color: #fff;\n  line-height: 60px;\n  border-bottom: 1px solid var(--color-border);\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-header ._zs_gallery_mx-indics_index_-header-opers {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0 24px;\n  background-color: #fff;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content {\n  position: absolute;\n  top: 60px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow-y: auto;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-line {\n  position: relative;\n  padding: 16px 24px;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-line:nth-of-type(even) {\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-name {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  width: 90px;\n  padding: 8px 0;\n  color: #999;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-item {\n  float: left;\n  padding: 8px 0;\n  white-space: nowrap;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-item ._zs_gallery_mx-indics_index_-field-tip {\n  position: relative;\n  top: 1px;\n  left: 1px;\n  font-size: 14px;\n  color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-parent ._zs_gallery_mx-indics_index_-line {\n  padding-left: 122px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable {\n  padding-right: 240px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-content {\n  right: 240px;\n  border-right: 1px solid var(--color-border);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 240px;\n  height: 98px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header ._zs_gallery_mx-indics_index_-drag-title {\n  height: 60px;\n  line-height: 60px;\n  padding-left: 24px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header ._zs_gallery_mx-indics_index_-drag-oper {\n  height: 38px;\n  padding: 0 24px;\n  line-height: 38px;\n  text-align: right;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper {\n  position: absolute;\n  top: 98px;\n  right: 0;\n  bottom: 0;\n  width: 240px;\n  padding: 0 24px 16px 24px;\n  overflow-y: auto;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag {\n  height: 30px;\n  margin-bottom: 5px;\n  padding: 0 15px;\n  line-height: 28px;\n  background: #fff;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  cursor: move;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn {\n  display: inline-block;\n  width: 40px;\n  padding-right: 10px;\n  margin-right: 10px;\n  text-align: center;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn ._zs_gallery_mx-indics_index_-setting-show-icon {\n  position: relative;\n  top: 2px;\n  font-size: 18px;\n}\n._zs_gallery_mx-indics_index_-setting-switch-btn {\n  display: inline-block;\n  width: auto;\n}\n[mx-view*=\"mx-indics/index\"] {\n  display: inline-block;\n  vertical-align: middle;\n}\n[mx-view*=\"mx-indics/index\"]:hover ._zs_gallery_mx-indics_index_-setting-show-btn {\n  border-color: var(--border-highlight-hover);\n  color: #333;\n}\n[mx-view*=\"mx-indics/index\"]:hover ._zs_gallery_mx-indics_index_-setting-switch-btn {\n  border-color: var(--border-highlight-hover);\n  color: #333;\n}\n[mx-view*=\"mx-indics/index\"]:hover ._zs_gallery_mx-indics_index_-setting-switch-btn ._zs_gallery_mx-indics_index_-setting-switch-icon {\n  color: var(--border-highlight-hover);\n}\n");
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
} ; var $g = '', $_temp, $p = '', sortable = $$.sortable, hasParent = $$.hasParent, limit = $$.limit, selectedItems = $$.selectedItems, tip = $$.tip, groups = $$.groups, width = $$.width; var $expr, $art, $line; try {
    $p += '<div mxv class="_zs_gallery_mx-indics_index_-setting ';
    $line = 1;
    $art = 'if sortable';
    ;
    $expr = '<%if (sortable) {%>';
    if (sortable) {
        ;
        $p += '_zs_gallery_mx-indics_index_-sortable';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 1;
    $art = 'if hasParent';
    ;
    $expr = '<%if (hasParent) {%>';
    if (hasParent) {
        ;
        $p += '_zs_gallery_mx-indics_index_-parent';
        $line = 1;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><div mxa="_zs_galleryc}:_" class="_zs_gallery_mx-indics_index_-header"><span mxs="_zs_galleryc}:_" class="fontsize-16">选择数据字段</span>';
    $line = 4;
    $art = 'if (limit > 0)';
    ;
    $expr = '<%if (limit > 0) {%>';
    if (limit > 0) {
        ;
        $p += '<span mxa="_zs_galleryc}:a" class="color-9 font-tahoma bold ml10">';
        $line = 5;
        $art = '=selectedItems.length';
        ;
        $p += ($expr = '<%=selectedItems.length%>', $e(selectedItems.length)) + ' / ';
        $line = 5;
        $art = '=limit';
        ;
        $p += ($expr = '<%=limit%>', $e(limit)) + '</span>';
        $line = 6;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 7;
    $art = 'if tip';
    ;
    $expr = '<%if (tip) {%>';
    if (tip) {
        ;
        $p += '<span mxa="_zs_galleryc}:b" class="color-9 ml10">';
        $line = 8;
        $art = '!tip';
        ;
        $p += ($expr = '<%!tip%>', $n(tip)) + '</span>';
        $line = 9;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 10;
    $art = 'if !sortable';
    ;
    $expr = '<%if (!sortable) {%>';
    if (!sortable) {
        ;
        $p += '<span mxs="_zs_galleryc}:a" class="_zs_gallery_mx-indics_index_-header-opers"><a href="javascript:;" class="link-brand mr16" mx-click="' + $viewId + 'reset()"><i class="mc-iconfont displacement-2">&#xe627;</i>恢复默认</a><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a></span>';
        $line = 19;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv mxa="_zs_galleryc}:c" class="_zs_gallery_mx-indics_index_-content">';
    $line = 22;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_ixhypjpicg$art_i = 0, $art_cyscnsawbrc$art_c = groups.length; $art_ixhypjpicg$art_i < $art_cyscnsawbrc$art_c; $art_ixhypjpicg$art_i++) {    var group = groups[$art_ixhypjpicg$art_i]%>';
    for (var $art_ixhypjpicg$art_i = 0, $art_cyscnsawbrc$art_c = groups.length; $art_ixhypjpicg$art_i < $art_cyscnsawbrc$art_c; $art_ixhypjpicg$art_i++) {
        var group = groups[$art_ixhypjpicg$art_i];
        $p += '<div mxv mxa="_zs_galleryc}:d" class="_zs_gallery_mx-indics_index_-line clearfix">';
        $line = 24;
        $art = 'if group.text';
        ;
        $expr = '<%if (group.text) {%>';
        if (group.text) {
            ;
            $p += '<div mxa="_zs_galleryc}:e" class="_zs_gallery_mx-indics_index_-name">';
            $line = 25;
            $art = '=group.text';
            ;
            $p += ($expr = '<%=group.text%>', $e(group.text)) + '</div>';
            $line = 26;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxv mxa="_zs_galleryc}:f" class="clearfix">';
        $line = 28;
        $art = 'each group.fields as field';
        ;
        $expr = '<%for (var $art_ixvlfpbdrsur$art_i = 0, $art_objtlmuxvqi$art_obj = group.fields, $art_cotncnuir$art_c = $art_objtlmuxvqi$art_obj.length; $art_ixvlfpbdrsur$art_i < $art_cotncnuir$art_c; $art_ixvlfpbdrsur$art_i++) {        var field = $art_objtlmuxvqi$art_obj[$art_ixvlfpbdrsur$art_i]%>';
        for (var $art_ixvlfpbdrsur$art_i = 0, $art_objtlmuxvqi$art_obj = group.fields, $art_cotncnuir$art_c = $art_objtlmuxvqi$art_obj.length; $art_ixvlfpbdrsur$art_i < $art_cotncnuir$art_c; $art_ixvlfpbdrsur$art_i++) {
            var field = $art_objtlmuxvqi$art_obj[$art_ixvlfpbdrsur$art_i];
            $p += '<div mxv class="_zs_gallery_mx-indics_index_-item" style="width: ';
            $line = 29;
            $art = '=width';
            ;
            $p += ($expr = '<%=width%>', $e(width)) + ';"><label mxv ';
            $line = 30;
            $art = 'if ((limit > 0) && (selectedItems.length >= limit) && !field.checked)';
            ;
            $expr = '<%if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {%>';
            if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
                ;
                $p += ' class="cursor-not-allow" ';
                $line = 30;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '><input type="checkbox" name="field" value="';
            $line = 31;
            $art = '=field.value';
            ;
            $p += ($expr = '<%=field.value%>', $e(field.value)) + '" class="checkbox" ';
            $line = 32;
            $art = 'if field.checked';
            ;
            $expr = '<%if (field.checked) {%>';
            if (field.checked) {
                ;
                $p += ' checked="true" ';
                $line = 32;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 33;
            $art = 'if ((limit > 0) && (selectedItems.length >= limit) && !field.checked)';
            ;
            $expr = '<%if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {%>';
            if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
                ;
                $p += ' disabled="true" ';
                $line = 33;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' mx-change="' + $viewId + 'toggle({value:\'';
            $line = 34;
            $art = '=field.value';
            ;
            $p += ($expr = '<%=$eq(field.value)%>', $e($eq(field.value))) + '\',text:\'';
            $line = 34;
            $art = '=field.text';
            ;
            $p += ($expr = '<%=$eq(field.text)%>', $e($eq(field.text))) + '\'})"/>';
            $line = 34;
            $art = '=field.text';
            ;
            $p += ($expr = '<%=field.text%>', $e(field.text)) + '</label>';
            $line = 36;
            $art = 'if field.tip';
            ;
            $expr = '<%if (field.tip) {%>';
            if (field.tip) {
                ;
                $p += '<i class="mc-iconfont _zs_gallery_mx-indics_index_-field-tip" mx-view="mx-popover/index?width=240&content=';
                $line = 40;
                $art = '=field.tip';
                ;
                $p += ($expr = '<%!$eu(field.tip)%>', $eu(field.tip)) + '">&#xe7aa;</i>';
                $line = 41;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 43;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 46;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 48;
    $art = 'if sortable';
    ;
    $expr = '<%if (sortable) {%>';
    if (sortable) {
        ;
        $p += '<div mxs="_zs_galleryc}:b" class="_zs_gallery_mx-indics_index_-drag-header"><div class="_zs_gallery_mx-indics_index_-drag-title"><span class="fontsize-16">自定义字段</span><span class="color-9 ml10">可拖动排序</span></div><div class="_zs_gallery_mx-indics_index_-drag-oper"><a href="javascript:;" class="link-brand mr16" mx-click="' + $viewId + 'reset()"><i class="mc-iconfont displacement-2">&#xe627;</i>恢复默认</a><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a></div></div><div mxa="_zs_galleryc}:g" class="_zs_gallery_mx-indics_index_-drag-wrapper" mx-view="mx-dragsort/index" mx-dragfinish="' + $viewId + 'drag()">';
        $line = 64;
        $art = 'each selectedItems as s';
        ;
        $expr = '<%for (var $art_ipjzmxnk$art_i = 0, $art_cekyaa$art_c = selectedItems.length; $art_ipjzmxnk$art_i < $art_cekyaa$art_c; $art_ipjzmxnk$art_i++) {        var s = selectedItems[$art_ipjzmxnk$art_i]%>';
        for (var $art_ipjzmxnk$art_i = 0, $art_cekyaa$art_c = selectedItems.length; $art_ipjzmxnk$art_i < $art_cekyaa$art_c; $art_ipjzmxnk$art_i++) {
            var s = selectedItems[$art_ipjzmxnk$art_i];
            $p += '<div class="_zs_gallery_mx-indics_index_-drag" data-value="';
            $line = 65;
            $art = '=s.value';
            ;
            $p += ($expr = '<%=s.value%>', $e(s.value)) + '" data-text="';
            $line = 65;
            $art = '=s.text';
            ;
            $p += ($expr = '<%=s.text%>', $e(s.text)) + '">';
            $line = 65;
            $art = '=s.text';
            ;
            $p += ($expr = '<%=s.text%>', $e(s.text)) + '</div>';
            $line = 66;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 68;
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
    msg += $expr + '\r\n\tat file:mx-indics/dialog.html';
    throw msg;
} return $p; },
    init: function (e) {
        var selected = e.selected || [], fields = e.fields || [], parents = e.parents || [], selectedItems = [];
        selected.forEach(function (value) {
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                if (field.value == value) {
                    field.checked = true;
                    selectedItems.push({
                        value: field.value,
                        text: field.text
                    });
                    break;
                }
            }
        });
        var lineNumber = e.lineNumber;
        var groups = [], hasParent;
        if (parents.length > 0) {
            // 有分组
            groups = parents.map(function (p) {
                var fs = [];
                fields.forEach(function (f) {
                    if (f.pValue == p.value) {
                        fs.push(f);
                    }
                });
                return {
                    text: p.text,
                    fields: fs
                };
            });
            hasParent = true;
        }
        else {
            var num = Math.ceil(fields.length / lineNumber);
            for (var i = 0; i < num; i++) {
                var group = {
                    fields: fields.slice(i * lineNumber, (i + 1) * lineNumber)
                };
                groups.push(group);
            }
            hasParent = false;
        }
        this.updater.set({
            width: Math.floor(100 / lineNumber) + '%',
            hasParent: hasParent,
            sortable: e.sortable,
            fields: fields,
            groups: groups,
            selectedItems: selectedItems,
            limit: e.limit,
            tip: e.tip
        });
        this.viewOptions = e;
    },
    render: function () {
        this.updater.digest({});
    },
    'toggle<change>': function (e) {
        var that = this;
        var checked = e.target.checked;
        var _a = e.params, value = _a.value, text = _a.text;
        var updater = that.updater;
        var _b = updater.get(), fields = _b.fields, selectedItems = _b.selectedItems, sortable = _b.sortable;
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value == value) {
                fields[i].checked = checked;
                break;
            }
        }
        if (checked) {
            if (sortable) {
                // 可排序的时候在最后添加
                selectedItems.push({
                    value: value,
                    text: text
                });
            }
            else {
                // 不可选择时按照列表顺序
                selectedItems = fields.filter(function (item) {
                    return item.checked;
                });
            }
        }
        else {
            for (var i = 0; i < selectedItems.length; i++) {
                if (selectedItems[i].value == value) {
                    selectedItems.splice(i, 1);
                    break;
                }
            }
        }
        updater.digest({
            fields: fields,
            selectedItems: selectedItems
        });
    },
    'drag<dragfinish>': function (e) {
        // 重排序之后的
        var selectedItems = [];
        var drags = document.querySelectorAll('#' + this.id + ' ._zs_gallery_mx-indics_index_-drag');
        for (var i = 0, len = drags.length; i < len; i++) {
            var attrs = drags[i].attributes;
            selectedItems.push({
                value: attrs['data-value'].value,
                text: attrs['data-text'].value
            });
        }
        this.updater.digest({
            selectedItems: selectedItems
        });
    },
    /**
     * 恢复默认设置
     */
    'reset<click>': function () {
        var that = this;
        // 默认指标        
        var defaults = that.viewOptions.map[1].list;
        var fields = that.updater.get('fields');
        var selectedItems = [];
        fields.forEach(function (field) {
            field.checked = (defaults.indexOf(field.value + '') > -1);
            if (field.checked) {
                selectedItems.push(field);
            }
        });
        that.updater.digest({
            fields: fields,
            selectedItems: selectedItems
        });
    },
    'clear<click>': function () {
        var that = this;
        var fields = that.updater.get('fields');
        fields.forEach(function (field) {
            field.checked = false;
        });
        that.updater.digest({
            fields: fields,
            selectedItems: []
        });
    },
    check: function () {
        event.preventDefault();
        var selectedItems = this.updater.get('selectedItems');
        var selected = selectedItems.map(function (item) {
            return item.value;
        });
        return new Promise(function (resolve) {
            // 此处返回promise，防止有接口提交校验等
            resolve({
                ok: (selected.length > 0),
                msg: '请至少选择一个指标',
                data: {
                    selected: selected
                }
            });
        });
    }
});

});