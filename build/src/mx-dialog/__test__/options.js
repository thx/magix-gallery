/*
    generate by magix-combine@3.11.25: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-dialog/__test__/options",["magix","$","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
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
    $p += '<div mxv="options" class="mb40" mx-view="__test__/api?options=';
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
    msg += $expr + '\r\n\tat file:mx-dialog/__test__/options.html';
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
                desc: "\u6253\u5F00\u6D6E\u5C42\u65F6\u662F\u5426\u6709\u6DF1\u8272\u900F\u660E\u5EA6\u906E\u7F69\uFF0C\u4E0D\u9700\u8981\u8BF7\u624B\u52A8false\u5173\u95ED\n<div class=\"color-brand\">\u6CE8\u610F mask=false \u60C5\u51B5\u4E0B\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u81EA\u52A8\u5173\u95ED\u6D6E\u5C42</div>",
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
            }];
        that.updater.digest({
            options: options
        });
    }
});

});