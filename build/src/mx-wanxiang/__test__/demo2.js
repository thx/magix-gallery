/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-wanxiang/__test__/demo2",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

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
} ; var $g = '', $_temp, $p = '', path = $$.path; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryet:_" class="pt40 pl20"><div mxs="_zs_galleryet:_" class="mb20">点击小象logo展开收起问答框</div><div mxa="_zs_galleryet:a" class="mb20">当前：路径';
    $line = 3;
    $art = '=path';
    ;
    $p += ($expr = '<%=path%>', $e(path)) + '</div><div mxs="_zs_galleryet:a" class="mb20">路径1：<a class="color-brand" href="#!/wanxiang/demo1">跳转sourceId=432</a></div><div mxs="_zs_galleryet:b" class="mb20">路径2：<a class="color-brand" href="#!/wanxiang/demo2">跳转sourceId=496</a>，跳转到该页面，问答列表刷新</div><div mxs="_zs_galleryet:c" class="mb20">路径3：<a class="color-brand" href="#!/wanxiang/demo3">跳转sourceId=432</a></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-wanxiang/__test__/demo.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            path: 2
        });
    }
});

});