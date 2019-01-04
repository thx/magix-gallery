/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/tip",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryaf","._zs_galleryjo{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjp{position:relative;top:0;left:0;margin:0 20px 20px 0;padding-left:24px}._zs_galleryjp ._zs_galleryjq{padding:10px;border:1px solid #e6e6e6;border-radius:4px;color:#999;background-color:#fff}._zs_galleryjp ._zs_galleryjr{opacity:.5;position:absolute;top:50%;left:-8px;font-size:22px;margin-top:-10px;color:#4d7fff}._zs_galleryjp:after,._zs_galleryjp:before{content:\"\";position:absolute;top:50%;left:18px;width:0;height:0;margin-top:-7px;border-top:7px solid transparent;border-right:6px solid #ccc;border-bottom:6px solid transparent}._zs_galleryjp:after{border-right:6px solid #fff;left:19px}");
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
} ; var $g = '', $_temp, $p = '', view = $$.view, content = $$.content; if (view) {
    ;
    $p += '<div mx-view="' + $e(view) + '"><div mxs="_zs_gallerycn:_" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>';
}
else {
    ;
    $p += '<div mxa="_zs_gallerycn:_" class="_zs_galleryjp"><i mxs="_zs_gallerycn:a" class="mc-iconfont _zs_galleryjr">&#xe654;</i><div mxa="_zs_gallerycn:a" class="_zs_galleryjq">' + $n(content) + '</div></div>';
} ; return $p; },
    init: function (extra) {
        var data = extra.data || {};
        this.updater.set(data);
    },
    render: function () {
        this.updater.digest();
    }
});

});