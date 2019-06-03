/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/chartpark-custom",["magix","$","./chartpark/index","../example","./chartpark/demo","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,$,Chartx,Base*/
require("./chartpark/demo");
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var $ = require("$");
var Chartx = require("./chartpark/index");
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
} ; var $g = '', $_temp, $p = '', chartOptions = $$.chartOptions, chartData = $$.chartData, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerym:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerym:a" class="_zs_gallery___test___layout_-eg-content"><div mxv="chartOptions,chartData" mx-view="__test__/pro/chartpark/demo?options=';
    $line = 3;
    $art = '@chartOptions';
    ;
    $p += ($expr = '<%@chartOptions%>', $i($$ref, chartOptions)) + '&data=';
    $line = 3;
    $art = '@chartData';
    ;
    $p += ($expr = '<%@chartData%>', $i($$ref, chartData)) + '" style="height: 250px;"></div></div><div mxa="_zs_gallerym:b" class="clearfix"><div mxa="_zs_gallerym:c" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_gallerym:_" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 8;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerym:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 10;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerym:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;lg-chart style="height: 250px;" \n    options="&#123;&#123;@chartOptions&#125;&#125;" \n    data="&#123;&#123;@chartData&#125;&#125;"&gt;&lt;/lg-chart&gt;\n</pre></div><div mxa="_zs_gallerym:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerym:b" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerym:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 23;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerym:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let chartData = [\n            [\'time\', \'click\', \'uv\'],\n            [\'2017-03-21\', 10, 23],\n            [\'2017-03-22\', 20, 65],\n            [\'2017-03-23\', 40, 45],\n            [\'2017-03-24\', 18, 123],\n            [\'2017-03-25\', 32, 32]\n        ];\n\n        let chartOptions = this.getChartOptions(4);\n        chartOptions.graphs[0].field = [\'click\', \'uv\'];\n\n        this.updater.digest(&#123;\n            chartData,\n            chartOptions\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/chartpark-custom.html';
    throw msg;
} return $p; },
    render: function () {
        var chartData = [
            ['time', 'click', 'uv'],
            ['2017-03-21', 10, 23],
            ['2017-03-22', 20, 65],
            ['2017-03-23', 40, 45],
            ['2017-03-24', 18, 123],
            ['2017-03-25', 32, 32]
        ];
        var chartOptions = this.getChartOptions(4);
        chartOptions.graphs[0].field = ['click', 'uv'];
        this.updater.digest({
            chartData: chartData,
            chartOptions: chartOptions
        });
    },
    getChartOptions: function (id) {
        return $.extend(true, {}, Chartx["default"].getOptions(id));
    }
});

});