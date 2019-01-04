/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/6",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../range");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_galleryc\\:_" class="_zs_galleryh"><div mxs="_zs_galleryc\\:_" class="_zs_galleryk"><div class="mb40"><div mx-view="mx-slider/range?max=200&min=100&step=1"></div></div><div class="mb20"><div mx-view="mx-slider/range?max=200&min=100&step=0.5"></div></div></div><div mxa="_zs_galleryc\\:a" class="_zs_galleryl"><div mxs="_zs_galleryc\\:a" class="_zs_galleryj">step决定滑轴刻度</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryc\\:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryc\\:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    step="1"/&gt;\n\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    step="0.5"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});