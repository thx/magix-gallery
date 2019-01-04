/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/mask",["$","magix","./base"],(require,exports,module)=>{
/*$,Magix,Base*/

var $ = require("$");
var Magix = require("magix");
Magix.applyStyle("_zs_galleryZ","._zs_galleryis{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryit{display:none;position:fixed;z-index:999999;background-color:rgba(0,0,0,.5);border-radius:4px}._zs_galleryiu{z-index:999998;background:transparent}._zs_galleryiv,._zs_galleryiu{display:none;position:fixed;top:0;left:0;width:100%;height:100%}._zs_galleryiv{z-index:999999;background-color:rgba(0,0,0,.5)}._zs_galleryiv ._zs_galleryiw{position:absolute;top:50%;left:50%;width:160px;height:36px;margin-top:-18px;margin-left:-80px}");
var Tmpl = function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
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
} ; var $g = '', $_temp, $p = '', id = $$.id; $p += '<div id="' + $e(id) + '" class="_zs_galleryiv"><div mxs="_zs_galleryb;:_" class="loading _zs_galleryiw" style="padding: 10px 0;"><span class="loading-anim"></span></div></div>'; return $p; };
var Base = require("./base");
module.exports = Magix.mix({
    '__ce': function () {
        var me = this;
        var maskId = me.id + '_loading';
        var node = $('#' + maskId);
        if (!node.length) {
            var tmpl = $.isFunction(Tmpl) ? Tmpl({
                id: maskId
            }, me.id) : Tmpl;
            $(document.body).append(tmpl);
            node = $('#' + maskId);
        }
        return node;
    },
    showLoading: function () {
        var me = this;
        var node = me['__ce']();
        node.show();
    }
}, Base);

});