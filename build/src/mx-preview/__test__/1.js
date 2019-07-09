/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-preview___test___index_","._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid var(--color-border);\n  background-color: var(--color-bg);\n}\n._zs_gallery_mx-preview___test___index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--color-border);\n  overflow-y: auto;\n}\n");
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
    $p += '<div mxa="_zs_gallerydE:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerydE:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb10">1. 图片预览：不配置尺寸按图片实际尺寸展示，<span class="color-brand">可不配width和height，不配则按照实际尺寸展示</span></div><div class="_zs_gallery_mx-preview___test___index_-demo ml15" mx-view="mx-preview/index?type=image&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div><div class="mb10">2. 图片预览：可配置预览图上的跳转链接click-url</div><div class="_zs_gallery_mx-preview___test___index_-demo ml15" mx-view="mx-preview/index?type=image&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&clickUrl=%2F%2Fwww.taobao.com%2F&width=400&height=125&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydE:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydE:a" class="_zs_gallery___test___layout_-eg-title">图片预览</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydE:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydE:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- 不配展示尺寸按实际尺寸展示 --&gt;\n&lt;mx-preview class="demo"\n    type="image"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;!-- click-url 点击预览图的跳转链接 --&gt;\n&lt;mx-preview class="demo"\n    type="image"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    click-url="//www.taobao.com/"\n    width="400"\n    height="125"\n    max-width="100"\n    max-height="100"/&gt;</pre></div><div mxa="_zs_gallerydE:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydE:c" class="_zs_gallery___test___layout_-eg-title">CSS</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerydE:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 49;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerydE:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 52;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n.demo {\n    margin-right: 20px;\n    border: 1px solid #e6e6e6;\n    background-color: #fafafa;\n}</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});