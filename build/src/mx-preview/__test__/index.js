/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/__test__/index",["magix","$","mx-title/second","./1","./3","./2","./4","./5","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./1");
require("./3");
require("./2");
require("./4");
require("./5");
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
    $p += '<div mxs="_zs_gallerybK:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerybK:a" class="clearfix mb20"><div class="_zs_gallery___test___base_-half"><div mx-view="mx-preview/__test__/1"></div><div mx-view="mx-preview/__test__/3"></div></div><div class="_zs_gallery___test___base_-half"><div mx-view="mx-preview/__test__/2"></div><div mx-view="mx-preview/__test__/4"></div><div mx-view="mx-preview/__test__/5"></div></div></div><div mxs="_zs_gallerybK:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 15;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'format',
                desc: '展示类型，不配置类型默认展示为纯文本<br>2：图片<br>4：视频<br>5：文字链<br>10：html<br>23：套图',
                type: 'number',
                def: 5
            }, {
                key: 'url',
                desc: '展示内容<br>2：图片链接<br>4：视频链接<br>5：文本<br>10：html链接',
                type: 'string',
                def: ''
            }, {
                key: 'width',
                desc: '预览实际宽度<br>会根据当前屏幕的可视范围进行修正',
                type: 'number',
                def: 640
            }, {
                key: 'height',
                desc: '预览实际高度',
                type: 'number',
                def: '自适应'
            }, {
                key: 'max-width',
                desc: '缩略图最大宽度',
                type: 'number',
                def: 100
            }, {
                key: 'max-height',
                desc: '缩略图最大高度',
                type: 'number',
                def: '100'
            }, {
                key: 'datu-url',
                desc: '套图大图',
                type: 'string',
                def: ''
            }, {
                key: 'xiaotu-url',
                desc: '套图小图',
                type: 'string',
                def: ''
            }, {
                key: 'click-url',
                desc: '预览内容可配置点击外链的format<br>2：图片<br>4：视频<br>5：文字链<br>23：套图',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});

});