/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/7",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryb):_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryb):a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryb):_" class="mb20"><span class="color-9">该示例：</span>吸顶 + 表头分组</div><div mxa="_zs_galleryb):b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryb):c" class="table"><thead mxs="_zs_galleryb):a"><tr><th rowspan="2">单个1</th><th rowspan="2">单个2</th><th class="field-group" colspan="2"><div class="group-name">组1</div></th><th class="field-group" colspan="3"><div class="group-name">组2</div></th></tr><tr><th class="field-item">组1-1</th><th class="field-item">组1-2</th><th class="field-item">组2-1</th><th class="field-item">组2-2</th><th class="field-item">组2-3</th></tr></thead><tbody>';
    $line = 30;
    $art = 'for (let j=0;j<3;j++)';
    ;
    $p += '';
    $expr = '<%for(var j=0;j<3;j++){%>';
    for (var j = 0; j < 3; j++) {
        ;
        $p += '<tr class="';
        $line = 31;
        $art = '= (j==2) ? \'last-tr\' : \'\'';
        ;
        $p += '' + ($expr = '<%=(j==2)?\'last-tr\':\'\'%>', $e((j == 2) ? 'last-tr' : '')) + '">';
        $line = 32;
        $art = 'for (let i=0;i<7;i++)';
        ;
        $p += '';
        $expr = '<%for(var i=0;i<7;i++){%>';
        for (var i = 0; i < 7; i++) {
            ;
            $p += '<td>';
            $line = 33;
            $art = '=i';
            ;
            $p += '' + ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 34;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 36;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div></div><div mxa="_zs_galleryb):d" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryb):b" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 43;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb):e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 45;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb):c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 48;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;!-- 二级结构的表头 --&gt;\n            &lt;tr&gt;\n                &lt;th rowspan="2"&gt;单个1&lt;/th&gt;\n                &lt;th rowspan="2"&gt;单个2&lt;/th&gt;\n                &lt;th class="field-group" colspan="2"&gt;\n                    &lt;div class="group-name"&gt;组1&lt;/div&gt;\n                &lt;/th&gt;\n                &lt;th class="field-group" colspan="3"&gt;\n                    &lt;div class="group-name"&gt;组2&lt;/div&gt;\n                &lt;/th&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;th class="field-item"&gt;组1-1&lt;/th&gt;\n                &lt;th class="field-item"&gt;组1-2&lt;/th&gt;\n                &lt;th class="field-item"&gt;组2-1&lt;/th&gt;\n                &lt;th class="field-item"&gt;组2-2&lt;/th&gt;\n                &lt;th class="field-item"&gt;组2-3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;7;i++)&#125;&#125;\n                &lt;td&gt;&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/7.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});