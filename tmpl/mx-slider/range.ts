import Magix from 'magix';
import * as $ from '$';
import * as View from '../mx-util/view';
import * as DD from '../mx-dragdrop/index';
Magix.applyStyle('@index.less');
const DefaultSize = 280;

export default View.extend({
    tmpl: '@range.html',
    mixins: [DD],
    init(ops) {
        this.assign(ops);
        this['@{owner.node}'] = $(`#${this.id}`);
    },
    assign(ops) {
        let that = this;

        // mx-disabled作为属性，动态更新不会触发view改变，兼容历史配置，建议使用disabled
        let disabled = (ops.disabled + '' === 'true') || $('#' + that.id)[0].hasAttribute('mx-disabled');

        let step = +ops.step || 1,
            min = +ops.min || 0,
            max = +ops.max || 100;

        // 保留正常位数
        let s = (ops.step || 1) + '';
        let tail = s.indexOf('.');
        if (tail >= 0) {
            tail = s.slice(tail + 1).length;
        } else {
            tail = 0;
        };

        // 刻度点
        let dotReset = false;
        let dots = (ops.dots || []).map(v => {
            v = +v;
            let diff = max - min;
            return {
                value: v.toFixed(tail),
                percent: (v - min) / diff * 100
            }
        });
        if ((dots.length == 0) && (ops.showDot + '') === 'true') {
            // showDot：显示刻度点，根据step计算
            let diff = max - min;

            let i = 1;
            while (min + step * i < max) {
                dots.push({
                    value: (min + step * i).toFixed(tail),
                    percent: step * i / diff * 100
                });
                i++;
            }

            // 根据step均分的点，可计算可见点位置，进行重叠纠正
            dotReset = true;
        };

        // 垂直方向显示
        let vertical = (ops.vertical + '' === 'true');

        this.updater.set({
            tail,
            step,
            min: +min.toFixed(tail),
            max: +max.toFixed(tail),
            width: +ops.width || DefaultSize,
            height: +ops.height || DefaultSize,
            tip: ops.tip || '',
            disabled,
            vertical,
            dotReset,
            dots,
            needInput: ((ops.needInput + '') === 'true') && !vertical,
        })

        // selected：选中值，数组or逗号分隔，双向绑定，返回值也是入参是什么出参是什么
        // value：逗号分隔，出参value=[start, end]坑了，待下线
        // 双向绑定的参数
        let selected = ops.selected,
            value = ops.value;
        if (selected) {
            if ($.isArray(selected)) {
                // 保留双向绑定的数据格式
                that['@{bak.type}'] = 'array';
            } else {
                // 逗号分隔
                selected = (selected + '').split(',');
                that['@{bak.type}'] = 'string';
            }

            that['@{start}'] = +selected[0] || 0;
            that['@{end}'] = +selected[1] || 0;
        } else if (value) {
            // 逗号分隔
            that['@{bak.type}'] = 'string';
            value = (value + '').split(',');
            that['@{start}'] = +value[0] || 0;
            that['@{end}'] = +value[1] || 0;
        } else {
            // 默认双向绑定为数组
            that['@{bak.type}'] = 'array';

            // 默认0到中间值
            that['@{start}'] = min;
            that['@{end}'] = (min + max) / 2;
        };
        // 范围修正
        ['start', 'end'].forEach(key => {
            if (that[`@{${key}}`] > max) {
                that[`@{${key}}`] = max;
            } else if (that[`@{${key}}`] < min) {
                that[`@{${key}}`] = min;
            }
            that[`@{${key}}`] = that['@{get.fixed.value}']((that[`@{${key}}`] - min) / (max - min));
        });

        // 固定刷新
        return true;
    },
    render() {
        // 状态回置
        this['@{temp.hold.event}'] = false;
        this.updater.digest();

        // 水平方向，纠正显示点的文案
        let { vertical, dots, dotReset, width, height } = this.updater.get();
        let gap = dots.length;
        if (gap > 0 && dotReset && !vertical) {
            let dotTextNodes = $(`#${this.id} .@index.less:dot-text`);
            let gw = (gap > 0) ? width / gap : width,
                dw = dotTextNodes.outerWidth();
            let ml = 0 - dw / 2;
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
        this.val([this['@{start}'], this['@{end}']]);
    },
    '@{get.ui.vars}'() {
        let { vertical } = this.updater.get();

        let rail = this['@{owner.node}'].find('.@index.less:rail');
        let tracker = this['@{owner.node}'].find('.@index.less:tracker');
        let iLeft = $(`#left_${this.id}`);
        let iRight = $(`#right_${this.id}`);
        let inputLeft = $(`#input_left_${this.id}`);
        let inputRight = $(`#input_right_${this.id}`);
        let rMax = vertical ? rail.height() : rail.width();
        let half = iLeft.outerWidth() / 2;
        let max = rMax - half * 2;
        return {
            rail,
            iLeftL: $('#leftl_' + this.id),
            iRightL: $('#rightl_' + this.id),
            tracker,
            iLeft,
            iRight,
            inputLeft,
            inputRight,
            left: parseInt(iLeft.css(vertical ? 'bottom' : 'left'), 10),
            right: parseInt(iRight.css(vertical ? 'bottom' : 'left'), 10),
            rMax,
            max,
            half,
        };
    },
    '@{sync.left}'(v) {
        let { vertical, tip, min, max } = this.updater.get();

        v = +v;
        if (v > max) {
            v = max;
        } else if (v < min) {
            v = min;
        }

        let leftPercent = (v - min) / (max - min);
        // 修正后的值
        v = this['@{get.fixed.value}'](leftPercent);
        // 更正
        leftPercent = (v - min) / (max - min);

        let vars = this['@{get.ui.vars}']();
        let node = vars.iLeftL;
        node.html(v + (tip ? `<span class="@index.less:unit">${tip}</span>` : ''));
        if (vars.inputLeft && vars.inputLeft.length) {
            vars.inputLeft.val(v);
        }

        if (vertical) {
            let pHalf = node.height() / 2;
            node.css({
                'bottom': `${leftPercent * 100}%`,
                'margin-bottom': `${(0 - pHalf)}px`
            });
            vars.iLeft.css('bottom', `${leftPercent * 100}%`);
            vars.tracker.css('bottom', `${leftPercent * 100}%`);
        } else {
            let pHalf = node.width() / 2;
            node.css({
                'left': `${leftPercent * 100}%`,
                'margin-left': `${(0 - pHalf)}px`
            });
            vars.iLeft.css('left', `${leftPercent * 100}%`);
            vars.tracker.css('left', `${leftPercent * 100}%`);
        }

        return v;
    },
    '@{sync.right}'(v) {
        let { vertical, tip, min, max } = this.updater.get();
        v = +v;
        if (v > max) {
            v = max;
        } else if (v < min) {
            v = min;
        }

        let rightPercent = (v - min) / (max - min);
        // 修正后的值
        v = this['@{get.fixed.value}'](rightPercent);
        // 更正
        rightPercent = (v - min) / (max - min);

        let vars = this['@{get.ui.vars}']();
        let node = vars.iRightL;
        node.html(v + (tip ? `<span class="@index.less:unit">${tip}</span>` : ''));
        if (vars.inputRight && vars.inputRight.length) {
            vars.inputRight.val(v);
        }

        if (vertical) {
            let pHalf = node.height() / 2;
            node.css({
                'bottom': `${rightPercent * 100}%`,
                'margin-bottom': `${(0 - pHalf)}px`
            });
            vars.iRight.css('bottom', `${rightPercent * 100}%`);
            vars.tracker.css('top', `${(100 - rightPercent * 100)}%`);
        } else {
            let pHalf = node.width() / 2;
            node.css({
                'left': `${rightPercent * 100}%`,
                'margin-left': `${(0 - pHalf)}px`
            });
            vars.iRight.css('left', `${rightPercent * 100}%`);
            vars.tracker.css('right', `${(100 - rightPercent * 100)}%`);
        }

        return v;
    },
    val(v) {
        if (v) {
            let av = (v + '').split(',');
            let start = +av[0] || 0;
            let end = +av[1] || 0;
            if (start > end) {
                [start, end] = [end, start];
            }
            if (this['@{bak.type}'] == 'array') {
                // 数组
                this['@{owner.node}'].val([start, end]);
            } else {
                // 逗号分隔
                this['@{owner.node}'].val(`${start},${end}`);
            }

            start = this['@{sync.left}'](start);
            end = this['@{sync.right}'](end);
            if (this['@{start}'] != start || this['@{end}'] != end) {
                this['@{start}'] = start;
                this['@{end}'] = end;
                this['@{fire.event}']();
            }
        }
        return [+this['@{start}'], +this['@{end}']];
    },
    '@{get.fixed.value}'(p) {
        let { step, min, max, tail } = this.updater.get();
        let v;
        if (p === 0) {
            v = min;
        } else if (p === 1) {
            v = max;
        } else {
            v = Math.round((max - min) * p / step) * step + min;
        }
        return v.toFixed(tail);
    },
    '@{fire.event}'() {
        let { tail } = this.updater.get();
        let start = (+this['@{start}']).toFixed(tail),
            end = (+this['@{end}']).toFixed(tail);

        let value = (this['@{bak.type}'] == 'array') ? [start, end] : `${start},${end}`;
        this['@{owner.node}'].val(value).trigger({
            type: 'change',
            selected: value,
            value: [start, end], // 历史返回格式，待下线
            start,
            end
        });
    },
    '@{check.and.fire}'(start, end) {
        if (start != this['@{start}'] ||
            end != this['@{end}']) {
            this['@{start}'] = start;
            this['@{end}'] = end;
            this['@{fire.event}']();
        }
    },
    '@{drag}<mousedown>'(e) {
        let that = this;
        if (that.updater.get('disabled')) {
            return;
        }

        let { vertical } = that.updater.get();
        let current = $(e.eventTarget);
        let size = current.outerWidth();
        let min = 0; //最小
        let max = -1;
        if (vertical) {
            max = current.parent().height() - size;
        } else {
            max = current.parent().width() - size;
        }
        let currentValue = parseInt(current.css(vertical ? 'bottom' : 'left'), 10);
        let dragStartValue = that['@{start}'];
        let dragEndValue = that['@{end}'];
        that['@{dragging}'] = 1;
        that.dragdrop(e.eventTarget, (ex) => {
            DD.clear();
            let newValue = -1;
            if (vertical) {
                newValue = currentValue + e.pageY - ex.pageY;
            } else {
                newValue = currentValue + ex.pageX - e.pageX;
            }
            if (newValue < min) newValue = min;
            else if (newValue > max) newValue = max;
            let p = newValue / max;
            let v = that['@{get.fixed.value}'](p);
            let nv = +v;
            if (e.params.end) {
                let start = +that['@{start}'];
                $('#left_' + that.id).attr('data-dragging', nv < start);
                $('#right_' + that.id).attr('data-dragging', nv >= start);
                if (nv >= start) {
                    if (that['@{start}'] != dragStartValue) {
                        dragStartValue = that['@{sync.left}'](start);
                    }
                    dragEndValue = that['@{sync.right}'](v);
                    Magix.node('right_' + that.id).focus();
                } else {
                    if (that['@{start}'] != dragEndValue) {
                        dragEndValue = that['@{sync.right}'](start);
                    }
                    dragStartValue = that['@{sync.left}'](v);
                    Magix.node('left_' + that.id).focus();
                }
            } else {
                let end = +that['@{end}'];
                $('#left_' + that.id).attr('data-dragging', nv <= end);
                $('#right_' + that.id).attr('data-dragging', nv > end);
                if (nv <= end) {
                    if (that['@{end}'] != dragEndValue) {
                        dragEndValue = that['@{sync.right}'](end);
                    }
                    dragStartValue = that['@{sync.left}'](v);
                    Magix.node('left_' + that.id).focus();
                } else {
                    if (that['@{end}'] != dragStartValue) {
                        dragStartValue = that['@{sync.left}'](end);
                    }
                    dragEndValue = that['@{sync.right}'](v);
                    Magix.node('right_' + that.id).focus();
                }
            }
        }, () => {
            that['@{check.and.fire}'](dragStartValue, dragEndValue);
            that['@{temp.hold.event}'] = true;
            setTimeout(that.wrapAsync(() => {
                delete that['@{temp.hold.event}'];
            }), 20);
            delete that['@{dragging}'];
            $('#right_' + that.id).attr('data-dragging', false);
            $('#left_' + that.id).attr('data-dragging', false);
        });
    },
    '@{move.by.keyboard}<keydown>'(e) {
        let { step } = this.updater.get();
        let move;
        if (this['@{dragging}']) {
            return;
        };
        if (e.keyCode == 37 || e.keyCode == 40) { //decrement
            e.preventDefault();
            step = -step;
            move = true;
        } else if (e.keyCode == 39 || e.keyCode == 38) { //increment
            e.preventDefault();
            move = true;
        }
        if (move) {
            let srcStartValue = this['@{start}'];
            let startValue = +srcStartValue;
            let srcEndValue = this['@{end}'];
            let endValue = +srcEndValue;
            let { start } = e.params;
            if (start) {
                startValue += step;
            } else {
                endValue += step;
            }
            if (startValue > endValue) {
                if (start) {
                    Magix.node('right_' + this.id).focus();
                } else {
                    Magix.node('left_' + this.id).focus();
                }
                if (endValue != +srcStartValue) {
                    srcStartValue = this['@{sync.left}'](endValue);
                }
                if (startValue != +srcEndValue) {
                    srcEndValue = this['@{sync.right}'](startValue);
                }
            } else {
                if (start) {
                    srcStartValue = this['@{sync.left}'](startValue);
                } else {
                    srcEndValue = this['@{sync.right}'](endValue);
                }
            }
            this['@{check.and.fire}'](srcStartValue, srcEndValue);
        }
    },
    '@{move.by.click}<click>'(e) {
        let that = this;
        if (that['@{temp.hold.event}'] || that.updater.get('disabled')) {
            return;
        }
        let offset = that['@{owner.node}'].offset();
        let vars = that['@{get.ui.vars}']();
        let pos = -1;
        if (that.updater.get('vertical')) {
            pos = vars.rMax - e.pageY + offset.top;
        } else {
            pos = e.pageX - offset.left;
        }
        let p = (pos - vars.half) / vars.max;
        let v = that['@{get.fixed.value}'](p);
        let start = +that['@{start}'];
        let end = +that['@{end}'];
        let syncLeft = Math.abs(start - v) < Math.abs(end - v);
        if (syncLeft) {
            that['@{sync.left}'](v);
            that['@{start}'] = v;
            that['@{fire.event}']();
            Magix.node('left_' + that.id).focus();
        } else {
            that['@{sync.right}'](v);
            that['@{end}'] = v;
            that['@{fire.event}']();
            Magix.node('right_' + that.id).focus();
        }
    },
    '@{is.number}'(x) {
        let type = typeof x;
        return (type === 'number' || type === 'string') && !isNaN(x - parseFloat(x));
    },
    '@{enter}<keyup>'(e) {
        e.stopPropagation();

        let val = $.trim(e.eventTarget.value);
        if (e.keyCode == 13 && this['@{is.number}'](val)) {
            this['@{input}'](e.params.start, val);
        }
    },
    '@{out}<focusout>'(e) {
        e.stopPropagation();

        let val = $.trim(e.eventTarget.value);
        if (this['@{is.number}'](val)) {
            this['@{input}'](e.params.start, val);
        }
    },
    '@{input}'(start, val) {
        val = +val;
        let startValue = +this['@{start}'];
        let endValue = +this['@{end}'];
        if (start) {
            startValue = val;
            if (startValue > endValue) {
                startValue = endValue;
            }
        } else {
            endValue = val;
            if (endValue < startValue) {
                endValue = startValue;
            }
        }
        this.val(`${startValue},${endValue}`);
    },
    '@{stop}<change>'(e) {
        e.stopPropagation();
    },
    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
});


