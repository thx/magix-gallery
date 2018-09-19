/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/menu-desc",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<pre mxs="_zs_galleryz:_" class="tip-content mr20">// 关于如何配置menu.js中Menus字段\n// 导航上可见的菜单配置\nlet Menus = [{\n    has: true,  // 头部菜单权限，必填，不需控制权限给true即可\n    id: \'basic\', // 唯一标识，如果有定制的打标需求等，可自定义，默认为Magix.guid()\n    name: \'一级标题\',  // 头部菜单文案，必填\n    path: \'/develop/innav\',  // 点击头部菜单的访问路径，必填\n    custom: true, // 自定义页面结构，padding为0，深底色背景，需要的时候配置custom: true即可\n    subs: [{  // 二三级菜单分组，可选\n        name: \'二级标题\',  // 二级分组标题，没有可不配置，可选\n        thirds: [{\n            has: true,  // 三级菜单权限，权限由三级往上汇总，无权限的剔除，必填，不需控制权限给true即可\n            id: \'innav\', // 三级菜单唯一标识，如果有定制的打标需求等，可自定义，默认为Magix.guid()\n            name: \'三级标题\', // 三级菜单标题，必填\n            path: \'/develop/innav\',  // 三级菜单访问路径，必填\n            icon: \'&#38;&#35;xe786;\' // 三级菜单iconfont值，没有可不配置\n        }]\n    }],\n    leftView: \'/develop/custom-side\' // 该导航侧边栏对应的是一个自定义的view，暂时subs与leftView互斥\n}]</pre>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/menu-desc.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});