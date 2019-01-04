/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-style/__test__/4",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxv mxa="_zs_gallerydk:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerydk:a" class="_zs_galleryk"><div mxv mxa="_zs_gallerydk:b" class="mb20"><span mxs="_zs_gallerydk:_" class="color-9 mr10">动效：</span><label mxv mxa="_zs_gallerydk:c" class="mr20"><input mxs="_zs_gallerydk:a" type="radio" class="anim-radio" value="1" name="magix" checked="true"/> 选中</label><label mxv mxa="_zs_gallerydk:d" class="mr20"><input mxs="_zs_gallerydk:b" type="radio" class="anim-radio" value="2" name="magix"/> 未选中</label><label mxv mxa="_zs_gallerydk:e" class="mr20"><input mxs="_zs_gallerydk:c" type="radio" class="anim-radio" value="3" name="magix" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_gallerydk:d" type="radio" class="anim-radio" value="3" name="magix2" checked="true" disabled="true"/> 选中禁止选择</label></div><div mxv><span mxs="_zs_gallerydk:e" class="color-9 mr10">普通：</span><label mxv mxa="_zs_gallerydk:f" class="mr20"><input mxs="_zs_gallerydk:f" type="radio" value="1" name="magix3" checked="true"/> 选中</label><label mxv mxa="_zs_gallerydk:g" class="mr20"><input mxs="_zs_gallerydk:g" type="radio" value="2" name="magix3"/> 未选中</label><label mxv mxa="_zs_gallerydk:h" class="mr20"><input mxs="_zs_gallerydk:h" type="radio" value="3" name="magix3" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_gallerydk:i" type="radio" value="3" name="magix4" checked="true" disabled="true"/> 选中禁止选择</label></div></div><div mxa="_zs_gallerydk:i" class="_zs_galleryl"><div mxs="_zs_gallerydk:j" class="_zs_galleryj">Radio</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydk:j" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydk:k" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;label class="mr20"&gt;\n    &lt;input type="radio" class="anim-radio"\n        value="1" name="magix" checked="true"/&gt;\n    动效加className（anim-radio）\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;input type="radio"  \n        value="2" name="magix2" checked="true"/&gt;\n    普通无动效\n&lt;/label&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});