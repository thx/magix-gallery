/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-preview___test___index_","/* @dependent: ./index.less */\n._zs_gallery_mx-preview___test___index_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-preview___test___index_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n}\n");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybL:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallerybL:_" class="_zs_gallery___test___base_-eg-content"><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?format=4&url=%2F%2Fossgw.alicdn.com%2Fcreatives-assets%2Fvideo%2F2018%2F05%2F16%2Faa7ee841-503d-497b-b802-16687fb9731f.mp4&width=540&height=960&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerybL:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybL:a" class="_zs_gallery___test___base_-eg-title">视频预览</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybL:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 15;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybL:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-preview class="demo"\n    format="4"\n    url="//ossgw.alicdn.com/creatives-assets/video/2018/05/16/aa7ee841-503d-497b-b802-16687fb9731f.mp4"\n    width="540"\n    height="960"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});