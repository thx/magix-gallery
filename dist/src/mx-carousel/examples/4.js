/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-carousel_examples_4_","._zs_gallery_mx-carousel_examples_4_-wrapper {\n  position: relative;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n._zs_gallery_mx-carousel_examples_4_-wrapper ._zs_gallery_mx-carousel_examples_4_-arrow {\n  position: absolute;\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  margin-top: -20px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 32px;\n  color: var(--color-brand);\n  opacity: 0.5;\n  transition: all var(--duration);\n  cursor: pointer;\n}\n._zs_gallery_mx-carousel_examples_4_-wrapper ._zs_gallery_mx-carousel_examples_4_-arrow:hover {\n  opacity: 0.8;\n}\n._zs_gallery_mx-carousel_examples_4_-wrapper ._zs_gallery_mx-carousel_examples_4_-arrow._zs_gallery_mx-carousel_examples_4_-prev {\n  left: 0;\n}\n._zs_gallery_mx-carousel_examples_4_-wrapper ._zs_gallery_mx-carousel_examples_4_-arrow._zs_gallery_mx-carousel_examples_4_-next {\n  right: 0;\n  transform: rotate(180deg);\n}\n._zs_gallery_mx-carousel_examples_4_-wrapper ._zs_gallery_mx-carousel_examples_4_-bg {\n  float: left;\n  width: 40%;\n  height: 100px;\n  margin-right: 5%;\n  margin-left: 5%;\n  line-height: 100px;\n  background-repeat: no-repeat;\n  background-position: center top;\n  background-color: var(--color-brand);\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 6px;\n}\n._zs_gallery_mx-carousel_examples_4_-wrapper ._zs_gallery_mx-carousel_examples_4_-dot {\n  width: 12px;\n  height: 12px;\n  margin-top: 4px;\n  background-color: red;\n}\n");
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
    $p += '<div mxa="_zs_galleryaf:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryaf:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryaf:_" class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>自定义切换trigger（prev-trigger，next-trigger）</div><div>自定义轮播点dot-class</div></div></div><div mxs="_zs_galleryaf:a" class="mb20 clearfix"><div class="color-9 fl">注意：</div><div class="fl">Magix支持@$(className)直接使用一个样式</div></div><div mxa="_zs_galleryaf:b" class="clearfix mb40"><div mxa="_zs_galleryaf:c" class="_zs_gallery_mx-carousel_examples_4_-wrapper"><div mx-view="mx-carousel/index?height=100&prevTrigger=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_prev&nextTrigger=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_next&dotType=dot-out-center&dotClass=_zs_gallery_mx-carousel_examples_4_-dot"><div mxs="_zs_galleryaf:b" class="clearfix" data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_4_-bg">1</div><div class="_zs_gallery_mx-carousel_examples_4_-bg">2</div></div><div mxs="_zs_galleryaf:c" class="clearfix" data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_4_-bg">3</div><div class="_zs_gallery_mx-carousel_examples_4_-bg">4</div></div><div mxs="_zs_galleryaf:d" class="clearfix" data-carousel="true"><div class="_zs_gallery_mx-carousel_examples_4_-bg">5</div><div class="_zs_gallery_mx-carousel_examples_4_-bg">6</div></div></div><i class="mc-iconfont _zs_gallery_mx-carousel_examples_4_-arrow _zs_gallery_mx-carousel_examples_4_-prev" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_prev">&#xe61e;</i><i class="mc-iconfont _zs_gallery_mx-carousel_examples_4_-arrow _zs_gallery_mx-carousel_examples_4_-next" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_next">&#xe61e;</i></div></div></div><div mxa="_zs_galleryaf:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryaf:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaf:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 43;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaf:f" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="wrapper"&gt;\n    &lt;mx-carousel height="100" \n        prev-trigger="&#123;&#123;=viewId&#125;&#125;_prev"\n        next-trigger="&#123;&#123;=viewId&#125;&#125;_next"\n        dot-type="dot-out-center"\n        dot-class="@$(dot)"&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;1&lt;/div&gt;\n            &lt;div class="bg"&gt;2&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;3&lt;/div&gt;\n            &lt;div class="bg"&gt;4&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;5&lt;/div&gt;\n            &lt;div class="bg"&gt;6&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n    &lt;/mx-carousel&gt;\n    &lt;i class="mc-iconfont arrow prev" id="&#123;&#123;=viewId&#125;&#125;_prev"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n    &lt;i class="mc-iconfont arrow next" id="&#123;&#123;=viewId&#125;&#125;_next"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryaf:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryaf:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">CSS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 76;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaf:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 78;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaf:f" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 81;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n.dot&#123;\n    width: 12px;\n    height: 12px;\n    margin-top: 4px;\n    background-color: red;\n&#125;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/examples/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});