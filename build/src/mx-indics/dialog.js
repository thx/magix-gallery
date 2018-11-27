/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/dialog",["magix","mx-popover/index","mx-dragsort/index"],(require,exports,module)=>{
/*Magix*/
require("mx-popover/index");
require("mx-dragsort/index");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-indics_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-indics_index_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n[mx-view*=\"mx-indics/index\"] {\n  display: inline-block;\n}\n._zs_gallery_mx-indics_index_-header,\n._zs_gallery_mx-indics_index_-footer {\n  position: relative;\n  height: 60px;\n  padding: 0 18px;\n  background-color: #fff;\n}\n._zs_gallery_mx-indics_index_-header {\n  line-height: 60px;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-footer {\n  padding-top: 14px;\n  border-top: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-sortable {\n  padding-right: 32%;\n}\n._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 32%;\n  height: 100%;\n  padding-left: 18px;\n}\n._zs_gallery_mx-indics_index_-setting {\n  position: relative;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left {\n  max-height: 492px;\n  overflow-y: auto;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line {\n  padding: 18px;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line:nth-of-type(even) {\n  background-color: #fafafa;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line ._zs_gallery_mx-indics_index_-item {\n  float: left;\n  width: 33%;\n  padding: 8px 0;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line ._zs_gallery_mx-indics_index_-item ._zs_gallery_mx-indics_index_-field-tip {\n  position: relative;\n  top: 1px;\n  left: 4px;\n  font-size: 14px;\n  color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-left {\n  min-height: 316px;\n  border-right: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right {\n  background-color: #fafafa;\n  padding-top: 56px;\n  padding-bottom: 18px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-oper {\n  position: absolute;\n  top: 18px;\n  left: 18px;\n  right: 18px;\n  text-align: right;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-wrapper {\n  height: 100%;\n  overflow-y: scroll;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag {\n  height: 30px;\n  margin-right: 18px;\n  margin-bottom: 5px;\n  padding: 0 15px;\n  line-height: 28px;\n  background: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  cursor: move;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-indics_index_-setting-btn {\n  position: relative;\n  color: #999;\n}\n._zs_gallery_mx-indics_index_-setting-btn:hover {\n  color: #666;\n  border-color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting-btn:focus {\n  border-color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn {\n  margin-right: 10px;\n}\n._zs_gallery_mx-indics_index_-setting-show-btn ._zs_gallery_mx-indics_index_-setting-show-icon {\n  position: relative;\n  top: 2px;\n}\n._zs_gallery_mx-indics_index_-setting-switch-btn {\n  padding-right: 20px;\n}\n._zs_gallery_mx-indics_index_-setting-switch-btn ._zs_gallery_mx-indics_index_-setting-switch-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 20px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  font-size: 18px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', sortable = $$.sortable, limit = $$.limit, selectedItems = $$.selectedItems, groups = $$.groups, error = $$.error; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-indics_index_-header ';
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
    $p += '"><div mxa="_zs_gallerybF:_" class="_zs_gallery_mx-indics_index_-left"><span mxs="_zs_gallerybF:_" class="fontsize-16">选择数据字段</span>';
    $line = 4;
    $art = 'if (limit > 0)';
    ;
    $expr = '<%if (limit > 0) {%>';
    if (limit > 0) {
        ;
        $p += '<span mxa="_zs_gallerybF:a" class="color-9 font-tahoma bold ml10">';
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
        $p += '<a mxs="_zs_gallerybF:a" href="javascript:;" class="link-brand fr" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a>';
        $line = 11;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 13;
    $art = 'if sortable';
    ;
    $expr = '<%if (sortable) {%>';
    if (sortable) {
        ;
        $p += '<div mxs="_zs_gallerybF:b" class="_zs_gallery_mx-indics_index_-right"><span class="fontsize-16">自定义字段</span></div>';
        $line = 17;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv class="_zs_gallery_mx-indics_index_-setting ';
    $line = 19;
    $art = 'if sortable';
    ;
    $expr = '<%if (sortable) {%>';
    if (sortable) {
        ;
        $p += '_zs_gallery_mx-indics_index_-sortable';
        $line = 19;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '"><div mxv mxa="_zs_gallerybF:b" class="_zs_gallery_mx-indics_index_-left">';
    $line = 21;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_ibasnmel$art_i = 0, $art_crwqcwtdpc$art_c = groups.length; $art_ibasnmel$art_i < $art_crwqcwtdpc$art_c; $art_ibasnmel$art_i++) {    var group = groups[$art_ibasnmel$art_i]%>';
    for (var $art_ibasnmel$art_i = 0, $art_crwqcwtdpc$art_c = groups.length; $art_ibasnmel$art_i < $art_crwqcwtdpc$art_c; $art_ibasnmel$art_i++) {
        var group = groups[$art_ibasnmel$art_i];
        $p += '<div mxv mxa="_zs_gallerybF:c" class="_zs_gallery_mx-indics_index_-line clearfix">';
        $line = 23;
        $art = 'each group as field';
        ;
        $expr = '<%for (var $art_idlpbjcnoae$art_i = 0, $art_cmrkgpsb$art_c = group.length; $art_idlpbjcnoae$art_i < $art_cmrkgpsb$art_c; $art_idlpbjcnoae$art_i++) {        var field = group[$art_idlpbjcnoae$art_i]%>';
        for (var $art_idlpbjcnoae$art_i = 0, $art_cmrkgpsb$art_c = group.length; $art_idlpbjcnoae$art_i < $art_cmrkgpsb$art_c; $art_idlpbjcnoae$art_i++) {
            var field = group[$art_idlpbjcnoae$art_i];
            $p += '<div mxv mxa="_zs_gallerybF:d" class="_zs_gallery_mx-indics_index_-item"><label mxv ';
            $line = 25;
            $art = 'if ((limit > 0) && (selectedItems.length >= limit) && !field.checked)';
            ;
            $expr = '<%if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {%>';
            if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
                ;
                $p += ' class="cursor-not-allow" ';
                $line = 25;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '><input type="checkbox" name="field" value="';
            $line = 26;
            $art = '=field.value';
            ;
            $p += ($expr = '<%=field.value%>', $e(field.value)) + '" class="checkbox" ';
            $line = 27;
            $art = 'if field.checked';
            ;
            $expr = '<%if (field.checked) {%>';
            if (field.checked) {
                ;
                $p += ' checked="true" ';
                $line = 27;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 28;
            $art = 'if ((limit > 0) && (selectedItems.length >= limit) && !field.checked)';
            ;
            $expr = '<%if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {%>';
            if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
                ;
                $p += ' disabled="true" ';
                $line = 28;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' mx-change="' + $viewId + 'toggle({value:\'';
            $line = 29;
            $art = '=field.value';
            ;
            $p += ($expr = '<%=$eq(field.value)%>', $e($eq(field.value))) + '\',text:\'';
            $line = 29;
            $art = '=field.text';
            ;
            $p += ($expr = '<%=$eq(field.text)%>', $e($eq(field.text))) + '\'})"/>';
            $line = 29;
            $art = '=field.text';
            ;
            $p += ($expr = '<%=field.text%>', $e(field.text)) + '</label>';
            $line = 31;
            $art = 'if field.tip';
            ;
            $expr = '<%if (field.tip) {%>';
            if (field.tip) {
                ;
                $p += '<i class="mc-iconfont _zs_gallery_mx-indics_index_-field-tip" mx-view="mx-popover/index?content=';
                $line = 34;
                $art = '=field.tip';
                ;
                $p += ($expr = '<%!$eu(field.tip)%>', $eu(field.tip)) + '">&#xe629;</i>';
                $line = 35;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 37;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
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
        $p += '<div mxa="_zs_gallerybF:e" class="_zs_gallery_mx-indics_index_-right"><div mxs="_zs_gallerybF:c" class="_zs_gallery_mx-indics_index_-drag-oper"><span class="color-9 mr10">可拖动排序</span><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a></div><div mxa="_zs_gallerybF:f" class="_zs_gallery_mx-indics_index_-drag-wrapper" mx-view="mx-dragsort/index" mx-dragfinish="' + $viewId + 'drag()">';
        $line = 48;
        $art = 'each selectedItems as s';
        ;
        $expr = '<%for (var $art_isimioi$art_i = 0, $art_cljxeyuiak$art_c = selectedItems.length; $art_isimioi$art_i < $art_cljxeyuiak$art_c; $art_isimioi$art_i++) {        var s = selectedItems[$art_isimioi$art_i]%>';
        for (var $art_isimioi$art_i = 0, $art_cljxeyuiak$art_c = selectedItems.length; $art_isimioi$art_i < $art_cljxeyuiak$art_c; $art_isimioi$art_i++) {
            var s = selectedItems[$art_isimioi$art_i];
            $p += '<div class="_zs_gallery_mx-indics_index_-drag" data-value="';
            $line = 49;
            $art = '=s.value';
            ;
            $p += ($expr = '<%=s.value%>', $e(s.value)) + '" data-text="';
            $line = 49;
            $art = '=s.text';
            ;
            $p += ($expr = '<%=s.text%>', $e(s.text)) + '">';
            $line = 49;
            $art = '=s.text';
            ;
            $p += ($expr = '<%=s.text%>', $e(s.text)) + '</div>';
            $line = 50;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 53;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerybF:g" class="_zs_gallery_mx-indics_index_-footer"><a mxs="_zs_gallerybF:d" href="javascript:;" class="min-width-60 btn btn-brand mr10" mx-click="' + $viewId + 'submit()">确定</a><a mxs="_zs_gallerybF:e" href="javascript:;" class="min-width-60 btn mr10" mx-click="' + $viewId + 'cancel()">取消</a>';
    $line = 58;
    $art = 'if error';
    ;
    $expr = '<%if (error) {%>';
    if (error) {
        ;
        $p += '<span mxs="_zs_gallerybF:f" class="color-error"><i class="mc-iconfont displacement-2 mr5">&#xe6ad;</i>请至少选择一个指标</span>';
        $line = 60;
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
        var selected = e.selected || [], fields = e.fields || [], selectedItems = [];
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
        // 分组，一行三个
        var groups = [];
        var gap = 3;
        var num = Math.ceil(fields.length / gap);
        for (var i = 0; i < num; i++) {
            groups.push(fields.slice(i * gap, (i + 1) * gap));
        }
        this.updater.set({
            fields: fields,
            groups: groups,
            selectedItems: selectedItems,
            limit: e.limit,
            sortable: e.sortable
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
    'submit<click>': function (event) {
        event.preventDefault();
        var selectedItems = this.updater.get('selectedItems');
        if (selectedItems.length == 0) {
            this.updater.digest({
                error: true
            });
            return;
        }
        var selected = selectedItems.map(function (item) {
            return item.value;
        });
        var viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
        if (viewOptions.callback) {
            Magix.toTry(viewOptions.callback(selected));
        }
    },
    'cancel<click>': function (event) {
        event.preventDefault();
        var viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
    }
});

});