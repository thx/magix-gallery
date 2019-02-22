/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./3","./4","./2","./5","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./3");
require("./4");
require("./2");
require("./5");
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
    $p += '<div mxv mxa="_zs_galleryeC:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'一次性获取value\',\n            key: viewId + \'_demo1\',\n        }, {\n            name: \'实时获取value\',\n            key: viewId + \'_demo2\',\n        }, {\n            name: \'一次性获取对象\',\n            key: viewId + \'_demo5\',\n        }, {\n            name: \'默认收起\',\n            key: viewId + \'_demo3\',\n        }, {\n            name: \'只读\',\n            key: viewId + \'_demo4\',\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Methods\',\n        key: viewId + \'_method\',\n        subs: [{\n            name: \'getBottomValues\',\n            key: viewId + \'_method\',\n        }, {\n            name: \'getBottomItems\',\n            key: viewId + \'_method\',\n        }]\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'一次性获取value\',                    key: viewId + \'_demo1\'                }, {                    name: \'实时获取value\',                    key: viewId + \'_demo2\'                }, {                    name: \'一次性获取对象\',                    key: viewId + \'_demo5\'                }, {                    name: \'默认收起\',                    key: viewId + \'_demo3\'                }, {                    name: \'只读\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Methods\',            key: viewId + \'_method\',            subs: [{                    name: \'getBottomValues\',                    key: viewId + \'_method\'                }, {                    name: \'getBottomItems\',                    key: viewId + \'_method\'                }]        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '一次性获取value', key: viewId + '_demo1' }, { name: '实时获取value', key: viewId + '_demo2' }, { name: '一次性获取对象', key: viewId + '_demo5' }, { name: '默认收起', key: viewId + '_demo3' }, { name: '只读', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Methods', key: viewId + '_method', subs: [{ name: 'getBottomValues', key: viewId + '_method' }, { name: 'getBottomItems', key: viewId + '_method' }] }])) + '"></div><div id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeC:a" class="clearfix mb20"><div mxa="_zs_galleryeC:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-tree/__test__/1" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-tree/__test__/3" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-tree/__test__/4" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div mxa="_zs_galleryeC:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-tree/__test__/2" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-tree/__test__/5" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div></div><div id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 50;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryeC:_" class="pr20"><table class="table _zs_gallery___test___layout_-desc-table"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>getBottomValues</td><td>获取选中值：最底层数据的value</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomValues\');\n                        </pre></td></tr><tr><td>getBottomItems</td><td>获取选中值：最底层数据完整对象</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomItems\');\n                        </pre></td></tr></tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'list',
                desc: "<pre>\n\u9875\u9762\u5C55\u793A\u6570\u636E\u5217\u8868\uFF0C\u4F8B\u5982\uFF1A\n[{\n    value: 1,\n    pValue: '', //\u7236\u8282\u70B9value\u503C\uFF0C\u6839\u8282\u70B9\u65E0\n    text: '\u8BA1\u52121'\n}, {\n    value: 11,\n    pValue: 1,\n    text: '\u5355\u51431-1'\n}]\n</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'bottom-values',
                desc: '已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据',
                type: 'array',
                def: ''
            }, {
                key: 'text-key',
                desc: '渲染text时读取的key',
                type: 'string',
                def: 'text'
            }, {
                key: 'value-key',
                desc: '渲染value时读取的key',
                type: 'string',
                def: 'value'
            }, {
                key: 'parent-key',
                desc: '表示父节点value的字段',
                type: 'string',
                def: 'pValue'
            }, {
                key: 'need-all',
                desc: '是否需要全选功能',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'read-only',
                desc: '是否只是展示',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'has-line',
                desc: '是否有连接线',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'need-expand',
                desc: '是否需要展开收起功能',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'close',
                desc: '默认状态下是否收起',
                type: 'boolean',
                def: 'false'
            }];
        that.updater.digest({
            viewId: that.id,
            options: options
        });
    }
});

});