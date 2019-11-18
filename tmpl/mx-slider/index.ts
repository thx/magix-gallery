import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as DD from '../mx-dragdrop/index';
Magix.applyStyle('@index.less');
const DefaultSize = 280;

export default View.extend({
    tmpl: '@index.html',
    mixins: [DD],
    init(extra) {
        this.assign(extra);
        this['@{owner.node}'] = $(`#${this.id}`);
    },
    assign(ops) {
        let me = this;
        me['@{width}'] = +ops.width || DefaultSize;
        me['@{height}'] = +ops.height || DefaultSize;
        me['@{min}'] = +ops.min || 0;
        me['@{max}'] = +ops.max || 100;
        me['@{step}'] = +ops.step || 1;
        me['@{tip}'] = ops.tip || '';

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        me['@{ui.disabled}'] = (ops.disabled + '' === 'true') || $('#' + me.id)[0].hasAttribute('mx-disabled');

        me['@{show.dot}'] = (ops.showDot + '') === 'true';
        me['@{vertical}'] = (ops.vertical + '') === 'true';
        me['@{needInput}'] = ((ops.needInput + '') === 'true') && !me['@{vertical}'];

        // 保留正常位数
        let s = (ops.step || 1) + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        me['@{tail.length}'] = i;

        let value;
        if (ops.value) {
            value = +ops.value;
        } else {
            // 默认取中间值
            value = ((me['@{max}'] + me['@{min}']) / 2);
        }
        me['@{value}'] = value;

        return true;
    },
    render() {
        let me = this;
        let min = me['@{min}'],
            max = me['@{max}'],
            tail = me['@{tail.length}'],
            width = me['@{width}'];

        // 显示刻度点
        let dots = [];
        if (me['@{show.dot}']) {
            let step = me['@{step}'];
            let diff = max - min;

            let i = 1;
            while (min + step * i < max) {
                dots.push({
                    value: (min + step * i).toFixed(tail),
                    percent: step * i / diff * 100
                });
                i++;
            }
        }

        me.updater.digest({
            dots,
            min: min.toFixed(tail),
            max: max.toFixed(tail),
            width,
            height: me['@{height}'],
            vertical: me['@{vertical}'],
            needInput: me['@{needInput}'],
            disabled: me['@{ui.disabled}']
        });

        let gap = dots.length;
        if (gap > 0) {
            let dotTextNodes = $(`#${me.id} .@index.less:dot-text`);
            if (!me['@{vertical}']) {
                let gw = (gap > 0) ? width / gap : width,
                    dw = dotTextNodes.outerWidth();
                let ml = 0 - dw / 2 ;
                // 间隔几个显示文案
                let gi = Math.ceil(dw / gw);
                for (let i = 0; i < dotTextNodes.length; i++) {
                    let textNode = $(dotTextNodes[i]);
                    let display = ((i + 1) % gi === 0) ? 'inline-block' : 'none';
                    if (i + 1 == dotTextNodes.length) {
                        // 最后一个节点
                        if (dots[i].percent / 100 * width + dw >= width) {
                            display = 'none';
                        }
                    }

                    textNode.css({
                        marginLeft: ml,
                        display
                    })
                }
            }
        }
        me.val(me['@{value}']);
    },
    '@{move.by.keyboard}<keydown>'(e) {
        let me = this;
        if (me['@{dragging}']) {
            return;
        }
        if (e.keyCode == 37 || e.keyCode == 40) {
            e.preventDefault();
            let v = +me['@{value}'];
            v -= me['@{step}'];
            me.val(v);
        } else if (e.keyCode == 39 || e.keyCode == 38) {
            e.preventDefault();
            let v = +me['@{value}'];
            v += me['@{step}'];
            me.val(v);
        }
    },
    '@{move.by.click}<click>'(e) {
        let me = this;
        if (me['@{temp.hold.event}'] || me['@{ui.disabled}']) {
            return;
        }
        let railWrapper = me['@{owner.node}'].find('.@index.less:rail');
        let offset = railWrapper.offset();
        let vars = me['@{get.ui.vars}']();
        let pos = -1;
        if (me['@{vertical}']) {
            pos = vars.rMax - e.pageY + offset.top;
        } else {
            pos = e.pageX - offset.left;
        }
        let p = (pos - vars.half) / vars.max;
        let v = me['@{get.fixed.value}'](p);
        me.val(v);
    },
    '@{get.ui.vars}'() {
        let me = this;
        var rail = me['@{owner.node}'].find('.@index.less:rail');
        let tracker = me['@{owner.node}'].find('.@index.less:tracker');
        let indicator = me['@{owner.node}'].find('.@index.less:indicator');
        let pLabel = me['@{owner.node}'].find('.@index.less:pointer-label');
        let inputArea = me['@{owner.node}'].find('.@index.less:rail-input');
        let half = indicator.outerWidth() / 2;
        let rMax = me['@{vertical}'] ? rail.height() : rail.width();
        let max = rMax - half * 2;

        return {
            rail,
            pLabel,
            inputArea,
            tracker,
            indicator,
            rMax,
            max,
            half
        };
    },
    val(v, ignoreSyncValue) {
        let me = this;
        let nv = +v;

        if (nv || nv === 0) {
            let max = me['@{max}'],
                min = me['@{min}'];
            if (nv > max) {
                nv = max;
            } else if (nv < min) {
                nv = min;
            }
            let p = (nv - min) / (max - min);

            // 修正后的值
            v = me['@{get.fixed.value}'](p);
            // 更正
            p = (v - min) / (max - min);

            let vars = me['@{get.ui.vars}']();

            let node = vars.pLabel;
            node.html(v + (me['@{tip}'] ? ('<span class="@index.less:unit">' + me['@{tip}'] + '</span>') : ''));
            if (vars.inputArea && vars.inputArea.length) {
                vars.inputArea.val(v);
            }

            // let l = vars.rMax * p;
            if (me['@{vertical}']) {
                let pHalf = node.height() / 2;
                // 不计算贴边
                // if (l - pHalf < 0) {
                //     l = 0;
                // } else if (l + pHalf > vars.rMax) {
                //     l = vars.rMax - 2 * pHalf;
                // } else {
                //     l -= pHalf;
                // }
                node.css({
                    'bottom': `${p * 100}%`,
                    'margin-bottom': `${(0 - pHalf)}px`
                });
                vars.indicator.css('bottom', `${p * 100}%`);
                vars.tracker.css('height', `${p * 100}%`);
            } else {
                let pHalf = node.width() / 2;
                // 不计算贴边
                // if (l < pHalf) {
                //     l = 0;
                // } else if (l + pHalf > vars.rMax) {
                //     l = vars.rMax - 2 * pHalf;
                // } else {
                //     l -= pHalf;
                // }
                node.css({
                    'left': `${p * 100}%`,
                    'margin-left': `${(0 - pHalf)}px`
                });
                vars.indicator.css('left', `${p * 100}%`);
                vars.tracker.css('width', `${p * 100}%`);
            }

            if (!ignoreSyncValue) {
                if (me['@{value}'] != v) {
                    me['@{fire.event}'](v);
                }
                me['@{value}'] = v;
            }
        }
        me['@{owner.node}'].val(+me['@{value}']);
        return +me['@{value}'];
    },
    '@{get.fixed.value}'(p) {
        let me = this;
        let max = me['@{max}'],
            min = me['@{min}'],
            step = me['@{step}'],
            v;
        if (p === 0) {
            v = min;
        } else if (p === 1) {
            v = max;
        } else {
            v = Math.round((max - min) * p / step) * step + min;
        }
        v = v.toFixed(me['@{tail.length}']);
        return v;
    },
    '@{fire.event}'(p) {
        let v = (+p).toFixed(this['@{tail.length}']);
        this['@{owner.node}'].val(v).trigger({
            type: 'change',
            value: v
        });
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
        let dragValue = me['@{value}'];
        me['@{dragging}'] = 1;
        me.dragdrop(e.eventTarget, (ex) => {
            DD.clear();
            let newValue = -1;
            if (me['@{vertical}']) {
                newValue = currentValue + e.pageY - ex.pageY;
            } else {
                newValue = currentValue + ex.pageX - e.pageX;
            }
            if (newValue < min) {
                newValue = min;
            } else if (newValue > max) {
                newValue = max;
            }
            let p = newValue / max;
            me.val(dragValue = me['@{get.fixed.value}'](p), true);
        }, () => {
            if (me['@{value}'] != dragValue) {
                me['@{value}'] = dragValue;
                me['@{fire.event}'](dragValue);
            }
            me['@{temp.hold.event}'] = true;
            setTimeout(me.wrapAsync(() => {
                delete me['@{temp.hold.event}'];
            }), 20);
            delete me['@{dragging}'];
        });
    },
    '@{stop}<change>'(e) {
        e.stopPropagation();
    },
    '@{enter}<keyup>'(e) {
        let me = this;
        e.stopPropagation();
        clearTimeout(me['@{enter.delay.timer}']);

        let val = $.trim(e.eventTarget.value);
        me['@{enter.delay.timer}'] = setTimeout(me.wrapAsync(() => {
            if ($.isNumeric(val)) {
                me.val(val);
            }
        }), 400);
    },
    '@{out}<focusout>'(e) {
        let me = this;
        e.stopPropagation();
        clearTimeout(me['@{enter.delay.timer}']);

        let val = $.trim(e.eventTarget.value);
        if ($.isNumeric(val)) {
            me.val(val);
        }
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
});