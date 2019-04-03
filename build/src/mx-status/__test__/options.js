/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/__test__/options",["magix","$","mx-title/second","__test__/api"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerydN:_" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 2;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-status/__test__/options.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'opers',
                desc: "<pre>\u53EF\u9009\u64CD\u4F5C\u9879\u5217\u8868\uFF1A\n[{\n    value: '\u72B6\u6001\u503C',\n    text: '\u72B6\u6001\u6587\u6848',\n    icon: 'iconfont\u56FE\u6807\uFF0C\u5982&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n    color: '\u56FE\u6807\u663E\u793A\u989C\u8272'\n}]\n</pre>",
                type: 'array',
                def: '[]'
            }, {
                key: 'selected',
                desc: '当前操作项选中值',
                type: 'string',
                def: 'opers[0].value'
            }, {
                key: 'info',
                desc: "<pre>\u989D\u5916\u7684\u63D0\u793A\u4FE1\u606F\uFF1A\n{\n    value: '\u72B6\u6001\u503C',\n    text: '\u72B6\u6001\u6587\u6848',\n    icon: 'iconfont\u56FE\u6807\uFF0C\u5982&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n    color: '\u56FE\u6807\u663E\u793A\u989C\u8272',\n    tip: '\u63D0\u793A\u4FE1\u606F\u5185\u5BB9'\n}\n</pre>",
                type: 'object',
                def: '{}'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});