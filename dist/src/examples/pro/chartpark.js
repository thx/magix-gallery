/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/pro/chartpark",["magix","$","mx-effects/notice","../subs","mx-title/second","../api","./chartpark-id","./chartpark-custom"],(require,exports,module)=>{
/*Magix,$*/
require("mx-effects/notice");
require("../subs");
require("mx-title/second");
require("../api");
require("./chartpark-id");
require("./chartpark-custom");
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_examples_pro_chartpark_","._zs_gallery_examples_pro_chartpark_-chart-img {\n  width: 100%;\n  margin-bottom: 20px;\n}\n._zs_gallery_examples_pro_chartpark_-chart-img:last-child {\n  margin-bottom: 0;\n}\n");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryp:_" class="mb20 mr20" mx-view="mx-effects/notice?type=highlight&content=%E5%80%9F%E5%8A%A9chartpark%E5%B9%B3%E5%8F%B0%E6%9D%A5%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%89%80%E9%9C%80%E5%9B%BE%E8%A1%A8%EF%BC%8C%E5%AE%9E%E7%8E%B0%E5%89%8D%E7%AB%AF%E4%B8%8E%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%9A%84%E5%AE%8C%E7%BE%8E%E5%8D%8F%E4%BD%9C%EF%BC%9B%E8%AE%BE%E8%AE%A1%E5%B8%88%E6%9D%A5%E6%8A%8A%E6%8E%A7%E5%9B%BE%E8%A1%A8%E6%A0%B7%E5%BC%8F%EF%BC%8C%E8%80%8C%E5%89%8D%E7%AB%AF%E5%8F%AA%E9%9C%80%E8%A6%81%E5%85%B3%E5%BF%83%E6%95%B0%E6%8D%AE%E6%B8%B2%E6%9F%93%E3%80%82%3Ca%20class%3D%27link-brand%27%20href%3D%27https%3A%2F%2Fchartpark.alibaba-inc.com%2F%23%21%2Fhelp%2Findex%3Fpn%3Dstart%27%20target%3D%27_blank%27%3E%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A%E5%85%B3%E4%BA%8Echartpark%3C%2Fa%3E&border=true"></div><div mxv mxa="_zs_galleryp:_" class="pr pr120"><div mx-view="examples/subs?list=';
    $line = 7;
    $art = '@[{\n        name: \'接入流程\',\n        key: viewId + \'_access\'\n    }, {\n        name: \'本地组件lg-chart\',\n        key: viewId + \'_lg\'\n    }, {\n        name: \'直接chart-id\',\n        key: viewId + \'_demo_id\'\n    }, {\n        name: \'自定义chart-option\',\n        key: viewId + \'_demo_custom\'\n    }]';
    ;
    $p += ($expr = '<%@[{            name: \'接入流程\',            key: viewId + \'_access\'        }, {            name: \'本地组件lg-chart\',            key: viewId + \'_lg\'        }, {            name: \'直接chart-id\',            key: viewId + \'_demo_id\'        }, {            name: \'自定义chart-option\',            key: viewId + \'_demo_custom\'        }]%>', $i($$ref, [{ name: '接入流程', key: viewId + '_access' }, { name: '本地组件lg-chart', key: viewId + '_lg' }, { name: '直接chart-id', key: viewId + '_demo_id' }, { name: '自定义chart-option', key: viewId + '_demo_custom' }])) + '"></div><div id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_access" mx-view="mx-title/second?content=%E6%8E%A5%E5%85%A5%E6%B5%81%E7%A8%8B"></div><div mxs="_zs_galleryp:a" class="mb40"><div class="mb20">1. 新建项目</div><div class="pr20 pl15"><img class="_zs_gallery_examples_pro_chartpark_-chart-img" src="https://img.alicdn.com/tfs/TB18x7gunCWBKNjSZFtXXaC3FXa-2080-1006.jpg"/> <img class="_zs_gallery_examples_pro_chartpark_-chart-img" src="https://img.alicdn.com/tfs/TB1hT3btZIrBKNjSZK9XXagoVXa-2208-1006.jpg"/></div></div><div mxs="_zs_galleryp:b" class="mb40"><div class="mb20">2. 从官方demo选取需要的图表加入我的项目</div><div class="pr20 pl15"><img class="_zs_gallery_examples_pro_chartpark_-chart-img" src="https://img.alicdn.com/tfs/TB155spkhtnkeRjSZSgXXXAuXXa-2042-1480.jpg"/> <img class="_zs_gallery_examples_pro_chartpark_-chart-img" src="https://img.alicdn.com/tfs/TB1uiosumcqBKNjSZFgXXX_kXXa-2868-1290.jpg"/></div></div><div mxs="_zs_galleryp:c" class="mb40"><div class="mb20">3. chartpark平台增加或修改过图表，选择cdn，es，打包推送至cdn</div><div class="pr20 pl15"><img class="_zs_gallery_examples_pro_chartpark_-chart-img" src="https://img.alicdn.com/tfs/TB1kOEItWQoBKNjSZJnXXaw9VXa-2322-1554.jpg"/></div></div><div mxs="_zs_galleryp:d" class="mb40"><div class="mb20">4. 项目 package.json 配置 chartParkId，目前只能从地址栏看到ID</div><div class="pr20 pl15"><img class="_zs_gallery_examples_pro_chartpark_-chart-img" src="https://img.alicdn.com/tfs/TB1CrjTuiAnBKNjSZFvXXaTKXXa-2438-1144.jpg"/> <img class="_zs_gallery_examples_pro_chartpark_-chart-img" src="https://img.alicdn.com/tfs/TB18HUXt7ZmBKNjSZPiXXXFNVXa-2514-1660.jpg"/></div></div><div mxs="_zs_galleryp:e" class="mb40"><div class="mb20">5. 执行 mx chartpark 同步图表文件到本地（内容包含图表配置）</div></div><div id="';
    $line = 54;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_lg" mx-view="mx-title/second?content=%E6%9C%AC%E5%9C%B0%E7%BB%84%E4%BB%B6lg-chart&tip=%E8%84%9A%E6%89%8B%E6%9E%B6%E4%B8%AD%E5%9B%BE%E8%A1%A8%E4%BD%9C%E4%B8%BA%E6%9C%AC%E5%9C%B0%E7%BB%84%E4%BB%B6%EF%BC%8C%E8%AF%B7%E4%BD%BF%E7%94%A8%E6%A0%87%E7%AD%BE%20lg-chart%20%E5%88%9B%E5%BB%BA%E5%9B%BE%E8%A1%A8"></div><div mxv="options" class="mb40" mx-view="examples/api?options=';
    $line = 57;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div><div id="';
    $line = 59;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo_id" mx-view="mx-title/second?content=%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8chart-id&tip=%E5%BD%93chartpark%E7%9A%84%E9%85%8D%E7%BD%AE%E5%B7%B2%E7%BB%8F%E6%BB%A1%E8%B6%B3%E9%9C%80%E6%B1%82%E7%9A%84%E6%97%B6%E5%80%99%EF%BC%8C%E5%8F%AF%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%20chart-id%20%E6%B8%B2%E6%9F%93%E5%9B%BE%E8%A1%A8"></div><div mxs="_zs_galleryp:f" class="mb40"><div class="mb20">1. 获取chart-id</div><div class="pr20 pl15"><img class="_zs_gallery_examples_pro_chartpark_-chart-img" src="https://img.alicdn.com/tfs/TB13ZEFuiAnBKNjSZFvXXaTKXXa-2878-1552.jpg"/></div></div><div mxs="_zs_galleryp:g" class="clearfix mb40"><div class="mb20">2. 使用</div><div class="pl15" mx-view="examples/pro/chartpark-id"></div></div><div id="';
    $line = 73;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_demo_custom" mx-view="mx-title/second?content=%E8%87%AA%E5%AE%9A%E4%B9%89chart-option&tip=%E9%80%9A%E8%BF%87%20chart-id%20%E8%8E%B7%E5%8F%96%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE%EF%BC%8C%E5%86%8D%E8%BF%9B%E8%A1%8C%E6%89%A9%E5%B1%95%E5%AE%9A%E5%88%B6"></div><div mxs="_zs_galleryp:f" class="mb40"><div class="mb20">1. 获取chart-id</div><div class="pr20 pl15"><img class="_zs_gallery_examples_pro_chartpark_-chart-img" src="https://img.alicdn.com/tfs/TB13ZEFuiAnBKNjSZFvXXaTKXXa-2878-1552.jpg"/></div></div><div mxs="_zs_galleryp:h" class="clearfix mb40"><div class="mb20">2. 使用</div><div class="pl15" mx-view="examples/pro/chartpark-custom"></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/pro/chartpark.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            options: [{
                    key: 'chart-id',
                    desc: '项目图表id，可选',
                    type: 'number',
                    def: ''
                }, {
                    key: 'options',
                    desc: '自定义图表选项，可选；chart-id 与 chart-option 二选一，同时配置的时候以chart-id为准',
                    type: 'object',
                    def: ''
                }, {
                    key: 'data',
                    desc: '渲染图表的数据，必填',
                    type: 'array',
                    def: ''
                }]
        });
    }
});

});