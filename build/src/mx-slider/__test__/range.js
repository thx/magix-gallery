/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/range",["magix","$","__test__/subs","mx-title/second","./8","./7","./6","./9","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./8");
require("./7");
require("./6");
require("./9");
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
    $p += '<div mxv mxa="_zs_gallerydA:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'事件处理\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'刻度\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'禁用\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'垂直方向\',\n            key: viewId + \'_demo9\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'事件处理\',                    key: viewId + \'_demo8\'                }, {                    name: \'刻度\',                    key: viewId + \'_demo6\'                }, {                    name: \'禁用\',                    key: viewId + \'_demo7\'                }, {                    name: \'垂直方向\',                    key: viewId + \'_demo9\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '事件处理', key: viewId + '_demo8' }, { name: '刻度', key: viewId + '_demo6' }, { name: '禁用', key: viewId + '_demo7' }, { name: '垂直方向', key: viewId + '_demo9' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydA:a" class="clearfix mb20"><div mxa="_zs_gallerydA:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-slider/__test__/8" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-slider/__test__/7" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div></div><div mxa="_zs_gallerydA:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-slider/__test__/6" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-slider/__test__/9" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div></div></div><div id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 39;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div><div id="';
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
    msg += $expr + '\r\n\tat file:mx-slider/__test__/range.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'min',
                desc: '区间最小值，保留小数位同step',
                type: 'number',
                def: 0
            }, {
                key: 'max',
                desc: '区间最大值，保留小数位同step',
                type: 'number',
                def: 100
            }, {
                key: 'step',
                desc: '步长，滑动时变化的刻度',
                type: 'number',
                def: 1
            }, {
                key: 'value',
                desc: '逗号分隔最小值和最大值',
                type: 'string',
                def: '取0,50%'
            }, {
                key: 'need-input',
                desc: '是否需要输入框，横向时才有，width不包含输入框宽度',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'width',
                desc: '滑块宽度',
                type: 'number',
                def: 280
            }, {
                key: 'vertical',
                desc: '是否垂直',
                type: 'boolean',
                def: 'border'
            }, {
                key: 'height',
                desc: '滑块高度，vertical=true时可设置',
                type: 'number',
                def: 280
            }, {
                key: 'mx-disabled',
                desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-slider mx-disabled/&gt;',
                type: '',
                def: ''
            }];
        var events = [{
                type: 'change',
                desc: '刻度变化（输入框调整或者拖动滑轴）时触发',
                params: [{
                        key: 'start',
                        desc: '开始刻度',
                        type: 'number'
                    }, {
                        key: 'end',
                        desc: '结束刻度',
                        type: 'number'
                    }, {
                        key: 'value',
                        desc: '[start, end]',
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