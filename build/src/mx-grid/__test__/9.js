/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/__test__/9",["magix","__test__/example","$","./grid-body","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("./grid-body");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-grid___test___index_","/* @dependent: ./index.less */\n._zs_gallery_mx-grid___test___index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-grid___test___index_-grid1 {\n  background-color: #4d7fff;\n  opacity: 0.1;\n}\n._zs_gallery_mx-grid___test___index_-grid2 {\n  background-color: #4d7fff;\n  opacity: 0.2;\n}\n._zs_gallery_mx-grid___test___index_-grid3 {\n  background-color: #4d7fff;\n  opacity: 0.3;\n}\n._zs_gallery_mx-grid___test___index_-grid4 {\n  background-color: #4d7fff;\n  opacity: 0.4;\n}\n._zs_gallery_mx-grid___test___index_-grid5 {\n  background-color: #4d7fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-grid___test___index_-grid6 {\n  background-color: #4d7fff;\n  opacity: 0.6;\n}\n._zs_gallery_mx-grid___test___index_-grid7 {\n  background-color: #4d7fff;\n  opacity: 0.7;\n}\n._zs_gallery_mx-grid___test___index_-grid8 {\n  background-color: #4d7fff;\n  opacity: 0.8;\n}\n._zs_gallery_mx-grid___test___index_-grid9 {\n  background-color: #4d7fff;\n  opacity: 0.9;\n}\n._zs_gallery_mx-grid___test___index_-grid10 {\n  background-color: #4d7fff;\n  opacity: 1;\n}\n._zs_gallery_mx-grid___test___index_-container {\n  padding: 16px;\n  background-color: #fafafa;\n}\n");
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
    $p += '<div mxa="_zs_gallerybR:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybR:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb10">内容区域支持指定一个view：</div><div class="_zs_gallery_mx-grid___test___index_-container"><div class="grid"><div mx-view="mx-grid/__test__/grid-body" class="clearfix" style="padding: 16px 24px;"></div></div></div></div><div mxa="_zs_gallerybR:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybR:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 12;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybR:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 14;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybR:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.body mx-view="@./grid-body"&gt;&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-grid/__test__/9.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});