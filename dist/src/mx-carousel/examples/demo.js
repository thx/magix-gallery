/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/examples/demo",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-carousel_examples_demo_","._zs_gallery_mx-carousel_examples_demo_-bg {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center top;\n}\n._zs_gallery_mx-carousel_examples_demo_-bg1 {\n  background-color: #0f556c;\n  background-image: url(https://img.alicdn.com/tfs/TB13fOiIx9YBuNjy0FfXXXIsVXa-1920-350.jpg);\n}\n._zs_gallery_mx-carousel_examples_demo_-bg2 {\n  background-color: #0f556c;\n  background-image: url(https://img.alicdn.com/tps/TB1UXxxKpXXXXbAXFXXXXXXXXXX-1920-350.png);\n}\n._zs_gallery_mx-carousel_examples_demo_-bg3 {\n  background-color: #036655;\n  background-image: url(https://img.alicdn.com/tps/TB1ZmRtKpXXXXc8XFXXXXXXXXXX-1920-350.png);\n}\n._zs_gallery_mx-carousel_examples_demo_-wrapper {\n  position: relative;\n  margin-bottom: 40px;\n}\n._zs_gallery_mx-carousel_examples_demo_-wrapper ._zs_gallery_mx-carousel_examples_demo_-login {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 99;\n  width: 320px;\n  height: 280px;\n  margin-top: -140px;\n  margin-left: 200px;\n  background-color: #fafafa;\n}\n");
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
    $p += '<div mxs="_zs_galleryab:_" class="_zs_gallery_mx-carousel_examples_demo_-wrapper"><div mx-view="mx-carousel/index?height=350&autoplay=true&mode=fade"><div data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_demo_-bg _zs_gallery_mx-carousel_examples_demo_-bg1"></div></div><div data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_demo_-bg _zs_gallery_mx-carousel_examples_demo_-bg2"></div></div><div data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_demo_-bg _zs_gallery_mx-carousel_examples_demo_-bg3"></div></div></div><div class="_zs_gallery_mx-carousel_examples_demo_-login"></div></div><div mxa="_zs_galleryab:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example clearfix ml20"><div mxa="_zs_galleryab:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-top-none _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_galleryab:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryab:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryab:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="wrapper"&gt;\n    &lt;mx-carousel height="350" autoplay="true" mode="fade"&gt;\n        &lt;mx-carousel.panel&gt;\n            &lt;div class="bg bg1"&gt;&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel&gt;\n            &lt;div class="bg bg2"&gt;&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel&gt;\n            &lt;div class="bg bg3"&gt;&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n    &lt;/mx-carousel&gt;\n\n    &lt;div class="login"&gt;&lt;/div&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryab:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-top-none _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryab:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">CSS</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryab:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 46;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryab:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n.bg &#123;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center top;\n&#125;\n\n.bg1 &#123;\n    background-color: #0f556c;\n    background-image: url(https://img.alicdn.com/tfs/TB13fOiIx9YBuNjy0FfXXXIsVXa-1920-350.jpg);\n&#125;\n\n.bg2 &#123;\n    background-color: #0f556c;\n    background-image: url(https://img.alicdn.com/tps/TB1UXxxKpXXXXbAXFXXXXXXXXXX-1920-350.png);\n&#125;\n\n.bg3 &#123;\n    background-color: #036655;\n    background-image: url(https://img.alicdn.com/tps/TB1ZmRtKpXXXXc8XFXXXXXXXXXX-1920-350.png);\n&#125;\n\n.wrapper&#123;\n    position: relative;\n    margin-bottom: 40px;\n&#125;\n\n.wrapper .login&#123;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    z-index: 99;\n    width: 320px;\n    height: 280px;\n    margin-top: -140px;\n    margin-left: 200px;\n    background-color: #fafafa;\n&#125;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/examples/demo.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});