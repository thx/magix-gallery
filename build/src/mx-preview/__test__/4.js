/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-preview___test___index_","/* @dependent: ./index.less */\n._zs_gallery_mx-preview___test___index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-preview___test___index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n}\n");
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
    $p += '<div mxa="_zs_gallerybK:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallerybK:_" class="_zs_gallery___test___base_-eg-content"><div class="mb10">1. 文字预览：支持内容包含可执行脚本，以文字展示</div><div class="_zs_gallery_mx-preview___test___index_-demo mb20 ml15" mx-view="mx-preview/index?format=5&url=%3Cscript%3Ealert%281%29%3C%2Fscript%3E&maxWidth=100&maxHeight=100"></div><div class="mb10">2. 文字预览：可配置文字上的跳转链接click-url</div><div class="_zs_gallery_mx-preview___test___index_-demo ml15" mx-view="mx-preview/index?format=5&url=%E6%96%87%E5%AD%97%E9%93%BE%E5%86%85%E5%AE%B9%E5%B1%95%E7%A4%BA&clickUrl=%2F%2Fwww.taobao.com%2F&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerybK:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybK:a" class="_zs_gallery___test___base_-eg-title">文字预览</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybK:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybK:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- 内容包含可执行脚本 --&gt;\n&lt;mx-preview class="demo"\n    format="5"\n    url="&lt;script&gt;alert(1)&lt;/script&gt;"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;!-- 文字上可配置跳转链接 --&gt;\n&lt;mx-preview class="demo ml15"\n    format="5"\n    url="文字链内容展示"\n    click-url="//www.taobao.com/"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/__test__/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});