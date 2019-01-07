/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/dialog",["magix","mx-popover/index","mx-dragsort/index"],(require,exports,module)=>{
/*Magix*/
require("mx-popover/index");
require("mx-dragsort/index");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-indics_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-indics_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-indics/index\"] {\n  display: inline-block;\n  vertical-align: middle;\n}\n._zs_gallery_mx-indics_index_-setting {\n  position: relative;\n  height: 100%;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-header {\n  width: 100%;\n  height: 60px;\n  padding: 0 24px;\n  background-color: #fff;\n  line-height: 60px;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content {\n  position: absolute;\n  top: 60px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow-y: auto;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-line {\n  padding: 16px 24px;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-line:nth-of-type(even) {\n  background-color: #fafafa;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-name {\n  float: left;\n  padding: 8px 0;\n  color: #999;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-items {\n  float: left;\n  width: 100%;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-items ._zs_gallery_mx-indics_index_-item {\n  float: left;\n  width: 20%;\n  padding: 8px 0;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-content ._zs_gallery_mx-indics_index_-items ._zs_gallery_mx-indics_index_-item ._zs_gallery_mx-indics_index_-field-tip {\n  position: relative;\n  top: 1px;\n  left: 4px;\n  font-size: 14px;\n  color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-parent ._zs_gallery_mx-indics_index_-name {\n  width: 15%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-parent ._zs_gallery_mx-indics_index_-items {\n  width: 85%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-parent ._zs_gallery_mx-indics_index_-items ._zs_gallery_mx-indics_index_-item {\n  width: 25%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-items {\n  width: 100%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-items ._zs_gallery_mx-indics_index_-item {\n  width: 25%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-parent._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-name {\n  width: 20%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-parent._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-items {\n  width: 80%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-parent._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-items ._zs_gallery_mx-indics_index_-item {\n  width: 33%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable {\n  padding-right: 32%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-content {\n  right: 32%;\n  border-right: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 32%;\n  height: 98px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header ._zs_gallery_mx-indics_index_-drag-title {\n  height: 60px;\n  line-height: 60px;\n  font-size: 16px;\n  padding-left: 24px;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-header ._zs_gallery_mx-indics_index_-drag-oper {\n  height: 38px;\n  padding: 0 24px;\n  line-height: 38px;\n  text-align: right;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper {\n  position: absolute;\n  top: 98px;\n  right: 0;\n  bottom: 0;\n  width: 32%;\n  padding: 0 24px 16px 24px;\n  overflow-y: scroll;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag {\n  height: 30px;\n  margin-bottom: 5px;\n  padding: 0 15px;\n  line-height: 28px;\n  background: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  cursor: move;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-indics_index_-setting-btn {\n  position: relative;\n  color: #333;\n}\n._zs_gallery_mx-indics_index_-setting-btn:hover {\n  color: #333;\n  border-color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting-btn:focus {\n  border-color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn {\n  margin-right: 10px;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn ._zs_gallery_mx-indics_index_-setting-show-icon {\n  position: relative;\n  top: 2px;\n}\n._zs_gallery_mx-indics_index_-setting-switch-btn {\n  padding-right: 20px;\n}\n._zs_gallery_mx-indics_index_-setting-switch-btn ._zs_gallery_mx-indics_index_-setting-switch-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 20px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  font-size: 18px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', sortable = $$.sortable, hasParent = $$.hasParent, limit = $$.limit, selectedItems = $$.selectedItems, groups = $$.groups; var $expr, $art, $line; try {
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
    $p += '"><div mxa="_zs_galleryb^:_" class="_zs_gallery_mx-indics_index_-header"><div mxa="_zs_galleryb^:a" class="left"><span mxs="_zs_galleryb^:_" class="fontsize-16">选择数据字段</span>';
    $line = 5;
    $art = 'if (limit > 0)';
    ;
    $expr = '<%if (limit > 0) {%>';
    if (limit > 0) {
        ;
        $p += '<span mxa="_zs_galleryb^:b" class="color-9 font-tahoma bold ml10">';
        $line = 6;
        $art = '=selectedItems.length';
        ;
        $p += ($expr = '<%=selectedItems.length%>', $e(selectedItems.length)) + ' / ';
        $line = 6;
        $art = '=limit';
        ;
        $p += ($expr = '<%=limit%>', $e(limit)) + '</span>';
        $line = 7;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 8;
    $art = 'if !sortable';
    ;
    $expr = '<%if (!sortable) {%>';
    if (!sortable) {
        ;
        $p += '<a mxs="_zs_galleryb^:a" href="javascript:;" class="link-brand fr" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a>';
        $line = 12;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv mxa="_zs_galleryb^:c" class="_zs_gallery_mx-indics_index_-content">';
    $line = 16;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_iwxjyygf$art_i = 0, $art_caerspu$art_c = groups.length; $art_iwxjyygf$art_i < $art_caerspu$art_c; $art_iwxjyygf$art_i++) {    var group = groups[$art_iwxjyygf$art_i]%>';
    for (var $art_iwxjyygf$art_i = 0, $art_caerspu$art_c = groups.length; $art_iwxjyygf$art_i < $art_caerspu$art_c; $art_iwxjyygf$art_i++) {
        var group = groups[$art_iwxjyygf$art_i];
        $p += '<div mxv mxa="_zs_galleryb^:d" class="_zs_gallery_mx-indics_index_-line clearfix">';
        $line = 18;
        $art = 'if group.text';
        ;
        $expr = '<%if (group.text) {%>';
        if (group.text) {
            ;
            $p += '<div mxa="_zs_galleryb^:e" class="_zs_gallery_mx-indics_index_-name">';
            $line = 19;
            $art = '=group.text';
            ;
            $p += ($expr = '<%=group.text%>', $e(group.text)) + '</div>';
            $line = 20;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxv mxa="_zs_galleryb^:f" class="_zs_gallery_mx-indics_index_-items clearfix">';
        $line = 22;
        $art = 'each group.fields as field';
        ;
        $expr = '<%for (var $art_icazawef$art_i = 0, $art_objidquxqrchv$art_obj = group.fields, $art_cemmazeuakg$art_c = $art_objidquxqrchv$art_obj.length; $art_icazawef$art_i < $art_cemmazeuakg$art_c; $art_icazawef$art_i++) {        var field = $art_objidquxqrchv$art_obj[$art_icazawef$art_i]%>';
        for (var $art_icazawef$art_i = 0, $art_objidquxqrchv$art_obj = group.fields, $art_cemmazeuakg$art_c = $art_objidquxqrchv$art_obj.length; $art_icazawef$art_i < $art_cemmazeuakg$art_c; $art_icazawef$art_i++) {
            var field = $art_objidquxqrchv$art_obj[$art_icazawef$art_i];
            $p += '<div mxv mxa="_zs_galleryb^:g" class="_zs_gallery_mx-indics_index_-item"><label mxv ';
            $line = 24;
            $art = 'if ((limit > 0) && (selectedItems.length >= limit) && !field.checked)';
            ;
            $expr = '<%if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {%>';
            if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
                ;
                $p += ' class="cursor-not-allow" ';
                $line = 24;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '><input type="checkbox" name="field" value="';
            $line = 25;
            $art = '=field.value';
            ;
            $p += ($expr = '<%=field.value%>', $e(field.value)) + '" class="checkbox" ';
            $line = 26;
            $art = 'if field.checked';
            ;
            $expr = '<%if (field.checked) {%>';
            if (field.checked) {
                ;
                $p += ' checked="true" ';
                $line = 26;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 27;
            $art = 'if ((limit > 0) && (selectedItems.length >= limit) && !field.checked)';
            ;
            $expr = '<%if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {%>';
            if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
                ;
                $p += ' disabled="true" ';
                $line = 27;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' mx-change="' + $viewId + 'toggle({value:\'';
            $line = 28;
            $art = '=field.value';
            ;
            $p += ($expr = '<%=$eq(field.value)%>', $e($eq(field.value))) + '\',text:\'';
            $line = 28;
            $art = '=field.text';
            ;
            $p += ($expr = '<%=$eq(field.text)%>', $e($eq(field.text))) + '\'})"/>';
            $line = 28;
            $art = '=field.text';
            ;
            $p += ($expr = '<%=field.text%>', $e(field.text)) + '</label>';
            $line = 30;
            $art = 'if field.tip';
            ;
            $expr = '<%if (field.tip) {%>';
            if (field.tip) {
                ;
                $p += '<i class="mc-iconfont _zs_gallery_mx-indics_index_-field-tip" mx-view="mx-popover/index?content=';
                $line = 33;
                $art = '=field.tip';
                ;
                $p += ($expr = '<%!$eu(field.tip)%>', $eu(field.tip)) + '">&#xe629;</i>';
                $line = 34;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 36;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 39;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 41;
    $art = 'if sortable';
    ;
    $expr = '<%if (sortable) {%>';
    if (sortable) {
        ;
        $p += '<div mxs="_zs_galleryb^:b" class="_zs_gallery_mx-indics_index_-drag-header"><div class="_zs_gallery_mx-indics_index_-drag-title">自定义字段</div><div class="_zs_gallery_mx-indics_index_-drag-oper"><span class="color-9 mr10">可拖动排序</span><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a></div></div><div mxa="_zs_galleryb^:h" class="_zs_gallery_mx-indics_index_-drag-wrapper" mx-view="mx-dragsort/index" mx-dragfinish="' + $viewId + 'drag()">';
        $line = 50;
        $art = 'each selectedItems as s';
        ;
        $expr = '<%for (var $art_ijwqwfuvpee$art_i = 0, $art_cojqnix$art_c = selectedItems.length; $art_ijwqwfuvpee$art_i < $art_cojqnix$art_c; $art_ijwqwfuvpee$art_i++) {        var s = selectedItems[$art_ijwqwfuvpee$art_i]%>';
        for (var $art_ijwqwfuvpee$art_i = 0, $art_cojqnix$art_c = selectedItems.length; $art_ijwqwfuvpee$art_i < $art_cojqnix$art_c; $art_ijwqwfuvpee$art_i++) {
            var s = selectedItems[$art_ijwqwfuvpee$art_i];
            $p += '<div class="_zs_gallery_mx-indics_index_-drag" data-value="';
            $line = 51;
            $art = '=s.value';
            ;
            $p += ($expr = '<%=s.value%>', $e(s.value)) + '" data-text="';
            $line = 51;
            $art = '=s.text';
            ;
            $p += ($expr = '<%=s.text%>', $e(s.text)) + '">';
            $line = 51;
            $art = '=s.text';
            ;
            $p += ($expr = '<%=s.text%>', $e(s.text)) + '</div>';
            $line = 52;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 54;
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
        var sortable = e.sortable;
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
            // 可排序：一行三个
            // 不可排序：一行四个
            var gap = sortable ? 4 : 5;
            var num = Math.ceil(fields.length / gap);
            for (var i = 0; i < num; i++) {
                var group = {
                    fields: fields.slice(i * gap, (i + 1) * gap)
                };
                groups.push(group);
            }
            hasParent = false;
        }
        this.updater.set({
            hasParent: hasParent,
            sortable: sortable,
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