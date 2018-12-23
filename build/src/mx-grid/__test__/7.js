/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/__test__/7",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-grid___test___index_","/* @dependent: ./index.less */\n._zs_gallery_mx-grid___test___index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-grid___test___index_-grid1 {\n  background-color: #4d7fff;\n  opacity: 0.1;\n}\n._zs_gallery_mx-grid___test___index_-grid2 {\n  background-color: #4d7fff;\n  opacity: 0.2;\n}\n._zs_gallery_mx-grid___test___index_-grid3 {\n  background-color: #4d7fff;\n  opacity: 0.3;\n}\n._zs_gallery_mx-grid___test___index_-grid4 {\n  background-color: #4d7fff;\n  opacity: 0.4;\n}\n._zs_gallery_mx-grid___test___index_-grid5 {\n  background-color: #4d7fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-grid___test___index_-grid6 {\n  background-color: #4d7fff;\n  opacity: 0.6;\n}\n._zs_gallery_mx-grid___test___index_-grid7 {\n  background-color: #4d7fff;\n  opacity: 0.7;\n}\n._zs_gallery_mx-grid___test___index_-grid8 {\n  background-color: #4d7fff;\n  opacity: 0.8;\n}\n._zs_gallery_mx-grid___test___index_-grid9 {\n  background-color: #4d7fff;\n  opacity: 0.9;\n}\n._zs_gallery_mx-grid___test___index_-grid10 {\n  background-color: #4d7fff;\n  opacity: 1;\n}\n._zs_gallery_mx-grid___test___index_-container {\n  padding: 16px;\n  background-color: #fafafa;\n}\n");
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
} ; var $g = '', $_temp, $p = '', icon = $$.icon, viewId = $$.viewId, text1 = $$.text1, text3 = $$.text3, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybP:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerybP:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybP:_" class="mb10">使用 &lt;mx-grid&gt; 标签；也可直接用 class grid 样式</div><div mxa="_zs_gallerybP:b" class="_zs_gallery_mx-grid___test___index_-container"><div mxa="_zs_gallerybP:c" class="grid"><div mxa="_zs_gallerybP:d" content="标题" class="clearfix" style="padding: 8px 24px;;border-bottom: 1px solid #e6e6e6;;"><div mxa="_zs_gallerybP:e" style="float:left; line-height: 32px;"><span mxa="_zs_gallerybP:f" style="margin-right: 2px; color: #ccc;">';
    $line = 6;
    $art = '!icon';
    ;
    $p += ($expr = '<%!icon%>', $n(icon)) + '</span><span mxs="_zs_gallerybP:a" style="font-size: 20px;">标题</span><span mxs="_zs_gallerybP:b" style="margin-left: 16px; color: #999;">提示信息</span></div></div><div mxs="_zs_gallerybP:c" class="clearfix" style="padding: 16px 24px;">test</div></div></div></div><div mxa="_zs_gallerybP:g" class="clearfix"><div mxa="_zs_gallerybP:h" class="_zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-left"><div mxa="_zs_gallerybP:i" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybP:d" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybP:j" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 17;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybP:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title \n        content="标题" \n        tip="提示信息" \n        icon="&#123;&#123;!icon&#125;&#125;"/&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n                </pre></div><div mxa="_zs_gallerybP:k" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybP:f" class="_zs_gallery___test___layout_-eg-title">等同于使用class grid</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerybP:l" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 34;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerybP:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;div class="grid"&gt;\n    &lt;mx-grid.title \n        content="标题" \n        tip="提示信息" \n        icon="&#123;&#123;!icon&#125;&#125;"/&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/div&gt;\n                </pre></div></div><div mxa="_zs_gallerybP:m" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerybP:g" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybP:n" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 52;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybP:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            icon: \'&lt;i class="mc-iconfont fontsize-20"&gt;&#38;&#35;xe670;&lt;/i&gt;\'\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-grid/__test__/7.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            icon: '<i class="mc-iconfont fontsize-20 displacement-2 bold">&#xe670;</i>'
        });
    }
});

});