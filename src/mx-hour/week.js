/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/week',["magix","$","../mx-monitor/index","./index"],function(require,exports,module){
/*Magix,$,Monitor,Core*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
*/
var Magix = require('magix');
var $ = require('$');
var Monitor = require('../mx-monitor/index');
Magix.applyStyle("s",".dq{margin-right:50px}.dr{height:60px;line-height:60px;vertical-align:middle;color:#333;padding-left:30px}.ds{width:100%;max-width:100%;margin-bottom:20px}.dt{background-color:#fafafa;color:#666}.du{position:relative}.dv{display:inline-block;position:absolute;margin-top:-15px;width:32px;height:18px}.dw{left:8px}.dx{left:24%}.dy{left:47.5%}.dz{left:71%}.dA{left:94%}.dB{border-top:1px solid #e6e6e6}.dB:first-child{border-top:none}.dC{vertical-align:middle;cursor:default;padding:0 10px 0 30px}.dD{visibility:hidden}.dB:hover .dD{visibility:visible}.dE{position:absolute;display:none;background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;padding:10px;margin-top:10px;z-index:10}.dF{margin-bottom:10px;width:300px;border-bottom:1px solid #e6e6e6}.dG{margin:0 25px 10px 0}.dH{visibility:visible}");
var Weeks = '一二三四五六日';
var Core = require('./index');
var All = '111111111111111111111111';
var None = '000000000000000000000000';
var ImproveDays = function (days) {
    var start = 0;
    var end = 7;
    while (start < end) {
        days[start] = Core.improve(days[start]);
        start++;
    }
    return days;
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"dE\" id=\"dlg_<%=$$.viewId%>\"><div mx-guid=\"g1\u001f\" class=\"dF\">2\u001d</div><div><button type=\"button\" class=\"al am\" mx-click=\"\u001f\u001e_ci()\">确认</button><button type=\"button\" mx-click=\"\u001f\u001e_ch()\" class=\"al s\">取消</button></div></div><div class=\"dr\"><label class=\"dq\"><input mx-guid=\"g2\u001f\" class=\"g\" type=\"radio\" mx-click=\"\u001f\u001e_cf({type:0})\" name=\"st-<%=$$.viewId%>\" <%if($$.allDays){%> checked<%}%>> 全日程投放</label><label class=\"dq\"><input mx-guid=\"g3\u001f\" class=\"g\" type=\"radio\" mx-click=\"\u001f\u001e_cf({type:1})\" name=\"st-<%=$$.viewId%>\" <%if($$.weekdays){%> checked<%}%>> 工作日（周一至周五）投放</label><label><input mx-guid=\"g4\u001f\" class=\"g\" type=\"radio\" mx-click=\"\u001f\u001e_cf({type:2})\" name=\"st-<%=$$.viewId%>\" <%if($$.weekends){%> checked<%}%>> 休息日（周六、周日）投放</label></div><table class=\"ds\"><thead><tr class=\"dt\"><td width=\"160\" class=\"V\">时间段</td><td class=\"du\"><span class=\"dv dw\">0:00</span><span class=\"dv dx\">6:00</span><span class=\"dv dy\">12:00</span><span class=\"dv dz\">18:00</span><span class=\"dv dA\">24:00</span></td><td width=\"160\" align=\"center\">操作</td></tr></thead><tbody mx-guid=\"g5\u001f\">3\u001d</tbody></table>","subs":[{"keys":["viewId"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"dlg_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]},{"keys":["days","currentClone"],"path":"div[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var a=0;a<$$.days.length;a++){%><label class=\"dG<%if(a==$$.currentClone){%> ak<%}%>\"><input class=\"h\" type=\"checkbox\" value=\"<%=a%>\" <%if(a==$$.currentClone){%> disabled<%}%>>周<%=$$.days.charAt(a)%></label><%}%>","s":"2\u001d"},{"keys":["viewId","allDays"],"path":"input[mx-guid=\"g2\u001f\"]","attr":"name=\"st-<%=$$.viewId%>\" <%if($$.allDays){%> checked<%}%>","attrs":[{"n":"name","p":1},{"n":"checked","b":1,"p":1}]},{"keys":["viewId","weekdays"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"name=\"st-<%=$$.viewId%>\" <%if($$.weekdays){%> checked<%}%>","attrs":[{"n":"name","p":1},{"n":"checked","b":1,"p":1}]},{"keys":["viewId","weekends"],"path":"input[mx-guid=\"g4\u001f\"]","attr":"name=\"st-<%=$$.viewId%>\" <%if($$.weekends){%> checked<%}%>","attrs":[{"n":"name","p":1},{"n":"checked","b":1,"p":1}]},{"keys":["days","viewId"],"path":"tbody[mx-guid=\"g5\u001f\"]","tmpl":"<%for(var b=0;b<$$.days.length;b++){%><tr class=\"dB\"><td class=\"dC\" mx-click=\"\u001f\u001etoggle({day:<%=b%>})\">周<%=$$.days.charAt(b)%></td><td id=\"hours_<%=$$.viewId%>_<%=b%>\" mx-view=\"mx-hour/index\" mx-change=\"\u001f\u001e_bX({day:<%=b%>})\"></td><td align=\"center\"><div class=\"dD\"><a mx-click=\"\u001f\u001e_cg({day:<%=b%>})\" href=\"#\">复制到</a></div></td></tr><%}%>","s":"3\u001d"}]},
    init: function (extra) {
        var me = this;
        me['_cb'] = ImproveDays(extra.days || [None, None, None, None, None, None, None]);
        Monitor['_d']();
        me.on('destroy', function () {
            Monitor['_f'](me);
            Monitor['_g']();
        });
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id,
            days: Weeks
        });
        me.val(me['_cb']);
    },
    '_i': function (node) {
        var me = this;
        var inView = Magix.inside(node, 'dlg_' + me.id);
        if (!inView && me['_cc']) {
            var parent = me['_cc'].parent();
            inView = Magix.inside(node, parent[0]);
        }
        return inView;
    },
    '_cd': function () {
        var me = this;
        var weekdays = me['_cb'].slice(0, 5).join('');
        var weekends = me['_cb'].slice(-2).join('');
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
    '_ce': function () {
        var me = this;
        var ws = me['_cb'];
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
            me['_cb'] = ImproveDays(days);
            me['_ce']();
            me['_cd']();
        }
        return me['_cb'];
    },
    '_e': function () {
        var me = this;
        if (!me['_j']) {
            me['_j'] = true;
            Monitor['_k'](me);
            var ref = me['_cc'];
            var dlg = $('#dlg_' + me.id);
            dlg.show();
            var offset = ref.offset();
            var left = offset.left + ref.outerWidth() - dlg.outerWidth();
            var top = offset.top + ref.outerHeight() + 10;
            dlg.offset({
                left: left,
                top: top
            });
            ref.parent().addClass('dH');
        }
    },
    '_a': function () {
        var me = this;
        if (me['_j']) {
            me['_j'] = false;
            Monitor['_f'](me);
            $('#dlg_' + me.id).hide();
            var ref = me['_cc'];
            if (ref) {
                ref.parent().removeClass('dH');
            }
        }
    },
    '_cf<click>': function (e) {
        var me = this;
        switch (e.params.type) {
            case 0:
                me['_cb'] = [All, All, All, All, All, All, All];
                break;
            case 1:
                me['_cb'] = [All, All, All, All, All, None, None];
                break;
            case 2:
                me['_cb'] = [None, None, None, None, None, All, All];
                break;
        }
        me['_cd']();
        me['_ce']();
    },
    '_bX<change>': function (e) {
        e.stopPropagation();
        var me = this;
        me['_cb'][e.params.day] = e.range;
        clearTimeout(me['_bS']);
        me['_bS'] = setTimeout(me.wrapAsync(function () {
            me['_cd']();
        }), 100);
    },
    '_bw<click>': function (e) {
        var day = e.params.day;
        var me = this;
        var vf = Magix.Vframe.get('hours_' + me.id + '_' + day);
        if (vf) {
            var val = vf.invoke('val');
            if (val.indexOf('0') > -1) {
                vf.invoke('val', [me['_cb'][day] = All]);
            }
            else {
                vf.invoke('val', [me['_cb'][day] = None]);
            }
            me['_cd']();
        }
    },
    '_cg<click>': function (e) {
        e.preventDefault();
        var me = this;
        var ref = $(e.eventTarget);
        me['_cc'] = ref;
        me['_e']();
        me.updater.digest({
            currentClone: e.params.day
        });
    },
    '_ch<click>': function () {
        this['_a']();
    },
    '_ci<click>': function () {
        var me = this;
        var day = me.updater.get('currentClone');
        var val = me['_cb'][day];
        $('#dlg_' + me.id + ' input:checked').each(function (idx, item) {
            me['_cb'][item.value] = val;
        });
        me['_a']();
        me['_ce']();
        me['_cd']();
    }
});

});