/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/menu1",["magix","../example","$","mx-copy/index","../hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("../hl");
var Magix = require("magix");
var Base = require("../example");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___pro_menu_","/* @dependent: ./index.less */\n._zs_gallery___test___pro_menu_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery___test___pro_menu_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___pro_menu_-empty {\n  height: 160px;\n  background-color: #fafafa;\n}\n._zs_gallery___test___pro_menu_-white {\n  height: 160px;\n  padding: 30px;\n}\n._zs_gallery___test___pro_menu_-menu {\n  box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-header {\n  height: 50px;\n  background-color: #4d7fff;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-header ._zs_gallery___test___pro_menu_-logo,\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-header ._zs_gallery___test___pro_menu_-name {\n  float: left;\n  height: 50px;\n  line-height: 50px;\n  color: #fff;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-header ._zs_gallery___test___pro_menu_-logo {\n  width: 210px;\n  font-size: 22px;\n  opacity: .8;\n  text-align: center;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-header ._zs_gallery___test___pro_menu_-name {\n  padding-left: 30px;\n  padding-right: 10px;\n  font-size: 14px;\n  opacity: .6;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs {\n  float: left;\n  position: relative;\n  padding-top: 30px;\n  width: 210px;\n  padding-bottom: 80px;\n  background-color: #3d414d;\n  transition: left 0.25s ease-out;\n  font-size: 14px;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-second {\n  display: block;\n  height: 46px;\n  padding-left: 24px;\n  padding-right: 10px;\n  line-height: 46px;\n  color: #9ea0a6;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n  /*若为二级组，组展开时状态*/\n  /*选中态在该二级组内*/\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-second ._zs_gallery___test___pro_menu_-second-icon {\n  float: right;\n  font-size: 24px;\n  line-height: 46px;\n  cursor: pointer;\n  color: #9ea0a6;\n  transition: all 0.2s ease-out;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-second._zs_gallery___test___pro_menu_-second-expand ._zs_gallery___test___pro_menu_-second-icon {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-second._zs_gallery___test___pro_menu_-second-on,\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-second:hover {\n  color: #fff;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-second._zs_gallery___test___pro_menu_-second-on ._zs_gallery___test___pro_menu_-second-icon,\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-second:hover ._zs_gallery___test___pro_menu_-second-icon {\n  color: #fff;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-third {\n  display: block;\n  height: 46px;\n  padding-left: 20px;\n  line-height: 46px;\n  border-left: 4px solid transparent;\n  color: #9ea0a6;\n  overflow-y: hidden;\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-third:hover {\n  color: #fff;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-third._zs_gallery___test___pro_menu_-third-on {\n  border-left: 4px solid #4d7fff;\n  color: #fff;\n  background-color: #2e313a;\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-thirds {\n  background-color: #343842;\n  box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n}\n._zs_gallery___test___pro_menu_-menu ._zs_gallery___test___pro_menu_-navs ._zs_gallery___test___pro_menu_-nav-thirds._zs_gallery___test___pro_menu_-third-expand ._zs_gallery___test___pro_menu_-nav-third {\n  height: 46px;\n}\n");
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
    $p += '<div mxa="_zs_galleryt:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryt:_" class="_zs_gallery___test___layout_-eg-content"><div class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">侧边不分组，配置subs，无leftView</div></div><div class="_zs_gallery___test___pro_menu_-menu"><div class="_zs_gallery___test___pro_menu_-header clearfix"><div class="_zs_gallery___test___pro_menu_-logo">LOGO</div><div class="_zs_gallery___test___pro_menu_-name">一级标题</div></div><div class="clearfix"><div class="_zs_gallery___test___pro_menu_-navs"><div><a href="javascript:;" class="_zs_gallery___test___pro_menu_-nav-third _zs_gallery___test___pro_menu_-third-on">三级1</a></div><div><a href="javascript:;" class="_zs_gallery___test___pro_menu_-nav-third">三级2</a></div><div><a href="javascript:;" class="_zs_gallery___test___pro_menu_-nav-third">三级3</a></div></div></div></div></div><div mxa="_zs_galleryt:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryt:a" class="_zs_gallery___test___layout_-eg-title">配置Menus</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 29;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryt:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 31;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryt:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\nlet Menus = [&#123;\n    has: true,\n    name: \'一级标题\',\n    path: \'/develop/chart1\',\n    subs: [&#123;\n        thirds: [&#123;\n            has: true,\n            name: \'三级1\',\n            path: \'/develop/chart1\'\n        &#125;, &#123;\n            has: true,\n            name: \'三级2\',\n            path: \'/develop/chart2\'\n        &#125;, &#123;\n            has: true,\n            name: \'三级3\',\n            path: \'/develop/chart3\'\n        &#125;]\n    &#125;]\n&#125;]</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/menu1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});