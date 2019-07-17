/**
 * 选择时段
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let that = this;
        let tip = extra.tip || '',
            simple = (extra.simple + '' !== 'false'),
            selected = extra.selected || [];
        
        let map = {};
        selected.forEach(item => {
            map[item.week] = item.times || [];
        })

        let getHours = () => {
            let hours = [];
            for (var i = 0; i < 24; i++) {
                hours.push({
                    'index': i,
                    'indexNext': (i + 1),
                    'milestone': (i % 6 == 0),
                    'zIndex': (i + 10) //fix样式
                })
            }
            return hours;
        }

        let periods;
        if (simple) {
            periods = [{
                name: '周一至周五',
                week: '12345'
            }, {
                name: '周六至周日',
                week: '67'
            }]
        } else {
            periods = [{
                name: '周一',
                week: 1
            }, {
                name: '周二',
                week: 2
            }, {
                name: '周三',
                week: 3,
                times: [0]
            }, {
                name: '周四',
                week: 4
            }, {
                name: '周五',
                week: 5
            }, {
                name: '周六',
                week: 6
            }, {
                name: '周日',
                week: 7
            }]
        }
        that.$selected = {};
        periods.forEach((p, pIndex) => {
            let times = (map[p.week] || []).map(time => {
                return time + '';
            })
            let hours = getHours();
            hours.forEach(h => {
                h.selected = (times.indexOf(h.index + '') > -1);

                if (h.selected) {
                    that.$selected[pIndex + '_' + h.index] = true;
                }
            })
            p.hours = hours;
        })
        that.updater.set({
            viewId: that.id,
            tip,
            periods: that.sync(periods),
            simple,
            type: '',
            types: [{
                text: '全日程',
                value: 1
            }, {
                text: '工作日',
                value: 2
            }, {
                text: '双休日',
                value: 3
            }]
        })
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
    'clearAll<click>'(event){
        let periods = this.updater.get('periods');
        periods.forEach(p => {
            p.hours.forEach(h => {
                h.selected = false;
            })
        })
        this.updater.digest({
            periods: this.sync(periods)
        })
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
    },

    /**
     * 拖动选择，第一个是什么状态，则所有选中标签都是什么状态
     */
    'drag<mousedown>'(event) {
        let that = this;
        let periods = that.updater.get('periods');
        let target = $(event.eventTarget);
        let pIndex = target.data('period'),
            hourIndex = target.data('hour');

        let selected = !periods[pIndex].hours[hourIndex].selected;
        that.toggle(pIndex, hourIndex, selected);

        let parent = target.parent('.@index.less:hours');
        let siblings = parent.find('[data-hour]');

        siblings.on('mouseenter.drag', function (e) {
            e.preventDefault();
            let t = $(this);
            that.toggle(t.data('period'), t.data('hour'), selected);
        })

        $(document.body).off('mouseup.drag')
            .on('mouseup.drag', function (event) {
                siblings.off('mouseenter.drag');
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
    'changeType<change>'(event){
        let that = this;
        let type = event.params.type;
        let periods = that.updater.get('periods');
        let filters = [];
        switch (+type){
            case 2:
                filters = [6, 7];
                break;
            case 3:
                filters = [1, 2, 3, 4, 5];
                break;
        }
        periods.forEach(p => {
            p.hours.forEach(h => {
                h.selected = (filters.indexOf(p.week) < 0);
            })
        })
        that.updater.digest({
            type,
            periods: that.sync(periods)
        })
    },
    val(){
        let periods = this.updater.get('periods');
        let results = [];
        periods.forEach(p => {
            let times = [];
            p.hours.forEach(h => {
                if(h.selected){
                    times.push(h.index);
                }
            })
            
            results.push({
                week: p.week,
                name: p.name,
                times
            })
        })
        return results;
    }
});
