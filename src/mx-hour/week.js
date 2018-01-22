/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-hour/week",["magix","$","../mx-monitor/index","./index"],(require,exports,module)=>{
/*Magix,$,Monitor,Core*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
*/
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
Magix.applyStyle("_y","._dH{padding:0;height:38.4px;text-align:center}._dI{text-align:left;padding-left:10px}._dJ{border:none}._dK{border-right:1px solid #e6e6e6}._dL{visibility:hidden}._dM:hover ._dL{visibility:visible}._dN{position:absolute;display:none;background-color:#fff;border:1px solid #e6e6e6;border-radius:4px;padding:10px;margin-top:10px;z-index:10}._dO{margin-bottom:10px;width:300px;border-bottom:1px solid #e6e6e6}._dP{margin:0 25px 10px 0}._dQ{visibility:visible}");
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
    tmpl: {"html":"<div class=\"_dN\" id=\"dlg_<%=$$.viewId%>\"><div class=\"_dO\"><%for(var _=0;_<$$.days.length;_++){%><label class=\"_dP<%if(_==$$.currentClone){%> _am<%}%>\"><input class=\"_h\" type=\"checkbox\" value=\"<%=_%>\" <%if(_==$$.currentClone){%> disabled<%}%>>周<%=$$.days.charAt(_)%></label><%}%></div><div><button type=\"button\" class=\"_an _ao\" mx-click=\"\u001f\u001e__dd()\">确认</button><button type=\"button\" mx-click=\"\u001f\u001e__dc()\" class=\"_an _s\">取消</button></div></div><table class=\"_W\"><thead><tr><th class=\"_dH\" width=\"100\">快捷设置</th><th colspan=\"2\" class=\"_dH _dI\"><label class=\"_t\"><input class=\"_at\" type=\"radio\" mx-change=\"\u001f\u001e__da({type:0})\" name=\"st-<%=$$.viewId%>\" <%if($$.allDays){%> checked<%}%>> 全日程投放</label><label class=\"_v\"><input class=\"_at\" type=\"radio\" mx-change=\"\u001f\u001e__da({type:1})\" name=\"st-<%=$$.viewId%>\" <%if($$.weekdays){%> checked<%}%>> 工作日（周一至周五）投放</label><label class=\"_v\"><input class=\"_at\" type=\"radio\" mx-change=\"\u001f\u001e__da({type:2})\" name=\"st-<%=$$.viewId%>\" <%if($$.weekends){%> checked<%}%>> 休息日（周六、周日）投放</label></th></tr><tr><th class=\"_dH\">时间</th><th class=\"_dH\"><table class=\"_W\"><tbody><tr><%for(var a=0;a<24;a++){%><td class=\"_dH _dJ<%if(a<23){%> _dK<%}%>\"><%=('0'+a).slice(-2)%></td><%}%></tr></tbody></table></th><th width=\"80\" class=\"_dH\">操作</th></tr></thead><tbody><%for(var b=0;b<$$.days.length;b++){%><tr class=\"_dM\"><td class=\"_dH _ad\" mx-click=\"\u001f\u001e__aW({day:<%=b%>})\">周<%=$$.days.charAt(b)%></td><td class=\"_dH\"><table class=\"_W\"><tbody id=\"hours_<%=$$.viewId%>_<%=b%>\" mx-view=\"mx-hour/index?border=no\" mx-change=\"\u001f\u001e__cV({day:<%=b%>})\"></tbody></table></td><td class=\"_dH\"><div class=\"_dL\"><a mx-click=\"\u001f\u001e__db({day:<%=b%>})\" href=\"#\">复制到</a></div></td></tr><%}%></tbody></table>"},
    init: function (extra) {
        var me = this;
        me['__aX'] = ImproveDays(extra.days || [None, None, None, None, None, None, None]);
        Monitor['__d']();
        me['__i'] = $('#' + me.id);
        me.on('destroy', function () {
            Monitor['__g'](me);
            Monitor['__h']();
        });
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id,
            days: Weeks
        });
        me.val(me['__aX']);
    },
    '__j': function (node) {
        var me = this;
        var inView = Magix.inside(node, 'dlg_' + me.id);
        if (!inView && me['__cY']) {
            var parent = me['__cY'].parent();
            inView = Magix.inside(node, parent[0]);
        }
        return inView;
    },
    '__cZ': function () {
        var me = this;
        var weekdays = me['__aX'].slice(0, 5).join('');
        var weekends = me['__aX'].slice(-2).join('');
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
    '__d_': function () {
        var me = this;
        var ws = me['__aX'];
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
            me['__aX'] = ImproveDays(days);
            me['__d_']();
            me['__cZ']();
        }
        return me['__aX'];
    },
    '__f': function () {
        var me = this;
        if (!me['__k']) {
            me['__k'] = true;
            Monitor['__l'](me);
            var ref = me['__cY'];
            var dlg = $('#dlg_' + me.id);
            dlg.show();
            var offset = ref.offset();
            var left = offset.left + ref.outerWidth() - dlg.outerWidth();
            var top = offset.top + ref.outerHeight() + 10;
            dlg.offset({
                left: left,
                top: top
            });
            ref.parent().addClass('_dQ');
        }
    },
    '__a': function () {
        var me = this;
        if (me['__k']) {
            me['__k'] = false;
            Monitor['__g'](me);
            $('#dlg_' + me.id).hide();
            var ref = me['__cY'];
            if (ref) {
                ref.parent().removeClass('_dQ');
            }
        }
    },
    '__v': function () {
        var me = this;
        var days = me['__aX'];
        me['__i'].val(days).trigger({
            type: 'change',
            days: days
        });
    },
    '__da<change>': function (e) {
        var me = this;
        e.stopPropagation();
        switch (e.params.type) {
            case 0:
                me['__aX'] = [All, All, All, All, All, All, All];
                break;
            case 1:
                me['__aX'] = [All, All, All, All, All, None, None];
                break;
            case 2:
                me['__aX'] = [None, None, None, None, None, All, All];
                break;
        }
        me['__cZ']();
        me['__d_']();
        me['__v']();
    },
    '__cV<change>': function (e) {
        e.stopPropagation();
        var me = this;
        me['__aX'][e.params.day] = e.range;
        clearTimeout(me['__cQ']);
        me['__cQ'] = setTimeout(me.wrapAsync(function () {
            me['__cZ']();
        }), 100);
        me['__v']();
    },
    '__aW<click>': function (e) {
        var day = e.params.day;
        var me = this;
        var vf = Magix.Vframe.get('hours_' + me.id + '_' + day);
        if (vf) {
            var val = vf.invoke('val');
            if (val.indexOf('0') > -1) {
                vf.invoke('val', [me['__aX'][day] = All]);
            }
            else {
                vf.invoke('val', [me['__aX'][day] = None]);
            }
            me['__cZ']();
            me['__v']();
        }
    },
    '__db<click>': function (e) {
        e.preventDefault();
        var me = this;
        var ref = $(e.eventTarget);
        me['__cY'] = ref;
        me['__f']();
        me.updater.digest({
            currentClone: e.params.day
        });
    },
    '__dc<click>': function () {
        this['__a']();
    },
    '__dd<click>': function () {
        var me = this;
        var day = me.updater.get('currentClone');
        var val = me['__aX'][day];
        $('#dlg_' + me.id + ' input:checked').each(function (idx, item) {
            me['__aX'][item.value] = val;
        });
        me['__a']();
        me['__d_']();
        me['__cZ']();
    }
});

});