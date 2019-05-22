/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
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
    $p += '<div mxv mxa="_zs_gallerycp:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 3;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'全屏\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'容器内\',\n            key: viewId + \'_demo2\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'全屏\',                    key: viewId + \'_demo1\'                }, {                    name: \'容器内\',                    key: viewId + \'_demo2\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '全屏', key: viewId + '_demo1' }, { name: '容器内', key: viewId + '_demo2' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycp:a" class="clearfix mb20"><div mx-view="mx-header/__test__/1" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-header/__test__/2" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div></div><div id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 24;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'width',
                desc: '导航中间区域宽度，默认1200，会根据屏幕宽度进行修正',
                type: 'number',
                def: 1200
            }, {
                key: 'navs',
                desc: "\u5BFC\u822A\u6570\u7EC4<pre>[{\n    text:\"\u5C55\u793A\u6587\u6848\",\n    value:\"value\u503C\"\n}]</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'cur',
                desc: '当前哪个导航，对应navs的value，默认不选中任何一个导航',
                type: 'string',
                def: ''
            }, {
                key: 'wrapper',
                desc: '导航相对定位的容器节点，默认为window',
                type: 'string',
                def: ''
            }, {
                key: 'logo',
                desc: '项目logo的图片地址',
                type: 'string',
                def: '<img width="200" src="//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png">'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});