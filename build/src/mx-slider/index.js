/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/index",["magix","$","../mx-dragdrop/index"],(require,exports,module)=>{
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
} ; var $g = '', $_temp, $p = '', vertical = $$.vertical, height = $$.height, width = $$.width, min = $$.min, max = $$.max, needInput = $$.needInput, viewId = $$.viewId, disabled = $$.disabled; $p += '<div mxa="_zs_galleryc/:_" class="_zs_galleryaK"><span class="_zs_galleryaL '; if (vertical) {
    ;
    $p += ' _zs_gallerylr ';
}
else {
    ;
    $p += ' _zs_gallerylq ';
} ; $p += '" mx-contextmenu="' + $viewId + '__H()" style="'; if (vertical) {
    ;
    $p += 'height:' + $e(height);
}
else {
    ;
    $p += 'width:' + $e(width);
} ; $p += 'px"><span class="_zs_galleryaM '; if (vertical) {
    ;
    $p += ' _zs_gallerylg ';
}
else {
    ;
    $p += ' _zs_gallerylf ';
} ; $p += '"></span><span class="_zs_galleryaN '; if (vertical) {
    ;
    $p += ' _zs_galleryli ';
}
else {
    ;
    $p += ' _zs_gallerylh ';
} ; $p += '" mx-mousedown="' + $viewId + '__dj()"></span><span class="_zs_gallerylj '; if (vertical) {
    ;
    $p += ' _zs_galleryll ';
}
else {
    ;
    $p += ' _zs_gallerylk ';
} ; $p += '"></span><span class="'; if (vertical) {
    ;
    $p += ' _zs_gallerylo ';
}
else {
    ;
    $p += ' _zs_gallerylm ';
} ; $p += '">' + $e(min) + '</span><span class="'; if (vertical) {
    ;
    $p += ' _zs_gallerylp ';
}
else {
    ;
    $p += ' _zs_galleryln';
} ; $p += '">' + $e(max) + '</span></span></div>'; if (needInput) {
    ;
    $p += '<input class="input input-small _zs_galleryle" id="' + $e(viewId) + '_input" ';
    if (disabled) {
        ;
        $p += ' disabled="true" ';
    }
    ;
    $p += ' mx-keyup="' + $viewId + '__al()" mx-focusout="' + $viewId + '__bV()"/>';
} ; return $p; },
    mixins: [DD],
    init: function (extra) {
        var me = this;
        me.assign(extra);
        me['__j'] = $('#' + me.id);
    },
    assign: function (ops) {
        var me = this;
        me['__cp'] = +ops.width || DefaultSize;
        me['__cV'] = +ops.height || DefaultSize;
        me['__cW'] = +ops.min || 0;
        me['__cX'] = +ops.max || 100;
        me['__cY'] = +ops.step || 1;
        me['__cZ'] = ops.tip || '';
        var disabledNode = $('#' + me.id + '[mx-disabled]');
        me['__d_'] = disabledNode && (disabledNode.length > 0);
        me['__da'] = (ops.vertical + '') === 'true';
        me['__db'] = ((ops.needInput + '') === 'true') && !me['__da'];
        var s = me['__cY'] + '';
        var i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        }
        else {
            i = 0;
        }
        me['__dc'] = i;
        var value;
        if (ops.value) {
            value = +ops.value;
        }
        else {
            // 默认取中间值
            value = ((me['__cX'] + me['__cW']) / 2);
        }
        me['__dd'] = value;
        return true;
    },
    render: function () {
        var me = this;
        me.updater.digest({
            viewId: me.id,
            min: me['__cW'].toFixed(me['__dc']),
            max: me['__cX'].toFixed(me['__dc']),
            width: me['__cp'],
            height: me['__cV'],
            vertical: me['__da'],
            needInput: me['__db'],
            disabled: me['__d_']
        });
        me.val(me['__dd']);
        var railWrapper = me['__j'].find('._zs_galleryaK');
        me['__de'] = railWrapper;
        var click = function (e) {
            if (me['__df'] || me['__d_']) {
                return;
            }
            var offset = railWrapper.offset();
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
            me.val(v);
        };
        var keydown = function (e) {
            if (me['__di']) {
                return;
            }
            if (e.keyCode == 37 || e.keyCode == 40) {
                e.preventDefault();
                var v = +me['__dd'];
                v -= me['__cY'];
                me.val(v);
            }
            else if (e.keyCode == 39 || e.keyCode == 38) {
                e.preventDefault();
                var v = +me['__dd'];
                v += me['__cY'];
                me.val(v);
            }
        };
        railWrapper.on('click', click);
        railWrapper.on('keydown', keydown);
        me.on('destroy', function () {
            railWrapper.off('click', click);
            railWrapper.off('keydown', keydown);
        });
    },
    '__dg': function () {
        var me = this;
        var rail = me['__j'].find('._zs_galleryaL');
        var tracker = me['__j'].find('._zs_galleryaM');
        var indicator = me['__j'].find('._zs_galleryaN');
        var pLabel = me['__j'].find('._zs_gallerylj');
        var inputArea = me['__j'].find('._zs_galleryle');
        var half = indicator.outerWidth() / 2;
        var rMax = me['__da'] ? rail.height() : rail.width();
        var max = rMax - half * 2;
        return {
            rail: rail,
            pLabel: pLabel,
            inputArea: inputArea,
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
            me['__j'].prop('value', nv);
            var max = me['__cX'], min = me['__cW'];
            if (nv > max)
                nv = max;
            else if (nv < min)
                nv = min;
            var p = (nv - min) / (max - min);
            var vars = me['__dg']();
            var pos = p * vars.max;
            if (me['__da']) {
                vars.indicator.css({
                    bottom: pos
                });
            }
            else {
                vars.indicator.css({
                    left: pos
                });
            }
            v = me['__dh'](p);
            var node = vars.pLabel;
            node.html(v + (me['__cZ'] ? ('<span class="_zs_galleryls">' + me['__cZ'] + '</span>') : ''));
            if (vars.inputArea && vars.inputArea.length) {
                vars.inputArea.val(v);
            }
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
            if (me['__da']) {
                vars.tracker.height(pos + vars.half);
            }
            else {
                vars.tracker.width(pos + vars.half);
            }
            if (!ignoreSyncValue) {
                if (me['__dd'] != v) {
                    me['__y'](v);
                }
                me['__dd'] = v;
            }
        }
        return +me['__dd'];
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
    '__y': function (p) {
        this['__j'].prop('value', +p).trigger({
            type: 'change',
            value: +p
        });
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
        var dragValue = me['__dd'];
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
            if (newValue < min) {
                newValue = min;
            }
            else if (newValue > max) {
                newValue = max;
            }
            var p = newValue / max;
            me.val(dragValue = me['__dh'](p), true);
        }, function () {
            if (me['__dd'] != dragValue) {
                me['__dd'] = dragValue;
                me['__y'](dragValue);
            }
            me['__df'] = true;
            setTimeout(me.wrapAsync(function () {
                delete me['__df'];
            }), 20);
            delete me['__di'];
        });
    },
    '__al<keyup>': function (e) {
        var me = this;
        e.stopPropagation();
        clearTimeout(me['__dk']);
        var val = $.trim(e.eventTarget.value);
        me['__dk'] = setTimeout(me.wrapAsync(function () {
            if ($.isNumeric(val)) {
                me.val(val);
            }
        }), 400);
    },
    '__bV<focusout>': function (e) {
        var me = this;
        e.stopPropagation();
        var val = $.trim(e.eventTarget.value);
        if ($.isNumeric(val)) {
            me.val(val);
        }
    },
    '__H<contextmenu>': function (e) {
        e.preventDefault();
    }
});

});