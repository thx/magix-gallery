/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-progress/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-progress_index_","/* @dependent: ./index.less */\n.__mx-progress_index_-as-input {\n  height: 32px;\n  cursor: default;\n  line-height: 32px;\n  display: inline-block;\n}\n.__mx-progress_index_-rail {\n  height: 4px;\n  background: #eaeaea;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px;\n  top: -2px;\n}\n.__mx-progress_index_-tracker {\n  height: 4px;\n  background: #f96447;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 2px;\n  transition: all 0.15s;\n}\n.__mx-progress_index_-pointer-label {\n  position: absolute;\n  font-size: 9px;\n  pointer-events: none;\n  top: -15px;\n  transition: all 0.15s;\n  line-height: normal;\n}\n.__mx-progress_index_-notallowed {\n  cursor: not-allowed;\n}\n.__mx-progress_index_-notallowed .__mx-progress_index_-rail {\n  background-color: #fbfbfb;\n}\n.__mx-progress_index_-notallowed .__mx-progress_index_-tracker {\n  background-color: #eaeaea;\n}\n");
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
} ; var $g = '', $_temp, $p = '', width = $$.width; var $expr, $art, $line; try {
    $p += '<div class="__mx-progress_index_-rail" mx-contextmenu="' + $viewId + '@{prevent}()" style="width:' + ($expr = '<%=width%>', $e(width)) + 'px"><div mxs="_]:_" class="__mx-progress_index_-tracker"></div><div mxs="_]:a" class="__mx-progress_index_-pointer-label"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-progress/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{owner.node}'] = $('#' + me.id).addClass('__mx-progress_index_-as-input');
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        me['@{width}'] = +ops.width || 340;
        me['@{disabled}'] = (ops.disabled + '') === 'true';
        me['@{value}'] = +ops.value || 0;
        me['@{fixed}'] = +ops.fixed || 0;
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            width: me['@{width}']
        });
        me['@{owner.node}'][me['@{disabled}'] ? 'addClass' : 'removeClass']('__mx-progress_index_-notallowed');
        me.val(me['@{value}']);
    },
    val: function (v) {
        var me = this;
        var nv = +v;
        if (nv || nv === 0) {
            if (nv < 0)
                nv = 0;
            else if (nv > 1)
                nv = 1;
            var rail = me['@{owner.node}'].find('.__mx-progress_index_-rail');
            var rWidth = rail.width();
            var left = rWidth * nv;
            var tracker = me['@{owner.node}'].find('.__mx-progress_index_-tracker');
            tracker.width(left);
            var indicator = me['@{owner.node}'].find('.__mx-progress_index_-pointer-label');
            var text = (nv * 100).toFixed(me['@{fixed}']) + '%';
            indicator.html(text);
            var w = indicator.width();
            left -= w / 2;
            if (left < 0)
                left = 0;
            else if (left > (rWidth - w))
                left = rWidth - w;
            indicator.css({
                left: left
            });
            me['@{value}'] = nv;
        }
        return me['@{value}'];
    },
    '@{prevent}<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});