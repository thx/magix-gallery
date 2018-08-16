/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
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
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaw:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_galleryaw:_" class="_zs_gallery___test___base_-eg-content"><div class="ml60 mt30" mx-view="mx-effects/progress?num=-20.3"></div><div class="ml60 mt30" mx-view="mx-effects/progress?num=10"></div><div class="ml60 mt30" mx-view="mx-effects/progress?num=20.2&textPlacement=left"></div><div class="ml60 mt30" mx-view="mx-effects/progress?num=40.23&textPlacement=right"></div><div class="ml60 mt30" mx-view="mx-effects/progress?num=60.555&textPlacement=bottom"></div><div class="ml60 mt30 mb40" mx-view="mx-effects/progress?num=101.2&textPlacement=bottom"></div></div><div mxa="_zs_galleryaw:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryaw:a" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaw:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaw:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.progress class="ml60 mt30"\n    num="-20.3"/&gt;\n\n&lt;mx-effects.progress class="ml60 mt30"\n    num="10"/&gt;\n\n&lt;mx-effects.progress class="ml60 mt30"\n    num="20.2" \n    text-placement="left"/&gt;\n\n&lt;mx-effects.progress class="ml60 mt30"\n    num="40.23" \n    text-placement="right"/&gt;\n\n&lt;mx-effects.progress class="ml60 mt30"\n    num="60.555" \n    text-placement="bottom"/&gt;\n\n&lt;mx-effects.progress class="ml60 mt30"\n    num="101.2" \n    text-placement="bottom"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/8.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});