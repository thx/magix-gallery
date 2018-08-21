/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/dialog",["magix","zs_scaffold/view","mx-indics/fields","../../gallery/mx-dragsort/index"],(require,exports,module)=>{
/*Magix,View,Fields*/
require("../../gallery/mx-dragsort/index");
var Magix = require("magix");
var View = require("zs_scaffold/view");
var Fields = require("mx-indics/fields");
Magix.applyStyle("_zs_gallery_mx-indics_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-indics_index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-indics_index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-indics_index_-header,\n._zs_gallery_mx-indics_index_-footer {\n  position: relative;\n  height: 60px;\n  padding: 0 18px;\n  background-color: #fff;\n}\n._zs_gallery_mx-indics_index_-header {\n  line-height: 60px;\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-footer {\n  padding-top: 14px;\n  border-top: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-sortable {\n  padding-right: 32%;\n}\n._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 32%;\n  height: 100%;\n  padding-left: 18px;\n}\n._zs_gallery_mx-indics_index_-setting {\n  position: relative;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line {\n  padding: 26px 18px;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line:nth-of-type(even) {\n  background-color: #fafafa;\n}\n._zs_gallery_mx-indics_index_-setting ._zs_gallery_mx-indics_index_-left ._zs_gallery_mx-indics_index_-line ._zs_gallery_mx-indics_index_-item {\n  float: left;\n  width: 33%;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-left {\n  border-right: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right {\n  background-color: #fafafa;\n  padding-top: 56px;\n  padding-bottom: 18px;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-oper {\n  position: absolute;\n  top: 18px;\n  left: 18px;\n  right: 18px;\n  text-align: right;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-wrapper {\n  height: 100%;\n  overflow-y: scroll;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag {\n  height: 30px;\n  margin-right: 18px;\n  margin-bottom: 5px;\n  padding: 0 15px;\n  line-height: 28px;\n  background: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  cursor: move;\n}\n._zs_gallery_mx-indics_index_-setting._zs_gallery_mx-indics_index_-sortable ._zs_gallery_mx-indics_index_-right ._zs_gallery_mx-indics_index_-drag-wrapper ._zs_gallery_mx-indics_index_-drag:last-child {\n  margin-bottom: 0;\n}\n._zs_gallery_mx-indics_index_-setting-btn {\n  color: #999;\n}\n._zs_gallery_mx-indics_index_-setting-btn:hover,\n._zs_gallery_mx-indics_index_-setting-btn:focus,\n._zs_gallery_mx-indics_index_-setting-btn:active,\n._zs_gallery_mx-indics_index_-setting-btn:visited {\n  color: #666;\n  border-color: #ccc;\n}\n._zs_gallery_mx-indics_index_-setting-switch-icon {\n  margin-left: 4px;\n  font-size: 12px;\n}\n");
module.exports = View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, sortable = $$.sortable, limit = $$.limit, selected = $$.selected, groups = $$.groups, error = $$.error; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-indics_index_-header ';
    $line = 1;
    $art = 'if sortable';
    ;
    $p += '';
    $expr = '<%if(sortable){%>';
    if (sortable) {
        ;
        $p += '_zs_gallery_mx-indics_index_-sortable';
        $line = 1;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '"><div mxa="_zs_gallerya/:_" class="_zs_gallery_mx-indics_index_-left"><span mxs="_zs_gallerya/:_" class="fontsize-16">选择数据字段</span>';
    $line = 4;
    $art = 'if (limit > 0)';
    ;
    $p += '';
    $expr = '<%if(limit>0){%>';
    if (limit > 0) {
        ;
        $p += '<span mxa="_zs_gallerya/:a" class="color-9 font-tahoma bold ml10">';
        $line = 5;
        $art = '=selected.length';
        ;
        $p += '' + ($expr = '<%=selected.length%>', $e(selected.length)) + ' / ';
        $line = 5;
        $art = '=limit';
        ;
        $p += '' + ($expr = '<%=limit%>', $e(limit)) + '</span>';
        $line = 6;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += ' ';
    $line = 7;
    $art = 'if !sortable';
    ;
    $p += '';
    $expr = '<%if(!sortable){%>';
    if (!sortable) {
        ;
        $p += '<a mxs="_zs_gallerya/:a" href="javascript:;" class="link-brand fr" mx-click="' + $viewId + 'clear()"><i class="iconfont displacement-2">&#xe72e;</i>清空</a>';
        $line = 11;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 13;
    $art = 'if sortable';
    ;
    $p += '';
    $expr = '<%if(sortable){%>';
    if (sortable) {
        ;
        $p += '<div mxs="_zs_gallerya/:b" class="_zs_gallery_mx-indics_index_-right"><span class="fontsize-16">自定义字段</span></div>';
        $line = 17;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxv class="_zs_gallery_mx-indics_index_-setting ';
    $line = 19;
    $art = 'if sortable';
    ;
    $p += '';
    $expr = '<%if(sortable){%>';
    if (sortable) {
        ;
        $p += '_zs_gallery_mx-indics_index_-sortable';
        $line = 19;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '"><div mxv mxa="_zs_gallerya/:b" class="_zs_gallery_mx-indics_index_-left">';
    $line = 21;
    $art = 'each groups as group';
    ;
    $p += '';
    $expr = '<%for(var $art_iriwklne$art_i=0;$art_iriwklne$art_i<groups.length;$art_iriwklne$art_i++){var group=groups[$art_iriwklne$art_i]%>';
    for (var $art_iriwklne$art_i = 0; $art_iriwklne$art_i < groups.length; $art_iriwklne$art_i++) {
        var group = groups[$art_iriwklne$art_i];
        $p += '<div mxv mxa="_zs_gallerya/:c" class="_zs_gallery_mx-indics_index_-line clearfix">';
        $line = 23;
        $art = 'each group as field';
        ;
        $p += '';
        $expr = '<%for(var $art_idrxgid$art_i=0;$art_idrxgid$art_i<group.length;$art_idrxgid$art_i++){var field=group[$art_idrxgid$art_i]%>';
        for (var $art_idrxgid$art_i = 0; $art_idrxgid$art_i < group.length; $art_idrxgid$art_i++) {
            var field = group[$art_idrxgid$art_i];
            $p += '<div mxv mxa="_zs_gallerya/:d" class="_zs_gallery_mx-indics_index_-item"><label mxv ';
            $line = 25;
            $art = 'if ((limit > 0) && (selected.length >= limit) && !field.checked)';
            ;
            $p += '';
            $expr = '<%if((limit>0)&&(selected.length>=limit)&&!field.checked){%>';
            if ((limit > 0) && (selected.length >= limit) && !field.checked) {
                ;
                $p += ' class="cursor-not-allow" ';
                $line = 25;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += '><input type="checkbox" name="field" value="';
            $line = 26;
            $art = '=field.key';
            ;
            $p += '' + ($expr = '<%=field.key%>', $e(field.key)) + '" class="checkbox" ';
            $line = 27;
            $art = 'if field.checked';
            ;
            $p += '';
            $expr = '<%if(field.checked){%>';
            if (field.checked) {
                ;
                $p += ' checked="true" ';
                $line = 27;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 28;
            $art = 'if ((limit > 0) && (selected.length >= limit) && !field.checked)';
            ;
            $p += '';
            $expr = '<%if((limit>0)&&(selected.length>=limit)&&!field.checked){%>';
            if ((limit > 0) && (selected.length >= limit) && !field.checked) {
                ;
                $p += ' disabled="true" ';
                $line = 28;
                $art = '/if';
                ;
                $p += '';
                $expr = '<%}%>';
            }
            ;
            $p += ' mx-change="' + $viewId + 'toggle({key:\'';
            $line = 29;
            $art = '=field.key';
            ;
            $p += '' + ($expr = '<%=$eq(field.key)%>', $e($eq(field.key))) + '\',label:\'';
            $line = 29;
            $art = '=field.label';
            ;
            $p += '' + ($expr = '<%=$eq(field.label)%>', $e($eq(field.label))) + '\'})"/>';
            $line = 29;
            $art = '=field.label';
            ;
            $p += '' + ($expr = '<%=field.label%>', $e(field.label)) + '</label></div>';
            $line = 32;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 34;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 36;
    $art = 'if sortable';
    ;
    $p += '';
    $expr = '<%if(sortable){%>';
    if (sortable) {
        ;
        $p += '<div mxa="_zs_gallerya/:e" class="_zs_gallery_mx-indics_index_-right"><div mxs="_zs_gallerya/:c" class="_zs_gallery_mx-indics_index_-drag-oper"><span class="color-9 mr10">可拖动排序</span><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'clear()"><i class="iconfont displacement-2">&#xe72e;</i>清空</a></div><div mxa="_zs_gallerya/:f" class="_zs_gallery_mx-indics_index_-drag-wrapper" mx-view="../../gallery/mx-dragsort/index" mx-dragfinish="' + $viewId + 'drag()">';
        $line = 43;
        $art = 'each selected as s';
        ;
        $p += '';
        $expr = '<%for(var $art_inrzzloc$art_i=0;$art_inrzzloc$art_i<selected.length;$art_inrzzloc$art_i++){var s=selected[$art_inrzzloc$art_i]%>';
        for (var $art_inrzzloc$art_i = 0; $art_inrzzloc$art_i < selected.length; $art_inrzzloc$art_i++) {
            var s = selected[$art_inrzzloc$art_i];
            $p += '<div class="_zs_gallery_mx-indics_index_-drag" data-key="';
            $line = 44;
            $art = '=s.key';
            ;
            $p += '' + ($expr = '<%=s.key%>', $e(s.key)) + '" data-label="';
            $line = 44;
            $art = '=s.label';
            ;
            $p += '' + ($expr = '<%=s.label%>', $e(s.label)) + '">';
            $line = 44;
            $art = '=s.label';
            ;
            $p += '' + ($expr = '<%=s.label%>', $e(s.label)) + '</div>';
            $line = 45;
            $art = '/each';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 48;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerya/:g" class="_zs_gallery_mx-indics_index_-footer"><a mxs="_zs_gallerya/:d" href="javascript:;" class="min-width-60 btn btn-brand mr10" mx-click="' + $viewId + 'submit()">确定</a><a mxs="_zs_gallerya/:e" href="javascript:;" class="min-width-60 btn mr10" mx-click="' + $viewId + 'cancel()">取消</a>';
    $line = 53;
    $art = 'if error';
    ;
    $p += '';
    $expr = '<%if(error){%>';
    if (error) {
        ;
        $p += '<span mxs="_zs_gallerya/:f" class="color-error"><i class="iconfont displacement-2 mr5">&#xe6ad;</i>请至少选择一个指标</span>';
        $line = 55;
        $art = '/if';
        ;
        $p += '';
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
        var fields = Fields.getAllFields();
        var selectedKeys = e.selected || [];
        var selected = [];
        selectedKeys.forEach(function (selectedKey) {
            for (var i = 0; i < fields.length; i++) {
                var field = fields[i];
                if (field.key == selectedKey) {
                    field.checked = true;
                    selected.push({
                        key: field.key,
                        label: field.label
                    });
                    break;
                }
            }
        });
        var groups = [], gap = 3;
        var num = Math.ceil(fields.length / gap);
        for (var i = 0; i < num; i++) {
            groups.push(fields.slice(i * gap, (i + 1) * gap));
        }
        this.updater.set({
            fields: fields,
            groups: groups,
            selected: selected,
            limit: (e.limit || 0),
            sortable: e.sortable || false
        });
        this.viewOptions = e;
    },
    render: function () {
        this.updater.digest({});
    },
    'toggle<change>': function (e) {
        var that = this;
        var checked = e.target.checked;
        var key = e.params.key, label = e.params.label;
        var updater = that.updater;
        var fields = updater.get('fields');
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].key == key) {
                fields[i].checked = checked;
                break;
            }
        }
        var selected = updater.get('selected');
        if (checked) {
            selected.push({
                key: key,
                label: label
            });
        }
        else {
            for (var i = 0; i < selected.length; i++) {
                if (selected[i].key == key) {
                    selected.splice(i, 1);
                    break;
                }
            }
        }
        updater.digest({
            fields: fields,
            selected: selected
        });
    },
    'drag<dragfinish>': function (e) {
        // 重排序之后的
        var selected = [];
        var drags = $('#' + this.id + ' .unfound:setting.less');
        for (var i = 0, len = drags.length; i < len; i++) {
            var drag = $(drags[i]);
            selected.push({
                key: drag.data('key'),
                label: drag.data('label')
            });
        }
        this.updater.digest({
            selected: selected
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
            selected: []
        });
    },
    'submit<click>': function (event) {
        event.preventDefault();
        var selected = this.updater.get('selected');
        if (selected.length == 0) {
            this.updater.digest({
                error: true
            });
            return;
        }
        var selectedKeys = selected.map(function (item) {
            return item.key;
        });
        var viewOptions = this.viewOptions;
        if (viewOptions.dialog) {
            viewOptions.dialog.close();
        }
        if (viewOptions.pageKey) {
            Fields.setMemberConfig(viewOptions.pageKey, selectedKeys);
        }
        if (viewOptions.callback) {
            Magix.toTry(viewOptions.callback(selectedKeys));
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