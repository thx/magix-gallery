/*
    generate by magix-combine@3.11.31: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/examples/options",["magix","$","examples/api"],(require,exports,module)=>{
/*Magix,$*/
require("examples/api");
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
    $p += '<div mxv="options" class="mb40" mx-view="examples/api?options=';
    $line = 1;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-dialog/examples/options.html';
    throw msg;
} return $p; },
    render: function () {
        var that = this;
        var options = [{
                key: 'width',
                desc: '浮层宽度',
                type: 'number',
                def: '400'
            }, {
                key: 'height',
                desc: '浮层高度',
                type: 'number',
                def: '400'
            }, {
                key: 'modal',
                desc: '打开浮层时是否禁止滚动',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'mask',
                desc: '打开浮层时是否有深色透明度遮罩，不需要请手动false关闭',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'closable',
                desc: '浮层是否有右上角默认的关闭按钮',
                type: 'boolean',
                def: 'true'
            }, {
                key: 'left',
                desc: '最终定位相对于屏幕左侧',
                type: 'number',
                def: '默认居中'
            }, {
                key: 'top',
                desc: "\u6700\u7EC8\u5B9A\u4F4D\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u9AD8\u4FA7\n<div class=\"color-brand\">\u5982\u679C\u60F3\u76F8\u5BF9\u4E8Etrigger\u5B9A\u4F4D\uFF0C\u8BF7\u51CF\u53BB $(window).scrollTop()</div>",
                type: 'number',
                def: '默认居中，若高度超过屏幕高度则为0'
            }, {
                key: 'target',
                desc: "<pre>\u76F8\u5BF9\u4E8E\u8BE5\u8282\u70B9\u4E0B10px\u5C45\u4E2D\u5BF9\u9F50\uFF0C\u6307\u5B9A\u8282\u70B9\u7684\u60C5\u51B5\u4E0B\u5FFD\u7565left\uFF0Ctop\uFF0C\u53EF\u914D\u5408\u4F7F\u7528offset\u6307\u5B9A\u5FAE\u91CF\u504F\u79FB\ntarget\u652F\u6301\u4F20\u5165 #id\uFF0C.class\uFF0Cid\uFF0C$(node)'</pre>",
                type: '',
                def: ''
            }, {
                key: 'offset',
                desc: "<pre>\u6307\u5B9Atarget\u65F6\u751F\u6548\uFF0C\u5FAE\u91CF\u504F\u79FB \noffset: {\n    left: -10,\n    top: 10\n}</pre>",
                type: 'object',
                def: ''
            }];
        that.updater.digest({
            options: options
        });
    }
});

});