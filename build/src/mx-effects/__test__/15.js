/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/15",["magix","__test__/example","$","../icon","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../icon");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerya&:_" class="_zs_galleryh"><div mxs="_zs_gallerya&:_" class="_zs_galleryk"><span class="mr10" mx-view="mx-effects/icon?mode=hollow&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=error&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=warn&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=highlight&content=%E6%B5%8B%E8%AF%95"></span></div><div mxa="_zs_gallerya&:a" class="_zs_galleryl"><div mxs="_zs_gallerya&:a" class="_zs_galleryj">空心打标</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerya&:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerya&:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-effects.icon mode="hollow" content="测试"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="error" content="测试"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="warn" content="测试"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="highlight" content="测试"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});