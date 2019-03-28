/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-style/__test__/index",["magix","$","__test__/subs","mx-title/second","./3","./4","./6","./5","./1","./2"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./3");
require("./4");
require("./6");
require("./5");
require("./1");
require("./2");
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
    $p += '<div mxa="_zs_galleryd6:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'checkbox\',\n        key: viewId + \'_demo3\'\n    }, {\n        name: \'radio\',\n        key: viewId + \'_demo4\'\n    }, {\n        name: \'按钮\',\n        key: viewId + \'_demo1\'\n    }, {\n        name: \'input\',\n        key: viewId + \'_demo2\'\n    }, {\n        name: \'打标\',\n        key: viewId + \'_demo6\'\n    }, {\n        name: \'textarea\',\n        key: viewId + \'_demo5\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'checkbox\',            key: viewId + \'_demo3\'        }, {            name: \'radio\',            key: viewId + \'_demo4\'        }, {            name: \'按钮\',            key: viewId + \'_demo1\'        }, {            name: \'input\',            key: viewId + \'_demo2\'        }, {            name: \'打标\',            key: viewId + \'_demo6\'        }, {            name: \'textarea\',            key: viewId + \'_demo5\'        }]%>', $i($$ref, [{ name: 'checkbox', key: viewId + '_demo3' }, { name: 'radio', key: viewId + '_demo4' }, { name: '按钮', key: viewId + '_demo1' }, { name: 'input', key: viewId + '_demo2' }, { name: '打标', key: viewId + '_demo6' }, { name: 'textarea', key: viewId + '_demo5' }])) + '"></div><div mxs="_zs_galleryd6:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryd6:a" class="clearfix mb20"><div mxa="_zs_galleryd6:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-style/__test__/3" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-style/__test__/4" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-style/__test__/6" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-style/__test__/5" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div><div mxa="_zs_galleryd6:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-style/__test__/1" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-style/__test__/2" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-style/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});