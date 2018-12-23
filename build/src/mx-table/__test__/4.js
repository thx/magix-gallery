/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', width = $$.width, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydH:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerydH:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerydH:_" class="mb20 clearfix"><div class="fl color-9 lh22">该示例：</div><div class="fl lh22"><div>分栏会根据屏幕可视范围控制是否需要显示分栏，宽段配置在th上</div><div>模拟滚动条一直在可视范围内，windows下鼠标无法左右滚动，可直接操作模拟滚动条滚动</div></div></div><div mxs="_zs_gallerydH:a" class="mb20"><a href="javascript:;" mx-click="' + $viewId + 'change()" class="btn btn-brand">切换宽度</a></div><div class="mb40" style="width: ';
    $line = 13;
    $art = '=width';
    ;
    $p += ($expr = '<%=width%>', $e(width)) + '%;"><div mxa="_zs_gallerydH:b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_gallerydH:c" class="table" left="true"><thead><tr>';
    $line = 19;
    $art = 'for (let i=0;i<4;i++)';
    ;
    $expr = '<%for (var i = 0; i < 4; i++) {%>';
    for (var i = 0; i < 4; i++) {
        ;
        $p += '<th mxa="_zs_gallerydH:d" width="120">固定字段';
        $line = 20;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 21;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 25;
    $art = 'for (let j=0;j<10;j++)';
    ;
    $expr = '<%for (var j = 0; j < 10; j++) {%>';
    for (var j = 0; j < 10; j++) {
        ;
        $p += '<tr class="';
        $line = 26;
        $art = '= (j==9) ? \'last-tr\' : \'\'';
        ;
        $p += ($expr = '<%=(j == 9) ? \'last-tr\' : \'\'%>', $e((j == 9) ? 'last-tr' : '')) + '">';
        $line = 27;
        $art = 'for (let i=0;i<4;i++)';
        ;
        $expr = '<%for (var i = 0; i < 4; i++) {%>';
        for (var i = 0; i < 4; i++) {
            ;
            $p += '<td>固定内容';
            $line = 28;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 29;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr><tr mxs="_zs_gallerydH:b" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-white btn-small btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small btn-small">操作</a></td></tr>';
        $line = 37;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div><table mxa="_zs_gallerydH:e" class="table" center="true"><thead><tr>';
    $line = 44;
    $art = 'for (let i=0;i<4;i++)';
    ;
    $expr = '<%for (var i = 0; i < 4; i++) {%>';
    for (var i = 0; i < 4; i++) {
        ;
        $p += '<th mxa="_zs_gallerydH:f" width="120">滚动';
        $line = 45;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 46;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 50;
    $art = 'for (let j=0;j<10;j++)';
    ;
    $expr = '<%for (var j = 0; j < 10; j++) {%>';
    for (var j = 0; j < 10; j++) {
        ;
        $p += '<tr class="';
        $line = 51;
        $art = '= (j==9) ? \'last-tr\' : \'\'';
        ;
        $p += ($expr = '<%=(j == 9) ? \'last-tr\' : \'\'%>', $e((j == 9) ? 'last-tr' : '')) + '">';
        $line = 52;
        $art = 'for (let i=0;i<4;i++)';
        ;
        $expr = '<%for (var i = 0; i < 4; i++) {%>';
        for (var i = 0; i < 4; i++) {
            ;
            $p += '<td>滚动内容';
            $line = 53;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 54;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr><tr mxs="_zs_gallerydH:c" class="operation-tr"><td colspan="4"></td></tr>';
        $line = 60;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div></div></div><div mxa="_zs_gallerydH:g" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydH:d" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 68;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydH:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 70;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydH:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 73;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;!-- 固定列，在table上配置left="true" --&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;10;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==9) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;10;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==9) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;!-- 有操作项该行不可少 --&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/4.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            width: 100
        });
    },
    'change<click>': function (e) {
        var width = this.updater.get('width');
        if (width == 100) {
            width = 76;
        }
        else {
            width = 100;
        }
        this.updater.digest({
            width: width
        });
    }
});

});