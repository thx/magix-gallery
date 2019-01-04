/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_galleryc9:_" class="_zs_galleryh"><div mxa="_zs_galleryc9:a" class="_zs_galleryk"><div class="w300" mx-view="mx-search/index?list=' + $i($$ref, [{ text: '宝贝', value: 'itemId' }, { text: '单元', value: 'adgroupId' }]) + '&searchKey=adgroupId&searchValue=%E8%B6%85%E5%87%BA%E5%8F%B3%E5%AF%B9%E9%BD%90%EF%BC%8C%E6%90%9C%E7%B4%A2%E6%A1%86%E5%9C%A8%E9%A1%B5%E9%9D%A2%E5%8F%B3%E8%BE%B9%E7%BC%98%E6%97%B6%E9%80%82%E7%94%A8&align=right"></div></div><div mxa="_zs_galleryc9:b" class="_zs_galleryl"><div mxs="_zs_galleryc9:_" class="_zs_galleryj">内容超出右对齐</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryc9:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryc9:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-search class="w300"\n    list="&#123;&#123;@[&#123;\n        text: \'宝贝\',\n        value: \'itemId\'\n    &#125;, &#123;\n        text: \'单元\',\n        value: \'adgroupId\'\n    &#125;]&#125;&#125;"\n    search-key="adgroupId"\n    search-value="超出右对齐，搜索框在页面右边缘时适用"\n    align="right"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});