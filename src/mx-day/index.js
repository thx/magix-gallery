/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-day/index",["magix","$","mx-dropdown/index","./month"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dropdown/index");
require("./month");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_l","._bX{padding:0;height:38.4px}._bY{border:none}._bZ{border-right:1px solid #e6e6e6}");
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
    tmpl: {"html":"<table class=\"_W\"><thead><tr><th class=\"_bX _a_\" width=\"120\">周期设置</th><th class=\"_bX _Z\" colspan=\"31\"><%for(var _=0;_<$$.weeks.length;_++){%><label class=\"_h _t\"><input mx-change=\"\u001f\u001e__aT({key:'<%=$eq($$.weeks[_].key)%>'})\" id=\"<%=$$.viewId%>_<%=$$.weeks[_].key%>\" type=\"checkbox\" class=\"_as\">每周<%=$$.weeks[_].day%></label><%}%></th></tr><tr><th class=\"_bX _a_\"><div mx-change=\"\u001f\u001e__aR()\" style=\"width:100px\" class=\"_g _s\" mx-view=\"mx-dropdown/index?list=<%@$$.years%>&selected=<%!$eu($$.selectedYear)%>\"></div></th><th colspan=\"31\" class=\"_bX\"><table class=\"_W _X\"><tbody><tr><%for(var a=1;a<32;a++){%><td class=\"_bX _a_ _bY<%if(a<30){%> _bZ<%}%>\"><%=('0'+a).slice(-2)%></td><%}%></tr></tbody></table></th></tr></thead><tbody><%for(var b=0;b<12;b++){%><tr><td class=\"_bX _ad _a_\" mx-click=\"\u001f\u001e__aW({m:<%!b%>})\"><%=('0'+(b+1)).slice(-2)%></td><td class=\"_bX\" colspan=\"31\" id=\"months_<%=b%>_<%=$$.viewId%>\" mx-change=\"\u001f\u001e__aV({m:<%!b%>})\" mx-sync=\"\u001f\u001e__aV({m:<%!b%>})\" mx-view=\"mx-day/month?year=<%!$eu($$.selectedYear)%>&month=<%!$eu(b)%>&selected=<%!$eu($$.days[b])%>\"></td></tr><%}%></tbody></table>"},
    init: function (extra) {
        var me = this;
        me.assign(extra);
        var node = $('#' + me.id);
        me['__i'] = node;
    },
    assign: function (ops) {
        var me = this;
        if (!ops.years) {
            ops.years = [new Date().getFullYear()];
        }
        me['__aM'] = ops.years;
        me['__aN'] = ops.selectedYear || ops.years[0];
        me['__aO'] = FormatYearDays(ops.selectedDays);
        return true;
    },
    render: function () {
        var me = this;
        var sYear = me['__aN'];
        var days = GetDays(sYear, me['__aO']);
        me.updater.digest({
            viewId: me.id,
            weeks: Weeks,
            years: me['__aM'],
            selectedYear: sYear,
            days: days
        });
    },
    '__aQ': function () {
        var enables = {};
        for (var i = Weeks.length; i--;) {
            enables[Weeks[i].key] = 1;
        }
        var me = this;
        var nodes = me['__i'].find('[mx-view*="mx-day/month"]');
        nodes.each(function (i, n) {
            var disabled = n.vframe.invoke('__aP');
            for (var i_1 = disabled.length; i_1--;) {
                delete enables[disabled[i_1]];
            }
        });
        for (var i = Weeks.length; i--;) {
            var key = Weeks[i].key;
            $('#' + me.id + '_' + key).prop('checked', !!enables[key]);
        }
    },
    '__aR<change>': function (e) {
        e.stopPropagation();
        var me = this;
        var days = GetDays(e.value, me['__aO']);
        me.updater.digest({
            days: days,
            selectedYear: me['__aN'] = e.value
        });
    },
    '__v': function () {
        var me = this;
        var days = me['__aO'];
        me['__i'].val(days).trigger({
            type: 'change',
            days: days
        });
    },
    '__aT<change>': function (e) {
        var me = this;
        e.stopPropagation();
        var nodes = me['__i'].find('[mx-view*="mx-day/month"]');
        nodes.each(function (i, n) {
            var vf = n.vframe;
            if (vf) {
                vf.invoke('__aS', [e.params.key, e.eventTarget.checked]);
            }
        });
        me['__v']();
    },
    '__aV<change,sync>': function (e) {
        e.stopPropagation();
        var me = this;
        var days = GetDays(me['__aN'], me['__aO']);
        var m = e.params.m;
        days[m] = e.days;
        if (!e.ignoreSync) {
            clearTimeout(me['__aU']);
            me['__aU'] = setTimeout(function () {
                me['__aQ']();
            }, 20);
        }
        if (e.type == 'change') {
            me['__v']();
        }
    },
    '__aW<click>': function (e) {
        var me = this;
        var m = e.params.m;
        var node = $('#months_' + m + '_' + me.id);
        var days = GetDays(me['__aN'], me['__aO'])[m];
        days = new Array(days.length + 1).join(days.indexOf('0') > -1 ? '1' : 0);
        node.invokeView('__q', [days]);
        me['__v']();
    }
});

});