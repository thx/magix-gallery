/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/13",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_galleryan","._zs_gallerykv{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykw{color:#ccc;border:1px solid #e6e6e6;width:24px;height:24px;border-radius:4px;text-align:center;line-height:22px}._zs_gallerykx{zoom:2}._zs_galleryky{-webkit-transform:scale(2);transform:scale(2)}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; $p += '<div mxa="_zs_gallerycL:_" class="_zs_galleryh"><div mxs="_zs_gallerycL:_" class="_zs_galleryk"><div class="mb10">异常场景：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效</div><div class="mb10">如何解决：使用<span class="color-brand">view-type</span>与原生属性type区分</div><div class="mb10">正确场景：<a class="mc-iconfont color-9 fontsize-18" mx-view="mx-popover/index?width=66&content=%E5%88%A0%E9%99%A4&type=dark&placement=top&alignText=center">&#xe68d;</a></div><div class="mb10">错误场景：<a class="mc-iconfont color-9 fontsize-18" type="dark" mx-view="mx-popover/index?width=66&content=%E5%88%A0%E9%99%A4&placement=top&alignText=center">&#xe68d;</a></div></div><div mxa="_zs_gallerycL:a" class="_zs_galleryl"><div mxs="_zs_gallerycL:a" class="_zs_galleryj">正确场景</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerycL:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerycL:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    tag="a"\n    width="66"\n    content="删除"\n    view-type="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div><div mxa="_zs_gallerycL:c" class="_zs_galleryl"><div mxs="_zs_gallerycL:c" class="_zs_galleryj">错误场景</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_2"><span mxa="_zs_gallerycL:d" class="_zs_galleryo">' + $n(text2) + '</span><i mxs="_zs_gallerycL:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_2">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    tag="a"\n    width="66"\n    content="删除"\n    type="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});