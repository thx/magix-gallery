/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/__test__/demo",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryx","._zs_gallerycR{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerycS{width:100%;height:100%;background-repeat:no-repeat;background-position:top}._zs_gallerycT{background-image:url(https://img.alicdn.com/tfs/TB13fOiIx9YBuNjy0FfXXXIsVXa-1920-350.jpg)}._zs_gallerycT,._zs_gallerycU{background-color:#0f556c}._zs_gallerycU{background-image:url(https://img.alicdn.com/tps/TB1UXxxKpXXXXbAXFXXXXXXXXXX-1920-350.png)}._zs_gallerycV{background-color:#036655;background-image:url(https://img.alicdn.com/tps/TB1ZmRtKpXXXXc8XFXXXXXXXXXX-1920-350.png)}._zs_gallerycW{position:relative;margin-bottom:40px}._zs_gallerycW ._zs_gallerycX{position:absolute;left:50%;top:50%;z-index:99;width:320px;height:280px;margin-top:-140px;margin-left:200px;background-color:#fafafa}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxs="_zs_gallery|:_" class="_zs_gallerycW"><div mx-view="mx-carousel/index?height=350&autoplay=true&mode=fade"><div data-carousel="true"><div class="_zs_gallerycS _zs_gallerycT"></div></div><div data-carousel="true"><div class="_zs_gallerycS _zs_gallerycU"></div></div><div data-carousel="true"><div class="_zs_gallerycS _zs_gallerycV"></div></div></div><div class="_zs_gallerycX"></div></div><div mxa="_zs_gallery|:_" class="_zs_galleryh clearfix ml20"><div mxa="_zs_gallery|:a" class="_zs_galleryl _zs_galleryq _zs_gallerye"><div mxs="_zs_gallery|:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallery|:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallery|:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div class="wrapper"&gt;\n    &lt;mx-carousel height="350" autoplay="true" mode="fade"&gt;\n        &lt;mx-carousel.panel&gt;\n            &lt;div class="bg bg1"&gt;&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel&gt;\n            &lt;div class="bg bg2"&gt;&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel&gt;\n            &lt;div class="bg bg3"&gt;&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n    &lt;/mx-carousel&gt;\n\n    &lt;div class="login"&gt;&lt;/div&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallery|:c" class="_zs_galleryl _zs_galleryq _zs_gallerye _zs_galleryf"><div mxs="_zs_gallery|:c" class="_zs_galleryj">CSS</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallery|:d" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallery|:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n.bg &#123;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center top;\n&#125;\n\n.bg1 &#123;\n    background-color: #0f556c;\n    background-image: url(https://img.alicdn.com/tfs/TB13fOiIx9YBuNjy0FfXXXIsVXa-1920-350.jpg);\n&#125;\n\n.bg2 &#123;\n    background-color: #0f556c;\n    background-image: url(https://img.alicdn.com/tps/TB1UXxxKpXXXXbAXFXXXXXXXXXX-1920-350.png);\n&#125;\n\n.bg3 &#123;\n    background-color: #036655;\n    background-image: url(https://img.alicdn.com/tps/TB1ZmRtKpXXXXc8XFXXXXXXXXXX-1920-350.png);\n&#125;\n\n.wrapper&#123;\n    position: relative;\n    margin-bottom: 40px;\n&#125;\n\n.wrapper .login&#123;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    z-index: 99;\n    width: 320px;\n    height: 280px;\n    margin-top: -140px;\n    margin-left: 200px;\n    background-color: #fafafa;\n&#125;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});