/*
    generate by magix-combine@3.11.16: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/pro/cross",["magix","$","mx-effects/notice","mx-title/second"],(require,exports,module)=>{
/*Magix,$*/
require("mx-effects/notice");
require("mx-title/second");
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
} ; var $g = '', $_temp, $p = '', content = $$.content; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryd:_" class="pr20"><div class="mb20" mx-view="mx-effects/notice?content=';
    $line = 3;
    $art = '=content';
    ;
    $p += '' + ($expr = '<%!$eu(content)%>', $eu(content)) + '&border=true&icon=false"></div><div mxs="_zs_galleryd:_" mx-view="mx-title/second?content=%E7%9B%AE%E5%BD%95%E7%BA%A6%E5%AE%9A"></div><div mxs="_zs_galleryd:a" class="mb40" mx-view="mx-effects/notice?content=%E7%9B%AE%E5%BD%95%E7%BA%A6%E5%AE%9A&border=true&icon=false"></div><div mxs="_zs_galleryd:b" mx-view="mx-title/second?content=%E6%8E%A5%E5%8F%A3%E5%AF%B9%E6%8E%A5"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/pro/cross.html';
    throw msg;
} return $p; },
    render: function () {
        var content = [
            '1. 使用magix提供的vframe功能，允许项目间类似iframe那样引用对方的view。',
            '2. 可将复杂的项目进行拆分成n个子项目进行维护。',
            '3. 被加载项目使用加载项目的组件及品牌色。'
        ].join('<br/>');
        this.updater.digest({
            content: content
        });
    }
});

});