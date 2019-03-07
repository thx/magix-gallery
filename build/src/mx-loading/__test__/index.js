/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","./11","./6","./4","./8","./10","./5","./7","./9","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./3");
require("./11");
require("./6");
require("./4");
require("./8");
require("./10");
require("./5");
require("./7");
require("./9");
require("__test__/api");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycv:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'手动加载\',\n        key: viewId + \'_custom\',\n        subs: [{\n            name: \'非全屏自动关\',\n            key: viewId + \'_custom1\'\n        },{\n            name: \'全屏自动关\',\n            key: viewId + \'_custom2\'\n        },{\n            name: \'手动关闭\',\n            key: viewId + \'_custom3\'\n        }]\n    }, {\n        name: \'loading动画\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'circle-spinner\',\n            key: viewId + \'_demo11\'\n        },{\n            name: \'three-bounce\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'rectangle\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'double-bounce\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'square\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'cubes\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'pulse\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'dots\',\n            key: viewId + \'_demo9\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'手动加载\',            key: viewId + \'_custom\',            subs: [{                    name: \'非全屏自动关\',                    key: viewId + \'_custom1\'                }, {                    name: \'全屏自动关\',                    key: viewId + \'_custom2\'                }, {                    name: \'手动关闭\',                    key: viewId + \'_custom3\'                }]        }, {            name: \'loading动画\',            key: viewId + \'_demo\',            subs: [{                    name: \'circle-spinner\',                    key: viewId + \'_demo11\'                }, {                    name: \'three-bounce\',                    key: viewId + \'_demo10\'                }, {                    name: \'rectangle\',                    key: viewId + \'_demo6\'                }, {                    name: \'double-bounce\',                    key: viewId + \'_demo5\'                }, {                    name: \'square\',                    key: viewId + \'_demo4\'                }, {                    name: \'cubes\',                    key: viewId + \'_demo7\'                }, {                    name: \'pulse\',                    key: viewId + \'_demo8\'                }, {                    name: \'dots\',                    key: viewId + \'_demo9\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '手动加载', key: viewId + '_custom', subs: [{ name: '非全屏自动关', key: viewId + '_custom1' }, { name: '全屏自动关', key: viewId + '_custom2' }, { name: '手动关闭', key: viewId + '_custom3' }] }, { name: 'loading动画', key: viewId + '_demo', subs: [{ name: 'circle-spinner', key: viewId + '_demo11' }, { name: 'three-bounce', key: viewId + '_demo10' }, { name: 'rectangle', key: viewId + '_demo6' }, { name: 'double-bounce', key: viewId + '_demo5' }, { name: 'square', key: viewId + '_demo4' }, { name: 'cubes', key: viewId + '_demo7' }, { name: 'pulse', key: viewId + '_demo8' }, { name: 'dots', key: viewId + '_demo9' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_custom" mx-view="mx-title/second?content=%E6%89%8B%E5%8A%A8%E5%8A%A0%E8%BD%BD"></div><div mxa="_zs_gallerycv:a" class="clearfix mb20"><div mxa="_zs_gallerycv:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-loading/__test__/1" id="';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_custom1"></div><div mx-view="mx-loading/__test__/2" id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_custom2"></div></div><div mxa="_zs_gallerycv:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-loading/__test__/3" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_custom3"></div></div></div><div id="';
    $line = 59;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=loading%E5%8A%A8%E7%94%BB"></div><div mxa="_zs_gallerycv:d" class="clearfix mb20"><div mxa="_zs_gallerycv:e" class="_zs_gallery___test___layout_-half"><div mx-view="mx-loading/__test__/11" id="';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo11"></div><div mx-view="mx-loading/__test__/6" id="';
    $line = 63;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-loading/__test__/4" id="';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-loading/__test__/8" id="';
    $line = 65;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div></div><div mxa="_zs_gallerycv:f" class="_zs_gallery___test___layout_-half"><div mx-view="mx-loading/__test__/10" id="';
    $line = 68;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div><div mx-view="mx-loading/__test__/5" id="';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-loading/__test__/7" id="';
    $line = 70;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-loading/__test__/9" id="';
    $line = 71;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div></div></div><div id="';
    $line = 78;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API&tip=mx-loading.anim%20api"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 79;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-loading/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'size',
                desc: 'loading尺寸 ',
                type: 'number',
                def: 60
            }, {
                key: 'mode',
                desc: [
                    '可选动画类型',
                    'circle-spinner',
                    'three-bounce',
                    'rectangle',
                    'double-bounce',
                    'square',
                    'cubes',
                    'pulse',
                    'dots'
                ].join('<br>'),
                type: 'string',
                def: 'circle-spinner'
            }, {
                key: 'type',
                desc: [
                    '展示类型',
                    'brand：品牌色',
                    'grey：灰色'
                ].join('<br>'),
                type: 'string',
                def: 'grey'
            }, {
                key: 'color',
                desc: '自定义颜色',
                type: 'hex格式色号',
                def: ''
            },];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});