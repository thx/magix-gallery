/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', name = $$.name, rules = $$.rules, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryb#:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryb#:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_galleryb#:b" class="mb20"><span mxs="_zs_galleryb#:_" class="color-9 mr20">必填项：</span><input mxe="' + $viewId + '_0" mxc="[';
    $line = 5;
    $art = ':name{required:true}';
    ;
    $p += '{p:\'name\',f:{required:true}}]" class="input mr20" placeholder="必填项" value="';
    $line = 5;
    $art = ':name{required:true}';
    ;
    $p += ($expr = '<%=name%>', $e(name)) + '"/> <input mxe="' + $viewId + '_1" mxc="[';
    $line = 6;
    $art = ':name&rules';
    ;
    $p += '{p:\'name\',f:\'' + ($expr = '<%@ rules%>', $i($$ref, rules)) + '\'}]" class="input mr20" placeholder="必填项" value="';
    $line = 6;
    $art = ':name&rules';
    ;
    $p += ($expr = '<%=name%>', $e(name)) + '"/> <input mxe="' + $viewId + '_2" mxc="[';
    $line = 7;
    $art = ':name{placement:\'right\',required:true}';
    ;
    $p += '{p:\'name\',f:{placement:\'right\',required:true}}]" class="input mr20" placeholder="必填项，提示在右侧" value="';
    $line = 7;
    $art = ':name{placement:\'right\',required:true}';
    ;
    $p += ($expr = '<%=name%>', $e(name)) + '"/></div></div><div mxa="_zs_galleryb#:c" class="clearfix"><div mxa="_zs_galleryb#:d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryb#:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb#:e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 15;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb#:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input" placeholder="必填项" \n    value="&#123;&#123;:name&#123;required:true&#125;&#125;&#125;"/&gt;\n    \n&lt;input class="input" placeholder="必填项" \n    value="&#123;&#123;:name&rules&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="必填项，提示在右侧" \n    value="&#123;&#123;:name&#123;placement:\'right\',required:true&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryb#:f" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryb#:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 30;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryb#:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 32;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryb#:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../mx-form/index\');\nlet Validator = require(\'@../mx-form/validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            rules: &#123;\n                required:true\n            &#125;\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>';
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