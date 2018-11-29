/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
    $p += '<div mxa="_zs_galleryaz:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryaz:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20 clearfix"><span class="fl w90 lh32">点击禁选：</span><div class="w200 fl" mx-disabled mx-view="mx-dropdown/index?list=%5B1%2C2%2C3%5D"></div></div><div class="mb20 clearfix"><span class="fl w90 lh32">hover禁选：</span><div class="w200 fl" mx-disabled mx-view="mx-dropdown/index?triggerType=hover&list=%5B1%2C2%2C3%5D"></div></div></div><div mxa="_zs_galleryaz:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaz:a" class="_zs_gallery___test___layout_-eg-title">禁用单选框</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaz:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaz:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown class="w200" \n    mx-disabled\n    list="[1,2,3]"&gt;\n&lt;/mx-dropdown&gt;\n\n\n&lt;mx-dropdown class="w200" \n    mx-disabled\n    trigger-type="hover"\n    list="[1,2,3]"&gt;\n&lt;/mx-dropdown&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/5.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});