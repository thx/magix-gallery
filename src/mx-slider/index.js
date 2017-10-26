/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-slider/index',["magix","$","../mx-dragdrop/index","./style"],function(require,exports,module){
/*Magix,$,DD*/

/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@taobao.com
 */

var Magix = require('magix');
var $ = require('$');
require('./style');
var DD = require('../mx-dragdrop/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"eu<%if($$.vertical){%> ew<%}else{%> ev<%}%>\" mx-contextmenu=\"\u001f\u001e_D()\" style=\"<%if($$.vertical){%>height:<%=$$.height%><%}else{%>width:<%=$$.width%><%}%>px\"><div mx-guid=\"g1\u001f\" class=\"ex<%if($$.vertical){%> ez<%}else{%> ey<%}%>\"></div><div mx-guid=\"g2\u001f\" class=\"eA<%if($$.vertical){%> eC<%}else{%> eB<%}%>\" mx-mousedown=\"\u001f\u001e_dr()\"></div><div mx-guid=\"g3\u001f\" class=\"eD<%if($$.vertical){%> eJ<%}else{%> eI<%}%>\"></div><div mx-guid=\"g4\u001f\" class=\"<%if($$.vertical){%>eG<%}else{%>eE<%}%>\">5\u001d</div><div mx-guid=\"g5\u001f\" class=\"<%if($$.vertical){%>eH<%}else{%>eF<%}%>\">6\u001d</div></div>","subs":[{"keys":["vertical","height","width"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"class=\"eu<%if($$.vertical){%> ew<%}else{%> ev<%}%>\" mx-contextmenu=\"\u001f\u001e_D()\" style=\"<%if($$.vertical){%>height:<%=$$.height%><%}else{%>width:<%=$$.width%><%}%>px\"","attrs":[{"n":"class","p":1,"f":"className"},{"n":"mx-contextmenu"},{"n":"style"}]},{"keys":["vertical"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"class=\"ex<%if($$.vertical){%> ez<%}else{%> ey<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}]},{"keys":["vertical"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"class=\"eA<%if($$.vertical){%> eC<%}else{%> eB<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}]},{"keys":["vertical"],"path":"div[mx-guid=\"g3\u001f\"]","attr":"class=\"eD<%if($$.vertical){%> eJ<%}else{%> eI<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}]},{"keys":["vertical","min"],"path":"div[mx-guid=\"g4\u001f\"]","tmpl":"<%=$$.min%>","s":"5\u001d","attr":"class=\"<%if($$.vertical){%>eG<%}else{%>eE<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["vertical","max"],"path":"div[mx-guid=\"g5\u001f\"]","tmpl":"<%=$$.max%>","s":"6\u001d","attr":"class=\"<%if($$.vertical){%>eH<%}else{%>eF<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"}]},
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
            me.val(v);
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
        me['_bN'] = +ops.value || 0;
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            min: me['_E'].toFixed(me['_cA']),
            max: me['_F'].toFixed(me['_cA']),
            width: me['_cW'],
            height: me['_dq'],
            vertical: me['_do']
        });
        me['_h'][me['_bB'] ? 'addClass' : 'removeClass']('eK');
        me.val(me['_bN']);
    },
    '_dn': function () {
        var me = this;
        var rail = me['_h'].find('.eu');
        var tracker = me['_h'].find('.ex');
        var indicator = me['_h'].find('.eA');
        var pLabel = me['_h'].find('.eD');
        var half = indicator.outerWidth() / 2;
        var rMax = me['_do'] ? rail.height() : rail.width();
        var max = rMax - half * 2;
        return {
            rail: rail,
            pLabel: pLabel,
            tracker: tracker,
            indicator: indicator,
            rMax: rMax,
            max: max,
            half: half
        };
    },
    val: function (v, ignoreSyncValue) {
        var me = this;
        var nv = +v;
        if (nv || nv === 0) {
            me['_h'].prop('value', nv);
            var max = me['_F'], min = me['_E'];
            if (nv > max)
                nv = max;
            else if (nv < min)
                nv = min;
            var p = (nv - min) / (max - min);
            var vars = me['_dn']();
            var pos = p * vars.max;
            if (me['_do']) {
                vars.indicator.css({
                    bottom: pos
                });
            }
            else {
                vars.indicator.css({
                    left: pos
                });
            }
            v = me['_dp'](p);
            var node = vars.pLabel;
            node.html(v);
            var l = pos + vars.half;
            if (me['_do']) {
                var pHalf = node.height() / 2;
                l -= pHalf;
                node.css({
                    bottom: l
                });
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
            }
            if (me['_do']) {
                vars.tracker.height(pos + vars.half);
            }
            else {
                vars.tracker.width(pos + vars.half);
            }
            if (!ignoreSyncValue) {
                if (me['_bN'] != v) {
                    me['_u'](v);
                }
                me['_bN'] = v;
            }
        }
        return +me['_bN'];
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
    '_u': function (p) {
        this['_h'].prop('value', +p).trigger({
            type: 'change',
            value: +p
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
        var dragValue = me['_bN'];
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
            me.val(dragValue = me['_dp'](p), true);
        }, function () {
            if (me['_bN'] != dragValue) {
                me['_bN'] = dragValue;
                me['_u'](dragValue);
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