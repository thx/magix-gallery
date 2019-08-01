/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-collapse/examples/content",["magix","mx-preview/index"],(require,exports,module)=>{
/*Magix*/
require("mx-preview/index");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-collapse_examples_index_","._zs_gallery_mx-collapse_examples_index_-demo {\n  margin-right: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n");
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
} ; var $g = '', $_temp, $p = '', outer = $$.outer; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaw:_" class="mb20">当前模块标题是：';
    $line = 1;
    $art = '!outer.title';
    ;
    $p += ($expr = '<%!outer.title%>', $n(outer.title)) + '</div><div mxs="_zs_galleryaw:_" class="clearfix"><div class="_zs_gallery_mx-collapse_examples_index_-demo" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div><div class="_zs_gallery_mx-collapse_examples_index_-demo" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-collapse/examples/content.html';
    throw msg;
} return $p; },
    init: function (e) {
        var that = this;
        var data = e.data || {};
        this.updater.set({
            outer: data
        });
    },
    render: function () {
        this.updater.digest({});
    }
});

});