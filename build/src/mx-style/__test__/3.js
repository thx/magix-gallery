/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-style/__test__/3",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxv mxa="_zs_gallerydj:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerydj:a" class="_zs_galleryk"><div mxv mxa="_zs_gallerydj:b" class="mb20"><span mxs="_zs_gallerydj:_" class="color-9 mr10">动效：</span><label mxv mxa="_zs_gallerydj:c" class="mr20"><input mxs="_zs_gallerydj:a" type="checkbox" class="anim-checkbox" name="cb2" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_gallerydj:d" class="mr20"><input mxs="_zs_gallerydj:b" type="checkbox" class="anim-checkbox" name="cb2" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_gallerydj:e" class="mr20"><input mxs="_zs_gallerydj:c" type="checkbox" class="anim-checkbox" name="cb2" value="3"/> 未选中</label><label mxv><input mxs="_zs_gallerydj:d" type="checkbox" class="anim-checkbox" name="cb2" value="4" disabled="true"/> 未选中禁止选择</label></div><div mxv><span mxs="_zs_gallerydj:e" class="color-9 mr10">普通：</span><label mxv mxa="_zs_gallerydj:f" class="mr20"><input mxs="_zs_gallerydj:f" type="checkbox" name="cb1" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_gallerydj:g" class="mr20"><input mxs="_zs_gallerydj:g" type="checkbox" name="cb1" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_gallerydj:h" class="mr20"><input mxs="_zs_gallerydj:h" type="checkbox" name="cb1" value="3"/> 未选中</label><label mxv><input mxs="_zs_gallerydj:i" type="checkbox" name="cb1" value="4" disabled="true"/> 未选中禁止选择</label></div></div><div mxa="_zs_gallerydj:i" class="_zs_galleryl"><div mxs="_zs_gallerydj:j" class="_zs_galleryj">Checkbox</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydj:j" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydj:k" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;label class="mr20"&gt;\n    &lt;input type="checkbox" class="anim-checkbox" \n        name="cb2" value="2" checked="true" /&gt;\n    动效加className（anim-checkbox）\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;input type="checkbox"\n        name="cb1" value="1" checked="true" /&gt;\n    普通无动效\n&lt;/label&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});