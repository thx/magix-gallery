/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/examples/9",["magix","examples/example","$","../rwd","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../rwd");
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
    $p += '<div mxa="_zs_galleryeH:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_galleryeH:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_galleryeH:_" class="mb20 clearfix lh22"><div class="color-9 fl">以下示例：</div><div class="fl"><div>默认4列一页</div><div>默认开头固定2列，结尾固定1列</div></div></div><div mxa="_zs_galleryeH:b" class="mb20"><div mxa="_zs_galleryeH:c" mx-view="mx-table/rwd"><table mxa="_zs_galleryeH:d" class="table"><thead><tr>';
    $line = 15;
    $art = 'for (let i=0;i<14;i++)';
    ;
    $expr = '<%for (var i = 0; i < 14; i++) {%>';
    for (var i = 0; i < 14; i++) {
        ;
        $p += '<th mxa="_zs_galleryeH:e" width="200">示例字段';
        $line = 16;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</th>';
        $line = 17;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 21;
    $art = 'for (let j=0;j<4;j++)';
    ;
    $expr = '<%for (var j = 0; j < 4; j++) {%>';
    for (var j = 0; j < 4; j++) {
        ;
        $p += '<tr>';
        $line = 23;
        $art = 'for (let i=0;i<14;i++)';
        ;
        $expr = '<%for (var i = 0; i < 14; i++) {%>';
        for (var i = 0; i < 14; i++) {
            ;
            $p += '<td>示例字段内容';
            $line = 24;
            $art = '=i';
            ;
            $p += ($expr = '<%=i%>', $e(i)) + '</td>';
            $line = 25;
            $art = '/for';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 27;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div></div><div mxa="_zs_galleryeH:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_galleryeH:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryeH:g" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 37;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryeH:b" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table.rwd&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;14;i++)&#125;&#125;\n                &lt;th width="200"&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;4;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;14;i++)&#125;&#125;\n                &lt;td&gt;示例字段内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.rwd&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/examples/9.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});