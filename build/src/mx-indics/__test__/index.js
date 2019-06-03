/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./3","./2","./4","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./3");
require("./2");
require("./4");
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
    $p += '<div mxv mxa="_zs_gallerycG:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'上限+排序+分组\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'不限制+不排序\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'不限制+排序\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'自定义key\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'上限+排序+分组\',                    key: viewId + \'_demo1\'                }, {                    name: \'不限制+不排序\',                    key: viewId + \'_demo3\'                }, {                    name: \'不限制+排序\',                    key: viewId + \'_demo2\'                }, {                    name: \'自定义key\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '上限+排序+分组', key: viewId + '_demo1' }, { name: '不限制+不排序', key: viewId + '_demo3' }, { name: '不限制+排序', key: viewId + '_demo2' }, { name: '自定义key', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div mxs="_zs_gallerycG:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycG:a" class="clearfix mb20"><div mx-view="mx-indics/__test__/1" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-indics/__test__/3" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-indics/__test__/2" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-indics/__test__/4" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 34;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 37;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
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
        var options = [{
                key: 'fields',
                desc: "<pre>\n\u6307\u6807\u6570\u7EC4\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A\n[{\n    text: '\u6307\u6807\u6587\u6848',\n    value: '\u8DDF\u540E\u53F0\u4EA4\u4E92\u7684\u6307\u6807\u5B57\u6BB5',\n    pValue: '\u53EF\u9009\uFF0C\u9700\u8981\u5206\u7EC4\u65F6\u914D\u7F6Eparents\u5BF9\u5E94\u7684value', \n    tip: '\u6307\u6807\u63D0\u793A\u6587\u6848'\n}]\n</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'parents',
                desc: "<pre>\n\u5206\u7EC4\u6570\u7EC4\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A\n[{\n    text: '\u7EC4\u6587\u6848',\n    value: '\u5206\u7EC4\u503C\uFF0C\u5BF9\u5E94fields\u7684pValue'\n}]\n</pre>",
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
                key: 'custom',
                desc: '当前是否为自定义指标，false（默认指标），true（自定义指标）<br/>可能存在customs=defaults的情况，因此需要明确指定当前是自定义还是默认',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'customs',
                desc: '自定义指标value值的数组，例如["cost"]<br/>为[]的时候，默认=defaults，确保每次切换都有选中的指标',
                type: 'array',
                def: ''
            }, {
                key: 'defaults',
                desc: '默认指标value值的数组，必填',
                type: 'array',
                def: ''
            }, {
                key: 'limit',
                desc: '指标选中上限，不传不限制选择个数',
                type: 'number',
                def: ''
            }, {
                key: 'line-number',
                desc: '每行展现指标个数',
                type: 'number',
                def: '可排序：默认每行4个<br/>不可排序：默认每行5个'
            }, {
                key: 'sortable',
                desc: '是否需要排序',
                type: 'boolean',
                def: 'false'
            }];
        var events = [{
                type: 'change',
                desc: '指标有变化时触发，<br/>包括切换自定义和默认指标',
                params: [{
                        key: 'triggerType',
                        desc: '触发类型：<br/>btn-switch（快捷切换自定义和默认）<br/>dialog-setting（开浮层编辑自定义指标）',
                        type: 'string'
                    }, {
                        key: 'defaults',
                        desc: '默认指标，固定值',
                        type: 'array'
                    }, {
                        key: 'custom',
                        desc: '是否是自定义',
                        type: 'boolean'
                    }, {
                        key: 'customs',
                        desc: '自定义指标',
                        type: 'array'
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