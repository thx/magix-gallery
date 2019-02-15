/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/branch",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
var Vframe = Magix.Vframe;
Magix.applyStyle("_zs_gallery_mx-tree_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-tree_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-tree_index_-name {\n  position: relative;\n  height: 32px;\n  line-height: 20px;\n  padding-bottom: 12px;\n  background-color: #fff;\n  overflow: hidden;\n  transition: height 0.2s;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-icon {\n  float: left;\n  height: 20px;\n  margin-right: 5px;\n  line-height: 20px;\n  color: #ccc;\n  transition: color 0.25s;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper {\n  cursor: pointer;\n  font-size: 14px;\n}\n._zs_gallery_mx-tree_index_-name ._zs_gallery_mx-tree_index_-oper:hover {\n  color: #666;\n}\n._zs_gallery_mx-tree_index_-close ._zs_gallery_mx-tree_index_-name {\n  height: 0;\n  padding-bottom: 0;\n}\n._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-indent {\n  padding-left: 20px;\n}\n._zs_gallery_mx-tree_index_-line {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li {\n  position: relative;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:after {\n  content: '';\n  position: absolute;\n  top: 22px;\n  left: 7px;\n  bottom: 2px;\n  width: 1px;\n  background-color: #e6e6e6;\n}\n._zs_gallery_mx-tree_index_-line ._zs_gallery_mx-tree_index_-li:last-child:after {\n  content: none;\n}\n");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', list = $$.list, needExpand = $$.needExpand, readOnly = $$.readOnly, viewId = $$.viewId, valueKey = $$.valueKey, textKey = $$.textKey, fromTop = $$.fromTop; var $expr, $art, $line; try {
    $line = 1;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cjfbhdwu$art_c = list.length; index < $art_cjfbhdwu$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cjfbhdwu$art_c = list.length; index < $art_cjfbhdwu$art_c; index++) {
        var item = list[index];
        $p += '<div mxv mxa="_zs_galleryeq:_" class="_zs_gallery_mx-tree_index_-li"><div mxv mxa="_zs_galleryeq:a" class="_zs_gallery_mx-tree_index_-name clearfix">';
        $line = 4;
        $art = 'if needExpand';
        ;
        $expr = '<%if (needExpand) {%>';
        if (needExpand) {
            ;
            $p += ' ';
            $line = 5;
            $art = 'if (item.children && (item.children.length > 0))';
            ;
            $expr = '<%if (item.children && (item.children.length > 0)) {%>';
            if (item.children && (item.children.length > 0)) {
                ;
                $p += '<i class="mc-iconfont _zs_gallery_mx-tree_index_-icon _zs_gallery_mx-tree_index_-oper" mx-click="' + $viewId + '@{toggle}({index:';
                $line = 6;
                $art = '=index';
                ;
                $p += ($expr = '<%=index%>', $e(index)) + '})">';
                $line = 7;
                $art = 'if item.close';
                ;
                $expr = '<%if (item.close) {%>';
                if (item.close) {
                    ;
                    $p += ' &#xe65b; ';
                    $line = 9;
                    $art = 'else';
                    ;
                    $expr = '<%}            else {%>';
                }
                else {
                    ;
                    $p += ' &#xe65a; ';
                    $line = 11;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</i>';
                $line = 13;
                $art = 'else';
                ;
                $expr = '<%}        else {%>';
            }
            else {
                ;
                $p += ' ';
                $line = 14;
                $art = 'if readOnly';
                ;
                $expr = '<%if (readOnly) {%>';
                if (readOnly) {
                    ;
                    $p += '<i mxs="_zs_galleryeq:_" class="mc-iconfont _zs_gallery_mx-tree_index_-icon empty">&#xe732;</i>';
                    $line = 17;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 18;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 19;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<label mxv mxa="_zs_galleryeq:b" class="fl">';
        $line = 21;
        $art = 'if !readOnly';
        ;
        $expr = '<%if (!readOnly) {%>';
        if (!readOnly) {
            ;
            $p += '<input class="checkbox" type="checkbox" id="cb_';
            $line = 24;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
            $line = 24;
            $art = '=index';
            ;
            $p += ($expr = '<%=index%>', $e(index)) + '" value="';
            $line = 25;
            $art = '=item[valueKey]';
            ;
            $p += ($expr = '<%=item[valueKey]%>', $e(item[valueKey])) + '" name="';
            $line = 26;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '" mx-change="' + $viewId + '@{check}({index:';
            $line = 27;
            $art = '=index';
            ;
            $p += ($expr = '<%=index%>', $e(index)) + '})"/>';
            $line = 28;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 30;
        $art = '=item[textKey]';
        ;
        $p += ($expr = '<%=item[textKey]%>', $e(item[textKey])) + '</label></div>';
        $line = 33;
        $art = 'if (item.children && (item.children.length > 0))';
        ;
        $expr = '<%if (item.children && (item.children.length > 0)) {%>';
        if (item.children && (item.children.length > 0)) {
            ;
            $p += '<div mxv="readOnly,needExpand,list" id="';
            $line = 40;
            $art = '=viewId';
            ;
            $p += ($expr = '<%=viewId%>', $e(viewId)) + '_';
            $line = 40;
            $art = '=index';
            ;
            $p += ($expr = '<%=index%>', $e(index)) + '" class="';
            $line = 41;
            $art = 'if item.close';
            ;
            $expr = '<%if (item.close) {%>';
            if (item.close) {
                ;
                $p += ' _zs_gallery_mx-tree_index_-close ';
                $line = 41;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 41;
            $art = 'if !item.isAll';
            ;
            $expr = '<%if (!item.isAll) {%>';
            if (!item.isAll) {
                ;
                $p += ' _zs_gallery_mx-tree_index_-indent ';
                $line = 41;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 41;
            $art = 'if fromTop';
            ;
            $expr = '<%if (fromTop) {%>';
            if (fromTop) {
                ;
                $p += ' top ';
                $line = 41;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '" mx-view="mx-tree/branch?textKey=';
            $line = 35;
            $art = '=textKey';
            ;
            $p += ($expr = '<%!$eu(textKey)%>', $eu(textKey)) + '&valueKey=';
            $line = 36;
            $art = '=valueKey';
            ;
            $p += ($expr = '<%!$eu(valueKey)%>', $eu(valueKey)) + '&readOnly=';
            $line = 37;
            $art = '@readOnly';
            ;
            $p += ($expr = '<%@readOnly%>', $i($$ref, readOnly)) + '&needExpand=';
            $line = 38;
            $art = '@needExpand';
            ;
            $p += ($expr = '<%@needExpand%>', $i($$ref, needExpand)) + '&list=';
            $line = 39;
            $art = '@item.children';
            ;
            $p += ($expr = '<%@item.children%>', $i($$ref, item.children)) + '"></div>';
            $line = 42;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div>';
        $line = 44;
        $art = '/each';
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
    msg += $expr + '\r\n\tat file:mx-tree/branch.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.set(extra);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    '@{getCheckedState}': function () {
        var me = this;
        var viewId = me.id;
        var hasChecked, hasUnchecked;
        $('#' + viewId + ' input[name="' + viewId + '"]').each(function (i, n) {
            if (n.indeterminate) {
                hasChecked = hasUnchecked = true;
            }
            else if (n.checked) {
                hasChecked = true;
            }
            else {
                hasUnchecked = true;
            }
        });
        if (hasChecked && hasUnchecked) {
            return 3;
        }
        else if (hasChecked) {
            return 2;
        }
        return 1;
    },
    '@{checkParentState}': function (key) {
        var me = this;
        var parent = me.owner.parent();
        var state = 0;
        if (parent) {
            var children = parent.children();
            for (var i = 0; i < children.length; i++) {
                if (children[i] == key) {
                    var vf = Vframe.get(children[i]);
                    if (vf) {
                        state |= vf.invoke('@{getCheckedState}');
                    }
                    break;
                }
            }
            var node = $('#cb_' + key);
            if (state === 3) {
                node.prop('indeterminate', true);
            }
            else {
                node.prop('indeterminate', false);
                node.prop('checked', state == 2);
            }
            parent.invoke('@{checkParentState}', [parent.id]);
        }
    },
    '@{checkAll}': function (state) {
        var me = this;
        var viewId = me.id;
        $('#' + viewId + ' input[name="' + viewId + '"]')
            .prop('indeterminate', false)
            .prop('checked', state);
        var owner = me.owner;
        var children = owner.children();
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var c = children_1[_i];
            var vf = Vframe.get(c);
            if (vf) {
                vf.invoke('@{checkAll}', [state]);
            }
        }
    },
    '@{check}<change>': function (e) {
        var me = this;
        var vf = Vframe.get(me.id + '_' + e.params.index);
        if (vf) {
            vf.invoke('@{checkAll}', [e.eventTarget.checked]);
        }
        me['@{checkParentState}'](me.id);
    },
    '@{toggle}<click>': function (e) {
        e.stopPropagation();
        var node = $(e.eventTarget);
        var index = e.params.index;
        var cName = '_zs_gallery_mx-tree_index_-close';
        var branch = $('#' + this.id + '_' + index);
        branch.toggleClass(cName);
        if (branch.hasClass(cName)) {
            node.html('&#xe65b;');
        }
        else {
            node.html('&#xe65a;');
        }
    },
    setValues: function (bottomValues) {
        bottomValues = bottomValues.map(function (v) {
            return v + '';
        });
        var me = this;
        var viewId = me.id;
        var result = [];
        var nodes = $('#' + viewId + ' input[name="' + viewId + '"]');
        nodes.each(function (i, n) {
            if (bottomValues.indexOf(n.value + '') > -1) {
                n.checked = true;
            }
        });
        me['@{checkParentState}'](me.id);
    },
    getValues: function () {
        return this.get('value');
    },
    getItems: function () {
        return this.get('item');
    },
    get: function (type) {
        var me = this;
        var viewId = me.id;
        var result = [];
        var list = me.updater.get('list');
        list.forEach(function (item, index) {
            var children = item.children || [];
            if (children.length == 0) {
                // 根节点
                var node = $('#cb_' + viewId + '_' + index);
                if (node[0].checked) {
                    if (type == 'item') {
                        // 完整对象
                        result.push(item);
                    }
                    else {
                        // value值
                        result.push(node[0].value);
                    }
                }
            }
        });
        return result;
    }
});

});