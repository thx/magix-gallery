/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-title/examples/1",["magix","examples/example","$","../index","mx-dropdown/index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-dropdown/index");
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
    $p += '<div mxa="_zs_galleryfy:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryfy:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="clearfix"><div class="fl" mx-view="mx-title/index?content=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div><div class="w200 fr" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F"><i value="mon" class="none">周一</i><i value="wed" class="none">周三</i></div></div></div><div mxa="_zs_galleryfy:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryfy:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">带筛选项的</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryfy:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryfy:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;mx-title class="fl"\n        content="一级标题" \n        tip="一级标题提示文案"/&gt;\n\n    &lt;mx-dropdown class="w200 fr"\n        empty-text="请选择日期"&gt;\n        &lt;mx-dropdown.item value="mon"&gt;周一&lt;/mx-dropdown.item&gt;\n        &lt;mx-dropdown.item value="wed"&gt;周三&lt;/mx-dropdown.item&gt;\n    &lt;/mx-dropdown&gt;\n&lt;/div&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-title/examples/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});