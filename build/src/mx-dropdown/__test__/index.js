/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./14","./5","./3","./17","./1","./15","./12","./4","./6","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./2");
require("./14");
require("./5");
require("./3");
require("./17");
require("./1");
require("./15");
require("./12");
require("./4");
require("./6");
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
    $p += '<div mxv mxa="_zs_galleryaN:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'搜索框+事件处理\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'分组\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'hover展开\',\n            key: viewId + \'_demo12\'\n        },{\n            name: \'前缀\',\n            key: viewId + \'_demo15\'\n        },{\n            name: \'禁选\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'自定义key\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'向上展开\',\n            key: viewId + \'_demo17\'\n        },{\n            name: \'空文案定制\',\n            key: viewId + \'_demo14\'\n        },{\n            name: \'简单数组\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'mx-dropdown.item\',\n            key: viewId + \'_demo6\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'搜索框+事件处理\',                    key: viewId + \'_demo2\'                }, {                    name: \'分组\',                    key: viewId + \'_demo1\'                }, {                    name: \'hover展开\',                    key: viewId + \'_demo12\'                }, {                    name: \'前缀\',                    key: viewId + \'_demo15\'                }, {                    name: \'禁选\',                    key: viewId + \'_demo5\'                }, {                    name: \'自定义key\',                    key: viewId + \'_demo3\'                }, {                    name: \'向上展开\',                    key: viewId + \'_demo17\'                }, {                    name: \'空文案定制\',                    key: viewId + \'_demo14\'                }, {                    name: \'简单数组\',                    key: viewId + \'_demo4\'                }, {                    name: \'mx-dropdown.item\',                    key: viewId + \'_demo6\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '搜索框+事件处理', key: viewId + '_demo2' }, { name: '分组', key: viewId + '_demo1' }, { name: 'hover展开', key: viewId + '_demo12' }, { name: '前缀', key: viewId + '_demo15' }, { name: '禁选', key: viewId + '_demo5' }, { name: '自定义key', key: viewId + '_demo3' }, { name: '向上展开', key: viewId + '_demo17' }, { name: '空文案定制', key: viewId + '_demo14' }, { name: '简单数组', key: viewId + '_demo4' }, { name: 'mx-dropdown.item', key: viewId + '_demo6' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaN:a" class="clearfix mb20"><div mxa="_zs_galleryaN:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-dropdown/__test__/2" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-dropdown/__test__/14" id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo14"></div><div mx-view="mx-dropdown/__test__/5" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-dropdown/__test__/3" id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-dropdown/__test__/17" id="';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo17"></div></div><div mxa="_zs_galleryaN:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-dropdown/__test__/1" id="';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-dropdown/__test__/15" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo15"></div><div mx-view="mx-dropdown/__test__/12" id="';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo12"></div><div mx-view="mx-dropdown/__test__/4" id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-dropdown/__test__/6" id="';
    $line = 58;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div></div></div><div id="';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 63;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 65;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 66;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: '列表数组<br/>可为简单数组[1,2,3]<br/>或对象数组，如[{value:1,text:"a"}]',
                type: 'array'
            }, {
                key: 'selected',
                desc: '当前选中值',
                type: 'string',
                def: '未配置selected的时候<br/>配置了empty-text显示empty-text<br/>否则默认取list第一个显示'
            }, {
                key: 'trigger-type',
                desc: '浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）',
                type: 'string',
                def: 'click'
            }, {
                key: 'empty-text',
                desc: '空值',
                type: 'string',
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
                key: 'searchbox',
                desc: '是否开启搜索框',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'height',
                desc: '下拉框最大高度',
                type: 'number',
                def: '250'
            }, {
                key: 'name',
                desc: '下拉框名称，展示位name：selected',
                type: 'string',
                def: ''
            }, {
                key: 'mx-disabled',
                desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;',
                type: '',
                def: ''
            }, {
                key: 'placement',
                desc: '可选内容展示方向，bottom（下方），top（上方）',
                type: 'string',
                def: 'bottom'
            }, {
                key: 'keyword',
                desc: '搜索关键词',
                type: 'string',
                def: ''
            }];
        var events = [{
                type: 'change',
                desc: '选中下拉框中某个选项时触发',
                params: [{
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
                    }, {
                        key: 'selected',
                        desc: '当前选中value，同value',
                        type: 'string'
                    }, {
                        key: 'keyword',
                        desc: '当前搜索关键词',
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