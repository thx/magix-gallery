/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-carousel_examples_2_","._zs_gallery_mx-carousel_examples_2_-bg {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center top;\n  line-height: 100px;\n  background-color: var(--color-brand);\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n");
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
    $p += '<div mxa="_zs_gallerya_:_" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_gallerya_:_" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>垂直方向切换</div><div>自动播放</div><div>显示面板指示点</div></div></div><div class="clearfix mb10"><div mx-view="mx-carousel/index?height=100&vertical=true&autoplay=true"><div data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_2_-bg">1</div></div><div data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_2_-bg">2</div></div><div data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_2_-bg">3</div></div></div></div></div><div mxa="_zs_gallerya_:a" class="clearfix"><div mxa="_zs_gallerya_:b" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-half"><div mxs="_zs_gallerya_:a" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya_:c" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 30;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya_:b" class="mc-iconfont _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-carousel height="100" autoplay="true" active="1"&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg"&gt;1&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg"&gt;2&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg"&gt;3&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><div mxa="_zs_gallerya_:d" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_gallerya_:c" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-eg-title">CSS</div><div class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya_:e" class="_zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 50;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya_:b" class="mc-iconfont _zs_gallery_Users_liyong_Documents_workspace_js_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 53;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n.bg &#123;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center top;\n    line-height: 100px;\n    background-color: #4d7fff;\n    color: #fff;\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n&#125;</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/examples/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});