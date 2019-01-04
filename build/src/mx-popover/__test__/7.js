/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/7",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text3 = $$.text3; $p += '<div mxa="_zs_gallerycR:_" class="_zs_galleryh"><div mxs="_zs_gallerycR:_" class="_zs_galleryk"><span class="btn mr20" mx-view="mx-popover/index?content=%E5%B7%A6%E4%B8%AD%E5%AF%B9%E9%BD%90&placement=left">左中对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E5%B7%A6%E4%B8%8A%E5%AF%B9%E9%BD%90&placement=left&align=top">左上对齐</span><span class="btn" mx-view="mx-popover/index?content=%E5%B7%A6%E4%B8%8B%E5%AF%B9%E9%BD%90&placement=left&align=bottom">左下对齐</span></div><div mxa="_zs_gallerycR:a" class="_zs_galleryl"><div mxs="_zs_gallerycR:a" class="_zs_galleryj">左中对齐</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerycR:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerycR:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-popover class="btn mr20"\n    content="左中对齐"\n    placement="left"&gt;左中对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerycR:c" class="_zs_galleryl"><div mxs="_zs_gallerycR:c" class="_zs_galleryj">左上对齐</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerycR:d" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerycR:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n&lt;mx-popover class="btn mr20"\n    content="左上对齐"\n    placement="left"\n    align="top"&gt;左上对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerycR:e" class="_zs_galleryl"><div mxs="_zs_gallerycR:d" class="_zs_galleryj">左下对齐</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_3"><span mxa="_zs_gallerycR:f" class="_zs_galleryo">' + $n(text3) + '</span><i mxs="_zs_gallerycR:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_3">\n&lt;mx-popover class="btn mr20"\n    content="左下对齐"\n    placement="left"\n    align="bottom"&gt;左下对齐&lt;/mx-popover&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});