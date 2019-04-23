/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/edit/copy",["magix","$","mx-copy/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-copy/index");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___edit_copy_","._zs_gallery___test___edit_copy_-left {\n  padding: 16px;\n}\n._zs_gallery___test___edit_copy_-right {\n  padding: 16px 16px 16px 0;\n}\n._zs_gallery___test___edit_copy_-cont {\n  padding: 16px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow: auto;\n  background-color: var(--color-bg);\n  line-height: 26px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, success2 = $$.success2, height = $$.height, tip2 = $$.tip2, success1 = $$.success1, tip1 = $$.tip1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerye:_" class="clearfix grid"><div mxa="_zs_gallerye:a" class="fl _zs_gallery___test___layout_-half _zs_gallery___test___edit_copy_-left"><div mxa="_zs_gallerye:b" class="mb10"><div class="btn btn-brand" mx-success="' + $viewId + 'done({index:2})" mx-view="mx-copy/index?copyNode=';
    $line = 4;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2">复制</div><span mxs="_zs_gallerye:_" class="ml10">替换group_override</span>';
    $line = 7;
    $art = 'if success2';
    ;
    $expr = '<%if (success2) {%>';
    if (success2) {
        ;
        $p += '<span mxs="_zs_gallerye:a" class="color-green ml10">复制成功</span>';
        $line = 9;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div class="_zs_gallery___test___edit_copy_-cont" style="height: ';
    $line = 11;
    $art = '=height';
    ;
    $p += ($expr = '<%=height%>', $e(height)) + 'px;" id="';
    $line = 12;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">';
    $line = 12;
    $art = '!tip2';
    ;
    $p += ($expr = '<%!tip2%>', $n(tip2)) + '</div></div><div mxa="_zs_gallerye:c" class="fl _zs_gallery___test___layout_-half _zs_gallery___test___edit_copy_-right"><div mxa="_zs_gallerye:d" class="mb10"><div class="btn btn-brand" mx-success="' + $viewId + 'done({index:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1">复制</div><span mxs="_zs_gallerye:b" class="ml10">替换vars_override</span>';
    $line = 19;
    $art = 'if success1';
    ;
    $expr = '<%if (success1) {%>';
    if (success1) {
        ;
        $p += '<span mxs="_zs_gallerye:a" class="color-green ml10">复制成功</span>';
        $line = 21;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div class="_zs_gallery___test___edit_copy_-cont" style="height: ';
    $line = 23;
    $art = '=height';
    ;
    $p += ($expr = '<%=height%>', $e(height)) + 'px;" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">';
    $line = 24;
    $art = '!tip1';
    ;
    $p += ($expr = '<%!tip1%>', $n(tip1)) + '</div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/edit/copy.html';
    throw msg;
} return $p; },
    init: function (options) {
        this.updater.set(options);
        var colors = options.colors;
        var list1 = [], list2 = [];
        for (var key in colors) {
            var value = colors[key];
            list1.push(key.replace('--', '@') + ": " + value + ";");
            list2.push(key + ": " + value + ";");
        }
        this.updater.set({
            viewId: this.id,
            height: $(window).height() - 220,
            tip1: list1.join('<br />'),
            tip2: list2.join('<br />')
        });
    },
    render: function () {
        this.updater.digest();
    },
    'done<success>': function (e) {
        var index = e.params.index;
        this.updater.digest((_a = {},
            _a["success" + index] = true,
            _a));
        var _a;
    }
});

});