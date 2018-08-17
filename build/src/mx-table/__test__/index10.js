/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/index10",["magix","$","mx-title/second","./8","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./8");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_galleryb|:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryb|:a" class="mb20 clearfix"><div mx-view="mx-table/__test__/8"></div></div><div mxv mxa="_zs_galleryb|:_" class="mb40"><div mxs="_zs_galleryb|:b" mx-view="mx-title/second?content=%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 8;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i(options)) + '"></div></div><div mxs="_zs_galleryb|:c" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryb|:d" class="pr20"><table class="table _zs_gallery___test___base_-desc-table"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>sort</td><td>mixin中实现本页排序，如果从接口获取排序则忽略此方法</td></tr></tbody></table></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/index10.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'orderField',
                desc: '排序字段',
                type: 'string'
            }, {
                key: 'orderBy',
                desc: '排序方式，降序（desc），升序（asc）',
                type: 'string',
                def: 'desc'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});