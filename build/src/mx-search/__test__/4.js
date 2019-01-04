/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
} ; var $g = '', $_temp, $p = '', searchValue = $$.searchValue, viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_galleryc#:_" class="_zs_galleryh"><div mxa="_zs_galleryc#:a" class="_zs_galleryk"><div mxa="_zs_galleryc#:b" class="mb20"><span mxs="_zs_galleryc#:_" class="color-9">回车搜索：</span><span>campaignId = ' + $e(searchValue) + '</span></div><div mxs="_zs_galleryc#:a" class="w200" mx-search="' + $viewId + 'change()" mx-view="mx-search/index?searchKey=campaignId&placeholder=%E6%90%9C%E7%B4%A2%E8%AE%A1%E5%88%92"></div></div><div mxa="_zs_galleryc#:c" class="_zs_galleryl"><div mxs="_zs_galleryc#:b" class="_zs_galleryj">单个搜索，封装事件</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryc#:d" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryc#:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-search class="w200"\n    search-key="campaignId"\n    placeholder="搜索计划"\n    mx-search="change()"/&gt;</pre></div></div>'; return $p; },
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