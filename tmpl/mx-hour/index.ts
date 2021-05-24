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
const GetHours = () => {
    let hours = [];
    for (var i = 0; i < 24; i++) {
        hours.push({
            'index': i,
            'indexNext': (i + 1),
            'milestone': (i % 6 == 0), //分割线样式 
            'zIndex': (i + 10) //fix样式
        })
    }
    return hours;
}

export default View.extend({
    tmpl: '@index.html',
    init(extra) {
        this.assign(extra);
    },
    assign(extra) {
        let that = this;

        // 当前数据截快照
        that.updater.snapshot();

        // 所有选中的日期
        let selected = extra.selected || [];
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

        // 历史可配置参数simple
        // 1. true：极简模式，默认只区分工作日和双休日
        // 2. false：每日单独设置
        //
        // groups：手动指定的分组信息
        let simple = (extra.simple + '' !== 'false'),
            groups = extra.groups;
        if (!groups || !groups.length) {
            groups = simple ? [12345, 67] : [1, 2, 3, 4, 5, 6, 7]
        }

        let periods = [];
        if ($.isPlainObject(groups[0])) {
            // groups = [{
            //      text,
            //      value: 1234567,
            //      disabledTimes: [0,1,2]
            // }]
            periods = groups.map((g, index) => {
                // 多天合并的，取一天即可
                let weeks = (g.value + '').split('');

                // 选中的小时
                let selectedTimes = map[weeks[0]] || [];

                // 禁止操作的小时
                let disabledTimes = (g.disabledTimes || []).map(t => t + '');

                let hours = GetHours();
                hours.forEach(h => {
                    h.selected = (selectedTimes.indexOf(h.index + '') > -1);
                    h.disabled = (disabledTimes.indexOf(h.index + '') > -1);
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

                // 选中的小时
                let selectedTimes = map[weeks[0]] || [];

                let hours = GetHours();
                hours.forEach(h => {
                    h.selected = (selectedTimes.indexOf(h.index + '') > -1);

                    // 简易配置下，不支持配置disabledTimes，禁用小时
                    h.disabled = false;
                })
                return {
                    name: (weeks.length > 1) ? `${WeekMap[weeks[0]]}至${WeekMap[weeks[weeks.length - 1]]}` : WeekMap[weeks[0]],
                    hours,
                    weeks,
                };
            });
        }

        // 拆分成单日选择时的批量快捷操作功能
        let types = [{
            text: '全日程',
            value: '1234567'
        }, {
            text: '工作日',
            value: '12345'
        }, {
            text: '双休日',
            value: '67'
        }]
        let type = '';
        for (let i = 0; i < types.length; i++) {
            let t = types[i];
            let weeks = (t.value + '').split('');
            let all = true;
            weeks.forEach(week => {
                all = all && ((map[week] || []).length == 24);
            })
            if (all) {
                type = types[i].value;
                break;
            }
        };

        that.updater.set({
            tip: extra.tip || '',
            periods: that.sync(periods),
            type,
            types
        })
        that['@{owner.node}'] = $(`#${that.id}`);

        // altered是否有变化 true：有变化
        let altered = this.updater.altered();
        return altered;
    },

    render() {
        this.updater.digest();
    },

    /**
     * 计算选中状态
     */
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

    /**
     * 清空
     */
    'clearAll<click>'(event) {
        let { periods } = this.updater.get();
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

    /**
     * 切换全选/全不选
     */
    'toggleAll<click>'(event) {
        let { periods } = this.updater.get();
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

    '@{fire}'(event) {
        let that = this;
        let selected = that.val();
        that['@{owner.node}'].trigger({
            type: 'change',
            selected
        })
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

        let parent = target.closest('.@index.less:hours');
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
        let { periods } = this.updater.get();
        periods[pIndex].hours[hourIndex].selected = selected;
        this.updater.digest({
            periods: this.sync(periods)
        })
    },

    /**
     * 每日单独选择时有的批量功能
     */
    'changeType<change>'(event) {
        let that = this;
        let value = event.params.value;
        let { periods } = that.updater.get();

        let weeks = (value + '').split('');
        periods.forEach(p => {
            p.hours.forEach(h => {
                h.selected = (weeks.indexOf(p.weeks + '') > -1);
            })
        })
        that.updater.digest({
            type: value,
            periods: that.sync(periods)
        })
        that['@{fire}']();
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
                    times
                })
            })
        })
        return results;
    }
});
