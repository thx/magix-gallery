/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/icon",["magix","$","mx-title/second","./14","./15","./16","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./14");
require("./15");
require("./16");
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
    $p += '<div mxs="_zs_gallerya6:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerya6:a" class="clearfix mb20"><div class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/14"></div><div mx-view="mx-effects/__test__/15"></div></div><div class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/16"></div></div></div><div mxs="_zs_gallerya6:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 13;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/icon.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'mode',
                desc: 'icon类型，可选实心打标（solid），空心打标（hollow）',
                type: 'string',
                def: 'solid'
            }, {
                key: 'type',
                desc: [
                    '展示类型',
                    'error：红色错误类型提示',
                    'warn：黄色警告类型提示',
                    'highlight：品牌色图标强调提示'
                ].join('<br>'),
                type: 'string',
                def: '默认灰色提示'
            }, {
                key: 'color',
                desc: '自定义颜色',
                type: 'hex格式色号',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    }
});

});