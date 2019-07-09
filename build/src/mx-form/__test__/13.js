/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/13",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-dropdown/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("mx-dropdown/index");
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
} ; var $g = '', $_temp, $p = '', day = $$.day, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryb\\:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryb\\:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_galleryb\\:b" class="mb20"><span mxs="_zs_galleryb\\:_" class="color-9 mr20">dropdown必选（请选择为空状态提示）：</span><div mxv="day" mxe="' + $viewId + '_0" mxc="[';
    $line = 7;
    $art = ':day{required:true}';
    ;
    $p += '{p:\'day\',f:{required:true},a:\'selected\'}]" class="w200" mx-view="mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected=';
    $line = 7;
    $art = ':day{required:true}';
    ;
    $p += ($expr = '<%@day%>', $i($$ref, day)) + '"><i mxs="_zs_galleryb\\:a" value="1" class="none">1</i><i mxs="_zs_galleryb\\:b" value="2" class="none">2</i></div></div></div><div mxa="_zs_galleryb\\:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb\\:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb\\:d" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 17;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb\\:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-dropdown class="w200"\n    empty-text="请选择"\n    selected="&#123;&#123;:day&#123;required:true&#125;&#125;&#125;"&gt;\n    &lt;mx-dropdown.item value="1"&gt;1&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="2"&gt;2&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/13.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest();
    }
});

});