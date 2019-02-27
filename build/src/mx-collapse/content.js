/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-collapse/content",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-collapse_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-collapse_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-collapse_index_-collapse {\n  border-radius: 4px;\n  border: 1px solid #e6e6e6;\n  overflow: hidden;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item {\n  border-bottom: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-title {\n  cursor: pointer;\n  position: relative;\n  padding: 10px 24px;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-title ._zs_gallery_mx-collapse_index_-arrow > * {\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  margin-top: -10px;\n  transition: all 0.25s;\n  color: #999;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-title ._zs_gallery_mx-collapse_index_-text {\n  margin-left: 20px;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-content {\n  display: none;\n  border-top: 1px solid #e6e6e6;\n  overflow: hidden;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-content ._zs_gallery_mx-collapse_index_-inner {\n  padding: 10px 24px;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item ._zs_gallery_mx-collapse_index_-content ._zs_gallery_mx-collapse_index_-text {\n  line-height: 22px;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item:last-child {\n  border-bottom: 0 none;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item._zs_gallery_mx-collapse_index_-disabled ._zs_gallery_mx-collapse_index_-title {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n._zs_gallery_mx-collapse_index_-collapse ._zs_gallery_mx-collapse_index_-item._zs_gallery_mx-collapse_index_-expand ._zs_gallery_mx-collapse_index_-title ._zs_gallery_mx-collapse_index_-arrow > * {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n");
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
} ; var $g = '', $_temp, $p = '', content = $$.content; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryah:_" class="_zs_gallery_mx-collapse_index_-text">';
    $line = 1;
    $art = '!content';
    ;
    $p += ($expr = '<%!content%>', $n(content)) + '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-collapse/content.html';
    throw msg;
} return $p; },
    init: function (e) {
        var that = this;
        var data = e.data || {};
        this.updater.set({
            content: data.content || ''
        });
    },
    render: function () {
        this.updater.digest({});
    }
});

});