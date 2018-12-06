/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-time/__test__/picker",["magix","../picker","__test__/hl"],(require,exports,module)=>{
/*Magix*/
require("../picker");
require("__test__/hl");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var c = 10;
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
} ; var $g = '', $_temp, $p = '', time = $$.time; var $expr, $art, $line; try {
    $p += '<h2 mxs="_O:_">mx-time.picker</h2><div mxa="_O:_" class="__mx-style_index_-pt20 __mx-style_index_-clearfix"><div class="__mx-style_index_-input" mx-view="mx-time/picker?value=';
    $line = 4;
    $art = '=time';
    ;
    $p += ($expr = '<%!$eu(time)%>', $eu(time)) + '&types=hour%2Cminute"></div></div><div mxs="_O:a" class="__mx-style_index_-pt20"><div>HTML Code:</div><pre mx-view="__test__/hl">&lt;mx-time.picker\n    value="18:26:00"\n    class="input"\n    types="hour,minute" /&gt;</pre></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-time/__test__/picker.html';
    throw msg;
} return $p; },
    render: function () {
        var me = this;
        me.updater.digest({
            time: '18:00:30'
        });
    },
    'update<click>': function () {
        this.updater.digest({
            time: '19:00:' + c++
        });
    }
});

});