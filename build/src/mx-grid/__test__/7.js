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
Magix.applyStyle("_zs_gallery_mx-grid___test___index_","/* @dependent: ./index.less */\n._zs_gallery_mx-grid___test___index_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-grid___test___index_-grid1 {\n  background-color: #4d7fff;\n  opacity: 0.1;\n}\n._zs_gallery_mx-grid___test___index_-grid2 {\n  background-color: #4d7fff;\n  opacity: 0.2;\n}\n._zs_gallery_mx-grid___test___index_-grid3 {\n  background-color: #4d7fff;\n  opacity: 0.3;\n}\n._zs_gallery_mx-grid___test___index_-grid4 {\n  background-color: #4d7fff;\n  opacity: 0.4;\n}\n._zs_gallery_mx-grid___test___index_-grid5 {\n  background-color: #4d7fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-grid___test___index_-grid6 {\n  background-color: #4d7fff;\n  opacity: 0.6;\n}\n._zs_gallery_mx-grid___test___index_-grid7 {\n  background-color: #4d7fff;\n  opacity: 0.7;\n}\n._zs_gallery_mx-grid___test___index_-grid8 {\n  background-color: #4d7fff;\n  opacity: 0.8;\n}\n._zs_gallery_mx-grid___test___index_-grid9 {\n  background-color: #4d7fff;\n  opacity: 0.9;\n}\n._zs_gallery_mx-grid___test___index_-grid10 {\n  background-color: #4d7fff;\n  opacity: 1;\n}\n._zs_gallery_mx-grid___test___index_-container {\n  padding: 20px;\n  background-color: #fafafa;\n}\n");
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
    $p += '<div mxa="_zs_gallerybG:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerybG:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_gallerybG:b" class="_zs_gallery_mx-grid___test___index_-container"><div mxa="_zs_gallerybG:c" style="background: #fff; border-radius: 4px; box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);"><div mxa="_zs_gallerybG:d" content="标题" class="clearfix" style="padding: 10px 20px;;border-bottom: 1px solid #e6e6e6;;"><div mxa="_zs_gallerybG:e" style="float:left; line-height: 32px;"><span mxa="_zs_gallerybG:f" style="margin-right: 2px; color: #ccc;">';
    $line = 5;
    $art = '!icon';
    ;
    $p += ($expr = '<%!icon%>', $n(icon)) + '</span><span mxs="_zs_gallerybG:_" style="font-size: 16px;">标题</span><span mxs="_zs_gallerybG:a" style="margin-left: 20px; color: #999;">提示信息</span></div></div><div mxs="_zs_gallerybG:b" style="padding:20px;">test</div></div></div></div><div mxa="_zs_gallerybG:g" class="clearfix"><div mxa="_zs_gallerybG:h" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerybG:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybG:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 15;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybG:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title content="标题" tip="提示信息" icon="&#123;&#123;!icon&#125;&#125;"/&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n            </pre></div><div mxa="_zs_gallerybG:j" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerybG:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybG:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 29;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybG:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 32;
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