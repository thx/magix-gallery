let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@multi.html',
    render() {
        let that = this;

        let options = [{
            key: 'multiple',
            desc: '是否为多选',
            type: 'boolean',
            def: 'false',
        }, {
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
            desc: `<pre>选中叶子节点value值，支持：
1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；
2. 数组[1,2,3]，此时双向绑定返回值为数组；

不传默认为空，返回默认为逗号分隔</pre>`,
            type: 'string | array',
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
            key: 'searchbox',
            desc: '是否开启搜索框',
            type: 'boolean',
            def: 'false'
        }]

        let events = [{
            type: 'change',
            desc: '选中某个叶子节点时触发',
            params: [{
                key: 'selected',
                desc: '当前选中value值',
                type: 'string'
            }]
        }]

        that.updater.digest({
            viewId: that.id,
            options,
            events,
        });
    }
});