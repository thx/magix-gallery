/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./4","./6","__test__/api","__test__/event"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./2");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options, events = $$.events; $p += '<div mxv mxa="_zs_gallerycy:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '各个方向', key: viewId + '_demo2' }, { name: '文字链 + 居中', key: viewId + '_demo4' }, { name: '内容包含html', key: viewId + '_demo6' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }]) + '"></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-popconfirm/__test__/2" id="' + $e(viewId) + '_demo2"></div><div mxa="_zs_gallerycy:a" class="clearfix mb20"><div mxa="_zs_gallerycy:b" class="_zs_gallerye"><div mx-view="mx-popconfirm/__test__/4" id="' + $e(viewId) + '_demo4"></div></div><div mxa="_zs_gallerycy:c" class="_zs_gallerye"><div mx-view="mx-popconfirm/__test__/6" id="' + $e(viewId) + '_demo6"></div></div></div><div id="' + $e(viewId) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=' + $i($$ref, options) + '" class="mb40"></div><div id="' + $e(viewId) + '_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options=' + $i($$ref, events) + '"></div></div>'; return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'content',
                desc: '提示内容 ',
                type: 'string'
            }, {
                key: 'width',
                desc: '提示框宽度',
                type: 'number',
                def: 200
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
                key: 'align-text',
                desc: '文字对齐方式，left，right，center',
                type: 'string',
                def: 'left'
            }, {
                key: 'scroll-wrapper',
                desc: '相对滚动父元素，支持格式#id，.class，id，$(node)',
                type: 'string',
                def: ''
            }];
        var events = [{
                type: 'popconfirm',
                desc: '点击确认按钮时触发',
                params: [{
                        key: '-',
                        desc: '-',
                        type: '-'
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