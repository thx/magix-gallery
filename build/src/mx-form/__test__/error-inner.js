/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/error-inner",["magix","$","mx-form/index","mx-form/validator"],(require,exports,module)=>{
/*Magix,$,Form,Validator*/

var Magix = require("magix");
var $ = require("$");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
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
} ; var $g = '', $_temp, $p = '', list = $$.list, viewId = $$.viewId, info = $$.info; var $expr, $art, $line; try {
    $line = 1;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_isuybqzad$art_i = 0, $art_cfzewixqn$art_c = list.length; $art_isuybqzad$art_i < $art_cfzewixqn$art_c; $art_isuybqzad$art_i++) {    var item = list[$art_isuybqzad$art_i]%>';
    for (var $art_isuybqzad$art_i = 0, $art_cfzewixqn$art_c = list.length; $art_isuybqzad$art_i < $art_cfzewixqn$art_c; $art_isuybqzad$art_i++) {
        var item = list[$art_isuybqzad$art_i];
        $p += '<label mxv mxa="_zs_gallerycd:_" class="mr30"><input mxe="' + $viewId + '_0" mxc="[';
        $line = 6;
        $art = ':info.age{required:[true,\'必选\']}';
        ;
        $p += '{p:\'info.age\',f:{required:[true,\'必选\']}}]" type="radio" class="radio" name="';
        $line = 4;
        $art = '=viewId';
        ;
        $p += ($expr = '<%=viewId%>', $e(viewId)) + '_radio" value="';
        $line = 5;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '"/>';
        $line = 7;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</label>';
        $line = 9;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/error-inner.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        var that = this;
        that.updater.digest({
            viewId: that.id,
            list: [{
                    text: '10~20岁',
                    value: 1
                }, {
                    text: '20~30岁',
                    value: 2
                }, {
                    text: '30~40岁',
                    value: 3
                }],
            info: {
                age: 2
            }
        });
    }
});

});