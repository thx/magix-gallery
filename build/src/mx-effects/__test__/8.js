/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/8",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../progress");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerya?:_" class="_zs_galleryh"><div mxs="_zs_gallerya?:_" class="_zs_galleryk"><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=-20.3"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=10"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=20.2&textPlacement=left"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=40.23&textPlacement=right"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=60.555&textPlacement=bottom"></div></div><div class="ml40 mt20 mb40"><div mx-view="mx-effects/progress?num=101.2&textPlacement=bottom"></div></div></div><div mxa="_zs_gallerya?:a" class="_zs_galleryl"><div mxs="_zs_gallerya?:a" class="_zs_galleryj">条型进度条，精度与传入数值保持一致</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerya?:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerya?:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-effects.progress\n    num="-20.3"/&gt;\n\n&lt;mx-effects.progress\n    num="10"/&gt;\n\n&lt;mx-effects.progress\n    num="20.2" \n    text-placement="left"/&gt;\n\n&lt;mx-effects.progress\n    num="40.23" \n    text-placement="right"/&gt;\n\n&lt;mx-effects.progress\n    num="60.555" \n    text-placement="bottom"/&gt;\n\n&lt;mx-effects.progress\n    num="101.2" \n    text-placement="bottom"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});