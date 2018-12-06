/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-sitenav/__test__/index",["magix","../index","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../index");
require("__test__/hl");
/*
ver:2.0.6
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
} ; var $g = '', $_temp, $p = '', mode = $$.mode; var $expr, $art, $line; try {
    $p += '<h2 mxs="_H:_">mx-sitenav</h2><div mxa="_H:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div style="height:50px;" mx-view="mx-sitenav/index?mode=' + ($expr = '<%!$eu(mode)%>', $eu(mode)) + '"></div></div><div mxa="_H:a" class="__mx-style_index_-pt20"><div mxs="_H:a">HTML Code:</div>';
    $expr = '<%if (mode == \'simple\') {%>';
    if (mode == 'simple') {
        ;
        $p += '<pre mxs="_H:b" mx-view="__test__/hl">\n&lt;mx-sitenav mode="simple" style="height:50px;" /&gt;</pre>';
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += '<pre mxs="_H:c" mx-view="__test__/hl">\n&lt;mx-sitenav style="height:50px;" /&gt;</pre>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-sitenav/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            mode: Magix.Router.parse().get('mode')
        });
    }
});

});