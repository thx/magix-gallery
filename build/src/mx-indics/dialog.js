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
Magix.applyStyle("_zs_galleryX","._zs_galleryhr{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*=\"mx-indics/index\"]{display:inline-block;vertical-align:middle}._zs_galleryhs{position:relative;height:100%}._zs_galleryhs ._zs_galleryht{width:100%;height:60px;padding:0 24px;background-color:#fff;line-height:60px;border-bottom:1px solid #e6e6e6}._zs_galleryhs ._zs_galleryhu{position:absolute;top:60px;left:0;bottom:0;right:0;overflow-y:auto}._zs_galleryhs ._zs_galleryhu ._zs_galleryhv{padding:16px 24px}._zs_galleryhs ._zs_galleryhu ._zs_galleryhv:nth-of-type(2n){background-color:#fafafa}._zs_galleryhs ._zs_galleryhu ._zs_galleryhw{float:left;padding:8px 0;color:#999}._zs_galleryhs ._zs_galleryhu ._zs_galleryhx{float:left;width:100%}._zs_galleryhs ._zs_galleryhu ._zs_galleryhx ._zs_galleryhy{float:left;width:20%;padding:8px 0}._zs_galleryhs ._zs_galleryhu ._zs_galleryhx ._zs_galleryhy ._zs_galleryhz{position:relative;top:1px;left:4px;font-size:14px;color:#ccc}._zs_galleryhs._zs_galleryhA ._zs_galleryhw{width:15%}._zs_galleryhs._zs_galleryhA ._zs_galleryhx{width:85%}._zs_galleryhs._zs_galleryhA ._zs_galleryhx ._zs_galleryhy{width:25%}._zs_galleryhs._zs_galleryhB ._zs_galleryhx{width:100%}._zs_galleryhs._zs_galleryhB ._zs_galleryhx ._zs_galleryhy{width:25%}._zs_galleryhs._zs_galleryhA._zs_galleryhB ._zs_galleryhw{width:20%}._zs_galleryhs._zs_galleryhA._zs_galleryhB ._zs_galleryhx{width:80%}._zs_galleryhs._zs_galleryhA._zs_galleryhB ._zs_galleryhx ._zs_galleryhy{width:33%}._zs_galleryhs._zs_galleryhB{padding-right:32%}._zs_galleryhs._zs_galleryhB ._zs_galleryhu{right:32%;border-right:1px solid #e6e6e6}._zs_galleryhs._zs_galleryhB ._zs_galleryhC{position:absolute;top:0;right:0;width:32%;height:98px}._zs_galleryhs._zs_galleryhB ._zs_galleryhC ._zs_galleryhD{height:60px;line-height:60px;font-size:16px;padding-left:24px;border-bottom:1px solid #e6e6e6}._zs_galleryhs._zs_galleryhB ._zs_galleryhC ._zs_galleryhE{height:38px;padding:0 24px;line-height:38px;text-align:right;background-color:#fafafa}._zs_galleryhs._zs_galleryhB ._zs_galleryhF{position:absolute;top:98px;right:0;bottom:0;width:32%;padding:0 24px 16px;overflow-y:scroll;background-color:#fafafa}._zs_galleryhs._zs_galleryhB ._zs_galleryhF ._zs_galleryhG{height:30px;margin-bottom:5px;padding:0 15px;line-height:28px;background:#fff;border:1px solid #e6e6e6;border-radius:4px;cursor:move}._zs_galleryhs._zs_galleryhB ._zs_galleryhF ._zs_galleryhG:last-child{margin-bottom:0}._zs_galleryhH{position:relative;color:#333}._zs_galleryhH:hover{color:#333;border-color:#ccc}._zs_galleryhH:focus{border-color:#ccc}._zs_galleryhI{margin-right:10px}._zs_galleryhI ._zs_galleryhJ{position:relative;top:2px}._zs_galleryhK{padding-right:20px}._zs_galleryhK ._zs_galleryhL{position:absolute;top:0;right:0;width:20px;height:32px;line-height:32px;text-align:center;font-size:18px}");
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
} ; var $g = '', $_temp, $p = '', sortable = $$.sortable, hasParent = $$.hasParent, limit = $$.limit, selectedItems = $$.selectedItems, groups = $$.groups; $p += '<div mxv class="_zs_galleryhs '; if (sortable) {
    ;
    $p += '_zs_galleryhB';
} ; $p += ' '; if (hasParent) {
    ;
    $p += '_zs_galleryhA';
} ; $p += '"><div mxa="_zs_galleryb^:_" class="_zs_galleryht"><div mxa="_zs_galleryb^:a" class="left"><span mxs="_zs_galleryb^:_" class="fontsize-16">选择数据字段</span>'; if (limit > 0) {
    ;
    $p += '<span mxa="_zs_galleryb^:b" class="color-9 font-tahoma bold ml10">' + $e(selectedItems.length) + ' / ' + $e(limit) + '</span>';
} ; $p += ' '; if (!sortable) {
    ;
    $p += '<a mxs="_zs_galleryb^:a" href="javascript:;" class="link-brand fr" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a>';
} ; $p += '</div></div><div mxv mxa="_zs_galleryb^:c" class="_zs_galleryhu">'; for (var $art_ifrrrmgwso$art_i = 0, $art_cjcktsidodwn$art_c = groups.length; $art_ifrrrmgwso$art_i < $art_cjcktsidodwn$art_c; $art_ifrrrmgwso$art_i++) {
    var group = groups[$art_ifrrrmgwso$art_i];
    $p += '<div mxv mxa="_zs_galleryb^:d" class="_zs_galleryhv clearfix">';
    if (group.text) {
        ;
        $p += '<div mxa="_zs_galleryb^:e" class="_zs_galleryhw">' + $e(group.text) + '</div>';
    }
    ;
    $p += '<div mxv mxa="_zs_galleryb^:f" class="_zs_galleryhx clearfix">';
    for (var $art_iavzxxou$art_i = 0, $art_objntdzxxeg$art_obj = group.fields, $art_cqycjznuo$art_c = $art_objntdzxxeg$art_obj.length; $art_iavzxxou$art_i < $art_cqycjznuo$art_c; $art_iavzxxou$art_i++) {
        var field = $art_objntdzxxeg$art_obj[$art_iavzxxou$art_i];
        $p += '<div mxv mxa="_zs_galleryb^:g" class="_zs_galleryhy"><label mxv ';
        if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
            ;
            $p += ' class="cursor-not-allow" ';
        }
        ;
        $p += '><input type="checkbox" name="field" value="' + $e(field.value) + '" class="checkbox" ';
        if (field.checked) {
            ;
            $p += ' checked="true" ';
        }
        ;
        $p += ' ';
        if ((limit > 0) && (selectedItems.length >= limit) && !field.checked) {
            ;
            $p += ' disabled="true" ';
        }
        ;
        $p += ' mx-change="' + $viewId + 'toggle({value:\'' + $e($eq(field.value)) + '\',text:\'' + $e($eq(field.text)) + '\'})"/>' + $e(field.text) + '</label>';
        if (field.tip) {
            ;
            $p += '<i class="mc-iconfont _zs_galleryhz" mx-view="mx-popover/index?content=' + $eu(field.tip) + '">&#xe629;</i>';
        }
        ;
        $p += '</div>';
    }
    ;
    $p += '</div></div>';
} ; $p += '</div>'; if (sortable) {
    ;
    $p += '<div mxs="_zs_galleryb^:b" class="_zs_galleryhC"><div class="_zs_galleryhD">自定义字段</div><div class="_zs_galleryhE"><span class="color-9 mr10">可拖动排序</span><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'clear()"><i class="mc-iconfont displacement-2">&#xe72e;</i>清空</a></div></div><div mxa="_zs_galleryb^:h" class="_zs_galleryhF" mx-view="mx-dragsort/index" mx-dragfinish="' + $viewId + 'drag()">';
    for (var $art_iprfqpipktp$art_i = 0, $art_cgxieqslbl$art_c = selectedItems.length; $art_iprfqpipktp$art_i < $art_cgxieqslbl$art_c; $art_iprfqpipktp$art_i++) {
        var s = selectedItems[$art_iprfqpipktp$art_i];
        $p += '<div class="_zs_galleryhG" data-value="' + $e(s.value) + '" data-text="' + $e(s.text) + '">' + $e(s.text) + '</div>';
    }
    ;
    $p += '</div>';
} ; $p += '</div>'; return $p; },
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
        var drags = $('#' + this.id + ' ._zs_galleryhG');
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