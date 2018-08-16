/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/content",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, text = $$.text, content = $$.content; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallery%:_" class="fontsize-16 mb20">标题：';
    $line = 1;
    $art = '=text';
    ;
    $p += '' + ($expr = '<%=text%>', $e(text)) + '</div><div mxa="_zs_gallery%:a" class="mb20">内容：';
    $line = 2;
    $art = '=content';
    ;
    $p += '' + ($expr = '<%=content%>', $e(content)) + '</div><div mxs="_zs_gallery%:_"><a href="#!/popover/index" class="btn btn-brand">从当前页面跳走，自动销毁浮层</a></div>';
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