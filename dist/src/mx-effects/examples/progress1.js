/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/progress1",["magix","$","examples/subs","mx-title/second","./8","./9","./29","./22","./21","./23","./20","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./8");
require("./9");
require("./29");
require("./22");
require("./21");
require("./23");
require("./20");
require("examples/api");
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
    $p += '<div mxv mxa="_zs_galleryb$:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'精度\',\n            key: viewId + \'_demo8\'\n        },{\n            name: \'左右对比\',\n            key: viewId + \'_demo29\'\n        },{\n            name: \'自定义颜色\',\n            key: viewId + \'_demo22\'\n        },{\n            name: \'自定义宽度\',\n            key: viewId + \'_demo21\'\n        },{\n            name: \'无文案\',\n            key: viewId + \'_demo23\'\n        },{\n            name: \'滚轴渐变\',\n            key: viewId + \'_demo20\'\n        },{\n            name: \'动态修改\',\n            key: viewId + \'_demo9\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'精度\',                    key: viewId + \'_demo8\'                }, {                    name: \'左右对比\',                    key: viewId + \'_demo29\'                }, {                    name: \'自定义颜色\',                    key: viewId + \'_demo22\'                }, {                    name: \'自定义宽度\',                    key: viewId + \'_demo21\'                }, {                    name: \'无文案\',                    key: viewId + \'_demo23\'                }, {                    name: \'滚轴渐变\',                    key: viewId + \'_demo20\'                }, {                    name: \'动态修改\',                    key: viewId + \'_demo9\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '精度', key: viewId + '_demo8' }, { name: '左右对比', key: viewId + '_demo29' }, { name: '自定义颜色', key: viewId + '_demo22' }, { name: '自定义宽度', key: viewId + '_demo21' }, { name: '无文案', key: viewId + '_demo23' }, { name: '滚轴渐变', key: viewId + '_demo20' }, { name: '动态修改', key: viewId + '_demo9' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb$:a" class="clearfix mb20"><div mxa="_zs_galleryb$:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/8" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div><div mx-view="mx-effects/examples/9" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div></div><div mxa="_zs_galleryb$:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/29" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo29"></div><div mx-view="mx-effects/examples/22" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo22"></div><div mx-view="mx-effects/examples/21" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo21"></div><div mx-view="mx-effects/examples/23" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo23"></div><div mx-view="mx-effects/examples/20" id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo20"></div></div></div><div id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 47;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/progress1.html';
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
                key: 'color-gradient',
                desc: '自定义渐变颜色',
                type: 'string',
                def: ''
            }, {
                key: 'vs',
                desc: '是否显示左右占比',
                type: 'boolean',
                def: false
            }, {
                key: 'color-vs',
                desc: 'vs=true时，对比色值',
                type: 'string',
                def: '#f0f0f0'
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