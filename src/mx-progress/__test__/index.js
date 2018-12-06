/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-progress/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
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
} ; var $g = '', $_temp, $p = ''; var $expr, $art, $line; try {
    $p += '<h2 mxs="_G:_">mx-progress</h2><h3 mxs="_G:a">默认情形</h3><div mxs="_G:b" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-progress/index?value=0.36"></div></div><div mxs="_G:c" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-progress\n    value="0.36"\n    class="fl"/&gt;</pre></div><h3 mxs="_G:d" class="__mx-style_index_-mt30">禁用</h3><div mxs="_G:e" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-fl" mx-view="mx-progress/index?value=0.05&disabled=true"></div></div><div mxs="_G:f" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-progress\n    value="0.05"\n    disabled="true"\n    class="fl"/&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-progress/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});