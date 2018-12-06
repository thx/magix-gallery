/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/sub",["magix","../index","./sub1"],(require,exports,module)=>{
/*Magix,Form*/
require("./sub1");
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
} ; var $g = '', $_temp, $p = '', nameX1 = $$.nameX1, name_sub1 = $$.name_sub1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_u:_" class="__mx-style_index_-form-item __mx-style_index_-clearfix"><label mxs="_u:_" class="__mx-style_index_-form-label __mx-style_index_-form-required">活动名称：</label><div mxv mxa="_u:a" class="__mx-style_index_-form-content"><input mxe="' + $viewId + '_0" mxc="[{p:\'nameX1\',f:{required:true,blength:[20,50]}}]" class="__mx-style_index_-input" placeholder="请填写活动名称" value="' + ($expr = '<%=nameX1%>', $e(nameX1)) + '"/></div></div><div mxs="_u:a" mxe="' + $viewId + '_1" mxc="[{p:\'name_sub1\',f:{from:\'name\'}}]" mx-view="mx-form/__test__/sub1"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/sub.html';
    throw msg;
} return $p; },
    mixins: [Form],
    init: function (extra) {
        this.updater.set(extra);
    },
    render: function () {
        var me = this;
        console.log(me.updater.get());
        me.updater.digest();
    }
});

});