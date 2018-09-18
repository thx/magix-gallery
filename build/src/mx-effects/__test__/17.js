/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/17",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', checkboxes = $$.checkboxes, selected = $$.selected, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryaU:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryaU:a" class="_zs_gallery___test___layout_-eg-content">';
    $line = 3;
    $art = 'each checkboxes as c';
    ;
    $p += '';
    $expr = '<%for (var $art_itsrma$art_i = 0, $art_cdvcjucbke$art_c = checkboxes.length; $art_itsrma$art_i < $art_cdvcjucbke$art_c; $art_itsrma$art_i++) {    var c = checkboxes[$art_itsrma$art_i]%>';
    for (var $art_itsrma$art_i = 0, $art_cdvcjucbke$art_c = checkboxes.length; $art_itsrma$art_i < $art_cdvcjucbke$art_c; $art_itsrma$art_i++) {
        var c = checkboxes[$art_itsrma$art_i];
        $p += '<label mxv mxa="_zs_galleryaU:b" class="mr30"><input mxe="' + $viewId + '_0" mxc="[';
        $line = 8;
        $art = ':selected.checkboxes{refresh:true,required:[true,\'必选\']}';
        ;
        $p += '{p:\'selected.checkboxes\',f:{refresh:true,required:[true,\'必选\']}}]" type="checkbox" class="anim-checkbox" name="cb" value="';
        $line = 7;
        $art = '=c';
        ;
        $p += '' + ($expr = '<%=c%>', $e(c)) + '"/>';
        $line = 9;
        $art = '=c';
        ;
        $p += '' + ($expr = '<%=c%>', $e(c)) + '</label>';
        $line = 11;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxa="_zs_galleryaU:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaU:_" class="_zs_gallery___test___layout_-eg-title">自定义颜色</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaU:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 17;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaU:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.icon \n    color="#51a300" \n    content="测试"/&gt;\n    \n&lt;mx-effects.icon \n    mode="hollow" \n    color="#51a300" \n    content="测试"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/17.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],
            selected: {
                checkboxes: ['checkbox1']
            }
        });
    }
});

});