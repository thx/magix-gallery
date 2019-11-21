/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./3","./4","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./3");
require("./4");
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
    $p += '<div mxv mxa="_zs_galleryci:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'常规版\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'极简版\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'包含营销平台\',\n            key: viewId + \'_demo3\'\n        },{\n            name: \'深底色\',\n            key: viewId + \'_demo4\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'常规版\',                    key: viewId + \'_demo1\'                }, {                    name: \'极简版\',                    key: viewId + \'_demo2\'                }, {                    name: \'包含营销平台\',                    key: viewId + \'_demo3\'                }, {                    name: \'深底色\',                    key: viewId + \'_demo4\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '常规版', key: viewId + '_demo1' }, { name: '极简版', key: viewId + '_demo2' }, { name: '包含营销平台', key: viewId + '_demo3' }, { name: '深底色', key: viewId + '_demo4' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryci:a" class="clearfix mb20"><div mx-view="mx-footer/examples/1" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-footer/examples/2" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-footer/examples/3" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div><div mx-view="mx-footer/examples/4" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div><div id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 31;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-footer/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'mode',
                desc: '页脚类型，简单版（simple）还是复杂版本',
                type: 'string',
                def: ''
            }, {
                key: 'products',
                desc: '是否需要妈妈产品线信息',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'width',
                desc: '产品线信息宽度，products = true时生效',
                type: 'number',
                def: '1000'
            }, {
                key: 'dark',
                desc: '产品线信息深底色白字',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'text-align',
                desc: '对齐方式，可选center | left | right',
                type: 'string',
                def: 'center'
            }, {
                key: 'copyrights',
                desc: '版权信息',
                type: 'array',
                def: "<pre>\n1. \u963F\u91CC\u5988\u5988\u7248\uFF0C\u57DF\u540D\u4EE5alimama.com\u6216\u8005alimama.net\u7ED3\u5C3E\ncopyrights = [{\n    text: '\u6CD5\u5F8B\u58F0\u660E',\n    link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html'\n}, {\n    text: '\u963F\u91CC\u5988\u5988\u7248\u6743\u6240\u6709 2007-\u73B0\u5728'\n}, {\n    text: 'ICP\u8BC1\uFF1A\u6D59B2-20070195',\n    link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'\n}]\n\n2. \u6DD8\u5B9D\u7248\uFF0C\u57DF\u540D\u4EE5taobao.com\u6216\u8005taobao.net\u7ED3\u5C3E\ncopyrights = [{\n    text: '\u6CD5\u5F8B\u58F0\u660E',\n    link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html'\n}, {\n    text: 'Taobao.com\u7248\u6743\u6240\u6709 2003-\u73B0\u5728'\n}, {\n    text: 'ICP\u8BC1\uFF1A\u6D59B2-20080224-1',\n    link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'\n}]\n\n3. tanx\u7248\uFF0C\u57DF\u540D\u4EE5tanx.com\u6216\u8005tanx.net\u7ED3\u5C3E\ncopyrights = [{\n    text: '\u9690\u79C1\u6743\u4FDD\u62A4',\n    link: 'http://tanx.com/web/opt.html'\n}, {\n    text: 'Tanx.com\u7248\u6743\u6240\u6709'\n}, {\n    text: '\u6D59ICP\u590709109183\u53F7-10',\n    link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'\n}]\n\n\u9ED8\u8BA4\u4E3A\u963F\u91CC\u5988\u5988\u7248\uFF0C\u9700\u8981\u5B9A\u5236\u53EF\u76F4\u63A5\u4F20\u5165\u6570\u7EC4\u66FF\u6362\n</pre>"
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});