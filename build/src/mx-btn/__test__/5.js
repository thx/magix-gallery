/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-btn/__test__/5",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-btn___test___index_","._zs_gallery_mx-btn___test___index_-dark {\n  padding: 20px;\n  background-color: var(--app-bg);\n}\n._zs_gallery_mx-btn___test___index_-cont {\n  padding: 20px 0;\n}\n");
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
    $p += '<div mxa="_zs_gallerye|:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerye|:k" class="_zs_gallery___test___layout_-eg-content"><div class="_zs_gallery_mx-btn___test___index_-cont"><a href="javascript:;" class="mx-btn mx-btn-custom mr20 mb20" color="#ffb400" color-hover="#f1ab03" style="--mx-btn-custom-color: #ffb400;--mx-btn-custom-color-text: #ffffff;--mx-btn-custom-color-hover: #f1ab03;--mx-btn-custom-color-hover-text: #ffffff;">自定义按钮</a><a href="javascript:;" class="mx-btn mx-btn-custom mr20 mb20" color="#333333" color-text="#ffb400" color-hover="#333333" color-hover-text="#f1ab03" style="--mx-btn-custom-color: #333333;--mx-btn-custom-color-text: #ffb400;--mx-btn-custom-color-hover: #333333;--mx-btn-custom-color-hover-text: #f1ab03;"><i class="mc-iconfont">&#xe731;</i>自定义按钮</a></div></div><div mxa="_zs_gallerye|:g" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerye|:a" class="_zs_gallery___test___layout_-eg-title">按钮</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerye|:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 21;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerye|:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-btn class="mr20 mb20" content="自定义按钮" \n    color="#ffb400" \n    color-hover="#f1ab03"/&gt;\n    \n&lt;mx-btn class="mr20 mb20" \n    color="#333333" \n    color-text="#ffb400"\n    color-hover="#333333"\n    color-hover-text="#f1ab03"&gt;\n    &lt;i class="mc-iconfont"&gt;&#xe731;&lt;/i&gt;自定义按钮\n&lt;/mx-btn&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-btn/__test__/5.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});