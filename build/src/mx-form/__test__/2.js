/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/2",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, name = $$.name, rules = $$.rules, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya4:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerya4:a" class="_zs_gallery___test___base_-eg-content"><div mxv mxa="_zs_gallerya4:b" class="mb20"><span mxs="_zs_gallerya4:c" class="color-9 mr20">必填项：</span><input mxe="' + $viewId + '_0" mxc="[';
    $line = 5;
    $art = ':name{required:true}';
    ;
    $p += '{p:\'name\',f:{required:true}}]" class="input mr20" placeholder="必填项" value="';
    $line = 5;
    $art = ':name{required:true}';
    ;
    $p += '' + ($expr = '<%=name%>', $e(name)) + '"/> <input mxe="' + $viewId + '_1" mxc="[';
    $line = 6;
    $art = ':name&rules';
    ;
    $p += '{p:\'name\',f:\'' + ($expr = '<%@rules%>', $i(rules)) + '\'}]" class="input mr20" placeholder="必填项" value="';
    $line = 6;
    $art = ':name&rules';
    ;
    $p += '' + ($expr = '<%=name%>', $e(name)) + '"/> <input mxe="' + $viewId + '_2" mxc="[';
    $line = 7;
    $art = ':name{placement:\'left\',required:true}';
    ;
    $p += '{p:\'name\',f:{placement:\'left\',required:true}}]" class="input mr20" placeholder="必填项，提示在左侧" value="';
    $line = 7;
    $art = ':name{placement:\'left\',required:true}';
    ;
    $p += '' + ($expr = '<%=name%>', $e(name)) + '"/></div></div><div mxa="_zs_gallerya4:d" class="clearfix"><div mxa="_zs_gallerya4:h" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half"><div mxs="_zs_gallerya4:_" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya4:i" class="_zs_gallery___test___base_-desc-tip">';
    $line = 15;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya4:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input" placeholder="必填项" \n    value="&#123;&#123;:name&#123;required:true&#125;&#125;&#125;"/&gt;\n    \n&lt;input class="input" placeholder="必填项" \n    value="&#123;&#123;:name&rules&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="必填项，提示在左侧" \n    value="&#123;&#123;:name&#123;placement:\'left\',required:true&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_gallerya4:j" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half _zs_gallery___test___base_-half-right"><div mxs="_zs_gallerya4:b" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 30;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya4:k" class="_zs_gallery___test___base_-desc-tip">';
    $line = 32;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya4:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../index\');\nlet Validator = require(\'@../validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            rules: &#123;\n                required:true\n            &#125;\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/2.html';
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