/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerydr:_" class="_zs_galleryh"><div mxa="_zs_gallerydr:a" class="_zs_galleryk"><div mx-view="mx-suggest/index?list=' + $i($$ref, [{ name: 'test1', id: 1 }, { name: 'test12', id: 2 }, { name: 'abc1', id: 3 }, { name: 'abc2', id: 4 }]) + '&listText=name&listValue=id"></div></div><div mxa="_zs_gallerydr:b" class="_zs_galleryl"><div mxs="_zs_gallerydr:_" class="_zs_galleryj">自定义&nbsp;list-text&nbsp;和&nbsp;list-value</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydr:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydr:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-suggest \n    list="&#123;&#123;@[&#123;\n        name: \'test1\',\n        id: 1\n    &#125;, &#123;\n        name: \'test12\',\n        id: 2\n    &#125;, &#123;\n        name: \'abc1\',\n        id: 3\n    &#125;, &#123;\n        name: \'abc2\',\n        id: 4\n    &#125;]&#125;&#125;"\n    list-text="name"\n    list-value="id"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});