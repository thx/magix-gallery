/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-day/month",["magix","$","mx-dragselect/index"],(require,exports,module)=>{
/*Magix,$*/
require("mx-dragselect/index");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
Magix.applyStyle("_m","._c_{padding:0;height:38.4px;overflow:hidden;cursor:default;border:none;border-right:1px solid #e6e6e6}._ca{border-right:none}._cb{background-color:#f37b63}._cc{opacity:0}._cd{cursor:not-allowed;background-color:#fbfbfb}");
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
    tmpl: {"html":"<table class=\"_W _X\"><tbody><tr mx-change=\"\u001f\u001e__f()\" mx-dragbegin=\"\u001f\u001e__bd()\" mx-dragfinish=\"\u001f\u001e__be()\" mx-view=\"mx-dragselect/index?selector=td%5Benable%3Dtrue%5D\"><%for(var _=0;_<31;_++){%><td data-day=\"<%=_%>\" enable=\"<%=_<$$.days?true:false%>\" class=\"_c_<%if($$.selected.charAt(_)==='1'){%> _cb<%}if(_==30){%> _ca<%}if(_>=$$.days){%> _cd<%}%>\"><span class=\"_cc\"><%=('0'+(_+1)).slice(-2)%></span></td><%}%></tr></tbody></table>"},
    init: function (extra) {
        var me = this;
        me.assign(extra);
        me['__i'] = $('#' + me.id);
    },
    assign: function (ops) {
        var me = this;
        var days = GetNumOfDays(ops.year, ops.month);
        me['__aX'] = days;
        me['__aY'] = ops.year;
        me['__aZ'] = ops.month;
        me['__b_'] = GetDaysStr(ops.selected, days);
        return true;
    },
    '__q': function (selected) {
        var me = this;
        if (selected) {
            var days = me['__aX'];
            me['__b_'] = GetDaysStr(selected, days);
            me.render();
        }
    },
    '__aS': function (week, enable) {
        var me = this;
        var selected = me['__b_'];
        var year = me['__aY'];
        var month = me['__aZ'];
        var days = me['__aX'];
        var flag = Weeks[week];
        for (var i = 1; i <= days; i++) {
            var date = new Date(year, month, i);
            if (date.getDay() === flag) {
                selected = selected.slice(0, i - 1) + (enable ? '1' : '0') + selected.slice(i);
            }
        }
        me['__b_'] = selected;
        me.render(true);
    },
    render: function (ignore) {
        var me = this;
        me.updater.digest({
            days: me['__aX'],
            selected: me['__b_']
        });
        me['__ba'] = GetDragInfo(me['__b_']);
        me['__i'].trigger({
            type: 'sync',
            ignoreSync: ignore,
            days: me['__b_']
        });
    },
    '__aP': function () {
        var me = this;
        var selected = me['__b_'];
        var year = me['__aY'];
        var month = me['__aZ'];
        var days = me['__aX'];
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
    '__f<change,click>': function (e) {
        e.stopPropagation();
        var node = $(e.node);
        var me = this;
        var data = me.updater.get();
        var day = node.data('day');
        var dragSelected = me['__ba'];
        var dragTemp = me['__bb'];
        if (e.action == 'add') {
            if (dragSelected[day]) {
                node.removeClass('_cb');
                delete dragSelected[day];
                if (e.mode == 'drag') {
                    dragTemp[day] = 1;
                }
            }
            else {
                node.addClass('_cb');
                dragSelected[day] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[day];
                }
            }
        }
        else if (e.action == 'remove') {
            if (dragTemp[day]) {
                node.addClass('_cb');
                dragSelected[day] = 1;
                if (e.mode == 'drag') {
                    delete dragTemp[day];
                }
            }
            else {
                node.removeClass('_cb');
                delete dragSelected[day];
                if (e.mode == 'drag') {
                    dragTemp[day] = 1;
                }
            }
        }
        var days = me['__aX'];
        var s = '';
        for (var i = 0; i < days; i++) {
            if (!Magix.has(dragSelected, i)) {
                s += '0';
            }
            else {
                s += '1';
            }
        }
        data.selected = me['__b_'] = s;
        if (e.mode == 'click') {
            me['__i'].trigger({
                type: 'change',
                days: s
            });
        }
    },
    '__bd<dragbegin>': function (e) {
        e.stopPropagation();
        var me = this;
        me['__bc'] = me['__b_'];
        me['__bb'] = {};
    },
    '__be<dragfinish>': function (e) {
        e.stopPropagation();
        var me = this;
        if (me['__b_'] != me['__bc']) {
            me['__i'].trigger({
                type: 'change',
                days: me['__b_']
            });
        }
        delete me['__bb'];
    }
});

});