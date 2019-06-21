/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/index2",["magix","$","__test__/subs","mx-title/second","./cal","./6","./7"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./cal");
require("./6");
require("./7");
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
    $p += '<div mxa="_zs_galleryeE:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 4;
    $art = '@[{\n        name: \'表头实际位置计算\',\n        key: viewId + \'_cal\'\n    }, {\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'左右分列+子表格\',\n            key: viewId + \'_demo6\',\n        }, {\n            name: \'普通table\',\n            key: viewId + \'_demo7\',\n        }]\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'表头实际位置计算\',            key: viewId + \'_cal\'        }, {            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'左右分列+子表格\',                    key: viewId + \'_demo6\'                }, {                    name: \'普通table\',                    key: viewId + \'_demo7\'                }]        }]%>', $i($$ref, [{ name: '表头实际位置计算', key: viewId + '_cal' }, { name: '使用示例', key: viewId + '_demo', subs: [{ name: '左右分列+子表格', key: viewId + '_demo6' }, { name: '普通table', key: viewId + '_demo7' }] }])) + '"></div><div id="';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_cal" mx-view="mx-title/second?content=%E8%A1%A8%E5%A4%B4%E5%AE%9E%E9%99%85%E4%BD%8D%E7%BD%AE%E8%AE%A1%E7%AE%97&tip=%E8%8E%B7%E5%8F%96%E5%8D%95%E5%85%83%E6%A0%BC%E5%AE%9E%E9%99%85%E4%BD%8D%E7%BD%AE%7Bx%2Cy%7D"></div><div mxs="_zs_galleryeE:_" mx-view="mx-table/__test__/cal" class="pr20 mb40"></div><div id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeE:a" class="clearfix mb20"><div mx-view="mx-table/__test__/6" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-table/__test__/7" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/index2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});