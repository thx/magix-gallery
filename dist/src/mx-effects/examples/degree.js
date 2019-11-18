/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/degree",["magix","$","examples/subs","mx-title/second","./38","./35","./36","./37","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./38");
require("./35");
require("./36");
require("./37");
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
    $p += '<div mxv mxa="_zs_galleryb*:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'预置类型\',\n            key: viewId + \'_demo38\'\n        },{\n            name: \'展示值取整\',\n            key: viewId + \'_demo35\'\n        },{\n            name: \'自定义颜色\',\n            key: viewId + \'_demo36\'\n        },{\n            name: \'基础透明度\',\n            key: viewId + \'_demo37\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'预置类型\',                    key: viewId + \'_demo38\'                }, {                    name: \'展示值取整\',                    key: viewId + \'_demo35\'                }, {                    name: \'自定义颜色\',                    key: viewId + \'_demo36\'                }, {                    name: \'基础透明度\',                    key: viewId + \'_demo37\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '预置类型', key: viewId + '_demo38' }, { name: '展示值取整', key: viewId + '_demo35' }, { name: '自定义颜色', key: viewId + '_demo36' }, { name: '基础透明度', key: viewId + '_demo37' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb*:a" class="clearfix mb20"><div mxa="_zs_galleryb*:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/38" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo38"></div><div mx-view="mx-effects/examples/35" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo35"></div></div><div mxa="_zs_galleryb*:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/36" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo36"></div><div mx-view="mx-effects/examples/37" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo37"></div></div></div><div id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 35;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/degree.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'num',
                desc: '当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数',
                type: 'number',
                def: ''
            }, {
                key: 'type',
                desc: [
                    '展示类型',
                    'error：红色错误类型提示',
                    'warn：黄色警告类型提示',
                    'pass：绿色通过类型提示',
                    'highlight：品牌色图标强调提示（默认）'
                ].join('<br>'),
                type: 'string',
                def: 'highlight'
            }, {
                key: 'color',
                desc: '自定义颜色，配置了color的时候忽略type的配置',
                type: 'string',
                def: '品牌色'
            }, {
                key: 'base-opacity',
                desc: '基础透明度，<1 的数值，<br/>表示第一个格子的透明度，后续计算为 opacity = base + i * (1 - base) / 9',
                type: 'number',
                def: '0.08'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});