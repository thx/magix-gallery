/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/menu",["magix","$","../subs","mx-title/second","./menu-desc","./menu1","./menu3","./menu5","./menu2","./menu4","./menu-custom-desc"],(require,exports,module)=>{
/*Magix,$*/
require("../subs");
require("mx-title/second");
require("./menu-desc");
require("./menu1");
require("./menu3");
require("./menu5");
require("./menu2");
require("./menu4");
require("./menu-custom-desc");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<div mx-view="__test__/subs?list=';
    $line = 1;
    $art = '@[{\n    name: \'查看导航可见菜单配置\',\n    key: viewId + \'_menu\'\n}, {\n    name: \'查看自定义菜单配置\',\n    key: viewId + \'_custom\'\n}]';
    ;
    $p += '' + ($expr = '<%@[{            name: \'查看导航可见菜单配置\',            key: viewId + \'_menu\'        }, {            name: \'查看自定义菜单配置\',            key: viewId + \'_custom\'        }]%>', $i($$ref, [{ name: '查看导航可见菜单配置', key: viewId + '_menu' }, { name: '查看自定义菜单配置', key: viewId + '_custom' }])) + '"></div><div id="';
    $line = 9;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_menu" mx-view="mx-title/second?content=%E5%AF%BC%E8%88%AA%E5%8F%AF%E8%A7%81%E8%8F%9C%E5%8D%95%E9%85%8D%E7%BD%AE&tip=%E5%85%A5%E5%8F%A3%E5%9C%A8%E5%AF%BC%E8%88%AA%E4%B8%8A%E7%9A%84%E9%A1%B5%E9%9D%A2%EF%BC%8C%E5%8F%AF%E4%BB%A5%E4%B8%BA%E5%A4%B4%E9%83%A8%E4%B8%80%E7%BA%A7%EF%BC%8C%E6%88%96%E8%80%85%E4%B8%BA%E4%BE%A7%E8%BE%B9%E4%BA%8C%E7%BA%A7%E6%88%96%E8%80%85%E4%B8%89%E7%BA%A7%EF%BC%8C%E4%B8%BA%E4%BA%86%E5%A4%84%E7%90%86%E6%96%B9%E4%BE%BF%E4%BE%A7%E8%BE%B9%E5%8F%AF%E7%82%B9%E9%83%BD%E6%98%AF%E4%B8%89%E7%BA%A7"></div><div mxs="_zs_galleryq:_" mx-view="__test__/pro/menu-desc" class="mb20"></div><div mxs="_zs_galleryq:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="__test__/pro/menu1"></div><div mx-view="__test__/pro/menu3"></div><div mx-view="__test__/pro/menu5"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="__test__/pro/menu2"></div><div mx-view="__test__/pro/menu4"></div></div></div><div id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_custom" mx-view="mx-title/second?content=%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8F%9C%E5%8D%95%E9%85%8D%E7%BD%AE&tip=%E5%85%A5%E5%8F%A3%E5%9C%A8%E4%B8%8D%E5%9C%A8%E5%AF%BC%E8%88%AA%E4%B8%8A%EF%BC%8C%E4%BB%8E%E5%85%B7%E4%BD%93%E7%9A%84%E6%9F%90%E4%B8%AA%E9%A1%B5%E9%9D%A2%E7%82%B9%E5%87%BB%E8%BF%9B%E5%85%A5%EF%BC%8C%E5%8F%AF%E8%83%BD%E9%9C%80%E8%A6%81%E6%98%A0%E5%B0%84%E5%88%B0%E5%AF%BC%E8%88%AA%E7%9A%84%E6%9F%90%E4%B8%AA%E4%BD%8D%E7%BD%AE%E4%B8%8A"></div><div mxs="_zs_galleryq:b" mx-view="__test__/pro/menu-custom-desc" class="mb20"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/menu.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});