/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/rangepicker",["magix","$","../mx-monitor/index","./index","./range"],(require,exports,module)=>{
/*Magix,$,Monitor,Calendar,RangeDate*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var Calendar = require("./index");
var RangeDate = require("./range");
var DefaultQuickDateKeys = [
    'today',
    'yesterday',
    'passed7',
    'lastestThisMonth',
    'preMonth',
    'lastest15'
];
var Rangepicker = Magix.View.extend({
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
    $p += '<div mx-change="' + $viewId + '@{range.picked}()" mx-cancel="' + $viewId + '@{hide}()" id="rpcnt_' + ($expr = '<%=viewId%>', $e(viewId)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/rangepicker.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        var start = extra.start;
        var end = extra.end;
        var timeType = extra.timeType;
        var formatter = extra.formatter || ('YYYY-MM-dd' + (timeType ? ' hh:mm:ss' : ''));
        var today = Calendar.format(new Date(), formatter);
        me['@{datetime.formatter}'] = formatter;
        me['@{auto.fillback}'] = true;
        me['@{time.type}'] = timeType;
        me['@{date.type}'] = extra.dateType;
        if (!start) {
            me['@{auto.fillback}'] = false;
            start = today;
        }
        if (!end) {
            me['@{auto.fillback}'] = false;
            end = today;
        }
        me['@{shortcuts.show}'] = extra.shortcuts != 'false';
        me['@{max}'] = extra.max;
        me['@{min}'] = extra.min;
        me['@{pos.placement}'] = extra.placement;
        me['@{pos.align}'] = extra.align;
        me['@{dates.quick}'] = me['@{shortcuts.show}'] ? DefaultQuickDateKeys : [];
        me['@{dates}'] = RangeDate.getDescription(start, end, me['@{dates.quick}'], formatter);
        Monitor['@{setup}']();
        var oNode = $('#' + me.id);
        me['@{relate.node}'] = oNode;
        oNode = oNode.prev('input');
        oNode.prop('vframe', me.owner);
        var click = function () {
            me['@{show}']();
        };
        var change = function (e) {
            if (!e.dates) {
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
        var inView = Magix.inside(node, me.id) ||
            Magix.inside(node, me['@{owner.node}'][0]);
        if (!inView) {
            var children = me.owner.children();
            for (var i = children.length - 1; i >= 0; i--) {
                var child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('@{inside}', [node]);
                }
                if (inView)
                    break;
            }
        }
        return inView;
    },
    '@{fill.to.node}': function () {
        var me = this;
        var dates = me['@{dates}'];
        if (dates.quickDateText) {
            me['@{owner.node}'].val(dates.quickDateText);
        }
        else {
            me['@{owner.node}'].val(dates.startStr + ' ~ ' + dates.endStr);
        }
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id
        });
        if (me['@{auto.fillback}']) {
            me['@{fill.to.node}']();
        }
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.show}']) {
            var node = me['@{relate.node}'], ref = me['@{owner.node}'];
            node.show();
            me['@{ui.show}'] = true;
            if (!me['@{core.rendered}']) {
                me['@{core.rendered}'] = true;
                me.owner.mountVframe('rpcnt_' + me.id, 'mx-calendar/range', {
                    min: me['@{min}'],
                    max: me['@{max}'],
                    timeType: me['@{time.type}'],
                    dateType: me['@{date.type}'],
                    formatter: me['@{datetime.formatter}'],
                    dates: me['@{dates}'],
                    quickDates: me['@{dates.quick}'],
                    placement: me['@{pos.placement}'],
                    align: me['@{pos.align}']
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
    '@{hide}': function (ignore) {
        var me = this;
        if (me['@{ui.show}']) {
            me['@{relate.node}'].hide();
            var node = $('#rpcnt_' + me.id);
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            if (!ignore) {
                node.invokeView('@{restore}');
            }
        }
    },
    '@{range.picked}<change>': function (e) {
        var me = this;
        e.stopPropagation();
        me['@{dates}'] = e.dates;
        me['@{fill.to.node}']();
        me['@{hide}'](true);
        me['@{owner.node}'].trigger({
            type: 'change',
            dates: e.dates
        });
    },
    '@{hide}<cancel>': function (e) {
        e.stopPropagation();
        this['@{hide}']();
    }
});
module.exports = Rangepicker;

});