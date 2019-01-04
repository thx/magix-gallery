/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/12",["magix","__test__/example","$","../index"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryan","._zs_gallerykv{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykw{color:#ccc;border:1px solid #e6e6e6;width:24px;height:24px;border-radius:4px;text-align:center;line-height:22px}._zs_gallerykx{zoom:2}._zs_galleryky{-webkit-transform:scale(2);transform:scale(2)}");
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
} ; var $g = '', $_temp, $p = ''; $p += '<div mxs="_zs_gallerycK:_" class="_zs_galleryh"><div class="_zs_galleryk"><div class="mb20">异常场景：zoom不会影响CSSOM，transform会影响部分，使用这类样式的时候，相对节点定位会出错</div><div class="mb20 clearfix"><div class="fl mr20">原icon</div><div class="fl"><span class="_zs_gallerykw mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">zoom: 2</div><div class="fl"><span class="_zs_gallerykx _zs_gallerykw mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">transform: scale(2);</div><div class="fl"><span class="_zs_galleryky _zs_gallerykw mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});