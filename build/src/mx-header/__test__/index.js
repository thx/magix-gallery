/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/__test__/index",["magix","$","mx-effects/notice","mx-title/second","./1","./2","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-effects/notice");
require("mx-title/second");
require("./1");
require("./2");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerybk:_" class="mb20 mr20" mx-view="mx-effects/notice?content=%E9%A1%B5%E9%9D%A2%E6%95%B0%E6%8D%AE%E9%85%8D%E7%BD%AE%E5%9C%A8alp%EF%BC%8CLego2%E6%B8%B2%E6%9F%93%E5%B1%82%E5%AF%B9jsonp%E8%BF%9B%E8%A1%8Creferer%E6%A0%A1%E9%AA%8C%EF%BC%8C%E6%9C%AC%E5%9C%B0%E6%B5%8B%E8%AF%95%E7%9A%84%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81%E7%BB%91%E4%B8%AA%E7%B1%BB%E4%BC%BC%E4%BA%8E%20xxx.taobao.com%20%E7%9A%84host%EF%BC%8C%E5%90%A6%E5%88%99%E4%B8%8D%E4%BC%9A%E6%AD%A3%E5%B8%B8%E8%BF%94%E5%9B%9E%E3%80%82&type=highlight&border=true"></div><div mxs="_zs_gallerybk:a" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerybk:b" class="clearfix mb20"><div mx-view="mx-header/__test__/1"></div><div mx-view="mx-header/__test__/2"></div></div><div mxs="_zs_gallerybk:c" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 13;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-header/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'width',
                desc: '导航中间区域宽度，默认1184，会根据屏幕宽度进行修正',
                type: 'number',
                def: 1184
            }, {
                key: 'navs',
                desc: "\u5BFC\u822A\u6570\u7EC4<pre>[{\n    text:\"\u5C55\u793A\u6587\u6848\",\n    value:\"value\u503C\"\n}]</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'cur',
                desc: '当前哪个导航，对应navs的value，默认不选中任何一个导航',
                type: 'string',
                def: ''
            }, {
                key: 'wrapper',
                desc: '导航相对定位的容器节点，默认为window',
                type: 'string',
                def: ''
            }, {
                key: 'logo',
                desc: '项目logo的图片地址',
                type: 'string',
                def: '<img src="//img.alicdn.com/tfs/TB1Zn4Sq1uSBuNjy1XcXXcYjFXa-240-39.png">'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});