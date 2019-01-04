/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-secradio/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', list = $$.list, viewId = $$.viewId, text1 = $$.text1; $p += '<div mxv mxa="_zs_galleryc*:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryc*:a" class="_zs_galleryk"><div mxs="_zs_galleryc*:_" class="mb10"><span class="color-9">以下示例：</span>可选范围限制最大高度200，一键收起功能吸顶</div><div mxv="list" mx-view="mx-secradio/index?maxHeight=200&list=' + $i($$ref, list) + '"></div></div><div mxa="_zs_galleryc*:b" class="_zs_galleryl"><div mxs="_zs_galleryc*:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryc*:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryc*:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-secradio \n    max-height="200"    \n    list="&#123;&#123;@list&#125;&#125;"/&gt;</pre></div></div>'; return $p; },
    render: function () {
        var list = [1, 2, 3, 4, 5].map(function (i) {
            return {
                text: '计划' + i,
                subs: [1, 2, 3, 4].map(function (j) {
                    return {
                        value: i + '' + j,
                        text: '单元' + i + '_' + j
                    };
                })
            };
        });
        this.updater.digest({
            list: list
        });
    }
});

});