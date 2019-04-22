/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-title/__test__/4",["magix","__test__/example","$","../second","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../second");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text3 = $$.text3, text4 = $$.text4; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery___test___layout_-example" id="';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"><div mxs="_zs_galleryeY:_" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-title/second?content=%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div></div><div mxa="_zs_galleryeY:_" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryeY:a" class="_zs_gallery___test___layout_-eg-title">使用组件</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 9;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_galleryeY:a" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 11;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_galleryeY:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 14;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;mx-title.second\n    content="二级标题"\n    tip="二级标题提示文案"/&gt;\n        </pre></div><div mxa="_zs_galleryeY:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryeY:c" class="_zs_gallery___test___layout_-eg-title">可直接使用class</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:4})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_4"><span mxa="_zs_galleryeY:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text4';
    ;
    $p += ($expr = '<%!text4%>', $n(text4)) + '</span><i mxs="_zs_galleryeY:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_4">\n&lt;div class="page-header"&gt;\n    &lt;span class="second-header"&gt;二级标题&lt;/span&gt;\n    &lt;span class="page-tip"&gt;二级标题提示文案&lt;/span&gt;\n&lt;/div&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-title/__test__/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});