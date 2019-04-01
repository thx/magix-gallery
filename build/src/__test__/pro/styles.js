/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/styles",["magix","../example","$","mx-switch/index","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-switch/index");
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var Base = require("../example");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___pro_styles_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___pro_styles_-outer ._zs_gallery_mx-switch_index_-switch {\n  height: 8px;\n  border-radius: 4px;\n}\n._zs_gallery___test___pro_styles_-outer ._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on {\n  background-color: #cbf3f4;\n}\n._zs_gallery___test___pro_styles_-outer ._zs_gallery_mx-switch_index_-switch._zs_gallery_mx-switch_index_-on ._zs_gallery_mx-switch_index_-switch-icon {\n  background-color: #14c9ce;\n}\n");
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
    $p += '<div mxs="_zs_galleryI:_" class="mx-notice mx-notice-border mx-notice-highlight mb20 mr20" style="text-align: left"><div class="mx-notice-inner mx-notice-inner-with"><i class="mc-iconfont mx-notice-icon">&#xe6ad;</i>magix3会对给class加前缀，支持用[ref=\'@path:className\']覆盖样式。但是强烈建议不要直接修改组件，防止版本更新的时候被覆盖，当业务逻辑比较定制的时候，建议写本地组件。&lt;br/&gt;&lt;a href=\'#!/all/pro/local\' class=\'link-brand\'&gt;查看关于开发本地组件的约定&lt;/a&gt;</div></div><div mxa="_zs_galleryI:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryI:a" class="_zs_gallery___test___layout_-eg-content"><div class="clearfix"><div class="fl color-9 mr40">以开关组件示例如何覆盖组件样式</div><div class="fl mr60"><div class="mb10">组件本身展示为：</div><span mx-view="mx-switch/index?state=true"></span></div><div class="fl mr60 _zs_gallery___test___pro_styles_-outer"><div class="mb10">自定义开关样式：</div><span mx-view="mx-switch/index?state=true"></span></div></div></div><div mxa="_zs_galleryI:a" class="clearfix"><div mxa="_zs_galleryI:b" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryI:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryI:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 25;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryI:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="outer"&gt;\n    &lt;mx-switch state="true"/&gt;   \n&lt;/div&gt;</pre></div><div mxa="_zs_galleryI:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryI:d" class="_zs_gallery___test___layout_-eg-title">CSS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryI:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 37;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryI:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n.outer&#123;\n    [ref="@../../mx-switch/index.less:switch"] &#123;\n        height: 8px;\n        border-radius: 4px;\n        \n        &[ref="@../../mx-switch/index.less:on"] &#123;\n            background-color: #cbf3f4;\n\n            [ref="@../../mx-switch/index.less:switch-icon"] &#123;\n                background-color: #14c9ce;\n            &#125;\n    \n        &#125;\n    &#125;\n&#125;\n</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/styles.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});