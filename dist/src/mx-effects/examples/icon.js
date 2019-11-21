/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/icon",["magix","$","examples/subs","mx-title/second","./14","./15","./16","./17","./28","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./14");
require("./15");
require("./16");
require("./17");
require("./28");
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
    $p += '<div mxv mxa="_zs_galleryb|:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'实心默认\',\n            key: viewId + \'_demo14\'\n        },{\n            name: \'带提示信息\',\n            key: viewId + \'_demo17\'\n        },{\n            name: \'空心默认\',\n            key: viewId + \'_demo15\'\n        },{\n            name: \'自定义颜色\',\n            key: viewId + \'_demo16\'\n        },{\n            name: \'实际应用\',\n            key: viewId + \'_demo28\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'实心默认\',                    key: viewId + \'_demo14\'                }, {                    name: \'带提示信息\',                    key: viewId + \'_demo17\'                }, {                    name: \'空心默认\',                    key: viewId + \'_demo15\'                }, {                    name: \'自定义颜色\',                    key: viewId + \'_demo16\'                }, {                    name: \'实际应用\',                    key: viewId + \'_demo28\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '实心默认', key: viewId + '_demo14' }, { name: '带提示信息', key: viewId + '_demo17' }, { name: '空心默认', key: viewId + '_demo15' }, { name: '自定义颜色', key: viewId + '_demo16' }, { name: '实际应用', key: viewId + '_demo28' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb|:a" class="clearfix mb20"><div mxa="_zs_galleryb|:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/14" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo14"></div><div mx-view="mx-effects/examples/15" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo15"></div><div mx-view="mx-effects/examples/16" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo16"></div></div><div mxa="_zs_galleryb|:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/17" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo17"></div><div mx-view="mx-effects/examples/28" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo28"></div></div></div><div id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 40;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/icon.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'mode',
                desc: 'icon类型，可选实心打标（solid），空心打标（hollow）',
                type: 'string',
                def: 'solid'
            }, {
                key: 'type',
                desc: [
                    '展示类型',
                    'common：灰色类型提示（默认）',
                    'error：红色错误类型提示',
                    'warn：黄色警告类型提示',
                    'pass：绿色通过类型提示',
                    'highlight：品牌色图标强调提示'
                ].join('<br>'),
                type: 'string',
                def: 'common'
            }, {
                key: 'color',
                desc: '自定义颜色，设置了color的时候忽略type',
                type: 'hex格式色号',
                def: ''
            }, {
                key: 'tip',
                desc: 'hover提示信息',
                type: 'string',
                def: ''
            }, {
                key: 'tip-width',
                desc: 'hover提示信息宽度',
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