/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/notice",["magix","$","mx-title/second","./3","./4","./7","./5","./6","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./3");
require("./4");
require("./7");
require("./5");
require("./6");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryaC:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryaC:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-effects/__test__/3"></div><div mx-view="mx-effects/__test__/4"></div><div mx-view="mx-effects/__test__/7"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-effects/__test__/5"></div><div mx-view="mx-effects/__test__/6"></div></div></div><div mxs="_zs_galleryaC:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 15;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/notice.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'type',
                desc: [
                    '展示类型',
                    'error：红色错误类型提示',
                    'warn：黄色警告类型提示',
                    'highlight：品牌色图标强调提示'
                ].join('<br>'),
                type: 'string',
                def: '默认灰色提示'
            }, {
                key: 'border',
                desc: '是否带边框 + 圆角',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'text-align',
                desc: '文字对齐方式，left，center，right',
                type: 'string',
                def: 'left'
            }, {
                key: 'color',
                desc: '自定义颜色，背景色要计算透明度，请用hex格式色号，配置了color的时候忽略type的配置',
                type: 'hex格式色号',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});

});