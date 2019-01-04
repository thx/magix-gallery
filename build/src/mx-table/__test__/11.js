/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/11",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerydE:_" class="_zs_galleryh"><div mxa="_zs_gallerydE:a" class="_zs_galleryk"><div mxs="_zs_gallerydE:_" class="mb20 clearfix lh22"><span class="color-9">普通表格：</span><span>加class="table"，样式与组件一致，没有默认选中逻辑</span></div><div mxa="_zs_gallerydE:b" class="mb20"><table mxa="_zs_gallerydE:c" class="table"><thead><tr>'; for (var i = 0; i < 5; i++) {
    ;
    $p += '<th>示例字段' + $e(i) + '</th>';
} ; $p += '<th mxs="_zs_gallerydE:a">操作</th></tr></thead><tbody>'; for (var j = 0; j < 3; j++) {
    ;
    $p += '<tr>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<td>示例字段' + $e(i) + '</td>';
    }
    ;
    $p += '<td mxs="_zs_gallerydE:b"><div class="operations"><a href="javascript:;" class="btn btn-white btn-small">操作</a></div></td></tr>';
} ; $p += '</tbody></table></div></div><div mxa="_zs_gallerydE:d" class="_zs_galleryl"><div mxs="_zs_gallerydE:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerydE:e" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerydE:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;table class="table"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n            &lt;th&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n            &#123;&#123;/for&#125;&#125;\n            &lt;th&gt;操作&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n        &lt;tr&gt;\n            &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n            &lt;td&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n            &#123;&#123;/for&#125;&#125;\n            &lt;td&gt;\n                &lt;div class="operations"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                &lt;/div&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n        &#123;&#123;/for&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});