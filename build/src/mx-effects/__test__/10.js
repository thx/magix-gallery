/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/10",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaI:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryaI:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20"><div class="mr20" mx-view="mx-effects/progress?type=degree&num=60"></div><div class="mr20" mx-view="mx-effects/progress?type=degree&num=20.22"></div><div mx-view="mx-effects/progress?type=degree&num=100"></div></div><div class="mb20"><div class="mr20" mx-view="mx-effects/progress?type=degree&num=60&color=%23ffb400"></div><div mx-view="mx-effects/progress?type=degree&num=80&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_galleryaI:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaI:a" class="_zs_gallery___test___layout_-eg-title">刻度型展示值取整</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 31;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaI:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 33;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaI:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.progress\n    type="degree"\n    num="60"/&gt;\n    \n&lt;mx-effects.progress\n    type="degree"\n    num="20.22"/&gt;\n\n&lt;mx-effects.progress\n    type="degree"\n    num="100"/&gt;\n\n&lt;mx-effects.progress\n    type="degree"\n    num="60" \n    color="#ffb400"/&gt;\n\n&lt;mx-effects.progress\n    type="degree"\n    num="80" \n    color="rgb(81, 163, 0)"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/10.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});