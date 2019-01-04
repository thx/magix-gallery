/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/13",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerydG:_" class="_zs_galleryh"><div mxa="_zs_gallerydG:a" class="_zs_galleryk"><div mxs="_zs_gallerydG:_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>配置自定义吸顶相对的容器 scroll-wrapper="{=id}}"</div><div>适用场景：浮层内表头固定</div><div>父容器宽高度限定</div></div></div><div id="' + $e(viewId) + '_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"><div mx-view="mx-table/index?sticky=true&scrollWrapper=' + $eu(viewId) + '_wrapper"><div><table mxa="_zs_gallerydG:b" class="table" left="true"><thead><tr>'; for (var i = 0; i < 4; i++) {
    ;
    $p += '<th mxa="_zs_gallerydG:c" width="120">固定字段' + $e(i) + '</th>';
} ; $p += '</tr></thead><tbody>'; for (var j = 0; j < 20; j++) {
    ;
    $p += '<tr class="' + $e((j == 2) ? 'last-tr' : '') + '">';
    for (var i = 0; i < 4; i++) {
        ;
        $p += '<td>固定内容' + $e(i) + '</td>';
    }
    ;
    $p += '</tr>';
} ; $p += '</tbody></table></div><div><table mxa="_zs_gallerydG:d" class="table" center="true"><thead><tr>'; for (var i = 0; i < 10; i++) {
    ;
    $p += '<th mxa="_zs_gallerydG:e" width="120">滚动' + $e(i) + '</th>';
} ; $p += '</tr></thead><tbody>'; for (var j = 0; j < 20; j++) {
    ;
    $p += '<tr class="' + $e((j == 2) ? 'last-tr' : '') + '">';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<td>滚动内容' + $e(i) + '</td>';
    }
    ;
    $p += '</tr>';
} ; $p += '</tbody></table></div></div></div></div><div mxa="_zs_gallerydG:f" class="_zs_galleryl"><div mxs="_zs_gallerydG:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydG:g" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydG:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;div id="&#123;&#123;=viewId&#125;&#125;_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"&gt;\n    &lt;mx-table sticky="true" scroll-wrapper="&#123;&#123;=viewId&#125;&#125;_wrapper"&gt;\n        &lt;table class="table" left="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n        &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n        &lt;table class="table" center="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/mx-table&gt;\n&lt;/div&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});