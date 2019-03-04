let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@bd.html',
    render() {
        let options = [{
            key: 'list',
            desc: `<pre>列表数组
1. 简单数组[1,2,3]
2. 对象数组，如[{
    value:1,
    text:"a"
}]</pre>`,
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string|array',
            def: '单选选中值：单值<br/><br/>多选选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
        }, {
            key: 'trigger-type',
            desc: '浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）',
            type: 'string',
            def: 'click'
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
            key: 'parents',
            desc: `<pre>
分组数组，格式如下：
[{
    text: '组文案',
    value: '分组值，对应list的pValue'
}]
</pre>`,
            type: 'array',
            def: ''
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
        }, {
            key: 'keyword',
            desc: '搜索关键词',
            type: 'string',
            def: ''
        }, {
            key: 'height',
            desc: '下拉框最大高度',
            type: 'number',
            def: '250'
        }, {
            key: 'mx-disabled',
            desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;',
            type: '',
            def: ''
        }]

        let events = [{
            type: 'change',
            desc: '',
            params: [{
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
            }, {
                key: 'selected',
                desc: '当前选中value，同value',
                type: 'string'
            }, {
                key: 'keyword',
                desc: '当前搜索关键词',
                type: 'string'
            }]
        }]
        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});