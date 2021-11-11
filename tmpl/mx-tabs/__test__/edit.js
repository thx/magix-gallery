let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@edit.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>
对象数组，格式如下：
[{
    value:1,
    text:"选项1",
    link:"外链",
    tagContent:"自定义打标内容，优先级tagContent > tag",
    tag:"打标标签",
    color: '打标自定义颜色，默认红色，只对tag生效',
    tip:"提示信息"
}]</pre>`, type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: '不传默认取list第一个'
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
            key: 'editable',
            desc: '是否支持增删操作，默认true',
            type: 'boolean',
            def: 'true'
        }]

        let events = [{
            type: 'change',
            desc: '切换tab时触发',
            params: [{
                key: 'list',
                desc: 'tab数组',
                type: 'array'
            }, {
                key: 'selected',
                desc: '当前选中value，同value',
                type: 'string'
            }, {
                key: 'value',
                desc: '当前选中value',
                type: 'string'
            }, {
                key: 'text',
                desc: '当前选中text',
                type: 'string'
            }, {
                key: 'item',
                desc: '当前选中完整对象',
                type: 'object'
            }]
        }, {
            type: 'add',
            desc: '点击新增按钮时触发',
            params: [{
                key: 'list',
                desc: 'tab数组',
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