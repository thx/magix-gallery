/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydO:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerydO:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerydO:_" class="mb10 clearfix"><span class="color-9">以下示例：</span>自定义搜索列表文案</div><div><div class="w200" mx-view="mx-search/index?list=';
    $line = 9;
    $art = '@[{\n                    text: \'优惠券id\',\n                    value: \'id\',\n                    tmpl: \'搜索id含有“${content}”的优惠券\'\n                }, {\n                    text: \'优惠券名称\',\n                    value: \'name\',\n                    tmpl: \'搜索名称含有“${content}”的优惠券\'\n                }]';
    ;
    $p += ($expr = '<%@[{            text: \'优惠券id\',            value: \'id\',            tmpl: \'搜索id含有“${content}”的优惠券\'        }, {            text: \'优惠券名称\',            value: \'name\',            tmpl: \'搜索名称含有“${content}”的优惠券\'        }]%>', $i($$ref, [{ text: '优惠券id', value: 'id', tmpl: '搜索id含有“${content}”的优惠券' }, { text: '优惠券名称', value: 'name', tmpl: '搜索名称含有“${content}”的优惠券' }])) + '"></div></div></div><div mxa="_zs_gallerydO:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydO:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 22;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydO:c" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 24;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydO:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-search class="w200"\n    list="&#123;&#123;@[&#123;\n        text: \'优惠券id\',\n        value: \'id\',\n        tmpl: \'搜索id含有“$&#123;content&#125;”的优惠券\'\n    &#125;, &#123;\n        text: \'优惠券名称\',\n        value: \'name\',\n        tmpl: \'搜索名称含有“$&#123;content&#125;”的优惠券\'\n    &#125;]&#125;&#125;" /&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-search/__test__/5.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});