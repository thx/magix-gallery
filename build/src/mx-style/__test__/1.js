/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-style/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryb1:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_galleryb1:_" class="_zs_gallery___test___base_-eg-content"><div class="mb20"><a href="javascript:;" class="btn btn-brand mr20">品牌色按钮</a><a href="javascript:;" class="btn mr20">普通按钮</a><a href="javascript:;" class="btn btn-disabled">按钮禁用</a></div><div class="mb20"><a href="javascript:;" class="btn btn-small btn-brand mr20">小号品牌色按钮</a><a href="javascript:;" class="btn btn-small mr20">小号普通按钮</a><a href="javascript:;" class="btn btn-small btn-disabled">小号按钮禁用</a></div></div><div mxa="_zs_galleryb1:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryb1:a" class="_zs_gallery___test___base_-eg-title">按钮</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb1:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 18;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb1:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" class="btn btn-brand">品牌色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn"&gt;普通按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-disabled"&gt;按钮禁用&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-small btn-brand"&gt;小号品牌色按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-small"&gt;小号普通按钮&lt;/a&gt;\n\n&lt;a href="javascript:;" class="btn btn-small btn-disabled"&gt;小号按钮禁用&lt;/a&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-style/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});