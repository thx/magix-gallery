let Magix = require('magix');
let $ = require('$');
let I18n = require('@../../mx-medusa/util');

module.exports = Magix.View.extend({
    tmpl: '@range.html',
    render() {
        let that = this;
        let viewId = that.id;
        let options = [{
            key: 'start',
            desc: '默认选中开始日期',
            type: 'string',
            def: '根据max和min进行修正'
        }, {
            key: 'end',
            desc: '默认选中结束日期，不限的情况下end=不限即可',
            type: 'string',
            def: '根据max和min进行修正'
        }, {
            key: 'start-disabled',
            desc: '是否禁止选择开始日期<br>开始日期禁止使用的时候，只允许使用动态计算的快捷日期<br>动态计算的都是依据开始日期计算的',
            type: 'string',
            def: 'false'
        }, {
            key: 'end-disabled',
            desc: '是否禁止选中结束日期<br>结束日期禁止使用的时候，禁止快捷操作，开始日期最大可选为结束日期',
            type: 'string',
            def: 'false'
        }, {
            key: 'vsenable',
            desc: '是否可对比',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'vs',
            desc: '对比初始值',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'single',
            desc: 'vsenable=true时可生效，关闭对比的时候选择单天还是连续的时间段',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'shortcuts',
            desc: '是否有快捷方式',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'shortkeys',
            desc: `自定义快捷方式key值，<a href="javascript:;" mx-click="to({id:'${viewId}_quick'})" class="color-brand">查看备选值</a>`,
            type: 'array',
            def: 'shortcuts=true时，默认为["today","yesterday","passed7","preWeekMon","passed15","lastestThisMonth","passed30","preMonth"]'
        }, {
            key: 'max',
            desc: '最大可选的日期',
            type: 'string'
        }, {
            key: 'min',
            desc: '最小可选的日期',
            type: 'string'
        }, {
            key: 'time-type',
            desc: '时分秒选择类型，设置该值后会出现时间选择组件<br/>可选择"hour,minute,second"中的一个或者多个<br/>此外提供快捷的配置"all" = "hour,minute,second"',
            type: 'string',
            def: ''
        }, {
            key: 'align',
            desc: '日历与目标的对齐方式，left，right',
            type: 'string',
            def: 'left'
        }, {
            key: 'disabled-weeks',
            desc: '限制周几不可选，[0, 1, 2, 3, 4, 5, 6]的子集',
            type: 'array',
            def: '[]'
        }, {
            key: 'week-start',
            desc: '从周几开，0-6，0表示周日',
            type: 'number',
            def: '0'
        }, {
            key: 'inlay',
            desc: '是否需要边框，自定义trigger显示时可配置',
            type: 'boolean',
            def: 'false'
        }]

        let supportQuickDates = [{
            key: 'today',
            text: I18n['calendar.today'],
            tip: I18n['calendar.today']
        }, {
            key: 'yesterday',
            text: I18n['calendar.yesterday'],
            tip: I18n['calendar.yesterday']
        }, {
            key: 'beforeYesterday',
            text: I18n['calendar.before.yesterday'],
            tip: I18n['calendar.before.yesterday']
        }, {
            key: 'preMonth',
            text: I18n['calendar.last.month'],
            tip: I18n['calendar.last.month']
        }, {
            key: 'preWeekSun',
            text: I18n['calendar.last.week'],
            tip: I18n['calendar.last.week.sunday']
        }, {
            key: 'preWeekMon',
            text: I18n['calendar.last.week'],
            tip: I18n['calendar.last.week.monday']
        }, {
            key: 'lastestWeekSun',
            text: I18n['calendar.this.week'],
            tip: I18n['calendar.this.week.sunday']
        }, {
            key: 'lastestWeekMon',
            text: I18n['calendar.this.week'],
            tip: I18n['calendar.this.week.monday']
        }, {
            key: 'passedThisMonth',
            text: I18n['calendar.this.month'],
            tip: I18n['calendar.this.month.yestarday']
        }, {
            key: 'lastestThisMonth',
            text: I18n['calendar.this.month'],
            tip: I18n['calendar.this.month.today']
        }, {
            key: 'passed{n}',
            text: I18n['calendar.passed'] + ' n ' + I18n['calendar.unit'],
            tip: I18n['calendar.passed'] + ' n ' + I18n['calendar.unit.yesterday'] + '，' + I18n['calendar.n.arbitrary'] + '，passed1，passed15...'
        }, {
            key: 'lastest{n}',
            text: I18n['calendar.lastest'] + ' n ' + I18n['calendar.unit'],
            tip: I18n['calendar.lastest'] + ' n ' + I18n['calendar.unit.today'] + '，' + I18n['calendar.n.arbitrary'] + '，lastest1，lastest15...'
        }, {
            key: 'dynamicStart{n}',
            text: I18n['calendar.dynamic.end'].replace('${day}', 'n'),
            tip: I18n['calendar.dynamic.end.tip'].replace('${day}', 'n') + '，' + I18n['calendar.n.arbitrary'] + '，dynamicStart1，dynamicStart15...'
        }, {
            key: 'dynamicEndThisMonth',
            text: I18n['calendar.natural.month'],
            tip: I18n['calendar.natural.month.tip']
        }, {
            key: 'dynamicEndNextMonth',
            text: I18n['calendar.next.month'],
            tip: I18n['calendar.next.month.tip']
        }, {
            key: 'forever',
            text: I18n['calendar.forever'],
            tip: I18n['calendar.forever.tip']
        }];

        that.updater.digest({
            viewId,
            options,
            supportQuickDates
        });
    }
});