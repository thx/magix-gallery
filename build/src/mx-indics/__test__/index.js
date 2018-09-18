/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./3");
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
    $p += '<div mxv mxa="_zs_gallerybu:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'上限 + 排序\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'hover展开\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'带搜索框\',\n            key: viewId + \'_demo3\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += '' + ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'上限 + 排序\',                    key: viewId + \'_demo1\'                }, {                    name: \'hover展开\',                    key: viewId + \'_demo2\'                }, {                    name: \'带搜索框\',                    key: viewId + \'_demo3\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '上限 + 排序', key: viewId + '_demo1' }, { name: 'hover展开', key: viewId + '_demo2' }, { name: '带搜索框', key: viewId + '_demo3' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div mxs="_zs_gallerybu:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-indics/__test__/1" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mxa="_zs_gallerybu:a" class="clearfix mb20"><div mxa="_zs_gallerybu:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-indics/__test__/2" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div></div><div mxa="_zs_gallerybu:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-indics/__test__/3" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div></div><div id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 31;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            options: [{
                    key: 'fields',
                    desc: "<pre>\n\u6307\u6807\u6570\u7EC4\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A\n[{\n    text: '\u6307\u6807\u6587\u6848',\n    value: '\u8DDF\u540E\u53F0\u4EA4\u4E92\u7684\u6307\u6807\u5B57\u6BB5',\n    tip: '\u6307\u6807\u63D0\u793A\u6587\u6848'\n}]\n</pre>",
                    type: 'array',
                    def: ''
                }, {
                    key: 'defaults',
                    desc: '默认指标value值的数组，必填',
                    type: 'array',
                    def: ''
                }, {
                    key: 'custom',
                    desc: '当前是否为自定义指标，false（默认指标），true（自定义指标）',
                    type: 'boolean',
                    def: 'false'
                }, {
                    key: 'customs',
                    desc: '自定义指标value值的数组，例如["cost"]',
                    type: 'array',
                    def: ''
                }, {
                    key: 'limit',
                    desc: '指标选中上限，不传不限制选择个数',
                    type: 'number',
                    def: ''
                }, {
                    key: 'sortable',
                    desc: '是否需要排序',
                    type: 'boolean',
                    def: 'false'
                }]
        });
    }
});

});