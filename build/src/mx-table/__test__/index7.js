/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/index7",["magix","$","__test__/subs","mx-title/second","./14","./15"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./14");
require("./15");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; $p += '<div mxa="_zs_galleryd4:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '一次性获取', key: viewId + '_demo1' }, { name: '实时获取', key: viewId + '_demo2' }] }, { name: 'Methods', key: viewId + '_method', subs: [{ name: 'getStoreState', key: viewId + '_method' }, { name: 'clearStoreState', key: viewId + '_method' }] }]) + '"></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryd4:a" class="clearfix mb20"><div mx-view="mx-table/__test__/14" id="' + $e(viewId) + '_demo1"></div><div mx-view="mx-table/__test__/15" id="' + $e(viewId) + '_demo2"></div></div><div id="' + $e(viewId) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryd4:_" class="pr20"><table class="table _zs_galleryr"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>this.getStoreState([linkage:string])</td><td><div>linkage：父节点input.attr(\'linkage\')</div><div>有：获取父节点为该值的所有选中项</div><div>无：获取已配置的所有input的选中项</div></td></tr><tr><td>this.clearStoreState([linkage:string])</td><td><div>linkage：父节点input.attr(\'linkage\')</div><div>有：清空父节点为该值的所有选中项</div><div>无：清空已配置的所有input的选中项</div></td></tr></tbody></table></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});