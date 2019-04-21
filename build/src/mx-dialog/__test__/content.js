/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/content",["magix","$"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', text = $$.text, content = $$.content; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryaC:_" class="fontsize-16 mb20">标题：';
    $line = 1;
    $art = '=text';
    ;
    $p += ($expr = '<%=text%>', $e(text)) + '</div><div mxa="_zs_galleryaC:a" class="mb20">内容：';
    $line = 2;
    $art = '=content';
    ;
    $p += ($expr = '<%=content%>', $e(content)) + '</div><div mxs="_zs_galleryaC:_"><a href="#!/popover/index" class="btn btn-brand">从当前页面跳走，自动销毁浮层</a></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/content.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.set(extra.data);
    },
    render: function () {
        this.updater.digest();
    }
});

});