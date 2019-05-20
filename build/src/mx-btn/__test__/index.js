/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-btn/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./3","./2","./4","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./3");
require("./2");
require("./4");
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
    $p += '<div mxv mxa="_zs_galleryZ:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'品牌色按钮\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'普通按钮\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'白色按钮\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'禁用按钮\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'品牌色按钮\',                    key: viewId + \'_demo1\'                }, {                    name: \'普通按钮\',                    key: viewId + \'_demo2\'                }, {                    name: \'白色按钮\',                    key: viewId + \'_demo3\'                }, {                    name: \'禁用按钮\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '品牌色按钮', key: viewId + '_demo1' }, { name: '普通按钮', key: viewId + '_demo2' }, { name: '白色按钮', key: viewId + '_demo3' }, { name: '禁用按钮', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryZ:a" class="clearfix mb20"><div mxa="_zs_galleryZ:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-btn/__test__/1" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-btn/__test__/3" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div mxa="_zs_galleryZ:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-btn/__test__/2" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-btn/__test__/4" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div></div><div id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 36;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-btn/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var viewId = that.id;
        var options = [{
                key: 'color',
                desc: '当前选中颜色',
                type: 'string',
                def: '#ffffff'
            }, {
                key: 'align',
                desc: '与目标的对齐方式，left，right',
                type: 'string',
                def: 'left'
            }, {
                key: 'dot',
                desc: '显示选中值为色值圆点',
                type: 'boolean',
                def: 'false'
            }];
        that.updater.digest({
            viewId: viewId,
            options: options
        });
    }
});

});