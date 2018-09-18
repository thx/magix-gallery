/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/__test__/index",["magix","mx-title/second","./2","./1","./3","./4","__test__/api"],(require,exports,module)=>{
/*Magix*/
require("mx-title/second");
require("./2");
require("./1");
require("./3");
require("./4");
require("__test__/api");
var Magix = require("magix");
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
} ; var $g = '', $_temp, $p = '', options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallery?:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallery?:a" class="clearfix mb20"><div class="_zs_gallery___test___layout_-half"><div mx-view="mx-carousel/__test__/2"></div><div mx-view="mx-carousel/__test__/1"></div></div><div class="_zs_gallery___test___layout_-half"><div mx-view="mx-carousel/__test__/3"></div><div mx-view="mx-carousel/__test__/4"></div></div></div><div mxs="_zs_gallery?:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 15;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-carousel/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'mode',
                desc: [
                    '动画播放模式',
                    'carousel：跑马灯切换',
                    'fade：渐显渐隐'
                ].join('<br>'),
                type: 'string',
                def: 'carousel'
            }, {
                key: 'height',
                desc: '容器高度',
                type: 'number',
                def: 200
            }, {
                key: 'active',
                desc: '默认激活第几帧，第一帧为0',
                type: 'number',
                def: 0
            }, {
                key: 'autoplay',
                desc: '是否自动播放',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'dots',
                desc: '是否显示缩略点',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'interval',
                desc: '播放暂停间隔，单位毫秒',
                type: 'number',
                def: '3000'
            }, {
                key: 'vertical',
                desc: '是否垂直方向播放',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'timing',
                desc: [
                    '定义同transition-timing-function',
                    'linear：规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）',
                    'ease：规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）',
                    'ease-in：规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）',
                    'ease-out：规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）',
                    'ease-in-out：规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）',
                    'cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值'
                ].join('<br>'),
                type: 'string',
                def: 'ease-in-out'
            }, {
                key: 'duration',
                desc: '动画持续时间',
                type: 'string',
                def: '0.5s'
            }, {
                key: 'prev-trigger',
                desc: '自定义上一帧trigger的id',
                type: 'string',
                def: ''
            }, {
                key: 'next-trigger',
                desc: '自定义下一帧trigger的id',
                type: 'string',
                def: ''
            }, {
                key: 'dot-class',
                desc: '自定义轮播点样式',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});

});