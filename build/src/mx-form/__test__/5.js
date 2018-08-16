/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/5",["magix","__test__/example","$","mx-tabs/box","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-tabs/box");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerya0:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_gallerya0:a" class="_zs_gallery___test___base_-eg-content"><div mx-view="mx-tabs/box?list=';
    $line = 4;
    $art = '@[{\n                name: \'模块1\',\n                id: 1\n            },{\n                name: \'模块2\',\n                id: 2\n            }]';
    ;
    $p += '' + ($expr = '<%@[{name:\'模块1\',id:1},{name:\'模块2\',id:2}]%>', $i([{ name: '模块1', id: 1 }, { name: '模块2', id: 2 }])) + '&valueKey=id&textKey=name"></div></div><div mxa="_zs_gallerya0:b" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerya0:_" class="_zs_gallery___test___base_-eg-title">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya0:c" class="_zs_gallery___test___base_-desc-tip">';
    $line = 18;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya0:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-tabs.box\n    list="&#123;&#123;@[&#123;\n        name: \'模块1\',\n        id: 1\n    &#125;,&#123;\n        name: \'模块2\',\n        id: 2\n    &#125;]&#125;&#125;"\n    value-key="id"\n    text-key="name"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/5.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});