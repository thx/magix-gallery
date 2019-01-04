/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./16","./3","./4","./14","./5","__test__/api","__test__/event","./implement"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./16");
require("./3");
require("./4");
require("./14");
require("./5");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options, events = $$.events; $p += '<div mxv mxa="_zs_gallery$:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '提示前缀', key: viewId + '_demo1' }, { name: '可选择时分秒', key: viewId + '_demo4' }, { name: '限制部分不可选', key: viewId + '_demo14' }, { name: '只选择月份', key: viewId + '_demo16' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }, { name: '关于实现方案', key: viewId + '_implement' }]) + '"></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallery$:a" class="clearfix mb20"><div mxa="_zs_gallery$:b" class="_zs_gallerye"><div mx-view="mx-calendar/__test__/1" id="' + $e(viewId) + '_demo1"></div><div mxs="_zs_gallery$:_" mx-view="mx-calendar/__test__/2"></div><div mx-view="mx-calendar/__test__/16" id="' + $e(viewId) + '_demo16"></div></div><div mxa="_zs_gallery$:c" class="_zs_gallerye"><div mxs="_zs_gallery$:a" mx-view="mx-calendar/__test__/3"></div><div mx-view="mx-calendar/__test__/4" id="' + $e(viewId) + '_demo4"></div><div mx-view="mx-calendar/__test__/14" id="' + $e(viewId) + '_demo14"></div><div mxs="_zs_gallery$:b" mx-view="mx-calendar/__test__/5"></div></div></div><div id="' + $e(viewId) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=' + $i($$ref, options) + '" class="mb40"></div><div id="' + $e(viewId) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=' + $i($$ref, events) + '" class="mb40"></div><div mx-view="mx-calendar/__test__/implement" id="' + $e(viewId) + '_implement"></div></div>'; return $p; },
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
                key: 'time-type',
                desc: '时分秒选择类型，设置该值后会出现时间选择组件<br/>可选择"hour,minute,second"中的一个或者多个<br/>此外提供快捷的配置"all" = "hour,minute,second"',
                type: 'string',
                def: ''
            }, {
                key: 'align',
                desc: '日历与目标的对齐方式，可选left和right',
                type: 'string',
                def: 'left'
            }, {
                key: 'prefix',
                desc: '提示文案前缀，展示为prefix：YYYY-MM-DD',
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
            }];
        var events = [{
                type: 'change',
                desc: '切换日期时会触发',
                params: [{
                        key: 'date',
                        desc: '当前日期，格式：YYYY-MM-DD',
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