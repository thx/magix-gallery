/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
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
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryar:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_galleryar:_" class="_zs_gallery___test___base_-eg-content"><div class="mb20"><div class="mr20" mx-view="mx-effects/progress?type=degree&num=60"></div><div class="mr20" mx-view="mx-effects/progress?type=degree&num=20.22"></div><div mx-view="mx-effects/progress?type=degree&num=100"></div></div><div class="mb20"><div class="mr20" mx-view="mx-effects/progress?type=degree&num=60&color=%23ffb400"></div><div mx-view="mx-effects/progress?type=degree&num=80&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_galleryar:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryar:a" class="_zs_gallery___test___base_-eg-title">刻度型展示值取整</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 31;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryar:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 33;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryar:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
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