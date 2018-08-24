/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-header/__test__/index",["magix","$","mx-title/second","./1","./2","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
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
    $p += '<div mxs="_zs_gallerya|:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerya|:a" class="clearfix mb20"><div mx-view="mx-header/__test__/1"></div><div mx-view="mx-header/__test__/2"></div></div><div mxs="_zs_gallerya|:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 8;
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
                desc: '导航数组[{text:"展示文案",value:"value值"}]',
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