/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
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
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, checkboxes = $$.checkboxes, selected = $$.selected, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya0:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerya0:a" class="_zs_gallery___test___base_-eg-content"><div mxv mxa="_zs_gallerya0:b" class="mb20"><span mxs="_zs_gallerya0:_" class="color-9 mr20">checkbox至少选择一个：</span>';
    $line = 5;
    $art = 'each checkboxes as c';
    ;
    $p += '';
    $expr = '<%for(var $art_ibsndxn$art_i=0;$art_ibsndxn$art_i<checkboxes.length;$art_ibsndxn$art_i++){var c=checkboxes[$art_ibsndxn$art_i]%>';
    for (var $art_ibsndxn$art_i = 0; $art_ibsndxn$art_i < checkboxes.length; $art_ibsndxn$art_i++) {
        var c = checkboxes[$art_ibsndxn$art_i];
        $p += '<label mxv mxa="_zs_gallerya0:c" class="mr30"><input mxe="' + $viewId + '_0" mxc="[';
        $line = 9;
        $art = ':selected{required:[true,\'必选\']}';
        ;
        $p += '{p:\'selected\',f:{required:[true,\'必选\']}}]" type="checkbox" name="cb" value="';
        $line = 7;
        $art = '=c';
        ;
        $p += '' + ($expr = '<%=c%>', $e(c)) + '" class="checkbox" ';
        $line = 8;
        $art = 'if (selected.indexOf(c)>-1)';
        ;
        $p += '';
        $expr = '<%if(selected.indexOf(c)>-1){%>';
        if (selected.indexOf(c) > -1) {
            ;
            $p += ' checked="true" ';
            $line = 8;
            $art = '/if';
            ;
            $p += '';
            $expr = '<%}%>';
        }
        ;
        $p += '/>';
        $line = 10;
        $art = '=c';
        ;
        $p += '' + ($expr = '<%=c%>', $e(c)) + '</label>';
        $line = 12;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_gallerya0:d" class="clearfix"><div mxa="_zs_gallerya0:e" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half"><div mxs="_zs_gallerya0:a" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya0:f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya0:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="mb20"&gt;\n    &#123;&#123;each checkboxes as c&#125;&#125;\n    &lt;label class="mr30"&gt;\n        &lt;input type="checkbox" class="checkbox" \n            name="cb" \n            value="&#123;&#123;=c&#125;&#125;" \n            &#123;&#123;if(selected.indexOf(c)&gt;-1)&#125;&#125; checked="true" &#123;&#123;/if&#125;&#125;\n            &#123;&#123;:selected&#123;required:[true,\'必选\']&#125;&#125;&#125; /&gt;\n        &#123;&#123;=c&#125;&#125;\n    &lt;/label&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/div&gt;</pre></div><div mxa="_zs_gallerya0:g" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half _zs_gallery___test___base_-half-right"><div mxs="_zs_gallerya0:c" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 39;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya0:h" class="_zs_gallery___test___base_-desc-tip">';
    $line = 41;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya0:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 44;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../index\');\nlet Validator = require(\'@../validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            selected: [\'checkbox1\'],\n            checkboxes: [\'checkbox1\', \'checkbox2\', \'checkbox3\']\n        });\n    }\n});</pre></div></div></div>';
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