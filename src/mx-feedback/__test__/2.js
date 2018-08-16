/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-feedback/__test__/2",["magix","__test__/example","$","mx-search/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-search/index");
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
    $p += '<div mxa="_zs_galleryaI:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryaI:a" class="_zs_gallery___test___base_-eg-content"><div class="w200" mx-view="mx-search/index?list=';
    $line = 4;
    $art = '@[{\n                name: \'计划\',\n                id: \'campaignId\'\n            }, {\n                name: \'单元\',\n                id: \'adgroupId\'\n            }]';
    ;
    $p += '' + ($expr = '<%@[{name:\'计划\',id:\'campaignId\'},{name:\'单元\',id:\'adgroupId\'}]%>', $i([{ name: '计划', id: 'campaignId' }, { name: '单元', id: 'adgroupId' }])) + '&listText=name&listValue=id"></div></div><div mxa="_zs_galleryaI:b" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryaI:_" class="_zs_gallery___test___base_-eg-title">自定义&nbsp;list-text=&nbsp;和&nbsp;list-value</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaI:c" class="_zs_gallery___test___base_-desc-tip">';
    $line = 18;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaI:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-search class="w200"\n    list="&#123;&#123;@[&#123;\n        name: \'计划\',\n        id: \'campaignId\'\n    &#125;, &#123;\n        name: \'单元\',\n        id: \'adgroupId\'\n    &#125;]&#125;&#125;"\n    list-text="name"\n    list-value="id"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-feedback/__test__/2.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});