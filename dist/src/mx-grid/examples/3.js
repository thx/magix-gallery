/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/examples/3",["magix","examples/example","$","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryco:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxs="_zs_galleryco:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div class="mb10">justify（主轴对齐方式）</div><div class="mb10">1. left（默认值）：左对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid_examples_index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">2. right：右对齐</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: flex-end;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid_examples_index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">3. center：居中</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: center;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid_examples_index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。</div><div class="mb40" style="display: flex;height: 60px;flex-direction: row;justify-content: space-between;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid_examples_index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div><div class="mb10">5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。</div><div style="display: flex;height: 60px;flex-direction: row;justify-content: space-around;align-items: stretch;--mx-grid-gutter: 10px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_gallery_mx-grid_examples_index_-grid1" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid2" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_gallery_mx-grid_examples_index_-grid3" style="flex: 0 0 25%;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div></div></div><div mxa="_zs_galleryco:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryco:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryco:b" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 44;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryco:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 47;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- 1. left（默认值）：左对齐 --&gt;\n&lt;mx-grid.row justify="left" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 2. right：右对齐 --&gt;\n&lt;mx-grid.row justify="right" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 3. center：居中 --&gt;\n&lt;mx-grid.row justify="center" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。 --&gt;\n&lt;mx-grid.row justify="space-between" height="60px" gutter="10px" class="mb40"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。 --&gt;\n&lt;mx-grid.row justify="space-around" height="60px" gutter="10px"&gt;\n    &lt;mx-grid.col width="25%" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="25%" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-grid/examples/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});