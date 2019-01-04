/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/custom",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_galleryao","._zs_gallerykz{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykA{border-radius:4px}._zs_gallerykA ._zs_gallerykB{padding:10px;background-color:#fafafa;border-top-left-radius:4px;border-top-right-radius:4px}._zs_gallerykA ._zs_gallerykC{float:left;width:33.3%;padding:10px}");
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
} ; var $g = '', $_temp, $p = '', list = $$.list; $p += '<div mxa="_zs_gallerycU:_" class="_zs_gallerykA"><div mxs="_zs_gallerycU:_" class="_zs_gallerykB">标题标题</div><div mxa="_zs_gallerycU:a" class="clearfix">'; for (var $art_ibleiwcms$art_i = 0, $art_ceruiuahnv$art_c = list.length; $art_ibleiwcms$art_i < $art_ceruiuahnv$art_c; $art_ibleiwcms$art_i++) {
    var item = list[$art_ibleiwcms$art_i];
    $p += '<div mxa="_zs_gallerycU:b" class="_zs_gallerykC"><div mxa="_zs_gallerycU:c" class="mb5 color-9">' + $e(item.name) + '</div><div mxs="_zs_gallerycU:a">-</div></div>';
} ; $p += '</div></div>'; return $p; },
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