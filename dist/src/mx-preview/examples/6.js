/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/examples/6",["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-preview_examples_index_","._zs_gallery_mx-preview_examples_index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-preview_examples_index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow-y: auto;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, list = $$.list; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery_mx-preview_examples_index_-scroll" id="';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_scroll_wrapper">';
    $line = 2;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_irdfgetkge$art_i = 0, $art_cwdsknx$art_c = list.length; $art_irdfgetkge$art_i < $art_cwdsknx$art_c; $art_irdfgetkge$art_i++) {    var item = list[$art_irdfgetkge$art_i]%>';
    for (var $art_irdfgetkge$art_i = 0, $art_cwdsknx$art_c = list.length; $art_irdfgetkge$art_i < $art_cwdsknx$art_c; $art_irdfgetkge$art_i++) {
        var item = list[$art_irdfgetkge$art_i];
        $p += '<div class="_zs_gallery_mx-preview_examples_index_-demo" mx-view="mx-preview/index?type=image&url=';
        $line = 5;
        $art = '=item';
        ;
        $p += ($expr = '<%!$eu(item)%>', $eu(item)) + '&maxWidth=150&maxHeight=150"></div>';
        $line = 8;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/examples/6.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [
            'https://img.alicdn.com/tfs/TB1xt_lwmBYBeNjy0FeXXbnmFXa-690-416.jpg',
            'https://img.alicdn.com/tfs/TB1UUX7wbGYBuNjy0FoXXciBFXa-686-408.jpg',
            'https://img.alicdn.com/tfs/TB1klyskwDD8KJjy0FdXXcjvXXa-254-218.png',
            'https://img.alicdn.com/tfs/TB1tX04gbYI8KJjy0FaXXbAiVXa-550-832.png',
            'https://img.alicdn.com/tfs/TB1ByTYaMoQMeJjy0FpXXcTxpXa-420-320.png',
            'https://img.alicdn.com/tfs/TB1WO78SpXXXXbEapXXXXXXXXXX-1039-693.png',
            'https://img.alicdn.com/tfs/TB1UoWNPFXXXXc1aXXXXXXXXXXX-158-93.png',
            'https://img.alicdn.com/tfs/TB1K8oRPXXXXXcDXpXXXXXXXXXX-455-250.png',
            'https://img.alicdn.com/tfs/TB1HHqEIVXXXXaYXVXXXXXXXXXX.jpg'
        ];
        this.updater.digest({
            list: list
        });
    }
});

});