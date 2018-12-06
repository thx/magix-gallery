/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/sub1",["magix","../index"],(require,exports,module)=>{
/*Magix,Form*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var Form = require("../index");
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
} ; var $g = '', $_temp, $p = '', name = $$.name; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_v:_" class="__mx-style_index_-form-item __mx-style_index_-clearfix"><label mxs="_v:_" class="__mx-style_index_-form-label __mx-style_index_-form-required">活动名称：</label><div mxv mxa="_v:a" class="__mx-style_index_-form-content"><input mxe="' + $viewId + '_0" mxc="[{p:\'name\',f:{required:true,blength:[20,50]}}]" class="__mx-style_index_-input" placeholder="请填写活动名称" value="' + ($expr = '<%=name%>', $e(name)) + '"/></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/sub1.html';
    throw msg;
} return $p; },
    mixins: [Form],
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});