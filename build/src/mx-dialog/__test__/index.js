/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/index",["magix","$","__test__/subs","mx-title/second","./3","./5","./2","./1","./6","./7","./8","./4","./options"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./3");
require("./5");
require("./2");
require("./1");
require("./6");
require("./7");
require("./8");
require("./4");
require("./options");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; $p += '<div mxa="_zs_galleryap:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: 'mxDialog', key: viewId + '_demo3' }, { name: '获取dialog实例', key: viewId + '_demo5' }, { name: 'alert警告', key: viewId + '_demo1' }, { name: 'confirm二次确认', key: viewId + '_demo2' }, { name: 'dialog内配置属性', key: viewId + '_demo6' }, { name: 'afterClose', key: viewId + '_demo7' }, { name: 'beforeClose', key: viewId + '_demo8' }, { name: '内容分组', key: viewId + '_demo4' }] }, { name: 'View Methods', key: viewId + '_method' }, { name: 'dialogOptions', key: viewId + '_options' }]) + '"></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryap:a" class="clearfix mb20"><div mx-view="mx-dialog/__test__/3" id="' + $e(viewId) + '_demo3"></div><div mx-view="mx-dialog/__test__/5" id="' + $e(viewId) + '_demo5"></div><div mx-view="mx-dialog/__test__/2" id="' + $e(viewId) + '_demo2"></div><div mx-view="mx-dialog/__test__/1" id="' + $e(viewId) + '_demo1"></div><div mx-view="mx-dialog/__test__/6" id="' + $e(viewId) + '_demo6"></div><div mx-view="mx-dialog/__test__/7" id="' + $e(viewId) + '_demo7"></div><div mx-view="mx-dialog/__test__/8" id="' + $e(viewId) + '_demo8"></div><div mx-view="mx-dialog/__test__/4" id="' + $e(viewId) + '_demo4"></div></div><div id="' + $e(viewId) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryap:_" class="pr20 mb40"><table class="table _zs_galleryr"><thead><tr><th width="200">方法名</th><th width="200">说明</th><th width="300">预览</th></tr></thead><tbody><tr><td>mxDialog(viewPath, [viewOptions], [dialogOptions])</td><td>自定义浮层</td><td></td></tr><tr><td>alert(title, content, [enterCallback], [dialogOptions])</td><td>警告小浮层</td><td></td></tr><tr><td>confirm(viewOptions, [dialogOptions])</td><td>二次确认浮层</td><td></td></tr><tr><td>mxDialogGroup(viewOptions, [dialogOptions])</td><td>内容分组浮层</td><td><img class="w360" src="https://img.alicdn.com/tfs/TB1vxEOgAvoK1RjSZFwXXciCFXa-631-423.gif"/></td></tr><tr><td>mxCloseAllDialogs()</td><td>关闭当前所有展开的浮层</td><td></td></tr></tbody></table></div><div id="' + $e(viewId) + '_options" mx-view="mx-title/second?content=dialogOptions%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"></div><div mxs="_zs_galleryap:a" class="mb40" mx-view="mx-dialog/__test__/options"></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});