/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycQ:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerycQ:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerycQ:_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>配置自定义吸顶相对的容器 scroll-wrapper="{=id}}"</div><div>适用场景：浮层内表头固定</div><div>父容器宽高度限定</div></div></div><div id="';
    $line = 11;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"><div mx-view="mx-table/index?sticky=true&scrollWrapper=';
    $line = 12;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_wrapper"><div><table mxa="_zs_gallerycQ:b" class="table" left="true"><thead><tr>';
    $line = 16;
    $art = 'for (let i=0;i<4;i++)';
    ;
    $expr = '<%for (var i = 0; i < 4; i++) {%>';
    for (var i = 0; i < 4; i++) {
        ;
        $p += '<th mxa="_zs_gallerycQ:c" width="120">固定字段';
        $line = 17;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 18;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 22;
    $art = 'for (let j=0;j<20;j++)';
    ;
    $expr = '<%for (var j = 0; j < 20; j++) {%>';
    for (var j = 0; j < 20; j++) {
        ;
        $p += '<tr class="';
        $line = 23;
        $art = '= (j==2) ? \'last-tr\' : \'\'';
        ;
        $p += ($expr = '<%=(j == 2) ? \'last-tr\' : \'\'%>', $e((j == 2) ? 'last-tr' : '')) + '">';
        $line = 24;
        $art = 'for (let i=0;i<4;i++)';
        ;
        $expr = '<%for (var i = 0; i < 4; i++) {%>';
        for (var i = 0; i < 4; i++) {
            ;
            $p += '<td>固定内容';
            $line = 25;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 26;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 28;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div><table mxa="_zs_gallerycQ:d" class="table" center="true"><thead><tr>';
    $line = 35;
    $art = 'for (let i=0;i<10;i++)';
    ;
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<th mxa="_zs_gallerycQ:e" width="120">滚动';
        $line = 36;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 37;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 41;
    $art = 'for (let j=0;j<20;j++)';
    ;
    $expr = '<%for (var j = 0; j < 20; j++) {%>';
    for (var j = 0; j < 20; j++) {
        ;
        $p += '<tr class="';
        $line = 42;
        $art = '= (j==2) ? \'last-tr\' : \'\'';
        ;
        $p += ($expr = '<%=(j == 2) ? \'last-tr\' : \'\'%>', $e((j == 2) ? 'last-tr' : '')) + '">';
        $line = 43;
        $art = 'for (let i=0;i<10;i++)';
        ;
        $expr = '<%for (var i = 0; i < 10; i++) {%>';
        for (var i = 0; i < 10; i++) {
            ;
            $p += '<td>滚动内容';
            $line = 44;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 45;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 47;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div></div></div><div mxa="_zs_gallerycQ:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerycQ:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycQ:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 57;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycQ:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 60;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div id="&#123;&#123;=viewId&#125;&#125;_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"&gt;\n    &lt;mx-table sticky="true" scroll-wrapper="&#123;&#123;=viewId&#125;&#125;_wrapper"&gt;\n        &lt;table class="table" left="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n        &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n        &lt;table class="table" center="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/mx-table&gt;\n&lt;/div&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/13.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});