/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/8",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../progress");
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
    $p += '<div mxa="_zs_gallerybu:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybu:j" class="_zs_gallery___test___layout_-eg-content"><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=-20.3"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?width=160&num=10"></div><span class="color-9 ml10">（自定义宽度160，默认200）</span></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=20.2&textPlacement=left"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=40.23&textPlacement=right"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?num=60.555&textPlacement=bottom"></div></div><div class="ml40 mt20 mb40"><div mx-view="mx-effects/progress?num=101.2&textPlacement=bottom"></div></div><div class="ml40 mt20"><div mx-view="mx-effects/progress?text=false&num=60.555"></div><span class="color-9 ml10">（不需要文案）</span></div></div><div mxa="_zs_gallerybu:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybu:h" class="_zs_gallery___test___layout_-eg-title">条型进度条，精度与传入数值保持一致，最多两位</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybu:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 46;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybu:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.progress\n    num="-20.3"/&gt;\n\n&lt;mx-effects.progress\n    width="160"\n    num="10"/&gt;\n\n&lt;mx-effects.progress\n    num="20.2" \n    text-placement="left"/&gt;\n\n&lt;mx-effects.progress\n    num="40.23" \n    text-placement="right"/&gt;\n\n&lt;mx-effects.progress\n    num="60.555" \n    text-placement="bottom"/&gt;\n\n&lt;mx-effects.progress\n    num="101.2" \n    text-placement="bottom"/&gt;</pre></div><div mxa="_zs_gallerybu:h" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybu:g" class="_zs_gallery___test___layout_-eg-title">不需要文案</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 75;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybu:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 77;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybu:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 80;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;mx-effects.progress\n    text="false"\n    num="60.12"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/8.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});