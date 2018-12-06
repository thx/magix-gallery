/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-day/month",["magix","$","mx-dragselect/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dragselect/index");
/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
Magix.applyStyle("__mx-day_month_","/* @dependent: ./index.less */\n.__mx-day_month_-day {\n  padding: 0;\n  height: 38.4px;\n  overflow: hidden;\n  cursor: default;\n  border: none;\n  border-right: solid 1px #e6e6e6;\n}\n.__mx-day_month_-no-right {\n  border-right: none;\n}\n.__mx-day_month_-active {\n  background-color: #f37b63;\n}\n.__mx-day_month_-opacity-hide {\n  opacity: 0;\n}\n.__mx-day_month_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n");
var $ = require("$");
var Weeks = {
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
    SUN: 0
};
var WeeksToKey = {
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
    0: 'SUN'
};
var GetNumOfDays = function (year, month) {
    return 32 - new Date(year, month, 32).getDate();
};
var GetDaysStr = function (str, days) {
    str = str || '';
    str = str.slice(0, days);
    for (var i = 0; i < days; i++) {
        if (str.length <= i) {
            str += '0';
        }
    }
    return str;
};
var GetDragInfo = function (str) {
    var info = {};
    for (var i = str.length; i--;) {
        if (str.charAt(i) === '1') {
            info[i] = 1;
        }
    }
    return info;
};
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
} ; var $g = '', $_temp, $p = '', days = $$.days, selected = $$.selected; var $expr, $art, $line; try {
    $p += '<table mxa="_5:_" class="__mx-style_index_-wp100 __mx-style_index_-hp100"><tbody><tr mxa="_5:a" mx-change="' + $viewId + '@{show}()" mx-dragbegin="' + $viewId + '@{begin}()" mx-dragfinish="' + $viewId + '@{end}()" mx-view="mx-dragselect/index?selector=td%5Benable%3Dtrue%5D">';
    $expr = '<%for (var i = 0; i < 31; i++) {%>';
    for (var i = 0; i < 31; i++) {
        ;
        $p += '<td data-day="' + ($expr = '<%=i%>', $e(i)) + '" enable="' + ($expr = '<%=i < days ? true : false%>', $e(i < days ? true : false)) + '" class="__mx-day_month_-day';
        $expr = '<%if (selected.charAt(i) === \'1\') {%>';
        if (selected.charAt(i) === '1') {
            ;
            $p += ' __mx-day_month_-active';
            $expr = '<%}%>';
        }
        ;
        $expr = '<%if (i == 30) {%>';
        if (i == 30) {
            ;
            $p += ' __mx-day_month_-no-right';
            $expr = '<%}%>';
        }
        ;
        $expr = '<%if (i >= days) {%>';
        if (i >= days) {
            ;
            $p += ' __mx-day_month_-notallowed';
            $expr = '<%}%>';
        }
        ;
        $p += '"><span mxa="_5:b" class="__mx-day_month_-opacity-hide">' + ($expr = '<%=(\'0\' + (i + 1)).slice(-2)%>', $e(('0' + (i + 1)).slice(-2))) + '</span></td>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></tbody></table>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-day/month.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{owner.node}'] = $('#' + me.id);
        me.assign(extra);
    },
    assign: function (ops) {
        var me = this;
        var days = GetNumOfDays(ops.year, ops.month);
        me['@{days}'] = days;
        me['@{year}'] = ops.year;
        me['@{month}'] = ops.month;
        me['@{selected}'] = GetDaysStr(ops.selected, days);
        me['@{owner.node}'].find('td').removeClass('__mx-day_month_-active');
        return true;
    },
    '@{update.selected}': function (selected) {
        var me = this;
        if (selected) {
            var days = me['@{days}'];
            me['@{selected}'] = GetDaysStr(selected, days);
            me.render();
        }
    },
    '@{week.shortcuts}': function (week, enable) {
        var me = this;
        var selected = me['@{selected}'];
        var year = me['@{year}'];
        var month = me['@{month}'];
        var days = me['@{days}'];
        var flag = Weeks[week];
        for (var i = 1; i <= days; i++) {
            var date = new Date(year, month, i);
            if (date.getDay() === flag) {
                selected = selected.slice(0, i - 1) + (enable ? '1' : '0') + selected.slice(i);
            }
        }
        me['@{selected}'] = selected;
        me.render(true);
    },
    render: function (ignore) {
        var me = this;
        me.updater.digest({
            days: me['@{days}'],
            selected: me['@{selected}']
        });
        me['@{drag.selected}'] = GetDragInfo(me['@{selected}']);
        me['@{owner.node}'].trigger({
            type: 'sync',
            ignoreSync: ignore,
            days: me['@{selected}']
        });
    },
    '@{get.disabled.week}': function () {
        var me = this;
        var selected = me['@{selected}'];
        var year = me['@{year}'];
        var month = me['@{month}'];
        var days = me['@{days}'];
        var dis = {};
        for (var i = 1; i <= days; i++) {
            if (selected.charAt(i - 1) != '1') {
                var date = new Date(year, month, i);
                var key = WeeksToKey[date.getDay()];
                dis[key] = 1;
            }
        }
        return Magix.keys(dis);
    },
    '@{show}<change,click>': function (e) {
        e.stopPropagation();
        var node = $(e.node);
        var me = this;
        var data = me.updater.get();
        var day = node.data('day');
        var dragSelected = me['@{drag.selected}'];
        var dragTemp = me['@{drag.temp}'];
        if (e.action == 'add') {
            if (dragSelected[day]) {
                node.removeClass('__mx-day_month_-active');
                delete dragSelected[day];
                if (e.mode == 'drag') {
                    dragTemp[day] = 1;
                }
            }
            else {
                node.addClass('__mx-day_month_-active');
                dragSelected[day] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[day];
                }
            }
        }
        else if (e.action == 'remove') {
            if (dragTemp[day]) {
                node.addClass('__mx-day_month_-active');
                dragSelected[day] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[day];
                }
            }
            else {
                node.removeClass('__mx-day_month_-active');
                delete dragSelected[day];
                if (e.mode == 'drag') {
                    dragTemp[day] = 1;
                }
            }
        }
        var days = me['@{days}'];
        var s = '';
        for (var i = 0; i < days; i++) {
            if (!Magix.has(dragSelected, i)) {
                s += '0';
            }
            else {
                s += '1';
            }
        }
        data.selected = me['@{selected}'] = s;
        if (e.mode == 'click') {
            me['@{owner.node}'].trigger({
                type: 'change',
                days: s
            });
        }
    },
    '@{begin}<dragbegin>': function (e) {
        e.stopPropagation();
        var me = this;
        me['@{start.value.temp}'] = me['@{selected}'];
        me['@{drag.temp}'] = {};
    },
    '@{end}<dragfinish>': function (e) {
        e.stopPropagation();
        var me = this;
        if (me['@{selected}'] != me['@{start.value.temp}']) {
            me['@{owner.node}'].trigger({
                type: 'change',
                days: me['@{selected}']
            });
        }
        delete me['@{drag.temp}'];
    }
});

});