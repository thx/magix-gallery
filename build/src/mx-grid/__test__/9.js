/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/__test__/9",["magix","__test__/example","$","./grid-body","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("./grid-body");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryR","._zs_gallerygo{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygp{opacity:.1}._zs_gallerygp,._zs_gallerygq{background-color:#4d7fff}._zs_gallerygq{opacity:.2}._zs_gallerygr{opacity:.3}._zs_gallerygr,._zs_gallerygs{background-color:#4d7fff}._zs_gallerygs{opacity:.4}._zs_gallerygt{opacity:.5}._zs_gallerygt,._zs_gallerygu{background-color:#4d7fff}._zs_gallerygu{opacity:.6}._zs_gallerygv{opacity:.7}._zs_gallerygv,._zs_gallerygw{background-color:#4d7fff}._zs_gallerygw{opacity:.8}._zs_gallerygx{opacity:.9}._zs_gallerygx,._zs_gallerygy{background-color:#4d7fff}._zs_gallerygy{opacity:1}._zs_gallerygz{padding:16px;background-color:#fafafa}");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerybT:_" class="_zs_galleryh"><div mxs="_zs_gallerybT:_" class="_zs_galleryk"><div class="mb10">内容区域支持指定一个view：</div><div class="_zs_gallerygz"><div class="grid"><div mx-view="mx-grid/__test__/grid-body" class="clearfix" style="padding: 16px 24px;"></div></div></div></div><div mxa="_zs_gallerybT:a" class="_zs_galleryl"><div mxs="_zs_gallerybT:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerybT:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerybT:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.body mx-view="@./grid-body"&gt;&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n\n&lt;mx-grid&gt;\n    &lt;mx-grid.body&gt;grid-body&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n        </pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});