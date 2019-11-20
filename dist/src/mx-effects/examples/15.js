/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/examples/15",["magix","examples/example","$","../icon","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_gallerybM:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_gallerybM:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><span class="mr10" mx-view="mx-effects/icon?mode=hollow&content=%E9%BB%98%E8%AE%A4%E7%81%B0%E8%89%B2"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=error&content=%E7%BA%A2%E8%89%B2%E9%94%99%E8%AF%AF"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=warn&content=%E9%BB%84%E8%89%B2%E8%AD%A6%E5%91%8A"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=pass&content=%E7%BB%BF%E8%89%B2%E9%80%9A%E8%BF%87"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=highlight&content=%E5%93%81%E7%89%8C%E8%89%B2%E5%BC%BA%E8%B0%83"></span></div><div mxa="_zs_gallerybM:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerybM:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">空心打标</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 11;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybM:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 13;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybM:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 16;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.icon mode="hollow" content="默认灰色"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="error" content="红色错误"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="warn" content="黄色警告"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="pass" content="绿色通过"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="highlight" content="品牌色强调"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/examples/15.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});