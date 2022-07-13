let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@card.html',
    render() {
        let that = this;

        let options = [{
            key: 'list',
            desc: `<pre>
页面展示数据列表，例如：
[{
    value: 1,
    pValue: '', //父节点value值，根节点无
    text: '计划1',
    text: '直通车',
    img: '//img.alicdn.com/tfs/TB1HrXVkbH1gK0jSZFwXXc7aXXa-92-92.png',
    tip: '关键词搜索推广营销工具'
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
            key: 'tip-key',
            desc: '渲染tip时读取的key',
            type: 'string',
            def: 'tip'
        }, {
            key: 'img-key',
            desc: '渲染img时读取的key',
            type: 'string',
            def: 'img'
        }, {
            key: 'width',
            desc: '单个卡片宽度',
            type: 'number',
            def: '280'
        }, {
            key: 'height',
            desc: '单个卡片高度',
            type: 'number',
            def: '360'
        }, {
            key: 'header-title',
            desc: '卡片标题',
            type: 'string',
            def: ''
        }, {
            key: 'header-tip',
            desc: '标题旁提示',
            type: 'string',
            def: ''
        }]

        let events = [{
            type: 'change',
            desc: '选中某个叶子节点时触发',
            params: [{
                key: 'item',
                desc: '当前选中完整对象',
                type: 'object'
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