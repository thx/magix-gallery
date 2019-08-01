/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-btn/examples/index",["magix","$","examples/subs","mx-title/second","./1","./3","./2","./4","./5","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./3");
require("./2");
require("./4");
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
    $p += '<div mxv mxa="_zs_gallery2:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'品牌色按钮\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'普通按钮\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'白色按钮\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'禁用按钮\',\n            key: viewId + \'_demo4\'\n        },{\n            name: \'自定义按钮\',\n            key: viewId + \'_demo5\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'品牌色按钮\',                    key: viewId + \'_demo1\'                }, {                    name: \'普通按钮\',                    key: viewId + \'_demo2\'                }, {                    name: \'白色按钮\',                    key: viewId + \'_demo3\'                }, {                    name: \'禁用按钮\',                    key: viewId + \'_demo4\'                }, {                    name: \'自定义按钮\',                    key: viewId + \'_demo5\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '品牌色按钮', key: viewId + '_demo1' }, { name: '普通按钮', key: viewId + '_demo2' }, { name: '白色按钮', key: viewId + '_demo3' }, { name: '禁用按钮', key: viewId + '_demo4' }, { name: '自定义按钮', key: viewId + '_demo5' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallery2:a" class="clearfix mb20"><div mxa="_zs_gallery2:b" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-btn/examples/1" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-btn/examples/3" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div mxa="_zs_gallery2:c" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-half"><div mx-view="mx-btn/examples/2" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-btn/examples/4" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div><div mx-view="mx-btn/examples/5" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo5"></div></div></div><div id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 40;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-btn/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var viewId = that.id;
        var options = [{
                key: 'content',
                desc: '按钮显示文案',
                type: 'string',
                def: ''
            }, {
                key: 'brand',
                desc: '是否为品牌色按钮',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'white',
                desc: '是否为白色按钮',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'small',
                desc: '是否为小号尺寸按钮',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'color',
                desc: '按钮背景颜色',
                type: '合法色值',
                def: ''
            }, {
                key: 'color-hover',
                desc: 'hover按钮背景颜色',
                type: '合法色值',
                def: '配置了color才生效，默认=color'
            }, {
                key: 'color-text',
                desc: '按钮文字颜色',
                type: '合法色值',
                def: '配置了color才生效，默认=#ffffff'
            }, {
                key: 'color-hover-text',
                desc: 'hover按钮文案颜色',
                type: '合法色值',
                def: '配置了color才生效，默认=color-text'
            }, {
                key: 'tag-content',
                desc: '打标文案',
                type: 'string',
                def: ''
            }, {
                key: 'tag-color',
                desc: '打标颜色，品牌色按钮默认红色，禁用按钮默认灰色，其他默认品牌色',
                type: '合法色值',
                def: ''
            }];
        that.updater.digest({
            viewId: viewId,
            options: options
        });
    }
});

});