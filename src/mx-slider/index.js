/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/index",["magix","$","../mx-dragdrop/index","./style"],(require,exports,module)=>{
/*Magix,$,DD*/


"use strict";
exports.__esModule = true;
var Magix = require("magix");
var $ = require("$");
require("./style");
var DD = require("../mx-dragdrop/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_eF<%if($$.vertical){%> _eH<%}else{%> _eG<%}%>\" mx-contextmenu=\"\u001f\u001e__E()\" style=\"<%if($$.vertical){%>height:<%=$$.height%><%}else{%>width:<%=$$.width%><%}%>px\"><div class=\"_eI<%if($$.vertical){%> _eK<%}else{%> _eJ<%}%>\"></div><div class=\"_eL<%if($$.vertical){%> _eN<%}else{%> _eM<%}%>\" mx-mousedown=\"\u001f\u001e__eF()\"></div><div class=\"_eO<%if($$.vertical){%> _eU<%}else{%> _eT<%}%>\"></div><div class=\"<%if($$.vertical){%>_eR<%}else{%>_eP<%}%>\"><%=$$.min%></div><div class=\"<%if($$.vertical){%>_eS<%}else{%>_eQ<%}%>\"><%=$$.max%></div></div>"},
    init: function (extra) {
        var me = this;
        var oNode = $('#' + me.id);
        oNode.addClass('_eE');
        me.assign(extra);
        var click = function (e) {
            if (me['__ez'] || me['__cv'])
                return;
            var offset = oNode.offset();
            var vars = me['__eA']();
            var pos = -1;
            if (me['__eB']) {
                pos = vars.rMax - e.pageY + offset.top;
            }
            else {
                pos = e.pageX - offset.left;
            }
            var p = (pos - vars.half) / vars.max;
            var v = me['__eC'](p);
            me.val(v);
        };
        var keydown = function (e) {
            if (me['__eD'])
                return;
            if (e.keyCode == 37 || e.keyCode == 40) {
                e.preventDefault();
                var v = +me['__cJ'];
                v -= me['__dK'];
                me.val(v);
            }
            else if (e.keyCode == 39 || e.keyCode == 38) {
                e.preventDefault();
                var v = +me['__cJ'];
                v += me['__dK'];
                me.val(v);
            }
        };
        oNode.on('click', click);
        oNode.on('keydown', keydown);
        me.on('destroy', function () {
            oNode.off('click', click);
            oNode.off('keydown', keydown);
            DD.end();
        });
        me['__i'] = oNode;
    },
    assign: function (ops) {
        var me = this;
        me['__dt'] = +ops.width || 340;
        me['__eE'] = +ops.height || 340;
        me['__F'] = +ops.min || 0;
        me['__G'] = +ops.max || 100;
        me['__dK'] = +ops.step || 1;
        me['__cv'] = (ops.disabled + '') === 'true';
        me['__eB'] = (ops.vertical + '') === 'true';
        var s = me['__dK'] + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['__dM'] = i;
        me['__cJ'] = +ops.value || 0;
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            min: me['__F'].toFixed(me['__dM']),
            max: me['__G'].toFixed(me['__dM']),
            width: me['__dt'],
            height: me['__eE'],
            vertical: me['__eB']
        });
        me['__i'][me['__cv'] ? 'addClass' : 'removeClass']('_eV').prop('tabindex', me['__cv'] ? -1 : 0);
        me.val(me['__cJ']);
    },
    '__eA': function () {
        var me = this;
        var rail = me['__i'].find('._eF');
        var tracker = me['__i'].find('._eI');
        var indicator = me['__i'].find('._eL');
        var pLabel = me['__i'].find('._eO');
        var half = indicator.outerWidth() / 2;
        var rMax = me['__eB'] ? rail.height() : rail.width();
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
            me['__i'].prop('value', nv);
            var max = me['__G'], min = me['__F'];
            if (nv > max)
                nv = max;
            else if (nv < min)
                nv = min;
            var p = (nv - min) / (max - min);
            var vars = me['__eA']();
            var pos = p * vars.max;
            if (me['__eB']) {
                vars.indicator.css({
                    bottom: pos
                });
            }
            else {
                vars.indicator.css({
                    left: pos
                });
            }
            v = me['__eC'](p);
            var node = vars.pLabel;
            node.html(v);
            var l = pos + vars.half;
            if (me['__eB']) {
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
            if (me['__eB']) {
                vars.tracker.height(pos + vars.half);
            }
            else {
                vars.tracker.width(pos + vars.half);
            }
            if (!ignoreSyncValue) {
                if (me['__cJ'] != v) {
                    me['__v'](v);
                }
                me['__cJ'] = v;
            }
        }
        return +me['__cJ'];
    },
    '__eC': function (p) {
        var me = this;
        var max = me['__G'], min = me['__F'], step = me['__dK'], v;
        if (p === 0)
            v = min;
        else if (p === 1)
            v = max;
        else {
            v = min + (max - min) * p;
            v = Math.round(v / step) * step;
        }
        v = v.toFixed(me['__dM']);
        return v;
    },
    '__v': function (p) {
        this['__i'].prop('value', +p).trigger({
            type: 'change',
            value: +p
        });
    },
    '__eF<mousedown>': function (e) {
        var me = this;
        if (me['__cv'])
            return;
        var current = $(e.eventTarget);
        var size = current.outerWidth();
        var min = 0; //最小
        var max = -1;
        if (me['__eB']) {
            max = current.parent().height() - size;
        }
        else {
            max = current.parent().width() - size;
        }
        var currentValue = parseInt(current.css(me['__eB'] ? 'bottom' : 'left'), 10);
        var dragValue = me['__cJ'];
        me['__eD'] = 1;
        DD.begin(e.eventTarget, function (ex) {
            DD.clear();
            var newValue = -1;
            if (me['__eB']) {
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
            me.val(dragValue = me['__eC'](p), true);
        }, function () {
            if (me['__cJ'] != dragValue) {
                me['__cJ'] = dragValue;
                me['__v'](dragValue);
            }
            me['__ez'] = true;
            setTimeout(me.wrapAsync(function () {
                delete me['__ez'];
            }), 20);
            delete me['__eD'];
        });
    },
    '__E<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});