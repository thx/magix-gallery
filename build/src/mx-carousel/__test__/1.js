/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_galleryu","._zs_gallerycD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerycE{width:100%;height:100%;background-repeat:no-repeat;background-position:top;line-height:100px;color:#fff;text-align:center;font-size:20px;font-weight:700}._zs_gallerycF{background-color:#4d7fff}._zs_gallerycG{background-color:#14c9ce}._zs_gallerycH{background-color:#ffb400}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallery{:_" class="_zs_galleryh"><div mxs="_zs_gallery{:_" class="_zs_galleryk"><div class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>渐显渐隐切换</div><div>自动播放</div><div>显示面板指示点</div><div><a class="link-brand" rel="noopener noreferrer" href="#!/carousel/demo" target="_blank">跳转查看全屏案例</a></div></div></div><div class="clearfix mb10"><div mx-view="mx-carousel/index?height=100&autoplay=true&mode=fade"><div data-carousel="true"><div class="_zs_gallerycE _zs_gallerycF">1</div></div><div data-carousel="true"><div class="_zs_gallerycE _zs_gallerycG">2</div></div><div data-carousel="true"><div class="_zs_gallerycE _zs_gallerycH">3</div></div></div></div></div><div mxa="_zs_gallery{:a" class="clearfix"><div mxa="_zs_gallery{:b" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallery{:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallery{:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallery{:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-carousel height="100" autoplay="true" mode="fade"&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg1"&gt;1&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg2"&gt;2&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg3"&gt;3&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><div mxa="_zs_gallery{:d" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_gallery{:c" class="_zs_galleryj">CSS</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallery{:e" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallery{:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n.bg &#123;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center top;\n    line-height: 100px;\n    color: #fff;\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n&#125;\n\n.bg1 &#123;\n    background-color: #4d7fff;\n&#125;\n\n.bg2 &#123;\n    background-color: #14c9ce;\n&#125;\n\n.bg3 &#123;\n    background-color: #ffb400;\n&#125;</pre></div></div></div>'; return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});