/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/examples/hor",["magix","$","examples/example","examples/subs","mx-title/second","./hor-demo1","examples/api","./steps"],(require,exports,module)=>{
/*Magix,$,Base*/
require("examples/subs");
require("mx-title/second");
require("./hor-demo1");
require("examples/api");
require("./steps");
var Magix = require("magix");
var $ = require("$");
var Base = require("examples/example");
module.exports = Base.extend({
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
    $p += '<div mxv mxa="_zs_gallerydk:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'初态示例\',\n            key: viewId + \'_demo1\',\n        }, {\n            name: \'中间态+单步禁止\',\n            key: viewId + \'_demo2\',\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'step-infos配置\',\n        key: viewId + \'_step\',\n        subs: [{\n            name: \'可配参数\',\n            key: viewId + \'_step\',\n        }, {\n            name: \'check\',\n            key: viewId + \'_step\',\n        }]\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'初态示例\',                    key: viewId + \'_demo1\'                }, {                    name: \'中间态+单步禁止\',                    key: viewId + \'_demo2\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'step-infos配置\',            key: viewId + \'_step\',            subs: [{                    name: \'可配参数\',                    key: viewId + \'_step\'                }, {                    name: \'check\',                    key: viewId + \'_step\'                }]        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '初态示例', key: viewId + '_demo1' }, { name: '中间态+单步禁止', key: viewId + '_demo2' }] }, { name: 'API', key: viewId + '_api' }, { name: 'step-infos配置', key: viewId + '_step', subs: [{ name: '可配参数', key: viewId + '_step' }, { name: 'check', key: viewId + '_step' }] }])) + '"></div><div id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydk:a" class="clearfix"><div mx-view="mx-main/examples/hor-demo1" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div></div><div id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 33;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_step" mx-view="mx-title/second?content=step-infos%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"></div><div mxs="_zs_gallerydk:_" mx-view="mx-main/examples/steps"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/examples/hor.html';
    throw msg;
} return $p; },
    render: function () {
        var viewId = this.id;
        var options = [{
                key: 'step-infos',
                desc: "\u6B65\u9AA4\u4FE1\u606F\uFF0C<a href=\"javascript:;\" mx-click=\"to({id:'" + viewId + "_step'})\" class=\"color-brand\">\u67E5\u770B\u8BE6\u7EC6\u8BF4\u660E</a>",
                type: 'array',
                def: '[]'
            }, {
                key: 'already-step',
                desc: '当前已经到达第几步，从1开始',
                type: 'number',
                def: '取路由地址上stepIndex，1 和 alreadyStep的最大值'
            }];
        this.updater.digest({
            viewId: viewId,
            options: options
        });
    }
});

});