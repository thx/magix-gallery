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
            desc: '已选中的最底层value列表，传入bottom-values双向绑定也为bottom-values',
            type: 'array',
            def: ''
        }, {
            key: 'real-values',
            desc: '已选中的汇总到父节点的value值，传入real-values双向绑定也为real-values<br/>与bottom-values互斥',
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
            desc: '表示父节点value的字段',
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
        }, {
            key: 'searchbox',
            desc: '是否开启搜索框',
            type: 'boolean',
            def: 'false'
        }]

        let events = [{
            type: 'change',
            desc: '切换某个标签状态时触发',
            params: [{
                key: 'bottomValues',
                desc: '已选中的最底层value列表，入参为bottom-values时返回',
                type: 'array'
            }, {
                key: 'bottomItems',
                desc: '已选中的最底层完整对象，入参为bottom-values时返回',
                type: 'array'
            }, {
                key: 'realValues',
                desc: '已选中的汇总到父节点的数据，入参为real-values时返回',
                type: 'array'
            }, {
                key: 'realItems',
                desc: '已选中的汇总到父节点完整对象，入参为real-values时返回',
                type: 'array'
            }]
        }]

        that.updater.digest({
            viewId: that.id,
            options,
            events
        });
    }
});