/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-color/picker",["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
require("./index");
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
    $p += '<div mx-change="' + $viewId + '@{color.picked}()" id="cpcnt_' + ($expr = '<%=viewId%>', $e(viewId)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-color/picker.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{pos.placement}'] = extra.placement;
        me['@{pos.align}'] = extra.align;
        me['@{show.alpha}'] = extra.showAlpha;
        Monitor['@{setup}']();
        var oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        me['@{color}'] = extra.color || oNode.val();
        var click = function () {
            me['@{show}']();
        };
        var change = function (e) {
            if (!e.color) {
                e.stopPropagation();
            }
        };
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
            oNode.off('click', click).off('change', change);
        });
        oNode.on('click', click).on('change', change);
        me['@{owner.node}'] = oNode;
        oNode.prop('autocomplete', 'off');
    },
    '@{inside}': function (node) {
        var me = this;
        return Magix.inside(node, me.id) ||
            Magix.inside(node, me['@{owner.node}'][0]);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.show}']) {
            var node = me['@{relate.node}'], ref = me['@{owner.node}'];
            me['@{ui.show}'] = true;
            node.show();
            if (!me['@{core.rendered}']) {
                me['@{core.rendered}'] = true;
                me.owner.mountVframe('cpcnt_' + me.id, 'mx-color/index', {
                    showBtns: true,
                    showAlpha: me['@{show.alpha}'],
                    color: me['@{color}']
                });
            }
            Monitor['@{add}'](me);
            var offset = ref.offset();
            var left = void 0, top = void 0;
            switch (me['@{pos.placement}']) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['@{pos.align}']) {
                case 'right':
                    left = offset.left + ref.outerWidth() - node.outerWidth();
                    break;
                default:
                    left = offset.left;
                    break;
            }
            node.offset({
                left: left,
                top: top
            });
        }
    },
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.show}']) {
            me['@{relate.node}'].hide();
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
        }
    },
    '@{color.picked}<change>': function (e) {
        var me = this;
        e.stopPropagation();
        me['@{hide}']();
        me['@{owner.node}'].val(e.color).trigger({
            type: 'change',
            color: e.color
        });
    }
});

});