/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/progress",["magix","$","__test__/subs","mx-title/second","./8","./9","./10","./19","./20","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./8");
require("./9");
require("./10");
require("./19");
require("./20");
require("__test__/api");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options, lineOptions = $$.lineOptions, circleOptions = $$.circleOptions; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya{:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'条形\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'刻度型\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'圆形\',\n            key: viewId + \'_demo19\'\n        },{\n            name: \'渐变\',\n            key: viewId + \'_demo20\'\n        },{\n            name: \'动态修改\',\n            key: viewId + \'_demo2\'\n        }]\n    }, {\n        name: \'通用参数\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'type=line可配参数\',\n        key: viewId + \'_line_api\'\n    }, {\n        name: \'type=circle可配参数\',\n        key: viewId + \'_circle_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'条形\',                    key: viewId + \'_demo1\'                }, {                    name: \'刻度型\',                    key: viewId + \'_demo3\'                }, {                    name: \'圆形\',                    key: viewId + \'_demo19\'                }, {                    name: \'渐变\',                    key: viewId + \'_demo20\'                }, {                    name: \'动态修改\',                    key: viewId + \'_demo2\'                }]        }, {            name: \'通用参数\',            key: viewId + \'_api\'        }, {            name: \'type=line可配参数\',            key: viewId + \'_line_api\'        }, {            name: \'type=circle可配参数\',            key: viewId + \'_circle_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '条形', key: viewId + '_demo1' }, { name: '刻度型', key: viewId + '_demo3' }, { name: '圆形', key: viewId + '_demo19' }, { name: '渐变', key: viewId + '_demo20' }, { name: '动态修改', key: viewId + '_demo2' }] }, { name: '通用参数', key: viewId + '_api' }, { name: 'type=line可配参数', key: viewId + '_line_api' }, { name: 'type=circle可配参数', key: viewId + '_circle_api' }])) + '"></div><div id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerya{:a" class="clearfix mb20"><div mxa="_zs_gallerya{:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/8" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-effects/__test__/9" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div></div><div mxa="_zs_gallerya{:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/10" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-effects/__test__/19" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo19"></div><div mx-view="mx-effects/__test__/20" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo20"></div></div></div><div id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 45;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_line_api" mx-view="mx-title/second?content=type%3Dline%E5%8F%AF%E9%85%8D%E5%8F%82%E6%95%B0"></div><div mxv="lineOptions" mx-view="__test__/api?options=';
    $line = 48;
    $art = '@lineOptions';
    ;
    $p += ($expr = '<%@lineOptions%>', $i($$ref, lineOptions)) + '" class="mb40"></div><div id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_circle_api" mx-view="mx-title/second?content=type%3Dcircle%E5%8F%AF%E9%85%8D%E5%8F%82%E6%95%B0"></div><div mxv="circleOptions" mx-view="__test__/api?options=';
    $line = 51;
    $art = '@circleOptions';
    ;
    $p += ($expr = '<%@circleOptions%>', $i($$ref, circleOptions)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/progress.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'type',
                desc: [
                    '进度条类型',
                    'line：条型',
                    'degree：刻度型'
                ].join('<br>'),
                type: 'string',
                def: 'line'
            }, {
                key: 'num',
                desc: '当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数',
                type: 'number',
                def: ''
            }, {
                key: 'color',
                desc: '自定义颜色，#4d7fff 或者 rgb(77, 127, 255)',
                type: 'string',
                def: '品牌色'
            }];
        var lineOptions = [{
                key: 'text-placement',
                desc: '数值位置，只在type=line时生效<br/>可选：left，right，top，bottom',
                type: 'string',
                def: 'top'
            }];
        var circleOptions = [{
                key: 'width',
                desc: '圆形直径',
                type: 'number',
                def: '120'
            }, {
                key: 'border',
                desc: '圆形边宽',
                type: 'number',
                def: '8'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options,
            lineOptions: lineOptions,
            circleOptions: circleOptions,
            type: 'a'
        });
    }
});

});