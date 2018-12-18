/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","./4","./5","./6","./7","./8","./9"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./3");
require("./4");
require("./5");
require("./6");
require("./7");
require("./8");
require("./9");
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
    $p += '<div mxa="_zs_gallerybK:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'布局\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'水平等比例\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'某一个固定宽度\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'justify\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'align\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'垂直等比例\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'嵌套\',\n            key: viewId + \'_demo6\'\n        }]\n    }, {\n        name: \'单格样式\',\n        key: viewId + \'_grid\',\n        subs: [{\n            name: \'顶部+内容区域\',\n            key: viewId + \'_grid1\'\n        },{\n            name: \'只顶部\',\n            key: viewId + \'_grid2\'\n        },{\n            name: \'只内容区域\',\n            key: viewId + \'_grid3\'\n        }]\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'布局\',            key: viewId + \'_demo\',            subs: [{                    name: \'水平等比例\',                    key: viewId + \'_demo1\'                }, {                    name: \'某一个固定宽度\',                    key: viewId + \'_demo2\'                }, {                    name: \'justify\',                    key: viewId + \'_demo3\'                }, {                    name: \'align\',                    key: viewId + \'_demo4\'                }, {                    name: \'垂直等比例\',                    key: viewId + \'_demo5\'                }, {                    name: \'嵌套\',                    key: viewId + \'_demo6\'                }]        }, {            name: \'单格样式\',            key: viewId + \'_grid\',            subs: [{                    name: \'顶部+内容区域\',                    key: viewId + \'_grid1\'                }, {                    name: \'只顶部\',                    key: viewId + \'_grid2\'                }, {                    name: \'只内容区域\',                    key: viewId + \'_grid3\'                }]        }]%>', $i($$ref, [{ name: '布局', key: viewId + '_demo', subs: [{ name: '水平等比例', key: viewId + '_demo1' }, { name: '某一个固定宽度', key: viewId + '_demo2' }, { name: 'justify', key: viewId + '_demo3' }, { name: 'align', key: viewId + '_demo4' }, { name: '垂直等比例', key: viewId + '_demo5' }, { name: '嵌套', key: viewId + '_demo6' }] }, { name: '单格样式', key: viewId + '_grid', subs: [{ name: '顶部+内容区域', key: viewId + '_grid1' }, { name: '只顶部', key: viewId + '_grid2' }, { name: '只内容区域', key: viewId + '_grid3' }] }])) + '"></div><div id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybK:a" class="clearfix mb20"><div mxa="_zs_gallerybK:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-grid/__test__/1" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-grid/__test__/2" id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-grid/__test__/3" id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div mxa="_zs_gallerybK:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-grid/__test__/4" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-grid/__test__/5" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-grid/__test__/6" id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div></div></div><div id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_grid" mx-view="mx-title/second?content=%E5%8D%95%E6%A0%BC%E6%A0%B7%E5%BC%8F"></div><div mxa="_zs_gallerybK:d" class="clearfix mb20"><div mxa="_zs_gallerybK:e" class="_zs_gallery___test___layout_-half"><div mx-view="mx-grid/__test__/7" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_grid1"></div></div><div mxa="_zs_gallerybK:f" class="_zs_gallery___test___layout_-half"><div mx-view="mx-grid/__test__/8" id="';
    $line = 58;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_grid2"></div><div mx-view="mx-grid/__test__/9" id="';
    $line = 59;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_grid3"></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-grid/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        // let options = [{
        //     key: 'mode',
        //     desc: '页脚类型，简单版（simple）还是复杂版本',
        //     type: 'string',
        //     def: ''
        // }, {
        //     key: 'products',
        //     desc: '是否需要妈妈产品线信息',
        //     type: 'boolean',
        //     def: 'false'
        // }, {
        //     key: 'width',
        //     desc: '产品线信息宽度，products = true时生效',
        //     type: 'number',
        //     def: '1184'
        // }, {
        //     key: 'dark',
        //     desc: '产品线信息深底色白字',
        //     type: 'boolean',
        //     def: 'false'
        // }]
        this.updater.digest({
            // options,
            viewId: this.id
        });
    }
});

});