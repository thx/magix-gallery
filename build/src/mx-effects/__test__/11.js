/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/11",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
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
    $p += '<div mxa="_zs_gallerybf:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerybf:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_gallerybf:b" class="mb10"><div mxa="_zs_gallerybf:c" class="mx-star"><div mxa="_zs_gallerybf:d" class="mx-star-bg">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerybf:e" class="mx-star-on" style="width: 0%;"><div mxa="_zs_gallerybf:f" class="mx-star-inner mx-star-brand">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div></div><div mxa="_zs_gallerybf:g" class="mb10"><div mxa="_zs_gallerybf:h" class="mx-star"><div mxa="_zs_gallerybf:i" class="mx-star-bg">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerybf:j" class="mx-star-on" style="width: 30%;"><div mxa="_zs_gallerybf:k" class="mx-star-inner mx-star-brand">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div></div><div mxa="_zs_gallerybf:l" class="mb10"><div mxa="_zs_gallerybf:m" class="mx-star"><div mxa="_zs_gallerybf:n" class="mx-star-bg">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerybf:o" class="mx-star-on" style="width: 50%;"><div mxa="_zs_gallerybf:p" class="mx-star-inner mx-star-brand">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div></div><div mxa="_zs_gallerybf:q" class="mb10"><div mxa="_zs_gallerybf:r" class="mx-star"><div mxa="_zs_gallerybf:s" class="mx-star-bg">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerybf:t" class="mx-star-on" style="width: 80%;"><div mxa="_zs_gallerybf:u" class="mx-star-inner mx-star-brand">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div></div><div mxa="_zs_gallerybf:v" class="mb10"><div mxa="_zs_gallerybf:w" class="mx-star"><div mxa="_zs_gallerybf:x" class="mx-star-bg">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_gallerybf:y" class="mx-star-on" style="width: 100%;"><div mxa="_zs_gallerybf:z" class="mx-star-inner mx-star-brand">';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div></div></div></div><div mxa="_zs_gallerybf:A" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybf:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybf:B" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 23;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybf:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- 默认使用品牌色高亮 --&gt;\n&lt;mx-effects.star num="-1"/&gt;\n\n&lt;mx-effects.star num="1.4"/&gt;\n\n&lt;mx-effects.star num="2.5"/&gt;\n\n&lt;mx-effects.star num="4"/&gt;\n\n&lt;mx-effects.star num="5.5"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/11.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            test: true
        });
    }
});

});