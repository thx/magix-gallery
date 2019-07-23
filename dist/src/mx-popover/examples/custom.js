/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/examples/custom",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-popover_examples_custom_","._zs_gallery_mx-popover_examples_custom_-custom {\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-popover_examples_custom_-custom ._zs_gallery_mx-popover_examples_custom_-custom-title {\n  padding: 10px;\n  background-color: var(--color-bg);\n  border-top-left-radius: var(--border-radius);\n  border-top-right-radius: var(--border-radius);\n}\n._zs_gallery_mx-popover_examples_custom_-custom ._zs_gallery_mx-popover_examples_custom_-custom-item {\n  float: left;\n  width: 33.3%;\n  padding: 10px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydC:_" class="_zs_gallery_mx-popover_examples_custom_-custom"><div mxs="_zs_gallerydC:_" class="_zs_gallery_mx-popover_examples_custom_-custom-title">标题标题</div><div mxa="_zs_gallerydC:a" class="clearfix">';
    $line = 5;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ijjaxeof$art_i = 0, $art_cfuhnndm$art_c = list.length; $art_ijjaxeof$art_i < $art_cfuhnndm$art_c; $art_ijjaxeof$art_i++) {    var item = list[$art_ijjaxeof$art_i]%>';
    for (var $art_ijjaxeof$art_i = 0, $art_cfuhnndm$art_c = list.length; $art_ijjaxeof$art_i < $art_cfuhnndm$art_c; $art_ijjaxeof$art_i++) {
        var item = list[$art_ijjaxeof$art_i];
        $p += '<div mxa="_zs_gallerydC:b" class="_zs_gallery_mx-popover_examples_custom_-custom-item"><div mxa="_zs_gallerydC:c" class="mb5 color-9">';
        $line = 7;
        $art = '=item.name';
        ;
        $p += ($expr = '<%=item.name%>', $e(item.name)) + '</div><div mxs="_zs_gallerydC:a">-</div></div>';
        $line = 10;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/examples/custom.html';
    throw msg;
} return $p; },
    init: function (e) {
        var that = this;
        this.updater.set(e.data);
    },
    render: function () {
        var that = this;
        var loc = Magix.Router.parse();
        that.updater.digest({});
    }
});

});