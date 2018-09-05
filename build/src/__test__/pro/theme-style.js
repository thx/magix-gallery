/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/theme-style",["magix","../example","$","mx-effects/notice","mx-switch/index","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-effects/notice");
require("mx-switch/index");
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var Base = require("../example");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___pro_theme-style_","/* @dependent: ./index.less */\n._zs_gallery___test___pro_theme-style_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery___test___pro_theme-style_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___pro_theme-style_-outer ._zs_gallery_mx-switch_index_-switch {\n  height: 8px;\n  border-radius: 4px;\n}\n._zs_gallery___test___pro_theme-style_-outer ._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on {\n  background-color: #cbf3f4;\n}\n._zs_gallery___test___pro_theme-style_-outer ._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on ._zs_gallery_mx-switch_index_-switch-icon {\n  background-color: #14c9ce;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryH:_" class="mb20 mr20" mx-view="mx-effects/notice?content=magix3%E4%BC%9A%E5%AF%B9%E7%BB%99class%E5%8A%A0%E5%89%8D%E7%BC%80%EF%BC%8C%E6%94%AF%E6%8C%81%E7%94%A8%5Bref%3D%27%40path%3AclassName%27%5D%E8%A6%86%E7%9B%96%E6%A0%B7%E5%BC%8F%E3%80%82%E4%BD%86%E6%98%AF%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E7%9B%B4%E6%8E%A5%E4%BF%AE%E6%94%B9%E7%BB%84%E4%BB%B6%EF%BC%8C%E9%98%B2%E6%AD%A2%E7%89%88%E6%9C%AC%E6%9B%B4%E6%96%B0%E7%9A%84%E6%97%B6%E5%80%99%E8%A2%AB%E8%A6%86%E7%9B%96%EF%BC%8C%E5%BD%93%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91%E6%AF%94%E8%BE%83%E5%AE%9A%E5%88%B6%E7%9A%84%E6%97%B6%E5%80%99%EF%BC%8C%E5%BB%BA%E8%AE%AE%E5%86%99%E6%9C%AC%E5%9C%B0%E7%BB%84%E4%BB%B6%E3%80%82%3Cbr%2F%3E%3Ca%20href%3D%27%23%21%2Fall%2Fpro%2Flocal%27%20class%3D%27link-brand%20ml20%27%3E%E6%9F%A5%E7%9C%8B%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E6%9C%AC%E5%9C%B0%E7%BB%84%E4%BB%B6%3C%2Fa%3E&border=true&type=highlight"></div><div mxa="_zs_galleryH:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryH:a" class="_zs_gallery___test___layout_-eg-content"><div class="clearfix"><div class="fl color-9 mr40">以开关组件示例如何覆盖组件样式</div><div class="fl mr60"><div class="mb10">组件本身展示为：</div><span mx-view="mx-switch/index?state=true"></span></div><div class="fl mr60 _zs_gallery___test___pro_theme-style_-outer"><div class="mb10">自定义开关样式：</div><span mx-view="mx-switch/index?state=true"></span></div></div></div><div mxa="_zs_galleryH:a" class="clearfix"><div mxa="_zs_galleryH:b" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryH:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryH:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 25;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryH:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="outer"&gt;\n    &lt;mx-switch state="true"/&gt;   \n&lt;/div&gt;</pre></div><div mxa="_zs_galleryH:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryH:d" class="_zs_gallery___test___layout_-eg-title">CSS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 35;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryH:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 37;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryH:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n.outer&#123;\n    [ref="@../../mx-switch/index.less:switch"] &#123;\n        height: 8px;\n        border-radius: 4px;\n        \n        &[ref="@../../mx-switch/index.less:on"] &#123;\n            background-color: tint(#14c9ce, 78%);\n\n            [ref="@../../mx-switch/index.less:switch-icon"] &#123;\n                background-color: #14c9ce;\n            &#125;\n    \n        &#125;\n    &#125;\n&#125;\n</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/theme-style.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});