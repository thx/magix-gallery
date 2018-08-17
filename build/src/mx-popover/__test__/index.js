/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/__test__/index",["magix","$","mx-title/second","./4","./9","./2","./7","./11","./3","./10","./1","./5","./6","./8","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./4");
require("./9");
require("./2");
require("./7");
require("./11");
require("./3");
require("./10");
require("./1");
require("./5");
require("./6");
require("./8");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerybz:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerybz:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-popover/__test__/4"></div><div mx-view="mx-popover/__test__/9"></div><div mx-view="mx-popover/__test__/2"></div><div mx-view="mx-popover/__test__/7"></div><div mx-view="mx-popover/__test__/11"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-popover/__test__/3"></div><div mx-view="mx-popover/__test__/10"></div><div mx-view="mx-popover/__test__/1"></div><div mx-view="mx-popover/__test__/5"></div><div mx-view="mx-popover/__test__/6"></div><div mx-view="mx-popover/__test__/8"></div></div></div><div mxs="_zs_gallerybz:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 21;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popover/__test__/index.html';
    throw msg;
} return $p; },
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
                desc: '展现样式，默认白底，需要黑底时配置type="dark"',
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
            options: options
        });
    }
});

});