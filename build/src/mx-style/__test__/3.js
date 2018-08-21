/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
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
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryb{:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_galleryb{:a" class="_zs_gallery___test___base_-eg-content"><label mxv mxa="_zs_galleryb{:b" class="mr30"><input mxs="_zs_galleryb{:_" type="checkbox" name="cb" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_galleryb{:c" class="mr30"><input mxs="_zs_galleryb{:a" type="checkbox" name="cb" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_galleryb{:d" class="mr30"><input mxs="_zs_galleryb{:b" type="checkbox" name="cb" value="3"/> 未选中</label><label mxv mxa="_zs_galleryb{:e" class="mr30"><input mxs="_zs_galleryb{:c" type="checkbox" name="cb" value="4" disabled="true"/> 未选中禁止选择</label></div><div mxa="_zs_galleryb{:f" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryb{:d" class="_zs_gallery___test___base_-eg-title">Checkbox</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb{:g" class="_zs_gallery___test___base_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb{:e" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
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