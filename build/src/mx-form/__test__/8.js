/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/8",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, id = $$.id, name = $$.name, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya8:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerya8:a" class="_zs_gallery___test___base_-eg-content"><div mxv mxa="_zs_gallerya8:b" class="mb20"><input class="input mr60" placeholder="节点1" id="';
    $line = 4;
    $art = '=id';
    ;
    $p += '' + ($expr = '<%=id%>', $e(id)) + '"/> <input mxe="' + $viewId + '_0" mxc="[';
    $line = 5;
    $art = ':name{equalto:id}';
    ;
    $p += '{p:\'name\',f:{equalto:\'' + ($expr = '<%@id%>', $i(id)) + '\'}}]" class="input mr60" placeholder="同节点1" value="';
    $line = 5;
    $art = ':name{equalto:id}';
    ;
    $p += '' + ($expr = '<%=name%>', $e(name)) + '"/> <input mxe="' + $viewId + '_1" mxc="[';
    $line = 6;
    $art = ':name{equalto:[id,\'自定义提示\']}';
    ;
    $p += '{p:\'name\',f:{equalto:[\'' + ($expr = '<%@id%>', $i(id)) + '\',\'自定义提示\']}}]" class="input mr60" placeholder="同节点1，自定义提示" value="';
    $line = 6;
    $art = ':name{equalto:[id,\'自定义提示\']}';
    ;
    $p += '' + ($expr = '<%=name%>', $e(name)) + '"/></div></div><div mxa="_zs_gallerya8:c" class="clearfix"><div mxa="_zs_gallerya8:d" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half"><div mxs="_zs_gallerya8:_" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 12;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya8:e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 14;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya8:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input" placeholder="节点1" \n    id="&#123;&#123;=id&#125;&#125;"/&gt;\n\n&lt;!-- 双向绑定支持绑定动态参数，如下绑定动态id --&gt;\n&lt;input class="input" placeholder="同节点1" \n    value="&#123;&#123;:name&#123;equalto:id&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="同节点1，自定义提示" \n    value="&#123;&#123;:name&#123;equalto:[id,\'自定义提示\']&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_gallerya8:f" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half _zs_gallery___test___base_-half-right"><div mxs="_zs_gallerya8:b" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 30;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerya8:g" class="_zs_gallery___test___base_-desc-tip">';
    $line = 32;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerya8:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 35;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../index\');\nlet Validator = require(\'@../validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend({\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            id: this.id + \'_node\'\n        });\n    }\n});</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/8.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        var id = this.id + '_node';
        this.updater.digest({
            id: id
        });
    }
});

});