/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-style/examples/4",["magix","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
    $p += '<div mxv mxa="_zs_galleryd?:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryd?:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxv mxa="_zs_galleryd?:b" class="mb20"><span mxs="_zs_galleryd?:_" class="color-9 mr10">动效：</span><label mxv mxa="_zs_galleryd?:c" class="mr20"><input mxs="_zs_galleryd?:a" type="radio" class="anim-radio" value="1" name="magix" checked="true"/> 选中</label><label mxv mxa="_zs_galleryd?:d" class="mr20"><input mxs="_zs_galleryd?:b" type="radio" class="anim-radio" value="2" name="magix"/> 未选中</label><label mxv mxa="_zs_galleryd?:e" class="mr20"><input mxs="_zs_galleryd?:c" type="radio" class="anim-radio" value="3" name="magix" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_galleryd?:d" type="radio" class="anim-radio" value="3" name="magix2" checked="true" disabled="true"/> 选中禁止选择</label></div><div mxv><span mxs="_zs_galleryd?:e" class="color-9 mr10">普通：</span><label mxv mxa="_zs_galleryd?:f" class="mr20"><input mxs="_zs_galleryd?:f" type="radio" value="1" name="magix3" checked="true"/> 选中</label><label mxv mxa="_zs_galleryd?:g" class="mr20"><input mxs="_zs_galleryd?:g" type="radio" value="2" name="magix3"/> 未选中</label><label mxv mxa="_zs_galleryd?:h" class="mr20"><input mxs="_zs_galleryd?:h" type="radio" value="3" name="magix3" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_galleryd?:i" type="radio" value="3" name="magix4" checked="true" disabled="true"/> 选中禁止选择</label></div></div><div mxa="_zs_galleryd?:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryd?:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">Radio</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryd?:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 46;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryd?:k" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;label class="mr20"&gt;\n    &lt;input type="radio" class="anim-radio"\n        value="1" name="magix" checked="true"/&gt;\n    动效加className（anim-radio）\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;input type="radio"  \n        value="2" name="magix2" checked="true"/&gt;\n    普通无动效\n&lt;/label&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-style/examples/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});