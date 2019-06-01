/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/13",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
/**
 * 修改type参数为mode，历史配置依然兼容
 */
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-popover___test___error_","._zs_gallery_mx-popover___test___error_-icon {\n  color: #ccc;\n  border: 1px solid var(--color-border);\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  text-align: center;\n  line-height: 22px;\n}\n._zs_gallery_mx-popover___test___error_-zoom-icon {\n  zoom: 2;\n}\n._zs_gallery_mx-popover___test___error_-transform-icon {\n  -webkit-transform: scale(2);\n          transform: scale(2);\n}\n");
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
    $p += '<div mxa="_zs_gallerydb:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerydb:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb10">异常场景：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效</div><div class="mb10">如何解决：使用<span class="color-brand">view-type</span>与原生属性type区分</div><div class="mb10">正确场景：<a class="mc-iconfont color-9 fontsize-18" mx-view="mx-popover/index?width=66&content=%E5%88%A0%E9%99%A4&type=dark&placement=top&alignText=center">&#xe68d;</a></div><div class="mb10">错误场景：<a class="mc-iconfont color-9 fontsize-18" type="dark" mx-view="mx-popover/index?width=66&content=%E5%88%A0%E9%99%A4&placement=top&alignText=center">&#xe68d;</a></div></div><div mxa="_zs_gallerydb:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydb:a" class="_zs_gallery___test___layout_-eg-title">正确场景</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydb:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 28;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydb:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    tag="a"\n    width="66"\n    content="删除"\n    view-type="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerydb:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydb:c" class="_zs_gallery___test___layout_-eg-title">错误场景</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerydb:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 44;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerydb:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    tag="a"\n    width="66"\n    content="删除"\n    type="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/13.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});