/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/examples/box",["magix","$","examples/subs","mx-title/second","./3","./6","./5","./10","./9","./7","examples/api","examples/event"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./3");
require("./6");
require("./5");
require("./10");
require("./9");
require("./7");
require("examples/api");
require("examples/event");
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
    $p += '<div mxv mxa="_zs_gallerye):_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'事件处理\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'打标\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'双向绑定\',\n            key: viewId + \'_demo9\'\n        },{\n            name: \'带提示\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'禁止操作\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'空心版\',\n            key: viewId + \'_demo7\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'事件处理\',                    key: viewId + \'_demo3\'                }, {                    name: \'打标\',                    key: viewId + \'_demo10\'                }, {                    name: \'双向绑定\',                    key: viewId + \'_demo9\'                }, {                    name: \'带提示\',                    key: viewId + \'_demo5\'                }, {                    name: \'禁止操作\',                    key: viewId + \'_demo6\'                }, {                    name: \'空心版\',                    key: viewId + \'_demo7\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '事件处理', key: viewId + '_demo3' }, { name: '打标', key: viewId + '_demo10' }, { name: '双向绑定', key: viewId + '_demo9' }, { name: '带提示', key: viewId + '_demo5' }, { name: '禁止操作', key: viewId + '_demo6' }, { name: '空心版', key: viewId + '_demo7' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerye):a" class="clearfix mb20"><div mxa="_zs_gallerye):b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-tabs/examples/3" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-tabs/examples/6" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-tabs/examples/5" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div><div mxa="_zs_gallerye):c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-tabs/examples/10" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div><div mx-view="mx-tabs/examples/9" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div><div mx-view="mx-tabs/examples/7" id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div></div></div><div id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 47;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options=';
    $line = 50;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tabs/examples/box.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: "<pre>\n\u5BF9\u8C61\u6570\u7EC4\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A\n[{\n    value:1,\n    text:\"\u9009\u98791\",\n    tag:\"\u6253\u6807\u6807\u7B7E\",\n    color: '\u6253\u6807\u81EA\u5B9A\u4E49\u989C\u8272\uFF0C\u9ED8\u8BA4\u54C1\u724C\u8272\uFF0C\u7981\u9009\u65F6\u7070\u8272',\n    tips:\"\u63D0\u793A\u4FE1\u606F\"\n}]</pre>",
                type: 'array'
            }, {
                key: 'selected',
                desc: '当前选中值',
                type: 'string',
                def: '不传默认取list第一个'
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
                key: 'disabled',
                desc: '是否禁用',
                type: '',
                def: 'false'
            }, {
                key: 'mode',
                desc: '样式版本，可选实心（solid），空心（hollow）',
                type: 'string',
                def: 'solid'
            }, {
                key: 'tag',
                desc: '打标内容',
                type: 'string',
                def: ''
            }];
        var events = [{
                type: 'change',
                desc: '切换tab时触发',
                params: [{
                        key: 'selected',
                        desc: '当前选中value，同value',
                        type: 'string'
                    }, {
                        key: 'value',
                        desc: '当前选中value',
                        type: 'string'
                    }, {
                        key: 'text',
                        desc: '当前选中text',
                        type: 'string'
                    }, {
                        key: 'item',
                        desc: '当前选中完整对象',
                        type: 'object'
                    }]
            }];
        this.updater.digest({
            viewId: this.id,
            options: options,
            events: events
        });
    },
    'changeTab<change>': function (e) {
        // e.value 当前选中的key值
        // e.text 当前选中的文案
        this.updater.set({
            selectedId: e.value
        }).digest();
    }
});

});