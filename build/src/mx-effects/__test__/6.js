/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/6",["magix","__test__/example","$","../notice","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../notice");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryax:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_galleryax:_" class="_zs_gallery___test___base_-eg-content"><div class="mb20" mx-view="mx-effects/notice?color=%2351a300&content=%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%E6%8F%90%E7%A4%BA"></div><div class="mb20" mx-view="mx-effects/notice?color=%2351a300&content=%E5%B8%A6%E8%BE%B9%E6%A1%86%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%E6%8F%90%E7%A4%BA&border=true"></div><div class="mb20" mx-view="mx-effects/notice?color=%2351a300&content=%E5%B8%A6%E8%BE%B9%E6%A1%86%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%E5%B1%85%E5%8F%B3%E6%8F%90%E7%A4%BA&textAlign=right&border=true"></div></div><div mxa="_zs_galleryax:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryax:a" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryax:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryax:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.notice \n    color="#51a300" \n    content="自定义颜色提示"/&gt;\n\n&lt;mx-effects.notice \n    color="#51a300" \n    content="带边框自定义颜色提示" \n    border="true"/&gt;\n\n&lt;mx-effects.notice \n    color="#51a300" \n    content="带边框自定义颜色居右提示" \n    text-align="right" \n    border="true"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/6.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});