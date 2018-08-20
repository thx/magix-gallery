/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/__test__/index",["magix","$","mx-title/second","./1","./2","./3","./4","./5","__test__/api","./implement"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
require("./2");
require("./3");
require("./4");
require("./5");
require("__test__/api");
require("./implement");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryW:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryW:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-calendar/__test__/1"></div><div mx-view="mx-calendar/__test__/2"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-calendar/__test__/3"></div><div mx-view="mx-calendar/__test__/4"></div><div mx-view="mx-calendar/__test__/5"></div></div></div><div mxs="_zs_galleryW:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 16;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '" class="mb40"></div><div mxs="_zs_galleryW:c" mx-view="mx-calendar/__test__/implement"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'max',
                desc: '最大可选的日期',
                type: 'string'
            }, {
                key: 'min',
                desc: '最小可选的日期',
                type: 'string',
                def: ''
            }, {
                key: 'selected',
                desc: '默认选中的日期',
                type: 'string',
                def: '1. 今天小于min，默认为min<br/>2. 今天大于max，默认为max<br/>3. 今天在可选范围之内，默认为今天'
            }, {
                key: 'time-type',
                desc: '时分秒选择类型，设置该值后会出现时间选择组件<br/>可选择"hour,minute,second"中的一个或者多个<br/>此外提供快捷的配置"all" = "hour,minute,second"',
                type: 'string',
                def: ''
            }, {
                key: 'align',
                desc: '日历与目标的对齐方式，可选left和right',
                type: 'string',
                def: 'left'
            }, {
                key: 'prefix',
                desc: '提示文案前缀，展示为prefix：YYYY-MM-DD',
                type: 'string',
                def: ''
            }, {
                key: 'week-start',
                desc: '从周几开，0-6，0表示周日',
                type: 'number',
                def: '0'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});