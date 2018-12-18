/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/12",["magix","__test__/example","$","../index"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-popover___test___error_","/* @dependent: ./index.less */\n._zs_gallery_mx-popover___test___error_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-popover___test___error_-icon {\n  color: #ccc;\n  border: 1px solid #e6e6e6;\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  text-align: center;\n  line-height: 22px;\n}\n._zs_gallery_mx-popover___test___error_-zoom-icon {\n  zoom: 2;\n}\n._zs_gallery_mx-popover___test___error_-transform-icon {\n  -webkit-transform: scale(2);\n          transform: scale(2);\n}\n");
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerycp:_" class="_zs_gallery___test___layout_-example"><div class="_zs_gallery___test___layout_-eg-content"><div class="mb20">异常场景：zoom不会影响CSSOM，transform会影响部分，使用这类样式的时候，相对节点定位会出错</div><div class="mb20 clearfix"><div class="fl mr20">原icon</div><div class="fl"><span class="_zs_gallery_mx-popover___test___error_-icon mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">zoom: 2</div><div class="fl"><span class="_zs_gallery_mx-popover___test___error_-zoom-icon _zs_gallery_mx-popover___test___error_-icon mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">transform: scale(2);</div><div class="fl"><span class="_zs_gallery_mx-popover___test___error_-transform-icon _zs_gallery_mx-popover___test___error_-icon mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/12.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});