/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-title/second",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

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
} ; var $g = '', $_temp, $p = '', content = $$.content, tip = $$.tip; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryc`:_" class="page-header"><span mxa="_zs_galleryc`:a" class="second-header">';
    $line = 2;
    $art = '!content';
    ;
    $p += ($expr = '<%!content%>', $n(content)) + '</span>';
    $line = 3;
    $art = 'if tip';
    ;
    $expr = '<%if (tip) {%>';
    if (tip) {
        ;
        $p += '<span mxa="_zs_galleryc`:b" class="page-tip">';
        $line = 4;
        $art = '!tip';
        ;
        $p += ($expr = '<%!tip%>', $n(tip)) + '</span>';
        $line = 5;
        $art = '/if';
        ;
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
    msg += $expr + '\r\n\tat file:mx-title/second.html';
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