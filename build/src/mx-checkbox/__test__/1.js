/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
    $p += '<div mxv mxa="_zs_gallery?:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallery?:a" class="_zs_gallery___test___layout_-eg-content"><label mxv mxa="_zs_gallery?:b" class="mr20 mb20"><input mxs="_zs_gallery?:_" name="test" value="1" type="checkbox" class="anim-checkbox" mx-view="mx-checkbox/index?checked=true"/> 选中状态</label><label mxv mxa="_zs_gallery?:c" class="mr20 mb20"><input mxs="_zs_gallery?:a" name="test" value="2" type="checkbox" class="anim-checkbox" mx-view="mx-checkbox/index?checked=true&disabled=true"/> 选中禁选状态</label><label mxv mxa="_zs_gallery?:d" class="mr20 mb20"><input mxs="_zs_gallery?:b" name="test" value="3" type="checkbox" class="anim-checkbox" mx-view="mx-checkbox/index?disabled=true"/> 禁止选择</label><label mxv mxa="_zs_gallery?:e" class="mr20 mb20"><input mxs="_zs_gallery?:c" name="test" value="4" type="checkbox" class="anim-checkbox" mx-view="mx-checkbox/index"/> 普通checkbox</label><label mxv mxa="_zs_gallery?:f" class="mr20 mb20"><input mxs="_zs_gallery?:d" name="test" value="5" type="checkbox" class="anim-checkbox" mx-view="mx-checkbox/index?indeterminate=true"/> indeterminate</label></div><div mxa="_zs_gallery?:g" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallery?:e" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 31;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery?:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 33;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery?:f" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;label class="mr20 mb20"&gt;\n    &lt;mx-checkbox name="test" value="1"\n        view-checked="true"/&gt;\n    选中状态\n&lt;/label&gt;\n\n&lt;label class="mr20 mb20"&gt;\n    &lt;mx-checkbox name="test" value="2" \n        view-checked="true" \n        view-disabled="true"/&gt;\n    选中禁选状态\n&lt;/label&gt;\n\n&lt;label class="mr20 mb20"&gt;\n    &lt;mx-checkbox name="test" value="3"\n        view-disabled="true"/&gt;\n    禁止选择\n&lt;/label&gt;\n\n&lt;label class="mr20 mb20"&gt;\n    &lt;mx-checkbox name="test" value="4"/&gt;\n    普通checkbox\n&lt;/label&gt;\n\n&lt;label class="mr20 mb20"&gt;\n    &lt;mx-checkbox name="test" value="5"\n        view-indeterminate="true"/&gt;\n    indeterminate\n&lt;/label&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-checkbox/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});