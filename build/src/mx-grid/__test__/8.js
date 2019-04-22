/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/__test__/8",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-grid___test___index_","._zs_gallery_mx-grid___test___index_-grid1 {\n  background-color: var(--color-brand);\n  opacity: 0.1;\n}\n._zs_gallery_mx-grid___test___index_-grid2 {\n  background-color: var(--color-brand);\n  opacity: 0.2;\n}\n._zs_gallery_mx-grid___test___index_-grid3 {\n  background-color: var(--color-brand);\n  opacity: 0.3;\n}\n._zs_gallery_mx-grid___test___index_-grid4 {\n  background-color: var(--color-brand);\n  opacity: 0.4;\n}\n._zs_gallery_mx-grid___test___index_-container {\n  padding: 16px;\n  background-color: var(--app-bg);\n}\n");
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
} ; var $g = '', $_temp, $p = '', icon = $$.icon, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryb;:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryb;:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryb;:_" class="mb10">只标题部分：</div><div mxa="_zs_galleryb;:b" class="_zs_gallery_mx-grid___test___index_-container"><div mxa="_zs_galleryb;:c" class="grid"><div mxa="_zs_galleryb;:d" content="标题" class="clearfix" style="padding: 10px 24px;;"><div mxa="_zs_galleryb;:e" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_galleryb;:f" style="margin-right: 4px; color: #ccc;">';
    $line = 10;
    $art = '!icon';
    ;
    $p += ($expr = '<%!icon%>', $n(icon)) + '</span><span mxs="_zs_galleryb;:a" style="font-size: 16px; margin-right: 16px;">标题</span><span mxs="_zs_galleryb;:b" style="margin-right: 16px; color: #999;">提示信息</span></div></div></div></div></div><div mxa="_zs_galleryb;:g" class="clearfix"><div mxa="_zs_galleryb;:h" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_galleryb;:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb;:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb;:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title \n        border="none" \n        content="标题" \n        tip="提示信息" \n        icon="&#123;&#123;!icon&#125;&#125;"/&gt;\n&lt;/mx-grid&gt;\n            </pre></div><div mxa="_zs_galleryb;:j" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryb;:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryb;:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 36;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryb;:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            icon: \'&lt;i class="mc-iconfont fontsize-20 bold"&gt;&#xe60e;&lt;/i&gt;\'\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-grid/__test__/8.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            icon: '<i class="mc-iconfont fontsize-20 bold">&#xe60e;</i>'
        });
    }
});

});