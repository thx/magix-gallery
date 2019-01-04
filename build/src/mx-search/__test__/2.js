/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_galleryc8:_" class="_zs_galleryh"><div mxa="_zs_galleryc8:a" class="_zs_galleryk"><div class="w200" mx-view="mx-search/index?list=' + $i($$ref, [{ name: '计划', id: 'campaignId' }, { name: '单元', id: 'adgroupId' }]) + '&listText=name&listValue=id"></div></div><div mxa="_zs_galleryc8:b" class="_zs_galleryl"><div mxs="_zs_galleryc8:_" class="_zs_galleryj">自定义&nbsp;list-text&nbsp;和&nbsp;list-value</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryc8:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryc8:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-search class="w200"\n    list="&#123;&#123;@[&#123;\n        name: \'计划\',\n        id: \'campaignId\'\n    &#125;, &#123;\n        name: \'单元\',\n        id: \'adgroupId\'\n    &#125;]&#125;&#125;"\n    list-text="name"\n    list-value="id"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});