/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-im/examples/wanxiang",["magix","$","mx-title/second","./1","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
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
    $p += '<div id="';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryc9:_" mx-view="mx-im/examples/1" class="mb40"></div><div id="';
    $line = 4;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options=';
    $line = 5;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-im/examples/wanxiang.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'default-source-id',
                desc: '必填，页面问答的默认sourceId，若当前页面路径不在source-map，则默认为该sourceId',
                type: 'string',
                def: 'text'
            }, {
                key: 'source-map',
                desc: "\u5982\u679C\u4E0D\u540C\u8DEF\u5F84\u7684\u5BF9\u5E94\u4E0D\u540C\u7684\u95EE\u7B54\uFF0C\u914D\u7F6E\u8DEF\u5F84\u5230sourceId\u7684\u6620\u5C04\u5173\u7CFB\uFF0C<br/>\n<span class=\"color-brand\">\u652F\u6301\u5E26\u53C2\u6570\u7684\u914D\u7F6E\uFF08\u5F53\u524D\u53C2\u6570\u5305\u542B\u914D\u7F6E\u53C2\u6570\u5219\u5339\u914D\u4E0A\uFF09</span>\uFF0C\u4F8B\u5982\uFF1A<pre>\n{\n    '/im/demo1': 83475,\n    '/im/demo2?version=1': 83476\n}\n</pre>\n<br/>\n<span class=\"color-red\">\u9700\u8981\u6CE8\u610F\u4E0D\u540CsourceId\u7684\u9875\u9762\u9ED8\u8BA4\u914D\u7F6E\u9879\u5FC5\u987B\u76F8\u540C\uFF0C\u4E0D\u7136\u4F1A\u4EA7\u751F\u4F4D\u7F6E\u5DEE\u9519</span>",
                type: 'object',
                def: '{}'
            }];
        this.updater.digest({
            options: options,
            viewId: this.id
        });
    }
});

});