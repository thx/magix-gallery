/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/menu4",["magix","../example","$","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var Base = require("../example");
var $ = require("$");
Magix.applyStyle("_zs_galleryg","._zs_galleryam{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryan{height:160px;background-color:#fafafa}._zs_galleryao{height:160px;padding:30px}._zs_galleryap{box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryap ._zs_galleryaq{height:50px;background-color:#4d7fff}._zs_galleryap ._zs_galleryaq ._zs_galleryar,._zs_galleryap ._zs_galleryaq ._zs_galleryas{float:left;height:50px;line-height:50px;color:#fff}._zs_galleryap ._zs_galleryaq ._zs_galleryar{width:210px;font-size:22px;opacity:.8;text-align:center}._zs_galleryap ._zs_galleryaq ._zs_galleryas{padding-left:30px;padding-right:10px;font-size:14px;opacity:.6}._zs_galleryap ._zs_galleryat{float:left;position:relative;padding-top:30px;width:210px;padding-bottom:80px;background-color:#3d414d;transition:left .25s ease-out;font-size:14px}._zs_galleryap ._zs_galleryat ._zs_galleryau{display:block;height:46px;padding-left:24px;padding-right:10px}._zs_galleryap ._zs_galleryat ._zs_galleryau,._zs_galleryap ._zs_galleryat ._zs_galleryau ._zs_galleryav{line-height:46px;color:#9ea0a6;cursor:pointer;transition:all .2s ease-out}._zs_galleryap ._zs_galleryat ._zs_galleryau ._zs_galleryav{float:right;font-size:24px}._zs_galleryap ._zs_galleryat ._zs_galleryau._zs_galleryaw ._zs_galleryav{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryap ._zs_galleryat ._zs_galleryau._zs_galleryax,._zs_galleryap ._zs_galleryat ._zs_galleryau._zs_galleryax ._zs_galleryav,._zs_galleryap ._zs_galleryat ._zs_galleryau:hover,._zs_galleryap ._zs_galleryat ._zs_galleryau:hover ._zs_galleryav{color:#fff}._zs_galleryap ._zs_galleryat ._zs_galleryay{display:block;height:46px;padding-left:20px;line-height:46px;border-left:4px solid transparent;color:#9ea0a6;overflow-y:hidden;transition:all .2s ease-out;cursor:pointer}._zs_galleryap ._zs_galleryat ._zs_galleryay:hover{color:#fff}._zs_galleryap ._zs_galleryat ._zs_galleryay._zs_galleryaz{border-left:4px solid #4d7fff;color:#fff;background-color:#2e313a}._zs_galleryap ._zs_galleryat ._zs_galleryaA{background-color:#343842;box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryap ._zs_galleryat ._zs_galleryaA._zs_galleryaB ._zs_galleryay{height:46px}._zs_galleryap ._zs_galleryaC{position:absolute;top:0;left:210px;padding:30px}");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; $p += '<div mxa="_zs_galleryF:_" class="_zs_galleryh"><div mxs="_zs_galleryF:_" class="_zs_galleryk"><div class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">无侧边，无padding，深底色</div></div><div class="_zs_galleryap"><div class="_zs_galleryaq clearfix"><div class="_zs_galleryar">LOGO</div><div class="_zs_galleryas">一级标题</div></div><div class="clearfix"><div class="_zs_galleryan">内容区域</div></div></div></div><div mxa="_zs_galleryF:a" class="_zs_galleryl"><div mxs="_zs_galleryF:a" class="_zs_galleryj">配置Menus</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_galleryF:b" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_galleryF:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\nlet Menus = [{\n    has: true,\n    name: \'一级标题\',\n    path: \'/develop/index\',\n    custom: true\n}]</pre></div></div>'; return $p; },
    render: function () {
        this.updater.digest();
    }
});

});