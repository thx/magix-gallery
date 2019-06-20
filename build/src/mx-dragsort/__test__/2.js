/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-dragsort___test___index_","._zs_gallery_mx-dragsort___test___index_-item {\n  width: 120px;\n  padding: 10px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n}\n");
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
} ; var $g = '', $_temp, $p = '', items = $$.items, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerya2:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerya2:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerya2:_" class="mb20"><span class="color-9">以下示例：</span>支持水平方向的排序</div><div mxa="_zs_gallerya2:b" class="clearfix"><div mxa="_zs_gallerya2:c" class="mb20"><span mxs="_zs_gallerya2:a" class="color-9 mr10">当前顺序：</span>';
    $line = 6;
    $art = '=items';
    ;
    $p += ($expr = '<%=items%>', $e(items)) + '</div><ul mxa="_zs_gallerya2:d" class="clearfix" mx-view="mx-dragsort/index?horizonal=true&vertical=false" mx-dragfinish="' + $viewId + 'drag()">';
    $line = 13;
    $art = 'each items as item';
    ;
    $expr = '<%for (var $art_iwogjeddq$art_i = 0, $art_crmflnhiqs$art_c = items.length; $art_iwogjeddq$art_i < $art_crmflnhiqs$art_c; $art_iwogjeddq$art_i++) {    var item = items[$art_iwogjeddq$art_i]%>';
    for (var $art_iwogjeddq$art_i = 0, $art_crmflnhiqs$art_c = items.length; $art_iwogjeddq$art_i < $art_crmflnhiqs$art_c; $art_iwogjeddq$art_i++) {
        var item = items[$art_iwogjeddq$art_i];
        $p += '<li class="_zs_gallery_mx-dragsort___test___index_-item fl" data-value="';
        $line = 14;
        $art = '=item';
        ;
        $p += ($expr = '<%=item%>', $e(item)) + '">';
        $line = 14;
        $art = '=item';
        ;
        $p += ($expr = '<%=item%>', $e(item)) + '</li>';
        $line = 15;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</ul></div></div><div mxa="_zs_gallerya2:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya2:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya2:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 23;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya2:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;ul class="clearfix"\n    mx-view="@../../mx-dragsort/index" \n    view-horizonal="true"\n    view-vertical="false"\n    mx-dragfinish="drag()"&gt;\n    &#123;&#123;each items as item&#125;&#125;\n    &lt;li class="item fl" data-value="&#123;&#123;=item&#125;&#125;"&gt;&#123;&#123;=item&#125;&#125;&lt;/li&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/ul&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dragsort/__test__/2.html';
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