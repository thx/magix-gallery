/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-carousel/__test__/index",["magix","mx-title/second","./2","./3","./1","__test__/api"],(require,exports,module)=>{
/*Magix*/
require("mx-title/second");
require("./2");
require("./3");
require("./1");
require("__test__/api");
var Magix = require("magix");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallery9:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallery9:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-carousel/__test__/2"></div><div mx-view="mx-carousel/__test__/3"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-carousel/__test__/1"></div></div></div><div mxs="_zs_gallery9:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 14;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '" class="mb40"></div>';
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
            }];
        this.updater.digest({
            options: options
        });
    }
});

});