/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/8",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../range");
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
} ; var $g = '', $_temp, $p = '', start = $$.start, end = $$.end, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_galleryc.:_" class="_zs_galleryh"><div mxa="_zs_galleryc.:a" class="_zs_galleryk"><div mxa="_zs_galleryc.:b" class="mb20"><span mxs="_zs_galleryc.:_" class="color-9">开始值：</span><span mxa="_zs_galleryc.:c" class="mr20">' + $e(start) + '</span><span mxs="_zs_galleryc.:a" class="color-9">结束值：</span><span>' + $e(end) + '</span></div><div mxa="_zs_galleryc.:d" class="pt20 pb20"><div mx-change="' + $viewId + 'showValue()" mx-view="mx-slider/range?max=200&min=100&value=' + $eu(start) + '%2C' + $eu(end) + '&step=0.05"></div></div></div><div mxa="_zs_galleryc.:e" class="_zs_galleryl"><div mxs="_zs_galleryc.:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryc.:f" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryc.:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="&#123;&#123;=start&#125;&#125;,&#123;&#123;=end&#125;&#125;"\n    step="0.05"\n    mx-change="showValue()"/&gt;</pre></div><div mxa="_zs_galleryc.:g" class="_zs_galleryl"><div mxs="_zs_galleryc.:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_galleryc.:h" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_galleryc.:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            start: 110,\n            end: 150\n        &#125;);\n    &#125;,\n    \'showValue&lt;change&gt;\' (e) &#123;\n        // 操作结束的时候返回\n        // e.value [array] [min, max]\n        let v = e.value;\n        this.updater.digest(&#123;\n            start: v[0],\n            end: v[1]\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            start: 110,
            end: 150
        });
    },
    'showValue<change>': function (e) {
        // 操作结束的时候返回
        // e.value [array] [min, max]
        var v = e.value;
        this.updater.digest({
            start: v[0],
            end: v[1]
        });
    }
});

});