/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./1","./4","./3","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./2");
require("./1");
require("./4");
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
    $p += '<div mxv mxa="_zs_gallerycH:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'hover显示菜单\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'点击显示菜单\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'右键显示菜单\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'任意trigger\',\n            key: viewId + \'_demo3\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'hover显示菜单\',                    key: viewId + \'_demo2\'                }, {                    name: \'点击显示菜单\',                    key: viewId + \'_demo1\'                }, {                    name: \'右键显示菜单\',                    key: viewId + \'_demo4\'                }, {                    name: \'任意trigger\',                    key: viewId + \'_demo3\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: 'hover显示菜单', key: viewId + '_demo2' }, { name: '点击显示菜单', key: viewId + '_demo1' }, { name: '右键显示菜单', key: viewId + '_demo4' }, { name: '任意trigger', key: viewId + '_demo3' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-popmenu/__test__/2" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-popmenu/__test__/1" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mxa="_zs_gallerycH:a" class="clearfix mb20"><div mxa="_zs_gallerycH:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-popmenu/__test__/4" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div mxa="_zs_gallerycH:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-popmenu/__test__/3" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div></div><div id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 39;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 42;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popmenu/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'list',
                desc: "<pre>\u83DC\u5355\u9009\u9879\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A\n[{\n    text: '\u83DC\u5355\u9009\u9879\u6587\u6848',\n    value: '\u83DC\u5355\u9009\u9879\u503C'\n}]\n</pre>",
                type: 'array'
            }, {
                key: 'width',
                desc: '菜单宽度',
                type: 'number',
                def: '自适应'
            }, {
                key: 'trigger-type',
                desc: '菜单唤起方式，可选点击（click），鼠标悬浮展开（hover）',
                type: 'string',
                def: 'hover'
            }, {
                key: 'place',
                desc: [
                    '提示框在目标的方位',
                    'lt：左上对齐 ',
                    'lc：左中对齐 ',
                    'lb：左下对齐 ',
                    'tl：上左对齐 ',
                    'tc：上中对齐 ',
                    'tr：上右对齐 ',
                    'bl：下左对齐 ',
                    'bc：下中对齐 ',
                    'br：下右对齐 ',
                    'rt：右上对齐 ',
                    'rc：右中对齐 ',
                    'rb：右下对齐 '
                ].join('<br>'),
                type: 'string',
                def: 'bc'
            }, {
                key: 'scroll-wrapper',
                desc: '相对滚动父元素，支持格式#id，.class，id，$(node)',
                type: 'string',
                def: ''
            }];
        var events = [{
                type: 'change',
                desc: '选中某个菜单选项时触发',
                params: [{
                        key: 'selected',
                        desc: '当前选中value值',
                        type: 'string'
                    }]
            }];
        that.updater.digest({
            viewId: that.id,
            options: options,
            events: events
        });
    }
});

});