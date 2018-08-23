/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/__test__/2",["magix","__test__/example","mx-loading/index","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Loading,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Loading = require("mx-loading/index"); //loading组件
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryba:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_galleryba:_" class="_zs_gallery___test___base_-eg-content"><a href="javascript:;" mx-click="' + $viewId + 'show()" class="btn btn-brand mr20">打开</a><a href="javascript:;" mx-click="' + $viewId + 'hide()" class="btn">关闭</a></div><div mxa="_zs_galleryba:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryba:a" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 8;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryba:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 10;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryba:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Loading = require(\'@../index\'); //loading组件\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    \'show&lt;click&gt;\'(e){\n        // showLoading(closeMask)\n        // closeMask不需要禁止操作\n        Loading.showLoading(true);\n    },\n    \'hide&lt;click&gt;\'(e){\n        Loading.hideLoading();\n    }\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-loading/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    },
    'show<click>': function (e) {
        // showLoading(closeMask)
        // closeMask不需要禁止操作
        Loading.showLoading(true);
    },
    'hide<click>': function (e) {
        Loading.hideLoading();
    }
});

});