/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./4","./5","./6","./1","./3","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./2");
require("./4");
require("./5");
require("./6");
require("./1");
require("./3");
require("__test__/api");
require("__test__/event");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options, events = $$.events; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerydp:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'事件处理\',\n            key: viewId + \'_demo2\'\n        }, {\n            name: \'动态 + loading\',\n            key: viewId + \'_demo6\'\n        }, {\n            name: \'动态更新数据\',\n            key: viewId + \'_demo1\'\n        }, {\n            name: \'自定义字段\',\n            key: viewId + \'_demo4\'\n        }, {\n            name: \'简单数组\',\n            key: viewId + \'_demo3\'\n        }, {\n            name: \'搜索value和text\',\n            key: viewId + \'_demo5\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }, {\n        name: \'Methods\',\n        key: viewId + \'_method\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'事件处理\',                    key: viewId + \'_demo2\'                }, {                    name: \'动态 + loading\',                    key: viewId + \'_demo6\'                }, {                    name: \'动态更新数据\',                    key: viewId + \'_demo1\'                }, {                    name: \'自定义字段\',                    key: viewId + \'_demo4\'                }, {                    name: \'简单数组\',                    key: viewId + \'_demo3\'                }, {                    name: \'搜索value和text\',                    key: viewId + \'_demo5\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }, {            name: \'Methods\',            key: viewId + \'_method\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '事件处理', key: viewId + '_demo2' }, { name: '动态 + loading', key: viewId + '_demo6' }, { name: '动态更新数据', key: viewId + '_demo1' }, { name: '自定义字段', key: viewId + '_demo4' }, { name: '简单数组', key: viewId + '_demo3' }, { name: '搜索value和text', key: viewId + '_demo5' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }, { name: 'Methods', key: viewId + '_method' }])) + '"></div><div id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydp:a" class="clearfix mb20"><div mxa="_zs_gallerydp:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-suggest/__test__/2" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-suggest/__test__/4" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-suggest/__test__/5" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div><div mxa="_zs_gallerydp:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-suggest/__test__/6" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-suggest/__test__/1" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-suggest/__test__/3" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div></div><div id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 51;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 54;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '" class="mb40"></div><div id="';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerydp:_" class="pr20"><table class="table _zs_gallery___test___layout_-desc-table"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>update(list: Array)</td><td>动态更新下拉列表数据</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'update\');\n                        </pre></td></tr><tr><td>showLoading</td><td>动态更新数据时有延时，增加loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'showLoading\');\n                        </pre></td></tr><tr><td>hideLoading</td><td>动态更新数据完毕，去掉loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'hideLoading\');\n                        </pre></td></tr></tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-suggest/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: "<pre>\u53EF\u641C\u7D20\u7C7B\u578B\u5217\u8868\n\u652F\u6301\u7B80\u5355\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A\n[1, 2, 3, 4]\n\n\u6216\u8005\u5BF9\u8C61\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A[{\n    text: '\u6587\u6848',\n    value: '\u8DDF\u540E\u7AEF\u4EA4\u4E92\u5B57\u6BB5'\n}]\n</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'list-text',
                desc: '可搜索类型展示文案',
                type: 'string',
                def: 'text'
            }, {
                key: 'list-value',
                desc: '可搜索类型对应的key值',
                type: 'string',
                def: 'value'
            }, {
                key: 'placeholder',
                desc: '空状态提示文案',
                type: 'string',
                def: '搜素'
            }, {
                key: 'type',
                desc: "<pre>\u641C\u7D22\u7C7B\u578B\uFF1A\n1. all\uFF1Atext\u6216\u8005value\u4E2D\u5305\u542B\u5173\u952E\u8BCD\u7684\n2. text\uFF1A\u53EA\u6709text\u4E2D\u5305\u542B\u5173\u952E\u8BCD\u7684\n3. value\uFF1A\u53EA\u6709value\u4E2D\u5305\u542B\u5173\u952E\u8BCD\u7684</pre>",
                type: 'string',
                def: 'text'
            }];
        var events = [{
                type: 'show',
                desc: '出现提示框的时候触发，常用于动态更新可选项',
                params: [{
                        key: 'keyword',
                        desc: '当前输入的关键词',
                        type: 'string'
                    }]
            }, {
                type: 'suggest',
                desc: '选中某个可选项时触发',
                params: [{
                        key: 'selected',
                        desc: "<pre>\u5F53\u524D\u9009\u4E2D\u9879\u5B8C\u6574\u5BF9\u8C61\n{\n    value: '',\n    text: ''\n}\n</pre>",
                        type: 'object'
                    }]
            }];
        this.updater.digest({
            viewId: this.id,
            options: options,
            events: events
        });
    }
});

});