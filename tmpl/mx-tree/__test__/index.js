let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let that = this;

        let options = [{
            key: 'mode',
            desc: '显示模式<br/>checkbox：多选（默认）<br/>radio：单选<br/>readonly：只读',
            type: 'string',
            def: 'checkbox'
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
            key: 'bottom-values',
            desc: '多选模式下，已选中的最底层value列表，传入bottom-values双向绑定也为bottom-values',
            type: 'array',
            def: ''
        }, {
            key: 'real-values',
            desc: '多选模式下，已选中的汇总到父节点的value值，传入real-values双向绑定也为real-values<br/>与bottom-values互斥',
            type: 'array',
            def: ''
        }, {
            key: 'bottom-value',
            desc: '单选模式下，已选中的最底层value，传入bottom-value双向绑定也为bottom-value',
            type: 'string',
            def: ''
        }, {
            key: 'real-value',
            desc: '单选模式下，已选中的任意节点的value，传入real-value双向绑定也为real-value<br/>与bottom-value互斥',
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
            key: 'need-all',
            desc: '是否需要全选功能',
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
            desc: '是否开启搜索框<br/>搜索时展开高亮匹配项，并将匹配项滚动到可视范围之内',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'width',
            desc: '搜索框宽度',
            type: 'number',
            def: '100%'
        }, {
            key: 'height',
            desc: '树最大高度，超出时滚动',
            type: 'number',
            def: ''
        }]

        let events = [{
            type: 'change',
            desc: '切换某个标签状态时触发',
            params: [{
                key: 'bottomValues',
                desc: '多选模式下，已选中的最底层value列表，入参为bottom-values时返回',
                type: 'array'
            }, {
                key: 'bottomItems',
                desc: '多选模式下，已选中的最底层完整对象，入参为bottom-values时返回',
                type: 'array'
            }, {
                key: 'realValues',
                desc: '多选模式下，已选中的汇总到父节点的数据，入参为real-values时返回',
                type: 'array'
            }, {
                key: 'realItems',
                desc: '多选模式下，已选中的汇总到父节点完整对象，入参为real-values时返回',
                type: 'array'
            }, {
                key: 'bottomValue',
                desc: '单选模式下，已选中的叶子节点value',
                type: 'string'
            }, {
                key: 'realValue',
                desc: '单选模式下，已选中的任意节点value',
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