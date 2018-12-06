/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/branch",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@taobao.com
 */

var Magix = require("magix");
var $ = require("$");
var Vframe = Magix.Vframe;
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
} ; var $g = '', $_temp, $p = '', list = $$.list, fromTop = $$.fromTop, valueKey = $$.valueKey, id = $$.id, textKey = $$.textKey; var $expr, $art, $line; try {
    $p += '<ul mxv>';
    $expr = '<%for (var i = 0, br; i < list.length; i++) {%>';
    for (var i = 0, br; i < list.length; i++) {
        ;
        $p += ' ';
        $expr = '<%br = list[i]%>';
        br = list[i];
        $p += '<li mxv class="__mx-tree_index_-li';
        $expr = '<%if (!i && fromTop) {%>';
        if (!i && fromTop) {
            ;
            $p += ' __mx-tree_index_-top-li-first';
            $expr = '<%}%>';
        }
        ;
        $expr = '<%if (i == list.length - 1) {%>';
        if (i == list.length - 1) {
            ;
            $p += ' __mx-tree_index_-li-last';
            $expr = '<%}%>';
        }
        ;
        $p += '"><div class="__mx-tree_index_-icon';
        $expr = '<%if (br.children) {%>';
        if (br.children) {
            ;
            $p += ' __mx-style_index_-cp';
            $expr = '<%}%>';
        }
        ;
        $p += '" ';
        $expr = '<%if (br.children) {%>';
        if (br.children) {
            ;
            $p += ' mx-click="' + $viewId + '@{toggle}({id:\'' + ($expr = '<%=$eq(br[valueKey])%>', $e($eq(br[valueKey]))) + '\'})" ';
            $expr = '<%}%>';
        }
        ;
        $p += '>';
        $expr = '<%if (br.children) {%>';
        if (br.children) {
            ;
            $p += '<span mxs="_-:_" class="__mx-tree_index_-ricon">+</span>';
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxv mxa="_-:_" class="__mx-tree_index_-name"><label mxv mxa="_-:a" class="__mx-tree_index_-p0"><input class="__mx-style_index_-checkbox __mx-tree_index_-b-cb __mx-style_index_-fl" type="checkbox" mx-change="' + $viewId + '@{check}()" id="cb_' + ($expr = '<%=id%>', $e(id)) + '_' + ($expr = '<%=br[valueKey]%>', $e(br[valueKey])) + '" value="' + ($expr = '<%=br[valueKey]%>', $e(br[valueKey])) + '" name="' + ($expr = '<%=id%>', $e(id)) + '"/><span mxa="_-:b" class="__mx-style_index_-ib __mx-tree_index_-b-text __mx-style_index_-fl">' + ($expr = '<%=br[textKey]%>', $e(br[textKey])) + '</span></label></div>';
        $expr = '<%if (br.children) {%>';
        if (br.children) {
            ;
            $p += '<div mxv="list" id="' + ($expr = '<%=id%>', $e(id)) + '_' + ($expr = '<%=br[valueKey]%>', $e(br[valueKey])) + '" class="__mx-tree_index_-indent __mx-style_index_-none" mx-view="mx-tree/branch?textKey=' + ($expr = '<%!$eu(textKey)%>', $eu(textKey)) + '&valueKey=' + ($expr = '<%!$eu(valueKey)%>', $eu(valueKey)) + '&list=' + ($expr = '<%@br.children%>', $i($$ref, br.children)) + '"></div>';
            $expr = '<%}%>';
        }
        ;
        $p += '</li>';
        $expr = '<%}%>';
    }
    ;
    $p += '</ul>';
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
        var me = this;
        me.updater.set(extra);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            id: me.id
        });
    },
    '@{getCheckedState}': function () {
        var me = this;
        var id = me.id;
        var hasChecked, hasUnchecked;
        $('#' + id + ' input[name="' + id + '"]').each(function (i, n) {
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
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                var vf = Vframe.get(c);
                if (vf) {
                    state |= vf.invoke('@{getCheckedState}');
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
        var id = me.id;
        $('#' + id + ' input[name="' + id + '"]')
            .prop('indeterminate', false)
            .prop('checked', state);
        var owner = me.owner;
        var children = owner.children();
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var c = children_2[_i];
            var vf = Vframe.get(c);
            if (vf) {
                vf.invoke('@{checkAll}', [state]);
            }
        }
    },
    '@{toggle}<click>': function (e) {
        var node = $('#' + this.id + '_' + e.params.id);
        var current = $(e.eventTarget).find('span');
        var val = $.trim(current.html());
        if (val == '+') {
            node.slideDown();
            current.html('-');
        }
        else {
            node.slideUp();
            current.html('+');
        }
    },
    '@{check}<change>': function (e) {
        var me = this;
        var vf = Vframe.get(me.id + '_' + e.eventTarget.value);
        if (vf) {
            vf.invoke('@{checkAll}', [e.eventTarget.checked]);
        }
        me['@{checkParentState}'](me.id);
    }
});

});