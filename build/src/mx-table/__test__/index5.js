/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/index5",["magix","$","mx-title/second","./9","./10","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./9");
require("./10");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryc_:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryc_:a" class="clearfix mb20"><div mx-view="mx-table/__test__/9"></div><div mx-view="mx-table/__test__/10"></div></div><div mxs="_zs_galleryc_:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 8;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/index5.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'rwd-range',
                desc: '固定的列',
                type: 'string',
                def: '2,-1'
            }, {
                key: 'rwd-limit',
                desc: '几列一页',
                type: 'number',
                def: '4'
            }, {
                key: 'rwd-current',
                desc: '当前显示第几页',
                type: 'number',
                def: '1'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});