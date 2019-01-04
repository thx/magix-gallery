/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/6",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', number = $$.number, viewId = $$.viewId, text1 = $$.text1; $p += '<div mxv mxa="_zs_gallerybB:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerybB:a" class="_zs_galleryk"><div mxv mxa="_zs_gallerybB:b" class="clearfix"><input mxe="' + $viewId + '_0" mxc="[{p:\'number\',f:{blength:[4, 8]}}]" class="input mr20 mb20" placeholder="4到8个字符之间" value="' + $e(number) + '"/> <input mxe="' + $viewId + '_1" mxc="[{p:\'number\',f:{bminlength:2}}]" class="input mr20 mb20" placeholder="最少2个字符" value="' + $e(number) + '"/> <input mxe="' + $viewId + '_2" mxc="[{p:\'number\',f:{bmaxlength:3}}]" class="input mr20 mb20" placeholder="最多3个字符" value="' + $e(number) + '"/></div></div><div mxa="_zs_gallerybB:c" class="_zs_galleryl"><div mxs="_zs_gallerybB:_" class="_zs_galleryj">字符个数（一个汉字两个字符）</div><div class="_zs_gallerym" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=' + $eu(viewId) + '_text_1"><span mxa="_zs_gallerybB:d" class="_zs_galleryo">' + $n(text1) + '</span><i mxs="_zs_gallerybB:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="' + $e(viewId) + '_text_1">\n&lt;input class="input" placeholder="4到8个字之间" value="&#123;&#123;:number&#123;blength:[4, 8]&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="最少2个字" value="&#123;&#123;:number&#123;bminlength:2&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="最多3个字" value="&#123;&#123;:number&#123;bmaxlength:3&#125;&#125;&#125;"/&gt;</pre></div></div>'; return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest();
    }
});

});