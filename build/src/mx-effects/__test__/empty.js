/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/empty",["magix","$","mx-title/second","./1","./2","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
require("./2");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryaA:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryaA:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-effects/__test__/1"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-effects/__test__/2"></div></div></div><div mxs="_zs_galleryaA:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 12;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/empty.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'content',
                desc: '空状态提示文案',
                type: 'string',
                def: '暂无内容'
            }, {
                key: 'bg',
                desc: '背景样式，默认灰色，需要白底空状态时配置bg="white"',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});

});