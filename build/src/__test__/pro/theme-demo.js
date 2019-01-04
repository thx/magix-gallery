/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/theme-demo",["magix","$","./theme-demo1","./theme-demo2"],(require,exports,module)=>{
/*Magix,$*/
require("./theme-demo1");
require("./theme-demo2");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_galleryh","._zs_galleryaD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryaE{width:860px;padding:20px;border-radius:4px;box-shadow:0 1px 12px rgba(51,51,51,.08)}");
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
} ; var $g = '', $_temp, $p = ''; $p += '<div mxs="_zs_galleryH:_" class="clearfix"><div class="_zs_galleryaE fl"><div mx-view="__test__/pro/theme-demo1" class="fl"></div><div mx-view="__test__/pro/theme-demo2" class="fr"></div></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});