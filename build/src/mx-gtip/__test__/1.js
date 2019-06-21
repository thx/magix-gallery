/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/__test__/1",["magix","__test__/example","mx-gtip/index","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,GTip,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var GTip = require("mx-gtip/index");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycu:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerycu:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'show1()" class="link-brand">显示提示信息，1秒后自动关闭</a></div><div><a href="javascript:;" mx-click="' + $viewId + 'show2()" class="link-brand">显示提示信息，手动关闭</a></div></div><div mxa="_zs_gallerycu:a" class="clearfix"><div mxa="_zs_gallerycu:b" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerycu:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycu:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 15;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycu:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" class="link-brand"\n    mx-click="show1()"&gt;显示提示信息，1秒后自动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" class="link-brand"\n    mx-click="show2()"&gt;显示提示信息，手动关闭&lt;/a&gt;\n            </pre></div><div mxa="_zs_gallerycu:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerycu:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycu:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 30;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycu:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet GTip = require(\'@../../mx-gtip/index\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [GTip],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'show1&lt;click&#gt;\'()&#123;\n        this.gtip(\'显示提示信息，1秒后自动关闭\', 1000);\n    &#125;,\n    \'show2&lt;click&#gt;\'()&#123;\n        this.gtip(\'显示提示信息，手动关闭\');\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-gtip/__test__/1.html';
    throw msg;
} return $p; },
    mixins: [GTip],
    render: function () {
        this.updater.digest();
    },
    'show1<click>': function () {
        this.gtip('显示提示信息，1秒后自动关闭', 1000);
    },
    'show2<click>': function () {
        this.gtip('显示提示信息，手动关闭');
    }
});

});