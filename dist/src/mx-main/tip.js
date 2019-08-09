/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-main/tip",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-main_index_","[mx-view*=\"mx-main/index\"] {\n  position: relative;\n  background-color: #e8ebf2;\n}\n._zs_gallery_mx-main_index_-main-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  padding-top: 16px;\n  background-color: var(--app-nav-bg);\n  z-index: 3;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step {\n  position: relative;\n  font-size: 14px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 24px;\n  bottom: 0;\n  width: 0;\n  border-left: 1px solid #4D5873;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step:first-child::before {\n  top: 23px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step:last-child::before {\n  bottom: 23px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step {\n  position: relative;\n  display: block;\n  height: 46px;\n  line-height: 46px;\n  padding-left: 36px;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step ._zs_gallery_mx-main_index_-text {\n  color: #fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step ._zs_gallery_mx-main_index_-pbg {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(-90deg, var(--app-brand) 0%, var(--app-brand-gradient) 100%);\n  background-color: var(--app-brand);\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step:hover ._zs_gallery_mx-main_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-step._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-pbg {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-parent ._zs_gallery_mx-main_index_-idx {\n  position: absolute;\n  top: 50%;\n  left: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: -8px;\n  border-radius: 50%;\n  background-color: #4D5873;\n  color: #fff;\n  text-align: center;\n  line-height: 16px;\n  font-size: 12px;\n  transition: all var(--duration);\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step ._zs_gallery_mx-main_index_-child::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 24px;\n  width: 10px;\n  height: 0;\n  border-top: 1px solid #4D5873;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent ._zs_gallery_mx-main_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent ._zs_gallery_mx-main_index_-pbg {\n  opacity: 0.2;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-idx {\n  background-color: #fff;\n  color: var(--app-brand);\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-current ._zs_gallery_mx-main_index_-parent._zs_gallery_mx-main_index_-on ._zs_gallery_mx-main_index_-pbg {\n  opacity: 1;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-step {\n  cursor: not-allowed;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-step:hover ._zs_gallery_mx-main_index_-text {\n  opacity: 0.5;\n}\n._zs_gallery_mx-main_index_-main-nav ._zs_gallery_mx-main_index_-main-step._zs_gallery_mx-main_index_-step-locked ._zs_gallery_mx-main_index_-locked-icon {\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  margin-top: -6px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #4D5873;\n}\n._zs_gallery_mx-main_index_-main-content {\n  position: relative;\n  z-index: 2;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box {\n  position: relative;\n  margin-bottom: 16px;\n  border-radius: var(--border-radius);\n  background-color: #fff;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title {\n  padding: 8px 24px;\n  border-top-left-radius: var(--border-radius);\n  border-top-right-radius: var(--border-radius);\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon,\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon > *,\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-label,\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-tips {\n  display: inline-block;\n  height: 32px;\n  line-height: 32px;\n  vertical-align: middle;\n  overflow: hidden;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-icon {\n  margin-right: 5px;\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-label {\n  font-size: 16px;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-title ._zs_gallery_mx-main_index_-title-tip {\n  margin-left: 20px;\n  color: #999;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-box ._zs_gallery_mx-main_index_-box-bd {\n  padding: 16px 24px;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-side {\n  position: absolute;\n  background-color: #fff;\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-title {\n  padding: 8px 24px;\n  line-height: 32px;\n  font-size: 16px;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-side ._zs_gallery_mx-main_index_-side-bd {\n  padding: 16px 24px;\n  color: #666;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer {\n  text-align: center;\n  padding: 40px 0;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer ._zs_gallery_mx-main_index_-footer-btn {\n  min-width: 100px;\n  margin-right: 20px;\n}\n._zs_gallery_mx-main_index_-main-content ._zs_gallery_mx-main_index_-content-footer ._zs_gallery_mx-main_index_-footer-btn:last-child {\n  margin-right: 0;\n}\n._zs_gallery_mx-main_index_-footer-error {\n  display: inline-block;\n  position: relative;\n  margin-top: 10px;\n  color: var(--color-red);\n}\n");
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
} ; var $g = '', $_temp, $p = '', view = $$.view, title = $$.title, content = $$.content; var $expr, $art, $line; try {
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
        $p += ($expr = '<%=view%>', $e(view)) + '"><div mxs="_zs_galleryc~:_" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>';
        $line = 6;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $line = 7;
        $art = 'if title';
        ;
        $expr = '<%if (title) {%>';
        if (title) {
            ;
            $p += '<div mxa="_zs_galleryc~:_" class="_zs_gallery_mx-main_index_-side-title">';
            $line = 8;
            $art = '!title';
            ;
            $p += ($expr = '<%!title%>', $n(title)) + '</div>';
            $line = 9;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '<div mxa="_zs_galleryc~:a" class="_zs_gallery_mx-main_index_-side-bd">';
        $line = 10;
        $art = '!content';
        ;
        $p += ($expr = '<%!content%>', $n(content)) + '</div>';
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