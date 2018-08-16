/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/index",["magix","$","mx-title/second","./3","./2","./1","./4","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./3");
require("./2");
require("./1");
require("./4");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallery^:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallery^:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-dialog/__test__/3"></div><div mx-view="mx-dialog/__test__/2"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-dialog/__test__/1"></div><div mx-view="mx-dialog/__test__/4"></div></div></div><div mxs="_zs_gallery^:b" mx-view="mx-title/second?content=dialogOptions%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 14;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'width',
                desc: '浮层宽度',
                type: 'number',
                def: '400'
            }, {
                key: 'height',
                desc: '浮层高度',
                type: 'number',
                def: '400'
            }, {
                key: 'modal',
                desc: '打开浮层时是否禁止滚动',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'mask',
                desc: '打开浮层时是否有背景透明度遮罩，不需要请手动false关闭',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'closable',
                desc: '浮层是否有右上角默认的关闭按钮',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'left',
                desc: '最终定位相对于屏幕左侧',
                type: 'number',
                def: '默认居中'
            }, {
                key: 'top',
                desc: '最终定位相对于屏幕高侧',
                type: 'number',
                def: '默认居中，若高度超过屏幕高度则为0'
            }];
        that.updater.digest({
            options: options
        });
    }
});

});