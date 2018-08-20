/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/menu-custom-desc",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }; var $expr, $art, $line; try {
    $p += '<pre mxs="_zs_galleryk:_" class="tip-content mr20">// 关于如何配置menu.js中CustomPath字段\n// 不在导航上显示的自定义可访问路径\nlet CustomPath = [{\n    // 权限处理，必填，不需控制权限给true即可\n    has: true,  \n\n    // 页面标题，必填\n    name: \'映射到innav\',\n    \n    // 页面访问路径，必填\n    path: \'/develop/outnav\', \n\n    // 是否需要映射到某一个三级菜单\n    // 1. 用户配置了leftView的时候，只映射该三级菜单对应的主导航，侧边加载leftView；\n    // 2. 用户未配置leftView的时候，左侧显示映射导航\n    mapThirdPath: \'/develop/innav\', \n\n    // 该导航侧边栏对应的是一个自定义的view，暂时与mapThirdPath互斥\n    leftView: \'/develop/custom-side\', \n\n    // 不需要左侧导航区域，默认为false,\n    ignoreLeft: true \n\n    // 自定义页面结构，padding为0，深底色背景，需要的时候配置custom: true即可\n    custom: true\n}]\n</pre>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/menu-custom-desc.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});