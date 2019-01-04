/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-grid/__test__/10",["magix","__test__/example","$","mx-calendar/datepicker","mx-dropdown/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-calendar/datepicker");
require("mx-dropdown/index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryR","._zs_gallerygo{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerygp{opacity:.1}._zs_gallerygp,._zs_gallerygq{background-color:#4d7fff}._zs_gallerygq{opacity:.2}._zs_gallerygr{opacity:.3}._zs_gallerygr,._zs_gallerygs{background-color:#4d7fff}._zs_gallerygs{opacity:.4}._zs_gallerygt{opacity:.5}._zs_gallerygt,._zs_gallerygu{background-color:#4d7fff}._zs_gallerygu{opacity:.6}._zs_gallerygv{opacity:.7}._zs_gallerygv,._zs_gallerygw{background-color:#4d7fff}._zs_gallerygw{opacity:.8}._zs_gallerygx{opacity:.9}._zs_gallerygx,._zs_gallerygy{background-color:#4d7fff}._zs_gallerygy{opacity:1}._zs_gallerygz{padding:16px;background-color:#fafafa}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerybL:_" class="_zs_galleryh"><div mxa="_zs_gallerybL:a" class="_zs_galleryk"><div mxs="_zs_gallerybL:_" class="mb10">完整组合使用示例：</div><div mxa="_zs_gallerybL:b" class="_zs_gallerygz"><div mxa="_zs_gallerybL:c" style="display: flex;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 16px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div mxa="_zs_gallerybL:d" flex="1" class="grid" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"><div mxa="_zs_gallerybL:e" content="标题" class="clearfix" style="padding: 8px 24px;;border-bottom: 1px solid #e6e6e6;;"><div mxs="_zs_gallerybL:a" style="float:left; line-height: 32px;"><span style="font-size: 20px; margin-right: 16px;">标题</span><span style="margin-right: 16px; color: #999;">提示信息</span></div><div mxa="_zs_gallerybL:f" class="fr"><div mxs="_zs_gallerybL:b" class="w200 mr10" mx-view="mx-calendar/datepicker"></div><div class="w200" mx-view="mx-dropdown/index?list=' + $i($$ref, [1, 2, 3]) + '"></div></div></div><div mxs="_zs_gallerybL:c" class="clearfix" style="padding: 16px 24px;">区块4</div></div><div mxs="_zs_gallerybL:d" style="flex: 0 0 200px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"><div style="display: flex;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 16px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2);"><div class="grid" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"><div content="标题1" class="clearfix" style="padding: 8px 24px;;border-bottom: 1px solid #e6e6e6;;"><div style="float:left; line-height: 32px;"><span style="font-size: 20px; margin-right: 16px;">标题1</span><span style="margin-right: 16px; color: #999;">提示信息1</span></div></div><div class="clearfix" style="padding: 16px 24px;">区块1</div></div><div class="grid" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"><div content="标题2" class="clearfix" style="padding: 8px 24px;;border-bottom: 1px solid #e6e6e6;;"><div style="float:left; line-height: 32px;"><span style="font-size: 20px; margin-right: 16px;">标题2</span><span style="margin-right: 16px; color: #999;">提示信息2</span></div></div><div class="clearfix" style="padding: 16px 24px;">区块2</div></div><div class="grid" style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"><div content="标题3" class="clearfix" style="padding: 8px 24px;;border-bottom: 1px solid #e6e6e6;;"><div style="float:left; line-height: 32px;"><span style="font-size: 20px; margin-right: 16px;">标题3</span><span style="margin-right: 16px; color: #999;">提示信息3</span></div></div><div class="clearfix" style="padding: 16px 24px;">区块3</div></div></div></div></div></div></div><div mxa="_zs_gallerybL:g" class="_zs_galleryl"><div mxs="_zs_gallerybL:e" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerybL:h" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerybL:f" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-grid.row gutter="16px"&gt;\n    &lt;mx-grid.col flex="1" class="grid"&gt;\n        &lt;mx-grid.title content="标题" tip="提示信息" &gt;\n            &lt;div class="fr"&gt;\n                &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n                &lt;mx-dropdown class="w200" \n                    list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n                &lt;/mx-dropdown&gt;\n            &lt;/div&gt;\n        &lt;/mx-grid.title&gt;\n        &lt;mx-grid.body&gt;区块4&lt;/mx-grid.body&gt;\n    &lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="200px"&gt;\n        &lt;mx-grid.row direction="col" gutter="16px"&gt;\n            &lt;mx-grid.col class="grid"&gt;\n                &lt;mx-grid.title \n                    content="标题1" \n                    tip="提示信息1"/&gt;\n                &lt;mx-grid.body&gt;区块1&lt;/mx-grid.body&gt;\n            &lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid"&gt;\n                &lt;mx-grid.title \n                    content="标题2" \n                    tip="提示信息2"/&gt;\n                &lt;mx-grid.body&gt;区块2&lt;/mx-grid.body&gt;\n            &lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid"&gt;\n                &lt;mx-grid.title \n                    content="标题3" \n                    tip="提示信息3"/&gt;\n                &lt;mx-grid.body&gt;区块3&lt;/mx-grid.body&gt;\n            &lt;/mx-grid.col&gt;\n        &lt;/mx-grid.row&gt;\n    &lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});