/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-feedback/__test__/3",["magix","__test__/example","$","mx-search/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $p += '<div mxa="_zs_galleryaN:_" class="_zs_gallery___test___base_-example"><div mxa="_zs_galleryaN:a" class="_zs_gallery___test___base_-eg-content"><div class="w300" mx-view="mx-search/index?list=';
    $line = 4;
    $art = '@[{\n                text: \'宝贝\',\n                value: \'itemId\'\n            }, {\n                text: \'单元\',\n                value: \'adgroupId\'\n            }]';
    ;
    $p += '' + ($expr = '<%@[{text:\'宝贝\',value:\'itemId\'},{text:\'单元\',value:\'adgroupId\'}]%>', $i([{ text: '宝贝', value: 'itemId' }, { text: '单元', value: 'adgroupId' }])) + '&searchKey=adgroupId&searchValue=%E8%B6%85%E5%87%BA%E5%8F%B3%E5%AF%B9%E9%BD%90%EF%BC%8C%E6%90%9C%E7%B4%A2%E6%A1%86%E5%9C%A8%E9%A1%B5%E9%9D%A2%E5%8F%B3%E8%BE%B9%E7%BC%98%E6%97%B6%E9%80%82%E7%94%A8&align=right"></div></div><div mxa="_zs_galleryaN:b" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryaN:_" class="_zs_gallery___test___base_-eg-title">内容超出右对齐</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaN:c" class="_zs_gallery___test___base_-desc-tip">';
    $line = 19;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaN:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 22;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-search class="w300"\n    list="&#123;&#123;@[&#123;\n        text: \'宝贝\',\n        value: \'itemId\'\n    &#125;, &#123;\n        text: \'单元\',\n        value: \'adgroupId\'\n    &#125;]&#125;&#125;"\n    search-key="adgroupId"\n    search-value="超出右对齐，搜索框在页面右边缘时适用"\n    align="right"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-feedback/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});