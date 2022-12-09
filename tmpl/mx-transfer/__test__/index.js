let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;

        let options = [{
            key: 'list',
            desc: `<pre>
页面展示数据列表，例如：
[{
    value: 1,
    text: '计划1',
    tag: 'NEW'
}, {
    value: 11,
    pValue: 1,
    text: '单元1-1'
}]
</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string | array',
            def: '选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
        }, {
            key: 'text-key',
            desc: '渲染text时读取的key',
            type: 'string',
            def: 'text'
        }, {
            key: 'value-key',
            desc: '渲染value时读取的key',
            type: 'string',
            def: 'value'
        }];

        let events = [{
            type: 'change',
            desc: '选中项改变时触发',
            params: [{
                key: 'selected',
                desc: '当前选中值，初始化为什么类型就保持什么类型，默认string',
                type: 'string | array'
            }, {
                key: 'values',
                desc: '当前选中value数组',
                type: 'array'
            }, {
                key: 'texts',
                desc: '当前选中text数组',
                type: 'array'
            }, {
                key: 'items',
                desc: '当前选中值完整对象数组',
                type: 'array'
            }]
        }];

        that.updater.digest({
            viewId: that.id,
            options,
            events,
        });
    }
});