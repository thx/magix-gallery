/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/__test__/steps",["magix","$","mx-title/second","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
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
    $p += '<div id="';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 2;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div mxa="_zs_gallerycU:_" class="pr20"><div id="';
    $line = 5;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_step" mx-view="mx-title/second?content=step-infos%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_gallerycU:a" class="mb40"><div class="mb10" id="';
    $line = 7;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_step1">1. step-infos数组所有可配参数说明</div><div mxs="_zs_gallerycU:_" class="pl15 mb20"><pre class="tip-content">\n[{\n    label: \'必填，标题文案\',\n    view: \'必填，该步骤对应的view，该view必须实现check方法\',\n    icon: \'可选，自定义icon，默认为index，从1开始\',\n    prevTip: \'可选，自定义返回上一步文案，默认返回上一步\'\n    nextTip: \'可选，自定义下一步文案，默认返回下一步\',\n    nextFn: (remains, next) => {\n        // remains 当前所有子步骤保留的信息交集，便于提交接口处理等\n        // next(remainParams:object) 保存在路由上的参数\n        next({\n            example: 1\n        })\n    }\n}]\n            </pre></div><div class="mb10" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_step2">2. 子view必须实现的check方法说明，返回一个Promise</div><div mxs="_zs_gallerycU:a" class="pl15"><pre class="tip-content">\ncheck() {\n    let ok = true,\n        remain = {};\n    \n    return new Promise((resolve) => {\n        // 此处返回promise，防止有接口提交校验等\n        resolve({\n            ok,  // 是否校验通过，false的时候不提交\n            msg: \'错误信息提示\',\n            remain: {} // 当前步骤保留的参数，所有子view交集\n        })\n    })\n}\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/__test__/steps.html';
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
            options: options,
            viewId: viewId
        });
    }
});

});