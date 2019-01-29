/**
 * 可能会直接使用该view
 */
let Magix = require('magix');
let $ = require('$');
let Util = require('@./util');
let DateFormat = Util.dateFormat;
let DateParse = Util.dateParse;
let GetDefaultDate = Util.getDefaultDate;
let GetQuickInfos = Util.getQuickInfos;
let ForeverStr = Util.foreverStr;

let I18n = require('../mx-medusa/util');

Magix.applyStyle('@range.less');

let RangeDate = Magix.View.extend({
    tmpl: '@range.html',
    init(extra) {
        let ops = $.extend(true, {}, extra.configs);
        let that = this;
        ops.inlay = ((ops.inlay + '') === 'true');
        ops.dates = ops.dates || {};
        ops.formatter = ops.formatter || 'YYYY-MM-dd';
        ops.title = ops.title || I18n['calendar.range.title'];

        let dates = ops.dates,
            formatter = ops.formatter,
            quickDates = ops.quickDates || [];
        let startStr = dates.startStr,
            endStr = dates.endStr;
        let min = ops.min,
            max = ops.max;
        if (!startStr) {
            dates.startStr = startStr = GetDefaultDate(min, max, formatter);
            dates.start = DateParse(startStr);
        }
        if (!dates.start) {
            dates.start = DateParse(dates.startStr);
        }

        // 包含快捷方式不限的时候end可能为空，不需默认初始化
        if (!endStr) {
            dates.endStr = endStr = GetDefaultDate(min, max, formatter);
            dates.end = DateParse(endStr);
        }
        if (!dates.end) {
            dates.end = DateParse(dates.endStr);
        }

        let quickInfos = GetQuickInfos(ops.quickDates, startStr, formatter);
        if (!dates.quickDateKey) {
            for (let index = 0; index < quickInfos.length; index++) {
                let q = quickInfos[index];
                if (q.start == startStr && q.end == endStr) {
                    dates.quickDateKey = q.key;
                    dates.quickDateText = q.text;
                    break;
                }
            }
        }
        ops.quickInfos = quickInfos;
        ops.quickGap = ops.quickGap || 7;
        ops.quickTip = I18n['calendar.quick'];

        ops.submitText = I18n['dialog.submit'];
        ops.cancelText = I18n['dialog.cancel'];

        ops.endMinFn = (curStart, curMin) => {
            if (!curMin) {
                return curStart;
            }
            let s = new Date(curStart),
                m = new Date(curMin);

            if (s.getTime() > m.getTime()) {
                return curStart;
            } else {
                return curMin
            }
        }
        that.updater.set(ops);
    },
    render() {
        let that = this;
        that.updater.digest();
        that['@{owner.node}'] = $('#' + that.id);
    },

    '@{sync.date}<change>'(e) {
        e.stopPropagation();
        let that = this;
        let updater = that.updater;
        let dates = updater.get('dates'),
            vs = updater.get('vs'),
            vsSingle = updater.get('vsSingle'),
            formatter = updater.get('formatter'),
            quickDates = updater.get('quickDates'),
            quickInfos = updater.get('quickInfos');

        let trigger = e.params.trigger;
        let result = e.date + (e.time ? ' ' + e.time : '');
        dates[trigger + 'Str'] = result;
        let startStr = dates.startStr,
            endStr = dates.endStr;
        let start = new Date(DateFormat(startStr, formatter)),
            end;
        if (endStr == ForeverStr) {
            end = ForeverStr;
        } else {
            end = new Date(DateFormat(endStr, formatter));
            // 结束时间小于开始时间，进行修正
            if (!vs && !vsSingle && (end.getTime() < start.getTime())) {
                end = start;
                endStr = DateFormat(end, formatter);
            }
        }

        // 开始时间会影响快捷日期
        let quickInfos = GetQuickInfos(quickDates, startStr, formatter);
        let quickDateText, quickDateKey;
        for (let index = 0; index < quickInfos.length; index++) {
            let q = quickInfos[index];
            if (q.start == startStr && q.end == endStr) {
                quickDateText = q.text;
                quickDateKey = q.key;
                break;
            }
        }

        that.updater.digest({
            quickInfos,
            dates: {
                start,
                end,
                startStr,
                endStr,
                quickDateText,
                quickDateKey
            }
        });
    },

    '@{vs.toggle}<change>'(e) {
        e.stopPropagation();
        this.updater.digest({
            vs: e.state
        });
    },

    '@{date.picked}<click>'(e) {
        let that = this;
        let updater = that.updater;
        let data = updater.get();
        let dates = data.dates,
            formatter = data.formatter,
            quickDates = data.quickDates;

        let params = e.params;
        if (params.quick) {
            // 选择快捷方式
            // 快捷日期可能需要动态计算，已当前开始时间为准
            let quickInfo = params.quickInfo;

            let start = new Date(DateFormat(quickInfo.start, formatter));
            let end;
            if (quickInfo.end == ForeverStr) {
                // 不限的情况不考虑
                end = ForeverStr;
            } else {
                end = new Date(DateFormat(quickInfo.end, formatter));
                // 如果有最大最小值，选择快捷日期的时候会进行范围修正
                let min, max,
                    minMillions, maxMillions;
                if (data.min) {
                    min = new Date(DateFormat(data.min, formatter));
                    minMillions = min.getTime();
                }
                if (data.max) {
                    max = new Date(DateFormat(data.max, formatter));
                    maxMillions = max.getTime();
                }
                let startMillions = start.getTime(),
                    endMillions = end.getTime();
                if (minMillions && (startMillions < minMillions)) {
                    // 开始时间小于最小值
                    start = min;
                } else if (maxMillions && (startMillions > maxMillions)) {
                    // 开始时间大于最大值
                    start = max;
                }
                if (maxMillions && (endMillions > maxMillions)) {
                    // 结束时间大于最大值
                    end = max;
                } else if (minMillions && (endMillions < minMillions)) {
                    // 结束时间小于最小值
                    end = min;
                }
                if (end.getTime() < start.getTime()) {
                    end = start;
                }
            }

            let startStr = DateFormat(start, formatter),
                endStr = (end == ForeverStr) ? ForeverStr : DateFormat(end, formatter);

            // 开始时间会影响快捷日期
            let quickInfos = GetQuickInfos(quickDates, startStr, formatter);
            let quickDateText, quickDateKey;
            for (let index = 0; index < quickInfos.length; index++) {
                let q = quickInfos[index];
                if (q.start == startStr && q.end == endStr) {
                    quickDateText = q.text;
                    quickDateKey = q.key;
                    break;
                }
            }
            dates = {
                start,
                end,
                startStr,
                endStr,
                quickDateText,
                quickDateKey
            }
        } else {
            // 确定
            let vs = data.vs,
                vsSingle = data.vsSingle;

            let startStr = dates.startStr,
                endStr = dates.endStr,
                start = dates.start,
                end = dates.end;
            // 修正结束时间：
            //  1. 对比的情况下，可能保留了非对比情况的不限快捷方式选项，如果结束时间为不限，切换为开始时间
            //  2. 不对比选择连续时间的时候，可能有对比切换的结果，如果结束时间小于开始时间，结束时间替换为开始时间
            if (((endStr == ForeverStr) && vs) ||
                (!vs && !vsSingle && (endStr != ForeverStr) && (end.getTime() < start.getTime()))) {
                endStr = startStr;
                end = new Date(DateFormat(endStr, formatter));
            }
            Magix.mix(dates, {
                end: end,
                endStr: endStr
            })
        }
        updater.digest({
            dates: dates
        });
        that['@{owner.node}'].trigger({
            type: 'change',
            vs: data.vs,
            dates: dates
        });
    },

    '@{cancel}<click>'() {
        this['@{owner.node}'].trigger('cancel');
    },

    '@{prevent}<contextmenu>'(e) {
        e.preventDefault();
    }
});

module.exports = RangeDate;