/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-gtip/__test__/index",["magix","$","__test__/subs","mx-title/second","./1"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; $p += '<div mxa="_zs_gallerybX:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo' }, { name: 'Methods', key: viewId + '_method' }]) + '"></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerybX:_" class="clearfix mb20"><div mx-view="mx-gtip/__test__/1"></div></div><div id="' + $e(viewId) + '_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerybX:a" class="pr20 mb40"><table class="table _zs_galleryr"><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>gtip(msg, timeout)</td><td><div>显示通顶提示信息</div><div>msg：信息内容</div><div>timeout：延时自动关闭，不设置的时候显示关闭按钮手动关闭</div></td></tr></tbody></table></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});