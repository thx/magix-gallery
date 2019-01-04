/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
Magix.applyStyle("_zs_galleryap","._zs_gallerykD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykE{margin-right:20px;margin-bottom:20px;border:1px solid #e6e6e6;background-color:#fafafa}._zs_gallerykF{width:400px;height:220px;padding:10px;border-radius:4px;overflow-y:auto;border:1px solid #e6e6e6}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerycZ:_" class="_zs_galleryh"><div mxs="_zs_gallerycZ:_" class="_zs_galleryk"><div class="mb10">1. 图片预览：不配置尺寸按图片实际尺寸展示</div><div class="_zs_gallerykE ml15" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div><div class="mb10">2. 图片预览：可配置预览图上的跳转链接click-url</div><div class="_zs_gallerykE ml15" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&clickUrl=%2F%2Fwww.taobao.com%2F&width=400&height=125&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerycZ:a" class="_zs_galleryl"><div mxs="_zs_gallerycZ:a" class="_zs_galleryj">图片预览</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerycZ:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerycZ:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;!-- 不配展示尺寸按实际尺寸展示 --&gt;\n&lt;mx-preview class="demo"\n    format="2"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;!-- click-url 点击预览图的跳转链接 --&gt;\n&lt;mx-preview class="demo"\n    format="2"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    click-url="//www.taobao.com/"\n    width="400"\n    height="125"\n    max-width="100"\n    max-height="100"/&gt;</pre></div><div mxa="_zs_gallerycZ:c" class="_zs_galleryl"><div mxs="_zs_gallerycZ:c" class="_zs_galleryj">CSS</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerycZ:d" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerycZ:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n.demo {\n    margin-right: 20px;\n    border: 1px solid #e6e6e6;\n    background-color: #fafafa;\n}</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});