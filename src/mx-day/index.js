/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-day/index",["magix","$","mx-dropdown/index","./month"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dropdown/index");
require("./month");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("__mx-day_index_","/* @dependent: ./index.less */\n.__mx-day_index_-reset {\n  padding: 0;\n  height: 38.4px;\n}\n.__mx-day_index_-no-border {\n  border: none;\n}\n.__mx-day_index_-right-border {\n  border-right: solid 1px #e6e6e6;\n}\n");
var GetDays = function (year, days) {
    var ds = days[year];
    if (!ds) {
        ds = [];
        for (var i = 12; i--;) {
            ds[i] = '';
        }
        days[year] = ds;
    }
    return ds;
};
var FormatYearDays = function (days) {
    days = days || {};
    for (var d in days) {
        var ds = days[d];
        ds = ds || '';
        ds = (ds + '').split(',');
        if (ds.length > 12) {
            ds = ds.slice(0, 12);
        }
        for (var i = 0; i < 12; i++) {
            if (!ds[i])
                ds[i] = '';
        }
        days[d] = ds;
    }
    return days;
};
var Weeks = [{
        key: 'MON',
        day: '一'
    }, {
        key: 'TUE',
        day: '二'
    }, {
        key: 'WED',
        day: '三'
    }, {
        key: 'THU',
        day: '四'
    }, {
        key: 'FRI',
        day: '五'
    }, {
        key: 'SAT',
        day: '六'
    }, {
        key: 'SUN',
        day: '日'
    }];
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', weeks = $$.weeks, viewId = $$.viewId, years = $$.years, selectedYear = $$.selectedYear, days = $$.days; var $expr, $art, $line; try {
    $p += '<table mxv mxa="_4:_" class="__mx-style_index_-wp100"><thead mxv><tr mxv><th mxs="_4:_" class="__mx-day_index_-reset __mx-style_index_-tc" width="120">周期设置</th><th mxv mxa="_4:a" class="__mx-day_index_-reset __mx-style_index_-tl" colspan="31">';
    $expr = '<%for (var i = 0; i < weeks.length; i++) {%>';
    for (var i = 0; i < weeks.length; i++) {
        ;
        $p += '<label mxv mxa="_4:b" class="__mx-style_index_-mr10 __mx-style_index_-ml10"><input mx-change="' + $viewId + '@{sync.by.week}({key:\'' + ($expr = '<%=$eq(weeks[i].key)%>', $e($eq(weeks[i].key))) + '\'})" id="' + ($expr = '<%=viewId%>', $e(viewId)) + '_' + ($expr = '<%=weeks[i].key%>', $e(weeks[i].key)) + '" type="checkbox" class="__mx-style_index_-checkbox"/>每周' + ($expr = '<%=weeks[i].day%>', $e(weeks[i].day)) + '</label>';
        $expr = '<%}%>';
    }
    ;
    $p += '</th></tr><tr mxv><th mxv mxa="_4:c" class="__mx-day_index_-reset __mx-style_index_-tc"><div mxv="years" mx-change="' + $viewId + '@{change.year}()" style="width:100px" class="__mx-style_index_-mr5 __mx-style_index_-ml5" mx-view="mx-dropdown/index?list=' + ($expr = '<%@years%>', $i($$ref, years)) + '&selected=' + ($expr = '<%!$eu(selectedYear)%>', $eu(selectedYear)) + '"></div></th><th mxa="_4:d" colspan="31" class="__mx-day_index_-reset"><table mxa="_4:e" class="__mx-style_index_-wp100 __mx-style_index_-hp100"><tbody><tr>';
    $expr = '<%for (var i = 1; i < 32; i++) {%>';
    for (var i = 1; i < 32; i++) {
        ;
        $p += '<td class="__mx-day_index_-reset __mx-style_index_-tc __mx-day_index_-no-border';
        $expr = '<%if (i < 30) {%>';
        if (i < 30) {
            ;
            $p += ' __mx-day_index_-right-border';
            $expr = '<%}%>';
        }
        ;
        $p += '">' + ($expr = '<%=(\'0\' + i).slice(-2)%>', $e(('0' + i).slice(-2))) + '</td>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></tbody></table><tbody>';
    $expr = '<%for (var i = 0; i < 12; i++) {%>';
    for (var i = 0; i < 12; i++) {
        ;
        $p += '<tr><td class="__mx-day_index_-reset __mx-style_index_-cp __mx-style_index_-tc" mx-click="' + $viewId + '@{toggle}({m:' + ($expr = '<%!i%>', $n(i)) + '})">' + ($expr = '<%=(\'0\' + (i + 1)).slice(-2)%>', $e(('0' + (i + 1)).slice(-2))) + '</td><td class="__mx-day_index_-reset" colspan="31" id="months_' + ($expr = '<%=i%>', $e(i)) + '_' + ($expr = '<%=viewId%>', $e(viewId)) + '" mx-change="' + $viewId + '@{take.days}({m:' + ($expr = '<%!i%>', $n(i)) + '})" mx-sync="' + $viewId + '@{take.days}({m:' + ($expr = '<%!i%>', $n(i)) + '})" mx-view="mx-day/month?year=' + ($expr = '<%!$eu(selectedYear)%>', $eu(selectedYear)) + '&month=' + ($expr = '<%!$eu(i)%>', $eu(i)) + '&selected=' + ($expr = '<%!$eu(days[i])%>', $eu(days[i])) + '"></td></tr>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-day/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me.assign(extra);
        var node = $('#' + me.id);
        me['@{owner.node}'] = node;
    },
    assign: function (ops) {
        var me = this;
        if (!ops.years) {
            ops.years = [new Date().getFullYear()];
        }
        me['@{years}'] = ops.years;
        me['@{selectedYear}'] = ops.selectedYear || ops.years[0];
        me['@{selectedDays}'] = FormatYearDays(ops.selectedDays);
        return true;
    },
    render: function () {
        var me = this;
        var sYear = me['@{selectedYear}'];
        var days = GetDays(sYear, me['@{selectedDays}']);
        me.updater.digest({
            viewId: me.id,
            weeks: Weeks,
            years: me['@{years}'],
            selectedYear: sYear,
            days: days
        });
    },
    '@{sync.weeks}': function () {
        var enables = {};
        for (var i = Weeks.length; i--;) {
            enables[Weeks[i].key] = 1;
        }
        var me = this;
        var nodes = me['@{owner.node}'].find('[mx-view*="mx-day/month"]');
        nodes.each(function (i, n) {
            var disabled = n.vframe.invoke('@{get.disabled.week}');
            for (var i_1 = disabled.length; i_1--;) {
                delete enables[disabled[i_1]];
            }
        });
        for (var i = Weeks.length; i--;) {
            var key = Weeks[i].key;
            $('#' + me.id + '_' + key).prop('checked', !!enables[key]);
        }
    },
    '@{change.year}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        var days = GetDays(e.value, me['@{selectedDays}']);
        me.updater.digest({
            days: days,
            selectedYear: me['@{selectedYear}'] = e.value
        });
    },
    '@{fire.event}': function () {
        var me = this;
        var days = me['@{selectedDays}'];
        me['@{owner.node}'].val(days).trigger({
            type: 'change',
            days: days
        });
    },
    '@{sync.by.week}<change>': function (e) {
        var me = this;
        e.stopPropagation();
        var nodes = me['@{owner.node}'].find('[mx-view*="mx-day/month"]');
        nodes.each(function (i, n) {
            var vf = n.vframe;
            if (vf) {
                vf.invoke('@{week.shortcuts}', [e.params.key, e.eventTarget.checked]);
            }
        });
        me['@{fire.event}']();
    },
    '@{take.days}<change,sync>': function (e) {
        e.stopPropagation();
        var me = this;
        var days = GetDays(me['@{selectedYear}'], me['@{selectedDays}']);
        var m = e.params.m;
        days[m] = e.days;
        if (!e.ignoreSync) {
            clearTimeout(me['@{sync.timer}']);
            me['@{sync.timer}'] = setTimeout(function () {
                me['@{sync.weeks}']();
            }, 20);
        }
        if (e.type == 'change') {
            me['@{fire.event}']();
        }
    },
    '@{toggle}<click>': function (e) {
        var me = this;
        var m = e.params.m;
        var node = $('#months_' + m + '_' + me.id);
        var days = GetDays(me['@{selectedYear}'], me['@{selectedDays}'])[m];
        days = new Array(days.length + 1).join(days.indexOf('0') > -1 ? '1' : 0);
        node.invokeView('@{update.selected}', [days]);
        me['@{fire.event}']();
    }
});

});