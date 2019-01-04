/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/index",["magix","$","__test__/subs","mx-title/second","./4","./9","./2","./7","./6","./3","./10","./1","./5","./8","__test__/api","./11","./12","./13"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./4");
require("./9");
require("./2");
require("./7");
require("./6");
require("./3");
require("./10");
require("./1");
require("./5");
require("./8");
require("__test__/api");
require("./11");
require("./12");
require("./13");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; $p += '<div mxv mxa="_zs_gallerycV:_" class="pr pr120"><div mx-view="__test__/subs?list=' + $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '自定义tag', key: viewId + '_demo4' }, { name: '自定义view', key: viewId + '_demo3' }, { name: '黑底白字', key: viewId + '_demo9' }, { name: '默认展开', key: viewId + '_demo10' }, { name: '上方', key: viewId + '_demo2' }, { name: '下方', key: viewId + '_demo1' }, { name: '左边', key: viewId + '_demo7' }, { name: '内容缩略显示', key: viewId + '_demo5' }, { name: '内容包含html', key: viewId + '_demo6' }, { name: '右边', key: viewId + '_demo8' }] }, { name: 'API', key: viewId + '_api' }, { name: '异常情况说明', key: viewId + '_error', subs: [{ name: '滚动定位', key: viewId + '_demo11' }, { name: 'tag=a & dark', key: viewId + '_demo13' }, { name: '影响CSSOM', key: viewId + '_demo12' }] }]) + '"></div><div id="' + $e(viewId) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycV:a" class="clearfix mb20"><div mxa="_zs_gallerycV:b" class="_zs_gallerye"><div mx-view="mx-popover/__test__/4" id="' + $e(viewId) + '_demo4"></div><div mx-view="mx-popover/__test__/9" id="' + $e(viewId) + '_demo9"></div><div mx-view="mx-popover/__test__/2" id="' + $e(viewId) + '_demo2"></div><div mx-view="mx-popover/__test__/7" id="' + $e(viewId) + '_demo7"></div><div mx-view="mx-popover/__test__/6" id="' + $e(viewId) + '_demo6"></div></div><div mxa="_zs_gallerycV:c" class="_zs_gallerye"><div mx-view="mx-popover/__test__/3" id="' + $e(viewId) + '_demo3"></div><div mx-view="mx-popover/__test__/10" id="' + $e(viewId) + '_demo10"></div><div mx-view="mx-popover/__test__/1" id="' + $e(viewId) + '_demo1"></div><div mx-view="mx-popover/__test__/5" id="' + $e(viewId) + '_demo5"></div><div mx-view="mx-popover/__test__/8" id="' + $e(viewId) + '_demo8"></div></div></div><div id="' + $e(viewId) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=' + $i($$ref, options) + '" class="mb40"></div><div id="' + $e(viewId) + '_error" mx-view="mx-title/second?content=%E5%BC%82%E5%B8%B8%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E"></div><div mxa="_zs_gallerycV:d" class="clearfix mb20"><div mxa="_zs_gallerycV:e" class="_zs_gallerye"><div mx-view="mx-popover/__test__/11" id="' + $e(viewId) + '_demo11"></div></div><div mxa="_zs_gallerycV:f" class="_zs_gallerye"><div mx-view="mx-popover/__test__/12" id="' + $e(viewId) + '_demo12"></div><div mx-view="mx-popover/__test__/13" id="' + $e(viewId) + '_demo13"></div></div></div></div>'; return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'content',
                desc: '提示内容 ',
                type: 'string'
            }, {
                key: 'width',
                desc: '提示框宽度',
                type: 'number',
                def: 200
            }, {
                key: 'placement',
                desc: '提示框在目标的方位，top，bottom，left，right<br/>与目标距离10px',
                type: 'string',
                def: 'bottom'
            }, {
                key: 'align',
                desc: '提示框与目标的对齐方式，top，bottom，left，right，center',
                type: 'string',
                def: 'center'
            }, {
                key: 'auto',
                desc: '默认自动展开提示框',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'view',
                desc: '自定义提示内容view，配置的view以view为准，绝对路径',
                type: 'string'
            }, {
                key: 'data',
                desc: '自定义提示内容view需要传入的数据',
                type: 'object&nbsp;&nbsp;|&nbsp;&nbsp;array',
                def: ''
            }, {
                key: 'type',
                desc: "\n<div>\u5C55\u73B0\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u767D\u5E95\uFF0C\u9700\u8981\u9ED1\u5E95\u65F6\u914D\u7F6Etype=\"dark\"</div>\n<div class=\"color-brand\">\u5F02\u5E38\u60C5\u51B5\u8BF4\u660E\uFF1Atag=\"a\"\u65F6\uFF0Ca\u6807\u7B7E\u7684\u539F\u751F\u5C5E\u6027type\u4E0E\u7EC4\u4EF6\u5B9A\u4E49\u7684type\u51B2\u7A81\uFF0C\u6B64\u65F6\u82E5\u8BBE\u7F6Etype=\"dark\"\u5931\u6548</div>\n<div class=\"color-brand\">\u53EF\u4EE5\u4F7F\u7528view-type\u4E0E\u539F\u751F\u5C5E\u6027type\u533A\u5206\u6765\u89E3\u51B3\u8BE5\u95EE\u9898</div>\n            ",
                type: 'string',
                def: ''
            }, {
                key: 'align-text',
                desc: '文字对齐方式，left，right，center',
                type: 'string',
                def: 'left'
            }, {
                key: 'scroll-wrapper',
                desc: '相对滚动父元素，支持格式#id，.class，id，$(node)',
                type: 'string',
                def: ''
            }];
        that.updater.digest({
            viewId: that.id,
            options: options
        });
    }
});

});