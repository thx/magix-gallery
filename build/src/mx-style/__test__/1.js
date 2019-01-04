/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-style/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryav","._zs_gallerylK{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylL{padding:10px}._zs_gallerylM{background-color:#eee}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerydh:_" class="_zs_galleryh"><div mxs="_zs_gallerydh:_" class="_zs_galleryk"><div class="_zs_gallerylL"><a href="javascript:;" class="btn btn-brand mr20">品牌色按钮</a><a href="javascript:;" class="btn btn-brand btn-small mr20">小号品牌色按钮</a><a href="javascript:;" class="btn btn-brand"><i class="mc-iconfont displacement-2">&#xe731;</i>&nbsp;品牌色按钮</a></div><div class="_zs_gallerylL"><a href="javascript:;" class="btn mr20">普通按钮</a><a href="javascript:;" class="btn btn-small mr20">小号普通按钮</a><a href="javascript:;" class="btn"><i class="mc-iconfont displacement-2">&#xe731;</i>&nbsp;品牌色按钮</a></div><div class="_zs_gallerylL _zs_gallerylM"><a href="javascript:;" class="btn btn-white mr20">白色按钮</a><a href="javascript:;" class="btn btn-white btn-small mr20">小号白色按钮</a><a href="javascript:;" class="btn btn-white"><i class="mc-iconfont displacement-2">&#xe731;</i>&nbsp;品牌色按钮</a></div><div class="_zs_gallerylL"><a href="javascript:;" class="btn btn-disabled mr20">禁用按钮</a><a href="javascript:;" class="btn btn-disabled btn-small mr20">小号禁用按钮</a><a href="javascript:;" class="btn btn-disabled"><i class="mc-iconfont displacement-2">&#xe731;</i>&nbsp;品牌色按钮</a></div></div><div mxa="_zs_gallerydh:a" class="_zs_galleryl"><div mxs="_zs_gallerydh:a" class="_zs_galleryj">按钮</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydh:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydh:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;a href="javascript:;" class="btn btn-brand"&gt;品牌色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand btn-small"&gt;小号品牌色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn"&gt;普通按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-small"&gt;小号普通按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-white"&gt;白色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-white btn-small"&gt;小号白色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-disabled"&gt;禁用按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-disabled btn-small"&gt;小号禁用按钮&lt;/a&gt;\n        </pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});