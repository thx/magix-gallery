/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","__test__/api"],(require,exports,module)=>{
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
    $p += '<div mxv mxa="_zs_gallerycC:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 3;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'极简模式\',\n            key: viewId + \'_demo1\'\n        },{\n            name: \'每日单独选择\',\n            key: viewId + \'_demo2\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'极简模式\',                    key: viewId + \'_demo1\'                }, {                    name: \'每日单独选择\',                    key: viewId + \'_demo2\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '极简模式', key: viewId + '_demo1' }, { name: '每日单独选择', key: viewId + '_demo2' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycC:a" class="clearfix mb20"><div mx-view="mx-hour/__test__/1" id="';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-hour/__test__/2" id="';
    $line = 20;
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
    msg += $expr + '\r\n\tat file:mx-hour/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'simple',
                desc: '极简模式，默认只区分工作日和双休日，如需每天单独选择，请设置simple=false',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'selected',
                desc: "<pre>\n\u5F53\u524D\u9009\u4E2D\u503C\uFF0Cweek\u8868\u793A\u5468\u51E0\uFF081\u5468\u4E00\uFF0C7\u5468\u65E5\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF09\uFF0Ctimes\u8868\u793A\u5F53\u524D\u9009\u4E2D\u5C0F\u65F6\uFF0C0 ~ 23\n1. simple = true\u65F6\n    selected = [{\n        week: 12345, //\u5DE5\u4F5C\u65E5\n        times: [2,3,4]\n    },{\n        week: 67, //\u53CC\u4F11\u65E5\n        times: []\n    }]\n\n2. simple = false\u65F6\n    selected = [{\n        week: 1, //\u5468\u4E00\n        times: [2,3,4]\n    },\n    ...\n    {\n        week: 7, //\u5468\u65E5\n        times: [1,2,4]\n    }]\n</pre>",
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