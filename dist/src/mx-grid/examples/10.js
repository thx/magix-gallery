/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/examples/10",["magix","examples/example","$","mx-calendar/datepicker","mx-dropdown/index","mx-copy/index","examples/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycu:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallerycu:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerycu:_" class="mb10">完整组合使用示例：</div><div mxa="_zs_gallerycu:b" class="_zs_gallery_mx-grid_examples_index_-container"><div mxa="_zs_gallerycu:c" style="display: flex;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 16px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2)"><div mxa="_zs_gallerycu:d" flex="1" class="grid" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"><div mxa="_zs_gallerycu:e" class="clearfix" style="padding: 10px 24px;;border-bottom: 1px solid #e6e6e6;"><div mxs="_zs_gallerycu:a" style="float:left; height: 32px; line-height: 32px;"><span class="grid-title" style="margin-right: 16px;">标题</span><span style="margin-right: 16px; color: #999;">提示信息</span></div><div mxa="_zs_gallerycu:f" class="fr"><div mxs="_zs_gallerycu:b" class="w200 mr10" mx-view="mx-calendar/datepicker"></div><div class="w200" mx-view="mx-dropdown/index?list=';
    $line = 12;
    $art = '@[1,2,3]';
    ;
    $p += ($expr = '<%@[1, 2, 3]%>', $i($$ref, [1, 2, 3])) + '"></div></div></div><div mxs="_zs_gallerycu:c" class="clearfix" style="padding: 16px 24px;">区块4</div></div><div mxs="_zs_gallerycu:d" style="flex: 0 0 200px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"><div style="display: flex;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 16px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2)"><div class="grid" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"><div class="clearfix" style="padding: 10px 24px;;border-bottom: 1px solid #e6e6e6;"><div style="float:left; height: 32px; line-height: 32px;"><span class="grid-title" style="margin-right: 16px;">标题1</span><span style="margin-right: 16px; color: #999;">提示信息1</span></div></div><div class="clearfix" style="padding: 16px 24px;">区块1</div></div><div class="grid" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"><div class="clearfix" style="padding: 10px 24px;;border-bottom: 1px solid #e6e6e6;"><div style="float:left; height: 32px; line-height: 32px;"><span class="grid-title" style="margin-right: 16px;">标题2</span><span style="margin-right: 16px; color: #999;">提示信息2</span></div></div><div class="clearfix" style="padding: 16px 24px;">区块2</div></div><div class="grid" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"><div class="clearfix" style="padding: 10px 24px;;border-bottom: 1px solid #e6e6e6;"><div style="float:left; height: 32px; line-height: 32px;"><span class="grid-title" style="margin-right: 16px;">标题3</span><span style="margin-right: 16px; color: #999;">提示信息3</span></div></div><div class="clearfix" style="padding: 16px 24px;">区块3</div></div></div></div></div></div></div><div mxa="_zs_gallerycu:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerycu:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 45;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycu:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 47;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycu:f" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-grid.row gutter="16px"&gt;\n    &lt;mx-grid.col flex="1" class="grid"&gt;\n        &lt;mx-grid.title content="标题" tip="提示信息" &gt;\n            &lt;div class="fr"&gt;\n                &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n                &lt;mx-dropdown class="w200" \n                    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n                &lt;/mx-dropdown&gt;\n            &lt;/div&gt;\n        &lt;/mx-grid.title&gt;\n        &lt;mx-grid.body&gt;区块4&lt;/mx-grid.body&gt;\n    &lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="200px"&gt;\n        &lt;mx-grid.row direction="col" gutter="16px"&gt;\n            &lt;mx-grid.col class="grid"&gt;\n                &lt;mx-grid.title \n                    content="标题1" \n                    tip="提示信息1"/&gt;\n                &lt;mx-grid.body&gt;区块1&lt;/mx-grid.body&gt;\n            &lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid"&gt;\n                &lt;mx-grid.title \n                    content="标题2" \n                    tip="提示信息2"/&gt;\n                &lt;mx-grid.body&gt;区块2&lt;/mx-grid.body&gt;\n            &lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid"&gt;\n                &lt;mx-grid.title \n                    content="标题3" \n                    tip="提示信息3"/&gt;\n                &lt;mx-grid.body&gt;区块3&lt;/mx-grid.body&gt;\n            &lt;/mx-grid.col&gt;\n        &lt;/mx-grid.row&gt;\n    &lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-grid/examples/10.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});