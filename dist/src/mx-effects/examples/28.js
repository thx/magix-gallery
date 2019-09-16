/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/28",["magix","examples/example","$","../icon","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../icon");
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
    $p += '<div mxv mxa="_zs_gallerybU:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_gallerybU:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxv mxa="_zs_gallerybU:b" class="mb40"><span mxs="_zs_gallerybU:_" class="color-9 mr10">checkbox：</span><label mxv mxa="_zs_gallerybU:c" class="mr20"><input mxs="_zs_gallerybU:a" type="radio" value="1" name="magix3" checked="true"/><span mxs="_zs_gallerybU:b" class="mr5">选项1</span><span mxs="_zs_gallerybU:c" mx-view="mx-effects/icon?type=highlight&content=%E6%8E%A8%E8%8D%90"></span></label><label mxv mxa="_zs_gallerybU:d" class="mr20"><input mxs="_zs_gallerybU:d" type="radio" value="2" name="magix3"/> 选项2</label><label mxv mxa="_zs_gallerybU:e" class="mr20"><input mxs="_zs_gallerybU:e" type="radio" value="3" name="magix3"/> 选项3</label></div><div mxv mxa="_zs_gallerybU:f" class="mb30"><span mxs="_zs_gallerybU:f" class="color-9 mr10">radio：</span><label mxv mxa="_zs_gallerybU:g" class="mr20"><input mxs="_zs_gallerybU:g" type="checkbox" name="cb1" value="1" checked="true"/> 选项1</label><label mxv mxa="_zs_gallerybU:h" class="mr20"><input mxs="_zs_gallerybU:h" type="checkbox" name="cb1" value="3"/><span mxs="_zs_gallerybU:i" class="mr5">选项2</span><span mxs="_zs_gallerybU:c" mx-view="mx-effects/icon?type=highlight&content=%E6%8E%A8%E8%8D%90"></span></label><label mxv><input mxs="_zs_gallerybU:j" type="checkbox" name="cb1" value="4"/> 选项3</label></div></div><div mxa="_zs_gallerybU:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerybU:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">Checkbox</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybU:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 40;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybU:l" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="mb40"&gt;\n    &lt;span class="color-9 mr10"&gt;checkbox：&lt;/span&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="radio" value="1" name="magix3" checked="true"/&gt;\n        &lt;span class="mr5"&gt;选项1&lt;/span&gt;\n        &lt;mx-effects.icon type="highlight" content="推荐"/&gt;\n    &lt;/label&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="radio" value="2" name="magix3" /&gt;\n        选项2\n    &lt;/label&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="radio" value="3" name="magix3" /&gt;\n        选项3\n    &lt;/label&gt;\n&lt;/div&gt;\n\n&lt;div class="mb30"&gt;\n    &lt;span class="color-9 mr10"&gt;radio：&lt;/span&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="checkbox" name="cb1" value="1" checked="true" /&gt;\n        选项1\n    &lt;/label&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="checkbox" name="cb1" value="3" /&gt;\n        &lt;span class="mr5"&gt;选项2&lt;/span&gt;\n        &lt;mx-effects.icon type="highlight" content="推荐"/&gt;\n    &lt;/label&gt;\n    &lt;label&gt;\n        &lt;input type="checkbox" name="cb1" value="4" /&gt;\n        选项3\n    &lt;/label&gt;\n&lt;/div&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/28.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});