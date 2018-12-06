/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/week",["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor,Core*/

/*
ver:2.0.6
*/
/*
    author:xinglie.lkf@alibaba-inc.com
*/
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("__mx-hour_week_","/* @dependent: ./index.less */\n.__mx-hour_week_-reset {\n  padding: 0;\n  height: 38.4px;\n  text-align: center;\n}\n.__mx-hour_week_-cycle {\n  text-align: left;\n  padding-left: 10px;\n}\n.__mx-hour_week_-no-border {\n  border: none;\n}\n.__mx-hour_week_-right-border {\n  border-right: solid 1px #e6e6e6;\n}\n.__mx-hour_week_-operation {\n  visibility: hidden;\n}\n.__mx-hour_week_-day:hover .__mx-hour_week_-operation {\n  visibility: visible;\n}\n.__mx-hour_week_-dialog {\n  position: absolute;\n  display: none;\n  background-color: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  padding: 10px;\n  margin-top: 10px;\n  z-index: 10;\n}\n.__mx-hour_week_-body {\n  margin-bottom: 10px;\n  width: 300px;\n  border-bottom: 1px solid #e6e6e6;\n}\n.__mx-hour_week_-d-label {\n  margin: 0 25px 10px 0;\n}\n.__mx-hour_week_-opshow {\n  visibility: visible;\n}\n");
var Weeks = '一二三四五六日';
var Core = require("./index");
var All = '111111111111111111111111';
var None = '000000000000000000000000';
var ImproveDays = function (days) {
    var start = 0;
    var end = 7;
    days = (days + '').split(',');
    days = days.slice(start, end);
    while (start < end) {
        days[start] = Core.improve(days[start]);
        start++;
    }
    return days;
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, days = $$.days, currentClone = $$.currentClone, allDays = $$.allDays, weekdays = $$.weekdays, weekends = $$.weekends; var $expr, $art, $line; try {
    $p += '<div mxv class="__mx-hour_week_-dialog" id="dlg_' + ($expr = '<%=viewId%>', $e(viewId)) + '"><div mxv mxa="_^:_" class="__mx-hour_week_-body">';
    $expr = '<%for (var i = 0; i < days.length; i++) {%>';
    for (var i = 0; i < days.length; i++) {
        ;
        $p += '<label mxv class="__mx-hour_week_-d-label';
        $expr = '<%if (i == currentClone) {%>';
        if (i == currentClone) {
            ;
            $p += ' __mx-style_index_-disabled';
            $expr = '<%}%>';
        }
        ;
        $p += '"><input class="__mx-style_index_-mr10" type="checkbox" value="' + ($expr = '<%=i%>', $e(i)) + '" ';
        $expr = '<%if (i == currentClone) {%>';
        if (i == currentClone) {
            ;
            $p += ' disabled';
            $expr = '<%}%>';
        }
        ;
        $p += '/>周' + ($expr = '<%=days.charAt(i)%>', $e(days.charAt(i))) + '</label>';
        $expr = '<%}%>';
    }
    ;
    $p += '</div><div mxs="_^:_"><button type="button" class="__mx-style_index_-btn __mx-style_index_-btn-brand" mx-click="' + $viewId + '@{apply}()">确认</button><button type="button" mx-click="' + $viewId + '@{closeDlg}()" class="__mx-style_index_-btn __mx-style_index_-ml5">取消</button></div></div><table mxv mxa="_^:a" class="__mx-style_index_-wp100"><thead mxv><tr mxv><th mxs="_^:a" class="__mx-hour_week_-reset" width="100">快捷设置</th><th mxv mxa="_^:b" colspan="2" class="__mx-hour_week_-reset __mx-hour_week_-cycle"><label mxv mxa="_^:c" class="__mx-style_index_-ml10"><input class="__mx-style_index_-radio" type="radio" mx-change="' + $viewId + '@{shortcuts.processor}({type:0})" name="st-' + ($expr = '<%=viewId%>', $e(viewId)) + '" ';
    $expr = '<%if (allDays) {%>';
    if (allDays) {
        ;
        $p += ' checked';
        $expr = '<%}%>';
    }
    ;
    $p += '/> 全日程投放</label><label mxv mxa="_^:d" class="__mx-style_index_-ml20"><input class="__mx-style_index_-radio" type="radio" mx-change="' + $viewId + '@{shortcuts.processor}({type:1})" name="st-' + ($expr = '<%=viewId%>', $e(viewId)) + '" ';
    $expr = '<%if (weekdays) {%>';
    if (weekdays) {
        ;
        $p += ' checked';
        $expr = '<%}%>';
    }
    ;
    $p += '/> 工作日（周一至周五）投放</label><label mxv mxa="_^:e" class="__mx-style_index_-ml20"><input class="__mx-style_index_-radio" type="radio" mx-change="' + $viewId + '@{shortcuts.processor}({type:2})" name="st-' + ($expr = '<%=viewId%>', $e(viewId)) + '" ';
    $expr = '<%if (weekends) {%>';
    if (weekends) {
        ;
        $p += ' checked';
        $expr = '<%}%>';
    }
    ;
    $p += '/> 休息日（周六、周日）投放</label></th></tr><tr><th mxs="_^:b" class="__mx-hour_week_-reset">时间</th><th mxa="_^:f" class="__mx-hour_week_-reset"><table mxa="_^:g" class="__mx-style_index_-wp100"><tbody><tr>';
    $expr = '<%for (var i = 0; i < 24; i++) {%>';
    for (var i = 0; i < 24; i++) {
        ;
        $p += '<td class="__mx-hour_week_-reset __mx-hour_week_-no-border';
        $expr = '<%if (i < 23) {%>';
        if (i < 23) {
            ;
            $p += ' __mx-hour_week_-right-border';
            $expr = '<%}%>';
        }
        ;
        $p += '">' + ($expr = '<%=(\'0\' + i).slice(-2)%>', $e(('0' + i).slice(-2))) + '</td>';
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></tbody></table><th mxs="_^:c" width="80" class="__mx-hour_week_-reset">操作</th><tbody>';
    $expr = '<%for (var i = 0; i < days.length; i++) {%>';
    for (var i = 0; i < days.length; i++) {
        ;
        $p += '<tr mxa="_^:h" class="__mx-hour_week_-day"><td class="__mx-hour_week_-reset __mx-style_index_-cp" mx-click="' + $viewId + '@{toggle}({day:' + ($expr = '<%=i%>', $e(i)) + '})">周' + ($expr = '<%=days.charAt(i)%>', $e(days.charAt(i))) + '</td><td mxa="_^:i" class="__mx-hour_week_-reset"><table mxa="_^:j" class="__mx-style_index_-wp100"><tbody id="hours_' + ($expr = '<%=viewId%>', $e(viewId)) + '_' + ($expr = '<%=i%>', $e(i)) + '" mx-view="mx-hour/index?border=no" mx-change="' + $viewId + '@{hour}({day:' + ($expr = '<%=i%>', $e(i)) + '})"></tbody></table></td><td mxa="_^:k" class="__mx-hour_week_-reset"><div mxa="_^:l" class="__mx-hour_week_-operation"><a mx-click="' + $viewId + '@{copy}({day:' + ($expr = '<%=i%>', $e(i)) + '})" href="#">复制到</a></div></td></tr>';
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
    msg += $expr + '\r\n\tat file:mx-hour/week.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var me = this;
        me['@{days}'] = ImproveDays(extra.days || [None, None, None, None, None, None, None]);
        Monitor['@{setup}']();
        me['@{owner.node}'] = $('#' + me.id);
        me.on('destroy', function () {
            Monitor['@{remove}'](me);
            Monitor['@{teardown}']();
        });
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id,
            days: Weeks
        });
        me.val(me['@{days}']);
    },
    '@{inside}': function (node) {
        var me = this;
        var inView = Magix.inside(node, 'dlg_' + me.id);
        if (!inView && me['@{ref.node}']) {
            var parent = me['@{ref.node}'].parent();
            inView = Magix.inside(node, parent[0]);
        }
        return inView;
    },
    '@{sync.shortcuts}': function () {
        var me = this;
        var weekdays = me['@{days}'].slice(0, 5).join('');
        var weekends = me['@{days}'].slice(-2).join('');
        var weekdaysHas = weekdays.indexOf('1') > -1;
        var weekendsHas = weekends.indexOf('1') > -1;
        var weekdaysChecked = weekdays.indexOf('0') == -1;
        var weekendsChekced = weekends.indexOf('0') == -1;
        var allDaysChecked = weekdaysChecked && weekendsChekced;
        me.updater.digest({
            allDays: allDaysChecked,
            weekdays: !weekendsHas && weekdaysChecked,
            weekends: weekendsChekced && !weekdaysHas
        });
    },
    '@{sync.ui}': function () {
        var me = this;
        var ws = me['@{days}'];
        for (var i = 0, w = void 0, vf = void 0; i < ws.length; i++) {
            w = ws[i];
            vf = Magix.Vframe.get('hours_' + me.id + '_' + i);
            if (vf) {
                vf.invoke('val', [w]);
            }
        }
    },
    val: function (days) {
        var me = this;
        if (days) {
            me['@{days}'] = ImproveDays(days);
            me['@{sync.shortcuts}']();
            me['@{sync.ui}']();
        }
        return me['@{days}'];
    },
    '@{show}': function () {
        var me = this;
        if (!me['@{ui.show}']) {
            me['@{ui.show}'] = true;
            Monitor['@{add}'](me);
            var ref = me['@{ref.node}'];
            var dlg = $('#dlg_' + me.id);
            dlg.show();
            var offset = ref.offset();
            var left = offset.left + ref.outerWidth() - dlg.outerWidth();
            var top = offset.top + ref.outerHeight() + 10;
            dlg.offset({
                left: left,
                top: top
            });
            ref.parent().addClass('__mx-hour_week_-opshow');
        }
    },
    '@{hide}': function () {
        var me = this;
        if (me['@{ui.show}']) {
            me['@{ui.show}'] = false;
            Monitor['@{remove}'](me);
            $('#dlg_' + me.id).hide();
            var ref = me['@{ref.node}'];
            if (ref) {
                ref.parent().removeClass('__mx-hour_week_-opshow');
            }
        }
    },
    '@{fire.event}': function () {
        var me = this;
        var days = me['@{days}'];
        me['@{owner.node}'].val(days).trigger({
            type: 'change',
            days: days
        });
    },
    '@{shortcuts.processor}<change>': function (e) {
        var me = this;
        e.stopPropagation();
        switch (e.params.type) {
            case 0:
                me['@{days}'] = [All, All, All, All, All, All, All];
                break;
            case 1:
                me['@{days}'] = [All, All, All, All, All, None, None];
                break;
            case 2:
                me['@{days}'] = [None, None, None, None, None, All, All];
                break;
        }
        me['@{sync.shortcuts}']();
        me['@{sync.ui}']();
        me['@{fire.event}']();
    },
    '@{hour}<change>': function (e) {
        e.stopPropagation();
        var me = this;
        me['@{days}'][e.params.day] = e.range;
        clearTimeout(me['@{change.delay.timer}']);
        me['@{change.delay.timer}'] = setTimeout(me.wrapAsync(function () {
            me['@{sync.shortcuts}']();
        }), 100);
        me['@{fire.event}']();
    },
    '@{toggle}<click>': function (e) {
        var day = e.params.day;
        var me = this;
        var vf = Magix.Vframe.get('hours_' + me.id + '_' + day);
        if (vf) {
            var val = vf.invoke('val');
            if (val.indexOf('0') > -1) {
                vf.invoke('val', [me['@{days}'][day] = All]);
            }
            else {
                vf.invoke('val', [me['@{days}'][day] = None]);
            }
            me['@{sync.shortcuts}']();
            me['@{fire.event}']();
        }
    },
    '@{copy}<click>': function (e) {
        e.preventDefault();
        var me = this;
        var ref = $(e.eventTarget);
        if (!me['@{ui.show}']) {
            me.updater.digest({
                currentClone: e.params.day
            });
            me['@{ref.node}'] = ref;
            me['@{show}']();
        }
    },
    '@{closeDlg}<click>': function () {
        this['@{hide}']();
    },
    '@{apply}<click>': function () {
        var me = this;
        var day = me.updater.get('currentClone');
        var val = me['@{days}'][day];
        $('#dlg_' + me.id + ' input:checked').each(function (idx, item) {
            me['@{days}'][item.value] = val;
        });
        me['@{hide}']();
        me['@{sync.ui}']();
        me['@{sync.shortcuts}']();
    }
});

});