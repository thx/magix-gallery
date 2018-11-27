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
            key: 'bottom-values',
            desc: '已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据',
            type: 'array',
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
            desc: '表示父节点id的字段',
            type: 'string',
            def: 'pValue'
        }, {
            key: 'need-all',
            desc: '是否需要全选功能',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'read-only',
            desc: '是否只是展示',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'has-line',
            desc: '是否有连接线',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'need-expand',
            desc: '是否需要展开收起功能',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'close',
            desc: '默认状态下是否收起',
            type: 'boolean',
            def: 'false'
        }]

        that.updater.digest({
            viewId: that.id,
            options
        });
    }
});