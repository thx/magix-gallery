/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/13",["magix","__test__/example","$","../star","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../star");
require("mx-copy/index");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaH:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryaH:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb10"><div mx-view="mx-effects/star?num=2.5&icon=%3Ci%20class%3D%27mc-iconfont%27%3E%EE%98%B5%3C%2Fi%3E&color=%23fc2a2a"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=4&icon=%3Ci%20class%3D%27mc-iconfont%27%3E%EE%98%8C%3C%2Fi%3E&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_galleryaH:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaH:a" class="_zs_gallery___test___layout_-eg-title">自定义icon + 颜色</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaH:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 18;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaH:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.star \n    num="2.5"\n    icon="&lt;i class=\'mc-iconfont\'&gt;&#38;&#35;xe635;&lt;/i&gt;"\n    color="#fc2a2a"&gt;&lt;/mx-effects.star&gt;\n\n&lt;mx-effects.star \n    num="4"\n    icon="&lt;i class=\'mc-iconfont\'&gt;&#38;&#35;xe60c;&lt;/i&gt;"\n    color="rgb(81, 163, 0)"&gt;&lt;/mx-effects.star&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/13.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            icon: '<i class="mc-iconfont">&#xe635;</i>',
            icon2: '<i class="mc-iconfont">&#xe60c;</i>'
        });
    }
});

});