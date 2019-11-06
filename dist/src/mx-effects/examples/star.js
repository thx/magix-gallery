/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/star",["magix","$","examples/subs","mx-title/second","./11","./13","./34","./12","./33","examples/api","examples/event"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./11");
require("./13");
require("./34");
require("./12");
require("./33");
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
    $p += '<div mxv mxa="_zs_galleryb]:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'数值范围修正\',\n            key: viewId + \'_demo11\'\n        },{\n            name: \'可操作\',\n            key: viewId + \'_demo34\'\n        },{\n            name: \'自定义颜色+个数\',\n            key: viewId + \'_demo12\'\n        },{\n            name: \'自定义icon+个数\',\n            key: viewId + \'_demo13\'\n        },{\n            name: \'自定义基数count\',\n            key: viewId + \'_demo33\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'Event\',\n        key: viewId + \'_event\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'数值范围修正\',                    key: viewId + \'_demo11\'                }, {                    name: \'可操作\',                    key: viewId + \'_demo34\'                }, {                    name: \'自定义颜色+个数\',                    key: viewId + \'_demo12\'                }, {                    name: \'自定义icon+个数\',                    key: viewId + \'_demo13\'                }, {                    name: \'自定义基数count\',                    key: viewId + \'_demo33\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'Event\',            key: viewId + \'_event\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '数值范围修正', key: viewId + '_demo11' }, { name: '可操作', key: viewId + '_demo34' }, { name: '自定义颜色+个数', key: viewId + '_demo12' }, { name: '自定义icon+个数', key: viewId + '_demo13' }, { name: '自定义基数count', key: viewId + '_demo33' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }])) + '"></div><div id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb]:a" class="clearfix mb20"><div mxa="_zs_galleryb]:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/11" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo11"></div><div mx-view="mx-effects/examples/13" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo13"></div></div><div mxa="_zs_galleryb]:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/34" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo34"></div><div mx-view="mx-effects/examples/12" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo12"></div><div mx-view="mx-effects/examples/33" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo33"></div></div></div><div id="';
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
    msg += $expr + '\r\n\tat file:mx-effects/examples/star.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'count',
                desc: 'icon个数',
                type: 'number',
                def: 5
            }, {
                key: 'num',
                desc: '当前评分，相对于count，范围为 0 ~ count',
                type: 'number',
                def: 0
            }, {
                key: 'color',
                desc: '自定义颜色，如 #4d7fff 或者 rgb(77, 127, 255)',
                type: 'string',
                def: '品牌色'
            }, {
                key: 'operational',
                desc: '是否可操作',
                type: 'boolean',
                def: 'false'
            }];
        var events = [{
                type: 'change',
                desc: 'operational=true时，切换评分时触发',
                params: [{
                        key: 'num',
                        desc: '当前评分',
                        type: 'number'
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