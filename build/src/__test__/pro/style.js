/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/style",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___pro_style_","/* @dependent: ./index.less */\n._zs_gallery___test___pro_style_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery___test___pro_style_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___pro_style_-outer ._zs_gallery___test___mx-dropdown_index_-dropdown-toggle {\n  color: #999;\n}\n._zs_gallery___test___pro_style_-outer ._zs_gallery___test___mx-dropdown_index_-dropdown-menu-wrapper {\n  background-color: #ccc;\n  font-size: 12px;\n}\n._zs_gallery___test___pro_style_-outer ._zs_gallery___test___mx-dropdown_index_-item-link:hover {\n  background-color: #b3b3b3;\n}\n._zs_gallery___test___pro_style_-outer ._zs_gallery___test___mx-dropdown_index_-item-link._zs_gallery___test___mx-dropdown_index_-active:hover {\n  color: #fff;\n  background-color: #4d7fff;\n}\n._zs_gallery___test___pro_style_-outer [mx-view*=\"mx-dropdown/index\"],\n._zs_gallery___test___pro_style_-outer [mx-view*=\"mx-dropdown/multiple\"] {\n  background-color: transparent;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n._zs_gallery___test___pro_style_-outer [mx-view*=\"mx-dropdown/index\"]:hover,\n._zs_gallery___test___pro_style_-outer [mx-view*=\"mx-dropdown/multiple\"]:hover {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n._zs_gallery___test___pro_style_-outer [mx-view*=\"mx-dropdown/index\"]:hover ._zs_gallery___test___mx-dropdown_index_-dropdown-toggle,\n._zs_gallery___test___pro_style_-outer [mx-view*=\"mx-dropdown/multiple\"]:hover ._zs_gallery___test___mx-dropdown_index_-dropdown-toggle {\n  color: #b3b3b3;\n}\n._zs_gallery___test___pro_style_-dark-bg {\n  padding: 20px;\n  background-color: #3d414d;\n}\n");
module.exports = Magix.View.extend({
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
    $p += 'Todo';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/style.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});