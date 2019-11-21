/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-editor/examples/index",["magix","$","examples/subs","mx-title/second","./1","./4","./5","./3","./2","examples/api","examples/event"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./4");
require("./5");
require("./3");
require("./2");
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
    $p += '<div mxv mxa="_zs_gallerybI:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'自定义模板\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'双向绑定\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'表格中\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'小号输入框\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'多行缩略\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'自定义模板\',                    key: viewId + \'_demo1\'                }, {                    name: \'双向绑定\',                    key: viewId + \'_demo5\'                }, {                    name: \'表格中\',                    key: viewId + \'_demo3\'                }, {                    name: \'小号输入框\',                    key: viewId + \'_demo2\'                }, {                    name: \'多行缩略\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '自定义模板', key: viewId + '_demo1' }, { name: '双向绑定', key: viewId + '_demo5' }, { name: '表格中', key: viewId + '_demo3' }, { name: '小号输入框', key: viewId + '_demo2' }, { name: '多行缩略', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybI:a" class="clearfix mb20"><div mxa="_zs_gallerybI:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-editor/examples/1" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-editor/examples/4" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div mxa="_zs_gallerybI:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-editor/examples/5" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-editor/examples/3" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-editor/examples/2" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div></div></div><div id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 43;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options=';
    $line = 46;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-editor/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'content',
                desc: '需要编辑的文案',
                type: 'string',
                def: ''
            }, {
                key: 'tmpl',
                desc: '编辑内容不是纯文本，需要有html片段的，配置展示模板，使用${content}当占位符显示编辑内容',
                type: 'string',
                def: '${content}'
            }, {
                key: 'rules',
                desc: '校验规则',
                type: 'object',
                def: '支持form所支持的所有类型校验'
            }, {
                key: 'small',
                desc: '是否是缩小尺寸的input',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'width',
                desc: 'input的宽度',
                type: 'number',
                def: 140
            }];
        var events = [{
                type: 'change',
                desc: '回车或者失去焦点触发，只调用一次',
                params: [{
                        key: 'editText',
                        desc: '编辑完成的内容',
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