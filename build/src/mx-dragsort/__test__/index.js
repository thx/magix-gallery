/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
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
    $p += '<div mxv mxa="_zs_galleryaQ:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'垂直拖动\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'水平拖动\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'自定义拖动节点\',\n            key: viewId + \'_demo3\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'垂直拖动\',                    key: viewId + \'_demo1\'                }, {                    name: \'水平拖动\',                    key: viewId + \'_demo2\'                }, {                    name: \'自定义拖动节点\',                    key: viewId + \'_demo3\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '垂直拖动', key: viewId + '_demo1' }, { name: '水平拖动', key: viewId + '_demo2' }, { name: '自定义拖动节点', key: viewId + '_demo3' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaQ:a" class="clearfix mb20"><div mx-view="mx-dragsort/__test__/1" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-dragsort/__test__/2" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-dragsort/__test__/3" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 30;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=';
    $line = 33;
    $art = '@events';
    ;
    $p += ($expr = '<%@events%>', $i($$ref, events)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dragsort/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'view-vertical',
                desc: '是否可以垂直拖动',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'view-horizonal',
                desc: '是否可以水平拖动	',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'view-selector',
                desc: '用于拖动的元素选择器，默认子节点',
                type: 'string',
                def: ''
            }];
        var events = [{
                type: 'dragbegin',
                desc: '开始拖动时触发',
                params: [{
                        key: 'dragNode',
                        desc: '拖动节点',
                        type: 'HTMLElement'
                    }, {
                        key: 'dragZone',
                        desc: '拖动节点所在的容器',
                        type: 'HTMLElement'
                    }]
            }, {
                type: 'dragfinish',
                desc: '结束拖动时触发',
                params: [{
                        key: 'dragNode',
                        desc: '拖动节点',
                        type: 'HTMLElement'
                    }, {
                        key: 'dragZone',
                        desc: '拖动节点所在的容器',
                        type: 'HTMLElement'
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