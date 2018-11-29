/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/18",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-effects___test___18_","/* @dependent: ./index.less */\n._zs_gallery_mx-effects___test___18_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-effects___test___18_-suspension {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: #4d7fff;\n}\n._zs_gallery_mx-effects___test___18_-text {\n  padding-top: 35px;\n  color: #fff;\n  text-align: center;\n}\n._zs_gallery_mx-effects___test___18_-icon {\n  padding-top: 5px;\n  text-align: center;\n}\n._zs_gallery_mx-effects___test___18_-icon ._zs_gallery_mx-effects___test___18_-suspension-icon {\n  font-size: 24px;\n  color: #fff;\n}\n");
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
    $p += '<div mxa="_zs_gallerya1:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerya1:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20"><span class="color-9">以下示例：</span>上下浮动效果</div><div class="_zs_gallery_mx-effects___test___18_-suspension"><div class="_zs_gallery_mx-effects___test___18_-text">浏览更多</div><div class="_zs_gallery_mx-effects___test___18_-icon"><i class="mc-iconfont _zs_gallery_mx-effects___test___18_-suspension-icon mx-anim-suspension">&#xeb95;</i></div></div></div><div mxa="_zs_gallerya1:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya1:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya1:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 15;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya1:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- 添加 class mx-anim-suspension --&gt;\n&lt;div class="suspension"&gt;\n    &lt;div class="text"&gt;浏览更多&lt;/div&gt;\n    &lt;div class="icon"&gt;\n        &lt;i class="mc-iconfont suspension-icon mx-anim-suspension"&gt;\n            &#38;&#35;xeb95;\n        &lt;/i&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/18.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});