/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/11",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', checkboxes = $$.checkboxes, selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerybJ:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerybJ:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_gallerybJ:b" class="mb20"><span mxs="_zs_gallerybJ:_" class="color-9 mr20">checkbox至少选择一个：</span>';
    $line = 5;
    $art = 'each checkboxes as c';
    ;
    $expr = '<%for (var $art_iscehfkh$art_i = 0, $art_cxdfyzmfbob$art_c = checkboxes.length; $art_iscehfkh$art_i < $art_cxdfyzmfbob$art_c; $art_iscehfkh$art_i++) {    var c = checkboxes[$art_iscehfkh$art_i]%>';
    for (var $art_iscehfkh$art_i = 0, $art_cxdfyzmfbob$art_c = checkboxes.length; $art_iscehfkh$art_i < $art_cxdfyzmfbob$art_c; $art_iscehfkh$art_i++) {
        var c = checkboxes[$art_iscehfkh$art_i];
        $p += '<label mxv mxa="_zs_gallerybJ:c" class="mr30"><input mxe="' + $viewId + '_0" mxc="[';
        $line = 8;
        $art = ':selected{required:[true,\'必选\']}';
        ;
        $p += '{p:\'selected\',f:{required:[true,\'必选\']}}]" type="checkbox" name="cb" value="';
        $line = 7;
        $art = '=c';
        ;
        $p += ($expr = '<%=c%>', $e(c)) + '" class="checkbox"/>';
        $line = 9;
        $art = '=c';
        ;
        $p += ($expr = '<%=c%>', $e(c)) + '</label>';
        $line = 11;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_gallerybJ:d" class="clearfix"><div mxa="_zs_gallerybJ:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerybJ:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybJ:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybJ:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="mb20"&gt;\n    &#123;&#123;each checkboxes as c&#125;&#125;\n    &lt;label class="mr30"&gt;\n        &lt;input type="checkbox" class="checkbox" \n            name="cb" \n            value="&#123;&#123;=c&#125;&#125;" \n            &#123;&#123;:selected&#123;required:[true,\'必选\']&#125;&#125;&#125; /&gt;\n        &#123;&#123;=c&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerybJ:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerybJ:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 37;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerybJ:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 39;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerybJ:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 42;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../mx-form/index\');\nlet Validator = require(\'@../mx-form/validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            selected: [\'checkbox1\'],\n            checkboxes: [\'checkbox1\', \'checkbox2\', \'checkbox3\']\n        });\n    }\n});</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/11.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            selected: ['checkbox1'],
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3']
        });
    }
});

});