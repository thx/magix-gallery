/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/multiple",["magix","$","__test__/subs","mx-title/second","./8","./13","./16","./9","./18","./7","./20","./11","./10","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./8");
require("./13");
require("./16");
require("./9");
require("./18");
require("./7");
require("./20");
require("./11");
require("./10");
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
    $p += '<div mxv mxa="_zs_galleryaM:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'事件+双向绑定值\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'复杂分组\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'简单分组+上限\',\n            key: viewId + \'_demo20\'\n        },{\n            name: \'hover展开\',\n            key: viewId + \'_demo13\'\n        },{\n            name: \'带搜索框\',\n            key: viewId + \'_demo16\'\n        },{\n            name: \'禁选\',\n            key: viewId + \'_demo11\'\n        },{\n            name: \'自定义key\',\n            key: viewId + \'_demo9\'\n        },{\n            name: \'向上展开\',\n            key: viewId + \'_demo18\'\n        },{\n            name: \'简单数组\',\n            key: viewId + \'_demo10\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'事件+双向绑定值\',                    key: viewId + \'_demo8\'                }, {                    name: \'复杂分组\',                    key: viewId + \'_demo7\'                }, {                    name: \'简单分组+上限\',                    key: viewId + \'_demo20\'                }, {                    name: \'hover展开\',                    key: viewId + \'_demo13\'                }, {                    name: \'带搜索框\',                    key: viewId + \'_demo16\'                }, {                    name: \'禁选\',                    key: viewId + \'_demo11\'                }, {                    name: \'自定义key\',                    key: viewId + \'_demo9\'                }, {                    name: \'向上展开\',                    key: viewId + \'_demo18\'                }, {                    name: \'简单数组\',                    key: viewId + \'_demo10\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '事件+双向绑定值', key: viewId + '_demo8' }, { name: '复杂分组', key: viewId + '_demo7' }, { name: '简单分组+上限', key: viewId + '_demo20' }, { name: 'hover展开', key: viewId + '_demo13' }, { name: '带搜索框', key: viewId + '_demo16' }, { name: '禁选', key: viewId + '_demo11' }, { name: '自定义key', key: viewId + '_demo9' }, { name: '向上展开', key: viewId + '_demo18' }, { name: '简单数组', key: viewId + '_demo10' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaM:a" class="clearfix mb20"><div mxa="_zs_galleryaM:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-dropdown/__test__/8" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-dropdown/__test__/13" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo13"></div><div mx-view="mx-dropdown/__test__/16" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo16"></div><div mx-view="mx-dropdown/__test__/9" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div><div mx-view="mx-dropdown/__test__/18" id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo18"></div></div><div mxa="_zs_galleryaM:f" class="_zs_gallery___test___layout_-half"><div mx-view="mx-dropdown/__test__/7" id="';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-dropdown/__test__/20" id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo20"></div><div mx-view="mx-dropdown/__test__/11" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo11"></div><div mx-view="mx-dropdown/__test__/10" id="';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div></div></div><div id="';
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
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/multiple.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: '列表数组<br/>可为简单数组或[1,2,3]<br/>或对象数组，如[{value:1,text:"a"}]',
                type: 'array'
            }, {
                key: 'selected',
                desc: '当前选中值',
                type: 'string',
                def: '选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
            }, {
                key: 'trigger-type',
                desc: '浮层唤起方式，可选值：<br/>点击（click）<br/>鼠标悬浮展开（hover）',
                type: 'string',
                def: 'click'
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
                key: 'max',
                desc: '选择个数上限',
                type: 'number',
                def: ''
            }, {
                key: 'searchbox',
                desc: '是否开启搜索框',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'need-all',
                desc: '多选下拉框是否需要全选功能，默认true',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'height',
                desc: '下拉框最大高度',
                type: 'number',
                def: '400'
            }, {
                key: 'mx-disabled',
                desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;',
                type: '',
                def: ''
            }, {
                key: 'name',
                desc: '全选时候的提示文案，比如“全部XX”',
                type: 'string',
                def: ''
            }, {
                key: 'empty-text',
                desc: '没有选择时的提示文案',
                type: 'string',
                def: ''
            }, {
                key: 'placement',
                desc: '可选内容展示方向，bottom（下方），top（上方）',
                type: 'string',
                def: 'bottom'
            }];
        var events = [{
                type: 'change',
                desc: '点击下拉框中“确定”按钮时触发',
                params: [{
                        key: 'selected',
                        desc: '当前选中value值，初始化selected是数组则返回数组，否则为逗号分隔',
                        type: 'array or string'
                    }, {
                        key: 'values',
                        desc: '当前选中value',
                        type: 'array'
                    }, {
                        key: 'texts',
                        desc: '当前选中text，顺序同values',
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