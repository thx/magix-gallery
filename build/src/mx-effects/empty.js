/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/empty",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, white = $$.white, content = $$.content; var $expr, $art, $line; try {
    $p += '<div class="';
    $line = 1;
    $art = '=(white ? \'empty-white\' : \'empty-area\')';
    ;
    $p += '' + ($expr = '<%=(white?\'empty-white\':\'empty-area\')%>', $e((white ? 'empty-white' : 'empty-area'))) + '"><i mxs="_zs_galleryaG:_" class="mc-iconfont no-data">&#xe685;</i><p mxa="_zs_galleryaG:_" class="mt10">';
    $line = 3;
    $art = '=content';
    ;
    $p += '' + ($expr = '<%=content%>', $e(content)) + '</p></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/empty.html';
    throw msg;
} return $p; },
    init: function (e) {
        var white = (e.bg === 'white');
        this.updater.set({
            white: white,
            content: e.content || '暂无内容'
        });
    },
    render: function () {
        this.updater.digest();
    }
});

});