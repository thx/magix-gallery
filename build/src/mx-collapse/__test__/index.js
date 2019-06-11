/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-collapse/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","./4","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./3");
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
    $p += '<div mxv mxa="_zs_galleryaq:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'展开单个+事件\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'展开多个+禁用\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'内容自定义view\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'自定义icon\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'展开单个+事件\',                    key: viewId + \'_demo1\'                }, {                    name: \'展开多个+禁用\',                    key: viewId + \'_demo2\'                }, {                    name: \'内容自定义view\',                    key: viewId + \'_demo3\'                }, {                    name: \'自定义icon\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '展开单个+事件', key: viewId + '_demo1' }, { name: '展开多个+禁用', key: viewId + '_demo2' }, { name: '内容自定义view', key: viewId + '_demo3' }, { name: '自定义icon', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaq:a" class="clearfix mb20"><div mx-view="mx-collapse/__test__/1" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-collapse/__test__/2" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-collapse/__test__/3" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-collapse/__test__/4" id="';
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
    msg += $expr + '\r\n\tat file:mx-collapse/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: "\u9762\u677F\u6570\u636E<pre>\nlist: [{\n    disabled: true / false, //\u662F\u5426\u7981\u7528\n    expand: true / false, //\u662F\u5426\u5C55\u5F00\uFF0Cdisabled=true\u662Fexpand=true\u4E5F\u4E0D\u5C55\u5F00\uFF0C\u6240\u6709\u90FD\u4E0D\u914D\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u975E\u7981\u7528\u7B2C\u4E00\u4E2A\n    title: '\u9762\u677F\u6807\u9898',\n    content: '\u9762\u677F\u5185\u5BB9',\n    view: '\u9762\u677F\u81EA\u5B9A\u4E49view\uFF0C\u4F18\u5148\u7EA7view > content',\n    arrow: '\u81EA\u5B9A\u4E49\u5C55\u5F00\u7BAD\u5934\uFF0C\u9ED8\u8BA4\u4E3A &gt;'\n}]\n</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'only-one',
                desc: '是否只展开一个',
                type: 'boolean',
                def: 'true'
            }];
        var events = [{
                type: 'change',
                desc: '选中下拉框中某个选项时触发',
                params: [{
                        key: 'expands',
                        desc: '[true, false, ...]，当前每个实体对象的展开收起状态',
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