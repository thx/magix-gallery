/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dropdown/__test__/20",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../multiple");
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
    $p += '<div mxa="_zs_gallerya4:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerya4:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerya4:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>简单分组</div><div>选中上限max=5，此时全选为选择top max</div></div></div><div mxa="_zs_gallerya4:b" class="w200" mx-view="mx-dropdown/multiple?max=5&searchbox=true&height=250"><i mxs="_zs_gallerya4:a" group="true" class="none">第一组</i>';
    $line = 15;
    $art = 'for (let i=0;i<4;i+=1)';
    ;
    $expr = '<%for (var i = 0; i < 4; i += 1) {%>';
    for (var i = 0; i < 4; i += 1) {
        ;
        $p += '<i value="';
        $line = 16;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '" class="none">';
        $line = 16;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</i>';
        $line = 17;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<i mxs="_zs_gallerya4:b" group="true" class="none">第二组</i>';
    $line = 19;
    $art = 'for (let i=10;i<20;i+=1)';
    ;
    $expr = '<%for (var i = 10; i < 20; i += 1) {%>';
    for (var i = 10; i < 20; i += 1) {
        ;
        $p += '<i value="';
        $line = 20;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '" class="none">';
        $line = 20;
        $art = '=i';
        ;
        $p += ($expr = '<%=i%>', $e(i)) + '</i>';
        $line = 21;
        $art = '/for';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_gallerya4:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya4:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 26;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya4:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 28;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya4:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    max="5"\n    searchbox="true"\n    height="250"&gt;\n    &lt;mx-dropdown.item group="true"&gt;第一组&lt;/mx-dropdown.item&gt;\n    &#123;&#123;for(let i=0;i&lt;4;i+=1)&#125;&#125;\n    &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n    &#123;&#123;/for&#125;&#125;\n    &lt;mx-dropdown.item group="true"&gt;第二组&lt;/mx-dropdown.item&gt;\n    &#123;&#123;for(let i=10;i&lt;20;i+=1)&#125;&#125;\n    &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n    &#123;&#123;/for&#125;&#125;\n&lt;/mx-dropdown.multiple&gt;\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dropdown/__test__/20.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        that.updater.digest();
    }
});

});