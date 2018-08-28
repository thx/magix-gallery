/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_galleryb;:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryb;:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryb;:_" class="mb20"><span class="color-9">该示例：</span>默认选中第一行 + 选中行展示操作项</div><div mxa="_zs_galleryb;:b" mx-view="mx-table/index"><div><table mxa="_zs_galleryb;:c" class="table"><thead><tr>';
    $line = 11;
    $art = 'for (let i=0;i<5;i++)';
    ;
    $p += '';
    $expr = '<%for (var i = 0; i < 5; i++) {%>';
    for (var i = 0; i < 5; i++) {
        ;
        $p += '<th>示例字段';
        $line = 12;
        $art = '=i';
        ;
        $p += '' + ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 13;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '<th mxs="_zs_galleryb;:a">操作</th></tr></thead><tbody>';
    $line = 18;
    $art = 'for (let j=0;j<3;j++)';
    ;
    $p += '';
    $expr = '<%for (var j = 0; j < 3; j++) {%>';
    for (var j = 0; j < 3; j++) {
        ;
        $p += '<tr>';
        $line = 20;
        $art = 'for (let i=0;i<5;i++)';
        ;
        $p += '';
        $expr = '<%for (var i = 0; i < 5; i++) {%>';
        for (var i = 0; i < 5; i++) {
            ;
            $p += '<td>示例字段';
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
        $p += '<td mxs="_zs_galleryb;:b"><div class="operations"><a href="javascript:;" class="btn btn-small">操作</a></div></td></tr>';
        $line = 29;
        $art = '/for';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div></div><div mxa="_zs_galleryb;:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb;:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 36;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb;:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 38;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb;:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 41;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n                &lt;th&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n                &lt;th&gt;操作&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n                &lt;td&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n                &lt;td&gt;\n                    &lt;div class="operations"&gt;\n                        &lt;a href="javascript:;" class="btn btn-small"&gt;操作&lt;/a&gt;\n                    &lt;/div&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});