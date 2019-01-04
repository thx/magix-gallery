/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryT","._zs_gallerygD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygE{height:1200px;background-color:#fafafa}._zs_gallerygE ._zs_gallerygF{width:1000px;padding-top:220px;margin:auto;font-size:20px;text-align:center}._zs_gallerygG{height:400px;overflow-y:auto;background-color:#fafafa;border:1px solid #e6e6e6}._zs_gallerygG ._zs_gallerygF{height:800px}");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_galleryb0:_" class="_zs_galleryh"><div mxa="_zs_galleryb0:a" class="_zs_galleryk"><div id="' + $e(viewId) + '_test" class="_zs_gallerygG"><div mx-view="mx-header/index?width=900&navs=' + $i($$ref, [{ value: 1, text: '营销中台' }, { value: 2, text: '创意中台' }]) + '&wrapper=' + $eu(viewId) + '_test"></div><div mxs="_zs_galleryb0:_" class="_zs_gallerygF"></div></div></div><div mxa="_zs_galleryb0:b" class="_zs_galleryl"><div mxs="_zs_galleryb0:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryb0:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryb0:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div id="' + $e(viewId) + '_test"&gt;\n    &lt;mx-header \n        width="900" \n        navs="' + $i($$ref, [{ value: 1, text: '营销中台' }, { value: 2, text: '创意中台' }]) + '" \n        wrapper="' + $e(viewId) + '_test"/&gt;\n&lt;/div&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});