/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/3",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, name = $$.name, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya5:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerya5:a" class="_zs_gallery___test___base_-eg-content"><div mxv mxa="_zs_gallerya5:b" class="mb20"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 4;
    $art = ':name{pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}';
    ;
    $p += '{p:\'name\',f:{pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}}]" class="input w280 mr60" placeholder="正则：汉字/字母/数字/下划线" value="';
    $line = 4;
    $art = ':name{pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}';
    ;
    $p += '' + ($expr = '<%=name%>', $e(name)) + '"/> <input mxe="' + $viewId + '_1" mxc="[';
    $line = 5;
    $art = ':name{pattern:[\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'只支持汉字、字母、数字、下划线\']}';
    ;
    $p += '{p:\'name\',f:{pattern:[\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'只支持汉字、字母、数字、下划线\']}}]" class="input w280" placeholder="正则自定义提示：汉字/字母/数字/下划线" value="';
    $line = 5;
    $art = ':name{pattern:[\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'只支持汉字、字母、数字、下划线\']}';
    ;
    $p += '' + ($expr = '<%=name%>', $e(name)) + '"/></div></div><div mxa="_zs_gallerya5:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerya5:_" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 10;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya5:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 12;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya5:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input w280" placeholder="正则：汉字/字母/数字/下划线" \n    value="&#123;&#123;:name&#123;pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'&#125;"/&gt;\n\n&lt;input class="input w280" placeholder="正则自定义提示：汉字/字母/数字/下划线" \n    value="&#123;&#123;:name&#123;pattern:[\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'只支持汉字、字母、数字、下划线\']&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/3.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest();
    }
});

});