/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-wanxiang/__test__/4",["magix","__test__/example","$","mx-search/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-search/index");
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
} ; var $g = '', $_temp, $p = '', searchValue = $$.searchValue, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycX:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_gallerycX:a" class="_zs_gallery___test___base_-eg-content"><div mxa="_zs_gallerycX:b" class="mb20"><span mxs="_zs_gallerycX:_" class="color-9">回车搜索：</span><span>campaignId = ';
    $line = 6;
    $art = '=searchValue';
    ;
    $p += '' + ($expr = '<%=searchValue%>', $e(searchValue)) + '</span></div><div mxs="_zs_gallerycX:a" class="w200" mx-search="' + $viewId + 'change()" mx-view="mx-search/index?searchKey=campaignId&placeholder=%E6%90%9C%E7%B4%A2%E8%AE%A1%E5%88%92"></div></div><div mxa="_zs_gallerycX:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycX:b" class="_zs_gallery___test___base_-eg-title">内容超出右对齐</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycX:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 17;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycX:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-search class="w200"\n    search-key="campaignId"\n    placeholder="搜索计划"\n    mx-search="change()"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-wanxiang/__test__/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            searchValue: ''
        });
    },
    'change<search>': function (e) {
        e.preventDefault();
        // e.searchKey 搜索对应的key值
        // e.searchValue input文本框输入的对应的内容
        this.updater.digest({
            searchValue: e.searchValue
        });
    }
});

});