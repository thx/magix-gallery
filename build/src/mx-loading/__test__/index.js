/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","./11","./6","./4","./8","./10","./5","./7","./9","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
require("./3");
require("./11");
require("./6");
require("./4");
require("./8");
require("./10");
require("./5");
require("./7");
require("./9");
require("__test__/api");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; $p += '<div mxv mxa="_zs_galleryb`:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '手动加载', key: viewId + '_custom', subs: [{ name: '非全屏自动关', key: viewId + '_custom1' }, { name: '全屏自动关', key: viewId + '_custom2' }, { name: '手动关闭', key: viewId + '_custom3' }] }, { name: 'loading动画', key: viewId + '_demo', subs: [{ name: 'circle-spinner', key: viewId + '_demo11' }, { name: 'three-bounce', key: viewId + '_demo10' }, { name: 'rectangle', key: viewId + '_demo6' }, { name: 'double-bounce', key: viewId + '_demo5' }, { name: 'square', key: viewId + '_demo4' }, { name: 'cubes', key: viewId + '_demo7' }, { name: 'pulse', key: viewId + '_demo8' }, { name: 'dots', key: viewId + '_demo9' }] }, { name: 'API', key: viewId + '_api' }]) + '"></div><div id="' + $e(viewId) + '_custom" mx-view="mx-title/second?content=%E6%89%8B%E5%8A%A8%E5%8A%A0%E8%BD%BD"></div><div mxa="_zs_galleryb`:a" class="clearfix mb20"><div mxa="_zs_galleryb`:b" class="_zs_gallerye"><div mx-view="mx-loading/__test__/1" id="' + $e(viewId) + '_custom1"></div><div mx-view="mx-loading/__test__/2" id="' + $e(viewId) + '_custom2"></div></div><div mxa="_zs_galleryb`:c" class="_zs_gallerye"><div mx-view="mx-loading/__test__/3" id="' + $e(viewId) + '_custom3"></div></div></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=loading%E5%8A%A8%E7%94%BB"></div><div mxa="_zs_galleryb`:d" class="clearfix mb20"><div mxa="_zs_galleryb`:e" class="_zs_gallerye"><div mx-view="mx-loading/__test__/11" id="' + $e(viewId) + '_demo11"></div><div mx-view="mx-loading/__test__/6" id="' + $e(viewId) + '_demo6"></div><div mx-view="mx-loading/__test__/4" id="' + $e(viewId) + '_demo4"></div><div mx-view="mx-loading/__test__/8" id="' + $e(viewId) + '_demo8"></div></div><div mxa="_zs_galleryb`:f" class="_zs_gallerye"><div mx-view="mx-loading/__test__/10" id="' + $e(viewId) + '_demo10"></div><div mx-view="mx-loading/__test__/5" id="' + $e(viewId) + '_demo5"></div><div mx-view="mx-loading/__test__/7" id="' + $e(viewId) + '_demo7"></div><div mx-view="mx-loading/__test__/9" id="' + $e(viewId) + '_demo9"></div></div></div><div id="' + $e(viewId) + '_api" mx-view="mx-title/second?content=API&tip=mx-loading.anim%20api"></div><div mxv="options" mx-view="__test__/api?options=' + $i($$ref, options) + '"></div></div>'; return $p; },
    render: function () {
        var options = [{
                key: 'size',
                desc: 'loading尺寸 ',
                type: 'number',
                def: 60
            }, {
                key: 'mode',
                desc: [
                    '可选动画类型',
                    'circle-spinner',
                    'three-bounce',
                    'rectangle',
                    'double-bounce',
                    'square',
                    'cubes',
                    'pulse',
                    'dots'
                ].join('<br>'),
                type: 'string',
                def: 'circle-spinner'
            }, {
                key: 'type',
                desc: [
                    '展示类型',
                    'brand：品牌色',
                    'grey：灰色'
                ].join('<br>'),
                type: 'string',
                def: 'grey'
            }, {
                key: 'color',
                desc: '自定义颜色',
                type: 'hex格式色号',
                def: ''
            },];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});