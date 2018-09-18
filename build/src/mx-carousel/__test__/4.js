/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-carousel___test___4_","/* @dependent: ./index.less */\n._zs_gallery_mx-carousel___test___4_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-carousel___test___4_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-carousel___test___4_-wrapper {\n  position: relative;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n._zs_gallery_mx-carousel___test___4_-wrapper ._zs_gallery_mx-carousel___test___4_-arrow {\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  font-size: 32px;\n  color: #4d7fff;\n  opacity: 0.5;\n  transition: all 0.25s;\n  cursor: pointer;\n}\n._zs_gallery_mx-carousel___test___4_-wrapper ._zs_gallery_mx-carousel___test___4_-arrow:hover {\n  opacity: 0.8;\n}\n._zs_gallery_mx-carousel___test___4_-wrapper ._zs_gallery_mx-carousel___test___4_-arrow._zs_gallery_mx-carousel___test___4_-prev {\n  left: 0;\n}\n._zs_gallery_mx-carousel___test___4_-wrapper ._zs_gallery_mx-carousel___test___4_-arrow._zs_gallery_mx-carousel___test___4_-next {\n  right: 0;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_mx-carousel___test___4_-bg {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center top;\n  line-height: 100px;\n  background-color: #4d7fff;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n");
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
    $p += '<div mxa="_zs_gallery,:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallery,:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallery,:_" class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl">自定义切换trigger</div></div><div mxa="_zs_gallery,:b" class="clearfix mb10"><div mxa="_zs_gallery,:c" class="_zs_gallery_mx-carousel___test___4_-wrapper"><div mx-view="mx-carousel/index?height=100&prevTrigger=';
    $line = 10;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_prev&nextTrigger=';
    $line = 11;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_next"><div mxs="_zs_gallery,:a" data-carousel="true"><div class="_zs_gallery_mx-carousel___test___4_-bg">1</div></div><div mxs="_zs_gallery,:b" data-carousel="true"><div class="_zs_gallery_mx-carousel___test___4_-bg">2</div></div><div mxs="_zs_gallery,:c" data-carousel="true"><div class="_zs_gallery_mx-carousel___test___4_-bg">3</div></div></div><i class="mc-iconfont _zs_gallery_mx-carousel___test___4_-arrow _zs_gallery_mx-carousel___test___4_-prev" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_prev">&#xe61e;</i><i class="mc-iconfont _zs_gallery_mx-carousel___test___4_-arrow _zs_gallery_mx-carousel___test___4_-next" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_next">&#xe61e;</i></div></div></div><div mxa="_zs_gallery,:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery,:d" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 30;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery,:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 32;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery,:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="wrapper"&gt;\n    &lt;mx-carousel height="100" \n        prev-trigger="&#123;&#123;=viewId&#125;&#125;_prev"\n        next-trigger="&#123;&#123;=viewId&#125;&#125;_next"&gt;\n        &lt;mx-carousel.panel&gt;\n            &lt;div class="bg"&gt;1&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel&gt;\n            &lt;div class="bg"&gt;2&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel&gt;\n            &lt;div class="bg"&gt;3&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n    &lt;/mx-carousel&gt;\n    &lt;i class="mc-iconfont arrow prev" id="&#123;&#123;=viewId&#125;&#125;_prev"&gt;&#38;&#35;xe61e;&lt;/i&gt;\n    &lt;i class="mc-iconfont arrow next" id="&#123;&#123;=viewId&#125;&#125;_next"&gt;&#38;&#35;xe61e;&lt;/i&gt;\n&lt;/div&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/__test__/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});