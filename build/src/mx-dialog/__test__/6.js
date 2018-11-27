/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/6",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Dialog,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Dialog = require("mx-dialog/index"); //mixins dialog
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text3 = $$.text3, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaf:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryaf:_" class="_zs_gallery___test___layout_-eg-content"><a href="javascript:;" mx-click="' + $viewId + 'open1()" class="btn btn-brand mr20">使用浮层内配置的属性</a><a href="javascript:;" mx-click="' + $viewId + 'open2()" class="btn btn-brand">自定义属性</a></div><div mxa="_zs_galleryaf:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaf:a" class="_zs_gallery___test___layout_-eg-title">浮层本身写法</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 11;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_galleryaf:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 13;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_galleryaf:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 16;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\nlet Magix = require(\'magix\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@inner.html\',\n    init(e) &#123;\n        this.viewOptions = e;\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'cancel&lt;click&gt;\'(event) &#123;\n        event.preventDefault();\n        let viewOptions = this.viewOptions;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;\n&#125;, &#123;\n    dialogOptions: &#123;\n        width: 800\n    &#125;\n&#125;);\n</pre></div><div mxa="_zs_galleryaf:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaf:c" class="_zs_gallery___test___layout_-eg-title">使用浮层内配置的属性</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 43;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaf:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 45;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaf:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n\'open&lt;click&gt;\'(e) &#123;\n    this.mxDialog(\'@./inner\');\n&#125;\n        </pre></div><div mxa="_zs_galleryaf:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaf:d" class="_zs_gallery___test___layout_-eg-title">自定义属性</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaf:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 58;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaf:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n\'open&lt;click&gt;\'(e) &#123;\n    this.mxDialog(\'@./inner\', &#123;&#125;, &#123;\n        width: 400\n    &#125;);\n&#125;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/6.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open1<click>': function (e) {
        this.mxDialog('mx-dialog/__test__/inner');
    },
    'open2<click>': function (e) {
        this.mxDialog('mx-dialog/__test__/inner', {}, {
            width: 400
        });
    }
});

});