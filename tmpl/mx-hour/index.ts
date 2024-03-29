/**
 * 选择时段
 */
import Magix from 'magix';
import * as $ from '$'
import * as View from '../mx-util/view';
Magix.applyStyle('@index.less');
const WeekMap = {
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六',
    7: '周日'
}

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;
        that.updater.snapshot();

        let tip = extra.tip || '',
            selected = extra.selected || [];

        // 历史可配置参数simple
        // 1. true：极简模式，默认只区分工作日和双休日
        // 2. false：每日单独设置
        let simple = (extra.simple + '' !== 'false'),
            groups = extra.groups; //分组信息
        if (!groups || !groups.length) {
            groups = simple ? [12345, 67] : [1, 2, 3, 4, 5, 6, 7]
        }

        // 所有选中的日期
        let map = {};
        selected.forEach(item => {
            // 支持合并配置，具体计算是展开成单日
            let weeks = (item.week + '').split('');
            weeks.forEach(week => {
                map[week] = (item.times || []).map(time => {
                    return time + '';
                });
            })
        });

        let min = +extra.min || 0, max = +extra.max || 24;
        let allWidth = 10;
        let itemWidth = (100 - allWidth) / (max - min + 1);

        let getHours = () => {
            let hours = [];
            for (var i = min; i < max; i++) {
                hours.push({
                    'index': i,
                    'indexNext': (i + 1),
                    'milestone': (i % 6 == 0),
                    'zIndex': (i + 10) //fix样式
                })
            }
            return hours;
        }

        let periods = [];
        if ($.isPlainObject(groups[0])) {
            // groups = [{
            //     text,
            //     value
            // }]
            periods = groups.map((g, index) => {
                // 多天合并的，取一天即可
                let weeks = (g.value + '').split('');
                let times = map[weeks[0]] || [];
                let hours = getHours();
                hours.forEach(h => {
                    h.selected = (times.indexOf(h.index + '') > -1);
                })
                return {
                    name: g.text,
                    hours,
                    weeks
                };
            });
        } else {
            periods = groups.map((weeks, index) => {
                // 多天合并的，取一天即可
                weeks = (weeks + '').split('');
                let times = map[weeks[0]] || [];
                let hours = getHours();
                hours.forEach(h => {
                    h.selected = (times.indexOf(h.index + '') > -1);
                })
                return {
                    name: (weeks.length > 1) ? `${WeekMap[weeks[0]]}至${WeekMap[weeks[weeks.length - 1]]}` : WeekMap[weeks[0]],
                    hours,
                    weeks
                };
            });
        }

        // 拆分成单日选择时的批量操作功能
        let types = [{
            text: '全日程',
            value: '1234567'
        }, {
            text: '工作日',
            value: '12345'
        }, {
            text: '双休日',
            value: '67'
        }];
        let type = '';
        for (let i = 0; i < types.length; i++) {
            let t = types[i];
            let weeks = (t.value + '').split('');
            let count = 0;
            for (let week in map) {
                if (map[week] && map[week].length > 0) {
                    count++;
                }
            }

            let all = weeks.length == count;
            weeks.forEach(week => {
                all = all && ((map[week] || []).length == (max - min));
            })
            if (all) {
                type = types[i].value;
                break;
            }
        }
        that.updater.set({
            min,
            max,
            allWidth,
            itemWidth,
            tip,
            periods: that.sync(periods),
            type,
            types,
            continuous: (extra.continuous + '' === 'true'), //是否要求连续选择
            minLength: +extra.minLength || 0, // 每日可选最小间隔
            maxLength: +extra.maxLength || 0,// 每日可选最大间隔
        })
        that['@{owner.node}'] = $(`#${that.id}`);

        // altered是否有变化 true：有变化
        let altered = that.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    sync(periods) {
        periods.forEach(p => {
            let hours = p.hours;
            let allSelected = true;
            for (let i = 0; i < hours.length; i++) {
                let h = hours[i];
                let prev = hours[i - 1],
                    next = hours[i + 1];

                h.firstSelected = false;
                h.endSelected = false;
                if (h.selected) {
                    if ((prev && !prev.selected) || !prev) {
                        h.firstSelected = true;
                    }
                    if ((next && !next.selected) || !next) {
                        h.endSelected = true;
                    }
                }
                allSelected = allSelected && h.selected;
            }
            p.selected = allSelected;
        })
        return periods;
    },

    'clearAll<click>'(event) {
        let periods = this.updater.get('periods');
        periods.forEach(p => {
            p.hours.forEach(h => {
                h.selected = false;
            })
        })
        this.updater.digest({
            periods: this.sync(periods)
        })
        this['@{fire}']();
    },

    'toggleAll<click>'(event) {
        let periods = this.updater.get('periods');
        let period = periods[event.params.pIndex];
        let allSelected = !period.selected;
        period.hours.forEach(h => {
            h.selected = allSelected;
        })
        this.updater.digest({
            periods: this.sync(periods)
        })
        this['@{fire}']();
    },

    /**
     * 拖动选择，第一个是什么状态，则所有选中标签都是什么状态
     */
    'drag<mousedown>'(event) {
        let that = this;
        let { periods } = that.updater.get();
        let target = $(event.eventTarget);
        let pIndex = target.data('period'),
            hourIndex = target.data('hour');

        let selected = !periods[pIndex].hours[hourIndex].selected;
        that.toggle(pIndex, hourIndex, selected);

        let parent = target.parent('.@index.less:hours');
        let siblings = parent.find('[data-hour]');

        siblings.on('mouseenter.drag', (dragStartEvent) => {
            dragStartEvent.preventDefault();
            let t = $(dragStartEvent.currentTarget);
            that.toggle(t.data('period'), t.data('hour'), selected);
        })

        $(document.body).off('mouseup.drag').on('mouseup.drag', (dragEndEvent) => {
            siblings.off('mouseenter.drag');
            that['@{fire}']();
        })

        event.preventDefault();
        return false;
    },

    toggle(pIndex, hourIndex, selected) {
        let periods = this.updater.get('periods');
        periods[pIndex].hours[hourIndex].selected = selected;
        this.updater.digest({
            periods: this.sync(periods)
        })
    },

    /**
     * 每日单独选择时有的批量功能
     */
    'changeType<change>'(event) {
        let value = event.params.value;
        let { periods } = this.updater.get();
        let weeks = (value + '').split('');
        periods.forEach(p => {
            p.hours.forEach(h => {
                h.selected = (weeks.indexOf(p.weeks + '') > -1);
            })
        })
        this.updater.digest({
            type: value,
            periods: this.sync(periods)
        });
        this['@{fire}']();
    },

    '@{fire}'() {
        let result = this.check();
        if (result.ok) {
            this['@{owner.node}'].trigger({
                type: 'change',
                selected: result.data,
            })
        }
    },

    val() {
        let { periods } = this.updater.get();
        let results = [];
        periods.forEach(p => {
            let times = [];
            p.hours.forEach(h => {
                if (h.selected) {
                    times.push(h.index);
                }
            })
            p.weeks.forEach(week => {
                results.push({
                    week,
                    name: WeekMap[week],
                    times,
                })
            })
        })
        return results;
    },

    check() {
        let { continuous, minLength, maxLength } = this.updater.get();

        let selected = this.val();
        // selected = [{
        //     week: 1, //周一
        //     times: [2,3,4]
        // },
        // {
        //     week: 2, //周二
        //     times: [2,3,4]
        // },
        // ...
        // {
        //     week: 7, //周日
        //     times: [1,2,4]
        // }]

        let msgs = [];
        for (let i = 0; i < selected.length; i++) {
            let selectedIndexes = [];
            let times = selected[i].times;
            times.forEach(time => {
                let len = selectedIndexes.length;
                if (len == 0) {
                    selectedIndexes.push(time);
                } else {
                    if (selectedIndexes[len - 1] + 1 == time) {
                        selectedIndexes[len - 1] = time;
                    } else {
                        selectedIndexes.push(time);
                    }
                }
            });

            if ((minLength > 0 && times.length < minLength) ||
                (maxLength > 0 && times.length > maxLength) ||
                (continuous && (selectedIndexes.length > 1))) {
                msgs.push(selected[i].name);
            }
        };

        let msg = '', ok = (msgs.length == 0);
        if (!ok) {
            msg = `请为${msgs.join('、')}选择`;
            if (minLength > 0) { msg += `至少&nbsp;${minLength}&nbsp;个`; };
            if (maxLength > 0) { msg += `至多&nbsp;${maxLength}&nbsp;个`; };
            if (continuous) { msg += '连续的' };
            msg += '时段';
        };

        this.updater.digest({
            errorTip: msg,
        })

        return {
            ok,
            msg,
            data: selected,
        }
    }
});