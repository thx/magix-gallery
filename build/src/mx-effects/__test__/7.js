/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/7",["magix","__test__/example","$","../notice","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../notice");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerya.:_" class="_zs_galleryh"><div mxs="_zs_gallerya.:_" class="_zs_galleryk"><div class="mb20" mx-view="mx-effects/notice?type=highlight&content=%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E5%BC%BA%E8%B0%83"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&border=true&content=%E5%B8%A6%E8%BE%B9%E6%A1%86%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E5%BC%BA%E8%B0%83"></div></div><div mxa="_zs_gallerya.:a" class="_zs_galleryl"><div mxs="_zs_gallerya.:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerya.:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerya.:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-effects.notice \n    type="highlight" \n    content="重要信息强调"/&gt;\n    \n&lt;mx-effects.notice \n    type="highlight" \n    border="true" \n    content="带边框重要信息强调"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});