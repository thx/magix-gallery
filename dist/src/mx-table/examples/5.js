/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/5",["magix","examples/example","$","../index","mx-pagination/index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-pagination/index");
require("mx-copy/index");
require("examples/hl");
var Magix = require("magix");
var Base = require("examples/example");
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
    $p += '<div mxa="_zs_galleryeD:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryeD:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryeD:_" class="mb20"><span class="color-9">该示例：</span>分栏 + 吸顶 + 宽度配置在th上 + 分页（单独写，不需要关心colspan）</div><div mxa="_zs_galleryeD:b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryeD:c" class="table" left="true"><thead><tr>';
    $line = 12;
    $art = 'for (let i=0;i<4;i++)';
    ;
    $expr = '<%for (var i = 0; i < 4; i++) {%>';
    for (var i = 0; i < 4; i++) {
        ;
        $p += '<th mxa="_zs_galleryeD:d" width="120">固定字段';
        $line = 13;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 14;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 18;
    $art = 'for (let j=0;j<3;j++)';
    ;
    $expr = '<%for (var j = 0; j < 3; j++) {%>';
    for (var j = 0; j < 3; j++) {
        ;
        $p += '<tr>';
        $line = 20;
        $art = 'for (let i=0;i<4;i++)';
        ;
        $expr = '<%for (var i = 0; i < 4; i++) {%>';
        for (var i = 0; i < 4; i++) {
            ;
            $p += '<td>固定内容';
            $line = 21;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 22;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr><tr mxs="_zs_galleryeD:a" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small">操作</a></td></tr>';
        $line = 30;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div><table mxa="_zs_galleryeD:e" class="table" center="true"><thead><tr>';
    $line = 37;
    $art = 'for (let i=0;i<10;i++)';
    ;
    $expr = '<%for (var i = 0; i < 10; i++) {%>';
    for (var i = 0; i < 10; i++) {
        ;
        $p += '<th mxa="_zs_galleryeD:f" width="120">滚动';
        $line = 38;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 39;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 43;
    $art = 'for (let j=0;j<3;j++)';
    ;
    $expr = '<%for (var j = 0; j < 3; j++) {%>';
    for (var j = 0; j < 3; j++) {
        ;
        $p += '<tr>';
        $line = 45;
        $art = 'for (let i=0;i<10;i++)';
        ;
        $expr = '<%for (var i = 0; i < 10; i++) {%>';
        for (var i = 0; i < 10; i++) {
            ;
            $p += '<td>滚动内容';
            $line = 46;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 47;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr><tr mxs="_zs_galleryeD:b" class="operation-tr"><td colspan="10"></td></tr>';
        $line = 53;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxs="_zs_galleryeD:c" class="table-pager-wrapper mb40" mx-view="mx-pagination/index?total=100&size=40&page=1"></div></div><div mxa="_zs_galleryeD:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryeD:d" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 64;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryeD:h" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 66;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryeD:e" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 69;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;!-- 固定列，在table上配置left="true" --&gt;\n    &lt;table class="table" left="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n    &lt;table class="table" center="true"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;!-- 有操作项该行不可少 --&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="10"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;mx-pagination class="table-pager-wrapper"\n    total="100" \n    size="40" \n    page="1"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/5.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});