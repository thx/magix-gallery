/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-error/__test__/index",["magix","__test__/example","$","mx-title/second","../index","mx-copy/index","__test__/hl","__test__/api"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-title/second");
require("../index");
require("mx-copy/index");
require("__test__/hl");
require("__test__/api");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text3 = $$.text3, text2 = $$.text2, text5 = $$.text5, text4 = $$.text4, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerybb:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybb:_" class="clearfix"><div mxa="_zs_gallerybb:a" class="_zs_gallery___test___layout_-half"><div mxa="_zs_gallerybb:b" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybb:a" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-error/index"></div></div><div mxa="_zs_gallerybb:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybb:b" class="_zs_gallery___test___layout_-eg-title">默认404</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 10;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybb:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 12;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybb:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-error/&gt;</pre></div></div><div mxa="_zs_gallerybb:e" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybb:d" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-error/index?tip=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF"></div></div><div mxa="_zs_gallerybb:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybb:e" class="_zs_gallery___test___layout_-eg-title">404自定义提示</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerybb:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 27;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerybb:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;mx-error tip="自定义提示信息"/&gt;</pre></div></div></div><div mxa="_zs_gallerybb:h" class="_zs_gallery___test___layout_-half"><div mxa="_zs_gallerybb:i" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybb:f" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-error/index?type=502"></div></div><div mxa="_zs_gallerybb:j" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybb:g" class="_zs_gallery___test___layout_-eg-title">502提示</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybb:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 44;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybb:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;mx-error type="502"/&gt;</pre></div></div><div mxa="_zs_gallerybb:l" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybb:h" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-error/index?type=500"></div></div><div mxa="_zs_gallerybb:m" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybb:i" class="_zs_gallery___test___layout_-eg-title">500提示</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:5})" mx-view="mx-copy/index?copyNode=';
    $line = 57;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_5"><span mxa="_zs_gallerybb:n" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 59;
    $art = '!text5';
    ;
    $p += ($expr = '<%!text5%>', $n(text5)) + '</span><i mxs="_zs_gallerybb:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 62;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_5">\n&lt;mx-error type="500"/&gt;</pre></div></div><div mxa="_zs_gallerybb:o" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybb:j" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-error/index?type=502&tip=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%90%E7%A4%BA&btns=false"></div></div><div mxa="_zs_gallerybb:p" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybb:k" class="_zs_gallery___test___layout_-eg-title">502自定义提示 + 不要按钮</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:4})" mx-view="mx-copy/index?copyNode=';
    $line = 72;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_4"><span mxa="_zs_gallerybb:q" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 74;
    $art = '!text4';
    ;
    $p += ($expr = '<%!text4%>', $n(text4)) + '</span><i mxs="_zs_gallerybb:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 77;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_4">\n&lt;mx-error type="502" tip="自定义提示" btns="false"/&gt;</pre></div></div></div></div><div id="';
    $line = 84;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 85;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-error/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'type',
                desc: '异常类型，可选404，500，502',
                type: 'string',
                def: '404'
            }, {
                key: 'tip',
                desc: '自定义提示信息',
                type: 'string',
                def: '404：抱歉，您查看的页面不存在或无权限查看当前页面<br/>500：Internal Server Error<br/>502：Bad Gateway'
            }, {
                key: 'btns',
                desc: '是否需要返回首页 + 返回上一页按钮',
                type: 'boolean',
                def: 'true'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});