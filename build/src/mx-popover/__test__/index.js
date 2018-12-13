/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/index",["magix","$","__test__/subs","mx-title/second","./4","./9","./2","./7","./6","./3","./10","./1","./5","./8","__test__/api","./11","./12"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./4");
require("./9");
require("./2");
require("./7");
require("./6");
require("./3");
require("./10");
require("./1");
require("./5");
require("./8");
require("__test__/api");
require("./11");
require("./12");
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
    $p += '<div mxv mxa="_zs_gallerycs:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'自定义tag\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'自定义view\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'黑底白字\',\n            key: viewId + \'_demo9\'\n        },{\n            name: \'默认展开\',\n            key: viewId + \'_demo10\'\n        },{\n            name: \'上方\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'下方\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'左边\',\n            key: viewId + \'_demo7\'\n        },{\n            name: \'内容缩略显示\',\n            key: viewId + \'_demo5\'\n        },{\n            name: \'内容包含html\',\n            key: viewId + \'_demo6\'\n        },{\n            name: \'右边\',\n            key: viewId + \'_demo8\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'异常情况说明\',\n        key: viewId + \'_error\',\n        subs: [{\n            name: \'滚动定位\',\n            key: viewId + \'_demo11\'\n        }, {\n            name: \'影响CSSOM\',\n            key: viewId + \'_demo12\'\n        }]\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'自定义tag\',                    key: viewId + \'_demo4\'                }, {                    name: \'自定义view\',                    key: viewId + \'_demo3\'                }, {                    name: \'黑底白字\',                    key: viewId + \'_demo9\'                }, {                    name: \'默认展开\',                    key: viewId + \'_demo10\'                }, {                    name: \'上方\',                    key: viewId + \'_demo2\'                }, {                    name: \'下方\',                    key: viewId + \'_demo1\'                }, {                    name: \'左边\',                    key: viewId + \'_demo7\'                }, {                    name: \'内容缩略显示\',                    key: viewId + \'_demo5\'                }, {                    name: \'内容包含html\',                    key: viewId + \'_demo6\'                }, {                    name: \'右边\',                    key: viewId + \'_demo8\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'异常情况说明\',            key: viewId + \'_error\',            subs: [{                    name: \'滚动定位\',                    key: viewId + \'_demo11\'                }, {                    name: \'影响CSSOM\',                    key: viewId + \'_demo12\'                }]        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '自定义tag', key: viewId + '_demo4' }, { name: '自定义view', key: viewId + '_demo3' }, { name: '黑底白字', key: viewId + '_demo9' }, { name: '默认展开', key: viewId + '_demo10' }, { name: '上方', key: viewId + '_demo2' }, { name: '下方', key: viewId + '_demo1' }, { name: '左边', key: viewId + '_demo7' }, { name: '内容缩略显示', key: viewId + '_demo5' }, { name: '内容包含html', key: viewId + '_demo6' }, { name: '右边', key: viewId + '_demo8' }] }, { name: 'API', key: viewId + '_api' }, { name: '异常情况说明', key: viewId + '_error', subs: [{ name: '滚动定位', key: viewId + '_demo11' }, { name: '影响CSSOM', key: viewId + '_demo12' }] }])) + '"></div><div id="';
    $line = 51;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycs:a" class="clearfix mb20"><div mxa="_zs_gallerycs:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-popover/__test__/4" id="';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-popover/__test__/9" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo9"></div><div mx-view="mx-popover/__test__/2" id="';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-popover/__test__/7" id="';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo7"></div><div mx-view="mx-popover/__test__/6" id="';
    $line = 58;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo6"></div></div><div mxa="_zs_gallerycs:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-popover/__test__/3" id="';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-popover/__test__/10" id="';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo10"></div><div mx-view="mx-popover/__test__/1" id="';
    $line = 63;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-popover/__test__/5" id="';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div><div mx-view="mx-popover/__test__/8" id="';
    $line = 65;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo8"></div></div></div><div id="';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 70;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 72;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_error" mx-view="mx-title/second?content=%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_gallerycs:d" class="clearfix mb20"><div mxa="_zs_gallerycs:e" class="_zs_gallery___test___layout_-half"><div mx-view="mx-popover/__test__/11" id="';
    $line = 75;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo11"></div></div><div mxa="_zs_gallerycs:f" class="_zs_gallery___test___layout_-half"><div mx-view="mx-popover/__test__/12" id="';
    $line = 78;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo12"></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/index.html';
    throw msg;
} return $p; },
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
                key: 'placement',
                desc: '提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px',
                type: 'string',
                def: 'bottom'
            }, {
                key: 'align',
                desc: '提示框与目标的对齐方式，top，bottom，left，right，center',
                type: 'string',
                def: 'center'
            }, {
                key: 'auto',
                desc: '默认自动展开提示框',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'view',
                desc: '自定义提示内容view，配置的view以view为准，绝对路径',
                type: 'string'
            }, {
                key: 'data',
                desc: '自定义提示内容view需要传入的数据',
                type: 'object&nbsp;&nbsp;|&nbsp;&nbsp;array',
                def: ''
            }, {
                key: 'type',
                desc: '展现样式，默认白底，需要黑底时配置type="dark"',
                type: 'string',
                def: ''
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
        that.updater.digest({
            viewId: that.id,
            options: options
        });
    }
});

});