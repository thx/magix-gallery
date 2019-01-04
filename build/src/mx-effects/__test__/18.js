/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/18",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryH","._zs_galleryeJ{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryeK{width:100px;height:100px;border-radius:50%;background-color:#4d7fff}._zs_galleryeL{padding-top:35px;color:#fff}._zs_galleryeM,._zs_galleryeL{text-align:center}._zs_galleryeM{padding-top:5px}._zs_galleryeM ._zs_galleryeN{font-size:24px;color:#fff}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerya):_" class="_zs_galleryh"><div mxs="_zs_gallerya):_" class="_zs_galleryk"><div class="mb20"><span class="color-9">以下示例：</span>上下浮动效果</div><div class="_zs_galleryeK"><div class="_zs_galleryeL">浏览更多</div><div class="_zs_galleryeM"><i class="mc-iconfont _zs_galleryeN mx-anim-suspension">&#xeb95;</i></div></div></div><div mxa="_zs_gallerya):a" class="_zs_galleryl"><div mxs="_zs_gallerya):a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerya):b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerya):b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;!-- 添加 class mx-anim-suspension --&gt;\n&lt;div class="suspension"&gt;\n    &lt;div class="text"&gt;浏览更多&lt;/div&gt;\n    &lt;div class="icon"&gt;\n        &lt;i class="mc-iconfont suspension-icon mx-anim-suspension"&gt;\n            &#38;&#35;xeb95;\n        &lt;/i&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});