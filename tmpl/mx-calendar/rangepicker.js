let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
let Util = require('@./util');
let DateFormat = Util.dateFormat;
let GetDefaultDate = Util.getDefaultDate;
let GetQuickInfos = Util.getQuickInfos;
let GetOffsetDate = Util.getOffsetDate;

let I18n = require('../mx-medusa/util');

Magix.applyStyle('@rangepicker.less');

let Rangepicker = Magix.View.extend({
    tmpl: '@rangepicker.html',
    init(extra) {
        let that = this;

        Monitor['@{setup}']();
        that.on('destroy', () => {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
        });

        //初始化时保存一份当前数据的快照
        that.updater.snapshot();

        that.assign(extra);
    },

    assign(extra) {
        let that = this;
        let altered = that.updater.altered();

        // vsEnable 是否可对比，默认关闭
        // vs 对比初始状态 
        // vsSingle 可对比情况下，关闭对比时是选择时间段还是单天
        let vsEnable = (/^true$/i).test(extra.vsenable) || false,
            vs = false;
        if (vsEnable) {
            vs = (/^true$/i).test(extra.vs) || false;
        }
        let vsSingle = vsEnable ? ((/^true$/i).test(extra.single) || false) : false;

        let timeType = extra.timeType; //可选时分秒
        let formatter = extra.formatter || ('YYYY-MM-dd' + (timeType ? ' hh:mm:ss' : ''));
        let dateType = extra.dateType; //可选年月日

        // 快捷选项
        let startDisabled = (/^true$/i).test(extra.startDisabled) || false; //开始时间是否可选
        let endDisabled = (/^true$/i).test(extra.endDisabled) || false;//结束时间是否可选
        let showShortcuts = !(/^false$/i).test(extra.shortcuts); // 默认开启快捷选项的
        let quickDates = showShortcuts ? (extra.shortkeys || ['today', 'yesterday', 'preWeekMon', 'lastestWeekMon', 'preMonth', 'lastestThisMonth']) : [];
        if (startDisabled) {
            // 开始时间禁止使用的时候，只允许使用动态计算的快捷日期
            // 动态计算的都是依据开始时间计算的
            showShortcuts = false;
            for (var i = 0; i < quickDates.length; i++) {
                if ((quickDates[i].indexOf('dynamic') < 0) && (quickDates[i].indexOf('forever') < 0)) {
                    quickDates.splice(i--, 1);
                }
            }
        }
        if (endDisabled) {
            // 结束时间禁止选择的时候，不允许使用快捷方式
            showShortcuts = false;
            quickDates = [];
        }
        let start = extra.start,
            end = extra.end,
            min = extra.min,
            max = extra.max;

        if (!start) {
            start = GetDefaultDate(min, max, formatter);
        }
        // 包含快捷方式不限的时候end=不限，不需默认初始化
        if (!end && (!showShortcuts || (quickDates.indexOf('forever') < 0))) {
            end = GetDefaultDate(min, max, formatter);
        }

        // 匹配是否为快捷日期
        let dateStart = new Date(DateFormat(start, formatter));
        let dateStartStr = DateFormat(dateStart, formatter);
        let dateEnd, dateEndStr;
        if (end == Util.foreverStr) {
            dateEnd = dateEndStr = Util.foreverStr;
        } else {
            dateEnd = new Date(DateFormat(end, formatter));
            dateEndStr = DateFormat(dateEnd, formatter);
        }
        let quickInfos = GetQuickInfos(quickDates, dateStartStr, formatter);
        let quickDateText, quickDateKey;
        // 可能匹配到多个
        for (let index = 0; index < quickInfos.length; index++) {
            let q = quickInfos[index];
            if (q.start == dateStartStr && q.end == dateEndStr) {
                quickDateText = q.text;
                quickDateKey = q.key;
            }
        }

        let dates = {
            start: dateStart, //Date
            startStr: dateStartStr,
            end: dateEnd, //Date or Forever
            endStr: dateEndStr,
            formatter,
            quickDateText,
            quickDateKey
        }

        let rangeInfo = {
            min,
            max,
            timeType,
            dateType,
            formatter,
            quickDates,
            align: extra.align,
            vsEnable,
            vs,
            vsSingle,
            startDisabled,
            endDisabled,
            dates
        }

        that.updater.set({
            viewId: that.id,
            rangeInfo: rangeInfo
        });

        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },

    render() {
        let that = this;
        that['@{fill.to.node}']();
        that['@{owner.node}'] = $('#' + that.id);
    },

    '@{fill.to.node}'() {
        let that = this;
        let rangeInfo = that.updater.get('rangeInfo');
        let dates = rangeInfo.dates,
            vs = rangeInfo.vs,
            vsSingle = rangeInfo.vsSingle,
            formatter = rangeInfo.formatter;

        let startStr = dates.startStr,
            endStr = dates.endStr,
            quickDateText = dates.quickDateText;

        let result = {
            centetTip: vs ? I18n['calendar.vs'] : I18n['calendar.to']
        }
        if (vs) {
            let today = DateFormat(GetOffsetDate(0), formatter);
            let yesterday = DateFormat(GetOffsetDate(-1), formatter);
            let map = {
                today: I18n['calendar.today'],
                yesterday: I18n['calendar.yesterday']
            };
            result.startStr = map[startStr] || startStr;
            result.endStr = map[endStr] || endStr;
        } else {
            // 非对比情况
            if (vsSingle) {
                // 选择单日
                result.startStr = startStr;
            } else {
                // 选择连续时间
                if (quickDateText) {
                    result.startStr = quickDateText;
                } else {
                    result.startStr = startStr;
                    result.endStr = endStr;
                }
            }
        }

        that.updater.digest({
            result
        })
    },

    '@{stop}<change,focusin,focusout>'(e) {
        if (!e.dates) {
            e.stopPropagation();
        }
    },

    '@{toggle}<click>'(e) {
        e.preventDefault();
        let show = this.updater.get('show');
        if (show) {
            this['@{hide}']();
        } else {
            this['@{show}']();
        }
    },

    '@{show}'() {
        let that = this;
        let updater = that.updater;
        let rangeInfo = updater.get('rangeInfo');
        let show = updater.get('show');
        if (!show) {
            updater.digest({
                show: true
            })

            let inputNode = $('#input_' + that.id),
                calNode = $('#rpcnt_' + that.id);

            let gap = 10;
            let left = 0,
                top = inputNode.outerHeight() + gap;
            if (rangeInfo.align == 'right') {
                left = inputNode.outerWidth() - calNode.outerWidth();
            }

            updater.digest({
                top,
                left
            })

            Monitor['@{add}'](that);
        }
    },

    '@{hide}'() {
        let that = this;
        let show = that.updater.get('show');
        if (show) {
            that.updater.digest({
                show: false
            })

            Monitor['@{remove}'](that);
        }
    },

    '@{range.picked}<change>'(e) {
        let that = this;
        e.stopPropagation();

        let rangeInfo = that.updater.get('rangeInfo');
        let dates = e.dates,
            vs = e.vs;
        Magix.mix(rangeInfo, {
            dates: dates,
            vs: vs
        })

        that['@{fill.to.node}']();
        that['@{hide}']();

        //支持多绑定
        that['@{owner.node}'].trigger({
            type: 'change',
            start: dates.startStr,
            end: dates.endStr,
            dates: dates,
            vs: vs
        });
    },
    '@{hide}<cancel>'(e) {
        e.stopPropagation();
        this['@{hide}']();
    },

    '@{inside}'(node) {
        let that = this;
        let inView = Magix.inside(node, that.id) ||
            Magix.inside(node, that['@{owner.node}'][0]);
        if (!inView) {
            let children = that.owner.children();
            for (let i = children.length - 1; i >= 0; i--) {
                let child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('@{inside}', [node]);
                }
                if (inView) break;
            }
        }
        return inView;
    }
});

module.exports = Rangepicker;