/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/examples/7",["magix","examples/example","$","mx-calendar/datepicker","mx-dropdown/index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-calendar/datepicker");
require("mx-dropdown/index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-grid_examples_index_","._zs_gallery_mx-grid_examples_index_-grid1 {\n  background-color: var(--color-brand);\n  opacity: 0.1;\n}\n._zs_gallery_mx-grid_examples_index_-grid2 {\n  background-color: var(--color-brand);\n  opacity: 0.2;\n}\n._zs_gallery_mx-grid_examples_index_-grid3 {\n  background-color: var(--color-brand);\n  opacity: 0.3;\n}\n._zs_gallery_mx-grid_examples_index_-grid4 {\n  background-color: var(--color-brand);\n  opacity: 0.4;\n}\n._zs_gallery_mx-grid_examples_index_-container {\n  padding: 16px;\n  background-color: var(--app-bg);\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text3 = $$.text3; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycS:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallerycS:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerycS:_" class="mb10">使用 &lt;mx-grid&gt; 标签；也可直接用 class grid 样式</div><div mxs="_zs_gallerycS:a" class="mb10">其中标题部分，<span class="color-brand">标题+提示信息固定向左浮动</span>，标题上其他内容请自行控制左右浮动</div><div mxa="_zs_gallerycS:b" class="_zs_gallery_mx-grid_examples_index_-container"><div mxa="_zs_gallerycS:c" class="grid"><div mxa="_zs_gallerycS:d" class="clearfix" style="padding: 10px 24px;border-bottom: 1px solid var(--color-border)"><div mxs="_zs_gallerycS:b" style="float:left; height: 32px; line-height: 32px;"><span class="grid-title" style="margin-right: 16px;">标题</span><span style="margin-right: 16px; color: #999;">提示信息</span></div><div mxs="_zs_gallerycS:c" class="fl"><div class="w200 mr10" mx-view="mx-calendar/datepicker"></div></div><div mxa="_zs_gallerycS:e" class="fr"><div mxs="_zs_gallerycS:d" class="w200 mr10" mx-view="mx-calendar/datepicker"></div><div class="w200" mx-view="mx-dropdown/index?list=';
    $line = 16;
    $art = '@[1,2,3]';
    ;
    $p += ($expr = '<%@[1, 2, 3]%>', $i($$ref, [1, 2, 3])) + '"></div></div></div><div mxs="_zs_gallerycS:e" class="clearfix" style="padding: 16px 24px;">test</div></div></div></div><div mxa="_zs_gallerycS:f" class="clearfix"><div mxa="_zs_gallerycS:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half-left"><div mxa="_zs_gallerycS:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerycS:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycS:i" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 30;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycS:g" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title content="标题" tip="提示信息"&gt;\n        &lt;div class="fl"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n        &lt;/div&gt;\n\n        &lt;div class="fr"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n            &lt;mx-dropdown class="w200" \n                list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n            &lt;/mx-dropdown&gt;\n        &lt;/div&gt;\n    &lt;/mx-grid.title&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n                </pre></div></div><div mxa="_zs_gallerycS:j" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-half"><div mxa="_zs_gallerycS:k" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerycS:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">等同于使用class grid</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 56;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallerycS:l" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 58;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallerycS:g" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 61;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\n&lt;div class="grid"&gt;\n    &lt;mx-grid.title content="标题" tip="提示信息"&gt;\n        &lt;div class="fl"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n        &lt;/div&gt;\n\n        &lt;div class="fr"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n            &lt;mx-dropdown class="w200" \n                list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n            &lt;/mx-dropdown&gt;\n        &lt;/div&gt;\n    &lt;/mx-grid.title&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/div&gt;\n                </pre></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-grid/examples/7.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});