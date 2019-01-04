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
Magix.applyStyle("_zs_galleryaH","._zs_gallerymX{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerymY{position:relative;height:32px;line-height:20px;padding-bottom:12px;background-color:#fff;overflow:hidden;transition:height .2s}._zs_gallerymY ._zs_gallerymZ{float:left;height:20px;margin-right:5px;line-height:20px;color:#ccc;transition:color .25s;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}._zs_gallerymY ._zs_galleryn_{cursor:pointer;font-size:14px}._zs_gallerymY ._zs_galleryn_:hover{color:#666}._zs_galleryna ._zs_gallerymY{height:0;padding-bottom:0}._zs_gallerynb{position:relative}._zs_gallerync{padding-left:20px}._zs_gallerynd,._zs_gallerynd ._zs_gallerynb{position:relative}._zs_gallerynd ._zs_gallerynb:after{content:\"\";position:absolute;top:22px;left:7px;bottom:2px;width:1px;background-color:#e6e6e6}._zs_gallerynd ._zs_gallerynb:last-child:after{content:none}");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, needExpand = $$.needExpand, readOnly = $$.readOnly, viewId = $$.viewId, valueKey = $$.valueKey, textKey = $$.textKey, fromTop = $$.fromTop; for (var index = 0, $art_cewblbpcv$art_c = list.length; index < $art_cewblbpcv$art_c; index++) {
    var item = list[index];
    $p += '<div mxv mxa="_zs_galleryec:_" class="_zs_gallerynb"><div mxv mxa="_zs_galleryec:a" class="_zs_gallerymY clearfix">';
    if (needExpand) {
        ;
        $p += ' ';
        if (item.children && (item.children.length > 0)) {
            ;
            $p += '<i class="mc-iconfont _zs_gallerymZ _zs_galleryn_" mx-click="' + $viewId + '__o({index:' + $e(index) + '})">';
            if (item.close) {
                ;
                $p += ' &#xe65b; ';
            }
            else {
                ;
                $p += ' &#xe65a; ';
            }
            ;
            $p += '</i>';
        }
        else {
            ;
            $p += ' ';
            if (readOnly) {
                ;
                $p += '<i mxs="_zs_galleryec:_" class="mc-iconfont _zs_gallerymZ empty">&#xe732;</i>';
            }
            ;
            $p += ' ';
        }
        ;
        $p += ' ';
    }
    ;
    $p += '<label mxv mxa="_zs_galleryec:b" class="fl">';
    if (!readOnly) {
        ;
        $p += '<input class="checkbox" type="checkbox" id="cb_' + $e(viewId) + '_' + $e(index) + '" value="' + $e(item[valueKey]) + '" name="' + $e(viewId) + '" mx-change="' + $viewId + '__ca({index:' + $e(index) + '})"/>';
    }
    ;
    $p += ' ' + $e(item[textKey]) + '</label></div>';
    if (item.children && (item.children.length > 0)) {
        ;
        $p += '<div mxv="readOnly,needExpand,list" id="' + $e(viewId) + '_' + $e(index) + '" class="';
        if (item.close) {
            ;
            $p += ' _zs_galleryna ';
        }
        ;
        $p += ' ';
        if (!item.isAll) {
            ;
            $p += ' _zs_gallerync ';
        }
        ;
        $p += ' ';
        if (fromTop) {
            ;
            $p += ' top ';
        }
        ;
        $p += '" mx-view="mx-tree/branch?textKey=' + $eu(textKey) + '&valueKey=' + $eu(valueKey) + '&readOnly=' + $i($$ref, readOnly) + '&needExpand=' + $i($$ref, needExpand) + '&list=' + $i($$ref, item.children) + '"></div>';
    }
    ;
    $p += '</div>';
} ; return $p; },
    init: function (extra) {
        this.updater.set(extra);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    '__ff': function () {
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
    '__fg': function (key) {
        var me = this;
        var parent = me.owner.parent();
        var state = 0;
        if (parent) {
            var children = parent.children();
            for (var i = 0; i < children.length; i++) {
                if (children[i] == key) {
                    var vf = Vframe.get(children[i]);
                    if (vf) {
                        state |= vf.invoke('__ff');
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
            parent.invoke('__fg', [parent.id]);
        }
    },
    '__bS': function (state) {
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
                vf.invoke('__bS', [state]);
            }
        }
    },
    '__ca<change>': function (e) {
        var me = this;
        var vf = Vframe.get(me.id + '_' + e.params.index);
        if (vf) {
            vf.invoke('__bS', [e.eventTarget.checked]);
        }
        me['__fg'](me.id);
    },
    '__o<click>': function (e) {
        e.stopPropagation();
        var node = $(e.eventTarget);
        var index = e.params.index;
        var cName = '_zs_galleryna';
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
        me['__fg'](me.id);
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