/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/range",["magix","$","../mx-dragdrop/index","./style"],(require,exports,module)=>{
/*Magix,$,DD*/

/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */

var Magix = require("magix");
var $ = require("$");
var DD = require("../mx-dragdrop/index");
require("./style");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"_eF<%if($$.vertical){%> _eH<%}else{%> _eG<%}%>\" mx-contextmenu=\"\u001f\u001e__E()\" style=\"<%if($$.vertical){%>height:<%=$$.height%><%}else{%>width:<%=$$.width%><%}%>px\"><div class=\"_eI<%if($$.vertical){%> _eK<%}else{%> _eJ<%}%>\"></div><div tabindex=\"0\" mx-keydown=\"\u001f\u001e__eJ({start:true})\" class=\"_eL<%if($$.vertical){%> _eN<%}else{%> _eM<%}%>\" mx-mousedown=\"\u001f\u001e__eF({start:true})\" id=\"left_<%=$$.viewId%>\"></div><div class=\"_eO<%if($$.vertical){%> _eU<%}else{%> _eT<%}%>\" id=\"leftl_<%=$$.viewId%>\"></div><div tabindex=\"0\" mx-keydown=\"\u001f\u001e__eJ()\" class=\"_eL<%if($$.vertical){%> _eN<%}else{%> _eM<%}%>\" mx-mousedown=\"\u001f\u001e__eF({end:true})\" id=\"right_<%=$$.viewId%>\"></div><div class=\"_eO<%if($$.vertical){%> _eU<%}else{%> _eT<%}%>\" id=\"rightl_<%=$$.viewId%>\"></div><div class=\"<%if($$.vertical){%>_eR<%}else{%>_eP<%}%>\"><%=$$.min%></div><div class=\"<%if($$.vertical){%>_eS<%}else{%>_eQ<%}%>\"><%=$$.max%></div></div>"},
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
            var start = +me['__aq'];
            var end = +me['__be'];
            var syncLeft = Math.abs(start - v) < Math.abs(end - v);
            if (syncLeft) {
                me['__eG'](v);
                me['__aq'] = v;
                me['__v']();
                Magix.node('left_' + me.id).focus();
            }
            else {
                me['__eH'](v);
                me['__be'] = v;
                me['__v']();
                Magix.node('right_' + me.id).focus();
            }
        };
        oNode.on('click', click);
        me.on('destroy', function () {
            oNode.off('click', click);
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
        var value = ops.value;
        if (value) {
            value = (value + '').split(',');
            me['__aq'] = +value[0] || 0;
            me['__be'] = +value[1] || 0;
        }
        else {
            me['__aq'] = 0;
            me['__be'] = 0;
        }
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            min: me['__F'].toFixed(me['__dM']),
            max: me['__G'].toFixed(me['__dM']),
            viewId: me.id,
            height: me['__eE'],
            width: me['__dt'],
            vertical: me['__eB']
        });
        me['__i'][me['__cv'] ? 'addClass' : 'removeClass']('_eV');
        me.val([me['__aq'], me['__be']]);
    },
    '__eA': function () {
        var me = this;
        var rail = me['__i'].find('._eF');
        var tracker = me['__i'].find('._eI');
        var iLeft = $('#left_' + me.id);
        var iRight = $('#right_' + me.id);
        var rMax = me['__eB'] ? rail.height() : rail.width();
        var half = iLeft.outerWidth() / 2;
        var max = rMax - half * 2;
        return {
            rail: rail,
            iLeftL: $('#leftl_' + me.id),
            iRightL: $('#rightl_' + me.id),
            tracker: tracker,
            iLeft: iLeft,
            iRight: iRight,
            left: parseInt(iLeft.css(me['__eB'] ? 'bottom' : 'left'), 10),
            right: parseInt(iRight.css(me['__eB'] ? 'bottom' : 'left'), 10),
            rMax: rMax,
            max: max,
            half: half
        };
    },
    '__eG': function (v) {
        var me = this;
        v = +v;
        var max = me['__G'], min = me['__F'];
        if (v > max)
            v = max;
        else if (v < min)
            v = min;
        var leftPercent = (v - min) / (max - min);
        var vars = me['__eA']();
        var pos = leftPercent * vars.max;
        if (me['__eB']) {
            vars.iLeft.css({
                bottom: pos
            });
        }
        else {
            vars.iLeft.css({
                left: pos
            });
        }
        v = me['__eC'](leftPercent);
        var node = vars.iLeftL;
        node.html(v);
        var l = pos + vars.half;
        if (me['__eB']) {
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
    '__eH': function (v) {
        var me = this;
        v = +v;
        var max = me['__G'], min = me['__F'];
        if (v > max)
            v = max;
        else if (v < min)
            v = min;
        var rightPercent = (v - min) / (max - min);
        var vars = me['__eA']();
        var pos = rightPercent * vars.max;
        if (me['__eB']) {
            vars.iRight.css({
                bottom: pos
            });
        }
        else {
            vars.iRight.css({
                left: pos
            });
        }
        v = me['__eC'](rightPercent);
        var node = vars.iRightL;
        node.html(v);
        var l = pos + vars.half;
        if (me['__eB']) {
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
            me['__i'].prop('value', [start, end]);
            start = me['__eG'](start);
            end = me['__eH'](end);
            if (me['__aq'] != start || me['__be'] != end) {
                me['__aq'] = start;
                me['__be'] = end;
                me['__v']();
            }
        }
        return [+me['__aq'], +me['__be']];
        var _a;
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
    '__v': function () {
        var me = this;
        var value = [+me['__aq'], +me['__be']];
        this['__i'].prop('value', value).trigger({
            type: 'change',
            value: value,
            start: +me['__aq'],
            end: +me['__be']
        });
    },
    '__eI': function (start, end) {
        var me = this;
        if (start != me['__aq'] ||
            end != me['__be']) {
            me['__aq'] = start;
            me['__be'] = end;
            me['__v']();
        }
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
        var dragStartValue = me['__aq'];
        var dragEndValue = me['__be'];
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
            var v = me['__eC'](p);
            var nv = +v;
            if (e.params.end) {
                var start = +me['__aq'];
                if (nv >= start) {
                    if (me['__aq'] != dragStartValue) {
                        dragStartValue = me['__eG'](start);
                    }
                    dragEndValue = me['__eH'](v);
                    Magix.node('right_' + me.id).focus();
                }
                else {
                    if (me['__aq'] != dragEndValue) {
                        dragEndValue = me['__eH'](start);
                    }
                    dragStartValue = me['__eG'](v);
                    Magix.node('left_' + me.id).focus();
                }
            }
            else {
                var end = +me['__be'];
                if (nv <= end) {
                    if (me['__be'] != dragEndValue) {
                        dragEndValue = me['__eH'](end);
                    }
                    dragStartValue = me['__eG'](v);
                    Magix.node('left_' + me.id).focus();
                }
                else {
                    if (me['__be'] != dragStartValue) {
                        dragStartValue = me['__eG'](end);
                    }
                    dragEndValue = me['__eH'](v);
                    Magix.node('right_' + me.id).focus();
                }
            }
        }, function () {
            me['__eI'](dragStartValue, dragEndValue);
            me['__ez'] = true;
            setTimeout(me.wrapAsync(function () {
                delete me['__ez'];
            }), 20);
            delete me['__eD'];
        });
    },
    '__eJ<keydown>': function (e) {
        var me = this, step = me['__dK'], move;
        if (me['__eD'])
            return;
        if (e.keyCode == 37 || e.keyCode == 40) {
            e.preventDefault();
            step = -step;
            move = true;
        }
        else if (e.keyCode == 39 || e.keyCode == 38) {
            e.preventDefault();
            move = true;
        }
        if (move) {
            var srcStartValue = me['__aq'];
            var startValue = +srcStartValue;
            var srcEndValue = me['__be'];
            var endValue = +srcEndValue;
            var start = e.params.start;
            if (start) {
                startValue += step;
            }
            else {
                endValue += step;
            }
            if (startValue > endValue) {
                if (start) {
                    Magix.node('right_' + me.id).focus();
                }
                else {
                    Magix.node('left_' + me.id).focus();
                }
                if (endValue != +srcStartValue) {
                    srcStartValue = me['__eG'](endValue);
                }
                if (startValue != +srcEndValue) {
                    srcEndValue = me['__eH'](startValue);
                }
            }
            else {
                if (start) {
                    srcStartValue = me['__eG'](startValue);
                }
                else {
                    srcEndValue = me['__eH'](endValue);
                }
            }
            me['__eI'](srcStartValue, srcEndValue);
        }
    },
    '__E<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});