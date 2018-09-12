/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/7",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
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
} ; var $g = '', $_temp, $p = '', number = $$.number, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya;:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerya;:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_gallerya;:b" class="clearfix"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 4;
    $art = ':number{range:[4, 8]}';
    ;
    $p += '{p:\'number\',f:{range:[4, 8]}}]" class="input mr20 mb20" placeholder="4到8之间的数字" value="';
    $line = 4;
    $art = ':number{range:[4, 8]}';
    ;
    $p += '' + ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_1" mxc="[';
    $line = 5;
    $art = ':number{min:20}';
    ;
    $p += '{p:\'number\',f:{min:20}}]" class="input mr20 mb20" placeholder="数字不能小于20" value="';
    $line = 5;
    $art = ':number{min:20}';
    ;
    $p += '' + ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_2" mxc="[';
    $line = 6;
    $art = ':number{max:30}';
    ;
    $p += '{p:\'number\',f:{max:30}}]" class="input mr20 mb20" placeholder="数字不能大于30" value="';
    $line = 6;
    $art = ':number{max:30}';
    ;
    $p += '' + ($expr = '<%=number%>', $e(number)) + '"/></div></div><div mxa="_zs_gallerya;:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya;:_" class="_zs_gallery___test___layout_-eg-title">数字范围</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 11;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya;:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 13;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya;:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input" placeholder="4到8之间的数字" value="&#123;&#123;:number&#123;range:[4, 8]&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="数字不能小于20" value="&#123;&#123;:number&#123;min:20&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="数字不能大于30" value="&#123;&#123;:number&#123;max:30&#125;&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/7.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            rules: {
                required: true
            }
        });
    }
});

});