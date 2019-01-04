/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-status/__test__/dropdown",["magix","$","__test__/subs","mx-title/second","./4","./5","./options","./events"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./4");
require("./5");
require("./options");
require("./events");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; $p += '<div mxa="_zs_gallerydb:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '纯操作', key: viewId + '_demo4' }, { name: '纯提示', key: viewId + '_demo5' }] }, { name: 'API', key: viewId + '_api' }, { name: 'Event', key: viewId + '_event' }]) + '"></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerydb:a" class="clearfix mb20"><div mxa="_zs_gallerydb:b" class="_zs_gallerye"><div mx-view="mx-status/__test__/4" id="' + $e(viewId) + '_demo4"></div></div><div mxa="_zs_gallerydb:c" class="_zs_gallerye"><div mx-view="mx-status/__test__/5" id="' + $e(viewId) + '_demo5"></div></div></div><div mx-view="mx-status/__test__/options" id="' + $e(viewId) + '_api" class="mb40"></div><div mx-view="mx-status/__test__/events" id="' + $e(viewId) + '_event"></div></div>'; return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id
        });
    }
});

});