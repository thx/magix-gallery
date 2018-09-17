/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/__test__/desc",["magix","$","mx-title/second","__test__/api"],(require,exports,module)=>{
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
    $p += '<div mxs="_zs_galleryce:_" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 2;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-status/__test__/desc.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: "<pre>\u53EF\u9009\u72B6\u6001\u5217\u8868\uFF1A\n[{\n    value: '\u72B6\u6001\u503C',\n    text: '\u72B6\u6001\u6587\u6848',\n    icon: 'iconfont\u56FE\u6807\uFF0C\u5982&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n    color: '\u56FE\u6807\u663E\u793A\u989C\u8272',\n    tip: '\u72B6\u6001\u63D0\u793A\u6587\u6848'\n}]\n        \n\u5F53\u53EF\u9009\u5217\u8868\u53EA\u6709\u4E00\u4E2A\u65F6\u4E5F\u663E\u793A\u4E3A\u53EA\u8BFB\u72B6\u6001</pre>",
                type: 'array',
                def: '[]'
            }, {
                key: 'selected',
                desc: '当前选中值',
                type: 'string',
                def: 'list[0].value'
            }, {
                key: 'readonly',
                desc: '是否只读，状态显示',
                type: 'boolean',
                def: 'false'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});