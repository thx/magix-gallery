/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-title/__test__/index",["magix","__test__/example","$","../second","../index","mx-copy/index","__test__/hl","./1","__test__/api"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../second");
require("../index");
require("mx-copy/index");
require("__test__/hl");
require("./1");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2, text5 = $$.text5, text3 = $$.text3, text4 = $$.text4, text6 = $$.text6, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerycK:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycK:_" class="clearfix"><div mxa="_zs_gallerycK:a" class="_zs_gallery___test___base_-half"><div mxa="_zs_gallerycK:b" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallerycK:a" class="_zs_gallery___test___base_-eg-content"><div mx-view="mx-title/index?content=%E4%B8%80%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div></div><div mxa="_zs_gallerycK:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycK:b" class="_zs_gallery___test___base_-eg-title">使用组件</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 12;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycK:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 14;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycK:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-title \n    content="一级标题"\n    tip="标题提示文案"/&gt;</pre></div><div mxa="_zs_gallerycK:e" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycK:d" class="_zs_gallery___test___base_-eg-title">可直接使用class</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 24;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycK:f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 26;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycK:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 29;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;div class="page-header"&gt;\n    &lt;span class="first-header"&gt;一级标题&lt;/span&gt;\n    &lt;span class="page-tip"&gt;标题提示文案&lt;/span&gt;\n&lt;/div&gt;</pre></div></div><div mxa="_zs_gallerycK:g" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallerycK:e" class="_zs_gallery___test___base_-eg-content"><div mx-view="mx-title/index?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%B8%80%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_gallerycK:h" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycK:f" class="_zs_gallery___test___base_-eg-title">可包含html标签，需要转义</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:5})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_5"><span mxa="_zs_gallerycK:i" class="_zs_gallery___test___base_-desc-tip">';
    $line = 46;
    $art = '!text5';
    ;
    $p += '' + ($expr = '<%!text5%>', $n(text5)) + '</span><i mxs="_zs_gallerycK:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_5">\n&lt;mx-title \n    content="&amp;lt;span style=\'color: red;\'&amp;gt;一级&amp;lt;/span&amp;gt;标题"\n    tip="&amp;lt;span style=\'color: red;\'&amp;gt;高亮&amp;lt;/span&amp;gt;显示"/&gt;</pre></div></div></div><div mxa="_zs_gallerycK:j" class="_zs_gallery___test___base_-half"><div mxa="_zs_gallerycK:k" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallerycK:g" class="_zs_gallery___test___base_-eg-content"><div mx-view="mx-title/second?content=%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98&tip=%E4%BA%8C%E7%BA%A7%E6%A0%87%E9%A2%98%E6%8F%90%E7%A4%BA%E6%96%87%E6%A1%88"></div></div><div mxa="_zs_gallerycK:l" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycK:b" class="_zs_gallery___test___base_-eg-title">使用组件</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 65;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerycK:m" class="_zs_gallery___test___base_-desc-tip">';
    $line = 67;
    $art = '!text3';
    ;
    $p += '' + ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerycK:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 70;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;mx-title.second\n    content="二级标题"\n    tip="二级标题提示文案"/&gt;</pre></div><div mxa="_zs_gallerycK:n" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycK:d" class="_zs_gallery___test___base_-eg-title">可直接使用class</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:4})" mx-view="mx-copy/index?copyNode=';
    $line = 77;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_4"><span mxa="_zs_gallerycK:o" class="_zs_gallery___test___base_-desc-tip">';
    $line = 79;
    $art = '!text4';
    ;
    $p += '' + ($expr = '<%!text4%>', $n(text4)) + '</span><i mxs="_zs_gallerycK:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 82;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_4">\n&lt;div class="page-header"&gt;\n    &lt;span class="second-header"&gt;二级标题&lt;/span&gt;\n    &lt;span class="page-tip"&gt;二级标题提示文案&lt;/span&gt;\n&lt;/div&gt;</pre></div></div><div mxa="_zs_gallerycK:p" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallerycK:h" class="_zs_gallery___test___base_-eg-content"><div mx-view="mx-title/second?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%BA%8C%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_gallerycK:q" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycK:f" class="_zs_gallery___test___base_-eg-title">可包含html标签，需要转义</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:6})" mx-view="mx-copy/index?copyNode=';
    $line = 97;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_6"><span mxa="_zs_gallerycK:r" class="_zs_gallery___test___base_-desc-tip">';
    $line = 99;
    $art = '!text6';
    ;
    $p += '' + ($expr = '<%!text6%>', $n(text6)) + '</span><i mxs="_zs_gallerycK:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 102;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_6">\n&lt;mx-title.second \n    content="&amp;lt;span style=\'color: red;\'&amp;gt;二级&amp;lt;/span&amp;gt;标题"\n    tip="&amp;lt;span style=\'color: red;\'&amp;gt;高亮&amp;lt;/span&amp;gt;显示"/&gt;</pre></div></div></div></div><div mxs="_zs_gallerycK:i" class="mb20"><div mx-view="mx-title/__test__/1"></div></div><div mxs="_zs_gallerycK:j" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 115;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-title/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'content',
                desc: '标题内容',
                type: 'string'
            }, {
                key: 'tip',
                desc: '提示提示内容',
                type: 'string'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});