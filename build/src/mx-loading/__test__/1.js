/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/__test__/1",["magix","__test__/example","mx-loading/index","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Loading,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Loading = require("mx-loading/index");
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
    $p += '<div mxa="_zs_gallerybB:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybB:_" class="_zs_gallery___test___layout_-eg-content"><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'show()">点击显示加载中，loading中禁止页面操作，3秒后自动关闭</a></div><div mxa="_zs_gallerybB:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybB:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 8;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybB:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 10;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybB:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;" class="link-brand"\n    mx-click="show()"&gt;点击显示加载中，loading中禁止页面操作，3秒后自动关闭&lt;/a&gt;</pre></div><div mxa="_zs_gallerybB:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybB:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 19;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybB:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 21;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybB:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 24;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Loading = require(\'@../../mx-loading/index\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Loading],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'show&lt;click&gt;\'(e)&#123;\n        let that = this;\n        that.showLoading();\n\n        setTimeout(() =&gt; &#123;\n            that.hideLoading();\n        &#125;, 3000);\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-loading/__test__/1.html';
    throw msg;
} return $p; },
    mixins: [Loading],
    render: function () {
        this.updater.digest();
    },
    'show<click>': function (e) {
        var that = this;
        that.showLoading();
        setTimeout(function () {
            that.hideLoading();
        }, 3000);
    }
});

});