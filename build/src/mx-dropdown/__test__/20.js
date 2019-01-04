/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_galleryaK:_" class="_zs_galleryh"><div mxa="_zs_galleryaK:a" class="_zs_galleryk"><div mxs="_zs_galleryaK:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>简单分组</div><div>选中上限max=5，此时全选为选择top max</div></div></div><div mxa="_zs_galleryaK:b" class="w200" mx-view="mx-dropdown/multiple?max=5&searchbox=true&height=250"><i mxs="_zs_galleryaK:a" group="true" class="none">第一组</i>'; for (var i = 0; i < 4; i += 1) {
    ;
    $p += '<i value="' + $e(i) + '" class="none">' + $e(i) + '</i>';
} ; $p += '<i mxs="_zs_galleryaK:b" group="true" class="none">第二组</i>'; for (var i = 10; i < 20; i += 1) {
    ;
    $p += '<i value="' + $e(i) + '" class="none">' + $e(i) + '</i>';
} ; $p += '</div></div><div mxa="_zs_galleryaK:c" class="_zs_galleryl"><div mxs="_zs_galleryaK:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryaK:d" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryaK:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    max="5"\n    searchbox="true"\n    height="250"&gt;\n    &lt;mx-dropdown.item group="true"&gt;第一组&lt;/mx-dropdown.item&gt;\n    &#123;&#123;for(let i=0;i&lt;4;i+=1)&#125;&#125;\n    &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n    &#123;&#123;/for&#125;&#125;\n    &lt;mx-dropdown.item group="true"&gt;第二组&lt;/mx-dropdown.item&gt;\n    &#123;&#123;for(let i=10;i&lt;20;i+=1)&#125;&#125;\n    &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n    &#123;&#123;/for&#125;&#125;\n&lt;/mx-dropdown.multiple&gt;\n        </pre></div></div>'; return $p; },
    render: function () {
        var that = this;
        that.updater.digest();
    }
});

});