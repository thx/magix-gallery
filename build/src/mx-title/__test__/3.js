/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-title/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text5 = $$.text5; var $expr, $art, $line; try {
    $p += '<div class="_zs_gallery___test___layout_-example" id="';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"><div mxs="_zs_galleryeY:_" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-title/index?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%B8%80%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_galleryeY:_" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryeY:a" class="_zs_gallery___test___layout_-eg-title">可包含html标签</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:5})" mx-view="mx-copy/index?copyNode=';
    $line = 9;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_5"><span mxa="_zs_galleryeY:a" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 11;
    $art = '!text5';
    ;
    $p += ($expr = '<%!text5%>', $n(text5)) + '</span><i mxs="_zs_galleryeY:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 14;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_5">\n&lt;mx-title \n    content="&lt;span style=\'color: red;\'&gt;一级&lt;/span&gt;标题"\n    tip="&lt;span style=\'color: red;\'&gt;高亮&lt;/span&gt;显示"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-title/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});