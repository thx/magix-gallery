/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-slider/range',["magix","$","../mx-dragdrop/index","./style"],function(require,exports,module){
/*Magix,$,DD*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */

var Magix = require('magix');
var $ = require('$');
var DD = require('../mx-dragdrop/index');
require('./style');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"eu<%if($$.vertical){%> ew<%}else{%> ev<%}%>\" mx-contextmenu=\"\u001f\u001e_D()\" style=\"<%if($$.vertical){%>height:<%=$$.height%><%}else{%>width:<%=$$.width%><%}%>px\"><div mx-guid=\"g1\u001f\" class=\"ex<%if($$.vertical){%> ez<%}else{%> ey<%}%>\"></div><div mx-guid=\"g2\u001f\" class=\"eA<%if($$.vertical){%> eC<%}else{%> eB<%}%>\" mx-mousedown=\"\u001f\u001e_dr({start:true})\" id=\"left_<%=$$.viewId%>\"></div><div mx-guid=\"g3\u001f\" class=\"eD<%if($$.vertical){%> eJ<%}else{%> eI<%}%>\" id=\"leftl_<%=$$.viewId%>\"></div><div mx-guid=\"g4\u001f\" class=\"eA<%if($$.vertical){%> eC<%}else{%> eB<%}%>\" mx-mousedown=\"\u001f\u001e_dr({end:true})\" id=\"right_<%=$$.viewId%>\"></div><div mx-guid=\"g5\u001f\" class=\"eD<%if($$.vertical){%> eJ<%}else{%> eI<%}%>\" id=\"rightl_<%=$$.viewId%>\"></div><div mx-guid=\"g6\u001f\" class=\"<%if($$.vertical){%>eG<%}else{%>eE<%}%>\">7\u001d</div><div mx-guid=\"g7\u001f\" class=\"<%if($$.vertical){%>eH<%}else{%>eF<%}%>\">8\u001d</div></div>","subs":[{"keys":["vertical","height","width"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"class=\"eu<%if($$.vertical){%> ew<%}else{%> ev<%}%>\" mx-contextmenu=\"\u001f\u001e_D()\" style=\"<%if($$.vertical){%>height:<%=$$.height%><%}else{%>width:<%=$$.width%><%}%>px\"","attrs":[{"n":"class","p":1,"f":"className"},{"n":"mx-contextmenu"},{"n":"style"}]},{"keys":["vertical"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"class=\"ex<%if($$.vertical){%> ez<%}else{%> ey<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}]},{"keys":["vertical","viewId"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"class=\"eA<%if($$.vertical){%> eC<%}else{%> eB<%}%>\" mx-mousedown=\"\u001f\u001e_dr({start:true})\" id=\"left_<%=$$.viewId%>\"","attrs":[{"n":"class","p":1,"f":"className"},{"n":"mx-mousedown"},{"n":"id","p":1}]},{"keys":["vertical","viewId"],"path":"div[mx-guid=\"g3\u001f\"]","attr":"class=\"eD<%if($$.vertical){%> eJ<%}else{%> eI<%}%>\" id=\"leftl_<%=$$.viewId%>\"","attrs":[{"n":"class","p":1,"f":"className"},{"n":"id","p":1}]},{"keys":["vertical","viewId"],"path":"div[mx-guid=\"g4\u001f\"]","attr":"class=\"eA<%if($$.vertical){%> eC<%}else{%> eB<%}%>\" mx-mousedown=\"\u001f\u001e_dr({end:true})\" id=\"right_<%=$$.viewId%>\"","attrs":[{"n":"class","p":1,"f":"className"},{"n":"mx-mousedown"},{"n":"id","p":1}]},{"keys":["vertical","viewId"],"path":"div[mx-guid=\"g5\u001f\"]","attr":"class=\"eD<%if($$.vertical){%> eJ<%}else{%> eI<%}%>\" id=\"rightl_<%=$$.viewId%>\"","attrs":[{"n":"class","p":1,"f":"className"},{"n":"id","p":1}]},{"keys":["vertical","min"],"path":"div[mx-guid=\"g6\u001f\"]","tmpl":"<%=$$.min%>","s":"7\u001d","attr":"class=\"<%if($$.vertical){%>eG<%}else{%>eE<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["vertical","max"],"path":"div[mx-guid=\"g7\u001f\"]","tmpl":"<%=$$.max%>","s":"8\u001d","attr":"class=\"<%if($$.vertical){%>eH<%}else{%>eF<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"}]},
    init: function (extra) {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.addClass('et');
        me.assign(extra);
        var click = function (e) {
            if (me['_dm'] || me['_bB'])
                return;
            var offset = oNode.offset();
            var vars = me['_dn']();
            var pos = -1;
            if (me['_do']) {
                pos = vars.rMax - e.pageY + offset.top;
            }
            else {
                pos = e.pageX - offset.left;
            }
            var p = (pos - vars.half) / vars.max;
            var v = me['_dp'](p);
            var start = +me['_ao'];
            var end = +me['_aq'];
            var syncLeft = Math.abs(start - v) < Math.abs(end - v);
            if (syncLeft) {
                me['_ds'](v);
                me['_ao'] = v;
                me['_u']();
            }
            else {
                me['_dt'](v);
                me['_aq'] = v;
                me['_u']();
            }
        };
        oNode.on('click', click);
        me.on('destroy', function () {
            oNode.off('click', click);
        });
        me['_h'] = oNode;
    },
    assign: function (ops) {
        var me = this;
        me['_cW'] = +ops.width || 340;
        me['_dq'] = +ops.height || 340;
        me['_E'] = +ops.min || 0;
        me['_F'] = +ops.max || 100;
        me['_cy'] = +ops.step || 1;
        me['_bB'] = (ops.disabled + '') === 'true';
        me['_do'] = (ops.vertical + '') === 'true';
        var s = me['_cy'] + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['_cA'] = i;
        var value = ops.value;
        if (value) {
            value = (value + '').split(',');
            me['_ao'] = +value[0] || 0;
            me['_aq'] = +value[1] || 0;
        }
        else {
            me['_ao'] = 0;
            me['_aq'] = 0;
        }
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            min: me['_E'].toFixed(me['_cA']),
            max: me['_F'].toFixed(me['_cA']),
            viewId: me.id,
            height: me['_dq'],
            width: me['_cW'],
            vertical: me['_do']
        });
        me['_h'][me['_bB'] ? 'addClass' : 'removeClass']('eK');
        me.val([me['_ao'], me['_aq']]);
    },
    '_dn': function () {
        var me = this;
        var rail = me['_h'].find('.eu');
        var tracker = me['_h'].find('.ex');
        var iLeft = $('#left_' + me.id);
        var iRight = $('#right_' + me.id);
        var rMax = me['_do'] ? rail.height() : rail.width();
        var half = iLeft.outerWidth() / 2;
        var max = rMax - half * 2;
        return {
            rail: rail,
            iLeftL: $('#leftl_' + me.id),
            iRightL: $('#rightl_' + me.id),
            tracker: tracker,
            iLeft: iLeft,
            iRight: iRight,
            left: parseInt(iLeft.css(me['_do'] ? 'bottom' : 'left'), 10),
            right: parseInt(iRight.css(me['_do'] ? 'bottom' : 'left'), 10),
            rMax: rMax,
            max: max,
            half: half
        };
    },
    '_ds': function (v) {
        var me = this;
        v = +v;
        var max = me['_F'], min = me['_E'];
        if (v > max)
            v = max;
        else if (v < min)
            v = min;
        var leftPercent = (v - min) / (max - min);
        var vars = me['_dn']();
        var pos = leftPercent * vars.max;
        if (me['_do']) {
            vars.iLeft.css({
                bottom: pos
            });
        }
        else {
            vars.iLeft.css({
                left: pos
            });
        }
        v = me['_dp'](leftPercent);
        var node = vars.iLeftL;
        node.html(v);
        var l = pos + vars.half;
        if (me['_do']) {
            var pHalf = node.height() / 2;
            l -= pHalf;
            node.css({
                bottom: l
            });
            vars.tracker.css({
                bottom: pos + vars.half
            }).height(vars.right - pos);
        }
        else {
            var pHalf = node.width() / 2;
            if (l < pHalf) {
                l = 0;
            }
            else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            }
            else {
                l -= pHalf;
            }
            node.css({
                left: l
            });
            vars.tracker.css({
                left: pos + vars.half
            }).width(vars.right - pos);
        }
        return v;
    },
    '_dt': function (v) {
        var me = this;
        v = +v;
        var max = me['_F'], min = me['_E'];
        if (v > max)
            v = max;
        else if (v < min)
            v = min;
        var rightPercent = (v - min) / (max - min);
        var vars = me['_dn']();
        var pos = rightPercent * vars.max;
        if (me['_do']) {
            vars.iRight.css({
                bottom: pos
            });
        }
        else {
            vars.iRight.css({
                left: pos
            });
        }
        v = me['_dp'](rightPercent);
        var node = vars.iRightL;
        node.html(v);
        var l = pos + vars.half;
        if (me['_do']) {
            var pHalf = node.height() / 2;
            l -= pHalf;
            node.css({
                bottom: l
            });
            vars.tracker.height(pos - vars.left);
        }
        else {
            var pHalf = node.width() / 2;
            if (l < pHalf) {
                l = 0;
            }
            else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            }
            else {
                l -= pHalf;
            }
            node.css({
                left: l
            });
            vars.tracker.width(pos - vars.left);
        }
        return v;
    },
    val: function (v) {
        var me = this;
        if (v) {
            var av = (v + '').split(',');
            var start = +av[0] || 0;
            var end = +av[1] || 0;
            if (start > end) {
                _a = [end, start], start = _a[0], end = _a[1];
            }
            me['_h'].prop('value', [start, end]);
            start = me['_ds'](start);
            end = me['_dt'](end);
            if (me['_ao'] != start || me['_aq'] != end) {
                me['_ao'] = start;
                me['_aq'] = end;
                me['_u']();
            }
        }
        return [+me['_ao'], +me['_aq']];
        var _a;
    },
    '_dp': function (p) {
        var me = this;
        var max = me['_F'], min = me['_E'], step = me['_cy'], v;
        if (p === 0)
            v = min;
        else if (p === 1)
            v = max;
        else {
            v = min + (max - min) * p;
            v = Math.round(v / step) * step;
        }
        v = v.toFixed(me['_cA']);
        return v;
    },
    '_u': function () {
        var me = this;
        var value = [+me['_ao'], +me['_aq']];
        this['_h'].prop('value', value).trigger({
            type: 'change',
            value: value,
            start: +me['_ao'],
            end: +me['_aq']
        });
    },
    '_dr<mousedown>': function (e) {
        e.stopPropagation();
        e.preventDefault();
        var me = this;
        if (me['_bB'])
            return;
        var current = $(e.eventTarget);
        var size = current.outerWidth();
        var min = 0; //最小
        var max = -1;
        if (me['_do']) {
            max = current.parent().height() - size;
        }
        else {
            max = current.parent().width() - size;
        }
        var currentValue = parseInt(current.css(me['_do'] ? 'bottom' : 'left'), 10);
        var dragStartValue = me['_ao'];
        var dragEndValue = me['_aq'];
        DD.begin(e.eventTarget, function (ex) {
            DD.clear();
            var newValue = -1;
            if (me['_do']) {
                newValue = currentValue + e.pageY - ex.pageY;
            }
            else {
                newValue = currentValue + ex.pageX - e.pageX;
            }
            if (newValue < min)
                newValue = min;
            else if (newValue > max)
                newValue = max;
            var p = newValue / max;
            var v = me['_dp'](p);
            var nv = +v;
            if (e.params.end) {
                var start = +me['_ao'];
                if (nv >= start) {
                    if (me['_ao'] != dragStartValue) {
                        dragStartValue = me['_ds'](start);
                    }
                    dragEndValue = me['_dt'](v);
                }
                else {
                    if (me['_ao'] != dragEndValue) {
                        dragEndValue = me['_dt'](start);
                    }
                    dragStartValue = me['_ds'](v);
                }
            }
            else {
                var end = +me['_aq'];
                if (nv <= end) {
                    if (me['_aq'] != dragEndValue) {
                        dragEndValue = me['_dt'](end);
                    }
                    dragStartValue = me['_ds'](v);
                }
                else {
                    if (me['_aq'] != dragStartValue) {
                        dragStartValue = me['_ds'](end);
                    }
                    dragEndValue = me['_dt'](v);
                }
            }
        }, function () {
            if (dragStartValue != me['_ao'] || me['_aq'] != dragEndValue) {
                me['_ao'] = dragStartValue;
                me['_aq'] = dragEndValue;
                me['_u']();
            }
            me['_dm'] = true;
            setTimeout(me.wrapAsync(function () {
                delete me['_dm'];
            }), 20);
        });
    },
    '_D<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});