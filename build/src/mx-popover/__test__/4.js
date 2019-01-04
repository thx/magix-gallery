/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_gallerycO:_" class="_zs_galleryh"><div mxs="_zs_gallerycO:_" class="_zs_galleryk"><i class="mc-iconfont color-9" mx-view="mx-popover/index?content=%E7%94%A8%C2%A0i%C2%A0%E6%A0%87%E7%AD%BE%E7%94%9F%E6%88%90%EF%BC%8C%E5%AE%BD%E5%BA%A6400%EF%BC%8C%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90&width=400&alignText=center&placement=bottom">&#xe629;</i></div><div mxa="_zs_gallerycO:a" class="_zs_galleryl"><div mxs="_zs_gallerycO:a" class="_zs_galleryj">自定义tag显示 + 自定义宽度 + 自定义文字对齐方式</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerycO:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerycO:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-popover class="mc-iconfont color-9"\n    tag="i"\n    content="用 i 标签生成，宽度400，文字居中对齐"\n    width="400"\n    align-text="center"\n    placement="bottom"&gt;&amp;#xe629;&lt;/mx-popover&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});