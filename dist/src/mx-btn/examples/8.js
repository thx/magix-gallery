/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-btn/examples/8",["magix","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-btn_examples_index_","._zs_gallery_mx-btn_examples_index_-dark {\n  padding: 10px;\n  background-color: var(--app-bg);\n}\n._zs_gallery_mx-btn_examples_index_-cont {\n  padding: 10px 0;\n}\n");
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
    $p += '<div mxa="_zs_gallery5:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_gallery5:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="_zs_gallery_mx-btn_examples_index_-dark"><button type="button" hollow="true" class="mx-btn btn-hollow mr20 mb20">默认普通hover品牌</button><button type="button" hollow="true" class="mx-btn btn-small btn-hollow mr20 mb20">小号默认普通hover品牌</button><br/><button type="button" hollow="true" class="mx-btn btn-hollow mr20 mb20"><i class="mc-iconfont">&#xe731;</i>默认普通hover品牌</button><button type="button" hollow="true" class="mx-btn btn-hollow mr20 mb20">默认普通hover品牌<span class="mx-tag btn-tag"><span class="mx-tag-arrow btn-tag-arrow"></span><span class="mx-tag-name">New</span></span></button></div></div><div mxa="_zs_gallery5:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallery5:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">按钮</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallery5:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 17;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallery5:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-btn hollow="true" content="默认普通hover品牌"/&gt;\n\n&lt;mx-btn hollow="true" small="true" content="小号默认普通hover品牌"/&gt;\n\n&lt;mx-btn hollow="true"&gt;\n    &lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;默认普通hover品牌\n&lt;/mx-btn&gt;\n\n&lt;mx-btn hollow="true" content="默认普通hover品牌" tag-content="New"/&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-btn/examples/8.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});