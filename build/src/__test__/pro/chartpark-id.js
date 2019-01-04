/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/chartpark-id",["magix","$","../example","./chartpark/demo","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,$,Base*/
require("./chartpark/demo");
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var $ = require("$");
var Base = require("../example");
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
} ; var $g = '', $_temp, $p = '', chartData = $$.chartData, viewId = $$.viewId, text1 = $$.text1; $p += '<div mxv mxa="_zs_galleryi:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryi:a" class="_zs_galleryk"><div mxv="chartData" mx-view="__test__/pro/chartpark/demo?chartId=4&data=' + $i($$ref, chartData) + '" style="height: 250px;"></div></div><div mxa="_zs_galleryi:b" class="_zs_galleryl"><div mxs="_zs_galleryi:_" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryi:c" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryi:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;lg-chart style="height: 250px;" chart-id="1" data="&#123;&#123;@chartData&#125;&#125;"&gt;&lt;/lg-chart&gt;\n</pre></div></div>'; return $p; },
    render: function () {
        var chartData = [
            ['time', 'click', 'ppc'],
            ['2017-03-21', 10, 23],
            ['2017-03-22', 20, 65],
            ['2017-03-23', 40, 45],
            ['2017-03-24', 18, 123],
            ['2017-03-25', 32, 32]
        ];
        this.updater.digest({
            chartData: chartData
        });
    }
});

});