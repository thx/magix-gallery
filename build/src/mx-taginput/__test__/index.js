/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./3","./4","./2","./6","./7","./8","./5","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./3");
require("./4");
require("./2");
require("./6");
require("./7");
require("./8");
require("./5");
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
    $p += '<div mxv mxa="_zs_galleryd]:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'一次性获取选中值\',\n            key: viewId + \'_demo1\'\n        }, {\n            name: \'动态单个选择\',\n            key: viewId + \'_demo7\'\n        }, {\n            name: \'动态连续选择\',\n            key: viewId + \'_demo5\'\n        }, {\n            name: \'实时获取选中值\',\n            key: viewId + \'_demo6\'\n        }, {\n            name: \'自定义key\',\n            key: viewId + \'_demo2\'\n        }, {\n            name: \'简单list\',\n            key: viewId + \'_demo3\'\n        }, {\n            name: \'选择上限\',\n            key: viewId + \'_demo8\'\n        }, {\n            name: \'禁用\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }, {\n        name: \'Methods\',\n        key: viewId + \'_method\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'一次性获取选中值\',                    key: viewId + \'_demo1\'                }, {                    name: \'动态单个选择\',                    key: viewId + \'_demo7\'                }, {                    name: \'动态连续选择\',                    key: viewId + \'_demo5\'                }, {                    name: \'实时获取选中值\',                    key: viewId + \'_demo6\'                }, {                    name: \'自定义key\',                    key: viewId + \'_demo2\'                }, {                    name: \'简单list\',                    key: viewId + \'_demo3\'                }, {                    name: \'选择上限\',                    key: viewId + \'_demo8\'                }, {                    name: \'禁用\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }, {            name: \'Methods\',            key: viewId + \'_method\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '一次性获取选中值', key: viewId + '_demo1' }, { name: '动态单个选择', key: viewId + '_demo7' }, { name: '动态连续选择', key: viewId + '_demo5' }, { name: '实时获取选中值', key: viewId + '_demo6' }, { name: '自定义key', key: viewId + '_demo2' }, { name: '简单list', key: viewId + '_demo3' }, { name: '选择上限', key: viewId + '_demo8' }, { name: '禁用', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }, { name: 'Methods', key: viewId + '_method' }])) + '"></div><div mxs="_zs_galleryd]:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div class="clearfix mb20" id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo"><div mxa="_zs_galleryd]:a" class="_zs_gallery___test___layout_-half"><div mx-view="mx-taginput/__test__/1" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-taginput/__test__/3" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-taginput/__test__/4" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-taginput/__test__/2" id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-taginput/__test__/6" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div></div><div mxa="_zs_galleryd]:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-taginput/__test__/7" id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-taginput/__test__/8" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-taginput/__test__/5" id="';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div></div><div id="';
    $line = 58;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 59;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 62;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '" class="mb40"></div><div id="';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryd]:a" class="pr20"><table class="table _zs_gallery___test___layout_-desc-table"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>update(suggest: Array)</td><td>动态更新下拉列表数据</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'update\');\n                        </pre></td></tr><tr><td>showLoading</td><td>动态更新数据时有延时，增加loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'showLoading\');\n                        </pre></td></tr><tr><td>hideLoading</td><td>动态更新数据完毕，去掉loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'hideLoading\');\n                        </pre></td></tr></tbody></table></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: '列表数组<br>支持简单数组如[1,2,3]<br>支持对象数组，如[{value:1,text:"a"}]，可自定义text-key和value-key',
                type: 'array'
            }, {
                key: 'selected',
                desc: '当前选中值，多个值逗号分隔',
                type: 'string',
                def: ''
            }, {
                key: 'items',
                desc: '当前选中对象，<br>格式：[{value:1,text:"a"}]，同时配置了items和selected，以items为准',
                type: 'array[object]',
                def: '[]'
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
                key: 'placeholder',
                desc: '空状态提示文案',
                type: 'string',
                def: '请选择'
            }, {
                key: 'dynamic-list',
                desc: '动态单个选择',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'mx-disabled',
                desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-taginput mx-disabled&gt;&lt;/mx-taginput&gt;',
                type: '',
                def: ''
            }, {
                key: 'max',
                desc: '最大可选择几个，不配置或为0为不限制',
                type: 'number',
                def: 0
            }];
        var events = [{
                type: 'change',
                desc: '选择某个标签或者删除某个标签时触发',
                params: [{
                        key: 'items',
                        desc: '当前选中的所有标签完成对象',
                        type: 'array[object]'
                    }, {
                        key: 'selected',
                        desc: '当前选中的所有标签的value值，逗号分隔',
                        type: 'string'
                    }]
            }, {
                type: 'show',
                desc: '出现提示框的时候触发，常用于动态更新可选项',
                params: [{
                        key: 'keyword',
                        desc: '当前输入的关键词',
                        type: 'string'
                    }]
            }];
        this.updater.digest({
            options: options,
            events: events,
            viewId: this.id
        });
    }
});

});