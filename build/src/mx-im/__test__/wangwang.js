/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-im/__test__/wangwang",["magix","__test__/example","$","mx-title/second","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-title/second");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryb6:_" mx-view="mx-title/second?content=%E6%97%BA%E6%97%BA%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb6:_" class="mb40"><div mxa="_zs_galleryb6:a" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryb6:a" class="_zs_gallery___test___layout_-eg-content"><a target="_blank" href="//awp.taobao.com/bs/wwlight.html?ver=3&touid=虞佳&siteid=cntaobao&status=2&charset=utf-8"><img src="//amos.alicdn.com/online.aw?v=2&uid=虞佳&site=cntaobao&s=2&charset=utf-8"/></a></div><div mxa="_zs_galleryb6:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb6:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 9;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb6:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 11;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb6:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 14;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-wangwang uid="虞佳"/&gt;\n            </pre></div><div mxa="_zs_galleryb6:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb6:d" class="_zs_gallery___test___layout_-eg-title">等同于</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryb6:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryb6:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;a target="_blank" href="//awp.taobao.com/bs/wwlight.html?ver=3&touid=虞佳&siteid=cntaobao&status=2&charset=utf-8" rel="noopener noreferrer" &gt;\n    &lt;img src="//amos.alicdn.com/online.aw?v=2&uid=虞佳&site=cntaobao&s=2&charset=utf-8"/&gt;\n&lt;/a&gt;\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-im/__test__/wangwang.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});