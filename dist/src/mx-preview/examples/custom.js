/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/examples/custom",["magix","$"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', url = $$.url, title = $$.title, amount = $$.amount, price = $$.price; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryfT:_" class="clearfix"><img src="';
    $line = 2;
    $art = '=url';
    ;
    $p += ($expr = '<%=url%>', $e(url)) + '" class="fl mr10" style="height: 80px;"/><div mxa="_zs_galleryfT:a" class="fl"><div mxa="_zs_galleryfT:b" class="mt5"><span mxs="_zs_galleryfT:_" class="color-9">标题：</span>';
    $line = 4;
    $art = '=title';
    ;
    $p += ($expr = '<%=title%>', $e(title)) + '</div><div mxa="_zs_galleryfT:c" class="mt10"><span mxs="_zs_galleryfT:a" class="color-9">库存：</span>';
    $line = 5;
    $art = '=amount';
    ;
    $p += ($expr = '<%=amount%>', $e(amount)) + '</div><div mxa="_zs_galleryfT:d" class="mt10"><span mxs="_zs_galleryfT:b" class="color-9">价钱：</span>';
    $line = 6;
    $art = '=price';
    ;
    $p += ($expr = '<%=price%>', $e(price)) + '</div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/examples/custom.html';
    throw msg;
} return $p; },
    init: function (options) {
        this.updater.set(options);
    },
    render: function () {
        this.updater.digest();
    }
});

});