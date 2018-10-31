/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/empty",["magix","./base","$"],(require,exports,module)=>{
/*Magix,Base,$*/

var Magix = require("magix");
var Base = require("./base");
var $ = require("$");
module.exports = Base.extend({
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
} ; var $g = '', $_temp, $p = '', white = $$.white, content = $$.content; var $expr, $art, $line; try {
    $p += '<div class="';
    $line = 1;
    $art = '=(white ? \'empty-white\' : \'empty-area\')';
    ;
    $p += ($expr = '<%=(white ? \'empty-white\' : \'empty-area\')%>', $e((white ? 'empty-white' : 'empty-area'))) + '"><i mxs="_zs_gallerya@:_" class="mc-iconfont no-data">&#xe685;</i><p mxa="_zs_gallerya@:_" class="mt10">';
    $line = 3;
    $art = '!content';
    ;
    $p += ($expr = '<%!content%>', $n(content)) + '</p></div>';
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
    }
});

});