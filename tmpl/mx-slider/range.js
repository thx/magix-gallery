'ref@./style.less';
let Magix = require('magix');
let $ = require('$');
let DD = require('../mx-dragdrop/index');
Magix.applyStyle('@style.less');
let DefaultSize = 280;
module.exports = Magix.View.extend({
    tmpl: '@range.html',
    mixins: [DD],
    init(extra) {
        let me = this;
        let oNode = $('#' + me.id);
        me.assign(extra);
        let click = (e) => {
            if (me['@{temp.hold.event}'] || me['@{ui.disabled}']) {
                return;
            }
            let offset = oNode.offset();
            let vars = me['@{get.ui.vars}']();
            let pos = -1;
            if (me['@{vertical}']) {
                pos = vars.rMax - e.pageY + offset.top;
            } else {
                pos = e.pageX - offset.left;
            }
            let p = (pos - vars.half) / vars.max;
            let v = me['@{get.fixed.value}'](p);
            let start = +me['@{start}'];
            let end = +me['@{end}'];
            let syncLeft = Math.abs(start - v) < Math.abs(end - v);
            if (syncLeft) {
                me['@{sync.left}'](v);
                me['@{start}'] = v;
                me['@{fire.event}']();
                Magix.node('left_' + me.id).focus();
            } else {
                me['@{sync.right}'](v);
                me['@{end}'] = v;
                me['@{fire.event}']();
                Magix.node('right_' + me.id).focus();
            }
        };
        oNode.on('click', click);
        me.on('destroy', () => {
            oNode.off('click', click);
        });
        me['@{owner.node}'] = oNode;
    },
    assign(ops) {
        let me = this;
        me['@{width}'] = +ops.width || DefaultSize;
        me['@{height}'] = +ops.height || DefaultSize;
        me['@{min}'] = +ops.min || 0;
        me['@{max}'] = +ops.max || 100;
        me['@{step}'] = +ops.step || 1;

        // 支持mx-disabled或者disabled
        me['@{ui.disabled}'] = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');

        me['@{vertical}'] = (ops.vertical + '') === 'true';
        let s = me['@{step}'] + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        me['@{tail.length}'] = i;
        let value = ops.value;
        if (value) {
            value = (value + '').split(',');
            me['@{start}'] = +value[0] || 0;
            me['@{end}'] = +value[1] || 0;
        } else {
            me['@{start}'] = me['@{min}'];
            me['@{end}'] = (me['@{min}'] + me['@{max}']) / 2;
        }
        return true;
    },
    render() {
        let me = this;
        me.updater.digest({
            min: me['@{min}'].toFixed(me['@{tail.length}']),
            max: me['@{max}'].toFixed(me['@{tail.length}']),
            viewId: me.id,
            height: me['@{height}'],
            width: me['@{width}'],
            vertical: me['@{vertical}']
        });
        me.val([me['@{start}'], me['@{end}']]);
    },
    '@{get.ui.vars}'() {
        let me = this;
        let rail = me['@{owner.node}'].find('.@style.less:rail');
        let tracker = me['@{owner.node}'].find('.@style.less:tracker');
        let iLeft = $('#left_' + me.id);
        let iRight = $('#right_' + me.id);
        let rMax = me['@{vertical}'] ? rail.height() : rail.width();
        let half = iLeft.outerWidth() / 2;
        let max = rMax - half * 2;
        return {
            rail,
            iLeftL: $('#leftl_' + me.id),
            iRightL: $('#rightl_' + me.id),
            tracker,
            iLeft,
            iRight,
            left: parseInt(iLeft.css(me['@{vertical}'] ? 'bottom' : 'left'), 10),
            right: parseInt(iRight.css(me['@{vertical}'] ? 'bottom' : 'left'), 10),
            rMax,
            max,
            half
        };
    },
    '@{sync.left}'(v) {
        let me = this;
        v = +v;
        let max = me['@{max}'],
            min = me['@{min}'];
        if (v > max) v = max;
        else if (v < min) v = min;
        let leftPercent = (v - min) / (max - min);
        let vars = me['@{get.ui.vars}']();
        let pos = leftPercent * vars.max;
        if (me['@{vertical}']) {
            vars.iLeft.css({
                bottom: pos
            });
        } else {
            vars.iLeft.css({
                left: pos
            });
        }

        v = me['@{get.fixed.value}'](leftPercent);
        let node = vars.iLeftL;
        node.html(v);
        let l = pos + vars.half;
        if (me['@{vertical}']) {
            let pHalf = node.height() / 2;
            if (l - pHalf < 0) {
                l = 0;
            } else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            } else {
                l -= pHalf;
            }
            node.css({
                bottom: l
            });
            vars.tracker.css({
                bottom: pos + vars.half
            }).height(vars.right - pos);
        } else {
            let pHalf = node.width() / 2;
            if (l < pHalf) {
                l = 0;
            } else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            } else {
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
    '@{sync.right}'(v) {
        let me = this;
        v = +v;
        let max = me['@{max}'],
            min = me['@{min}'];
        if (v > max) v = max;
        else if (v < min) v = min;
        let rightPercent = (v - min) / (max - min);
        let vars = me['@{get.ui.vars}']();
        let pos = rightPercent * vars.max;
        if (me['@{vertical}']) {
            vars.iRight.css({
                bottom: pos
            });
        } else {
            vars.iRight.css({
                left: pos
            });
        }
        v = me['@{get.fixed.value}'](rightPercent);
        let node = vars.iRightL;
        node.html(v);
        let l = pos + vars.half;
        if (me['@{vertical}']) {
            let pHalf = node.height() / 2;
            if (l - pHalf < 0) {
                l = 0;
            } else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            } else {
                l -= pHalf;
            }
            node.css({
                bottom: l
            });
            vars.tracker.height(pos - vars.left);
        } else {
            let pHalf = node.width() / 2;
            if (l < pHalf) {
                l = 0;
            } else if (l + pHalf > vars.rMax) {
                l = vars.rMax - 2 * pHalf;
            } else {
                l -= pHalf;
            }
            node.css({
                left: l
            });
            vars.tracker.width(pos - vars.left);
        }
        return v;
    },
    val(v) {
        let me = this;
        if (v) {
            let av = (v + '').split(',');
            let start = +av[0] || 0;
            let end = +av[1] || 0;
            if (start > end) {
                [start, end] = [end, start];
            }
            me['@{owner.node}'].prop('value', [start, end]);
            start = me['@{sync.left}'](start);
            end = me['@{sync.right}'](end);
            if (me['@{start}'] != start || me['@{end}'] != end) {
                me['@{start}'] = start;
                me['@{end}'] = end;
                me['@{fire.event}']();
            }
        }
        return [+me['@{start}'], +me['@{end}']];
    },
    '@{get.fixed.value}'(p) {
        let me = this;
        let max = me['@{max}'],
            min = me['@{min}'],
            step = me['@{step}'],
            v;
        if (p === 0) v = min;
        else if (p === 1) v = max;
        else {
            v = min + (max - min) * p;
            v = Math.round(v / step) * step;
        }
        v = v.toFixed(me['@{tail.length}']);
        return v;
    },
    '@{fire.event}'() {
        let me = this;
        let value = [+me['@{start}'], +me['@{end}']];
        this['@{owner.node}'].prop('value', value).trigger({
            type: 'change',
            value: value,
            start: +me['@{start}'],
            end: +me['@{end}']
        });
    },
    '@{check.and.fire}'(start, end) {
        let me = this;
        if (start != me['@{start}'] ||
            end != me['@{end}']) {
            me['@{start}'] = start;
            me['@{end}'] = end;
            me['@{fire.event}']();
        }
    },
    '@{drag}<mousedown>'(e) {
        let me = this;
        if (me['@{ui.disabled}']) {
            return;
        }
        let current = $(e.eventTarget);
        let size = current.outerWidth();
        let min = 0; //最小
        let max = -1;
        if (me['@{vertical}']) {
            max = current.parent().height() - size;
        } else {
            max = current.parent().width() - size;
        }
        let currentValue = parseInt(current.css(me['@{vertical}'] ? 'bottom' : 'left'), 10);
        let dragStartValue = me['@{start}'];
        let dragEndValue = me['@{end}'];
        me['@{dragging}'] = 1;
        me.dragdrop(e.eventTarget, (ex) => {
            DD.clear();
            let newValue = -1;
            if (me['@{vertical}']) {
                newValue = currentValue + e.pageY - ex.pageY;
            } else {
                newValue = currentValue + ex.pageX - e.pageX;
            }
            if (newValue < min) newValue = min;
            else if (newValue > max) newValue = max;
            let p = newValue / max;
            let v = me['@{get.fixed.value}'](p);
            let nv = +v;
            if (e.params.end) {
                let start = +me['@{start}'];
                if (nv >= start) {
                    if (me['@{start}'] != dragStartValue) {
                        dragStartValue = me['@{sync.left}'](start);
                    }
                    dragEndValue = me['@{sync.right}'](v);
                    Magix.node('right_' + me.id).focus();
                } else {
                    if (me['@{start}'] != dragEndValue) {
                        dragEndValue = me['@{sync.right}'](start);
                    }
                    dragStartValue = me['@{sync.left}'](v);
                    Magix.node('left_' + me.id).focus();
                }
            } else {
                let end = +me['@{end}'];
                if (nv <= end) {
                    if (me['@{end}'] != dragEndValue) {
                        dragEndValue = me['@{sync.right}'](end);
                    }
                    dragStartValue = me['@{sync.left}'](v);
                    Magix.node('left_' + me.id).focus();
                } else {
                    if (me['@{end}'] != dragStartValue) {
                        dragStartValue = me['@{sync.left}'](end);
                    }
                    dragEndValue = me['@{sync.right}'](v);
                    Magix.node('right_' + me.id).focus();
                }
            }
        }, () => {
            me['@{check.and.fire}'](dragStartValue, dragEndValue);
            me['@{temp.hold.event}'] = true;
            setTimeout(me.wrapAsync(() => {
                delete me['@{temp.hold.event}'];
            }), 20);
            delete me['@{dragging}'];
        });
    },
    '@{move.by.keyboard}<keydown>'(e) {
        let me = this,
            step = me['@{step}'],
            move;
        if (me['@{dragging}']) return;
        if (e.keyCode == 37 || e.keyCode == 40) { //decrement
            e.preventDefault();
            step = -step;
            move = true;
        } else if (e.keyCode == 39 || e.keyCode == 38) { //increment
            e.preventDefault();
            move = true;
        }
        if (move) {
            let srcStartValue = me['@{start}'];
            let startValue = +srcStartValue;
            let srcEndValue = me['@{end}'];
            let endValue = +srcEndValue;
            let {
                start
            } = e.params;
            if (start) {
                startValue += step;
            } else {
                endValue += step;
            }
            if (startValue > endValue) {
                if (start) {
                    Magix.node('right_' + me.id).focus();
                } else {
                    Magix.node('left_' + me.id).focus();
                }
                if (endValue != +srcStartValue) {
                    srcStartValue = me['@{sync.left}'](endValue);
                }
                if (startValue != +srcEndValue) {
                    srcEndValue = me['@{sync.right}'](startValue);
                }
            } else {
                if (start) {
                    srcStartValue = me['@{sync.left}'](startValue);
                } else {
                    srcEndValue = me['@{sync.right}'](endValue);
                }
            }
            me['@{check.and.fire}'](srcStartValue, srcEndValue);
        }
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
});