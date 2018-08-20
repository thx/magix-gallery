/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/5",["magix","__test__/example","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-pagination/index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryb?:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryb?:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_galleryb?:_" class="mb20"><span class="color-9">该示例：</span>分栏 + 吸顶 + 宽度配置在th上 + 分页（单独写，不需要关心colspan）</div><div mxa="_zs_galleryb?:b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryb?:c" class="table" left="true"><thead><tr>';
    $line = 12;
    $art = 'for (let i=0;i<4;i++)';
    ;
    $p += '';
    $expr = '<%for(var i=0;i<4;i++){%>';
    for (var i = 0; i < 4; i++) {
        ;
        $p += '<th mxa="_zs_galleryb?:d" width="120">固定字段';
        $line = 13;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 14;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 18;
    $art = 'for (let j=0;j<3;j++)';
    ;
    $p += '';
    $expr = '<%for(var j=0;j<3;j++){%>';
    for (var j = 0; j < 3; j++) {
        ;
        $p += '<tr class="';
        $line = 19;
        $art = '= (j==2) ? \'last-tr\' : \'\'';
        ;
        $p += '' + ($expr = '<%=(j==2)?\'last-tr\':\'\'%>', $e((j == 2) ? 'last-tr' : '')) + '">';
        $line = 20;
        $art = 'for (let i=0;i<4;i++)';
        ;
        $p += '';
        $expr = '<%for(var i=0;i<4;i++){%>';
        for (var i = 0; i < 4; i++) {
            ;
            $p += '<td>固定内容';
            $line = 21;
            $art = '=i';
            ;
            $p += '' + ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 22;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr><tr mxs="_zs_galleryb?:a" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-small mr10">操作</a><a href="javascript:;" class="btn btn-small">操作</a></td></tr>';
        $line = 30;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div><table mxa="_zs_galleryb?:e" class="table" center="true"><thead><tr>';
    $line = 37;
    $art = 'for (let i=0;i<10;i++)';
    ;
    $p += '';
    $expr = '<%for(var i=0;i<10;i++){%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<th mxa="_zs_galleryb?:f" width="120">滚动';
        $line = 38;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 39;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 43;
    $art = 'for (let j=0;j<3;j++)';
    ;
    $p += '';
    $expr = '<%for(var j=0;j<3;j++){%>';
    for (var j = 0; j < 3; j++) {
        ;
        $p += '<tr class="';
        $line = 44;
        $art = '= (j==2) ? \'last-tr\' : \'\'';
        ;
        $p += '' + ($expr = '<%=(j==2)?\'last-tr\':\'\'%>', $e((j == 2) ? 'last-tr' : '')) + '">';
        $line = 45;
        $art = 'for (let i=0;i<10;i++)';
        ;
        $p += '';
        $expr = '<%for(var i=0;i<10;i++){%>';
        for (var i = 0; i < 10; i++) {
            ;
            $p += '<td>滚动内容';
            $line = 46;
            $art = '=i';
            ;
            $p += '' + ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 47;
            $art = '/for';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '</tr><tr mxs="_zs_galleryb?:b" class="operation-tr"><td colspan="10"></td></tr>';
        $line = 53;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_zs_galleryb?:c" class="table-pager-wrapper mb40"><div mx-view="mx-pagination/index?total=100&size=40&page=1"></div></div></div><div mxa="_zs_galleryb?:g" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryb?:d" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 66;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb?:h" class="_zs_gallery___test___base_-desc-tip">';
    $line = 68;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb?:e" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 71;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;!-- 固定列，在table上配置left="true" --&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;!-- 有操作项该行不可少 --&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="10"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="100" \n        size="40" \n        page="1"/&gt;\n&lt;/div&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/5.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});