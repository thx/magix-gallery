/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/__test__/6",["magix","$","../index"],(require,exports,module)=>{
/*Magix,$*/
require("../index");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryap","._zs_gallerykD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykE{margin-right:20px;margin-bottom:20px;border:1px solid #e6e6e6;background-color:#fafafa}._zs_gallerykF{width:400px;height:220px;padding:10px;border-radius:4px;overflow-y:auto;border:1px solid #e6e6e6}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, list = $$.list; $p += '<div class="_zs_gallerykF" id="' + $e(viewId) + '_scroll_wrapper">'; for (var $art_ihinmiyw$art_i = 0, $art_cxuhbatf$art_c = list.length; $art_ihinmiyw$art_i < $art_cxuhbatf$art_c; $art_ihinmiyw$art_i++) {
    var item = list[$art_ihinmiyw$art_i];
    $p += '<div class="_zs_gallerykE" mx-view="mx-preview/index?format=2&url=' + $eu(item) + '&maxWidth=150&maxHeight=150"></div>';
} ; $p += '</div>'; return $p; },
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