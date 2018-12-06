/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/datepicker",["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
var Vframe = Magix.Vframe;
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
    $p += '<div mx-change="' + $viewId + '@{date.picked}()" mx-cancel="' + $viewId + '@{hide}()" id="dpcnt_' + ($expr = '<%=viewId%>', $e(viewId)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/datepicker.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        extra.hasBtn = 1;
        me['@{extra}'] = extra;
        Monitor['@{setup}']();
        var oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        var click = function () {
            me['@{show}']();
        };
        var change = function (e) {
            if (!e.date) {
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
    update: function (options) {
        var me = this;
        var vf = Vframe.get('dpcnt_' + me.id);
        options.hasBtn = 1;
        vf.invoke('update', [options]);
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
        if (!me['@{extra}'].selected) {
            me['@{extra}'].selected = me['@{owner.node}'].val();
        }
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.show}']) {
            var node = me['@{relate.node}'], ref = me['@{owner.node}'];
            me['@{ui.show}'] = true;
            node.show();
            Monitor['@{add}'](me);
            if (!me['@{core.rendered}']) {
                me['@{core.rendered}'] = true;
                me.owner.mountVframe('dpcnt_' + me.id, 'mx-calendar/index', me['@{extra}']);
            }
            var offset = ref.offset();
            var left = void 0, top = void 0;
            switch (me['@{extra}'].placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me['@{extra}'].align) {
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
            var node = $('#dpcnt_' + me.id);
            var vf = node.prop('vframe');
            if (vf) {
                vf.invoke('@{toDefaultPanel}');
            }
            me['@{ui.show}'] = false;
            me['@{relate.node}'].hide();
            Monitor['@{remove}'](me);
        }
    },
    '@{date.picked}<change>': function (e) {
        var me = this;
        e.stopPropagation();
        var val = e.date;
        if (e.time) {
            val += ' ' + e.time;
        }
        me['@{owner.node}'].val(val).trigger({
            type: 'change',
            date: e.date,
            time: e.time
        });
        me['@{hide}']();
    },
    '@{hide}<cancel>': function () {
        this['@{hide}']();
    }
});

});