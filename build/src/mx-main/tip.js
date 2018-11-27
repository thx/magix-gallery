/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/tip",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-main_tip_","/* @dependent: ./index.less */\n._zs_gallery_mx-main_tip_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-main_tip_-side-tip {\n  position: relative;\n  top: 0;\n  left: 0;\n  margin: 0 20px 20px 0;\n  padding-left: 24px;\n}\n._zs_gallery_mx-main_tip_-side-tip ._zs_gallery_mx-main_tip_-side-content {\n  padding: 10px;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  color: #999;\n  background-color: #fff;\n}\n._zs_gallery_mx-main_tip_-side-tip ._zs_gallery_mx-main_tip_-side-light {\n  opacity: 0.5;\n  position: absolute;\n  top: 50%;\n  left: -8px;\n  font-size: 22px;\n  margin-top: -10px;\n  color: #4d7fff;\n}\n._zs_gallery_mx-main_tip_-side-tip:before,\n._zs_gallery_mx-main_tip_-side-tip:after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 18px;\n  width: 0;\n  height: 0;\n  margin-top: -7px;\n  border-top: 7px solid transparent;\n  border-right: 6px solid #ccc;\n  border-bottom: 6px solid transparent;\n}\n._zs_gallery_mx-main_tip_-side-tip:after {\n  border-right: 6px solid #fff;\n  left: 19px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', view = $$.view, content = $$.content; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if view';
    ;
    $expr = '<%if (view) {%>';
    if (view) {
        ;
        $p += '<div mx-view="';
        $line = 3;
        $art = '=view';
        ;
        $p += ($expr = '<%=view%>', $e(view)) + '"><div mxs="_zs_galleryb$:_" class="loading"><span class="loading-anim"></span></div></div>';
        $line = 6;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<div mxa="_zs_galleryb$:_" class="_zs_gallery_mx-main_tip_-side-tip"><i mxs="_zs_galleryb$:a" class="mc-iconfont _zs_gallery_mx-main_tip_-side-light">&#xe654;</i><div mxa="_zs_galleryb$:a" class="_zs_gallery_mx-main_tip_-side-content">';
        $line = 9;
        $art = '!content';
        ;
        $p += ($expr = '<%!content%>', $n(content)) + '</div></div>';
        $line = 11;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-main/tip.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var data = extra.data || {};
        this.updater.set(data);
    },
    render: function () {
        this.updater.digest();
    }
});

});