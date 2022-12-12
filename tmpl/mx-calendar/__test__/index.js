let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'max',
            desc: '最大可选的日期',
            type: 'string'
        }, {
            key: 'min',
            desc: '最小可选的日期',
            type: 'string',
            def: ''
        }, {
            key: 'selected',
            desc: '默认选中的日期',
            type: 'string',
            def: '1. 今天小于min，默认为min<br/>2. 今天大于max，默认为max<br/>3. 今天在可选范围之内，默认为今天'
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
            key: 'prefix',
            desc: '提示文案前缀，展示为prefix：date time',
            type: 'string',
            def: ''
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
            key: 'placeholder',
            desc: '空状态文案',
            type: 'string',
            def: '请选择'
        }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            def: 'false'
        }]

        let events = [{
            type: 'change',
            desc: '切换日期时会触发',
            params: [{
                key: 'date',
                desc: '当前日期（不包含时分秒）',
                type: 'string'
            }, {
                key: 'time',
                desc: '当前时分秒',
                type: 'string'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });

    }
});