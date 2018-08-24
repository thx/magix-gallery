/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/9",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', bool = $$.bool, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya(:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerya(:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_gallerya(:_" class="mb20"><span class="color-9">以下示例：</span>配置refresh:true，数据改变的时候，刷新view</div><div mxv mxa="_zs_gallerya(:b" class="clearfix mb20"><label mxv mxa="_zs_gallerya(:c" class="fl mr20 lh32"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 10;
    $art = ':bool{refresh:true}';
    ;
    $p += '{p:\'bool\',f:{refresh:true}}]" type="checkbox" name="bool" class="checkbox" ';
    $line = 11;
    $art = 'if bool';
    ;
    $p += '';
    $expr = '<%if (bool) {%>';
    if (bool) {
        ;
        $p += ' checked="true" ';
        $line = 11;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '/>切换控制input的显示与隐藏</label>';
    $line = 13;
    $art = 'if bool';
    ;
    $p += '';
    $expr = '<%if (bool) {%>';
    if (bool) {
        ;
        $p += '<input mxs="_zs_gallerya(:a" class="fl input"/>';
        $line = 15;
        $art = '/if';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_gallerya(:d" class="clearfix"><div mxa="_zs_gallerya(:e" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half"><div mxs="_zs_gallerya(:b" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya(:f" class="_zs_gallery___test___base_-desc-tip">';
    $line = 23;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya(:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;label class="fl mr20 lh32"&gt;\n        &lt;input type="checkbox" name="bool" class="checkbox"\n            &#123;&#123;:bool&#123;refresh:true&#125;&#125;&#125;  \n            &#123;&#123;if bool&#125;&#125; checked="true" &#123;&#123;/if&#125;&#125;/&gt;\n            切换控制input的显示与隐藏\n    &lt;/label&gt;\n    &#123;&#123;if bool&#125;&#125;\n    &lt;input type="text" class="fl input"/&gt;\n    &#123;&#123;/if&#125;&#125; \n&lt;/div&gt;</pre></div><div mxa="_zs_gallerya(:g" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half _zs_gallery___test___base_-half-right"><div mxs="_zs_gallerya(:d" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 41;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya(:h" class="_zs_gallery___test___base_-desc-tip">';
    $line = 43;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya(:c" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 46;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../index\');\nlet Validator = require(\'@../validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            bool: true\n        });\n    }\n});</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/9.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest({
            bool: true
        });
    }
});

});