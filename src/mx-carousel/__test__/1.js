/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-carousel___test___1_","/* @dependent: ./index.less */\n._zs_gallery_mx-carousel___test___1_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-carousel___test___1_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-carousel___test___1_-bg {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center top;\n  line-height: 100px;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n._zs_gallery_mx-carousel___test___1_-bg1 {\n  background-color: #4d7fff;\n}\n._zs_gallery_mx-carousel___test___1_-bg2 {\n  background-color: #14c9ce;\n}\n._zs_gallery_mx-carousel___test___1_-bg3 {\n  background-color: #ffb400;\n}\n");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryZ:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_galleryZ:_" class="_zs_gallery___test___base_-eg-content"><div class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>渐显渐隐切换</div><div>自动播放</div><div>显示面板指示点</div><div><a class="link-brand" rel="noopener noreferrer" href="#!/carousel/demo" target="_blank">跳转查看全屏案例</a></div></div></div><div class="clearfix mb10"><div mx-view="mx-carousel/index?height=100&autoplay=true&mode=fade"><div style="position: absolute;" class="carousel-panel"><div class="_zs_gallery_mx-carousel___test___1_-bg _zs_gallery_mx-carousel___test___1_-bg1">1</div></div><div style="position: absolute;" class="carousel-panel"><div class="_zs_gallery_mx-carousel___test___1_-bg _zs_gallery_mx-carousel___test___1_-bg2">2</div></div><div style="position: absolute;" class="carousel-panel"><div class="_zs_gallery_mx-carousel___test___1_-bg _zs_gallery_mx-carousel___test___1_-bg3">3</div></div></div></div></div><div mxa="_zs_galleryZ:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryZ:a" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 28;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryZ:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 30;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryZ:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-carousel height="100" autoplay="true" mode="fade"&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg1"&gt;1&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg2"&gt;2&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg3"&gt;3&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><div mxa="_zs_galleryZ:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryZ:c" class="_zs_gallery___test___base_-eg-title">CSS</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 48;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryZ:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 50;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryZ:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n.bg &#123;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center top;\n    line-height: 100px;\n    color: #fff;\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n&#125;\n\n.bg1 &#123;\n    background-color: #4d7fff;\n&#125;\n\n.bg2 &#123;\n    background-color: #14c9ce;\n&#125;\n\n.bg3 &#123;\n    background-color: #ffb400;\n&#125;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});