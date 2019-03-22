/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-preview___test___index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-preview___test___index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-preview___test___index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: 4px;\n  overflow-y: auto;\n  border: 1px solid #e6e6e6;\n}\n");
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
    $p += '<div mxa="_zs_galleryc;:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryc;:_" class="_zs_gallery___test___layout_-eg-content"><div class="color-9 mb20"><i class="mc-iconfont displacement-2 mr5">&#xe6ac;</i>会根据屏幕可视范围对预览大小进行修正，<span class="color-brand">预览width，height必配</span></div><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?format=10&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F69961%2F2018%2F05%2F08%2Ff1a2711e-e9057e21-14941396.html&width=1280&height=720&maxWidth=100&maxHeight=100"></div><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?format=10&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F10167%2F2018%2F05%2F08%2F2ae9a14d-ba8eb686-14928142.html&width=586&height=325&maxWidth=100&maxHeight=100"></div><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?format=10&url=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=300&height=250&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryc;:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryc;:a" class="_zs_gallery___test___layout_-eg-title">html 预览</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc;:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 34;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc;:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-preview class="demo"\n    format="10"\n    url="//kb-render.alicdn.com/html/69961/2018/05/08/f1a2711e-e9057e21-14941396.html"\n    width="1280"\n    height="720"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;mx-preview class="demo"\n    format="10"\n    url="//kb-render.alicdn.com/html/10167/2018/05/08/2ae9a14d-ba8eb686-14928142.html"\n    width="586"\n    height="325"\n    max-width="100"\n    max-height="100"/&gt;\n    \n&lt;mx-preview class="demo"\n    format="10"\n    url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="300"\n    height="250"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});