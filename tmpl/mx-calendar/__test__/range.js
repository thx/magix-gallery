let Magix = require('magix');
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
            desc: `shortcuts=true时生效，支持以下两个形式：<br/>
1.配置备选快捷方式key值，如["today","yesterday"]，<a href="javascript:;" mx-click="to({id:'${viewId}_quick'})" class="color-brand">点击查看所有备选值</a><br/>
2.自定义快捷方式，格式如下<pre>[{
    key: '', //唯一key
    text: '', //显示文案
    tip: '', //快捷方式说明，没有为空即可
    start: '2019-06-21', //对应的开始时间
    end: '2019-06-24' //对应的结束时间
}]</pre>`,
            type: 'array',
            def: `<pre>[
    "today",
    "yesterday",
    "passed7",
    "preWeekMon",
    "passed15",
    "lastestThisMonth",
    "passed30",
    "preMonth"
]</pre>`
        }, {
            key: 'max',
            desc: '最大可选的日期',
            type: 'string'
        }, {
            key: 'min',
            desc: '最小可选的日期',
            type: 'string'
        }, {
            key: 'max-gap',
            desc: '可选择的最大天数间隔',
            type: 'number',
            def: ''
        }, {
            key: 'min-gap',
            desc: '可选择的最小天数间隔',
            type: 'number',
            def: ''
        }, {
            key: 'date-type',
            desc: `<pre>
年月日选择类型：
可选择"year,month,day"中的一个或者多个
此外"all" = "year,month,day" = ""，不设置的时候默认年月日都显示
</pre>`,
            type: 'string',
            def: ''
        }, {
            key: 'time-type',
            desc: `<pre>
时分秒选择类型：
1.设置该值后会出现时间选择组件
  可选择"hour,minute,second"中的一个或者多个
  此外提供快捷的配置"all" = "hour,minute,second"
2.不设置无时分秒选择            
            </pre>`,
            type: 'string',
            def: ''
        }, {
            key: 'formatter',
            desc: 'date格式',
            type: 'string',
            def: 'YYYY-MM-DD'
        }, {
            key: 'align',
            desc: '日历选择面板与目标的对齐方式，可选left和right',
            type: 'string',
            def: 'left'
        }, {
            key: 'text-align',
            desc: '选中结果文案对齐方式，可选left，right和center，默认居中对齐',
            type: 'string',
            def: 'center'
        }, {
            key: 'disabled-weeks',
            desc: '限制周几不可选，[0, 1, 2, 3, 4, 5, 6]的子集',
            type: 'array',
            def: '[]'
        }, {
            key: 'disabled-days',
            desc: '限制某些具体日期不可选，例如["2022-11-20", "2022-11-28"]',
            type: 'array',
            def: '[]'
        }, {
            key: 'week-start',
            desc: '从周几开，0-6，0表示周日',
            type: 'number',
            def: '0'
        }, {
            key: 'disabled',
            desc: '是否禁用',
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
            text: I18n['calendar.dynamic.end'].replace('{day}', 'n'),
            tip: I18n['calendar.dynamic.end.tip'].replace('{day}', 'n') + '，' + I18n['calendar.n.arbitrary'] + '，dynamicStart1，dynamicStart15...'
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

        let events = [{
            type: 'change',
            desc: '切换日期，切换对比时会触发',
            params: [{
                key: 'start',
                desc: '开始时间，包含时分秒',
                type: 'string'
            }, {
                key: 'end',
                desc: '结束时间，包含时分秒',
                type: 'string'
            }, {
                key: 'vs',
                desc: '是否对比',
                type: 'boolean'
            }, {
                key: 'dates',
                desc: `<pre>当前状态完整对象
{
    start: 'Date，开始时间',
    startStr: 'string，dates.startStr == start',
    end: 'Date，结束时间',
    endStr: 'string，dates.endStr == end',
    quickDateKey: 'string，当前匹配的快捷日期key',
    quickDateText: 'string，当前匹配的快捷日期文案'
}
</pre>`,
                type: 'object'
            }]
        }];

        that.updater.digest({
            viewId,
            options,
            events,
            supportQuickDates
        });
    }
});