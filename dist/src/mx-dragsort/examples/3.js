/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dragsort/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
    $p += '<div mxa="_zs_gallerya@:_" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-example"><div mxa="_zs_gallerya@:a" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-content"><div mxs="_zs_gallerya@:_" class="mb20"><span class="color-9">以下示例：</span>自定义拖动元素</div><div mxa="_zs_gallerya@:b" class="clearfix"><table mxa="_zs_gallerya@:c" class="table"><thead mxs="_zs_gallerya@:a"><tr><th></th><th>id</th><th>title1</th><th>title2</th></tr></thead><tbody mxa="_zs_gallerya@:d" mx-view="mx-dragsort/index?selector=span">';
    $line = 16;
    $art = 'for (let i=0;i<3;i+=1)';
    ;
    $expr = '<%for (var i = 0; i < 3; i += 1) {%>';
    for (var i = 0; i < 3; i += 1) {
        ;
        $p += '<tr><td mxs="_zs_gallerya@:b"><span class="btn btn-brand">点我拖动</span></td><td>';
        $line = 21;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</td><td>text';
        $line = 22;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '_1</td><td>text';
        $line = 23;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '_2</td></tr>';
        $line = 25;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div><div mxa="_zs_gallerya@:e" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-desc"><div mxs="_zs_gallerya@:c" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 32;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya@:f" class="_zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-tip">';
    $line = 34;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya@:d" class="mc-iconfont _zs_gallery_Users_youjiaqi_work_zs_gallery_tmpl___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="examples/hl" id="';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;table class="table"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;&lt;/th&gt;\n            &lt;th&gt;id&lt;/th&gt;\n            &lt;th&gt;title1&lt;/th&gt;\n            &lt;th&gt;title2&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody mx-view="@../../mx-dragsort/index" \n        view-selector="span"&gt;\n        &#123;&#123;for(let i=0;i&lt;3;i+=1)&#125;&#125;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;span class="btn btn-brand"&gt;点我拖动&lt;/span&gt;\n            &lt;/td&gt;\n            &lt;td&gt;&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;text&#123;&#123;=i&#125;&#125;_1&lt;/td&gt;\n            &lt;td&gt;text&#123;&#123;=i&#125;&#125;_2&lt;/td&gt;\n        &lt;/tr&gt;\n        &#123;&#123;/for&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dragsort/examples/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});