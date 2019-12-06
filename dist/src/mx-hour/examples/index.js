/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./3","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./3");
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
    $p += '<div mxv mxa="_zs_galleryc&:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 3;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'工作日休息日\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'每日单独选择\',\n            key: viewId + \'_demo2\'\n        },{\n            name: \'自定义分组\',\n            key: viewId + \'_demo3\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'工作日休息日\',                    key: viewId + \'_demo1\'                }, {                    name: \'每日单独选择\',                    key: viewId + \'_demo2\'                }, {                    name: \'自定义分组\',                    key: viewId + \'_demo3\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '工作日休息日', key: viewId + '_demo1' }, { name: '每日单独选择', key: viewId + '_demo2' }, { name: '自定义分组', key: viewId + '_demo3' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc&:a" class="clearfix mb20"><div mx-view="mx-hour/examples/1" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-hour/examples/2" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-hour/examples/3" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 28;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-hour/examples/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'groups',
                desc: '分组信息：<br/>假设分组为周一至周四，周五至周日，则groups=[1234, 567]；<br/>假设分组为周一，周二至周四，周五，周六至周日，则groups=[1, 234, 5, 67]；<br/>以此类推',
                type: 'array',
                def: '[12345, 67]'
            }, {
                key: 'selected',
                desc: "<pre>\n\u5F53\u524D\u9009\u4E2D\u503C\uFF0Cweek\u8868\u793A\u5468\u51E0\uFF081\u5468\u4E00\uFF0C7\u5468\u65E5\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF09\uFF0Ctimes\u8868\u793A\u5F53\u524D\u9009\u4E2D\u5C0F\u65F6\uFF0C0 ~ 23\nselected = [{\n    week: 1, //\u5468\u4E00\n    times: [2,3,4]\n},\n{\n    week: 2, //\u5468\u4E8C\n    times: [2,3,4]\n},\n...\n{\n    week: 7, //\u5468\u65E5\n    times: [1,2,4]\n}]\n\n\u5907\u6CE8\uFF1A\u4E5F\u652F\u6301\u5408\u5E76\u914D\u7F6E\uFF0C\u5047\u8BBE\u5468\u4E00\u81F3\u5468\u516D\u90FD\u9009\u4E2D[2,3,4]\uFF0C\u5468\u65E5\u9009\u4E2D[1,2,4]\uFF0C\u5219\u53EF\u914D\u7F6E\u4E3A\nselected = [{\n    week: 123456, //\u5468\u4E00\u81F3\u5468\u516D\n    times: [2,3,4]\n},\n{\n    week: 7, //\u5468\u65E5\n    times: [1,2,4]\n}]\n</pre>",
                type: 'array',
                def: '[]'
            }, {
                key: 'tip',
                desc: '右下角提示文案信息',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});