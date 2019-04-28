/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-title/__test__/index",["magix","__test__/example","$","__test__/subs","../second","./2","./5","./4","./3","./1","__test__/api"],(require,exports,module)=>{
/*Magix,Base,$*/
require("__test__/subs");
require("../second");
require("./2");
require("./5");
require("./4");
require("./3");
require("./1");
require("__test__/api");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
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
    $p += '<div mxv mxa="_zs_gallerye3:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'一级\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'二级\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'一级+标签\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'二级+标签\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'实际应用场景\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'一级\',                    key: viewId + \'_demo5\'                }, {                    name: \'二级\',                    key: viewId + \'_demo1\'                }, {                    name: \'一级+标签\',                    key: viewId + \'_demo2\'                }, {                    name: \'二级+标签\',                    key: viewId + \'_demo3\'                }, {                    name: \'实际应用场景\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '一级', key: viewId + '_demo5' }, { name: '二级', key: viewId + '_demo1' }, { name: '一级+标签', key: viewId + '_demo2' }, { name: '二级+标签', key: viewId + '_demo3' }, { name: '实际应用场景', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerye3:a" class="clearfix"><div mxa="_zs_gallerye3:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-title/__test__/2" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-title/__test__/5" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div><div mxa="_zs_gallerye3:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-title/__test__/4" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-title/__test__/3" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div></div><div mxa="_zs_gallerye3:d" class="mb20"><div mx-view="mx-title/__test__/1" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div></div><div id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 42;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-title/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'content',
                desc: '标题内容',
                type: 'string'
            }, {
                key: 'tip',
                desc: '提示内容',
                type: 'string'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});