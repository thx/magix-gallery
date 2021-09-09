let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'simple',
            desc: '显示模式：<br/>simple=true：只区分工作日和双休日<br/>simple=false：每日单独选择',
            type: 'boolean',
            def: false
        }, {
            key: 'groups',
            desc: `<pre>分组信息，优先级groups &gt; simple，当指定groups时，忽略simple配置：
            
1. 简单配置方式
假设分组为周一至周四，周五至周日，则groups=[1234, 567]；
假设分组为周一，周二至周四，周五，周六至周日，则groups=[1, 234, 5, 67]；
以此类推

2. 完全自定义，其中：
value：1234567，周几的组合1~7
disabledTimes：array [0, 1, 2 ... 22, 23]，禁止操作的小时0~23

示例：groups = [{
    text: '工作日',
    value: 12345
}, {
    text: '周六',
    value: 6
}, {
    text: '周日',
    value: 7,
    disabledTimes: [19, 20, 21, 22, 23] // 19 ~ 23点禁止操作
}]

</pre>`,
            type: 'array',
            def: '[12345, 67]'
        }, {
            key: 'selected',
            desc: `<pre>
当前选中值，week表示周几（1周一，7周日，以此类推），
times表示当前选中小时，0 ~ 23
selected = [{
    week: 1, //周一
    times: [2,3,4]
},
{
    week: 2, //周二
    times: [2,3,4]
},
...
{
    week: 7, //周日
    times: [1,2,4]
}]

备注：也支持合并配置，假设周一至周六都选中[2,3,4]，周日选中[1,2,4]，则可配置为
selected = [{
    week: 123456, //周一至周六
    times: [2,3,4]
},
{
    week: 7, //周日
    times: [1,2,4]
}]
</pre>`,
            type: 'array',
            def: '[]'
        }, {
            key: 'tip',
            desc: '右下角提示文案信息',
            type: 'string',
            def: ''
        }, {
            key: 'min',
            desc: '开始时间',
            type: 'number',
            def: '0'
        }, {
            key: 'max',
            desc: '结束时间',
            type: 'number',
            def: '24'
        }]

        let events = [{
            type: 'change',
            desc: '选择项发生变化时触发',
            params: [{
                key: 'selected',
                desc: '当前选中项完整对象',
                type: 'array'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});