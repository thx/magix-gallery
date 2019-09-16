/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/notice",["magix","$","examples/subs","mx-title/second","./7","./4","./3","./31","./30","./6","./5","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./7");
require("./4");
require("./3");
require("./31");
require("./30");
require("./6");
require("./5");
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
    $p += '<div mxv mxa="_zs_galleryb9:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'品牌色强调\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'带关闭按钮\',\n            key: viewId + \'_demo30\'\n        },{\n            name: \'事件处理\',\n            key: viewId + \'_demo31\'\n        },{\n            name: \'红色错误类\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'黄色警告类\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'自定义颜色\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'默认灰底\',\n            key: viewId + \'_demo3\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'品牌色强调\',                    key: viewId + \'_demo7\'                }, {                    name: \'带关闭按钮\',                    key: viewId + \'_demo30\'                }, {                    name: \'事件处理\',                    key: viewId + \'_demo31\'                }, {                    name: \'红色错误类\',                    key: viewId + \'_demo4\'                }, {                    name: \'黄色警告类\',                    key: viewId + \'_demo5\'                }, {                    name: \'自定义颜色\',                    key: viewId + \'_demo6\'                }, {                    name: \'默认灰底\',                    key: viewId + \'_demo3\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '品牌色强调', key: viewId + '_demo7' }, { name: '带关闭按钮', key: viewId + '_demo30' }, { name: '事件处理', key: viewId + '_demo31' }, { name: '红色错误类', key: viewId + '_demo4' }, { name: '黄色警告类', key: viewId + '_demo5' }, { name: '自定义颜色', key: viewId + '_demo6' }, { name: '默认灰底', key: viewId + '_demo3' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb9:a" class="clearfix mb20"><div mxa="_zs_galleryb9:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/7" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-effects/examples/4" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-effects/examples/3" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div mxa="_zs_galleryb9:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-effects/examples/31" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo31"></div><div mx-view="mx-effects/examples/30" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo30"></div><div mx-view="mx-effects/examples/6" id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div><div mx-view="mx-effects/examples/5" id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div></div><div id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 48;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/notice.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'type',
                desc: [
                    '展示类型',
                    'error：红色错误类型提示，color = #a40100',
                    'warn：黄色警告类型提示，color = #ffb400',
                    'highlight：强调提示，color = 品牌色',
                    'common：灰色提示，color = #ccc'
                ].join('<br>'),
                type: 'string',
                def: '默认灰色提示'
            }, {
                key: 'color',
                desc: '自定义颜色，配置了color的时候忽略type的配置，其他颜色基于此色值计算',
                type: 'string',
                def: ''
            }, {
                key: 'color-bg',
                desc: '背景颜色，默认为color * 0.1',
                type: 'string',
                def: ''
            }, {
                key: 'border',
                desc: '是否带边框，默认情况下带边框则border-radius=4',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'closable',
                desc: '是否带关闭',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'radius',
                desc: '是否带圆角',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'color-border',
                desc: '边框颜色，默认=color',
                type: 'string',
                def: ''
            }, {
                key: 'icon',
                desc: '是否有警告icon',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'color-icon',
                desc: 'icon颜色，默认=color',
                type: 'string',
                def: ''
            }, {
                key: 'color-text',
                desc: '文字颜色，默认#666',
                type: 'string',
                def: ''
            }, {
                key: 'text-align',
                desc: '文字对齐方式，left，center，right',
                type: 'string',
                def: 'left'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});