/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-chart/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', chartId = $$.chartId, chartData = $$.chartData, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryaj:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryaj:a" class="_zs_gallery___test___layout_-eg-content"><div mxv="chartId,chartData" style="height: 400px;" mx-view="mx-chart/index?chartId=';
    $line = 3;
    $art = '@chartId';
    ;
    $p += ($expr = '<%@chartId%>', $i($$ref, chartId)) + '&data=';
    $line = 3;
    $art = '@chartData';
    ;
    $p += ($expr = '<%@chartData%>', $i($$ref, chartData)) + '"></div></div><div mxa="_zs_galleryaj:b" class="clearfix"><div mxa="_zs_galleryaj:c" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third1"><div mxs="_zs_galleryaj:_" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 8;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaj:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 10;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaj:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n        &lt;mx-chart \n            chartId="&#123;&#123;@chartId&#125;&#125;" \n            data="&#123;&#123;@chartData&#125;&#125;" \n            style="height: 400px;"\n        &gt&lt;/mx-chart/&gt;\n        </pre></div><div mxa="_zs_galleryaj:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-third2 _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryaj:b" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryaj:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryaj:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Base = require(\'__test__/example\');\nlet $ = require(\'$\');\n    \nmodule.exports = Base.extend({\n    tmpl: \'@1.html\',\n    render() {\n        let chartData = [\n            {"time":"2017-03-21","pv":10,"uv":11,"click":12,"ppc":45},\n            {"time":"2017-03-22","pv":20,"uv":32,"click":14,"ppc":34},\n            {"time":"2017-03-23","pv":30,"uv":15,"click":12,"ppc":65},\n            {"time":"2017-03-24","pv":15,"uv":23,"click":21,"ppc":23},\n            {"time":"2017-03-25","pv":28,"uv":15,"click":15,"ppc":12}\n        ];\n        let chartId = 1;\n        this.updater.digest({\n            chartData,\n            chartId\n        });\n    }\n});\n                </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-chart/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        var chartData = [
            { "time": "2017-03-21", "pv": 10, "uv": 11, "click": 12, "ppc": 45 },
            { "time": "2017-03-22", "pv": 20, "uv": 32, "click": 14, "ppc": 34 },
            { "time": "2017-03-23", "pv": 30, "uv": 15, "click": 12, "ppc": 65 },
            { "time": "2017-03-24", "pv": 15, "uv": 23, "click": 21, "ppc": 23 },
            { "time": "2017-03-25", "pv": 28, "uv": 15, "click": 15, "ppc": 12 }
        ];
        var chartId = 1;
        this.updater.digest({
            chartData: chartData,
            chartId: chartId
        });
    }
});

});