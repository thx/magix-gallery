let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>可搜素类型列表
支持简单数组，例如：
[1, 2, 3, 4]

或者对象数组，例如：[{
    text: '文案',
    value: '跟后端交互字段'
}]
</pre>`,
            type: 'array',
            def: ''
        }, {
            key: 'selected',
            desc: '已选中项value值，动态更新数据的时候，如果初始list为空，请使用item传入已选项',
            type: 'string',
            def: ''
        }, {
            key: 'item',
            desc: `<pre>动态list时初始化已选状态
item: {
    text: '文案',
    value: '选中值'
}
同时设置selected和item时，已item为准
</pre>`,
            type: 'object',
            def: ''
        }, {
            key: 'dynamic-enter',
            desc: '动态list时，回车直接搜索当前关键词',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'search-list',
            desc: `<pre>搜索类型列表
{
    text: "类型",
    value: "类型value",
} </pre>`,
            type: 'object',
            def: '[]'
        }, {
            key: 'search-value',
            desc: '当前选中搜索类型',
            type: 'string',
            def: 'search-list[0].value'
        }, {
            key: 'search-width',
            desc: '搜索框宽度，默认预留两个字符宽度，可配置 100px 或者 50%',
            type: 'string',
            def: '两个字符宽度'
        }, {
            key: 'list-text',
            desc: '可搜索类型展示文案',
            type: 'string',
            def: 'text'
        }, {
            key: 'list-value',
            desc: '可搜索类型对应的key值',
            type: 'string',
            def: 'value'
        }, {
            key: 'placeholder',
            desc: 'placeholder提示',
            type: 'string',
            def: '搜素'
        }, {
            key: 'type',
            desc: `<pre>搜索类型：
1. all：text或者value中包含关键词的
2. text：只有text中包含关键词的
3. value：只有value中包含关键词的</pre>`,
            type: 'string',
            def: 'all'
        }, {
            key: 'align',
            desc: '左对齐还是右对齐，left or right',
            type: 'string',
            def: 'left'
        }]

        let events = [{
            type: 'show',
            desc: '输入关键词，出现提示框的时候触发，常用于动态更新可选项',
            params: [{
                key: 'keyword',
                desc: '当前输入的关键词',
                type: 'string'
            }]
        }, {
            type: 'change',
            desc: '选中下拉框中某个选项时触发',
            params: [{
                key: 'selected',
                desc: '当前选中value，selected = item.value',
                type: 'string'
            }, {
                key: 'item',
                desc: '当前选中完整对象',
                type: 'object'
            }, {
                key: 'searchValue',
                desc: '多类型搜索时，当前选中的搜索类型value值',
                type: 'string'
            }]
        }];

        let methods = [{
            key: 'update(list: Array)',
            desc: `<pre>说明：动态更新下拉列表数据

调用示例：
let instance = Vframe.get(id);
instance.invoke('update', [list]);</pre>`,
        }, {
            key: 'showLoading()',
            desc: `<pre>说明：动态更新数据时有延时，增加loading

调用示例：
let instance = Vframe.get(id);
instance.invoke('showLoading');</pre>`,
        }, {
            key: 'hideLoading()',
            desc: `<pre>说明：动态更新数据完毕，去掉loading

调用示例：
let instance = Vframe.get(id);
instance.invoke('hideLoading');</pre>`,
        }];

        this.updater.digest({
            viewId: this.id,
            options,
            events,
            methods,
        });
    }
});