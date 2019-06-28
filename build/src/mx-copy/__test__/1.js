/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-copy/__test__/1",["magix","__test__/example","$","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, success = $$.success, text2 = $$.text2, text3 = $$.text3; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryaF:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryaF:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryaF:_" class="mb20"><span class="color-9">以下示例：</span>需要复制另外一个显示节点的内容，配置 copy-node 指向需要复制的节点</div><div mxv mxa="_zs_galleryaF:b" class="mb20 clearfix"><textarea class="fl" cols="30" rows="4" id="';
    $line = 8;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">Magix棒棒的！</textarea><div mxa="_zs_galleryaF:c" class="fl ml10"><div class="btn btn-brand" mx-success="' + $viewId + 'done2()" mx-view="mx-copy/index?copyNode=';
    $line = 10;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1">复制</div>';
    $line = 12;
    $art = 'if success';
    ;
    $expr = '<%if (success) {%>';
    if (success) {
        ;
        $p += '<div mxs="_zs_galleryaF:a" class="color-green mt10">复制成功</div>';
        $line = 14;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div><div mxa="_zs_galleryaF:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaF:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaF:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaF:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;div class="mb20"&gt;\n    &lt;mx-copy copy-node="&#123;&#123;=viewId&#125;&#125;_text_1" class="btn btn-brand"\n        mx-success="done()"&gt;复制&lt;/mx-copy&gt;\n    &#123;&#123;if success&#125;&#125;\n    &lt;span class="color-green ml20"&gt;复制成功&lt;/span&gt;\n    &#123;&#123;/if&#125;&#125;\n&lt;/div&gt;\n&lt;textarea cols="30" rows="4" id="&#123;&#123;=viewId&#125;&#125;_text_1"&gt;Magix棒棒的！&lt;/textarea&gt;</pre></div><div mxa="_zs_galleryaF:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaF:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_galleryaF:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 39;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_galleryaF:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id\n        &#125;);\n    &#125;,\n    \'done&lt;success&gt;\'(e) &#123;\n        this.updater.digest(&#123;\n            success: true\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-copy/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    },
    'done2<success>': function (e) {
        this.updater.digest({
            success: true
        });
    }
});

});