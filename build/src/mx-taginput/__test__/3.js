/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycp:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_gallerycp:a" class="_zs_gallery___test___base_-eg-content"><div class="mb20" mx-view="mx-taginput/index?list=';
    $line = 4;
    $art = '@[\'test1\',\'test2\',\'test3\',\'test4\']';
    ;
    $p += '' + ($expr = '<%@[\'test1\',\'test2\',\'test3\',\'test4\']%>', $i(['test1', 'test2', 'test3', 'test4'])) + '&selected=test1%2Ctest2"></div><div mx-view="mx-taginput/index?list=';
    $line = 8;
    $art = '@[\'test1\',\'test2\',\'test3\',\'test4\']';
    ;
    $p += '' + ($expr = '<%@[\'test1\',\'test2\',\'test3\',\'test4\']%>', $i(['test1', 'test2', 'test3', 'test4'])) + '"></div></div><div mxa="_zs_gallerycp:b" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycp:_" class="_zs_gallery___test___base_-eg-title">简单list</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 12;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycp:c" class="_zs_gallery___test___base_-desc-tip">';
    $line = 14;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycp:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-taginput \n    list="&#123;&#123;@[\'test1\',\'test2\',\'test3\',\'test4\']&#125;&#125;"\n    selected="test1,test2"/&gt;\n\n&lt;mx-taginput \n    list="&#123;&#123;@[\'test1\',\'test2\',\'test3\',\'test4\']&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});