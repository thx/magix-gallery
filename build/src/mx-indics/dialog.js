/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/dialog",["magix","mx-popover/index","mx-dragsort/index"],(require,exports,module)=>{
/*Magix*/
require("mx-popover/index");
require("mx-dragsort/index");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-indics_index_","._zs_gallery_mx-indics_index_-setting {\n  position: relative;\n  height: 100%;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-header {\n  width: 100%;\n  height: 60px;\n  padding: 0 24px;\n  background-color: #fff;\n  line-height: 60px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content {\n  position: absolute;\n  top: 60px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow-y: auto;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-line {\n  position: relative;\n  padding: 16px 24px;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-line:nth-of-type(even) {\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-name {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  width: 90px;\n  padding: 8px 0;\n  color: #999;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-item {\n  float: left;\n  padding: 8px 0;\n  white-space: nowrap;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-item ._zs_gallery_mx-indics_index_-field-tip {\n  position: relative;\n  top: 1px;\n  left: 1px;\n  font-size: 14px;\n  color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-parent ._zs_gallery_mx-indics_index_-line {\n  padding-left: 122px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable {\n  padding-right: 240px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-content {\n  right: 240px;\n  border-right: 1px solid var(--color-border);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 240px;\n  height: 98px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header ._zs_gallery_mx-indics_index_-drag-title {\n  height: 60px;\n  line-height: 60px;\n  font-size: 16px;\n  padding-left: 24px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header ._zs_gallery_mx-indics_index_-drag-oper {\n  height: 38px;\n  padding: 0 24px;\n  line-height: 38px;\n  text-align: right;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper {\n  position: absolute;\n  top: 98px;\n  right: 0;\n  bottom: 0;\n  width: 240px;\n  padding: 0 24px 16px 24px;\n  overflow-y: scroll;\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag {\n  height: 30px;\n  margin-bottom: 5px;\n  padding: 0 15px;\n  line-height: 28px;\n  background: #fff;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  cursor: move;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn {\n  display: inline-block;\n  width: 40px;\n  padding-right: 10px;\n  margin-right: 10px;\n  text-align: center;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn ._zs_gallery_mx-indics_index_-setting-show-icon {\n  position: relative;\n  top: 2px;\n  font-size: 18px;\n}\n._zs_gallery_mx-indics_index_-setting-switch-btn {\n  display: inline-block;\n  width: auto;\n}\n[mx-view*=\"mx-indics/index\"] {\n  display: inline-block;\n  vertical-align: middle;\n}\n[mx-view*=\"mx-indics/index\"]:hover ._zs_gallery_mx-indics_index_-setting-show-btn {\n  border-color: var(--border-highlight-hover);\n  color: #333;\n}\n[mx-view*=\"mx-indics/index\"]:hover ._zs_gallery_mx-indics_index_-setting-switch-btn {\n  border-color: var(--border-highlight-hover);\n  color: #333;\n}\n[mx-view*=\"mx-indics/index\"]:hover ._zs_gallery_mx-indics_index_-setting-switch-btn ._zs_gallery_mx-indics_index_-setting-switch-icon {\n  color: var(--border-highlight-hover);\n}\n");
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
} ; var $g = '', $_temp, $p = '', sortable = $$.sortable, hasParent = $$.hasParent, limit = $$.limit, selectedItems = $$.selectedItems, groups = $$.groups, width = $$.width; var $expr, $art, $line; try {
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
    $p += '"><div mxa="_zs_gallerycC:_" class="_zs_gallery_mx-indics_index_-header"><span mxs="_zs_gallerycC:_" class="fontsize-16">选择数据字段</span>';
    $line = 4;
    $art = 'if (limit > 0)';
    ;
    $expr = '<%if (limit > 0) {%>';
    if (limit > 0) {
        ;
        $p += '<span mxa="_zs_gallerycC:a" class="color-9 font-tahoma bold ml10">';
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
    $art = 'if !sortable';
    ;
    $expr = '<%if (!sortable) {%>';
    if (!sortable) {
        ;
        $p += '<a mxs="_zs_gallerycC:a" href="javascript:;" class="link-brand fr" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a>';
        $line = 11;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv mxa="_zs_gallerycC:b" class="_zs_gallery_mx-indics_index_-content">';
    $line = 14;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_ixodqanai$art_i = 0, $art_cxtwqofpa$art_c = groups.length; $art_ixodqanai$art_i < $art_cxtwqofpa$art_c; $art_ixodqanai$art_i++) {    var group = groups[$art_ixodqanai$art_i]%>';
    for (var $art_ixodqanai$art_i = 0, $art_cxtwqofpa$art_c = groups.length; $art_ixodqanai$art_i < $art_cxtwqofpa$art_c; $art_ixodqanai$art_i++) {
        var group = groups[$art_ixodqanai$art_i];
        $p += '<div mxv mxa="_zs_gallerycC:c" class="_zs_gallery_mx-indics_index_-line clearfix">';
        $line = 16;
        $art = 'if group.text';
        ;
        $expr = '<%if (group.text) {%>';
        if (group.text) {
            ;
            $p += '<div mxa="_zs_gallerycC:d" class="_zs_gallery_mx-indics_index_-name">';
            $line = 17;
            $art = '=group.text';
            ;
            $p += ($expr = '<%=group.text%>', $e(group.text)) + '</div>';
            $line = 18;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxv mxa="_zs_gallerycC:e" class="clearfix">';
        $line = 20;
        $art = 'each group.fields as field';
        ;
        $expr = '<%for (var $art_ihysckif$art_i = 0, $art_objinlwrfw$art_obj = group.fields, $art_ccyhtd$art_c = $art_objinlwrfw$art_obj.length; $art_ihysckif$art_i < $art_ccyhtd$art_c; $art_ihysckif$art_i++) {        var field = $art_objinlwrfw$art_obj[$art_ihysckif$art_i]%>';
        for (var $art_ihysckif$art_i = 0, $art_objinlwrfw$art_obj = group.fields, $art_ccyhtd$art_c = $art_objinlwrfw$art_obj.length; $art_ihysckif$art_i < $art_ccyhtd$art_c; $art_ihysckif$art_i++) {
            var field = $art_objinlwrfw$art_obj[$art_ihysckif$art_i];
            $p += '<div mxv class="_zs_gallery_mx-indics_index_-item" style="width: ';
            $line = 21;
            $art = '=width';
            ;
            $p += ($expr = '<%=width%>', $e(width)) + ';"><label mxv ';
            $line = 22;
            $art = 'if ((limit > 0) && (selectedItems.length >= limit) && !field.checked)';
            ;
            $expr = '<%if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {%>';
            if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
                ;
                $p += ' class="cursor-not-allow" ';
                $line = 22;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '><input type="checkbox" name="field" value="';
            $line = 23;
            $art = '=field.value';
            ;
            $p += ($expr = '<%=field.value%>', $e(field.value)) + '" class="checkbox" ';
            $line = 24;
            $art = 'if field.checked';
            ;
            $expr = '<%if (field.checked) {%>';
            if (field.checked) {
                ;
                $p += ' checked="true" ';
                $line = 24;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 25;
            $art = 'if ((limit > 0) && (selectedItems.length >= limit) && !field.checked)';
            ;
            $expr = '<%if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {%>';
            if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
                ;
                $p += ' disabled="true" ';
                $line = 25;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' mx-change="' + $viewId + 'toggle({value:\'';
            $line = 26;
            $art = '=field.value';
            ;
            $p += ($expr = '<%=$eq(field.value)%>', $e($eq(field.value))) + '\',text:\'';
            $line = 26;
            $art = '=field.text';
            ;
            $p += ($expr = '<%=$eq(field.text)%>', $e($eq(field.text))) + '\'})"/>';
            $line = 26;
            $art = '=field.text';
            ;
            $p += ($expr = '<%=field.text%>', $e(field.text)) + '</label>';
            $line = 28;
            $art = 'if field.tip';
            ;
            $expr = '<%if (field.tip) {%>';
            if (field.tip) {
                ;
                $p += '<i class="mc-iconfont _zs_gallery_mx-indics_index_-field-tip" mx-view="mx-popover/index?width=240&content=';
                $line = 32;
                $art = '=field.tip';
                ;
                $p += ($expr = '<%!$eu(field.tip)%>', $eu(field.tip)) + '">&#xe7aa;</i>';
                $line = 33;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 35;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 38;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 40;
    $art = 'if sortable';
    ;
    $expr = '<%if (sortable) {%>';
    if (sortable) {
        ;
        $p += '<div mxs="_zs_gallerycC:b" class="_zs_gallery_mx-indics_index_-drag-header"><div class="_zs_gallery_mx-indics_index_-drag-title">自定义字段</div><div class="_zs_gallery_mx-indics_index_-drag-oper"><span class="color-9 mr10">可拖动排序</span><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a></div></div><div mxa="_zs_gallerycC:f" class="_zs_gallery_mx-indics_index_-drag-wrapper" mx-view="mx-dragsort/index" mx-dragfinish="' + $viewId + 'drag()">';
        $line = 49;
        $art = 'each selectedItems as s';
        ;
        $expr = '<%for (var $art_ivzcsdut$art_i = 0, $art_cblubcc$art_c = selectedItems.length; $art_ivzcsdut$art_i < $art_cblubcc$art_c; $art_ivzcsdut$art_i++) {        var s = selectedItems[$art_ivzcsdut$art_i]%>';
        for (var $art_ivzcsdut$art_i = 0, $art_cblubcc$art_c = selectedItems.length; $art_ivzcsdut$art_i < $art_cblubcc$art_c; $art_ivzcsdut$art_i++) {
            var s = selectedItems[$art_ivzcsdut$art_i];
            $p += '<div class="_zs_gallery_mx-indics_index_-drag" data-value="';
            $line = 50;
            $art = '=s.value';
            ;
            $p += ($expr = '<%=s.value%>', $e(s.value)) + '" data-text="';
            $line = 50;
            $art = '=s.text';
            ;
            $p += ($expr = '<%=s.text%>', $e(s.text)) + '">';
            $line = 50;
            $art = '=s.text';
            ;
            $p += ($expr = '<%=s.text%>', $e(s.text)) + '</div>';
            $line = 51;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 53;
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
        var selected = e.selected || [], fields = e.fields || [], parents = e.parents || [];
        selectedItems = [];
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
            limit: e.limit
        });
        this.viewOptions = e;
    },
    render: function () {
        this.updater.digest({});
    },
    'toggle<change>': function (e) {
        var that = this;
        var checked = e.target.checked;
        var value = e.params.value, text = e.params.text;
        var updater = that.updater;
        var fields = updater.get('fields');
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value == value) {
                fields[i].checked = checked;
                break;
            }
        }
        var selectedItems = updater.get('selectedItems'), sortable = updater.get('sortable');
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
        var drags = $('#' + this.id + ' ._zs_gallery_mx-indics_index_-drag');
        for (var i = 0, len = drags.length; i < len; i++) {
            var drag = $(drags[i]);
            selectedItems.push({
                value: drag.data('value'),
                text: drag.data('text')
            });
        }
        this.updater.digest({
            selectedItems: selectedItems
        });
    },
    'clear<click>': function () {
        var that = this;
        var updater = that.updater;
        var fields = updater.get('fields');
        fields.forEach(function (field) {
            field.checked = false;
        });
        updater.digest({
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