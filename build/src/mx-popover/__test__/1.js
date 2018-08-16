/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text3 = $$.text3; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybq:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallerybq:_" class="_zs_gallery___test___base_-eg-content"><span class="btn mr20" mx-view="mx-popover/index?content=%E9%BB%98%E8%AE%A4%E4%B8%8B%E4%B8%AD%E9%97%B4%E5%AF%B9%E9%BD%90">默认下中间对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E4%B8%8B%E5%B7%A6%E5%AF%B9%E9%BD%90&placement=bottom&align=left">下左对齐</span><span class="btn" mx-view="mx-popover/index?content=%E4%B8%8B%E5%8F%B3%E5%AF%B9%E9%BD%90&placement=bottom&align=right">下右对齐</span></div><div mxa="_zs_gallerybq:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybq:a" class="_zs_gallery___test___base_-eg-title">下中间对齐</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybq:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 18;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybq:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-popover class="btn"\n    content="默认下中间对齐"&gt;默认下中间对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerybq:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybq:c" class="_zs_gallery___test___base_-eg-title">下左对齐</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 27;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybq:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 29;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybq:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;mx-popover class="btn"\n    content="下左对齐"\n    placement="bottom"\n    align="left"&gt;下左对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerybq:e" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybq:d" class="_zs_gallery___test___base_-eg-title">下右对齐</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 40;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerybq:f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 42;
    $art = '!text3';
    ;
    $p += '' + ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerybq:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 45;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;mx-popover class="btn"\n    content="下右对齐"\n    placement="bottom"\n    align="right"&gt;下右对齐&lt;/mx-popover&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});