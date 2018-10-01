let Magix = require('magix');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render: function() {
        let options = [{
            key: 'list',
            desc: `<pre>
页面展示数据列表，例如：
[{
    text: '计划1',
    subs: [{
        value: 11,
        text: '单元1-1'
    }, {
        value: 12,
        text: '单元1-2'
    }]
}, {
    text: '计划2',
    subs: [{
        value: 21,
        text: '单元2-1'
    }]
}]
</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'selected',
            desc: '选中的sub的value',
            type: 'string',
            def: ''
        }, {
            key: 'text-key',
            desc: '渲染子节点text时读取的key',
            type: 'string',
            def: 'text'
        }, {
            key: 'value-key',
            desc: '渲染子节点value时读取的key',
            type: 'string',
            def: 'value'
        }, {
            key: 'parent-text-key',
            desc: '渲染父节点text时读取的key',
            type: 'string',
            def: 'text'
        }, {
            key: 'prefix',
            desc: '子节点文案前缀',
            type: 'string',
            def: ''
        }, {
            key: 'parent-prefix',
            desc: '父节点文案前缀',
            type: 'string',
            def: ''
        }, {
            key: 'need-expand',
            desc: '是否需要展开收起功能',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'close',
            desc: '默认状态下是否收起',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'max-height',
            desc: '操作区域最大高度，当有一键收起功能时，一键收起吸顶',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            options
        });
    }
});