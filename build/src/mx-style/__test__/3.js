/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryca:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryca:a" class="_zs_gallery___test___layout_-eg-content"><label mxv mxa="_zs_galleryca:b" class="mr30"><input mxs="_zs_galleryca:_" type="checkbox" name="cb" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_galleryca:c" class="mr30"><input mxs="_zs_galleryca:a" type="checkbox" name="cb" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_galleryca:d" class="mr30"><input mxs="_zs_galleryca:b" type="checkbox" name="cb" value="3"/> 未选中</label><label mxv mxa="_zs_galleryca:e" class="mr30"><input mxs="_zs_galleryca:c" type="checkbox" name="cb" value="4" disabled="true"/> 未选中禁止选择</label></div><div mxa="_zs_galleryca:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryca:d" class="_zs_gallery___test___layout_-eg-title">Checkbox</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryca:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryca:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;label class="mr30"&gt;\n    &lt;input type="checkbox" name="cb" value="1" checked="true" /&gt;\n    选中\n&lt;/label&gt;\n\n&lt;label class="mr30"&gt;\n    &lt;input type="checkbox" name="cb" value="2" checked="true" disabled="true" /&gt;\n    选中禁止选择\n&lt;/label&gt;\n\n&lt;label class="mr30"&gt;\n    &lt;input type="checkbox" name="cb" value="3" /&gt;\n    未选中\n&lt;/label&gt;\n\n&lt;label class="mr30"&gt;\n    &lt;input type="checkbox" name="cb" value="4" disabled="true" /&gt;\n    未选中禁止选择\n&lt;/label&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-style/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});