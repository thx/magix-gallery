/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-dragsort___test___index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-dragsort___test___index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-dragsort___test___index_-item {\n  width: 120px;\n  padding: 10px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  cursor: pointer;\n}\n");
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
} ; var $g = '', $_temp, $p = '', items = $$.items, viewId = $$.viewId, text1 = $$.text1, text3 = $$.text3, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaP:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryaP:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryaP:_" class="mb20"><span class="color-9">以下示例：</span>支持垂直方向的排序</div><div mxa="_zs_galleryaP:b" class="clearfix"><ul mxa="_zs_galleryaP:c" class="fl mr40" mx-view="mx-dragsort/index" mx-dragfinish="' + $viewId + 'drag()">';
    $line = 8;
    $art = 'each items as item';
    ;
    $expr = '<%for (var $art_iaapkmjw$art_i = 0, $art_cxrkomocq$art_c = items.length; $art_iaapkmjw$art_i < $art_cxrkomocq$art_c; $art_iaapkmjw$art_i++) {    var item = items[$art_iaapkmjw$art_i]%>';
    for (var $art_iaapkmjw$art_i = 0, $art_cxrkomocq$art_c = items.length; $art_iaapkmjw$art_i < $art_cxrkomocq$art_c; $art_iaapkmjw$art_i++) {
        var item = items[$art_iaapkmjw$art_i];
        $p += '<li class="_zs_gallery_mx-dragsort___test___index_-item" data-value="';
        $line = 9;
        $art = '=item';
        ;
        $p += ($expr = '<%=item%>', $e(item)) + '">';
        $line = 9;
        $art = '=item';
        ;
        $p += ($expr = '<%=item%>', $e(item)) + '</li>';
        $line = 10;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</ul><div mxa="_zs_galleryaP:d" class="fl"><div mxs="_zs_galleryaP:a">当前顺序：</div>';
    $line = 14;
    $art = 'each items as item';
    ;
    $expr = '<%for (var $art_ihhpvmgoeb$art_i = 0, $art_clexhpaam$art_c = items.length; $art_ihhpvmgoeb$art_i < $art_clexhpaam$art_c; $art_ihhpvmgoeb$art_i++) {    var item = items[$art_ihhpvmgoeb$art_i]%>';
    for (var $art_ihhpvmgoeb$art_i = 0, $art_clexhpaam$art_c = items.length; $art_ihhpvmgoeb$art_i < $art_clexhpaam$art_c; $art_ihhpvmgoeb$art_i++) {
        var item = items[$art_ihhpvmgoeb$art_i];
        $p += '<div>';
        $line = 15;
        $art = '=item';
        ;
        $p += ($expr = '<%=item%>', $e(item)) + '</div>';
        $line = 16;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div><div mxa="_zs_galleryaP:e" class="clearfix"><div mxa="_zs_galleryaP:f" class="_zs_gallery___test___layout_-half"><div mxa="_zs_galleryaP:g" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaP:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaP:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 26;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaP:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- mx-view 指到组件地址 --&gt;\n&lt;ul mx-view="app/gallery/mx-dragsort/index" \n    mx-dragfinish="drag()"&gt;\n    &#123;&#123;each items as item&#125;&#125;\n    &lt;li class="item" data-value="&#123;&#123;=item&#125;&#125;"&gt;&#123;&#123;=item&#125;&#125;&lt;/li&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/ul&gt;\n                </pre></div><div mxa="_zs_galleryaP:i" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaP:d" class="_zs_gallery___test___layout_-eg-title">CSS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 41;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_galleryaP:j" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 43;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_galleryaP:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n.item&#123;\n    width: 200px;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 1px solid @color-border;\n    border-radius: @border-radius;\n    cursor: pointer;\n&#125;\n                </pre></div></div><div mxa="_zs_galleryaP:k" class="_zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxa="_zs_galleryaP:l" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaP:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaP:m" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 63;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaP:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 66;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.less\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            items: [1, 2, 3, 4, 5]\n        &#125;);\n    &#125;,\n    \'drag&lt;dragfinish&gt;\'(e) &#123;\n        // 重排序之后的\n        let items = [];\n        let drags = $(\'#\' + this.id + \' .@index.less:item\');\n        for (var i = 0, len = drags.length; i &lt; len; i++) &#123;\n            let drag = $(drags[i]);\n            items.push(drag.data(\'value\'));\n        &#125;\n        this.updater.digest(&#123;\n            items\n        &#125;);\n    &#125;\n&#125;);\n                </pre></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dragsort/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            items: [1, 2, 3, 4, 5]
        });
    },
    'drag<dragfinish>': function (e) {
        // 重排序之后的
        var items = [];
        var drags = $('#' + this.id + ' ._zs_gallery_mx-dragsort___test___index_-item');
        for (var i = 0, len = drags.length; i < len; i++) {
            var drag = $(drags[i]);
            items.push(drag.data('value'));
        }
        this.updater.digest({
            items: items
        });
    }
});

});