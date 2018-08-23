/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-search/__test__/index",["magix","$","mx-title/second","./1","./2","./3","./4","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
require("./2");
require("./3");
require("./4");
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
    $p += '<div mxs="_zs_gallerybV:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerybV:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-search/__test__/1"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-search/__test__/2"></div><div mx-view="mx-search/__test__/3"></div><div mx-view="mx-search/__test__/4"></div></div></div><div mxs="_zs_gallerybV:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 14;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-search/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: '可搜素类型列表，例如[{text:\'计划\',value:\'campaign\'}]',
                type: 'array',
                def: ''
            }, {
                key: 'list-text',
                desc: '可搜索类型展示文案',
                type: 'string',
                def: 'text'
            }, {
                key: 'list-value',
                desc: '可搜索类型对应的key值',
                type: 'string',
                def: 'value'
            }, {
                key: 'search-key',
                desc: '当前选中的搜索值，对应list-value的某个值',
                type: 'string',
                def: ''
            }, {
                key: 'search-value',
                desc: '搜索框的输入文案',
                type: 'string',
                def: ''
            }, {
                key: 'align',
                desc: '左对齐还是右对齐，left or right',
                type: 'string',
                def: 'left'
            }, {
                key: 'placeholder',
                desc: '提示文案',
                type: 'string',
                def: '配置了placeholder，显示placeholder，否则<br>配置了list，默认显示list-text.join(\'/\')<br>单个类型搜索默认显示搜素'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});