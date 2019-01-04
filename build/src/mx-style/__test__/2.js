/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-style/__test__/2",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxv mxa="_zs_gallerydi:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerydi:a" class="_zs_galleryk"><div mxv mxa="_zs_gallerydi:b" class="mb20"><input mxs="_zs_gallerydi:_" placeholder="正常尺寸input"/></div><div mxv mxa="_zs_gallerydi:c" class="mb20"><input mxs="_zs_gallerydi:a" class="input-small" placeholder="小号input"/></div><div mxs="_zs_gallerydi:b" class="mb20 clearfix"><span class="color-9 fl lh32">只使用input样式：</span><span class="input w200 fl"></span></div></div><div mxa="_zs_gallerydi:d" class="_zs_galleryl"><div mxs="_zs_gallerydi:c" class="_zs_galleryj">Input</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydi:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydi:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;input type="text" placeholder="正常尺寸input"/&gt;\n\n&lt;input type="text" class="input-small" placeholder="小号input"/&gt;\n\n&lt;span class="input w200 fl"&gt;&lt;/span&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});