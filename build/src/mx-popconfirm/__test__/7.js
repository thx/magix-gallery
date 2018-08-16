/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/__test__/7",["magix","__test__/example","$","mx-popover/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-popover/index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text3 = $$.text3; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybi:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallerybi:_" class="_zs_gallery___test___base_-eg-content"><span class="btn mr20" mx-view="mx-popover/index?content=%E5%B7%A6%E4%B8%AD%E5%AF%B9%E9%BD%90&placement=left">左中对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E5%B7%A6%E4%B8%8A%E5%AF%B9%E9%BD%90&placement=left&align=top">左上对齐</span><span class="btn" mx-view="mx-popover/index?content=%E5%B7%A6%E4%B8%8B%E5%AF%B9%E9%BD%90&placement=left&align=bottom">左下对齐</span></div><div mxa="_zs_gallerybi:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybi:a" class="_zs_gallery___test___base_-eg-title">左中对齐</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybi:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybi:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-popover class="btn mr20"\n    content="左中对齐"\n    placement="left"&gt;左中对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerybi:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybi:c" class="_zs_gallery___test___base_-eg-title">左上对齐</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 29;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybi:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 31;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybi:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;mx-popover class="btn mr20"\n    content="左上对齐"\n    placement="left"\n    align="top"&gt;左上对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerybi:e" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybi:d" class="_zs_gallery___test___base_-eg-title">左下对齐</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 42;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerybi:f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 44;
    $art = '!text3';
    ;
    $p += '' + ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerybi:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;mx-popover class="btn mr20"\n    content="左下对齐"\n    placement="left"\n    align="bottom"&gt;左下对齐&lt;/mx-popover&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popconfirm/__test__/7.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});