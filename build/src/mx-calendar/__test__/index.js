/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./5","./17","./14","./16","./4","./2","./3","./19","__test__/api","__test__/event","./implement"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./5");
require("./17");
require("./14");
require("./16");
require("./4");
require("./2");
require("./3");
require("./19");
require("__test__/api");
require("__test__/event");
require("./implement");
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
    $p += '<div mxv mxa="_zs_gallery):_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'事件 + 前缀\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'限制部分不可选\',\n            key: viewId + \'_demo14\'\n        },{\n            name: \'只选择月份\',\n            key: viewId + \'_demo16\'\n        },{\n            name: \'可选择时分秒\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'可选择小时\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'可选择时分\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'范围修正\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'自定义formatter\',\n            key: viewId + \'_demo17\'\n        },{\n            name: \'禁选\',\n            key: viewId + \'_demo19\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }, {\n        name: \'关于实现方案\',\n        key: viewId + \'_implement\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'事件 + 前缀\',                    key: viewId + \'_demo1\'                }, {                    name: \'限制部分不可选\',                    key: viewId + \'_demo14\'                }, {                    name: \'只选择月份\',                    key: viewId + \'_demo16\'                }, {                    name: \'可选择时分秒\',                    key: viewId + \'_demo4\'                }, {                    name: \'可选择小时\',                    key: viewId + \'_demo2\'                }, {                    name: \'可选择时分\',                    key: viewId + \'_demo3\'                }, {                    name: \'范围修正\',                    key: viewId + \'_demo5\'                }, {                    name: \'自定义formatter\',                    key: viewId + \'_demo17\'                }, {                    name: \'禁选\',                    key: viewId + \'_demo19\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }, {            name: \'关于实现方案\',            key: viewId + \'_implement\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '事件 + 前缀', key: viewId + '_demo1' }, { name: '限制部分不可选', key: viewId + '_demo14' }, { name: '只选择月份', key: viewId + '_demo16' }, { name: '可选择时分秒', key: viewId + '_demo4' }, { name: '可选择小时', key: viewId + '_demo2' }, { name: '可选择时分', key: viewId + '_demo3' }, { name: '范围修正', key: viewId + '_demo5' }, { name: '自定义formatter', key: viewId + '_demo17' }, { name: '禁选', key: viewId + '_demo19' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }, { name: '关于实现方案', key: viewId + '_implement' }])) + '"></div><div id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallery):a" class="clearfix mb20"><div mxa="_zs_gallery):b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-calendar/__test__/1" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-calendar/__test__/5" id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-calendar/__test__/17" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo17"></div></div><div mxa="_zs_gallery):c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-calendar/__test__/14" id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo14"></div><div mx-view="mx-calendar/__test__/16" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo16"></div><div mx-view="mx-calendar/__test__/4" id="';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-calendar/__test__/2" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-calendar/__test__/3" id="';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-calendar/__test__/19" id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo19"></div></div></div><div id="';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 62;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 65;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '" class="mb40"></div><div mx-view="mx-calendar/__test__/implement" id="';
    $line = 67;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_implement"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'max',
                desc: '最大可选的日期',
                type: 'string'
            }, {
                key: 'min',
                desc: '最小可选的日期',
                type: 'string',
                def: ''
            }, {
                key: 'selected',
                desc: '默认选中的日期',
                type: 'string',
                def: '1. 今天小于min，默认为min<br/>2. 今天大于max，默认为max<br/>3. 今天在可选范围之内，默认为今天'
            }, {
                key: 'date-type',
                desc: "<pre>\n\u5E74\u6708\u65E5\u9009\u62E9\u7C7B\u578B\uFF1A\n\u53EF\u9009\u62E9\"year,month,day\"\u4E2D\u7684\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\n\u6B64\u5916\"all\" = \"year,month,day\" = \"\"\uFF0C\u4E0D\u8BBE\u7F6E\u7684\u65F6\u5019\u9ED8\u8BA4\u5E74\u6708\u65E5\u90FD\u663E\u793A\n</pre>",
                type: 'string',
                def: ''
            }, {
                key: 'time-type',
                desc: "<pre>\n\u65F6\u5206\u79D2\u9009\u62E9\u7C7B\u578B\uFF1A\n1.\u8BBE\u7F6E\u8BE5\u503C\u540E\u4F1A\u51FA\u73B0\u65F6\u95F4\u9009\u62E9\u7EC4\u4EF6\n  \u53EF\u9009\u62E9\"hour,minute,second\"\u4E2D\u7684\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\n  \u6B64\u5916\u63D0\u4F9B\u5FEB\u6377\u7684\u914D\u7F6E\"all\" = \"hour,minute,second\"\n2.\u4E0D\u8BBE\u7F6E\u65E0\u65F6\u5206\u79D2\u9009\u62E9            \n            </pre>",
                type: 'string',
                def: ''
            }, {
                key: 'formatter',
                desc: 'date格式',
                type: 'string',
                def: 'YYYY-MM-dd'
            }, {
                key: 'align',
                desc: '日历与目标的对齐方式，可选left和right',
                type: 'string',
                def: 'left'
            }, {
                key: 'prefix',
                desc: '提示文案前缀，展示为prefix：date time',
                type: 'string',
                def: ''
            }, {
                key: 'disabled-weeks',
                desc: '限制周几不可选，[0, 1, 2, 3, 4, 5, 6]的子集',
                type: 'array',
                def: '[]'
            }, {
                key: 'week-start',
                desc: '从周几开，0-6，0表示周日',
                type: 'number',
                def: '0'
            }, {
                key: 'mx-disabled',
                desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-calendar.datepicker mx-disabled /&gt;',
                type: '',
                def: ''
            }];
        var events = [{
                type: 'change',
                desc: '切换日期时会触发',
                params: [{
                        key: 'date',
                        desc: '当前日期（不包含时分秒）',
                        type: 'string'
                    }, {
                        key: 'time',
                        desc: '当前时分秒',
                        type: 'string'
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