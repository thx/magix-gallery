/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-title/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, content = $$.content, tip = $$.tip; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerycr:_" class="page-header"><span mxa="_zs_gallerycr:a" class="first-header">';
    $line = 2;
    $art = '!content';
    ;
    $p += '' + ($expr = '<%!content%>', $n(content)) + '</span>';
    $line = 3;
    $art = 'if tip';
    ;
    $p += '';
    $expr = '<%if(tip){%>';
    if (tip) {
        ;
        $p += '<span mxa="_zs_gallerycr:b" class="page-tip">';
        $line = 4;
        $art = '!tip';
        ;
        $p += '' + ($expr = '<%!tip%>', $n(tip)) + '</span>';
        $line = 5;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-title/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var content = extra.content || '标题';
        var tip = extra.tip || '';
        this.updater.set({
            content: content,
            tip: tip
        });
    },
    render: function () {
        this.updater.digest();
    }
});

});