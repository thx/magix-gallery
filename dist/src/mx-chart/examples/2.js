/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-chart/examples/2",["magix","examples/example","$","mx-dropdown/index","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-dropdown/index");
require("../index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
} ; var $g = '', $_temp, $p = '', variables = $$.variables, fieldsList = $$.fieldsList, chartId = $$.chartId, chartData = $$.chartData, viewId = $$.viewId, text1 = $$.text1, text3 = $$.text3; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryap:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxv mxa="_zs_galleryap:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryap:_" class="mb15">图表变量的定义，<a href="https://yuque.antfin-inc.com/docs/share/5c7a5600-6989-48a6-8db4-424b3d5d6fcf" rel="noopener noreferrer" class="color-brand" target="_blank">流程可参考</a></div><div mxv mxa="_zs_galleryap:b" class="mb10"><span mxs="_zs_galleryap:a" class="mr10">选择y轴对应的数据维度</span><div mxv="fieldsList" class="w200" mx-change="' + $viewId + 'select()" mx-view="mx-dropdown/index?selected=';
    $line = 7;
    $art = '=variables.yField';
    ;
    $p += ($expr = '<%!$eu(variables.yField)%>', $eu(variables.yField)) + '&list=';
    $line = 8;
    $art = '@fieldsList';
    ;
    $p += ($expr = '<%@fieldsList%>', $i($$ref, fieldsList)) + '"></div></div><div mxv="chartId,chartData,variables" style="height: 400px;" mx-view="mx-chart/index?chartId=';
    $line = 12;
    $art = '@chartId';
    ;
    $p += ($expr = '<%@chartId%>', $i($$ref, chartId)) + '&data=';
    $line = 12;
    $art = '@chartData';
    ;
    $p += ($expr = '<%@chartData%>', $i($$ref, chartData)) + '&variables=';
    $line = 12;
    $art = '@variables';
    ;
    $p += ($expr = '<%@variables%>', $i($$ref, variables)) + '"></div></div><div mxa="_zs_galleryap:c" class="clearfix"><div mxa="_zs_galleryap:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third1"><div mxa="_zs_galleryap:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryap:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryap:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryap:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-chart \n    chart-id="&#123;&#123;@chartId&#125;&#125;" \n    data="&#123;&#123;@chartData&#125;&#125;" \n    variables="&#123;&#123;@variables&#125;&#125;"\n    style="height: 400px;"\n&gt&lt;/mx-chart/&gt;\n        </pre></div><div mxa="_zs_galleryap:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryap:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">chartpark 图表配置</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryap:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 36;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryap:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n// 定义变量默认值, 名称一定为 variables\nvar variables = {\n    xField:\'time\',\n    yField: "uv"\n};\n\nvar options = {\n    coord: {\n        type: "rect",\n        xAxis: {\n            field: variables.xField // 引用变量\n        }\n    },\n    graphs: [\n        {\n            type: "line",\n            field: variables.yField // 引用变量\n        }\n    ],\n    legend:{}\n};\n            </pre></div></div><div mxa="_zs_galleryap:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-third2 _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-right"><div mxs="_zs_galleryap:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">JS Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 66;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_galleryap:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 67;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_galleryap:c" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 70;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    render() {\n        let chartData = [\n            {"time":"2017-03-21","pv":10,"uv":11,"click":12,"ppc":45},\n            {"time":"2017-03-22","pv":20,"uv":32,"click":14,"ppc":34},\n            {"time":"2017-03-23","pv":30,"uv":15,"click":12,"ppc":65},\n            {"time":"2017-03-24","pv":15,"uv":23,"click":21,"ppc":23},\n            {"time":"2017-03-25","pv":28,"uv":15,"click":15,"ppc":12}\n        ];\n        var fieldsList = [\n            {text: \'pv\', value: \'pv\'},\n            {text: \'uv\', value: \'uv\'},\n        ]\n        let chartId = 1;\n        this.updater.digest({\n            fieldsList,\n            variables: {\n                yField: \'pv\'\n            },\n            chartData,\n            chartId\n        });\n    },\n    \'select&lt;change&gt;\'(e) {\n        // 触发\n        this.updater.digest({\n            variables: {\n                yField: e.value // 保持变量名称一致\n            }\n        });\n    }\n});\n                </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-chart/examples/2.html';
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
        var fieldsList = [
            { text: 'pv', value: 'pv' },
            { text: 'uv', value: 'uv' },
        ];
        var chartId = 1;
        this.updater.digest({
            fieldsList: fieldsList,
            variables: {
                yField: 'pv'
            },
            chartData: chartData,
            chartId: chartId
        });
    },
    'select<change>': function (e) {
        // 触发
        this.updater.digest({
            variables: {
                yField: e.value
            }
        });
    }
});

});