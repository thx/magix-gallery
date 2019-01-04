/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/range",["magix","$","../mx-dragdrop/index"],(require,exports,module)=>{
/*Magix,$,DD*/


var Magix = require("magix");
var $ = require("$");
var DD = require("../mx-dragdrop/index");
Magix.applyStyle("_zs_galleryl","._zs_galleryld{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*=\"mx-slider/index\"],[mx-view*=\"mx-slider/range\"]{position:relative;display:inline-block;outline:0;cursor:pointer}[mx-view*=\"mx-slider/index\"] ._zs_galleryle,[mx-view*=\"mx-slider/range\"] ._zs_galleryle{position:absolute;top:0;right:-74px;width:64px}[mx-view*=\"mx-slider/index\"][mx-disabled],[mx-view*=\"mx-slider/range\"][mx-disabled]{cursor:not-allowed}[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN,[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before,[mx-view*=\"mx-slider/index\"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM,[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN,[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before,[mx-view*=\"mx-slider/range\"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{background-color:#ccc}._zs_galleryaK{line-height:28px}._zs_galleryaK ._zs_galleryaL{display:inline-block;position:relative;border-radius:2px;background:#f0f0f0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{position:absolute;border-radius:2px;left:0;background-color:#cddbff}._zs_galleryaK ._zs_galleryaL ._zs_galleryaM._zs_gallerylf{height:4px;top:0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaM._zs_gallerylg{width:4px;bottom:0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN{position:absolute;width:8px;height:8px;border-radius:50%;background-color:#4d7fff;outline:0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before{content:\" \";position:absolute;top:-4px;left:-4px;width:16px;height:16px;border-radius:50%;background-color:#4d7fff;opacity:.3}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN._zs_gallerylh{top:-2px}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN._zs_galleryli{left:-2px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylj{position:absolute;font-size:12px;pointer-events:none;line-height:normal}._zs_galleryaK ._zs_galleryaL ._zs_gallerylj._zs_gallerylk{top:-23px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylj._zs_galleryll{right:12px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylm,._zs_galleryaK ._zs_galleryaL ._zs_galleryln,._zs_galleryaK ._zs_galleryaL ._zs_gallerylo,._zs_galleryaK ._zs_galleryaL ._zs_gallerylp{position:absolute;font-size:12px;pointer-events:none;line-height:normal}._zs_galleryaK ._zs_galleryaL ._zs_gallerylm{left:0;top:9px}._zs_galleryaK ._zs_galleryaL ._zs_galleryln{right:0;top:9px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylo{bottom:0;left:12px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylp{top:0;left:12px}._zs_galleryaK ._zs_galleryaL._zs_gallerylq{height:4px;top:-2px}._zs_galleryaK ._zs_galleryaL._zs_gallerylr{width:4px;left:8px}._zs_galleryaK ._zs_galleryls{margin-left:3px;color:#999}");
var DefaultSize = 280;
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
} ; var $g = '', $_temp, $p = '', vertical = $$.vertical, height = $$.height, width = $$.width, viewId = $$.viewId, min = $$.min, max = $$.max; $p += '<div mxa="_zs_galleryc;:_" class="_zs_galleryaK"><span class="_zs_galleryaL'; if (vertical) {
    ;
    $p += ' _zs_gallerylr';
}
else {
    ;
    $p += ' _zs_gallerylq';
} ; $p += '" mx-contextmenu="' + $viewId + '__H()" style="'; if (vertical) {
    ;
    $p += 'height:' + $e(height);
}
else {
    ;
    $p += 'width:' + $e(width);
} ; $p += 'px"><span class="_zs_galleryaM'; if (vertical) {
    ;
    $p += ' _zs_gallerylg';
}
else {
    ;
    $p += ' _zs_gallerylf';
} ; $p += '"></span><span tabindex="0" mx-keydown="' + $viewId + '__dp({start:true})" class="_zs_galleryaN'; if (vertical) {
    ;
    $p += ' _zs_galleryli';
}
else {
    ;
    $p += ' _zs_gallerylh';
} ; $p += '" mx-mousedown="' + $viewId + '__dj({start:true})" id="left_' + $e(viewId) + '"></span><span class="_zs_gallerylj'; if (vertical) {
    ;
    $p += ' _zs_galleryll';
}
else {
    ;
    $p += ' _zs_gallerylk';
} ; $p += '" id="leftl_' + $e(viewId) + '"></span><span tabindex="0" mx-keydown="' + $viewId + '__dp()" class="_zs_galleryaN'; if (vertical) {
    ;
    $p += ' _zs_galleryli';
}
else {
    ;
    $p += ' _zs_gallerylh';
} ; $p += '" mx-mousedown="' + $viewId + '__dj({end:true})" id="right_' + $e(viewId) + '"></span><span class="_zs_gallerylj'; if (vertical) {
    ;
    $p += ' _zs_galleryll';
}
else {
    ;
    $p += ' _zs_gallerylk';
} ; $p += '" id="rightl_' + $e(viewId) + '"></span><span class="'; if (vertical) {
    ;
    $p += '_zs_gallerylo';
}
else {
    ;
    $p += '_zs_gallerylm';
} ; $p += '">' + $e(min) + '</span><span class="'; if (vertical) {
    ;
    $p += '_zs_gallerylp';
}
else {
    ;
    $p += '_zs_galleryln';
} ; $p += '">' + $e(max) + '</span></span></div>'; return $p; },
    mixins: [DD],
    init: function (extra) {
        var me = this;
        var oNode = $('#' + me.id);
        me.assign(extra);
        var click = function (e) {
            if (me['__df'] || me['__d_']) {
                return;
            }
            var offset = oNode.offset();
            var vars = me['__dg']();
            var pos = -1;
            if (me['__da']) {
                pos = vars.rMax - e.pageY + offset.top;
            }
            else {
                pos = e.pageX - offset.left;
            }
            var p = (pos - vars.half) / vars.max;
            var v = me['__dh'](p);
            var start = +me['__Z'];
            var end = +me['__dl'];
            var syncLeft = Math.abs(start - v) < Math.abs(end - v);
            if (syncLeft) {
                me['__dm'](v);
                me['__Z'] = v;
                me['__y']();
                Magix.node('left_' + me.id).focus();
            }
            else {
                me['__dn'](v);
                me['__dl'] = v;
                me['__y']();
                Magix.node('right_' + me.id).focus();
            }
        };
        oNode.on('click', click);
        me.on('destroy', function () {
            oNode.off('click', click);
        });
        me['__j'] = oNode;
    },
    assign: function (ops) {
        var me = this;
        me['__cp'] = +ops.width || DefaultSize;
        me['__cV'] = +ops.height || DefaultSize;
        me['__cW'] = +ops.min || 0;
        me['__cX'] = +ops.max || 100;
        me['__cY'] = +ops.step || 1;
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me['__d_'] = disabledNode && (disabledNode.length > 0);
        me['__da'] = (ops.vertical + '') === 'true';
        var s = me['__cY'] + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['__dc'] = i;
        var value = ops.value;
        if (value) {
            value = (value + '').split(',');
            me['__Z'] = +value[0] || 0;
            me['__dl'] = +value[1] || 0;
        }
        else {
            me['__Z'] = me['__cW'];
            me['__dl'] = (me['__cW'] + me['__cX']) / 2;
        }
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            min: me['__cW'].toFixed(me['__dc']),
            max: me['__cX'].toFixed(me['__dc']),
            viewId: me.id,
            height: me['__cV'],
            width: me['__cp'],
            vertical: me['__da']
        });
        me.val([me['__Z'], me['__dl']]);
    },
    '__dg': function () {
        var me = this;
        var rail = me['__j'].find('._zs_galleryaL');
        var tracker = me['__j'].find('._zs_galleryaM');
        var iLeft = $('#left_' + me.id);
        var iRight = $('#right_' + me.id);
        var rMax = me['__da'] ? rail.height() : rail.width();
        var half = iLeft.outerWidth() / 2;
        var max = rMax - half * 2;
        return {
            rail: rail,
            iLeftL: $('#leftl_' + me.id),
            iRightL: $('#rightl_' + me.id),
            tracker: tracker,
            iLeft: iLeft,
            iRight: iRight,
            left: parseInt(iLeft.css(me['__da'] ? 'bottom' : 'left'), 10),
            right: parseInt(iRight.css(me['__da'] ? 'bottom' : 'left'), 10),
            rMax: rMax,
            max: max,
            half: half
        };
    },
    '__dm': function (v) {
        var me = this;
        v = +v;
        var max = me['__cX'], min = me['__cW'];
        if (v > max)
            v = max;
        else if (v < min)
            v = min;
        var leftPercent = (v - min) / (max - min);
        var vars = me['__dg']();
        var pos = leftPercent * vars.max;
        if (me['__da']) {
            vars.iLeft.css({
                bottom: pos
            });
        }
        else {
            vars.iLeft.css({
                left: pos
            });
        }
        v = me['__dh'](leftPercent);
        var node = vars.iLeftL;
        node.html(v);
        var l = pos + vars.half;
        if (me['__da']) {
            var pHalf = node.height() / 2;
            if (l - pHalf < 0) {
                l = 0;
            }
            else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            }
            else {
                l -= pHalf;
            }
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
    '__dn': function (v) {
        var me = this;
        v = +v;
        var max = me['__cX'], min = me['__cW'];
        if (v > max)
            v = max;
        else if (v < min)
            v = min;
        var rightPercent = (v - min) / (max - min);
        var vars = me['__dg']();
        var pos = rightPercent * vars.max;
        if (me['__da']) {
            vars.iRight.css({
                bottom: pos
            });
        }
        else {
            vars.iRight.css({
                left: pos
            });
        }
        v = me['__dh'](rightPercent);
        var node = vars.iRightL;
        node.html(v);
        var l = pos + vars.half;
        if (me['__da']) {
            var pHalf = node.height() / 2;
            if (l - pHalf < 0) {
                l = 0;
            }
            else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            }
            else {
                l -= pHalf;
            }
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
            me['__j'].prop('value', [start, end]);
            start = me['__dm'](start);
            end = me['__dn'](end);
            if (me['__Z'] != start || me['__dl'] != end) {
                me['__Z'] = start;
                me['__dl'] = end;
                me['__y']();
            }
        }
        return [+me['__Z'], +me['__dl']];
        var _a;
    },
    '__dh': function (p) {
        var me = this;
        var max = me['__cX'], min = me['__cW'], step = me['__cY'], v;
        if (p === 0)
            v = min;
        else if (p === 1)
            v = max;
        else {
            v = min + (max - min) * p;
            v = Math.round(v / step) * step;
        }
        v = v.toFixed(me['__dc']);
        return v;
    },
    '__y': function () {
        var me = this;
        var value = [+me['__Z'], +me['__dl']];
        this['__j'].prop('value', value).trigger({
            type: 'change',
            value: value,
            start: +me['__Z'],
            end: +me['__dl']
        });
    },
    '__do': function (start, end) {
        var me = this;
        if (start != me['__Z'] ||
            end != me['__dl']) {
            me['__Z'] = start;
            me['__dl'] = end;
            me['__y']();
        }
    },
    '__dj<mousedown>': function (e) {
        var me = this;
        if (me['__d_']) {
            return;
        }
        var current = $(e.eventTarget);
        var size = current.outerWidth();
        var min = 0; //最小
        var max = -1;
        if (me['__da']) {
            max = current.parent().height() - size;
        }
        else {
            max = current.parent().width() - size;
        }
        var currentValue = parseInt(current.css(me['__da'] ? 'bottom' : 'left'), 10);
        var dragStartValue = me['__Z'];
        var dragEndValue = me['__dl'];
        me['__di'] = 1;
        me.dragdrop(e.eventTarget, function (ex) {
            DD.clear();
            var newValue = -1;
            if (me['__da']) {
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
            var v = me['__dh'](p);
            var nv = +v;
            if (e.params.end) {
                var start = +me['__Z'];
                if (nv >= start) {
                    if (me['__Z'] != dragStartValue) {
                        dragStartValue = me['__dm'](start);
                    }
                    dragEndValue = me['__dn'](v);
                    Magix.node('right_' + me.id).focus();
                }
                else {
                    if (me['__Z'] != dragEndValue) {
                        dragEndValue = me['__dn'](start);
                    }
                    dragStartValue = me['__dm'](v);
                    Magix.node('left_' + me.id).focus();
                }
            }
            else {
                var end = +me['__dl'];
                if (nv <= end) {
                    if (me['__dl'] != dragEndValue) {
                        dragEndValue = me['__dn'](end);
                    }
                    dragStartValue = me['__dm'](v);
                    Magix.node('left_' + me.id).focus();
                }
                else {
                    if (me['__dl'] != dragStartValue) {
                        dragStartValue = me['__dm'](end);
                    }
                    dragEndValue = me['__dn'](v);
                    Magix.node('right_' + me.id).focus();
                }
            }
        }, function () {
            me['__do'](dragStartValue, dragEndValue);
            me['__df'] = true;
            setTimeout(me.wrapAsync(function () {
                delete me['__df'];
            }), 20);
            delete me['__di'];
        });
    },
    '__dp<keydown>': function (e) {
        var me = this, step = me['__cY'], move;
        if (me['__di'])
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
            var srcStartValue = me['__Z'];
            var startValue = +srcStartValue;
            var srcEndValue = me['__dl'];
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
                    srcStartValue = me['__dm'](endValue);
                }
                if (startValue != +srcEndValue) {
                    srcEndValue = me['__dn'](startValue);
                }
            }
            else {
                if (start) {
                    srcStartValue = me['__dm'](startValue);
                }
                else {
                    srcEndValue = me['__dn'](endValue);
                }
            }
            me['__do'](srcStartValue, srcEndValue);
        }
    },
    '__H<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});