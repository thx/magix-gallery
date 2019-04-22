/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/progress1",["magix","$","__test__/subs","mx-title/second","./8","./9","./22","./21","./23","./20","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./8");
require("./9");
require("./22");
require("./21");
require("./23");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybH:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'精度\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'自定义颜色\',\n            key: viewId + \'_demo22\'\n        },{\n            name: \'自定义宽度\',\n            key: viewId + \'_demo21\'\n        },{\n            name: \'无文案\',\n            key: viewId + \'_demo23\'\n        },{\n            name: \'滚轴渐变\',\n            key: viewId + \'_demo20\'\n        },{\n            name: \'动态修改\',\n            key: viewId + \'_demo9\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'精度\',                    key: viewId + \'_demo8\'                }, {                    name: \'自定义颜色\',                    key: viewId + \'_demo22\'                }, {                    name: \'自定义宽度\',                    key: viewId + \'_demo21\'                }, {                    name: \'无文案\',                    key: viewId + \'_demo23\'                }, {                    name: \'滚轴渐变\',                    key: viewId + \'_demo20\'                }, {                    name: \'动态修改\',                    key: viewId + \'_demo9\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '精度', key: viewId + '_demo8' }, { name: '自定义颜色', key: viewId + '_demo22' }, { name: '自定义宽度', key: viewId + '_demo21' }, { name: '无文案', key: viewId + '_demo23' }, { name: '滚轴渐变', key: viewId + '_demo20' }, { name: '动态修改', key: viewId + '_demo9' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybH:a" class="clearfix mb20"><div mxa="_zs_gallerybH:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/8" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-effects/__test__/9" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div></div><div mxa="_zs_gallerybH:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/22" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo22"></div><div mx-view="mx-effects/__test__/21" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo21"></div><div mx-view="mx-effects/__test__/23" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo23"></div><div mx-view="mx-effects/__test__/20" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo20"></div></div></div><div id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 43;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/progress1.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'num',
                desc: '当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数',
                type: 'number',
                def: ''
            }, {
                key: 'color',
                desc: '自定义颜色，#4d7fff 或者 rgb(77, 127, 255)',
                type: 'string',
                def: '品牌色'
            }, {
                key: 'text',
                desc: '是否显示比例文案',
                type: 'boolean',
                def: true
            }, {
                key: 'text-placement',
                desc: '数值位置，只在type=line时生效<br/>可选：left，right，top，bottom',
                type: 'string',
                def: 'top'
            }, {
                key: 'width',
                desc: '进度条宽度',
                type: 'number',
                def: '200'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});