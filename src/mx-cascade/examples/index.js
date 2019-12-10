let Magix = require('magix');
let $ = require('$');

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
    pValue: '', //父节点value值，根节点无
    text: '计划1'
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
            desc: '已选中的最底层value值',
            type: 'string',
            def: ''
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
        }, {
            key: 'parent-key',
            desc: '表示父节点value的字段',
            type: 'string',
            def: 'pValue'
        }, {
            key: 'trigger-type',
            desc: `<div>展现子列表的方式</div>
<div>1. click</div>
<div>2. hover</div>`,
            type: 'string',
            def: 'click'
        }]

        let events = [{
            type: 'change',
            desc: '选中某个叶子节点时触发',
            params: [{
                key: 'item',
                desc: '当前选中叶子节点完整对象',
                type: 'object'
            }, {
                key: 'items',
                desc: '当前选中项完整的父子关系，数组顺序为父子关系',
                type: 'array'
            }, {
                key: 'selected',
                desc: '当前选中value值',
                type: 'string'
            }]
        }]

        that.updater.digest({
            viewId: that.id,
            options,
            events
        });
    }
});