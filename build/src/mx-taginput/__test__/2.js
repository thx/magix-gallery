/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
    $p += '<div mxa="_zs_gallerycn:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_gallerycn:a" class="_zs_gallery___test___base_-eg-content"><div mx-view="mx-taginput/index?list=';
    $line = 4;
    $art = '@[{\n                name: \'test1\',\n                id: 1\n            }, {\n                name: \'test2\',\n                id: 2\n            }, {\n                name: \'test3\',\n                id: 3\n            }]';
    ;
    $p += '' + ($expr = '<%@[{name:\'test1\',id:1},{name:\'test2\',id:2},{name:\'test3\',id:3}]%>', $i([{ name: 'test1', id: 1 }, { name: 'test2', id: 2 }, { name: 'test3', id: 3 }])) + '&selected=1&textKey=name&valueKey=id"></div></div><div mxa="_zs_gallerycn:b" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycn:_" class="_zs_gallery___test___base_-eg-title">自定义&nbsp;list-text=&nbsp;和&nbsp;list-value</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycn:c" class="_zs_gallery___test___base_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycn:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-taginput\n    list="&#123;&#123;@[&#123;\n        name: \'test1\',\n        id: 1\n    &#125;, &#123;\n        name: \'test2\',\n        id: 2\n    &#125;, &#123;\n        name: \'test3\',\n        id: 3\n    &#125;]&#125;&#125;"\n    selected="1"\n    text-key="name"\n    value-key="id"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});