/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/index11",["magix","$","__test__/subs","mx-title/second","./13","./16","./19"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./13");
require("./16");
require("./19");
var Magix = require("magix");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryeC:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'自定义吸顶容器\',\n        key: viewId + \'_1\'\n    }, {\n        name: \'相对于window吸顶\',\n        key: viewId + \'_2\'\n    }, {\n        name: \'滚动时隐藏吸顶\',\n        key: viewId + \'_3\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'自定义吸顶容器\',            key: viewId + \'_1\'        }, {            name: \'相对于window吸顶\',            key: viewId + \'_2\'        }, {            name: \'滚动时隐藏吸顶\',            key: viewId + \'_3\'        }]%>', $i($$ref, [{ name: '自定义吸顶容器', key: viewId + '_1' }, { name: '相对于window吸顶', key: viewId + '_2' }, { name: '滚动时隐藏吸顶', key: viewId + '_3' }])) + '"></div><div mxs="_zs_galleryeC:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-table/__test__/13" id="';
    $line = 14;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_1"></div><div mx-view="mx-table/__test__/16" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_2"></div><div mx-view="mx-table/__test__/19" id="';
    $line = 16;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_3"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/index11.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});