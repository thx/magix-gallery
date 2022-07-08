let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc: `面板数据<pre>
list: [{
    disabled: true / false, //是否禁用
    expand: true / false, //是否展开，disabled=true是expand=true也不展开，所有都不配置默认展开非禁用第一个
    title: '面板标题',
    content: '面板内容',
    view: '面板自定义view，优先级view > content',
    arrow: '自定义展开箭头，默认为 &gt;'
}]
</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'mode',
            desc: '显示模式，可选如下<br/>common：默认灰色样式<br/>ghost：幽灵模式',
            type: 'string',
            def: 'common'
        }, {
            key: 'only-one',
            desc: '是否只展开一个',
            type: 'boolean',
            def: 'true'
        }]

        let events = [{
            type: 'change',
            desc: '选中下拉框中某个选项时触发',
            params: [{
                key: 'expands',
                desc: '[true, false, ...]，当前每个实体对象的展开收起状态',
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