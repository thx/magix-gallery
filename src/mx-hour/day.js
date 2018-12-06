/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/day",["magix","$","./index"],(require,exports,module)=>{
/*Magix,$,Core*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Core = require("./index");
Magix.applyStyle("__mx-hour_day_","/* @dependent: ./index.less */\n.__mx-hour_day_-reset {\n  padding: 0;\n  height: 38.4px;\n  text-align: center;\n}\n");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId; var $expr, $art, $line; try {
    $p += '<table mxa="_$:_" class="__mx-style_index_-wp100"><thead><tr>';
    $expr = '<%for (var i = 0; i < 24; i++) {%>';
    for (var i = 0; i < 24; i++) {
        ;
        $p += '<th mxa="_$:a" class="__mx-hour_day_-reset">' + ($expr = '<%=(\'0\' + i).slice(-2)%>', $e(('0' + i).slice(-2))) + '</th>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody id="range_' + ($expr = '<%=viewId%>', $e(viewId)) + '" mx-view="mx-hour/index" mx-change="' + $viewId + '@{hour}()"></tbody></table>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-hour/day.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{hours}'] = extra.hours;
        me['@{owner.node}'] = $('#' + me.id);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
        me.val(me['@{hours}']);
    },
    val: function (hours) {
        var me = this;
        if (hours) {
            me['@{hours}'] = Core.improve(hours);
            $('#range_' + me.id).invokeView('val', [hours]);
        }
        return me['@{hours}'];
    },
    '@{hour}<change>': function (e) {
        var me = this;
        e.stopPropagation();
        me['@{hours}'] = e.range;
        me['@{owner.node}'].val(e.range).trigger({
            type: 'change',
            hours: e.range
        });
    }
});

});