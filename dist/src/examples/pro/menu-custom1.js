/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("examples/pro/menu-custom1",["magix","../example","$"],(require,exports,module)=>{
/*Magix,Base,$*/

var Magix = require("magix");
var Base = require("../example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_examples_pro_menu_","._zs_gallery_examples_pro_menu_-empty {\n  height: 160px;\n  background-color: var(--color-bg);\n}\n._zs_gallery_examples_pro_menu_-white {\n  height: 160px;\n  padding: 30px;\n}\n._zs_gallery_examples_pro_menu_-menu {\n  box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-header {\n  height: 50px;\n  background-color: var(--color-brand);\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-header ._zs_gallery_examples_pro_menu_-logo,\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-header ._zs_gallery_examples_pro_menu_-name {\n  float: left;\n  height: 50px;\n  line-height: 50px;\n  color: #fff;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-header ._zs_gallery_examples_pro_menu_-logo {\n  width: 210px;\n  font-size: 22px;\n  opacity: 0.8;\n  text-align: center;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-header ._zs_gallery_examples_pro_menu_-name {\n  padding-left: 30px;\n  padding-right: 10px;\n  font-size: 14px;\n  opacity: 0.6;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs {\n  float: left;\n  position: relative;\n  padding-top: 30px;\n  width: 210px;\n  padding-bottom: 80px;\n  background-color: #3d414d;\n  -webkit-transition: left var(--duration) ease-out;\n  transition: left var(--duration) ease-out;\n  font-size: 14px;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-second {\n  display: block;\n  height: 46px;\n  padding-left: 24px;\n  padding-right: 10px;\n  line-height: 46px;\n  color: #9ea0a6;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n  /*若为二级组，组展开时状态*/\n  /*选中态在该二级组内*/\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-second ._zs_gallery_examples_pro_menu_-second-icon {\n  float: right;\n  font-size: 24px;\n  line-height: 46px;\n  cursor: pointer;\n  color: #9ea0a6;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-second._zs_gallery_examples_pro_menu_-second-expand ._zs_gallery_examples_pro_menu_-second-icon {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-second._zs_gallery_examples_pro_menu_-second-on,\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-second:hover {\n  color: #fff;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-second._zs_gallery_examples_pro_menu_-second-on ._zs_gallery_examples_pro_menu_-second-icon,\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-second:hover ._zs_gallery_examples_pro_menu_-second-icon {\n  color: #fff;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-third {\n  display: block;\n  height: 46px;\n  padding-left: 20px;\n  line-height: 46px;\n  border-left: 4px solid transparent;\n  color: #9ea0a6;\n  overflow-y: hidden;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-third:hover {\n  color: #fff;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-third._zs_gallery_examples_pro_menu_-third-on {\n  border-left: 4px solid var(--color-brand);\n  color: #fff;\n  background-color: #2e313a;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-thirds {\n  background-color: #343842;\n  box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-thirds ._zs_gallery_examples_pro_menu_-nav-third {\n  padding-left: 40px;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-navs ._zs_gallery_examples_pro_menu_-nav-thirds._zs_gallery_examples_pro_menu_-third-expand ._zs_gallery_examples_pro_menu_-nav-third {\n  height: 46px;\n}\n._zs_gallery_examples_pro_menu_-menu ._zs_gallery_examples_pro_menu_-inner {\n  position: absolute;\n  top: 0;\n  left: 210px;\n  padding: 30px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', parentId = $$.parentId; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryB:_" class="_zs_gallery_examples_pro_menu_-menu mr20"><div mxs="_zs_galleryB:_" class="_zs_gallery_examples_pro_menu_-header clearfix"><div class="_zs_gallery_examples_pro_menu_-logo">LOGO</div><div class="_zs_gallery_examples_pro_menu_-name">一级标题</div></div><div mxa="_zs_galleryB:a" class="clearfix pr"><div mxs="_zs_galleryB:a" class="_zs_gallery_examples_pro_menu_-navs"><div><a href="javascript:;" class="_zs_gallery_examples_pro_menu_-nav-third _zs_gallery_examples_pro_menu_-third-on"><i class="mc-iconfont mr5">&#xe731;</i>三级1</a></div><div><a href="javascript:;" class="_zs_gallery_examples_pro_menu_-nav-third"><i class="mc-iconfont mr5">&#xe609;</i>三级2</a></div><div><a href="javascript:;" class="_zs_gallery_examples_pro_menu_-nav-third"><i class="mc-iconfont mr5">&#xe698;</i>三级3</a></div></div><div mxa="_zs_galleryB:b" class="_zs_gallery_examples_pro_menu_-inner"><div mxs="_zs_galleryB:b" class="mb20">以下四种情况均为自定义页面，入口在导航上不可见，点击可查看配置：</div><div mxa="_zs_galleryB:c" class="mb20">1. 映射到三级1这个页面，顶部和侧边导航显示与三级1完全一致<a class="link-brand ml10" href="javascript:;" mx-click="' + $viewId + 'to({id:\'';
    $line = 29;
    $art = '=parentId';
    ;
    $p += ($expr = '<%=$eq(parentId)%>', $e($eq(parentId))) + '_custom3\'})">查看配置</a></div><div mxa="_zs_galleryB:d" class="mb20">2. 映射到三级1这个页面，顶部显示与三级1完全一致，侧边内容自定义<a class="link-brand ml10" href="javascript:;" mx-click="' + $viewId + 'to({id:\'';
    $line = 30;
    $art = '=parentId';
    ;
    $p += ($expr = '<%=$eq(parentId)%>', $e($eq(parentId))) + '_custom5\'})">查看配置</a></div><div mxa="_zs_galleryB:e" class="mb20">3. 映射到三级1这个页面，顶部显示与三级1完全一致，无侧边<a class="link-brand ml10" href="javascript:;" mx-click="' + $viewId + 'to({id:\'';
    $line = 31;
    $art = '=parentId';
    ;
    $p += ($expr = '<%=$eq(parentId)%>', $e($eq(parentId))) + '_custom2\'})">查看配置</a></div><div mxa="_zs_galleryB:f" class="mb20">4. 使用另外的容器文件，而不是default<a class="link-brand ml10" href="javascript:;" mx-click="' + $viewId + 'to({id:\'';
    $line = 32;
    $art = '=parentId';
    ;
    $p += ($expr = '<%=$eq(parentId)%>', $e($eq(parentId))) + '_custom4\'})">查看配置</a></div></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:examples/pro/menu-custom1.html';
    throw msg;
} return $p; },
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