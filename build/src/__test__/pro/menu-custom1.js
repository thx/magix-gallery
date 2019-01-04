/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/menu-custom1",["magix","../example","$"],(require,exports,module)=>{
/*Magix,Base,$*/

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
} ; var $g = '', $_temp, $p = '', parentId = $$.parentId; $p += '<div mxa="_zs_galleryv:_" class="_zs_galleryap mr20"><div mxs="_zs_galleryv:_" class="_zs_galleryaq clearfix"><div class="_zs_galleryar">LOGO</div><div class="_zs_galleryas">一级标题</div></div><div mxa="_zs_galleryv:a" class="clearfix pr"><div mxs="_zs_galleryv:a" class="_zs_galleryat"><div><a href="javascript:;" class="_zs_galleryay _zs_galleryaz">三级1</a></div><div><a href="javascript:;" class="_zs_galleryay">三级2</a></div><div><a href="javascript:;" class="_zs_galleryay">三级3</a></div></div><div mxa="_zs_galleryv:b" class="_zs_galleryaC"><div mxs="_zs_galleryv:b" class="mb20">以下四种情况均为自定义页面，入口在导航上不可见，点击可查看配置：</div><div mxa="_zs_galleryv:c" class="mb20">1. 映射到三级1这个页面，顶部和侧边导航显示与三级1完全一致<a class="link-brand ml10" href="javascript:;" mx-click="' + $viewId + 'to({id:\'' + $e($eq(parentId)) + '_custom3\'})">查看配置</a></div><div mxa="_zs_galleryv:d" class="mb20">2. 映射到三级1这个页面，顶部显示与三级1完全一致，侧边内容自定义<a class="link-brand ml10" href="javascript:;" mx-click="' + $viewId + 'to({id:\'' + $e($eq(parentId)) + '_custom5\'})">查看配置</a></div><div mxa="_zs_galleryv:e" class="mb20">3. 映射到三级1这个页面，顶部显示与三级1完全一致，无侧边<a class="link-brand ml10" href="javascript:;" mx-click="' + $viewId + 'to({id:\'' + $e($eq(parentId)) + '_custom2\'})">查看配置</a></div><div mxa="_zs_galleryv:f" class="mb20">4. 使用另外的容器文件，而不是default<a class="link-brand ml10" href="javascript:;" mx-click="' + $viewId + 'to({id:\'' + $e($eq(parentId)) + '_custom4\'})">查看配置</a></div></div></div></div>'; return $p; },
    init: function (extra) {
        this.updater.set({
            parentId: extra.parentId
        });
    },
    render: function () {
        this.updater.digest();
    },
    'to<click>': function (e) {
        var id = e.params.id;
        var node = $('#' + id);
        $(window).scrollTop(node.offset().top);
    }
});

});